// ============================================================
//  i18n core — Russian / English / Chinese
// ============================================================

export const locales = ["ru", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  zh: "中文",
};

export const localeShort: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  zh: "中文",
};

export const COOKIE = "locale";

/** Localized string: one value per locale. */
export type L = Record<Locale, string>;
/** Localized string array. */
export type LArr = Record<Locale, string[]>;

export const isLocale = (v: unknown): v is Locale =>
  typeof v === "string" && (locales as readonly string[]).includes(v);

/** Resolve a localized string with graceful fallback (locale → en → ru). */
export const tx = (v: L | undefined, l: Locale, fallback = ""): string =>
  v?.[l] ?? v?.en ?? v?.ru ?? fallback;

/** Resolve a localized array with graceful fallback. */
export const txa = (v: LArr | undefined, l: Locale, fallback: string[] = []): string[] =>
  v?.[l] ?? v?.en ?? v?.ru ?? fallback;
