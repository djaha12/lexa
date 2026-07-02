import type { Metadata } from "next";
import Link from "next/link";
import { categories, models, modelsInCategory } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductVisual } from "@/components/ProductVisual";
import { CategoryIcon, Icon } from "@/components/Icons";
import { accent } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the complete SANY product range — excavators, concrete machinery, cranes, road, port, mining and piling machinery, trucks, access platforms and renewable energy.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="The complete SANY range"
        intro="Ten equipment families and a growing catalogue of proven models. Choose a category to explore specifications and request a quote."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        stat={`${models.length} models · ${categories.length} categories`}
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
              {c.shortName}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-paper">
        {categories.map((c, ci) => {
          const list = modelsInCategory(c.slug);
          return (
            <section key={c.slug} id={c.slug} className="scroll-mt-32 border-b border-line py-14 md:py-20">
              <div className="container-max">
                <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-12">
                  {/* category intro */}
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
                    <h2 className="mt-5 text-2xl font-bold text-ink md:text-3xl">{c.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{c.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.subcategories.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/products/${c.slug}#${s.slug}`}
                            className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink ring-1 ring-line hover:ring-brand"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products/${c.slug}`}
                      className="btn btn-dark mt-6 !py-2.5 text-sm"
                    >
                      Explore {c.shortName} <Icon.ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* models preview */}
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {list.slice(0, 6).map((m, idx) => (
                      <Reveal key={m.slug} delay={(idx % 3) * 60}>
                        <Link
                          href={`/products/${c.slug}/${m.slug}`}
                          className="card card-hover group flex h-full flex-col overflow-hidden"
                        >
                          <ProductVisual
                            accentKey={m.accent}
                            icon={c.icon}
                            className="aspect-[16/10]"
                            rounded="rounded-none"
                          />
                          <div className="flex flex-1 flex-col p-4">
                            <h3 className="text-base font-bold text-ink group-hover:text-brand">{m.name}</h3>
                            <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-steel">
                              {m.tagline}
                            </p>
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
