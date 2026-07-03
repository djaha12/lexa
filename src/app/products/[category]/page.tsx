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
import { locCategory } from "@/i18n/content";

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
          { label: "SANY Кыргызстан", href: "/" },
          { label: t("nav.products", locale), href: "/products" },
          { label: lc.name },
        ]}
      />

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
                <div className="font-semibold text-ink group-hover:text-brand">{locCategory(c, locale).shortName}</div>
                <Icon.ArrowRight size={16} className="ml-auto text-mist group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
