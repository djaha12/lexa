import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { PhoneNumbers } from "@/components/PhoneNumbers";
import { CatalogCTA } from "@/components/CatalogCTA";
import { ShowcaseBand } from "@/components/ShowcaseBand";
import { CategoryIcon, Icon } from "@/components/Icons";
import { industries } from "@/data/site";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { locIndustry } from "@/i18n/site";
import { dealer } from "@/config/dealer";

const dealerStats: { value: string; suffix?: string; label: L }[] = [
  { value: "10", label: { ru: "категорий техники SANY", en: "SANY equipment categories", zh: "SANY 设备类别" } },
  { value: "24/7", label: { ru: "сервис и выезд", en: "service & field support", zh: "服务与上门" } },
  { value: "100", suffix: "%", label: { ru: "оригинальные запчасти", en: "genuine spare parts", zh: "原厂配件" } },
  { value: "КР", label: { ru: "поставка по всему Кыргызстану", en: "delivery across Kyrgyzstan", zh: "全吉尔吉斯斯坦配送" } },
];

const why: { icon: string; title: L; body: L }[] = [
  {
    icon: "shield",
    title: { ru: "Дилер SANY", en: "SANY dealer", zh: "SANY 经销商" },
    body: {
      ru: "Прямые поставки техники SANY и гарантия производителя на каждую машину.",
      en: "Direct SANY supply and manufacturer warranty on every machine.",
      zh: "SANY 直供，每台设备均享厂家质保。",
    },
  },
  {
    icon: "wrench",
    title: { ru: "Сервис и ремонт", en: "Service & repair", zh: "服务与维修" },
    body: {
      ru: "Обученные инженеры, плановое ТО и ремонт любой сложности.",
      en: "Trained engineers, scheduled maintenance and repairs of any complexity.",
      zh: "专业工程师，定期保养及各类维修。",
    },
  },
  {
    icon: "parts",
    title: { ru: "Оригинальные запчасти", en: "Genuine spare parts", zh: "原厂配件" },
    body: {
      ru: "Склад расходников и узлов, быстрый подбор и поставка под заказ.",
      en: "Stock of consumables and components, fast lookup and supply to order.",
      zh: "备有易损件与总成，快速匹配与订购供应。",
    },
  },
  {
    icon: "delivery",
    title: { ru: "Выезд по всему КР", en: "On-site across Kyrgyzstan", zh: "全吉尔吉斯斯坦上门" },
    body: {
      ru: "Диагностика и обслуживание техники прямо на вашем объекте.",
      en: "Diagnostics and servicing directly at your jobsite.",
      zh: "在您的工地现场进行诊断与维护。",
    },
  },
];

const visitL = {
  eyebrow: { ru: "Наш офис", en: "Our office", zh: "我们的办公室" } as L,
  title: { ru: "Офис в Бишкеке", en: "Office in Bishkek", zh: "比什凯克办公室" } as L,
  intro: {
    ru: "Наш офис расположен в Бишкеке. Будем рады проконсультировать вас и подобрать оптимальное решение для ваших задач.",
    en: "Our office is located in Bishkek. We will be glad to advise you and select the optimal solution for your needs.",
    zh: "我们的办公室位于比什凯克。我们很乐意为您提供咨询，并为您的需求匹配最合适的方案。",
  } as L,
  addr: { ru: "Адрес", en: "Address", zh: "地址" } as L,
  phone: { ru: "Телефоны", en: "Phone", zh: "电话" } as L,
  hours: { ru: "Часы работы", en: "Opening hours", zh: "营业时间" } as L,
};

export default async function Home() {
  const locale = await getLocale();
  return (
    <>
      <Hero />

      {/* DEALER STATS */}
      <section className="border-b border-line bg-white">
        <div className="container-max grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {dealerStats.map((s) => (
            <div key={tx(s.label, locale)}>
              <div className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                {s.value}
                {s.suffix && <span className="text-brand">{s.suffix}</span>}
              </div>
              <p className="mt-2 text-sm text-steel">{tx(s.label, locale)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-paper">
        <div className="container-max grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={t("home.why.eyebrow", locale)}
              title={t("home.why.title", locale)}
              intro={t("home.why.intro", locale)}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-dark">
                {t("cta.requestQuote", locale)} <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/service" className="btn btn-ghost">
                {t("home.why.service", locale)}
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {why.map((v, idx) => (
              <Reveal key={v.icon} delay={idx * 70}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CategoryIcon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{tx(v.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{tx(v.body, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE PHOTO BAND (renders only when a photo is configured) */}
      <ShowcaseBand locale={locale} />

      {/* FULL CATALOGUE CTA */}
      <section className="bg-white py-14 md:py-16">
        <CatalogCTA locale={locale} />
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading
            eyebrow={t("home.ind.eyebrow", locale)}
            title={t("home.ind.title", locale)}
            intro={t("home.ind.intro", locale)}
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => {
              const li = locIndustry(ind.name, locale, ind.blurb);
              return (
                <Reveal key={ind.name} delay={(idx % 3) * 70}>
                  <Link href="/products" className="card card-hover group flex items-center gap-4 p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-ink ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                      <CategoryIcon name={ind.icon} size={24} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-bold text-ink group-hover:text-brand">{li.name}</h3>
                      <p className="text-sm text-steel">{li.blurb}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICE / CONTACTS */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-28">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 500px at 85% 0%, rgba(230,0,18,.18) 0%, transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(52,211,153,.12) 0%, transparent 60%), linear-gradient(180deg,#0b0d12,#12151d)",
          }}
        />
        <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow !text-brand-soft">{tx(visitL.eyebrow, locale)}</span>
            <h2 className="mt-3 text-3xl font-bold md:text-[2.6rem]">{tx(visitL.title, locale)}</h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">{tx(visitL.intro, locale)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                {t("cta.requestQuote", locale)} <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
                {t("cta.browseProducts", locale)}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-dark glass-sheen relative rounded-3xl p-6 sm:p-8">
              <div className="relative space-y-5">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Icon.Pin size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm text-white/55">{tx(visitL.addr, locale)}</div>
                    <div className="font-semibold">{tx(dealer.address, locale)}, {tx(dealer.city, locale)}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Icon.Phone size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="mb-1 text-sm text-white/55">{tx(visitL.phone, locale)}</div>
                    <PhoneNumbers phones={dealer.phones} locale={locale} tone="dark" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Icon.Spec size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm text-white/55">{tx(visitL.hours, locale)}</div>
                    <div className="font-semibold">{tx(dealer.hours, locale)}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
