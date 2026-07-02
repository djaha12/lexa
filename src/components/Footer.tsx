import Link from "next/link";
import { categories } from "@/data/products";
import { Icon, Logo } from "./Icons";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About SANY", href: "/about" },
      { label: "Newsroom", href: "/news" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Careers", href: "/about#careers" },
      { label: "Investors", href: "/about#investors" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Service & parts", href: "/service" },
      { label: "Find a dealer", href: "/contact" },
      { label: "Financing", href: "/service#financing" },
      { label: "Training", href: "/service#training" },
      { label: "Warranty", href: "/service#warranty" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "By industry", href: "/solutions" },
      { label: "New energy", href: "/solutions#new-energy" },
      { label: "Intelligent machines", href: "/solutions#smart" },
      { label: "Fleet & telematics", href: "/service#telematics" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-max grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">Ready to move your project forward?</h3>
            <p className="mt-2 max-w-xl text-white/65">
              Talk to a SANY specialist about the right equipment, financing and after-sales support
              for your operation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Contact sales <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              Browse products
            </Link>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="container-max grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            One of the world&apos;s leading manufacturers of construction and industrial equipment,
            serving customers in more than 180 countries and regions.
          </p>
          <div className="mt-5 flex gap-3">
            {["in", "X", "f", "▶"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-sm text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/90">Products</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="text-white/60 transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="font-medium text-brand-soft hover:text-white">
                View all →
              </Link>
            </li>
          </ul>
        </div>

        {columns.slice(0, 2).map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white/90">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom */}
      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-3 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {2026} SANY Global. All rights reserved. Independent concept site.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-white">Privacy</Link>
            <Link href="/about" className="hover:text-white">Terms</Link>
            <Link href="/about" className="hover:text-white">Cookies</Link>
            <Link href="/contact" className="hover:text-white">Global network</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
