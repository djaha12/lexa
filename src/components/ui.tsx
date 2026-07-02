import Link from "next/link";
import { Icon } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-ink md:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-steel">{intro}</p>}
    </div>
  );
}

export function Badge({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "dark" | "green";
}) {
  const tones = {
    brand: "bg-brand-soft text-brand-700",
    dark: "bg-ink text-white",
    green: "bg-emerald-100 text-emerald-800",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-steel">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {it.href ? (
            <Link href={it.href} className="hover:text-brand">
              {it.label}
            </Link>
          ) : (
            <span className="font-medium text-ink">{it.label}</span>
          )}
          {i < items.length - 1 && <Icon.ChevronRight size={14} className="text-mist" />}
        </span>
      ))}
    </nav>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand ${className}`}
    >
      {children}
      <Icon.ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
