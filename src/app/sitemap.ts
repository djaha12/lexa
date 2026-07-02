import type { MetadataRoute } from "next";
import { categories, models } from "@/data/products";
import { news } from "@/data/site";

const base = "https://sany-global.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/solutions", "/service", "/about", "/news", "/contact"].map(
    (p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })
  );
  const categoryRoutes = categories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const modelRoutes = models.map((m) => ({
    url: `${base}/products/${m.categorySlug}/${m.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const newsRoutes = news.map((n) => ({
    url: `${base}/news/${n.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...staticRoutes, ...categoryRoutes, ...modelRoutes, ...newsRoutes];
}
