import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductVisual } from "@/components/ProductVisual";
import { Icon } from "@/components/Icons";
import { news } from "@/data/site";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "The latest product launches, milestones and stories from SANY.",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" });

export default function NewsPage() {
  const [lead, ...rest] = news;
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Stories from SANY"
        intro="Product launches, milestones and the people building the future of heavy industry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Newsroom" }]}
      />

      <section className="section-pad bg-paper">
        <div className="container-max">
          {/* featured */}
          <Reveal>
            <Link
              href={`/news/${lead.slug}`}
              className="card card-hover group grid overflow-hidden md:grid-cols-2"
            >
              <ProductVisual accentKey={lead.accent} icon="chip" className="aspect-[16/10] md:aspect-auto" rounded="rounded-none" />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs text-mist">
                  <span className="font-semibold uppercase tracking-wide text-brand">{lead.tag}</span>
                  <span>·</span>
                  <time>{fmt(lead.date)}</time>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-ink group-hover:text-brand md:text-3xl">
                  {lead.title}
                </h2>
                <p className="mt-3 text-steel">{lead.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand">
                  Read story <Icon.ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* rest */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 70}>
                <Link href={`/news/${n.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                  <ProductVisual accentKey={n.accent} icon="chip" className="aspect-[16/10]" rounded="rounded-none" intensity="soft" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-mist">
                      <span className="font-semibold uppercase tracking-wide text-brand">{n.tag}</span>
                      <span>·</span>
                      <time>{fmt(n.date)}</time>
                    </div>
                    <h3 className="mt-2 flex-1 text-lg font-bold leading-snug text-ink group-hover:text-brand">
                      {n.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-steel">{n.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
