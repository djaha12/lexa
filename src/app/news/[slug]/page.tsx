import { notFound } from "next/navigation";
import Link from "next/link";
import { news } from "@/data/site";
import { ProductVisual } from "@/components/ProductVisual";
import { Breadcrumbs } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { locNews } from "@/i18n/site";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) notFound();
  const locale = await getLocale();
  const ln = locNews(n.slug, locale, { title: n.title, excerpt: n.excerpt, tag: n.tag });
  const fmt = (d: string) => new Date(d).toLocaleDateString(locale, { month: "long", day: "numeric", year: "numeric" });
  const more = news.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="bg-white pt-28 md:pt-32">
        <div className="container-max max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "SANY", href: "/" },
              { label: t("nav.news", locale), href: "/news" },
              { label: ln.tag },
            ]}
          />
          <div className="mt-6 flex items-center gap-2 text-sm text-mist">
            <span className="font-semibold uppercase tracking-wide text-brand">{ln.tag}</span>
            <span>·</span>
            <time>{fmt(n.date)}</time>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink md:text-5xl">{ln.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-steel">{ln.excerpt}</p>
        </div>

        <div className="container-max mt-10 max-w-4xl">
          <ProductVisual accentKey={n.accent} icon="chip" className="aspect-[16/8]" rounded="rounded-3xl" />
        </div>

        <div className="container-max mt-12 max-w-3xl pb-16">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink/80">
            <p>{t("news.article.p1", locale)}</p>
            <p>{t("news.article.p2", locale)}</p>
            <h2 className="!mt-10 text-2xl font-bold text-ink">{t("news.article.h2", locale)}</h2>
            <p>{t("news.article.p3", locale)}</p>
            <p>{t("news.article.p4", locale)}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
            <Link href="/contact" className="btn btn-primary">
              {t("cta.talkSany", locale)} <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/news" className="btn btn-ghost">
              {t("news.backTo", locale)}
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-paper py-16">
        <div className="container-max">
          <h2 className="text-xl font-bold text-ink">{t("news.more", locale)}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {more.map((m) => {
              const lm = locNews(m.slug, locale, { title: m.title, excerpt: m.excerpt, tag: m.tag });
              return (
                <Link key={m.slug} href={`/news/${m.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                  <ProductVisual accentKey={m.accent} icon="chip" className="aspect-[16/10]" rounded="rounded-none" intensity="soft" />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand">{lm.tag}</span>
                    <h3 className="mt-1.5 flex-1 font-bold leading-snug text-ink group-hover:text-brand">{lm.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
