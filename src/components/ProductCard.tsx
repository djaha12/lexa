import Link from "next/link";
import type { Model } from "@/data/products";
import { getCategory } from "@/data/products";
import { ProductVisual } from "./ProductVisual";
import { Icon } from "./Icons";
import { Badge } from "./ui";
import type { Locale } from "@/i18n/config";
import { locTagline, locSpecLabel, locUnit, locValue, locBadge } from "@/i18n/content";
import { imageForProduct } from "@/config/images";

export function ProductCard({
  model,
  locale,
  compact = false,
}: {
  model: Model;
  locale: Locale;
  compact?: boolean;
}) {
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
          image={imageForProduct(model)}
          alt={model.name}
          className={compact ? "aspect-[16/10]" : "aspect-[4/3]"}
          rounded="rounded-none"
        />
        {model.badges?.[0] && (
          <div className="absolute left-3 top-3">
            <Badge>{locBadge(model.badges[0], locale)}</Badge>
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
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-steel">{locTagline(model, locale)}</p>

        {!compact && (
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4">
            {model.specs.slice(0, 2).map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-wide text-mist">{locSpecLabel(s.label, locale)}</dt>
                <dd className="text-sm font-semibold text-ink">
                  {locValue(s.value, locale)}
                  {s.unit ? <span className="ml-0.5 text-xs font-normal text-steel">{locUnit(s.unit, locale)}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  );
}
