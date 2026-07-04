import { CategoryIcon } from "./Icons";
import { accent, gradient } from "@/lib/theme";

/**
 * Branded placeholder visual used in place of licensed product photography.
 * Renders a gradient field, a subtle technical grid and a large machine
 * silhouette derived from the category icon.
 */
export function ProductVisual({
  accentKey,
  icon,
  label,
  image,
  alt,
  className = "",
  rounded = "rounded-2xl",
  intensity = "normal",
}: {
  accentKey: string;
  icon: string;
  label?: string;
  /** optional real photo — when set, replaces the gradient placeholder */
  image?: string | null;
  /** accessible name for the photo (falls back to label, else decorative) */
  alt?: string;
  className?: string;
  rounded?: string;
  intensity?: "normal" | "soft";
}) {
  const a = accent(accentKey);

  if (image) {
    return (
      <div className={`relative overflow-hidden bg-ink ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt ?? label ?? ""} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,13,18,0) 55%, rgba(11,13,18,0.35) 100%)" }}
          aria-hidden
        />
        {label && (
          <div className="absolute bottom-3 left-4 right-4">
            <span className="inline-block rounded-md bg-black/40 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        background:
          intensity === "soft"
            ? `linear-gradient(135deg, ${a.tint} 0%, #ffffff 100%)`
            : gradient(accentKey),
      }}
    >
      {/* technical grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at 70% 30%, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 30%, #000, transparent 75%)",
        }}
        aria-hidden
      />
      {/* glow */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
        style={{ background: intensity === "soft" ? a.from : "#ffffff" }}
        aria-hidden
      />
      {/* silhouette */}
      <div className="absolute inset-0 grid place-items-center">
        <CategoryIcon
          name={icon}
          className={intensity === "soft" ? "text-black/10" : "text-white/85"}
          size={128}
          strokeWidth={1.1}
        />
      </div>
      {label && (
        <div className="absolute bottom-3 left-4 right-4">
          <span
            className="inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide backdrop-blur"
            style={{
              background: intensity === "soft" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.28)",
              color: intensity === "soft" ? a.ink : "#fff",
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
