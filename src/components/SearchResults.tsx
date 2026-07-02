"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { models, categories, getCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { CategoryIcon, Icon } from "./Icons";
import { accent } from "@/lib/theme";

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  useEffect(() => setQ(initial), [initial]);

  const query = q.trim().toLowerCase();

  const matchedCategories = useMemo(
    () =>
      query
        ? categories.filter(
            (c) =>
              c.name.toLowerCase().includes(query) ||
              c.tagline.toLowerCase().includes(query) ||
              c.subcategories.some((s) => s.name.toLowerCase().includes(query))
          )
        : [],
    [query]
  );

  const matchedModels = useMemo(() => {
    if (!query) return [];
    return models.filter((m) => {
      const cat = getCategory(m.categorySlug);
      const hay = [
        m.name,
        m.tagline,
        m.description,
        cat?.name ?? "",
        m.subcategorySlug,
        ...m.applications,
        ...(m.badges ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [query]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div>
      <form onSubmit={submit} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 shadow-sm">
        <Icon.Search size={20} className="text-steel" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder="Search excavators, cranes, pumps, models…"
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
          <p className="text-sm font-semibold uppercase tracking-wide text-mist">Browse categories</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="card card-hover flex items-center gap-3 p-4"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg"
                  style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                >
                  <CategoryIcon name={c.icon} size={20} />
                </span>
                <span className="font-semibold text-ink">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {query && (
        <div className="mt-8">
          <p className="text-steel">
            {matchedModels.length + matchedCategories.length} result
            {matchedModels.length + matchedCategories.length === 1 ? "" : "s"} for{" "}
            <span className="font-semibold text-ink">“{q}”</span>
          </p>

          {matchedCategories.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {matchedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand"
                >
                  <CategoryIcon name={c.icon} size={16} /> {c.name}
                </Link>
              ))}
            </div>
          )}

          {matchedModels.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matchedModels.map((m) => (
                <ProductCard key={m.slug} model={m} />
              ))}
            </div>
          ) : (
            matchedCategories.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-line bg-white p-12 text-center">
                <p className="text-lg font-semibold text-ink">No matches found</p>
                <p className="mt-2 text-steel">
                  Try a different keyword, or{" "}
                  <Link href="/products" className="font-medium text-brand hover:underline">
                    browse all products
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
