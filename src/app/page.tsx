import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { CategoryIcon, Icon } from "@/components/Icons";
import { categories, featuredModels, modelsInCategory } from "@/data/products";
import { industries } from "@/data/site";
import { accent } from "@/lib/theme";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { locCategory } from "@/i18n/content";
import { locIndustry } from "@/i18n/site";
import { dealer, telHref } from "@/config/dealer";

const dealerStats: { value: string; suffix?: string; label: L }[] = [
  { value: "10", label: { ru: "категорий техники SANY", en: "SANY equipment categories", zh: "SANY 设备类别" } },
  { value: "24/7", label: { ru: "сервис и выезд", en: "service & field support", zh: "服务与上门" } },
  { value: "100", suffix: "%", label: { ru: "оригинальные запчасти", en: "genuine spare parts", zh: "原厂配件" } },
  { value: "КР", label: { ru: "поставка по всему Кыргызстану", en: "delivery across Kyrgyzstan", zh: "全吉尔吉斯斯坦配送" } },
];

const why: { icon: string; title: L; body: L }[] = [
  {
    icon: "shield",
    title: { ru: "Официальный дилер", en: "Authorized dealer", zh: "授权经销商" },
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
  eyebrow: { ru: "Приезжайте к нам", en: "Visit us", zh: "欢迎到访" } as L,
  title: { ru: "Наш филиал в Бишкеке", en: "Our branch in Bishkek", zh: "我们在比什凯克的分公司" } as L,
  intro: {
    ru: "Приезжайте посмотреть технику, обсудить условия и сервис. Работаем с частными клиентами и компаниями по всему Кыргызстану.",
    en: "Come to see the machines, discuss terms and service. We work with private customers and companies across Kyrgyzstan.",
    zh: "欢迎前来看机、洽谈条件与服务。我们服务于吉尔吉斯斯坦全境的个人与企业客户。",
  } as L,
  branch: { ru: "Филиал", en: "Branch", zh: "分公司" } as L,
  phone: { ru: "Телефоны", en: "Phone", zh: "电话" } as L,
  hours: { ru: "Часы работы", en: "Opening hours", zh: "营业时间" } as L,
};

export default async function Home() {
  const locale = await getLocale();
  const featured = featuredModels();
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

      {/* PRODUCT RANGE */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("home.range.eyebrow", locale)}
              title={t("home.range.title", locale)}
              intro={t("home.range.intro", locale)}
            />
            <ArrowLink href="/products" className="mb-2">
              {t("home.range.viewAll", locale)}
            </ArrowLink>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, idx) => {
              const count = modelsInCategory(c.slug).length;
              const lc = locCategory(c, locale);
              return (
                <Reveal key={c.slug} delay={(idx % 3) * 80}>
                  <Link href={`/products/${c.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                    <ProductVisual accentKey={c.accent} icon={c.icon} className="aspect-[16/9]" rounded="rounded-none" />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 place-items-center rounded-lg"
                          style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                        >
                          <CategoryIcon name={c.icon} size={20} />
                        </span>
                        <h3 className="text-xl font-bold text-ink group-hover:text-brand">{lc.name}</h3>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{lc.tagline}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                        <span className="text-xs font-medium text-mist">
                          {count} {t("common.models", locale)} · {c.subcategories.length} {t("common.lines", locale)}
                        </span>
                        <Icon.ArrowRight size={18} className="text-brand transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow={t("home.featured.eyebrow", locale)}
            title={t("home.featured.title", locale)}
            intro={t("home.featured.intro", locale)}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 8).map((m, idx) => (
              <Reveal key={m.slug} delay={(idx % 4) * 70}>
                <ProductCard model={m} locale={locale} compact />
              </Reveal>
            ))}
          </div>
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

      {/* INDUSTRIES */}
      <section className="section-pad bg-white">
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
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                      <CategoryIcon name={ind.icon} size={24} />
                    </span>
                    <div>
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

      {/* VISIT / CONTACTS */}
      <section className="section-pad bg-paper">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow={tx(visitL.eyebrow, locale)} title={tx(visitL.title, locale)} intro={tx(visitL.intro, locale)} />
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Pin size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(visitL.branch, locale)}</div>
                  <div className="font-semibold text-ink">{tx(dealer.address, locale)}, {tx(dealer.city, locale)}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Phone size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(visitL.phone, locale)}</div>
                  <div className="flex flex-wrap gap-x-4 font-semibold text-ink">
                    {dealer.phones.map((p) => (
                      <a key={p} href={telHref(p)} className="hover:text-brand">{p}</a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Spec size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(visitL.hours, locale)}</div>
                  <div className="font-semibold text-ink">{tx(dealer.hours, locale)}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                {t("cta.requestQuote", locale)} <Icon.ArrowRight size={16} />
              </Link>
              <a href={telHref(dealer.phones[0])} className="btn btn-ghost">
                <Icon.Phone size={16} /> {dealer.phones[0]}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white">
              <div className="grain absolute inset-0 opacity-40" aria-hidden />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                  <CategoryIcon name="shield" size={26} />
                </span>
                <h3 className="mt-5 text-2xl font-bold">{t("hero.badge", locale)}</h3>
                <p className="mt-3 text-white/70">{t("footer.intro", locale)}</p>
                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {dealerStats.slice(0, 3).map((s) => (
                    <div key={tx(s.label, locale)}>
                      <div className="text-2xl font-extrabold text-brand">
                        {s.value}
                        {s.suffix}
                      </div>
                      <p className="mt-1 text-xs text-white/60">{tx(s.label, locale)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
