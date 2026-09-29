import { createHash } from "node:crypto";

// Bounded, per-process protection against rapid repeats; no client data stored.
const attempts = new Map<string, number[]>();
const delivered = new Map<string, number>();
const inFlight = new Set<string>();
const WINDOW = 10 * 60 * 1000;
const MAX_BODY = 16_384;

function failure(error: string, status: number) {
  return Response.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Next.js may use its internal hostname (localhost) in request.url even
  // when the browser connects to 127.0.0.1. Host retains the requested host.
  const publicUrl = new URL(request.url);
  const host = request.headers.get("host");
  if (host) publicUrl.host = host;
  // An explicit public origin also works behind a TLS-terminating proxy.
  // Do not trust client-supplied forwarded headers for this security check.
  let allowedOrigin = publicUrl.origin;
  if (process.env.SITE_URL) {
    try {
      const configuredUrl = new URL(process.env.SITE_URL);
      if (!["http:", "https:"].includes(configuredUrl.protocol)) throw new Error("Invalid protocol");
      allowedOrigin = configuredUrl.origin;
    } catch {
      return failure("Запись временно недоступна. Позвоните нам.", 503);
    }
  }
  if (origin && origin !== allowedOrigin) return failure("Недопустимый источник запроса.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return failure("Ожидается JSON.", 415);
  if (Number(request.headers.get("content-length")) > MAX_BODY) return failure("Слишком длинная заявка.", 413);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw) > MAX_BODY) return failure("Слишком длинная заявка.", 413);
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return failure("Некорректная заявка.", 400);
    body = parsed as Record<string, unknown>;
  } catch { return failure("Некорректная заявка.", 400); }

  const text = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
  const name = text("name");
  const phone = text("phone");
  const car = text("car");
  const problem = text("problem");
  if (text("website")) return failure("Не удалось отправить заявку.", 400);
  if (!name || name.length > 80 || !car || car.length > 120 || !problem || problem.length > 1500 || text("consent") !== "yes") {
    return failure("Заполните все поля и подтвердите согласие на обработку данных.", 400);
  }
  const digits = phone.replace(/\D/g, "");
  if (phone.length > 25 || !/^[+\d\s().-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
    return failure("Проверьте номер телефона: от 10 до 15 цифр с кодом страны.", 400);
  }
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return failure("Запись временно недоступна. Позвоните нам.", 503);

  const hash = (value: string) => createHash("sha256").update(value).digest("hex");
  const key = hash(JSON.stringify([name, digits, car, problem]));
  const phoneKey = hash(digits);
  const now = Date.now();
  for (const [id, time] of delivered) if (time < now - WINDOW) delivered.delete(id);
  for (const [id, times] of attempts) if (times.every(time => time < now - WINDOW)) attempts.delete(id);
  if (delivered.has(key)) return Response.json({ ok: true });
  if (inFlight.has(key)) return failure("Заявка уже отправляется. Подождите немного.", 409);
  const recent = (attempts.get(phoneKey) || []).filter(time => time > now - WINDOW);
  if (recent.length >= 3 || inFlight.size >= 20) return failure("Слишком много заявок. Попробуйте через 10 минут или позвоните нам.", 429);
  if (attempts.size >= 1000) attempts.delete(attempts.keys().next().value!);
  attempts.set(phoneKey, [...recent, now]);
  inFlight.add(key);
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: ["🚨 РЕМОНТ АВТО — СРОЧНО ПЕРЕЗВОНИТЬ", "Новая заявка на ремонт автомобиля с сайта гаража.нет", "", `👤 Имя: ${name}`, `📞 Телефон: ${phone}`, `🚗 Машина: ${car}`, `🔧 Проблема: ${problem}`, "", "Клиент ждёт звонка администратора. Время визита ещё не согласовано."].join("\n"),
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8_000),
    });
    const result = await response.json();
    if (!response.ok || result?.ok !== true) return failure("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.", 502);
    if (delivered.size >= 1000) delivered.delete(delivered.keys().next().value!);
    delivered.set(key, now);
    return Response.json({ ok: true });
  } catch {
    return failure("Не удалось подтвердить отправку. Попробуйте ещё раз или позвоните нам.", 502);
  } finally { inFlight.delete(key); }
}
