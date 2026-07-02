import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { CategoryIcon, Icon } from "@/components/Icons";
import { categories, featuredModels, modelsInCategory } from "@/data/products";
import { valueProps, industries, news, regions } from "@/data/site";
import { accent } from "@/lib/theme";

export default function Home() {
  const featured = featuredModels();
  return (
    <>
      <Hero />

      {/* STATS */}
      <section className="border-b border-line bg-white">
        <div className="container-max py-14">
          <Stats />
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The full range"
              title="Every machine your project needs"
              intro="Ten equipment families, hundreds of models — one trusted brand. Explore the complete SANY assortment."
            />
            <ArrowLink href="/products" className="mb-2">
              View all products
            </ArrowLink>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, idx) => {
              const count = modelsInCategory(c.slug).length;
              return (
                <Reveal key={c.slug} delay={(idx % 3) * 80}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="card card-hover group flex h-full flex-col overflow-hidden"
                  >
                    <ProductVisual
                      accentKey={c.accent}
                      icon={c.icon}
                      className="aspect-[16/9]"
                      rounded="rounded-none"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 place-items-center rounded-lg"
                          style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                        >
                          <CategoryIcon name={c.icon} size={20} />
                        </span>
                        <h3 className="text-xl font-bold text-ink group-hover:text-brand">{c.name}</h3>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{c.tagline}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                        <span className="text-xs font-medium text-mist">
                          {count} models · {c.subcategories.length} lines
                        </span>
                        <Icon.ArrowRight
                          size={18}
                          className="text-brand transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Flagship & best-sellers"
            title="Featured equipment"
            intro="Proven performers trusted on jobsites in more than 180 countries."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 8).map((m, idx) => (
              <Reveal key={m.slug} delay={(idx % 4) * 70}>
                <ProductCard model={m} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SANY */}
      <section className="section-pad bg-paper">
        <div className="container-max grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why SANY"
              title="Engineered advantage, end to end"
              intro="From lighthouse factories to a service network spanning 180+ countries, everything is built to keep your operation productive."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-dark">
                About SANY <Icon.ArrowRight size={16} />
              </Link>
              <Link href="/service" className="btn btn-ghost">
                Service & support
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {valueProps.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 70}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <CategoryIcon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ENERGY SPOTLIGHT */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 500px at 85% 0%, rgba(52,211,153,.22) 0%, transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(230,0,18,.18) 0%, transparent 60%)",
          }}
        />
        <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow !text-emerald-300">New energy</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-[2.6rem]">
              Powering the zero-emission jobsite
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
              Battery-electric excavators, battery-swap heavy trucks, electric mining haulers and
              grid-scale storage — SANY is electrifying every corner of heavy industry.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Battery-swap refuels trucks in minutes",
                "Lower energy cost per hour than diesel",
                "Zero local emissions for urban & indoor work",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/80">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <Icon.Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/solutions#new-energy" className="btn btn-primary mt-8">
              Discover new energy <Icon.ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "422 kWh", v: "Battery capacity" },
                { k: "0 g", v: "Tailpipe CO₂" },
                { k: "24/7", v: "Battery-swap uptime" },
                { k: "15 MW", v: "Offshore turbine" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-3xl font-extrabold text-emerald-300">{s.k}</div>
                  <p className="mt-1 text-sm text-white/60">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Solutions by industry"
            title="Built for how you work"
            intro="Tailored equipment packages and expertise for every sector."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => (
              <Reveal key={ind.name} delay={(idx % 3) * 70}>
                <Link
                  href="/solutions"
                  className="card card-hover group flex items-center gap-4 p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                    <CategoryIcon name={ind.icon} size={24} />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink group-hover:text-brand">{ind.name}</h3>
                    <p className="text-sm text-steel">{ind.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Newsroom" title="Latest from SANY" />
            <ArrowLink href="/news" className="mb-2">
              All news
            </ArrowLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {news.map((n, idx) => (
              <Reveal key={n.slug} delay={(idx % 4) * 70}>
                <Link href={`/news/${n.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                  <ProductVisual
                    accentKey={n.accent}
                    icon="chip"
                    className="aspect-[16/10]"
                    rounded="rounded-none"
                    intensity="soft"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-mist">
                      <span className="font-semibold uppercase tracking-wide text-brand">{n.tag}</span>
                      <span>·</span>
                      <time>{new Date(n.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</time>
                    </div>
                    <h3 className="mt-2 flex-1 text-[15px] font-bold leading-snug text-ink group-hover:text-brand">
                      {n.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="section-pad bg-white">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Global presence"
              title="Local partner, worldwide"
              intro="With manufacturing bases on multiple continents and dealers across 180+ countries, SANY support is always close by."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {regions.map((r) => (
                <div key={r.name} className="rounded-xl border border-line p-4">
                  <div className="flex items-center gap-2 font-semibold text-ink">
                    <Icon.Pin size={16} className="text-brand" />
                    {r.name}
                  </div>
                  <p className="mt-1 text-sm text-steel">{r.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white">
              <div className="grain absolute inset-0 opacity-40" aria-hidden />
              <div className="relative">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { k: "180+", v: "Countries" },
                    { k: "30+", v: "Factories" },
                    { k: "100k+", v: "Machines / yr" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="text-3xl font-extrabold text-brand">{s.k}</div>
                      <p className="mt-1 text-xs text-white/60">{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-px bg-white/10" />
                <p className="mt-6 text-white/70">
                  “SANY equipment keeps our operations moving — with service and parts support we can
                  count on, wherever the work takes us.”
                </p>
                <p className="mt-3 text-sm font-semibold">— Global infrastructure customer</p>
                <Link href="/contact" className="btn btn-white mt-8">
                  Find your local team <Icon.ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
