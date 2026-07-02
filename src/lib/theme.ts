// Accent gradient definitions for category & product visuals.
// Kept as inline-style hex pairs so Tailwind never has to safelist them.

export type Accent = {
  from: string;
  to: string;
  tint: string; // soft background tint
  ink: string; // readable accent text on light bg
};

export const accents: Record<string, Accent> = {
  amber: { from: "#f59e0b", to: "#b45309", tint: "#fef3e2", ink: "#b45309" },
  sky: { from: "#38bdf8", to: "#0369a1", tint: "#e6f4fd", ink: "#0369a1" },
  orange: { from: "#fb923c", to: "#c2410c", tint: "#fff0e6", ink: "#c2410c" },
  lime: { from: "#84cc16", to: "#4d7c0f", tint: "#f0f7e2", ink: "#4d7c0f" },
  teal: { from: "#2dd4bf", to: "#0f766e", tint: "#e2f6f3", ink: "#0f766e" },
  stone: { from: "#a8a29e", to: "#57534e", tint: "#f1efee", ink: "#57534e" },
  violet: { from: "#a78bfa", to: "#6d28d9", tint: "#f0ecfe", ink: "#6d28d9" },
  indigo: { from: "#818cf8", to: "#3730a3", tint: "#eaecfe", ink: "#3730a3" },
  yellow: { from: "#facc15", to: "#a16207", tint: "#fef9e2", ink: "#a16207" },
  emerald: { from: "#34d399", to: "#047857", tint: "#e3f7ee", ink: "#047857" },
};

export const accent = (key: string): Accent => accents[key] ?? accents.stone;

export const gradient = (key: string) => {
  const a = accent(key);
  return `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`;
};
