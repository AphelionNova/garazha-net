import Image from "next/image";
import RepairBooking from "./RepairBooking";

const services = [
  { title: "Диагностика", text: "Компьютерная диагностика, поиск неисправностей, проверка основных систем и узлов автомобиля." },
  { title: "Техническое обслуживание", text: "Замена моторного масла, фильтров, технических жидкостей и других расходных материалов. Плановое ТО и обслуживание автомобиля." },
  { title: "Ходовая часть", text: "Диагностика и ремонт подвески, замена изношенных элементов, устранение стуков, люфтов и других неисправностей." },
  { title: "Тормозная система", text: "Замена тормозных колодок и дисков, обслуживание и ремонт элементов тормозной системы." },
  { title: "Сцепление", text: "Диагностика и замена сцепления, а также обслуживание связанных узлов." },
  { title: "Работы по двигателю", text: "Диагностика и ремонт отдельных узлов двигателя, датчиков, навесного оборудования, систем охлаждения и других компонентов." },
];

export default function AutoService() {
  return (
    <section id="auto-service" aria-labelledby="auto-service-title" className="scroll-mt-5 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#080808]">
        <div className="grid gap-8 px-5 py-8 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-9 lg:py-10">
          <div>
            <p className="type-eyebrow text-[#ff6a00] uppercase">Ремонт руками наших мастеров</p>
            <h2 id="auto-service-title" className="type-section-title mt-4 uppercase">
              Автосервис<br />в гаража.<span className="text-[#ff6a00]">нет</span>
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed sm:text-xl">Можно самому. А можно доверить машину нам.</p>
            <p className="type-body mt-4 max-w-[650px]">
              «гаража.нет» — это не только посты самообслуживания. Если у вас нет времени, инструмента или желания заниматься автомобилем самостоятельно, наши мастера проведут диагностику, техническое обслуживание и ремонт.
            </p>
            <p className="type-body mt-3 max-w-[650px]">
              Работаем с легковыми автомобилями, а также отдельно занимаемся Ford Transit с 2006 года выпуска.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-white/10">
            <Image src="/images/generated/service/passenger-car-service.jpg" alt="Мастер обслуживает тормозную систему легкового автомобиля на подъёмнике" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute right-5 bottom-5 left-5 text-sm font-medium text-white/90">От планового ТО до ремонта отдельных узлов</p>
          </div>
        </div>

        <div className="service-card-grid grid gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-7 lg:grid-cols-3 lg:px-9">
          {services.map((service, index) => (
            <article key={service.title} className="service-glass-card rounded-[16px] border border-white/10 p-5 sm:p-6">
              <div aria-hidden="true" className="type-eyebrow mb-5 text-[#ff6a00]">0{index + 1} <span className="ml-2 text-white/15">/</span></div>
              <h3 className="type-card-title">{service.title}</h3>
              <p className="type-secondary mt-3">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mx-5 mt-6 grid overflow-hidden rounded-[16px] border border-[#ff6a00]/25 bg-[#ff6a00]/[0.035] sm:mx-7 sm:mt-8 md:grid-cols-2 lg:mx-9">
          <div className="relative min-h-[240px] md:min-h-[340px]">
            <Image src="/images/generated/service/transit-diagnostics.jpg" alt="Компьютерная диагностика Ford Transit в автомастерской" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">
            <p className="type-eyebrow text-[#ff6a00] uppercase">Отдельное направление</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">Ford Transit<br /><span className="text-[#ff6a00]">с 2006 года</span></h3>
            <p className="type-body mt-4">Отдельно занимаемся диагностикой, обслуживанием и ремонтом Ford Transit 2006 года выпуска и новее.</p>
            <p className="type-secondary mt-3">Проводим плановое ТО, диагностику, ремонт ходовой части и тормозной системы, работы со сцеплением, электроникой и отдельными узлами двигателя.</p>
          </div>
        </div>

        <div className="mx-5 my-8 grid gap-3 border-l-2 border-[#ff6a00]/50 pl-5 sm:mx-7 md:grid-cols-[150px_1fr] lg:mx-9">
          <h3 className="text-base font-semibold">Что важно</h3>
          <div className="max-w-[850px]">
            <p className="type-secondary">Берём на себя практически весь спектр стандартных работ по автомобилю — от простой замены масла до серьёзного ремонта отдельных узлов.</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">Капитальной переборкой двигателя и коробки передач не занимаемся.</p>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-white/10 px-5 py-8 sm:px-7 lg:px-9 lg:py-10">
          <Image src="/images/generated/service/workshop-overview.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/65" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div className="max-w-[760px]">
              <h3 className="type-card-title">Не знаете, что именно случилось с машиной?</h3>
              <p className="type-body mt-3">Приезжайте на диагностику. Найдём неисправность, объясним, что требует ремонта, и согласуем работы до начала.</p>
            </div>
            <RepairBooking />
          </div>
        </div>
      </div>
    </section>
  );
}
