import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { regions } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SANY sales and support, or find your local dealer.",
};

const offices = [
  { region: "Global HQ", city: "Changsha, China", phone: "+86 400-8866-318", email: "export@sany.com.cn" },
  { region: "Europe", city: "Cologne, Germany", phone: "+49 221 8888 000", email: "europe@sany.com" },
  { region: "Americas", city: "Peachtree City, USA", phone: "+1 470 552 6000", email: "americas@sany.com" },
  { region: "Middle East", city: "Dubai, UAE", phone: "+971 4 000 0000", email: "mea@sany.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's build something"
        intro="Request a quote, ask a technical question or find your nearest dealer. Our team responds fast."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        icon="globe"
      />

      <section className="section-pad bg-paper">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left: info */}
          <div>
            <h2 className="text-2xl font-bold text-ink">Talk to SANY</h2>
            <p className="mt-3 text-steel">
              Whether you need a single machine or a full fleet, our specialists will help you choose
              the right equipment, financing and support package.
            </p>

            <div className="mt-8 space-y-3">
              <a href="tel:+861234567890" className="card flex items-center gap-4 p-5 hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Phone size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">Call sales</div>
                  <div className="font-semibold text-ink">400-8866-318</div>
                </div>
              </a>
              <a href="mailto:export@sany.com.cn" className="card flex items-center gap-4 p-5 hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon.Mail size={20} />
                </span>
                <div>
                  <div className="text-sm text-mist">Email us</div>
                  <div className="font-semibold text-ink">export@sany.com.cn</div>
                </div>
              </a>
            </div>

            <h3 className="mt-10 text-lg font-bold text-ink">Regional offices</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={o.region} className="rounded-xl border border-line bg-white p-4">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-brand">
                    <Icon.Pin size={15} /> {o.region}
                  </div>
                  <div className="mt-1 font-medium text-ink">{o.city}</div>
                  <div className="mt-1 text-sm text-steel">{o.phone}</div>
                  <div className="text-sm text-steel">{o.email}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r.name} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-steel ring-1 ring-line">
                  {r.name}
                </span>
              ))}
            </div>
          </div>

          {/* right: form */}
          <div>
            <Suspense fallback={<div className="card p-8 text-steel">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
