import Link from "next/link";
import { Icon } from "./Icons";
import { t } from "@/i18n/strings";
import type { Locale } from "@/i18n/config";

export function CatalogCTA({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pdf = `/catalog/sany-catalog-${locale}.pdf`;
  return (
    <div className={`container-max ${className}`}>
      <div className="relative isolate overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-12">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 380px at 90% 10%, rgba(230,0,18,.28) 0%, transparent 60%), linear-gradient(180deg,#12151d,#0b0d12)",
          }}
        />
        <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow !text-brand-soft">{t("catalog.eyebrow", locale)}</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">{t("catalog.title", locale)}</h2>
            <p className="mt-2 max-w-xl text-white/70">{t("catalog.body", locale)}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a href={pdf} download className="btn btn-primary !px-6 !py-3.5 text-base">
              <Icon.Download size={18} /> {t("catalog.download", locale)}
            </a>
            <Link href="/catalog" className="btn btn-white !px-6 !py-3.5 text-base">
              {t("catalog.open", locale)} <Icon.ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
