import MobileMenu from "./components/MobileMenu";

const benefits = [
  {
    icon: "⚙",
    title: "Профессиональное",
    subtitle: "оборудование",
  },
  {
    icon: "♙",
    title: "Опытные",
    subtitle: "администраторы",
  },
  {
    icon: "◈",
    title: "Честные цены",
    subtitle: "и никаких накруток",
  },
  {
    icon: "⌖",
    title: "Удобное расположение",
    subtitle: "и парковка",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#050505] text-white">
      <section className="px-3 pt-3 sm:px-5 sm:pt-5"
      >
      <div className="premium-hero relative min-h-[calc(100svh-24px)] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] sm:min-h-[calc(100vh-40px)]">

      <div
  className="pointer-events-none absolute inset-0"
  style={{
    backgroundImage: `
      linear-gradient(
  90deg,
  rgba(5,5,5,0.92) 7%,
  rgba(5,5,5,0.84) 26%,
  rgba(5,5,5,0.64) 43%,
  rgba(5,5,5,0.34) 56%,
  rgba(5,5,5,0.10) 69%,
  rgba(5,5,5,0) 84%
),
      url('/images/garage-hero.webp')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

          <div className="relative z-10 flex min-h-[calc(100svh-24px)] flex-col sm:min-h-[calc(100vh-40px)]">
            <header className="premium-header flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10 lg:py-7">
              <div className="shrink-0 text-[18px] font-bold tracking-wide sm:text-[20px] lg:text-[22px]">
                ГАРАЖА.<span className="text-[#ff6a00]">НЕТ</span>
              </div>

              <nav className="hidden items-center gap-7 whitespace-nowrap text-[14px] font-semibold text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.85)] lg:flex lg:gap-8 xl:gap-9 xl:text-[15px]">
                <a className="transition hover:text-white" href="#services">
                  Услуги
                </a>
                <a className="transition hover:text-white" href="#prices">
                  Тарифы
                </a>
                <a className="transition hover:text-white" href="#reviews">
                  Отзывы
                </a>
                <a className="transition hover:text-white" href="#how">
                  Как это работает
                </a>
                <a className="transition hover:text-white" href="#contacts">
                  Контакты
                </a>
              </nav>

              <a
                href="https://n1118892.yclients.ru/"
                className="ms_booking ml-auto shrink-0 rounded-full bg-[#ff6a00] px-4 py-3 text-[12px] font-medium transition hover:bg-[#ff7a1a] sm:px-6 sm:text-sm lg:ml-0 lg:px-7"
              >
                Записаться
              </a>

              <MobileMenu />
            </header>

            <div className="flex flex-1 items-center px-5 pb-10 pt-8 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16 lg:pt-0">
              <div className="max-w-[760px]">
                <h1 className="type-hero uppercase">
                  Ремонтируйте
                  <br />
                  автомобиль сами
                  <br />
                  и{" "}
                  <span className="text-[#ff6a00]">
                    экономьте до 70%
                  </span>
                  <br />
                  на услугах СТО
                </h1>

                <p className="type-body mt-7 max-w-[560px]">
                  Аренда подъёмников, инструментов и оборудования для
                  самостоятельного ремонта в Санкт-Петербурге
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                  <a
                    href="https://n1118892.yclients.ru/"
                    className="ms_booking w-full rounded-full bg-[#ff6a00] px-8 py-4 text-center text-sm font-medium transition hover:bg-[#ff7a1a] sm:w-auto"
                  >
                    Записаться онлайн
                  </a>

                  <a
                    href="#how"
                    className="w-full rounded-full border border-white/20 px-8 py-4 text-center text-sm font-medium transition hover:border-[#ff6a00]/70 sm:w-auto"
                  >
                    Как это работает
                  </a>
                </div>
              </div>
            </div>

            <div className="premium-benefits grid grid-cols-1 border-t border-white/10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex min-h-[88px] items-center gap-4 border-r border-white/10 px-2 sm:min-h-[96px] sm:px-4 lg:min-h-[105px] lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ff6a00]/40 text-lg text-[#ff6a00]">
                    {benefit.icon}
                  </div>

                  <div className="text-[13px] leading-5">
                    <div className="text-white/90">{benefit.title}</div>
                    <div className="text-white/65">{benefit.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="px-3 py-3 sm:px-5 sm:py-5">
      <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.025] px-5 py-8 backdrop-blur-[10px] sm:px-7 lg:min-h-[650px] lg:px-9 lg:py-10">
      <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 55%, rgba(255,106,0,0.055) 0%, rgba(255,106,0,0.018) 35%, rgba(8,8,8,0.20) 75%, rgba(8,8,8,0.32) 100%)",
      }}
    />

    <div className="relative z-10">
          <div className="max-w-[620px]">
            <h2 className="type-section-title uppercase">
              Всё необходимое
              <br />
              для вашего ремонта
            </h2>

            <p className="type-secondary mt-4 max-w-[480px]">
              Профессиональное оборудование и инструмент
              <br />
              для любых задач
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:mt-10">

  {/* Подъёмники */}
  <article className="group relative min-h-[290px] overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.035] transition duration-300 hover:border-[#ff6a00]/40">

    <div
      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
      style={{
        backgroundImage: "url('/images/lift.webp')",
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.82) 38%, rgba(8,8,8,0.35) 72%, rgba(8,8,8,0.12) 100%)",
      }}
    />

    <div className="relative z-10 flex min-h-[290px] flex-col p-5 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff6a00]/40 text-xl text-[#ff6a00]">
        ↕
      </div>

      <div className="mt-auto">
        <h3 className="type-card-title">
          Подъёмники
          <br />
          на 4 тонны
        </h3>

        <p className="type-secondary mt-4 max-w-[300px]">
          Надёжные подъёмники для легковых автомобилей и микроавтобусов
        </p>
      </div>
    </div>
  </article>


  {/* Инструменты */}
  <article className="group relative min-h-[290px] overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.035] transition duration-300 hover:border-[#ff6a00]/40">

    <div
      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
      style={{
        backgroundImage: "url('/images/tools.webp')",
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.82) 38%, rgba(8,8,8,0.35) 72%, rgba(8,8,8,0.12) 100%)",
      }}
    />

    <div className="relative z-10 flex min-h-[290px] flex-col p-5 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff6a00]/40 text-xl text-[#ff6a00]">
        ⚙
      </div>

      <div className="mt-auto">
        <h3 className="type-card-title">
          Инструменты
          <br />
          и оборудование
        </h3>

        <p className="type-secondary mt-4 max-w-[300px]">
          Профессиональный инструмент, диагностика и всё необходимое для ремонта
        </p>
      </div>
    </div>
  </article>


  {/* Мойка — пока без фотографии */}
  <article className="group relative min-h-[290px] overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.035] transition duration-300 hover:border-[#ff6a00]/40">

  <div
    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
    style={{
      backgroundImage: "url('/images/garage-underbody-wash.webp')",
    }}
  />

  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.82) 38%, rgba(8,8,8,0.35) 72%, rgba(8,8,8,0.12) 100%)",
    }}
  />

  <div className="relative z-10 flex min-h-[290px] flex-col p-5 sm:p-7">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff6a00]/40 text-xl text-[#ff6a00]">
      ◌
    </div>

    <div className="mt-auto">
      <h3 className="type-card-title">
        Мойка днища
        <br />
        и уборка
      </h3>

      <p className="type-secondary mt-4 max-w-[300px]">
        Всё необходимое для очистки автомобиля и рабочего места после ремонта
      </p>
    </div>
  </div>
  <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 55%, rgba(255,106,0,0.055) 0%, rgba(255,106,0,0.018) 35%, rgba(8,8,8,0.20) 75%, rgba(8,8,8,0.32) 100%)",
      }}
    />


</article>


          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#prices"
              className="rounded-full border border-[#ff6a00]/35 px-8 py-3 text-sm text-white/80 transition hover:border-[#ff6a00] hover:text-white"
            >
              Смотреть все услуги
            </a>
          </div>
        </div>
        </div>
      </section>
      <section id="prices" className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] px-5 py-8 sm:px-7 lg:px-9 lg:py-10">

    {/* Фоновое фото */}
<div
  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
  style={{
    backgroundImage: "url('/images/garage-prices.webp')",
  }}
/>

{/* Затемнение фото */}
<div
  className="pointer-events-none absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.62) 38%, rgba(8,8,8,0.42) 68%, rgba(8,8,8,0.52) 100%)",
  }}
/>


    {/* Контент поверх фотографии */}
<div className="relative z-10">

<h2 className="type-section-title uppercase">
      Тарифы аренды
    </h2>

    <p className="type-secondary mt-4">
      Выберите подходящий вариант для вашего ремонта
    </p>

    <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-[1fr_1fr_0.72fr] lg:gap-5">

      {/* С подъёмником */}
      <article className="group flex min-h-[390px] flex-col rounded-[16px] border border-white/10 bg-black/55 p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/40 hover:bg-black/65">
        <div>
          <p className="type-eyebrow uppercase text-[#ff6a00]">
            Рабочее место
          </p>

          <h3 className="type-card-title mt-3">
            С подъёмником
          </h3>

          <ul className="type-secondary mt-7 space-y-3">
            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Подъёмник до 4 тонн
            </li>

            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Базовый инструмент включён
            </li>

            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Верстак
            </li>

            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Помощь администратора
            </li>
          </ul>

          <p className="type-fine mt-5">
            Электроинструмент и сварочное оборудование оплачиваются отдельно
          </p>
        </div>

        <div className="mt-auto">
          <div className="mb-6 flex items-end gap-3">
            <span className="type-price text-[#ff6a00]">
              600 ₽
            </span>

            <span className="pb-[3px] text-[14px] text-white">
  за 60 минут
</span>
          </div>

          <a
            href="https://n1118892.yclients.ru/"
            className="ms_booking block rounded-full bg-[#ff6a00] px-6 py-4 text-center text-sm font-medium transition hover:bg-[#ff7a1a]"
          >
            Забронировать
          </a>
        </div>
      </article>

      {/* Без подъёмника */}
      <article className="group flex min-h-[390px] flex-col rounded-[16px] border border-white/10 bg-black/55 p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/40 hover:bg-black/65">
        <div>
          <p className="type-eyebrow uppercase text-[#ff6a00]">
            Рабочее место
          </p>

          <h3 className="type-card-title mt-3">
            Без подъёмника
          </h3>

          <ul className="type-secondary mt-7 space-y-3">
            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Базовый инструмент включён
            </li>

            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Верстак
            </li>

            <li>
              <span className="mr-3 text-[#ff6a00]">•</span>
              Помощь администратора
            </li>
          </ul>

          <p className="type-fine mt-5">
            Электроинструмент и сварочное оборудование оплачиваются отдельно
          </p>
        </div>

        <div className="mt-auto">
          <div className="mb-6 flex items-end gap-3">
            <span className="type-price text-[#ff6a00]">
              400 ₽
            </span>

            <span className="pb-[3px] text-[14px] text-white">
  за 60 минут
</span>
          </div>

          <a
            href="https://n1118892.yclients.ru/"
            className="ms_booking block rounded-full bg-[#ff6a00] px-6 py-4 text-center text-sm font-medium transition hover:bg-[#ff7a1a]"
          >
            Забронировать
          </a>
        </div>
      </article>

      {/* Без переплат */}
      <aside className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[16px] border border-[#ff6a00]/25 bg-[radial-gradient(circle_at_70%_10%,rgba(255,106,0,0.18),rgba(5,5,5,0.72)_55%,rgba(5,5,5,0.78)_100%)] p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/50">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff6a00]/40 text-[18px] text-[#ff6a00]">
          ₽
        </div>

        <div className="mt-auto">
        <p className="type-eyebrow uppercase text-[#ff6a00]">
            Без переплат
          </p>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[38px] font-semibold leading-none text-white">
              0 ₽
            </span>

            <span className="text-[13px] text-white/40">
              скрытых платежей
            </span>
          </div>

        <h3 className="type-card-title mt-5">
            Платите только
            <br />
            за время работы
          </h3>

        <p className="type-secondary mt-4 max-w-[280px]">
            Стоимость аренды известна заранее. Никаких неожиданных накруток.
          </p>
        </div>
      </aside>

      </div>

{/* Закрываем контент z-10 */}
</div>

</div>
</section>
<section id="wash-prices" className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] px-5 py-8 sm:px-7 lg:px-9 lg:py-10">

    {/* Фоновое фото */}
    <div
      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage: "url('/images/wash-prices.webp')",
      }}
    />

    {/* Затемнение фото — такое же, как в тарифах аренды */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.88) 38%, rgba(8,8,8,0.68) 68%, rgba(8,8,8,0.78) 100%)",
      }}
    />

    {/* Контент */}
    <div className="relative z-10">

      {/* Заголовок */}
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[42px] font-semibold uppercase leading-none tracking-[-0.03em]">
            Тарифы мойки
          </h2>

          <p className="type-secondary mt-4">
            Выберите подходящий вариант мойки автомобиля
          </p>
        </div>

        <span className="text-[12px] uppercase tracking-[0.18em] text-[#ff6a00]/70">
          Мойка автомобиля
        </span>
      </div>

      {/* Карточки */}
      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-[1fr_1fr_0.72fr] lg:gap-5">

        {/* ТЕХНИЧЕСКАЯ МОЙКА */}
        <article className="group flex min-h-[390px] flex-col rounded-[16px] border border-white/10 bg-black/55 p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/40 hover:bg-black/65">

          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#ff6a00]/70">
              Без подъёмника
            </span>

            <h3 className="mt-3 text-[25px] font-medium">
            Мойка автомобиля
            </h3>

              <p className="type-secondary mt-3 max-w-[370px]">
              Мойка кузова, уборка салона и пылесос — всё необходимое для чистоты автомобиля
            </p>
          </div>

          <div className="mt-8 flex flex-col">

            <div className="flex items-end justify-between border-b border-white/10 py-4 first:pt-0">
              <span className="text-[14px] text-white/55">
                15 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                200 ₽
              </span>
            </div>

            <div className="flex items-end justify-between border-b border-white/10 py-4">
              <span className="text-[14px] text-white/55">
                30 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                400 ₽
              </span>
            </div>

            <div className="flex items-end justify-between py-4">
              <span className="text-[14px] text-white/55">
                60 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                800 ₽
              </span>
            </div>

          </div>

          <p className="mt-auto pt-5 text-[12px] leading-5 text-white/30">
            Выберите необходимое время в зависимости от объёма работ
          </p>
        </article>


        {/* МОЙКА ДНИЩА */}
        <article className="group flex min-h-[390px] flex-col rounded-[16px] border border-white/10 bg-black/55 p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/40 hover:bg-black/65">

          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#ff6a00]/70">
              На подъёмнике
            </span>

            <h3 className="mt-3 text-[25px] font-medium">
              Мойка днища
            </h3>

              <p className="type-secondary mt-3 max-w-[370px]">
              Очистка днища автомобиля с удобным доступом ко всем элементам на подъёмнике
            </p>
          </div>

          <div className="mt-8 flex flex-col">

            <div className="flex items-end justify-between border-b border-white/10 py-4 first:pt-0">
              <span className="text-[14px] text-white/55">
                60 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                1 800 ₽
              </span>
            </div>

            <div className="flex items-end justify-between border-b border-white/10 py-4">
              <span className="text-[14px] text-white/55">
                90 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                2 800 ₽
              </span>
            </div>

            <div className="flex items-end justify-between py-4">
              <span className="text-[14px] text-white/55">
                120 минут
              </span>

              <span className="text-[24px] font-medium tracking-[-0.02em]">
                3 300 ₽
              </span>
            </div>

          </div>

          <p className="mt-auto pt-5 text-[12px] leading-5 text-white/30">
            Время зависит от степени загрязнения и объёма необходимых работ
          </p>
        </article>


        {/* АКЦЕНТНАЯ КАРТОЧКА */}
        <aside className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[16px] border border-[#ff6a00]/25 bg-[radial-gradient(circle_at_70%_10%,rgba(255,106,0,0.18),rgba(5,5,5,0.72)_55%,rgba(5,5,5,0.78)_100%)] p-7 backdrop-blur-[2px] transition duration-300 hover:border-[#ff6a00]/50">

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff6a00]/35 text-[17px] text-[#ff6a00]">
            ₽
          </div>

          <div className="mt-8">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#ff6a00]/70">
              Удобный формат
            </span>

            <h3 className="mt-3 text-[25px] font-medium uppercase leading-[1.1]">
              Платите
              <br />
              за время
            </h3>

            <div className="mt-7 h-px w-full bg-white/10" />

              <p className="type-secondary mt-7">
              Вы сами выбираете необходимое время мойки в зависимости от задачи
            </p>
          </div>

          <a
            href="https://n1118892.yclients.ru/"
          className="ms_booking mt-auto flex items-center justify-center rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/[0.06] px-5 py-3 text-[13px] text-white/85 transition duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white"
          >
            Записаться на мойку
          </a>

        </aside>
      </div>
    </div>
  </div>
</section>
<section id="how" className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] px-5 py-8 sm:px-7 lg:px-9 lg:py-10">

    {/* Мягкое фоновое свечение */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 120%, rgba(255,106,0,0.12), transparent 48%)",
      }}
    />

    {/* Контент */}
    <div className="relative z-10">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[42px] font-semibold uppercase leading-none tracking-[-0.03em]">
            Как это работает
          </h2>

          <p className="type-secondary mt-4">
            От записи до результата — четыре простых шага
          </p>
        </div>

        <span className="text-[12px] uppercase tracking-[0.18em] text-[#ff6a00]/70">
          Просто и понятно
        </span>
      </div>

      <div className="relative mt-12">

        {/* Линия между этапами */}
        <div className="pointer-events-none absolute left-[5%] right-[5%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#ff6a00]/25 to-transparent lg:block" />

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "1",
              title: "Выберите время и тариф",
              text: "Выберите удобное время и подходящее рабочее место",
            },
            {
              number: "2",
              title: "Приезжайте в сервис",
              text: "Мы подготовим рабочее место к вашему приезду",
            },
            {
              number: "3",
              title: "Ремонтируйте автомобиль",
              text: "Всё необходимое для ремонта уже на месте",
            },
            {
              number: "4",
              title: "Оплатите время работы",
              text: "Оплачиваете только фактически использованное время",
            },
          ].map((step) => (
            <article
              key={step.number}
              className="group relative min-h-[220px] rounded-[16px] border border-white/[0.07] bg-black/25 p-6 backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-[#ff6a00]/30 hover:bg-black/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff6a00]/40 bg-[#080808] text-[13px] font-medium text-[#ff6a00] transition duration-300 group-hover:border-[#ff6a00]/70">
                  {step.number}
                </div>

                <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Шаг
                </span>
              </div>

              <div className="mt-8">
                <h3 className="max-w-[230px] text-[19px] font-medium leading-[1.3]">
                  {step.title}
                </h3>

                <p className="type-secondary mt-3 max-w-[250px]">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://n1118892.yclients.ru/"
          className="ms_booking rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/[0.06] px-8 py-3 text-sm text-white/85 transition duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white"
        >
          Записаться онлайн
        </a>
      </div>
    </div>
  </div>
</section>
<section className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] px-5 py-8 sm:px-7 lg:px-9 lg:py-10">
    {/* Мягкое оранжевое свечение вокруг галереи */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 65%, rgba(255,106,0,0.10) 0%, rgba(255,106,0,0.035) 35%, transparent 68%)",
      }}
    />

    <div className="relative z-10">
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-[42px] font-semibold uppercase leading-[1.05] tracking-[-0.03em]">
          Атмосфера
          <br />
          нашего сервиса
        </h2>

        <p className="type-secondary mt-4">
          Пространство, оборудование и рабочая атмосфера гаража
        </p>
      </div>

      <span className="text-[12px] uppercase tracking-[0.15em] text-[#ff6a00]">
        гаража.нет
      </span>
    </div>

    <div className="mt-8 grid h-auto grid-cols-1 gap-4 sm:mt-10 sm:h-[360px] sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-5">
      {/* Фото сервиса */}
      <div className="group relative h-[240px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0d0d0d] sm:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundImage: "url('/images/garage-service.webp')",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[#ff6a00]/[0.03]" />
        </div>

        <span className="absolute bottom-5 left-5 z-10 text-[12px] uppercase tracking-[0.12em] text-white/70 transition duration-300 group-hover:text-white">
          Фото сервиса
        </span>
      </div>

      {/* Оборудование */}
      <div className="group relative h-[240px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0d0d0d] sm:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundImage: "url('/images/garage-equipment.webp')",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[#ff6a00]/[0.03]" />
        </div>

        <span className="absolute bottom-5 left-5 z-10 text-[12px] uppercase tracking-[0.12em] text-white/70 transition duration-300 group-hover:text-white">
          Оборудование
        </span>
      </div>

      {/* Рабочая зона */}
      <div className="group relative h-[240px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0d0d0d] sm:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundImage: "url('/images/garage-workspace.webp')",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[#ff6a00]/[0.03]" />
        </div>

        <span className="absolute bottom-5 left-5 z-10 text-[12px] uppercase tracking-[0.12em] text-white/70 transition duration-300 group-hover:text-white">
          Рабочая зона
        </span>
      </div>
    </div>

    <div className="mt-7 flex justify-center">
      <button className="rounded-full border border-[#ff6a00]/35 px-8 py-3 text-sm text-white/75 transition duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00]/[0.06] hover:text-white">
        Смотреть больше фото
      </button>
    </div>
  </div>
  </div>
</section>
<section id="contacts" className="px-3 pb-3 sm:px-5 sm:pb-5">
<div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] md:grid md:min-h-[430px] md:grid-cols-[1.05fr_0.95fr]">
{/* Мягкое фоновое свечение */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* Свечение за левой частью */}
  <div
    className="absolute -left-[12%] top-[8%] h-[520px] w-[520px] rounded-full blur-[150px]"
    style={{
      background: "rgba(255, 106, 0, 0.055)",
    }}
  />

</div>
    {/* Контакты */}
    <div className="relative z-10 flex flex-col justify-between p-5 sm:p-6 md:p-8">
      <div>
        <div className="text-[22px] font-bold tracking-wide">
          ГАРАЖА.<span className="text-[#ff6a00]">НЕТ</span>
        </div>

        <h2 className="mt-8 text-[42px] font-semibold uppercase leading-[1.05] tracking-[-0.03em]">
          Приезжайте
          <br />
          ремонтировать
          <br />
          автомобиль сами
        </h2>

        <p className="type-secondary mt-4 max-w-[480px]">
          Всё необходимое для самостоятельного ремонта автомобиля в одном месте
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-[#ff6a00]">
            Адрес
          </div>
          <p className="type-body mt-2">
  Санкт-Петербург, Васильевский остров
  <br />
  Уральская улица, 4В
</p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-[#ff6a00]">
            Режим работы
          </div>
          <p className="type-body mt-2">
            Ежедневно
            <br />
            12:00–00:00
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-[#ff6a00]">
            Телефон
          </div>
          <p className="type-body mt-2">
          +7 (995) 596-79-93
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-[#ff6a00]">
            На карте
          </div>
          <a
  href="https://yandex.ru/maps/?rtext=~59.9514,30.2607&rtt=auto"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 text-white/80 transition duration-300 hover:text-[#ff6a00]"
>
  Построить маршрут
  <span className="transition-transform duration-300 group-hover:translate-x-1">
  ←---
  </span>
</a>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex border-white/10 p-4 sm:p-5 md:border-l md:p-7">
      <div className="flex w-full flex-col justify-between rounded-[16px] border border-white/[0.08] bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-sm sm:p-6 md:p-7">
        <div>
          <div className="type-eyebrow uppercase text-[#ff6a00]">
            Онлайн-запись
          </div>

          <h2 className="mt-3 max-w-[430px] uppercase">
            Запишитесь на удобное время
          </h2>

          <p className="type-secondary mt-4 max-w-[430px]">
            Выберите услугу и удобное время — запись займёт меньше минуты.
          </p>

          <a
            href="https://n1118892.yclients.ru/"
            className="ms_booking mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ff6a00] px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-[#ff7a1a] sm:w-auto"
          >
            Записаться онлайн
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-5 text-[12px] text-white/55">
          <span>Свободное время онлайн</span>
          <span>Без звонков</span>
          <span>Запись 24/7</span>
        </div>
      </div>
    </div>

</div>
</section>
<section className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#080808]">

    {/* Заголовок */}
    <div className="flex flex-col items-start gap-4 px-5 pb-6 pt-8 sm:px-7 lg:flex-row lg:items-end lg:justify-between lg:px-9 lg:pb-8 lg:pt-10">
      <div>
        <div className="text-[11px] uppercase tracking-[0.15em] text-[#ff6a00]">
          Как нас найти
        </div>

        <h2 className="mt-3 text-[42px] font-semibold uppercase leading-[1.05] tracking-[-0.03em]">
          Васильевский остров
          <br />
          Уральская улица, 4В
        </h2>
      </div>

      <div className="text-left lg:text-right">
        <p className="type-secondary">
          Санкт-Петербург
        </p>

        <a
          href="https://yandex.ru/maps/?rtext=~59.9514,30.2607&rtt=auto"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 inline-flex items-center gap-2 text-[14px] text-[#ff6a00] transition hover:text-[#ff7a1a]"
        >
          Построить маршрут
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>

    {/* Карта + схема въезда */}
    <div className="mx-4 mb-4 grid h-auto grid-cols-1 gap-4 sm:mx-5 sm:mb-5 md:h-[380px] md:grid-cols-2 md:gap-5">

      {/* Яндекс Карта */}
      <div className="relative h-[280px] min-w-0 overflow-hidden rounded-[14px] border border-white/10 bg-[#0d0d0d] md:h-auto">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=30.2607%2C59.9514&z=17&pt=30.2607%2C59.9514%2Cpm2rdm"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          title="Гаража.нет — Уральская улица, 4В"
        />

        {/* Подпись поверх карты */}
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
          <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#ff6a00]">
            Гаража.нет
          </div>

          <div className="mt-1 text-[13px] text-white/80">
            Уральская улица, 4В
          </div>
        </div>
      </div>

      {/* Схема заезда */}
<div className="group relative h-[280px] min-w-0 overflow-hidden rounded-[14px] border border-white/10 bg-[#0d0d0d] md:h-auto">
  <div
    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.015]"
    style={{
      backgroundImage: "url('/images/garage-route.webp')",
    }}
  />

  {/* Очень лёгкое затемнение по краям */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5" />

  {/* Подпись */}
  <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
    <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#ff6a00]">
      Схема заезда
    </div>

    <div className="mt-1 text-[13px] text-white/80">
      Заезд через ул. Одоевского
    </div>
  </div>
</div>
    </div>
  </div>
</section>
<section id="reviews" className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] p-4 md:p-5">
    <div className="grid min-w-0 gap-4 lg:grid-cols-[0.62fr_1.38fr] lg:gap-5">
      <div className="flex min-w-0 flex-col justify-between rounded-[16px] border border-white/[0.08] bg-white/[0.025] p-5">
        <div>
          <div className="type-eyebrow uppercase text-[#ff6a00]">
            Отзывы на Яндекс Картах
          </div>

          <h2 className="reviews-title mt-2 uppercase">
            Нам доверяют
            <br />
            автовладельцы
          </h2>

          <p className="type-secondary mt-3 max-w-[420px]">
            Оценки и впечатления гостей о сервисе «гаража.нет».
          </p>
        </div>

        <div className="mt-5">
          <div className="flex items-end gap-4">
            <div className="text-[42px] font-semibold leading-none tracking-[-0.045em]">
              5,0
            </div>
            <div className="pb-1 text-[18px] tracking-[0.12em] text-[#ff6a00]" aria-label="Рейтинг пять из пяти">
              ★★★★★
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-[14px] text-white/65">
            <span><strong className="font-semibold text-white">304</strong> оценки</span>
            <span><strong className="font-semibold text-white">218</strong> отзывов</span>
          </div>

          <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-[#ff6a00]/25 bg-[#ff6a00]/[0.06] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/85">
            <span className="text-[#ff6a00]">◆</span>
            Хорошее место 2026
          </div>

          <div className="mt-4">
            <a
              href="https://yandex.ru/maps/org/6851241853/reviews/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#ff6a00] transition hover:text-[#ff7a1a]"
            >
              Смотреть на Яндекс Картах
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="min-w-0 overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#f5f5f5]">
        <iframe
          src="https://yandex.ru/maps-reviews-widget/6851241853?comments"
          title="Отзывы о гаража.нет на Яндекс Картах"
          loading="lazy"
          className="block h-[460px] w-full border-0 lg:h-[410px]"
        />
      </div>
    </div>
  </div>
</section>
<footer className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="rounded-[18px] border border-white/10 bg-[#080808] px-5 py-7 sm:px-7 lg:px-9 lg:py-8">

    <div className="flex flex-col items-start gap-5 border-b border-white/10 pb-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:flex-nowrap lg:pb-8">

      {/* Логотип */}
      <div className="text-[22px] font-bold tracking-wide">
        ГАРАЖА.<span className="text-[#ff6a00]">НЕТ</span>
      </div>

      {/* Навигация */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-white/65 sm:text-[12px] lg:gap-7">
        <a href="#services" className="transition hover:text-white">
          Услуги
        </a>

        <a href="#prices" className="transition hover:text-white">
          Тарифы
        </a>

        <a href="#how" className="transition hover:text-white">
          Как это работает
        </a>

        <a href="#contacts" className="transition hover:text-white">
          Контакты
        </a>
      </div>

      {/* Наверх */}
      <a
        href="#top"
        className="text-[12px] uppercase tracking-[0.12em] text-[#ff6a00] transition hover:text-[#ff7a1a]"
      >
        Наверх ↑
      </a>

    </div>

    <div className="flex flex-col items-start gap-5 pt-7 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between lg:flex-nowrap">

      <div>
        <p className="text-[12px] text-white/55">
          © 2026 ГАРАЖА.НЕТ
        </p>

        <p className="type-fine mt-2">
          Санкт-Петербург, Васильевский остров
          <br />
          Уральская улица, 4В
        </p>
      </div>

      {/* Потом сюда поставим настоящие реквизиты */}
      <div className="text-left text-[12px] leading-5 text-white/45 sm:text-center">
        <p>Реквизиты организации</p>
        <p>ИНН / ОГРНИП</p>
      </div>

      <div className="text-left text-[12px] leading-5 text-white/45 sm:text-right">
        <a
          href="#"
          className="transition hover:text-white/60"
        >
          Политика конфиденциальности
        </a>

        <p className="mt-1">
          Все права защищены
        </p>
      </div>

    </div>

  </div>
</footer>
<a
  href="https://n1118892.yclients.ru/"
  className="ms_booking fixed bottom-4 right-4 z-50 flex h-[54px] items-center gap-2 rounded-full bg-[#ff6a00] px-5 text-[13px] font-semibold text-white shadow-[0_10px_40px_rgba(255,106,0,0.28)] transition duration-300 hover:scale-[1.03] hover:bg-[#ff7a1a] sm:bottom-6 sm:right-6 sm:h-[58px] sm:gap-3 sm:px-7 sm:text-[14px]"
>
  <span className="h-2 w-2 rounded-full bg-white" />
  Записаться
</a>
{/* ANC Credit */}
<div className="px-3 pb-3 sm:px-5 sm:pb-5">
  <div className="flex items-center justify-center border-t border-white/[0.06] py-6">
    <div className="group cursor-default text-center">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
        Created by
      </div>

      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 transition duration-300 group-hover:text-[#ff6a00]">
        Aphelion Nova Corp. / ANC
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
