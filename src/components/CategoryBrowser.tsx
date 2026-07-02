"use client";

import { useMemo, useState } from "react";
import type { Model, Subcategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Icon } from "./Icons";

export function CategoryBrowser({
  models,
  subcategories,
  icon,
}: {
  models: Model[];
  subcategories: (Subcategory & { count: number })[];
  icon: string;
}) {
  const [active, setActive] = useState<string>("all");
  const [sort, setSort] = useState<"default" | "az">("default");

  const filtered = useMemo(() => {
    let list = active === "all" ? models : models.filter((m) => m.subcategorySlug === active);
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [active, sort, models]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterChip label={`All (${models.length})`} active={active === "all"} onClick={() => setActive("all")} />
          {subcategories
            .filter((s) => s.count > 0)
            .map((s) => (
              <FilterChip
                key={s.slug}
                label={`${s.name} (${s.count})`}
                active={active === s.slug}
                onClick={() => setActive(s.slug)}
              />
            ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-steel">
          <Icon.Spec size={16} />
          <label htmlFor="sort" className="sr-only">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as "default" | "az")}
            className="rounded-lg border border-line bg-white px-3 py-2 font-medium text-ink outline-none focus:border-brand"
          >
            <option value="default">Recommended</option>
            <option value="az">Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <ProductCard key={m.slug} model={m} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-2xl border border-dashed border-line bg-paper p-10 text-center text-steel">
          No models in this line yet — contact us for the latest availability.
        </p>
      )}
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-ink text-white"
          : "border border-line bg-white text-ink hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}
