import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { news } from "@/data/site";
import { ProductVisual } from "@/components/ProductVisual";
import { Breadcrumbs } from "@/components/ui";
import { Icon } from "@/components/Icons";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) return { title: "News" };
  return { title: n.title, description: n.excerpt };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" });

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) notFound();
  const more = news.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="bg-white pt-28 md:pt-32">
        <div className="container-max max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Newsroom", href: "/news" },
              { label: n.tag },
            ]}
          />
          <div className="mt-6 flex items-center gap-2 text-sm text-mist">
            <span className="font-semibold uppercase tracking-wide text-brand">{n.tag}</span>
            <span>·</span>
            <time>{fmt(n.date)}</time>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink md:text-5xl">{n.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-steel">{n.excerpt}</p>
        </div>

        <div className="container-max mt-10 max-w-4xl">
          <ProductVisual accentKey={n.accent} icon="chip" className="aspect-[16/8]" rounded="rounded-3xl" />
        </div>

        <div className="container-max mt-12 max-w-3xl pb-16">
          <div className="prose-lg space-y-5 text-[17px] leading-relaxed text-ink/80">
            <p>
              SANY continues to push the boundaries of what heavy equipment can do. This development
              reflects the company&apos;s long-standing commitment to intelligent, efficient and
              sustainable machinery for customers around the world.
            </p>
            <p>
              Engineered in SANY&apos;s advanced &ldquo;lighthouse&rdquo; factories, the latest
              generation of products combines proven durability with new digital and new-energy
              technologies — delivering lower operating costs and a smaller environmental footprint
              without compromising on performance.
            </p>
            <h2 className="!mt-10 text-2xl font-bold text-ink">What it means for customers</h2>
            <p>
              For contractors and operators, advances like these translate into higher uptime, better
              fuel or energy efficiency, and the confidence that comes from a global service and parts
              network spanning more than 180 countries and regions.
            </p>
            <p>
              To learn how this can benefit your operation, get in touch with your local SANY team for
              a tailored consultation and quote.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
            <Link href="/contact" className="btn btn-primary">
              Talk to SANY <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/news" className="btn btn-ghost">
              Back to newsroom
            </Link>
          </div>
        </div>
      </article>

      {/* more */}
      <section className="border-t border-line bg-paper py-16">
        <div className="container-max">
          <h2 className="text-xl font-bold text-ink">More stories</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/news/${m.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                <ProductVisual accentKey={m.accent} icon="chip" className="aspect-[16/10]" rounded="rounded-none" intensity="soft" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">{m.tag}</span>
                  <h3 className="mt-1.5 flex-1 font-bold leading-snug text-ink group-hover:text-brand">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
