import Link from "next/link";
import { categories } from "@/data/products";
import { CategoryIcon, Icon } from "@/components/Icons";
import { accent } from "@/lib/theme";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, #2a3140 0%, transparent 55%), radial-gradient(700px 400px at 0% 120%, rgba(230,0,18,.2) 0%, transparent 60%), linear-gradient(180deg,#0b0d12,#12151d)",
        }}
      />
      <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div className="container-max flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <p className="text-[7rem] font-extrabold leading-none tracking-tight text-white/90 md:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">This page took a wrong turn</h1>
        <p className="mt-3 max-w-md text-white/65">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back home <Icon.ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
            Browse products
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:border-brand"
            >
              <span style={{ color: accent(c.accent).from }}>
                <CategoryIcon name={c.icon} size={15} />
              </span>
              {c.shortName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
