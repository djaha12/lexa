# Site photography

Drop real photos here, then reference them in `src/config/images.ts`.
Every slot falls back to the built-in gradient design when unset, so the site
always looks complete.

## Slots

| File you add                         | Set in `src/config/images.ts`      | Where it shows |
|--------------------------------------|-------------------------------------|----------------|
| `public/images/hero.jpg`             | `siteImages.hero = "/images/hero.jpg"`         | Homepage hero background (with a dark overlay for readable text). Best: a wide SANY line-up shot. |
| `public/images/showcase.jpg`         | `siteImages.showcase = "/images/showcase.jpg"` | Full-width band on the homepage. Best: a single machine at work. |
| `public/images/categories/<slug>.jpg`| `categoryImages.<slug> = "/images/categories/<slug>.jpg"` | Product cards / previews for that whole category (fallback for its models). |
| `public/images/models/<slug>.jpg`    | `modelImages.<slug> = "/images/models/<slug>.jpg"` | That specific model's card and detail page. |

Category slugs: `excavator`, `concrete-machinery`, `crane`, `road-machinery`,
`port-machinery`, `mining-machinery`, `piling-machinery`, `truck`,
`aerial-work-platform`, `renewable-energy`.

Recommended sizes: hero ≥ 1920×1080, showcase ≥ 1600×900, category ≈ 1200×800,
model ≈ 1200×900. JPG or WebP.
