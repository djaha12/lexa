# SANY Global — Concept Website

A modern, production-grade recreation of a heavy-equipment manufacturer's website
(inspired by [sanyglobal.com](https://www.sanyglobal.com)) — rebuilt on a fresh,
faster, more maintainable stack with the **full product assortment**, mega-menu
navigation, catalogue browsing, search, product detail pages and lead-generation
forms.

> Independent concept / educational build. All product data and imagery are
> original placeholders; not affiliated with or endorsed by SANY Group.

## ✨ Highlights

- **Complete product catalogue** — 10 equipment families, 40+ representative models
  with technical specifications, highlights and applications:
  - Excavators (mini → large, wheeled, electric)
  - Concrete machinery (boom pumps to 86 m, trailer pumps, mixers, placing booms, batching plants)
  - Cranes (truck, all-terrain, rough-terrain, crawler to 4 000 t, tower, loader)
  - Road, Port, Mining and Piling machinery
  - Trucks (electric / battery-swap), Aerial work platforms
  - Renewable energy (onshore & offshore wind, energy storage)
- **Mega-menu navigation** with category icons and quick links
- **Global search** (overlay + dedicated `/search` page) across models, categories & keywords
- **Interactive category browser** — filter by product line, sort
- **Rich product pages** — spec grid, full spec table, highlights, applications, related models
- **Lead generation** — contact / quote form with model pre-fill
- **Content pages** — Solutions, Service & Support, About, Newsroom (+ articles)
- **Modern UX** — responsive, animated on-scroll reveals, count-up stats, custom 404
- **SEO ready** — per-page metadata, `sitemap.xml`, `robots.txt`, Open Graph
- **Accessible** — semantic markup, focus states, skip link, keyboard-friendly menus

## 🧱 Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack, fully static-exportable)
- [React 19](https://react.dev/) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) with a custom SANY design system
- Zero external runtime dependencies — all visuals are CSS/SVG (no image licensing)

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm run start
```

The build pre-renders **73 static pages** (every category, model and article),
so it can be deployed to any static host or edge platform (Vercel, Netlify,
Cloudflare Pages, etc.).

## 🗂 Project structure

```
src/
├─ app/                     # App Router pages
│  ├─ page.tsx              # Homepage
│  ├─ products/            # Catalogue, category & model pages
│  ├─ solutions/ service/ about/ news/ contact/ search/
│  ├─ sitemap.ts robots.ts icon.svg
│  └─ globals.css           # Design system (Tailwind v4 @theme)
├─ components/              # Header, Footer, Hero, cards, forms, icons…
├─ data/
│  ├─ products.ts           # Full product catalogue (categories → models)
│  └─ site.ts               # Company info, stats, news, navigation
└─ lib/theme.ts             # Accent colour system
```

## 🔧 Extending the catalogue

Add a model by appending to `models` in `src/data/products.ts` — the category,
listing, detail page, search index and sitemap update automatically. Add a whole
new equipment family by adding to `categories` (and a matching icon in
`src/components/Icons.tsx`).

To use real photography, drop images in `public/` and swap the `<ProductVisual/>`
placeholder for `next/image` in `ProductCard.tsx` and the model page.
