import type { Metadata } from "next";
import Link from "next/link";
import { categories, modelsInCategory } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductVisual } from "@/components/ProductVisual";
import { CategoryIcon, Icon } from "@/components/Icons";
import { CatalogCTA } from "@/components/CatalogCTA";
import { accent } from "@/lib/theme";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { locCategory, locTagline } from "@/i18n/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the complete SANY product range — excavators, concrete machinery, cranes, road, port, mining and piling machinery, trucks, access platforms and renewable energy.",
};

export default async function ProductsPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("products.eyebrow", locale)}
        title={t("products.title", locale)}
        intro={t("products.intro", locale)}
        breadcrumbs={[{ label: "SANY Кыргызстан", href: "/" }, { label: t("nav.products", locale) }]}
      />

      {/* quick category chips */}
      <div className="sticky top-[60px] z-30 border-b border-line bg-white/90 backdrop-blur-lg">
        <div className="container-max flex gap-2 overflow-x-auto no-scrollbar py-3">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <span style={{ color: accent(c.accent).ink }}>
                <CategoryIcon name={c.icon} size={16} />
              </span>
              {locCategory(c, locale).shortName}
            </a>
          ))}
        </div>
      </div>

      <section className="bg-paper pt-10 md:pt-14">
        <CatalogCTA locale={locale} />
      </section>

      <div className="bg-paper">
        {categories.map((c, ci) => {
          const list = modelsInCategory(c.slug);
          const lc = locCategory(c, locale);
          return (
            <section key={c.slug} id={c.slug} className="scroll-mt-32 border-b border-line py-14 md:py-20">
              <div className="container-max">
                <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-12">
                  <div className="lg:sticky lg:top-36 lg:self-start">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-xl"
                        style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                      >
                        <CategoryIcon name={c.icon} size={26} />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-mist">
                        {String(ci + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-ink md:text-3xl">{lc.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{lc.description}</p>
                    <Link href={`/products/${c.slug}`} className="btn btn-dark mt-6 !py-2.5 text-sm">
                      {t("cat.exploreCta", locale)} {lc.shortName} <Icon.ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {list.slice(0, 6).map((m, idx) => (
                      <Reveal key={m.slug} delay={(idx % 3) * 60}>
                        <Link
                          href={`/products/${c.slug}/${m.slug}`}
                          className="card card-hover group flex h-full flex-col overflow-hidden"
                        >
                          <ProductVisual accentKey={m.accent} icon={c.icon} className="aspect-[16/10]" rounded="rounded-none" />
                          <div className="flex flex-1 flex-col p-4">
                            <h3 className="text-base font-bold text-ink group-hover:text-brand">{m.name}</h3>
                            <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-steel">{locTagline(m, locale)}</p>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
