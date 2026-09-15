"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Тарифы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#how", label: "Как это работает" },
  { href: "#contacts", label: "Контакты" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-sm"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Мобильная навигация"
          className="absolute left-3 right-3 top-full z-50 -mt-1 overflow-hidden rounded-[16px] border border-white/10 bg-[#090909]/95 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mx-2 my-1 border-t border-white/10" />
          <a
            href="https://t.me/garagvo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[18px] w-[18px] shrink-0 text-[#ff6a00]"
              fill="currentColor"
            >
              <path d="M21.7 3.5 18.5 19c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.1 12.8l-4.8-1.5c-1.1-.3-1.1-1 .2-1.5L20.3 2.6c.9-.3 1.7.2 1.4.9Z" />
            </svg>
            Telegram
          </a>
        </nav>
      )}
    </div>
  );
}
