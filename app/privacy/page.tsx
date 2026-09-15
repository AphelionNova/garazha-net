import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных | гаража.нет",
  description: "Политика обработки персональных данных сервиса гаража.нет.",
};

const sectionClass = "space-y-4";
const headingClass = "text-[20px] font-semibold leading-snug text-white sm:text-[22px]";
const paragraphClass = "text-[14px] leading-7 text-white/65 sm:text-[15px]";
const listClass = "list-disc space-y-2 pl-5 text-[14px] leading-7 text-white/65 marker:text-[#ff6a00] sm:text-[15px]";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-3 py-3 text-white sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[18px] border border-white/10 bg-[#080808]">
        <header className="premium-header flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7 lg:px-9 lg:py-7">
          <Link href="/" className="shrink-0 text-[18px] font-bold tracking-wide sm:text-[22px]">
            ГАРАЖА.<span className="text-[#ff6a00]">НЕТ</span>
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://t.me/garagvo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram гаража.нет"
              title="Telegram"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/80 transition hover:border-[#ff6a00]/55 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
                <path d="M21.7 3.5 18.5 19c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.1 12.8l-4.8-1.5c-1.1-.3-1.1-1 .2-1.5L20.3 2.6c.9-.3 1.7.2 1.4.9Z" />
              </svg>
            </a>
            <a
              href="https://n1118892.yclients.ru/"
              data-url="https://n1118892.yclients.ru/"
              className="ms_booking shrink-0 rounded-full bg-[#ff6a00] px-4 py-3 text-[12px] font-medium transition hover:bg-[#ff7a1a] sm:px-6 sm:text-sm lg:px-7"
            >
              Записаться
            </a>
          </div>
        </header>

        <article className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="border-b border-white/10 pb-8 sm:pb-10">
            <p className="type-eyebrow uppercase text-[#ff6a00]">гаража.нет</p>
            <h1 className="type-section-title mt-3 max-w-[760px]">
              Политика обработки персональных данных
            </h1>
            <p className="mt-5 text-[13px] leading-6 text-white/50">
              Последнее обновление: 14 сентября 2026 г.
            </p>
          </div>

          <div className="mt-9 space-y-10 sm:mt-11 sm:space-y-12">
            <section className={sectionClass}>
              <h2 className={headingClass}>1. Общие положения</h2>
              <p className={paragraphClass}>
                Настоящая Политика обработки персональных данных определяет порядок обработки и защиты персональных данных пользователей сайта «гаража.нет».
              </p>
              <div className="rounded-[16px] border border-white/10 bg-white/[0.025] p-5 text-[14px] leading-7 text-white/65 sm:p-6 sm:text-[15px]">
                <p className="font-medium text-white/85">Оператор персональных данных:</p>
                <p className="mt-2">ИП Стрекозова Владислава Александровна</p>
                <p>ИНН 270607983263</p>
                <p>ОГРНИП 326784700336695</p>
                <p className="mt-4 font-medium text-white/85">Адрес сервиса и адрес для связи:</p>
                <p>г. Санкт-Петербург, Уральская улица, 4В.</p>
                <p className="mt-4">
                  <span className="font-medium text-white/85">Контактный телефон:</span>{" "}
                  <a href="tel:+79955967993" className="text-[#ff6a00] transition hover:text-[#ff7a1a]">+7 995 596-79-93</a>
                </p>
                <p>
                  <span className="font-medium text-white/85">Telegram:</span>{" "}
                  <a href="https://t.me/garagvo" target="_blank" rel="noopener noreferrer" className="text-[#ff6a00] transition hover:text-[#ff7a1a]">t.me/garagvo</a>
                </p>
              </div>
              <p className={paragraphClass}>
                Настоящая Политика разработана в соответствии с Федеральным законом Российской Федерации от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>2. Какие персональные данные обрабатываются</h2>
              <p className={paragraphClass}>При использовании сервиса онлайн-записи могут обрабатываться:</p>
              <ul className={listClass}>
                <li>имя пользователя;</li><li>номер телефона;</li><li>адрес электронной почты;</li>
                <li>сведения о выбранной услуге;</li><li>дата и время записи;</li>
                <li>выбранный специалист, если он указывается;</li>
                <li>иные сведения, добровольно предоставленные пользователем при оформлении записи.</li>
              </ul>
              <p className={paragraphClass}>
                Также при использовании сайта сторонними техническими сервисами могут автоматически обрабатываться технические сведения, необходимые для работы сайта и встроенных сервисов, включая IP-адрес, сведения о браузере, устройстве и технические cookie.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>3. Цели обработки персональных данных</h2>
              <p className={paragraphClass}>Персональные данные обрабатываются для:</p>
              <ul className={listClass}>
                <li>оформления и сопровождения записи на услуги;</li><li>связи с клиентом по вопросам записи;</li>
                <li>изменения или отмены записи;</li><li>организации оказания услуг;</li>
                <li>внутреннего уведомления сотрудников о новой записи;</li><li>обеспечения работы сайта и встроенных сервисов.</li>
              </ul>
              <p className={paragraphClass}>Персональные данные не используются для целей, не связанных с указанными выше, без соответствующего законного основания.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>4. Онлайн-запись YCLIENTS</h2>
              <p className={paragraphClass}>Онлайн-запись на сайте осуществляется с использованием сервиса YCLIENTS.</p>
              <p className={paragraphClass}>При использовании формы YCLIENTS обработка введённых пользователем данных может осуществляться с использованием информационных систем и инфраструктуры данного сервиса в соответствии с его условиями и политиками.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>5. Уведомления в Telegram</h2>
              <p className={paragraphClass}>Для оперативной обработки заявок сведения о новой записи могут автоматически передаваться посредством Telegram-бота в закрытый рабочий чат сотрудников сервиса.</p>
              <p className={paragraphClass}>Передаваемая информация может включать:</p>
              <ul className={listClass}>
                <li>имя клиента;</li><li>телефон;</li><li>электронную почту;</li><li>сведения об услуге;</li>
                <li>дату и время записи;</li><li>иные сведения, необходимые для обработки конкретной записи.</li>
              </ul>
              <p className={paragraphClass}>Доступ к рабочему чату должен предоставляться только сотрудникам, которым эти сведения необходимы для работы с заявками.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>6. Использование сторонних сервисов</h2>
              <p className={paragraphClass}>На сайте могут использоваться:</p>
              <ul className={listClass}><li>YCLIENTS;</li><li>Яндекс Карты;</li><li>виджет отзывов Яндекс Карт;</li><li>Telegram.</li></ul>
              <p className={paragraphClass}>Указанные сервисы могут самостоятельно обрабатывать техническую информацию пользователя в соответствии со своими условиями использования и политиками конфиденциальности.</p>
              <p className={paragraphClass}>Собственные системы веб-аналитики на сайте в настоящее время не используются.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>7. Сроки обработки и хранения</h2>
              <p className={paragraphClass}>Персональные данные обрабатываются и хранятся не дольше, чем это необходимо для достижения целей их обработки, если иной срок хранения не предусмотрен законодательством Российской Федерации или договорными обязательствами.</p>
              <p className={paragraphClass}>После достижения целей обработки либо при наличии иных законных оснований данные удаляются, обезличиваются либо их обработка прекращается в установленном порядке.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>8. Защита персональных данных</h2>
              <p className={paragraphClass}>Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления и распространения.</p>
              <p className={paragraphClass}>Доступ к персональным данным предоставляется только лицам, которым он необходим для выполнения рабочих обязанностей.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>9. Права пользователя</h2>
              <p className={paragraphClass}>Пользователь вправе:</p>
              <ul className={listClass}>
                <li>получать информацию об обработке своих персональных данных;</li>
                <li>требовать уточнения, блокирования или удаления своих персональных данных при наличии предусмотренных законом оснований;</li>
                <li>отозвать согласие на обработку персональных данных в случаях, когда обработка осуществляется на основании согласия;</li>
                <li>обращаться к Оператору по вопросам обработки персональных данных.</li>
              </ul>
              <div className="text-[14px] leading-7 text-white/65 sm:text-[15px]">
                <p>Для обращения можно использовать:</p>
                <p className="mt-2">Телефон: <a href="tel:+79955967993" className="text-[#ff6a00] transition hover:text-[#ff7a1a]">+7 995 596-79-93</a></p>
                <p>Telegram: <a href="https://t.me/garagvo" target="_blank" rel="noopener noreferrer" className="text-[#ff6a00] transition hover:text-[#ff7a1a]">t.me/garagvo</a></p>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>10. Изменение Политики</h2>
              <p className={paragraphClass}>Оператор вправе актуализировать настоящую Политику при изменении законодательства, способов обработки персональных данных или используемых сервисов.</p>
              <p className={paragraphClass}>Актуальная версия Политики постоянно доступна на странице <Link href="/privacy" className="text-[#ff6a00] transition hover:text-[#ff7a1a]">/privacy</Link>.</p>
            </section>
          </div>
        </article>

        <footer className="border-t border-white/10 px-5 py-7 sm:px-7 lg:px-9 lg:py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Link href="/" className="text-[18px] font-bold tracking-wide">ГАРАЖА.<span className="text-[#ff6a00]">НЕТ</span></Link>
              <p className="type-fine mt-3">Санкт-Петербург, Уральская улица, 4В</p>
            </div>
            <div className="text-[12px] leading-5 text-white/60 sm:text-right">
              <p>ИП Стрекозова Владислава Александровна</p>
              <p>ИНН 270607983263</p>
              <p>ОГРНИП 326784700336695</p>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] leading-5 text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ГАРАЖА.НЕТ</p>
            <Link href="/privacy" aria-current="page" className="transition hover:text-white/70">Политика обработки персональных данных</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
