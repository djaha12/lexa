import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductVisual } from "@/components/ProductVisual";
import { Icon } from "@/components/Icons";
import { news } from "@/data/site";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { locNews } from "@/i18n/site";

export const metadata = { title: "Newsroom" };

export default async function NewsPage() {
  const locale = await getLocale();
  const fmt = (d: string) => new Date(d).toLocaleDateString(locale, { month: "long", day: "numeric", year: "numeric" });
  const [lead, ...rest] = news;
  const ll = locNews(lead.slug, locale, { title: lead.title, excerpt: lead.excerpt, tag: lead.tag });

  return (
    <>
      <PageHero
        eyebrow={t("news.eyebrow", locale)}
        title={t("news.title", locale)}
        intro={t("news.intro", locale)}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("nav.news", locale) }]}
      />

      <section className="section-pad bg-paper">
        <div className="container-max">
          <Reveal>
            <Link href={`/news/${lead.slug}`} className="card card-hover group grid overflow-hidden md:grid-cols-2">
              <ProductVisual accentKey={lead.accent} icon="chip" className="aspect-[16/10] md:aspect-auto" rounded="rounded-none" />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs text-mist">
                  <span className="font-semibold uppercase tracking-wide text-brand">{ll.tag}</span>
                  <span>·</span>
                  <time>{fmt(lead.date)}</time>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-ink group-hover:text-brand md:text-3xl">{ll.title}</h2>
                <p className="mt-3 text-steel">{ll.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand">
                  {t("news.read", locale)} <Icon.ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rest.map((n, i) => {
              const ln = locNews(n.slug, locale, { title: n.title, excerpt: n.excerpt, tag: n.tag });
              return (
                <Reveal key={n.slug} delay={i * 70}>
                  <Link href={`/news/${n.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                    <ProductVisual accentKey={n.accent} icon="chip" className="aspect-[16/10]" rounded="rounded-none" intensity="soft" />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs text-mist">
                        <span className="font-semibold uppercase tracking-wide text-brand">{ln.tag}</span>
                        <span>·</span>
                        <time>{fmt(n.date)}</time>
                      </div>
                      <h3 className="mt-2 flex-1 text-lg font-bold leading-snug text-ink group-hover:text-brand">{ln.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-steel">{ln.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
