import Link from "next/link";
import { Icon } from "./Icons";
import { t } from "@/i18n/strings";
import { tx, type L, type Locale } from "@/i18n/config";
import { siteImages } from "@/config/images";

const copy: { title: L; body: L } = {
  title: {
    ru: "Техника SANY для любых задач",
    en: "SANY machines for any job",
    zh: "SANY 设备，胜任各类工况",
  },
  body: {
    ru: "Экскаваторы, краны, бетонная и дорожная техника — со склада и под заказ, с сервисом и оригинальными запчастями по всему Кыргызстану.",
    en: "Excavators, cranes, concrete and road machinery — in stock and to order, with service and genuine parts across Kyrgyzstan.",
    zh: "挖掘机、起重机、混凝土与路面机械——现货及订购，并提供覆盖全吉尔吉斯斯坦的服务与原厂配件。",
  },
};

/** Full-width photo band — renders only when a showcase photo is configured. */
export function ShowcaseBand({ locale }: { locale: Locale }) {
  if (!siteImages.showcase) return null;
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteImages.showcase})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(90deg, rgba(11,13,18,.9) 0%, rgba(11,13,18,.6) 55%, rgba(11,13,18,.3) 100%)" }}
        aria-hidden
      />
      <div className="container-max py-24 text-white md:py-32">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold md:text-4xl">{tx(copy.title, locale)}</h2>
          <p className="mt-4 text-lg text-white/80">{tx(copy.body, locale)}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary">
              {t("cta.browseProducts", locale)} <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-white">
              {t("cta.requestQuote", locale)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
