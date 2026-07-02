import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { CategoryIcon, Icon } from "@/components/Icons";
import { timeline, valueProps, stats } from "@/data/site";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { locStatLabel, locValueProp, locTimeline, locCompany } from "@/i18n/site";

const blocks: { id: string; title: L; body: L; cta: L }[] = [
  {
    id: "sustainability",
    title: { ru: "Устойчивое развитие", en: "Sustainability", zh: "可持续发展" },
    body: {
      ru: "Электрификация, накопители энергии и более чистое производство ради нулевого нетто-выброса — декарбонизируем тяжёлую индустрию изнутри.",
      en: "Electrification, energy storage and greener manufacturing to reach net-zero — decarbonising heavy industry from the inside out.",
      zh: "电气化、储能与更清洁的制造，迈向净零——由内而外为重工业脱碳。",
    },
    cta: { ru: "Наши обязательства", en: "Our commitments", zh: "我们的承诺" },
  },
  {
    id: "careers",
    title: { ru: "Карьера", en: "Careers", zh: "招聘" },
    body: {
      ru: "Присоединяйтесь к 30 000+ коллег, создающих будущее строительства и чистой энергетики по всему миру.",
      en: "Join 30,000+ colleagues building the future of construction and clean energy across the globe.",
      zh: "加入全球 3 万多名同仁，共建工程建设与清洁能源的未来。",
    },
    cta: { ru: "Открытые вакансии", en: "See open roles", zh: "查看职位" },
  },
  {
    id: "investors",
    title: { ru: "Инвесторам", en: "Investors", zh: "投资者" },
    body: {
      ru: "SANY — публичная компания с историей роста, основанного на инновациях, и глобальной экспансии.",
      en: "SANY is publicly listed with a track record of innovation-led growth and global expansion.",
      zh: "SANY 为上市公司，拥有创新驱动增长与全球扩张的良好记录。",
    },
    cta: { ru: "Отношения с инвесторами", en: "Investor relations", zh: "投资者关系" },
  },
];

export const metadata = { title: "About" };

export default async function AboutPage() {
  const locale = await getLocale();
  const company = locCompany(locale);

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow", locale)}
        title={t("about.title", locale)}
        intro={company.intro}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("nav.about", locale) }]}
        icon="globe"
      />

      <section className="border-b border-line bg-white">
        <div className="container-max grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-ink">
                {s.value}
                <span className="text-brand">{s.suffix}</span>
              </div>
              <p className="mt-1 text-sm text-steel">{locStatLabel(s.label, locale)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={t("about.mission.eyebrow", locale)}
              title={t("about.mission.title", locale)}
              intro={t("about.mission.intro", locale)}
            />
            <p className="mt-4 text-steel">{t("about.mission.body", locale)}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "1989", v: t("about.founded", locale) },
                { k: company.headquarters, v: t("about.hq", locale) },
                { k: "5%+", v: t("about.rd", locale) },
                { k: "Top 3", v: t("about.top3", locale) },
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

      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading eyebrow={t("about.milestones.eyebrow", locale)} title={t("about.milestones.title", locale)} align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((tl, i) => {
              const lt = locTimeline(tl.year, locale, { title: tl.title, body: tl.body });
              return (
                <Reveal key={tl.year} delay={(i % 6) * 60}>
                  <div className="relative">
                    <div className="text-3xl font-extrabold text-brand">{tl.year}</div>
                    <div className="mt-3 h-px w-full bg-line" />
                    <h3 className="mt-4 font-bold text-ink">{lt.title}</h3>
                    <p className="mt-1.5 text-sm text-steel">{lt.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow={t("about.values.eyebrow", locale)} title={t("about.values.title", locale)} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => {
              const lv = locValueProp(v.icon, locale, { title: v.title, body: v.body });
              return (
                <Reveal key={v.title} delay={(i % 4) * 70}>
                  <div className="card h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                      <CategoryIcon name={v.icon} size={22} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{lv.title}</h3>
                    <p className="mt-2 text-sm text-steel">{lv.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sustainability" className="scroll-mt-24 bg-ink py-20 text-white">
        <div className="container-max grid gap-10 lg:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.id} id={b.id} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-xl font-bold">{tx(b.title, locale)}</h3>
              <p className="mt-3 text-white/70">{tx(b.body, locale)}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-soft hover:text-white">
                {tx(b.cta, locale)} <Icon.ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
