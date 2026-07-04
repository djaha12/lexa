import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { PhoneNumbers } from "@/components/PhoneNumbers";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { dealer } from "@/config/dealer";

export const metadata = { title: "О компании" };

const S = {
  eyebrow: { ru: "О компании", en: "About us", zh: "关于我们" } as L,
  title: { ru: "Дилер SANY в Кыргызстане", en: "SANY dealer in Kyrgyzstan", zh: "SANY 吉尔吉斯斯坦经销商" } as L,
  intro: {
    ru: "Мы — дилер SANY в Кыргызстане. Продаём, обслуживаем и снабжаем запчастями строительную и спецтехнику для компаний и частных клиентов по всей стране.",
    en: "We are the SANY dealer in Kyrgyzstan. We sell, service and supply parts for construction and special machinery for companies and private customers nationwide.",
    zh: "我们是 SANY 在吉尔吉斯斯坦的经销商，为全国的企业与个人客户提供工程及专用机械的销售、服务与配件供应。",
  } as L,
  doEyebrow: { ru: "Что мы делаем", en: "What we do", zh: "我们的业务" } as L,
  doTitle: { ru: "Всё для вашей техники — в одном месте", en: "Everything for your machine — in one place", zh: "设备所需，一站解决" } as L,
  whyEyebrow: { ru: "Почему мы", en: "Why us", zh: "为何选择我们" } as L,
  whyTitle: { ru: "Надёжный партнёр по технике SANY", en: "A reliable SANY equipment partner", zh: "可靠的 SANY 设备伙伴" } as L,
};

const doCards: { icon: string; title: L; body: L }[] = [
  {
    icon: "excavator",
    title: { ru: "Продажа техники", en: "Equipment sales", zh: "设备销售" },
    body: {
      ru: "Экскаваторы, краны, бетонная, дорожная и карьерная техника SANY — со склада и под заказ.",
      en: "SANY excavators, cranes, concrete, road and mining machinery — in stock and to order.",
      zh: "SANY 挖掘机、起重机、混凝土、路面与矿山机械——现货及订购。",
    },
  },
  {
    icon: "wrench",
    title: { ru: "Сервис и ремонт", en: "Service & repair", zh: "服务与维修" },
    body: {
      ru: "Гарантийное и постгарантийное обслуживание, плановое ТО, ремонт и выезд на объект.",
      en: "Warranty and post-warranty service, scheduled maintenance, repairs and on-site visits.",
      zh: "保修与保外服务、定期保养、维修及上门服务。",
    },
  },
  {
    icon: "parts",
    title: { ru: "Оригинальные запчасти", en: "Genuine spare parts", zh: "原厂配件" },
    body: {
      ru: "Расходники и узлы со склада, быстрый подбор по модели и поставка под заказ.",
      en: "Consumables and components in stock, fast lookup by model and supply to order.",
      zh: "库存易损件与总成，按型号快速匹配并订购供应。",
    },
  },
  {
    icon: "shield",
    title: { ru: "Консультация и подбор", en: "Advice & selection", zh: "咨询与选型" },
    body: {
      ru: "Поможем подобрать технику под задачи и бюджет, рассчитаем стоимость и условия.",
      en: "We help pick the right machine for your task and budget, and quote terms and price.",
      zh: "帮您按任务与预算选型，并报价与条件。",
    },
  },
];

const whyList: L[] = [
  { ru: "Дилер SANY — прямые поставки и гарантия производителя", en: "SANY dealer — direct supply and manufacturer warranty", zh: "SANY 经销商——直供与厂家质保" },
  { ru: "Собственный сервис и обученные инженеры", en: "In-house service and trained engineers", zh: "自有服务团队与专业工程师" },
  { ru: "Склад оригинальных запчастей и расходников", en: "Stock of genuine parts and consumables", zh: "原厂配件与易损件库存" },
  { ru: "Выезд и поддержка по всему Кыргызстану", en: "On-site support across Kyrgyzstan", zh: "覆盖全吉尔吉斯斯坦的上门支持" },
];

export default async function AboutPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={tx(S.eyebrow, locale)}
        title={tx(S.title, locale)}
        intro={tx(S.intro, locale)}
        breadcrumbs={[{ label: "SANY Кыргызстан", href: "/" }, { label: t("nav.about", locale) }]}
        icon="excavator"
      />

      {/* what we do */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow={tx(S.doEyebrow, locale)} title={tx(S.doTitle, locale)} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doCards.map((c, i) => (
              <Reveal key={c.icon} delay={(i % 4) * 70}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CategoryIcon name={c.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{tx(c.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{tx(c.body, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="section-pad bg-white">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow={tx(S.whyEyebrow, locale)} title={tx(S.whyTitle, locale)} />
            <ul className="mt-6 space-y-3">
              {whyList.map((it) => (
                <li key={tx(it, locale)} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon.Check size={14} />
                  </span>
                  <span className="text-steel">{tx(it, locale)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-dark">
                {t("cta.browseProducts", locale)} <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                {t("nav.contact", locale)}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-dark glass-sheen relative overflow-hidden rounded-3xl bg-ink/80 p-6 text-white sm:p-8 lg:p-10">
              <div className="relative">
                <h3 className="text-xl font-bold">{tx(dealer.officeLabel, locale)} · {tx(dealer.city, locale)}</h3>
                <div className="mt-5 space-y-4 text-white/80">
                  <p className="flex items-start gap-2.5">
                    <Icon.Pin size={18} className="mt-0.5 shrink-0 text-brand" />
                    {tx(dealer.address, locale)}, {tx(dealer.city, locale)}
                  </p>
                  <div className="flex items-start gap-2.5">
                    <Icon.Phone size={18} className="mt-0.5 shrink-0 text-brand" />
                    <PhoneNumbers phones={dealer.phones} locale={locale} tone="dark" />
                  </div>
                  <p className="flex items-center gap-2.5 text-white/55">
                    <Icon.Spec size={18} className="shrink-0 text-brand" />
                    {tx(dealer.hours, locale)}
                  </p>
                </div>
                <Link href="/contact" className="btn btn-white mt-7 w-full !py-3">
                  {t("cta.requestQuote", locale)} <Icon.ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
