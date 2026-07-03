"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/products";
import { Icon, CategoryIcon } from "./Icons";
import { accent } from "@/lib/theme";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/strings";
import { locCategory } from "@/i18n/content";

export function Hero() {
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % categories.length), 2600);
    return () => clearInterval(t);
  }, []);
  const active = categories[i];

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* background layers */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 78% -10%, #2a3140 0%, transparent 55%), radial-gradient(900px 500px at 10% 110%, rgba(230,0,18,.22) 0%, transparent 60%), linear-gradient(180deg,#0b0d12 0%,#12151d 100%)",
        }}
      />
      <div className="grain absolute inset-0 -z-10 opacity-60" aria-hidden />
      {/* drifting silhouette */}
      <div
        className="pointer-events-none absolute -right-16 top-24 -z-10 hidden opacity-[0.06] lg:block"
        aria-hidden
      >
        <CategoryIcon name={active.icon} size={520} strokeWidth={0.6} className="text-white" />
      </div>

      <div className="container-max grid gap-12 pt-36 pb-24 md:pt-44 md:pb-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t("hero.badge", locale)}
          </span>

          <h1 className="mt-6 text-balance break-words text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {t("hero.titleTop", locale)}
            <br />
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-brand to-[#ff5a67] bg-clip-text text-transparent">
                {t("hero.titleAccent", locale)}
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{t("hero.subcopy", locale)}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary !px-6 !py-3.5 text-base">
              {t("hero.exploreProducts", locale)} <Icon.ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="btn !px-6 !py-3.5 text-base text-white border border-white/25 hover:bg-white/10"
            >
              <Icon.Play size={15} /> {t("cta.getQuote", locale)}
            </Link>
          </div>

          {/* rotating category ticker */}
          <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
            <span className="text-white/40">{t("hero.nowViewing", locale)}</span>
            <Link
              href={`/products/${active.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-white transition-colors hover:border-brand"
            >
              <span style={{ color: accent(active.accent).from }}>
                <CategoryIcon name={active.icon} size={16} />
              </span>
              {locCategory(active, locale).name}
              <Icon.ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* right: category showcase card */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {categories.slice(0, 6).map((c, idx) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className={`group glass-dark glass-sheen relative overflow-hidden rounded-2xl p-4 transition-all hover:brightness-125 ${
                  idx === i % 6 ? "ring-1 ring-brand/60" : ""
                }`}
                style={{ minHeight: 104 }}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg"
                  style={{
                    background: `${accent(c.accent).from}22`,
                    color: accent(c.accent).from,
                  }}
                >
                  <CategoryIcon name={c.icon} size={20} />
                </span>
                <p className="mt-6 text-sm font-semibold text-white">{locCategory(c, locale).shortName}</p>
                <Icon.ArrowUpRight
                  size={15}
                  className="absolute right-3 top-3 text-white/30 transition-colors group-hover:text-brand"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* wave / fade to white */}
      <div className="h-16 bg-linear-to-b from-transparent to-white" />
    </section>
  );
}
