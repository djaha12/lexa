import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { regions } from "@/data/site";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { locOffice, locRegion } from "@/i18n/site";

export const metadata: Metadata = { title: "Contact" };

const offices = [
  { key: "Global HQ", region: "Global HQ", city: "Changsha, China", phone: "+86 400-8866-318", email: "export@sany.com.cn" },
  { key: "Europe", region: "Europe", city: "Cologne, Germany", phone: "+49 221 8888 000", email: "europe@sany.com" },
  { key: "Americas", region: "Americas", city: "Peachtree City, USA", phone: "+1 470 552 6000", email: "americas@sany.com" },
  { key: "Middle East", region: "Middle East", city: "Dubai, UAE", phone: "+971 4 000 0000", email: "mea@sany.com" },
];

export default async function ContactPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow", locale)}
        title={t("contact.title", locale)}
        intro={t("contact.intro", locale)}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("nav.contact", locale) }]}
        icon="globe"
      />

      <section className="section-pad bg-paper">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink">{t("contact.talk", locale)}</h2>
            <p className="mt-3 text-steel">{t("contact.talkBody", locale)}</p>

            <div className="mt-8 space-y-3">
              <a href="tel:+861234567890" className="card flex items-center gap-4 p-5 hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Phone size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{t("contact.callSales", locale)}</div>
                  <div className="font-semibold text-ink">400-8866-318</div>
                </div>
              </a>
              <a href="mailto:export@sany.com.cn" className="card flex items-center gap-4 p-5 hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Mail size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">{t("contact.emailUs", locale)}</div>
                  <div className="font-semibold text-ink">export@sany.com.cn</div>
                </div>
              </a>
            </div>

            <h3 className="mt-10 text-lg font-bold text-ink">{t("contact.offices", locale)}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {offices.map((o) => {
                const lo = locOffice(o.key, locale, { region: o.region, city: o.city });
                return (
                  <div key={o.key} className="rounded-xl border border-line bg-white p-4">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand">
                      <Icon.Pin size={15} /> {lo.region}
                    </div>
                    <div className="mt-1 font-medium text-ink">{lo.city}</div>
                    <div className="mt-1 text-sm text-steel">{o.phone}</div>
                    <div className="text-sm text-steel">{o.email}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r.name} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-steel ring-1 ring-line">
                  {locRegion(r.name, locale, r.note).name}
                </span>
              ))}
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
