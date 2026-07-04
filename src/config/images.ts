import type { Model } from "@/data/products";

// ============================================================
//  Site photography slots
// ------------------------------------------------------------
//  Drop real photos into /public/images/ and reference them here.
//  Every slot falls back to the built-in gradient design when null,
//  so the site always looks complete even with no photos.
//
//  Recommended sizes:
//   - hero:     wide landscape (SANY line-up), ~1920×1080+
//   - showcase: machine-at-work photo, ~1600×900+
//   - category: ~1200×800 per category  → /images/categories/<slug>.jpg
//   - model:    ~1200×900 per model     → /images/models/<slug>.jpg
// ============================================================

export const siteImages: { hero: string | null; showcase: string | null } = {
  hero: null, // e.g. "/images/hero.jpg"
  showcase: null, // e.g. "/images/showcase.jpg"
};

/** Per-category photos, keyed by category slug (e.g. "excavator"). */
export const categoryImages: Record<string, string> = {
  // excavator: "/images/categories/excavator.jpg",
};

/** Per-model photos, keyed by model slug (e.g. "sy215c"). */
export const modelImages: Record<string, string> = {
  // sy215c: "/images/models/sy215c.jpg",
};

export const imageForCategory = (slug: string): string | null => categoryImages[slug] ?? null;
export const imageForModel = (slug: string): string | null => modelImages[slug] ?? null;

/** Best photo for a model: its own, else its category's, else null (gradient). */
export const imageForProduct = (m: Model): string | null =>
  imageForModel(m.slug) ?? imageForCategory(m.categorySlug);
