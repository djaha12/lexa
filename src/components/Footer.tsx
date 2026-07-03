import Link from "next/link";
import { categories } from "@/data/products";
import { Icon, Logo } from "./Icons";
import { PhoneNumbers } from "./PhoneNumbers";
import { t } from "@/i18n/strings";
import { locCategory } from "@/i18n/content";
import { tx, type L, type Locale } from "@/i18n/config";
import { dealer, telHref } from "@/config/dealer";

const serviceLinks: { label: L; href: string }[] = [
  { label: { ru: "Сервис и ремонт", en: "Service & repair", zh: "服务与维修" }, href: "/service" },
  { label: { ru: "Запчасти", en: "Spare parts", zh: "配件" }, href: "/service#parts" },
  { label: { ru: "Гарантия", en: "Warranty", zh: "质保" }, href: "/service#warranty" },
  { label: { ru: "О компании", en: "About us", zh: "关于我们" }, href: "/about" },
  { label: { ru: "Контакты", en: "Contacts", zh: "联系方式" }, href: "/contact" },
];

const labels = {
  contacts: { ru: "Контакты", en: "Contacts", zh: "联系方式" } as L,
  cta: { ru: "Готовы подобрать технику?", en: "Ready to choose your machine?", zh: "准备好选购设备了吗？" } as L,
  ctaBody: {
    ru: "Свяжитесь с нами — поможем подобрать технику SANY, рассчитаем стоимость и организуем сервис.",
    en: "Get in touch — we will help you choose the right SANY machine, quote it and arrange service.",
    zh: "联系我们——我们将帮您选择合适的 SANY 设备、报价并安排服务。",
  } as L,
  rights: {
    ru: "© 2026 SANY Кыргызстан. Дилер SANY в Кыргызстане.",
    en: "© 2026 SANY Kyrgyzstan. SANY dealer in Kyrgyzstan.",
    zh: "© 2026 SANY 吉尔吉斯斯坦。SANY 吉尔吉斯斯坦经销商。",
  } as L,
  intro: {
    ru: "Дилер SANY в Кыргызстане: продажа, сервис, оригинальные запчасти и поддержка клиентов по всей стране.",
    en: "SANY dealer in Kyrgyzstan: sales, service, genuine parts and customer support nationwide.",
    zh: "SANY 吉尔吉斯斯坦经销商：全国范围的销售、服务、原厂配件与客户支持。",
  } as L,
};

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="container-max grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">{tx(labels.cta, locale)}</h3>
            <p className="mt-2 max-w-xl text-white/65">{tx(labels.ctaBody, locale)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              {t("cta.requestQuote", locale)} <Icon.ArrowRight size={16} />
            </Link>
            <a href={telHref(dealer.phones[0])} className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              <Icon.Phone size={16} /> {dealer.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <div className="container-max grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo light country={tx(dealer.country, locale)} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{tx(labels.intro, locale)}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/90">{t("footer.col.products", locale)}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="text-white/60 transition-colors hover:text-white">
                  {locCategory(c, locale).name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="font-medium text-brand-soft hover:text-white">
                {t("cta.viewAllArrow", locale)}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/90">{tx(labels.contacts, locale)}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Icon.Pin size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>{tx(dealer.address, locale)}, {tx(dealer.city, locale)}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon.Phone size={16} className="mt-0.5 shrink-0 text-brand" />
              <PhoneNumbers phones={dealer.phones} locale={locale} tone="dark" size="sm" />
            </li>
            <li className="flex items-center gap-2.5 text-white/50">
              <Icon.Spec size={16} className="shrink-0 text-brand" />
              {tx(dealer.hours, locale)}
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["in", "f", "▶"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-sm text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-3 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>{tx(labels.rights, locale)}</p>
          <p>{t("brand.slogan", locale)}</p>
        </div>
      </div>
    </footer>
  );
}
