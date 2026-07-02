import { Breadcrumbs } from "./ui";
import { CategoryIcon } from "./Icons";

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  stat,
  icon,
  accentKey = "stone",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  stat?: string;
  icon?: string;
  accentKey?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 500px at 80% -20%, #2a3140 0%, transparent 55%), radial-gradient(700px 400px at -5% 120%, rgba(230,0,18,.18) 0%, transparent 60%), linear-gradient(180deg,#0b0d12,#12151d)",
        }}
      />
      <div className="grain absolute inset-0 -z-10 opacity-50" aria-hidden />
      {icon && (
        <div className="pointer-events-none absolute -right-10 top-16 -z-10 opacity-[0.06]" aria-hidden>
          <CategoryIcon name={icon} size={420} strokeWidth={0.6} className="text-white" />
        </div>
      )}
      <div className="container-max pt-32 pb-16 md:pt-40 md:pb-20">
        {breadcrumbs && (
          <div className="mb-6 [&_a]:text-white/55 [&_a:hover]:text-white [&_span]:text-white/80">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && <p className="eyebrow !text-brand-soft">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        {stat && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
            {stat}
          </p>
        )}
      </div>
    </section>
  );
}
