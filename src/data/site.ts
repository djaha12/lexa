// ============================================================
//  SANY Global — Site-level content (company, stats, news…)
// ============================================================

export const company = {
  name: "SANY Global",
  legalName: "SANY Group Co., Ltd.",
  tagline: "Quality Changes the World",
  founded: 1989,
  headquarters: "Changsha, China",
  intro:
    "SANY is one of the world's leading manufacturers of construction and industrial equipment — ranked among the global top players in concrete machinery, excavators, cranes and more, with products working in over 180 countries and regions.",
};

export const stats: { value: string; label: string; suffix?: string }[] = [
  { value: "180", suffix: "+", label: "Countries & regions served" },
  { value: "30", suffix: "+", label: "Manufacturing bases worldwide" },
  { value: "5", suffix: "%", label: "Revenue reinvested in R&D" },
  { value: "1", suffix: "st", label: "Global rank in concrete machinery" },
];

export const valueProps: { title: string; body: string; icon: string }[] = [
  {
    title: "Intelligent manufacturing",
    body: "Lighthouse factories and digital twins deliver world-class quality and consistency at scale.",
    icon: "chip",
  },
  {
    title: "Global service network",
    body: "Parts, technicians and training across 180+ countries keep your fleet running with minimal downtime.",
    icon: "globe",
  },
  {
    title: "New-energy leadership",
    body: "Electric, hydrogen and battery-swap machines cut emissions and total cost of ownership.",
    icon: "leaf",
  },
  {
    title: "Proven durability",
    body: "Every machine is engineered and tested for the harshest jobsites and the longest service life.",
    icon: "shield",
  },
];

export const industries: { name: string; blurb: string; icon: string }[] = [
  { name: "Building Construction", blurb: "From foundations to finishing.", icon: "concrete" },
  { name: "Infrastructure", blurb: "Roads, bridges, rail & utilities.", icon: "roller" },
  { name: "Mining & Quarrying", blurb: "Lowest cost per tonne.", icon: "mining" },
  { name: "Municipal & Utility", blurb: "Building better cities.", icon: "excavator" },
];

export const news: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  accent: string;
}[] = [
  {
    slug: "sany-record-boom-pump",
    title: "SANY unveils next-generation intelligent boom pump",
    excerpt:
      "A new flagship truck-mounted pump combines lightweight composite booms with AI-assisted anti-vibration control for safer, faster placement.",
    date: "2026-06-18",
    tag: "Product",
    accent: "sky",
  },
  {
    slug: "electric-fleet-milestone",
    title: "SANY new-energy fleet passes major deployment milestone",
    excerpt:
      "Battery-electric trucks and excavators reach a new global deployment record as customers accelerate decarbonisation.",
    date: "2026-05-30",
    tag: "New Energy",
    accent: "emerald",
  },
  {
    slug: "offshore-wind-15mw",
    title: "15 MW offshore turbine platform enters serial production",
    excerpt:
      "SANY Renewable Energy scales up manufacturing of its typhoon-class offshore platform for deep-water wind farms.",
    date: "2026-05-12",
    tag: "Energy",
    accent: "teal",
  },
  {
    slug: "global-service-expansion",
    title: "SANY expands global parts and service network",
    excerpt:
      "New regional distribution centres cut parts lead times and strengthen after-sales support across key markets.",
    date: "2026-04-27",
    tag: "Service",
    accent: "orange",
  },
];

export const regions: { name: string; note: string }[] = [
  { name: "Asia Pacific", note: "Home region & largest manufacturing base" },
  { name: "Europe", note: "Full sales & service coverage" },
  { name: "North America", note: "Growing dealer & support network" },
  { name: "Latin America", note: "Strong presence in mining & infrastructure" },
  { name: "Middle East", note: "Mega-project & energy focus" },
  { name: "Africa", note: "Infrastructure & resources partner" },
];

export const timeline: { year: string; title: string; body: string }[] = [
  { year: "1989", title: "Founded", body: "SANY is established, beginning with welding materials." },
  { year: "1994", title: "Heavy industry", body: "Entry into concrete machinery — the start of a global journey." },
  { year: "2003", title: "Public listing", body: "SANY Heavy Industry lists on the Shanghai Stock Exchange." },
  { year: "2012", title: "Global expansion", body: "Acquisition of Putzmeister accelerates worldwide reach." },
  { year: "2020", title: "Lighthouse factories", body: "Intelligent manufacturing sets a new industry benchmark." },
  { year: "2024", title: "New-energy era", body: "Electrification across trucks, excavators and mining." },
];

