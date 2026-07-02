import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { company, timeline, valueProps, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SANY is one of the world's leading manufacturers of construction and industrial equipment, founded in 1989 and serving 180+ countries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SANY"
        title="Quality changes the world"
        intro={company.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        icon="globe"
      />

      {/* intro stats */}
      <section className="border-b border-line bg-white">
        <div className="container-max grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-ink">
                {s.value}
                <span className="text-brand">{s.suffix}</span>
              </div>
              <p className="mt-1 text-sm text-steel">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* mission */}
      <section className="section-pad bg-paper">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our mission"
              title="Building a better world, one machine at a time"
              intro="Since 1989, SANY has grown from a small welding-materials workshop into a global leader in heavy equipment, driven by relentless investment in R&D and intelligent manufacturing."
            />
            <p className="mt-4 text-steel">
              Today our machines build the roads, bridges, cities, mines and clean-energy projects that
              move humanity forward — backed by service and parts in more than 180 countries.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "1989", v: "Year founded" },
                { k: company.headquarters, v: "Headquarters" },
                { k: "5%+", v: "of revenue into R&D" },
                { k: "Top 3", v: "Global equipment maker" },
              ].map((x) => (
                <div key={x.v} className="card p-6">
                  <div className="text-2xl font-extrabold text-brand">{x.k}</div>
                  <p className="mt-1 text-sm text-steel">{x.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* timeline */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading eyebrow="Milestones" title="A journey of growth" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 6) * 60}>
                <div className="relative">
                  <div className="text-3xl font-extrabold text-brand">{t.year}</div>
                  <div className="mt-3 h-px w-full bg-line" />
                  <h3 className="mt-4 font-bold text-ink">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-steel">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow="What drives us" title="Our values in action" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 70}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CategoryIcon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-steel">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* sustainability / careers / investors anchors */}
      <section id="sustainability" className="scroll-mt-24 bg-ink py-20 text-white">
        <div className="container-max grid gap-10 lg:grid-cols-3">
          {[
            {
              id: "sustainability",
              title: "Sustainability",
              body: "Electrification, energy storage and greener manufacturing to reach net-zero — decarbonising heavy industry from the inside out.",
              cta: "Our commitments",
            },
            {
              id: "careers",
              title: "Careers",
              body: "Join 30,000+ colleagues building the future of construction and clean energy across the globe.",
              cta: "See open roles",
            },
            {
              id: "investors",
              title: "Investors",
              body: "SANY is publicly listed with a track record of innovation-led growth and global expansion.",
              cta: "Investor relations",
            },
          ].map((b) => (
            <div key={b.id} id={b.id} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-xl font-bold">{b.title}</h3>
              <p className="mt-3 text-white/70">{b.body}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-soft hover:text-white">
                {b.cta} <Icon.ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
