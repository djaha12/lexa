import Link from "next/link";
import { categories, modelsInCategory } from "@/data/products";
import { SanyMark, Icon } from "@/components/Icons";
import { PrintButton } from "@/components/PrintButton";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx } from "@/i18n/config";
import { locCategory, locTagline, locSpecLabel, locUnit, locValue, locBadge } from "@/i18n/content";
import { dealer } from "@/config/dealer";

export const metadata = { title: "Полный каталог техники" };

export default async function CatalogPage() {
  const locale = await getLocale();
  const pdf = `/catalog/sany-catalog-${locale}.pdf`;

  return (
    <div className="catalog bg-white pt-24 print:pt-0">
      {/* toolbar — screen only */}
      <div className="no-print border-b border-line bg-paper">
        <div className="container-max flex flex-wrap items-center justify-between gap-3 py-4">
          <Link href="/products" className="text-sm font-medium text-steel hover:text-brand">
            ← {t("nav.products", locale)}
          </Link>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            <a href={pdf} download className="btn btn-primary flex-1 justify-center !py-2.5 text-sm sm:flex-none">
              <Icon.Download size={16} /> {t("catalog.download", locale)}
            </a>
            <PrintButton label={t("catalog.print", locale)} className="btn btn-ghost flex-1 justify-center !py-2.5 text-sm sm:flex-none" />
          </div>
        </div>
      </div>

      <div className="container-max max-w-4xl py-10 print:py-0">
        {/* COVER */}
        <header className="catalog-cover mb-10 border-b border-line pb-8">
          <div className="flex items-center gap-3">
            <SanyMark size={44} />
            <div className="leading-none">
              <div className="text-2xl font-black tracking-tight" style={{ fontFamily: '"Arial Black", sans-serif' }}>
                <span className="text-brand">SANY</span> {tx(dealer.country, locale)}
              </div>
              <div className="mt-1 text-sm text-steel">{t("brand.slogan", locale)}</div>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-ink">{t("catalog.pageTitle", locale)}</h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-steel">
            <span className="inline-flex items-center gap-1.5">
              <Icon.Pin size={15} className="text-brand" /> {tx(dealer.address, locale)}, {tx(dealer.city, locale)}
            </span>
            {dealer.phones.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5">
                <Icon.Phone size={15} className="text-brand" /> {p}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5">
              <Icon.Spec size={15} className="text-brand" /> {tx(dealer.hours, locale)}
            </span>
          </div>
        </header>

        {/* CONTENTS */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-mist">{t("catalog.contents", locale)}</h2>
          <ol className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {categories.map((c, i) => (
              <li key={c.slug} className="flex justify-between border-b border-dashed border-line py-1 text-sm">
                <span className="text-ink">
                  {String(i + 1).padStart(2, "0")}. {locCategory(c, locale).name}
                </span>
                <span className="text-mist">{modelsInCategory(c.slug).length} {t("common.models", locale)}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* CATEGORIES */}
        {categories.map((c, ci) => {
          const lc = locCategory(c, locale);
          const list = modelsInCategory(c.slug);
          return (
            <section key={c.slug} className="catalog-cat mb-10">
              <div className="mb-5 border-b-2 border-brand pb-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {String(ci + 1).padStart(2, "0")} · {list.length} {t("common.models", locale)}
                </div>
                <h2 className="mt-1 text-2xl font-bold text-ink">{lc.name}</h2>
                <p className="mt-1 text-sm text-steel">{lc.tagline}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {list.map((m) => (
                  <div key={m.slug} className="catalog-model rounded-lg border border-line p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-base font-bold text-ink">{m.name}</h3>
                      {m.badges?.[0] && (
                        <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[10px] font-semibold text-brand-700">
                          {locBadge(m.badges[0], locale)}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-steel">{locTagline(m, locale)}</p>
                    <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {m.specs.map((s) => (
                        <div key={s.label} className="text-[11.5px]">
                          <dt className="text-mist">{locSpecLabel(s.label, locale)}</dt>
                          <dd className="font-semibold text-ink">
                            {locValue(s.value, locale)}
                            {s.unit ? " " + locUnit(s.unit, locale) : ""}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* FOOTER CONTACT */}
        <section className="catalog-model mt-8 rounded-xl bg-ink p-8 text-white print:bg-ink">
          <div className="flex items-center gap-3">
            <SanyMark size={34} />
            <div className="text-xl font-black" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              <span className="text-brand">SANY</span> {tx(dealer.country, locale)}
            </div>
          </div>
          <p className="mt-3 text-white/70">{t("footer.intro", locale)}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1.5"><Icon.Pin size={15} className="text-brand" /> {tx(dealer.address, locale)}, {tx(dealer.city, locale)}</span>
            {dealer.phones.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5"><Icon.Phone size={15} className="text-brand" /> {p}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
