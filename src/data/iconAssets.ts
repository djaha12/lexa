// ============================================================
//  Raster icon overrides (e.g. Higgsfield-generated PNGs)
// ------------------------------------------------------------
//  How to use your own generated icons:
//   1. Drop the image files into  /public/icons/<key>.png
//      (transparent PNG recommended — run Higgsfield "remove background").
//      Keys: excavator, concrete, crane, roller, port,
//            mining, piling, truck, aerial, wind
//   2. Flip the matching key below to `true`.
//   3. <CategoryIcon> will then render your image instead of the
//      built-in SVG — everywhere it appears, with zero other changes.
//  Leave a key `false` (or missing) to keep the crisp built-in SVG.
// ============================================================

export const rasterExt = "png"; // change to "webp" if you export webp

export const rasterIcons: Record<string, boolean> = {
  excavator: false,
  concrete: false,
  crane: false,
  roller: false,
  port: false,
  mining: false,
  piling: false,
  truck: false,
  aerial: false,
  wind: false,
};
