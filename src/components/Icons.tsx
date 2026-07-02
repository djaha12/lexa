import * as React from "react";
import { rasterIcons, rasterExt } from "@/data/iconAssets";

type P = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24): P => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

// ---------- Category / industry icons ----------

export const categoryPaths: Record<string, React.ReactNode> = {
  excavator: (
    <>
      <path d="M2 20.5h20" />
      <rect x="3" y="16" width="10" height="3.2" rx="1.6" />
      <path d="M6 16v-3.4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1V16" />
      <path d="M7.6 14.2h2.3" />
      <path d="M11.6 12.9l3.6-3 3.9 3.7" />
      <path d="M19.1 13.6l.9 2.8-3.5.2" />
    </>
  ),
  concrete: (
    <>
      <path d="M2 20.5h20" />
      <path d="M4 16.4V13h2.5l1.6 2.2" />
      <rect x="8" y="8" width="9.6" height="6" rx="3" transform="rotate(-13 12.8 11)" />
      <path d="M4 16.4h14" />
      <path d="M17.4 13.7l2 1.3" />
      <circle cx="7" cy="18.2" r="1.7" />
      <circle cx="16.2" cy="18.2" r="1.7" />
    </>
  ),
  crane: (
    <>
      <path d="M2 20.5h20" />
      <path d="M3.5 16.3h9" />
      <path d="M4 16.3v-2.4h4.2l1.2 1.7v.7" />
      <path d="M9 15.2 19.5 7" />
      <path d="M9 15.2l-1.6 1.1" />
      <path d="M19.5 7v2.7" />
      <path d="M18.7 9.7h1.6" />
      <circle cx="6" cy="18.2" r="1.7" />
      <circle cx="10" cy="18.2" r="1.7" />
    </>
  ),
  roller: (
    <>
      <path d="M2 20.5h20" />
      <circle cx="7" cy="15.6" r="3.5" />
      <circle cx="7" cy="15.6" r="0.6" />
      <path d="M10.5 15.6h3.2l1-4.4h3.3" />
      <path d="M13.6 11.2V8h3.5v3.2" />
      <circle cx="17.7" cy="16.8" r="1.8" />
    </>
  ),
  port: (
    <>
      <path d="M2 20.5h20" />
      <rect x="6.4" y="13.2" width="9.6" height="3.2" rx="0.4" />
      <rect x="8" y="16.4" width="9.6" height="3.2" rx="0.4" />
      <path d="M9 13.2v-2.5M14 13.2v-2.5" />
      <path d="M8.2 10.7h6.6" />
      <path d="M11.5 10.7V8.2" />
    </>
  ),
  mining: (
    <>
      <path d="M2 20.5h20" />
      <path d="M8.6 14.4l1.2-4.6a1 1 0 0 1 1-.8H20l-1.5 6" />
      <path d="M4 14.4V11h3.3l1.3 2v1.4" />
      <path d="M4 14.4h14.5" />
      <circle cx="7.4" cy="17.3" r="2.2" />
      <circle cx="16.5" cy="17.3" r="2.2" />
    </>
  ),
  piling: (
    <>
      <path d="M2 20.5h20" />
      <rect x="4" y="16.4" width="7.6" height="2.8" rx="1.4" />
      <path d="M6 16.4v-2.9h3.3v2.9" />
      <path d="M13 4v12.4" />
      <path d="M10.8 6.2v10.2" />
      <path d="M10.8 8.7h2.2M10.8 11.5h2.2M10.8 14.3h2.2" />
      <path d="M13 4h1.5" />
      <path d="M13.8 4.4v9.4" />
    </>
  ),
  truck: (
    <>
      <path d="M2 20.5h20" />
      <path d="M9.6 17.2V9h9.4v8.2" />
      <path d="M9.6 17.2V11.3H6.3l-2 2.6v3.3" />
      <path d="M4.4 14h3.4" />
      <circle cx="6.6" cy="18.4" r="1.6" />
      <circle cx="15.6" cy="18.4" r="1.6" />
    </>
  ),
  aerial: (
    <>
      <path d="M2 20.5h20" />
      <rect x="6" y="16.4" width="8" height="2.2" rx="0.6" />
      <circle cx="8" cy="19.1" r="0.9" />
      <circle cx="12" cy="19.1" r="0.9" />
      <path d="M7.4 16.4l5.2-3.5M12.6 16.4l-5.2-3.5" />
      <path d="M7.4 12.9l5.2-3.5M12.6 12.9l-5.2-3.5" />
      <path d="M6 9.2h8" />
      <path d="M6 9.2V7M14 9.2V7M6 7h8" />
    </>
  ),
  wind: (
    <>
      <path d="M12 21v-8.6" />
      <path d="M11.2 21h1.6" />
      <circle cx="12" cy="11.7" r="1.1" />
      <path d="M12 10.6c.5-2.8-.1-5-1.9-6.7-.4 2.7.3 4.9 1.9 6.7z" />
      <path d="M13 12.2c2.4 1.4 4.7 1.3 6.8-.3-2.5-1.1-4.7-1-6.8.3z" />
      <path d="M11 12.2c-2.1 2-3 4.2-2.6 6.7 2.2-1.6 3.1-3.7 2.6-6.7z" />
    </>
  ),
  // industry / value-prop
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 15-13 15" />
      <path d="M4 20c3-6 7-9 12-11" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export function CategoryIcon({
  name,
  size = 24,
  className,
  strokeWidth,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  // If a raster override is enabled for this machine (see src/data/iconAssets.ts),
  // render the generated image instead of the built-in SVG.
  if (rasterIcons[name]) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/icons/${name}.${rasterExt}`}
        alt=""
        width={size}
        height={size}
        aria-hidden
        className={className}
        style={{ objectFit: "contain", display: "inline-block" }}
      />
    );
  }
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth ?? 1.6} aria-hidden>
      {categoryPaths[name] ?? categoryPaths.excavator}
    </svg>
  );
}

// ---------- UI icons ----------

export const Icon = {
  Search: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  Menu: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  Close: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  ArrowRight: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUpRight: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  ),
  ChevronDown: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  ChevronRight: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  Globe: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  ),
  Phone: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 011-2z" />
    </svg>
  ),
  Mail: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  Pin: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Check: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  ),
  Play: (p: P) => (
    <svg {...base(p.size)} {...p} fill="currentColor" stroke="none">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Download: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  ),
  Spec: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M4 5h16M4 12h16M4 19h10" />
    </svg>
  ),
  Wrench: (p: P) => (
    <svg {...base(p.size)} {...p}>
      <path d="M14.7 6.3a4 4 0 00-5.3 5.3L4 17l3 3 5.4-5.4a4 4 0 005.3-5.3l-2.4 2.4-2.1-.6-.6-2.1z" />
    </svg>
  ),
};

// ---------- Brand wordmark ----------

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="grid place-items-center rounded-[7px] font-black tracking-tighter"
        style={{
          width: 34,
          height: 34,
          background: "var(--color-brand)",
          color: "#fff",
          fontSize: 15,
          letterSpacing: "-0.06em",
        }}
      >
        三
      </span>
      <span
        className="text-[20px] font-extrabold tracking-tight"
        style={{ color: light ? "#fff" : "var(--color-ink)" }}
      >
        SANY
      </span>
    </span>
  );
}
