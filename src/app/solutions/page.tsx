import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { industries } from "@/data/site";
import { categories } from "@/data/products";
import { accent } from "@/lib/theme";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { locCategory } from "@/i18n/content";
import { locIndustry } from "@/i18n/site";

export const metadata = { title: "Solutions" };

const industryCategories: Record<string, string[]> = {
  "Building Construction": ["excavator", "concrete-machinery", "crane", "aerial-work-platform"],
  Infrastructure: ["excavator", "road-machinery", "piling-machinery", "crane"],
  "Mining & Quarrying": ["mining-machinery", "excavator", "truck"],
  "Energy & Wind": ["renewable-energy", "crane", "piling-machinery"],
  "Ports & Logistics": ["port-machinery", "truck"],
  "Municipal & Utility": ["excavator", "road-machinery", "aerial-work-platform"],
};

const energyCards: { k: string; v: L }[] = [
  { k: "SY215E", v: { ru: "Электроэкскаватор", en: "Electric excavator", zh: "电动挖掘机" } },
  { k: "SKT55E", v: { ru: "Электросамосвал", en: "Electric mining truck", zh: "电动矿用车" } },
  { k: "e-Truck", v: { ru: "Тягач со сменой батарей", en: "Battery-swap tractor", zh: "换电牵引车" } },
  { k: "BESS", v: { ru: "Сетевое хранилище", en: "Grid-scale storage", zh: "电网级储能" } },
];

export default async function SolutionsPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("sol.eyebrow", locale)}
        title={t("sol.title", locale)}
        intro={t("sol.intro", locale)}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("nav.solutions", locale) }]}
        icon="chip"
      />

      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow={t("sol.byIndustry.eyebrow", locale)} title={t("sol.byIndustry.title", locale)} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {industries.map((ind, i) => {
              const li = locIndustry(ind.name, locale, ind.blurb);
              const cats = (industryCategories[ind.name] ?? [])
                .map((s) => categories.find((c) => c.slug === s))
                .filter(Boolean) as typeof categories;
              return (
                <Reveal key={ind.name} delay={(i % 2) * 80}>
                  <div className="card h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white">
                        <CategoryIcon name={ind.icon} size={24} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-ink">{li.name}</h3>
                        <p className="text-sm text-steel">{li.blurb}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cats.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/${c.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-line transition-colors hover:ring-brand"
                          style={{ color: accent(c.accent).ink }}
                        >
                          <CategoryIcon name={c.icon} size={14} /> {locCategory(c, locale).shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="new-energy" className="scroll-mt-24 bg-ink py-20 text-white md:py-28">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow !text-emerald-300">{t("home.energy.eyebrow", locale)}</span>
            <h2 className="mt-3 text-3xl font-bold md:text-[2.6rem]">{t("sol.energy.title", locale)}</h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">{t("sol.energy.intro", locale)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/renewable-energy" className="btn btn-primary">
                {t("sol.energy.renewables", locale)} <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/products/truck" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
                {t("sol.energy.etrucks", locale)}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {energyCards.map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xl font-extrabold text-emerald-300">{x.k}</div>
                  <p className="mt-1 text-sm text-white/60">{tx(x.v, locale)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="smart" className="section-pad scroll-mt-24 bg-white">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow={t("sol.smart.eyebrow", locale)} title={t("sol.smart.title", locale)} intro={t("sol.smart.intro", locale)} />
            <ul className="mt-6 space-y-3">
              {["sol.smart.b1", "sol.smart.b2", "sol.smart.b3", "sol.smart.b4"].map((k) => (
                <li key={k} className="flex items-center gap-3 text-steel">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon.Check size={14} />
                  </span>
                  {t(k, locale)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <Link key={c.slug} href={`/products/${c.slug}`} className="card card-hover flex flex-col gap-3 p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                  >
                    <CategoryIcon name={c.icon} size={22} />
                  </span>
                  <span className="font-semibold text-ink">{locCategory(c, locale).shortName}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
