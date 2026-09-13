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
        </nav>
      )}
    </div>
  );
}
