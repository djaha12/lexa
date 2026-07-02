import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Service & Support",
  description:
    "Genuine parts, maintenance, financing, operator training, warranty and telematics — SANY keeps your fleet productive across its whole life.",
};

const services = [
  { id: "parts", icon: "Wrench", title: "Genuine parts", body: "Regional distribution centres and fast delivery keep original SANY parts close to your jobsite." },
  { id: "maintenance", icon: "Spec", title: "Maintenance & repair", body: "Preventive maintenance plans and expert technicians maximise uptime and machine life." },
  { id: "financing", icon: "Download", title: "Financing", body: "Flexible leasing and financing packages tailored to your cash-flow and project needs." },
  { id: "training", icon: "Check", title: "Operator training", body: "Certified training improves safety, productivity and fuel efficiency on every machine." },
  { id: "warranty", icon: "Globe", title: "Warranty", body: "Comprehensive warranty coverage with support in more than 180 countries and regions." },
  { id: "telematics", icon: "Phone", title: "Fleet & telematics", body: "Real-time machine health, location and utilisation data to run a smarter fleet." },
];

const steps = [
  { n: "01", t: "Contact", d: "Reach your local SANY dealer or our global support line." },
  { n: "02", t: "Diagnose", d: "Remote telematics and expert diagnosis pinpoint the issue fast." },
  { n: "03", t: "Resolve", d: "Genuine parts and trained technicians get you running again." },
  { n: "04", t: "Optimise", d: "Ongoing plans keep your fleet performing at its best." },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service & support"
        title="Uptime, guaranteed by SANY"
        intro="Owning a SANY machine means a global network of parts, people and technology dedicated to keeping you productive — for the whole life of your equipment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service" }]}
        icon="chip"
      />

      {/* services grid */}
      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow="What we offer" title="End-to-end customer care" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const IconEl = (Icon as Record<string, React.FC<{ size?: number; className?: string }>>)[s.icon];
              return (
                <Reveal key={s.id} delay={(i % 3) * 70}>
                  <div id={s.id} className="card card-hover h-full scroll-mt-24 p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                      {IconEl && <IconEl size={24} />}
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading eyebrow="How it works" title="Support in four simple steps" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-cloud">{s.n}</div>
                  <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-steel">{s.d}</p>
                  {i < steps.length - 1 && (
                    <Icon.ArrowRight
                      size={20}
                      className="absolute -right-3 top-6 hidden text-mist md:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Need parts or service today?</h2>
            <p className="mt-2 text-white/65">Our team is ready to help you minimise downtime.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact support <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
