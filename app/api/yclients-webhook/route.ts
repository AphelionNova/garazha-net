type JsonRecord = Record<string, unknown>;

const DEDUP_TTL_MS = 24 * 60 * 60 * 1000;
const MAX_DEDUP_ENTRIES = 1_000;
const MAX_BODY_BYTES = 256 * 1024;
const deliveredRecords = new Map<string, number>();

function isRecord(value: unknown): value is JsonRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function asRecord(value: unknown): JsonRecord {
  return isRecord(value) ? value : {};
}

function asText(value: unknown): string | undefined {
  if (typeof value === "string") {
    const text = value.trim();
    return text || undefined;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return undefined;
}

function firstText(...values: unknown[]): string | undefined {
  for (const value of values) {
    const text = asText(value);
    if (text) return text;
  }

  return undefined;
}

function getClientName(data: JsonRecord): string | undefined {
  const client = asRecord(data.client);
  const explicitName = firstText(client.display_name, data.client_name);
  if (explicitName) return explicitName;

  const parts = [client.name, client.surname, client.patronymic]
    .map(asText)
    .filter((part): part is string => Boolean(part));

  return parts.length ? parts.join(" ") : firstText(data.name);
}

function getServiceNames(data: JsonRecord): string | undefined {
  if (!Array.isArray(data.services)) {
    return firstText(data.service_name, data.service);
  }

  const services = data.services
    .map((service) => {
      const item = asRecord(service);
      return firstText(item.title, item.name, item.booking_title);
    })
    .filter((service): service is string => Boolean(service));

  return services.length ? services.join(", ") : undefined;
}

function getStaffName(data: JsonRecord): string | undefined {
  const staff = asRecord(data.staff);
  return firstText(
    staff.display_name,
    staff.name,
    data.staff_name,
    data.employee_name,
  );
}

function getDateAndTime(data: JsonRecord): {
  date?: string;
  time?: string;
} {
  const raw = firstText(data.datetime, data.date, data.seance_date);
  if (!raw) return {};

  const match = raw.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}:\d{2})/);
  if (!match) return { date: raw };

  return { date: match[1], time: match[2] };
}

function buildTelegramMessage(payload: JsonRecord): string {
  const data = asRecord(payload.data);
  const client = asRecord(data.client);
  const { date, time } = getDateAndTime(data);
  const lines = ["🟠 НОВАЯ ЗАПИСЬ"];

  const fields: Array<[string, string | undefined]> = [
    ["👤 Клиент", getClientName(data)],
    ["📞 Телефон", firstText(client.phone, data.client_phone, data.phone)],
    ["✉️ Email", firstText(client.email, data.client_email, data.email)],
    ["🔧 Услуга", getServiceNames(data)],
    ["📅 Дата", date],
    ["🕐 Время", time],
    ["👨‍🔧 Сотрудник", getStaffName(data)],
    ["🆔 Запись", firstText(payload.resource_id, data.id)],
  ];

  for (const [label, value] of fields) {
    if (value) lines.push(`${label}: ${value}`);
  }

  const comment = asText(data.comment);
  if (comment) lines.push(`💬 Комментарий: ${comment}`);

  return lines.join("\n");
}

function cleanExpiredDedupEntries(now: number): void {
  for (const [key, expiresAt] of deliveredRecords) {
    if (expiresAt <= now) deliveredRecords.delete(key);
  }

  while (deliveredRecords.size > MAX_DEDUP_ENTRIES) {
    const oldestKey = deliveredRecords.keys().next().value;
    if (typeof oldestKey !== "string") break;
    deliveredRecords.delete(oldestKey);
  }
}

async function getDedupKey(payload: JsonRecord, rawBody: string): Promise<string> {
  const data = asRecord(payload.data);
  const recordId = firstText(payload.resource_id, data.id);
  const companyId = firstText(payload.company_id, data.company_id) ?? "unknown";

  if (recordId) return `${companyId}:record:${recordId}:create`;

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(rawBody),
  );
  const hash = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return `${companyId}:record:${hash}:create`;
}

function validatePayload(payload: unknown):
  | { ok: true; payload: JsonRecord }
  | { ok: false; error: string } {
  if (!isRecord(payload)) {
    return { ok: false, error: "payload_must_be_an_object" };
  }

  const resource = asText(payload.resource);
  const status = asText(payload.status);

  if (!resource || !status) {
    return { ok: false, error: "resource_and_status_are_required" };
  }

  if (!["create", "update", "delete"].includes(status.toLowerCase())) {
    return { ok: false, error: "unsupported_status" };
  }

  if (!isRecord(payload.data)) {
    return { ok: false, error: "data_must_be_an_object" };
  }

  if (resource.toLowerCase() === "record") {
    const recordId = firstText(payload.resource_id, payload.data.id);
    if (!recordId) {
      return { ok: false, error: "record_id_is_required" };
    }
  }

  return { ok: true, payload };
}

export async function GET() {
  return Response.json({ ok: true, service: "yclients-webhook" });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  let rawBody: string;
  let parsedPayload: unknown;

  try {
    rawBody = await request.text();
    if (!rawBody || new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: rawBody ? "payload_too_large" : "empty_body" },
        { status: rawBody ? 413 : 400 },
      );
    }
    parsedPayload = JSON.parse(rawBody);
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const validation = validatePayload(parsedPayload);
  if (!validation.ok) {
    return Response.json(
      { ok: false, error: "invalid_payload", details: validation.error },
      { status: 400 },
    );
  }

  const payload = validation.payload;

  const resource = firstText(payload.resource)?.toLowerCase();
  const status = firstText(payload.status)?.toLowerCase();

  console.info("YCLIENTS webhook event", {
    resource,
    status,
    record_id: firstText(payload.resource_id, asRecord(payload.data).id),
    comment_present: Boolean(asText(asRecord(payload.data).comment)),
  });

  if (resource !== "record" || status !== "create") {
    return Response.json({ ok: true, ignored: true });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("YCLIENTS webhook: Telegram environment is not configured");
    return Response.json(
      { ok: false, error: "telegram_not_configured" },
      { status: 500 },
    );
  }

  const now = Date.now();
  cleanExpiredDedupEntries(now);
  const dedupKey = await getDedupKey(payload, rawBody);

  if (deliveredRecords.has(dedupKey)) {
    return Response.json({ ok: true, duplicate: true });
  }

  deliveredRecords.set(dedupKey, now + DEDUP_TTL_MS);

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildTelegramMessage(payload),
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(8_000),
      },
    );

    const telegramResult: unknown = await telegramResponse.json().catch(() => null);
    const telegramAccepted =
      telegramResponse.ok &&
      isRecord(telegramResult) &&
      telegramResult.ok === true;

    if (!telegramAccepted) {
      deliveredRecords.delete(dedupKey);
      console.error(
        "YCLIENTS webhook: Telegram request failed",
        telegramResponse.status,
      );
      return Response.json(
        { ok: false, error: "telegram_delivery_failed" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, delivered: true });
  } catch (error) {
    deliveredRecords.delete(dedupKey);
    console.error(
      "YCLIENTS webhook: Telegram delivery error",
      error instanceof Error ? error.name : "unknown_error",
    );
    return Response.json(
      { ok: false, error: "telegram_delivery_failed" },
      { status: 502 },
    );
  }
}
