import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { PhoneNumbers } from "@/components/PhoneNumbers";
import { Icon } from "@/components/Icons";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";
import { dealer } from "@/config/dealer";

export const metadata = { title: "Контакты" };

const S = {
  talk: { ru: "Свяжитесь с нами", en: "Get in touch", zh: "联系我们" } as L,
  talkBody: {
    ru: "Позвоните, напишите в WhatsApp или приезжайте в наш офис. Поможем подобрать технику, рассчитать стоимость и организовать сервис.",
    en: "Call, message us on WhatsApp or visit our office. We'll help you choose equipment, quote it and arrange service.",
    zh: "致电、通过 WhatsApp 留言或到访我们的办公室。我们将帮您选型、报价并安排服务。",
  } as L,
  call: { ru: "Телефоны", en: "Phone", zh: "电话" } as L,
  office: { ru: "Офис в Бишкеке", en: "Office in Bishkek", zh: "比什凯克办公室" } as L,
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
              {/* phones + whatsapp */}
              <div className="glass glass-sheen relative flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Phone size={20} />
                </span>
                <div className="relative">
                  <div className="mb-1 text-sm text-mist">{tx(S.call, locale)}</div>
                  <PhoneNumbers phones={dealer.phones} locale={locale} />
                </div>
              </div>
              {/* office address */}
              <div className="glass glass-sheen relative flex items-start gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Pin size={20} />
                </span>
                <div className="relative">
                  <div className="text-sm text-mist">{tx(S.office, locale)}</div>
                  <div className="font-semibold text-ink">
                    {tx(dealer.address, locale)}, {tx(dealer.city, locale)}
                  </div>
                  <div className="mt-1 text-sm text-steel">
                    {tx(S.hours, locale)}: {tx(dealer.hours, locale)}
                  </div>
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
