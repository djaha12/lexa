import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  models,
  getModel,
  getCategory,
  modelsInCategory,
} from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductCard } from "@/components/ProductCard";
import { CategoryIcon, Icon } from "@/components/Icons";
import { Breadcrumbs } from "@/components/ui";
import { accent } from "@/lib/theme";

export function generateStaticParams() {
  return models.map((m) => ({ category: m.categorySlug, model: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model } = await params;
  const m = getModel(model);
  if (!m) return { title: "Product" };
  return { title: `${m.name} — ${m.tagline}`, description: m.description };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}) {
  const { model } = await params;
  const m = getModel(model);
  if (!m) notFound();
  const cat = getCategory(m.categorySlug)!;
  const sub = cat.subcategories.find((s) => s.slug === m.subcategorySlug);
  const related = modelsInCategory(cat.slug)
    .filter((x) => x.slug !== m.slug)
    .slice(0, 4);
  const a = accent(m.accent);

  return (
    <>
      {/* top */}
      <section className="bg-ink pt-28 pb-0 text-white md:pt-32">
        <div className="container-max">
          <div className="[&_a]:text-white/55 [&_a:hover]:text-white [&_span]:text-white/80">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: cat.name, href: `/products/${cat.slug}` },
                { label: m.name },
              ]}
            />
          </div>

          <div className="grid gap-10 pt-8 pb-12 lg:grid-cols-2 lg:items-center">
            {/* visual */}
            <div>
              <ProductVisual accentKey={m.accent} icon={cat.icon} className="aspect-[4/3]" rounded="rounded-3xl" />
              <div className="mt-4 grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((n) => (
                  <ProductVisual
                    key={n}
                    accentKey={m.accent}
                    icon={cat.icon}
                    className="aspect-square opacity-70"
                    rounded="rounded-xl"
                  />
                ))}
              </div>
            </div>

            {/* summary */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 hover:bg-white/15"
                >
                  <CategoryIcon name={cat.icon} size={13} /> {cat.name}
                </Link>
                {sub && <span className="text-xs text-white/50">· {sub.name}</span>}
                {m.badges?.map((b) => (
                  <span key={b} className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{m.name}</h1>
              <p className="mt-3 text-lg text-white/70">{m.tagline}</p>

              {/* key specs */}
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {m.specs.map((s) => (
                  <div key={s.label} className="bg-ink p-4">
                    <dt className="text-[11px] uppercase tracking-wide text-white/50">{s.label}</dt>
                    <dd className="mt-1 text-xl font-bold" style={{ color: a.from }}>
                      {s.value}
                      {s.unit ? <span className="ml-1 text-sm font-medium text-white/60">{s.unit}</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/contact?model=${m.slug}`} className="btn btn-primary !px-6 !py-3.5">
                  Request a quote <Icon.ArrowRight size={17} />
                </Link>
                <a href="#specs" className="btn !px-6 !py-3.5 text-white border border-white/25 hover:bg-white/10">
                  <Icon.Download size={16} /> Full specifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* overview + highlights */}
      <section className="section-pad bg-white">
        <div className="container-max grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">
              Built to perform, engineered to last
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">{m.description}</p>

            <h3 className="mt-10 text-lg font-bold text-ink">Key highlights</h3>
            <ul className="mt-4 space-y-3">
              {m.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon.Check size={14} />
                  </span>
                  <span className="text-steel">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* applications */}
          <div>
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <Icon.Wrench size={18} className="text-brand" /> Typical applications
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.applications.map((ap) => (
                  <span key={ap} className="rounded-full bg-paper px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                    {ap}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-ink p-5 text-white">
                <p className="text-sm text-white/70">Need help choosing?</p>
                <p className="mt-1 font-semibold">Talk to a SANY specialist about the {m.name}.</p>
                <Link href="/contact" className="btn btn-white mt-4 w-full !py-2.5 text-sm">
                  Contact sales <Icon.ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* full spec table */}
      <section id="specs" className="scroll-mt-24 border-y border-line bg-paper py-16">
        <div className="container-max">
          <div className="flex items-center gap-2">
            <Icon.Spec size={20} className="text-brand" />
            <h2 className="text-2xl font-bold text-ink">Technical specifications</h2>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {[
                  { label: "Category", value: cat.name },
                  { label: "Product line", value: sub?.name ?? "—" },
                  ...m.specs.map((s) => ({
                    label: s.label,
                    value: `${s.value}${s.unit ? " " + s.unit : ""}`,
                  })),
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-paper/50" : ""}>
                    <th className="w-1/2 border-b border-line px-5 py-3.5 font-medium text-steel md:w-1/3">
                      {row.label}
                    </th>
                    <td className="border-b border-line px-5 py-3.5 font-semibold text-ink">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-mist">
            Specifications are indicative and may vary by market and configuration. Contact your local
            SANY team for the definitive datasheet.
          </p>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-max">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-ink">More {cat.name.toLowerCase()}</h2>
              <Link href={`/products/${cat.slug}`} className="text-sm font-semibold text-brand hover:underline">
                View all →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <ProductCard key={r.slug} model={r} compact />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
