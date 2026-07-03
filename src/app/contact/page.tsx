import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { dealer, telHref } from "@/config/dealer";

export const metadata = { title: "Контакты" };

const S = {
  talk: { ru: "Свяжитесь с нами", en: "Get in touch", zh: "联系我们" } as L,
  talkBody: {
    ru: "Позвоните, напишите или приезжайте в наш филиал. Поможем подобрать технику, рассчитать стоимость и организовать сервис.",
    en: "Call, write or visit our branch. We'll help you choose equipment, quote it and arrange service.",
    zh: "致电、留言或到访我们的分公司。我们将帮您选型、报价并安排服务。",
  } as L,
  call: { ru: "Телефоны", en: "Phone", zh: "电话" } as L,
  email: { ru: "Эл. почта", en: "Email", zh: "邮箱" } as L,
  branch: { ru: "Наш филиал", en: "Our branch", zh: "我们的分公司" } as L,
  hours: { ru: "Часы работы", en: "Opening hours", zh: "营业时间" } as L,
};

export default async function ContactPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow", locale)}
        title={t("contact.title", locale)}
        intro={t("contact.intro", locale)}
        breadcrumbs={[{ label: "SANY Кыргызстан", href: "/" }, { label: t("nav.contact", locale) }]}
        icon="delivery"
      />

      <section className="section-pad bg-paper">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink">{tx(S.talk, locale)}</h2>
            <p className="mt-3 text-steel">{tx(S.talkBody, locale)}</p>

            <div className="mt-8 space-y-3">
              {/* phones */}
              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Phone size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(S.call, locale)}</div>
                  <div className="mt-0.5 flex flex-col">
                    {dealer.phones.map((p) => (
                      <a key={p} href={telHref(p)} className="font-semibold text-ink hover:text-brand">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* email */}
              <a href={`mailto:${dealer.email}`} className="card flex items-center gap-4 p-5 hover:border-brand">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Mail size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(S.email, locale)}</div>
                  <div className="font-semibold text-ink">{dealer.email}</div>
                </div>
              </a>
              {/* branch address */}
              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Pin size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{tx(S.branch, locale)}</div>
                  <div className="font-semibold text-ink">
                    {tx(dealer.address, locale)}, {tx(dealer.city, locale)}
                  </div>
                  <div className="mt-1 text-sm text-steel">{tx(S.hours, locale)}: {tx(dealer.hours, locale)}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Suspense fallback={<div className="card p-8 text-steel">…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
