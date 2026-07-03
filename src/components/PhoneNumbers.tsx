import { Icon } from "./Icons";
import { t } from "@/i18n/strings";
import type { Locale } from "@/i18n/config";
import { telHref, waHref } from "@/config/dealer";

/**
 * Renders each phone number with a call link and a WhatsApp affordance,
 * making it visually clear that every number is reachable by call or WhatsApp.
 */
export function PhoneNumbers({
  phones,
  locale,
  tone = "light",
  withNote = true,
  size = "md",
}: {
  phones: string[];
  locale: Locale;
  tone?: "light" | "dark";
  withNote?: boolean;
  size?: "sm" | "md";
}) {
  const dark = tone === "dark";
  const num = size === "sm" ? "text-sm" : "text-base";
  return (
    <div>
      <ul className="space-y-1.5">
        {phones.map((p) => (
          <li key={p} className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <a
              href={telHref(p)}
              className={`font-semibold ${num} ${dark ? "text-white hover:text-brand-soft" : "text-ink hover:text-brand"}`}
            >
              {p}
            </a>
            <a
              href={waHref(p)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${p}`}
              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold"
              style={{ background: "rgba(37,211,102,0.14)", color: "#1EB955" }}
            >
              <Icon.Whatsapp size={13} /> WhatsApp
            </a>
          </li>
        ))}
      </ul>
      {withNote && (
        <p className={`mt-2 flex items-center gap-1.5 text-xs ${dark ? "text-white/55" : "text-mist"}`}>
          <span style={{ color: "#25D366" }}>
            <Icon.Whatsapp size={13} />
          </span>
          {t("contact.phoneNote", locale)}
        </p>
      )}
    </div>
  );
}
