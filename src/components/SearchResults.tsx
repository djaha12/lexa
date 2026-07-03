"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { models, categories, getCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { CategoryIcon, Icon } from "./Icons";
import { accent } from "@/lib/theme";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/strings";
import { locCategory, locTagline, locApplications } from "@/i18n/content";

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const { locale } = useLocale();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  useEffect(() => setQ(initial), [initial]);

  const query = q.trim().toLowerCase();

  const matchedCategories = useMemo(
    () =>
      query
        ? categories.filter((c) => {
            const lc = locCategory(c, locale);
            return (
              lc.name.toLowerCase().includes(query) ||
              lc.tagline.toLowerCase().includes(query) ||
              c.name.toLowerCase().includes(query)
            );
          })
        : [],
    [query, locale]
  );

  const matchedModels = useMemo(() => {
    if (!query) return [];
    return models.filter((m) => {
      const cat = getCategory(m.categorySlug);
      const hay = [
        m.name,
        m.tagline,
        locTagline(m, locale),
        m.description,
        cat?.name ?? "",
        cat ? locCategory(cat, locale).name : "",
        ...m.applications,
        ...locApplications(m, locale),
        ...(m.badges ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [query, locale]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const total = matchedModels.length + matchedCategories.length;

  return (
    <div>
      <form onSubmit={submit} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 shadow-sm">
        <Icon.Search size={20} className="text-steel" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder={t("header.searchPlaceholder", locale)}
          className="h-14 w-full bg-transparent text-lg outline-none placeholder:text-mist"
        />
        {q && (
          <button type="button" onClick={() => setQ("")} className="text-steel hover:text-ink">
            <Icon.Close size={18} />
          </button>
        )}
      </form>

      {!query && (
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-mist">{t("search.browse", locale)}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.slug} href={`/products/${c.slug}`} className="card card-hover flex items-center gap-3 p-4">
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg"
                  style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                >
                  <CategoryIcon name={c.icon} size={20} />
                </span>
                <span className="font-semibold text-ink">{locCategory(c, locale).name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {query && (
        <div className="mt-8">
          <p className="break-words text-steel">
            {total} {total === 1 ? t("search.result", locale) : t("search.results", locale)}{" "}
            <span className="font-semibold text-ink">«{q}»</span>
          </p>

          {matchedCategories.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {matchedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand"
                >
                  <CategoryIcon name={c.icon} size={16} /> {locCategory(c, locale).name}
                </Link>
              ))}
            </div>
          )}

          {matchedModels.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matchedModels.map((m) => (
                <ProductCard key={m.slug} model={m} locale={locale} />
              ))}
            </div>
          ) : (
            matchedCategories.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-line bg-white p-12 text-center">
                <p className="text-lg font-semibold text-ink">{t("search.noMatch", locale)}</p>
                <p className="mt-2 text-steel">
                  {t("search.noMatchBody", locale)}{" "}
                  <Link href="/products" className="font-medium text-brand hover:underline">
                    {t("search.browseAll", locale)}
                  </Link>
                  .
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
