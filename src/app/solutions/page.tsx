import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { industries } from "@/data/site";
import { categories } from "@/data/products";
import { accent } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry solutions, new-energy machines and intelligent equipment from SANY — matched to how you work.",
};

const industryCategories: Record<string, string[]> = {
  "Building Construction": ["excavator", "concrete-machinery", "crane", "aerial-work-platform"],
  Infrastructure: ["excavator", "road-machinery", "piling-machinery", "crane"],
  "Mining & Quarrying": ["mining-machinery", "excavator", "truck"],
  "Energy & Wind": ["renewable-energy", "crane", "piling-machinery"],
  "Ports & Logistics": ["port-machinery", "truck"],
  "Municipal & Utility": ["excavator", "road-machinery", "aerial-work-platform"],
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Equipment matched to your mission"
        intro="Every sector has its own demands. Explore how SANY equipment, new-energy technology and intelligent machines come together to solve them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        icon="chip"
      />

      {/* by industry */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow="By industry" title="Built for your sector" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {industries.map((ind, i) => {
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
                        <h3 className="text-lg font-bold text-ink">{ind.name}</h3>
                        <p className="text-sm text-steel">{ind.blurb}</p>
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
                          <CategoryIcon name={c.icon} size={14} /> {c.shortName}
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

      {/* new energy */}
      <section id="new-energy" className="scroll-mt-24 bg-ink py-20 text-white md:py-28">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow !text-emerald-300">New energy</span>
            <h2 className="mt-3 text-3xl font-bold md:text-[2.6rem]">Electrifying heavy industry</h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">
              Battery-electric, battery-swap and hydrogen technologies across excavators, trucks,
              mining haulers and storage — cutting emissions and cost per hour.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/renewable-energy" className="btn btn-primary">
                Renewable energy <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/products/truck" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
                Electric trucks
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "SY215E", v: "Electric excavator" },
                { k: "SKT55E", v: "Electric mining truck" },
                { k: "e-Truck", v: "Battery-swap tractor" },
                { k: "BESS", v: "Grid-scale storage" },
              ].map((x) => (
                <div key={x.v} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xl font-extrabold text-emerald-300">{x.k}</div>
                  <p className="mt-1 text-sm text-white/60">{x.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* smart machines */}
      <section id="smart" className="section-pad scroll-mt-24 bg-white">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Intelligent machines"
              title="Smarter iron, better outcomes"
              intro="Intelligent hydraulics, machine guidance, remote diagnostics and digital twins turn every SANY machine into a connected, data-driven asset."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Telematics for real-time fleet visibility",
                "Machine guidance for grade & payload accuracy",
                "Predictive maintenance to prevent downtime",
                "Remote & autonomous-ready operation",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-steel">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon.Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="card card-hover flex flex-col gap-3 p-6"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                  >
                    <CategoryIcon name={c.icon} size={22} />
                  </span>
                  <span className="font-semibold text-ink">{c.shortName}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
