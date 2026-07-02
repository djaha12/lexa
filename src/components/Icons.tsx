import * as React from "react";

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
      <path d="M2 20h20" />
      <rect x="3" y="15" width="9" height="4" rx="1" />
      <path d="M5 15v-3h4v3" />
      <path d="M11 13l4-4 4 3" />
      <path d="M19 12l1.5 4H15" />
      <circle cx="6" cy="20" r="1.4" />
      <circle cx="10" cy="20" r="1.4" />
    </>
  ),
  concrete: (
    <>
      <path d="M3 20h18" />
      <path d="M4 20v-4l3-6h7l3 6v4" />
      <path d="M7 10V7h7v3" />
      <path d="M17 12l4-5" />
      <path d="M21 7h-3" />
    </>
  ),
  crane: (
    <>
      <path d="M4 21h9" />
      <path d="M7 21V6" />
      <path d="M7 6h13" />
      <path d="M7 9l6-3" />
      <path d="M20 6v3" />
      <path d="M20 9v3" />
      <path d="M5 21l2-15 2 15" />
    </>
  ),
  roller: (
    <>
      <circle cx="6.5" cy="16" r="4" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10.5 16h4l1-5h3l1 3" />
      <path d="M10 11h6" />
      <path d="M14 11V8h3v3" />
    </>
  ),
  port: (
    <>
      <path d="M3 21h18" />
      <rect x="4" y="13" width="6" height="4" rx="0.5" />
      <rect x="5" y="9" width="4" height="3" rx="0.5" />
      <path d="M13 21v-9h6v9" />
      <path d="M13 12l3-4h3" />
      <path d="M16 8V5" />
    </>
  ),
  mining: (
    <>
      <path d="M2 19h20" />
      <path d="M3 19l2-6h11l3 6" />
      <path d="M5 13V9h9v4" />
      <circle cx="7" cy="19" r="1.6" />
      <circle cx="16" cy="19" r="1.6" />
      <path d="M18 9l3 2" />
    </>
  ),
  piling: (
    <>
      <path d="M3 21h18" />
      <path d="M8 21V4" />
      <path d="M8 4h9" />
      <path d="M17 4v6" />
      <path d="M12 21v-9" />
      <path d="M10 12h4" />
      <path d="M12 12V8" />
    </>
  ),
  truck: (
    <>
      <path d="M2 17h1V7h11v10" />
      <path d="M14 10h4l3 3v4h-2" />
      <path d="M14 17h-3" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  aerial: (
    <>
      <path d="M4 21h8" />
      <path d="M6 21v-3" />
      <path d="M10 21v-3" />
      <path d="M6 18l2-4 2 4" />
      <path d="M8 14l4-6" />
      <rect x="11" y="4" width="8" height="4" rx="0.5" />
    </>
  ),
  wind: (
    <>
      <path d="M12 22V12" />
      <path d="M12 12l0-1" />
      <path d="M12 11c0-3 1-5 4-6-2 3-2 5-1 7z" />
      <path d="M12 11c-2.6-1.5-4.6-1.6-7-.4 3-1.6 4.4-3 5-6z" />
      <path d="M12 11c1.4 2.7 3 4 6 4.6-3.4.5-5 0-7-1.4z" />
      <path d="M9 22h6" />
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
