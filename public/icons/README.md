# Custom category icons (raster overrides)

Drop generated icon images here to override the built-in SVG icons.

- Filenames: `<key>.png` — one per machine category.
  Keys: `excavator`, `concrete`, `crane`, `roller`, `port`, `mining`,
  `piling`, `truck`, `aerial`, `wind`.
- Recommended: square (1:1), transparent background (run Higgsfield
  "remove background"), ~256–512 px.
- After adding a file, set its key to `true` in
  `src/data/iconAssets.ts`. The site then uses your image everywhere that
  category icon appears — no other code changes needed.

Leave a category out (or its flag `false`) to keep the crisp built-in SVG.
