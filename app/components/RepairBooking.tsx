"use client";

import { useRef, useState, type FormEvent } from "react";

export default function RepairBooking() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pending = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const previousOverflow = useRef("");

  function open() {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/repair-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(15_000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        throw new Error(result.error || "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.");
      }
      setStatus("success");
      form.reset();
    } catch (cause) {
      setError(cause instanceof Error && cause.name !== "TimeoutError" && cause.name !== "TypeError"
        ? cause.message
        : "Не удалось подтвердить отправку. Попробуйте ещё раз или позвоните нам.");
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  return (
    <>
      <button type="button" onClick={open} className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-[#ff6a00] px-8 py-4 text-center text-sm font-medium transition hover:bg-[#ff7a1a] sm:justify-self-start lg:justify-self-end">
        Записаться на сервис
      </button>
      <dialog ref={dialog} aria-labelledby="repair-booking-title" className="repair-dialog" onClose={() => {
        document.body.style.overflow = previousOverflow.current;
      }} onCancel={(event) => { if (pending.current) event.preventDefault(); }}>
        <button type="button" aria-label="Закрыть форму" disabled={status === "sending"} onClick={() => dialog.current?.close()} className="absolute top-3 right-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-2xl text-white/70 hover:text-white disabled:opacity-40">×</button>
        <p className="type-eyebrow pr-10 text-[#ff6a00] uppercase">Ремонт автомобиля</p>
        <h2 id="repair-booking-title" className="mt-3 pr-7">{status === "success" ? "Заявка отправлена" : "Записаться на сервис"}</h2>
        {status === "success" ? (
          <div role="status" className="mt-6">
            <div aria-hidden="true" className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/10 text-2xl text-[#ff6a00]">✓</div>
            <p className="text-lg font-medium">Ждите звонка администратора.</p>
            <p className="type-body mt-3">Уточним проблему и согласуем удобное время для визита.</p>
            <button type="button" onClick={() => dialog.current?.close()} className="repair-submit mt-7">Понятно</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5">
            <p className="type-secondary mb-5">Расскажите о машине — администратор перезвонит и поможет с записью.</p>
            <fieldset disabled={status === "sending"} className="grid gap-4 disabled:opacity-60">
              <label className="repair-label">Ваше имя
                <input name="name" autoComplete="given-name" required maxLength={80} placeholder="Как к вам обращаться" className="repair-input" autoFocus />
              </label>
              <label className="repair-label">Номер телефона
                <input name="phone" type="tel" autoComplete="tel" required maxLength={25} pattern="[+0-9\(\)\s.\-]{10,25}" placeholder="+7 (999) 123-45-67" className="repair-input" title="Укажите номер телефона с кодом страны" />
              </label>
              <label className="repair-label">Машина
                <input name="car" required maxLength={120} placeholder="Марка, модель и год выпуска" className="repair-input" />
              </label>
              <label className="repair-label">Краткое описание проблемы
                <textarea name="problem" required maxLength={1500} rows={3} placeholder="Что случилось или какие работы нужны" className="repair-input resize-y" />
              </label>
              <div className="hidden" aria-hidden="true"><label>Сайт<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-white/65">
                <input name="consent" type="checkbox" value="yes" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#ff6a00]" />
                <span>Согласен на обработку персональных данных для обратного звонка согласно <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">политике конфиденциальности</a>.</span>
              </label>
              <button type="submit" className="repair-submit">{status === "sending" ? "Отправляем…" : "Отправить заявку"}</button>
            </fieldset>
            {status === "error" && <p role="alert" className="mt-4 text-sm text-orange-200">{error} <a href="tel:+79955967993" className="whitespace-nowrap underline">+7 (995) 596-79-93</a></p>}
          </form>
        )}
      </dialog>
    </>
  );
}
