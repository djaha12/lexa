import Link from "next/link";
import type { Model } from "@/data/products";
import { getCategory } from "@/data/products";
import { ProductVisual } from "./ProductVisual";
import { Icon } from "./Icons";
import { Badge } from "./ui";

export function ProductCard({ model, compact = false }: { model: Model; compact?: boolean }) {
  const cat = getCategory(model.categorySlug);
  return (
    <Link
      href={`/products/${model.categorySlug}/${model.slug}`}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative">
        <ProductVisual
          accentKey={model.accent}
          icon={cat?.icon ?? "excavator"}
          className={compact ? "aspect-[16/10]" : "aspect-[4/3]"}
          rounded="rounded-none"
        />
        {model.badges?.[0] && (
          <div className="absolute left-3 top-3">
            <Badge>{model.badges[0]}</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-center justify-between text-lg font-bold text-ink">
          {model.name}
          <Icon.ArrowUpRight
            size={18}
            className="text-mist transition-all group-hover:translate-x-0.5 group-hover:text-brand"
          />
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-steel">{model.tagline}</p>

        {!compact && (
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4">
            {model.specs.slice(0, 2).map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-wide text-mist">{s.label}</dt>
                <dd className="text-sm font-semibold text-ink">
                  {s.value}
                  {s.unit ? <span className="ml-0.5 text-xs font-normal text-steel">{s.unit}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  );
}
