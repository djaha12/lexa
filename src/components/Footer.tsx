import Link from "next/link";
import { categories } from "@/data/products";
import { Icon, Logo } from "./Icons";
import { t } from "@/i18n/strings";
import { locCategory } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

const columns = [
  {
    titleKey: "footer.col.company",
    links: [
      { key: "link.aboutSany", href: "/about" },
      { key: "link.newsroom", href: "/news" },
      { key: "link.sustainability", href: "/about#sustainability" },
      { key: "link.careers", href: "/about#careers" },
      { key: "link.investors", href: "/about#investors" },
    ],
  },
  {
    titleKey: "footer.col.support",
    links: [
      { key: "link.serviceParts", href: "/service" },
      { key: "link.findDealer", href: "/contact" },
      { key: "link.financing", href: "/service#financing" },
      { key: "link.training", href: "/service#training" },
      { key: "link.warranty", href: "/service#warranty" },
    ],
  },
];

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="container-max grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">{t("footer.ctaTitle", locale)}</h3>
            <p className="mt-2 max-w-xl text-white/65">{t("footer.ctaBody", locale)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              {t("cta.contactSales", locale)} <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              {t("cta.browseProducts", locale)}
            </Link>
          </div>
        </div>
      </div>

      <div className="container-max grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{t("footer.intro", locale)}</p>
          <div className="mt-5 flex gap-3">
            {["in", "X", "f", "▶"].map((s) => (
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

        {columns.map((col) => (
          <div key={col.titleKey}>
            <h4 className="text-sm font-semibold text-white/90">{t(col.titleKey, locale)}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                    {t(l.key, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-3 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>{t("footer.rights", locale)}</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-white">{t("link.privacy", locale)}</Link>
            <Link href="/about" className="hover:text-white">{t("link.terms", locale)}</Link>
            <Link href="/about" className="hover:text-white">{t("link.cookies", locale)}</Link>
            <Link href="/contact" className="hover:text-white">{t("link.globalNetwork", locale)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
