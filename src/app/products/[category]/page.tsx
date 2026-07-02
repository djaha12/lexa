import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory, modelsInCategory, subcategoryCounts } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { CategoryBrowser } from "@/components/CategoryBrowser";
import { CategoryIcon, Icon } from "@/components/Icons";
import { accent } from "@/lib/theme";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { locCategory, locSubcategory } from "@/i18n/content";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Products" };
  const locale = await getLocale();
  const lc = locCategory(cat, locale);
  return { title: lc.name, description: lc.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const locale = await getLocale();
  const lc = locCategory(cat, locale);

  const list = modelsInCategory(cat.slug);
  const subs = subcategoryCounts(cat.slug);
  const others = categories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <PageHero
        eyebrow={lc.tagline}
        title={lc.name}
        intro={lc.description}
        icon={cat.icon}
        breadcrumbs={[
          { label: "SANY", href: "/" },
          { label: t("nav.products", locale), href: "/products" },
          { label: lc.name },
        ]}
        stat={`${list.length} ${t("common.models", locale)} · ${subs.filter((s) => s.count > 0).length} ${t("cat.overview.lines", locale)}`}
      />

      <section className="border-b border-line bg-white">
        <div className="container-max grid gap-3 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {subs.map((s) => {
            const ls = locSubcategory(cat.slug, s, locale);
            return (
              <div key={s.slug} className="flex items-start gap-3 rounded-xl border border-line p-4">
                <span
                  className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                  style={{ background: accent(cat.accent).tint, color: accent(cat.accent).ink }}
                >
                  <CategoryIcon name={cat.icon} size={18} />
                </span>
                <div>
                  <div className="flex items-center gap-2 font-semibold text-ink">
                    {ls.name}
                    <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-steel">{s.count}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-steel">{ls.blurb}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-max">
          <CategoryBrowser categorySlug={cat.slug} models={list} subcategories={subs} />
        </div>
      </section>

      <section className="border-t border-line bg-white py-14">
        <div className="container-max">
          <h2 className="text-xl font-bold text-ink">{t("cat.exploreOther", locale)}</h2>
          <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group flex min-w-[220px] items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-brand"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg"
                  style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                >
                  <CategoryIcon name={c.icon} size={20} />
                </span>
                <div>
                  <div className="font-semibold text-ink group-hover:text-brand">{locCategory(c, locale).shortName}</div>
                  <div className="text-xs text-steel">
                    {modelsInCategory(c.slug).length} {t("common.models", locale)}
                  </div>
                </div>
                <Icon.ArrowRight size={16} className="ml-auto text-mist group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
