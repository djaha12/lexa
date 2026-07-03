import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { dealer, telHref } from "@/config/dealer";

export const metadata = { title: "Сервис и запчасти" };

const S = {
  eyebrow: { ru: "Сервис и запчасти", en: "Service & parts", zh: "服务与配件" } as L,
  title: { ru: "Обслуживаем вашу технику SANY", en: "We keep your SANY machine running", zh: "让您的 SANY 设备持续运转" } as L,
  intro: {
    ru: "Собственный сервис, обученные инженеры и склад оригинальных запчастей. Гарантийное и постгарантийное обслуживание, ремонт и выезд на объект по всему Кыргызстану.",
    en: "In-house service, trained engineers and a stock of genuine parts. Warranty and post-warranty service, repairs and on-site visits across Kyrgyzstan.",
    zh: "自有服务团队、专业工程师及原厂配件库存。在吉尔吉斯斯坦全境提供保修与保外服务、维修及上门服务。",
  } as L,
  whatEyebrow: { ru: "Что мы предлагаем", en: "What we offer", zh: "我们的服务" } as L,
  whatTitle: { ru: "Полное обслуживание техники", en: "Complete equipment care", zh: "全面的设备保障" } as L,
  cta: { ru: "Нужен сервис или запчасти?", en: "Need service or parts?", zh: "需要服务或配件？" } as L,
  ctaBody: {
    ru: "Позвоните нам или оставьте заявку — поможем с ремонтом, ТО и подбором запчастей.",
    en: "Call us or send a request — we'll help with repairs, maintenance and parts.",
    zh: "致电或提交申请——我们将协助维修、保养与配件供应。",
  } as L,
};

const services: { id: string; icon: string; title: L; body: L }[] = [
  {
    id: "parts",
    icon: "parts",
    title: { ru: "Оригинальные запчасти", en: "Genuine spare parts", zh: "原厂配件" },
    body: {
      ru: "Расходники и узлы со склада, быстрый подбор по модели и поставка под заказ в кратчайшие сроки.",
      en: "Consumables and components in stock, fast lookup by model and quick supply to order.",
      zh: "库存易损件与总成，按型号快速匹配并迅速订购供应。",
    },
  },
  {
    id: "repair",
    icon: "wrench",
    title: { ru: "Ремонт и ТО", en: "Repair & maintenance", zh: "维修与保养" },
    body: {
      ru: "Плановое обслуживание и ремонт любой сложности силами обученных инженеров.",
      en: "Scheduled maintenance and repairs of any complexity by trained engineers.",
      zh: "由专业工程师提供定期保养及各类维修。",
    },
  },
  {
    id: "field",
    icon: "delivery",
    title: { ru: "Выезд на объект", en: "On-site service", zh: "上门服务" },
    body: {
      ru: "Обслуживание и ремонт прямо на вашей площадке — по всему Кыргызстану.",
      en: "Servicing and repairs directly at your site — across Kyrgyzstan.",
      zh: "在您的现场进行维护与维修——覆盖全吉尔吉斯斯坦。",
    },
  },
  {
    id: "diagnostics",
    icon: "chip",
    title: { ru: "Диагностика", en: "Diagnostics", zh: "故障诊断" },
    body: {
      ru: "Точная диагностика узлов и гидравлики, дефектовка и прозрачная смета работ.",
      en: "Accurate diagnosis of components and hydraulics, inspection and a clear cost estimate.",
      zh: "精准诊断总成与液压系统，检测并提供透明报价。",
    },
  },
  {
    id: "warranty",
    icon: "shield",
    title: { ru: "Гарантия", en: "Warranty", zh: "质保" },
    body: {
      ru: "Гарантийное обслуживание техники SANY и поддержка на протяжении всего срока службы.",
      en: "Warranty service for SANY machines and support throughout their service life.",
      zh: "SANY 设备保修服务，并在整个使用寿命内提供支持。",
    },
  },
  {
    id: "consult",
    icon: "excavator",
    title: { ru: "Подбор техники", en: "Machine selection", zh: "设备选型" },
    body: {
      ru: "Поможем выбрать модель под задачи и бюджет, рассчитаем стоимость и условия поставки.",
      en: "We help choose the right model for your task and budget, and quote price and terms.",
      zh: "帮您按任务与预算选择机型，并报价与供货条件。",
    },
  },
];

export default async function ServicePage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={tx(S.eyebrow, locale)}
        title={tx(S.title, locale)}
        intro={tx(S.intro, locale)}
        breadcrumbs={[{ label: "SANY Кыргызстан", href: "/" }, { label: t("nav.service", locale) }]}
        icon="wrench"
      />

      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow={tx(S.whatEyebrow, locale)} title={tx(S.whatTitle, locale)} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <div id={s.id} className="card card-hover h-full scroll-mt-24 p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CategoryIcon name={s.icon} size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{tx(s.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{tx(s.body, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{tx(S.cta, locale)}</h2>
            <p className="mt-2 text-white/65">{tx(S.ctaBody, locale)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={telHref(dealer.phones[0])} className="btn btn-primary">
              <Icon.Phone size={16} /> {dealer.phones[0]}
            </a>
            <Link href="/contact" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              {t("cta.requestQuote", locale)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
