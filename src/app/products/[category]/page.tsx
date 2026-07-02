import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  categories,
  getCategory,
  modelsInCategory,
  subcategoryCounts,
} from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { CategoryBrowser } from "@/components/CategoryBrowser";
import { CategoryIcon, Icon } from "@/components/Icons";
import { accent } from "@/lib/theme";

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
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const list = modelsInCategory(cat.slug);
  const subs = subcategoryCounts(cat.slug);
  const others = categories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <PageHero
        eyebrow={cat.tagline}
        title={cat.name}
        intro={cat.description}
        icon={cat.icon}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: cat.name },
        ]}
        stat={`${list.length} models · ${subs.filter((s) => s.count > 0).length} product lines`}
      />

      {/* product lines summary */}
      <section className="border-b border-line bg-white">
        <div className="container-max grid gap-3 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {subs.map((s) => (
            <div key={s.slug} className="flex items-start gap-3 rounded-xl border border-line p-4">
              <span
                className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                style={{ background: accent(cat.accent).tint, color: accent(cat.accent).ink }}
              >
                <CategoryIcon name={cat.icon} size={18} />
              </span>
              <div>
                <div className="flex items-center gap-2 font-semibold text-ink">
                  {s.name}
                  <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-steel">
                    {s.count}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-steel">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* browser */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <CategoryBrowser models={list} subcategories={subs} icon={cat.icon} />
        </div>
      </section>

      {/* other categories */}
      <section className="border-t border-line bg-white py-14">
        <div className="container-max">
          <h2 className="text-xl font-bold text-ink">Explore other categories</h2>
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
                  <div className="font-semibold text-ink group-hover:text-brand">{c.shortName}</div>
                  <div className="text-xs text-steel">{modelsInCategory(c.slug).length} models</div>
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
