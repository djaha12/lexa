// ============================================================
//  SANY Global — Product Catalog Data Model
//  Full equipment assortment: categories → subcategories → models
// ============================================================

export type Spec = { label: string; value: string; unit?: string };

export type Model = {
  slug: string;
  name: string;
  tagline: string;
  categorySlug: string;
  subcategorySlug: string;
  /** visual accent key used for the CSS placeholder */
  accent: string;
  specs: Spec[];
  highlights: string[];
  applications: string[];
  description: string;
  badges?: string[];
};

export type Subcategory = {
  slug: string;
  name: string;
  blurb: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // key resolved by <CategoryIcon/>
  tagline: string;
  description: string;
  accent: string; // gradient key
  subcategories: Subcategory[];
};

// ------------------------------------------------------------
//  CATEGORIES
// ------------------------------------------------------------

export const categories: Category[] = [
  {
    slug: "excavator",
    name: "Excavators",
    shortName: "Excavators",
    icon: "excavator",
    tagline: "From 1.6 t micro diggers to 90 t mining giants",
    description:
      "The world's best-selling excavator brand. A complete range engineered for fuel efficiency, intelligent hydraulics and industry-leading durability — from compact urban work to heavy earthmoving.",
    accent: "amber",
    subcategories: [
      { slug: "mini-excavator", name: "Mini Excavators", blurb: "1.6 – 5.5 t, zero & short tail swing" },
      { slug: "small-excavator", name: "Small Excavators", blurb: "6 – 10 t versatile workhorses" },
      { slug: "medium-excavator", name: "Medium Excavators", blurb: "13 – 27 t all-round performers" },
      { slug: "large-excavator", name: "Large Excavators", blurb: "30 – 95 t heavy earthmoving" },
      { slug: "wheeled-excavator", name: "Wheeled Excavators", blurb: "Road-mobile, fast repositioning" },
      { slug: "electric-excavator", name: "Electric Excavators", blurb: "Zero-emission battery & cable power" },
    ],
  },
  {
    slug: "concrete-machinery",
    name: "Concrete Machinery",
    shortName: "Concrete",
    icon: "concrete",
    tagline: "World No.1 in concrete machinery",
    description:
      "Ranked first globally in concrete equipment. Truck-mounted boom pumps up to 86 m, high-pressure trailer pumps, mixers, placing booms and complete batching plants that set the industry benchmark.",
    accent: "sky",
    subcategories: [
      { slug: "truck-mounted-pump", name: "Truck-mounted Pumps", blurb: "23 – 86 m boom reach" },
      { slug: "trailer-pump", name: "Trailer & Line Pumps", blurb: "High-pressure long-distance delivery" },
      { slug: "truck-mixer", name: "Truck Mixers", blurb: "6 – 16 m³ agitator trucks" },
      { slug: "placing-boom", name: "Placing Booms", blurb: "Precision high-rise placement" },
      { slug: "batching-plant", name: "Batching Plants", blurb: "60 – 240 m³/h stationary & mobile" },
    ],
  },
  {
    slug: "crane",
    name: "Cranes",
    shortName: "Cranes",
    icon: "crane",
    tagline: "Lifting from 12 t to 4 000 t",
    description:
      "A full lifting portfolio: truck cranes, all-terrain and rough-terrain cranes, crawler cranes to 4 000 t, tower cranes and loader cranes — engineered for maximum capacity, reach and jobsite safety.",
    accent: "orange",
    subcategories: [
      { slug: "truck-crane", name: "Truck Cranes", blurb: "25 – 130 t road-mobile lifting" },
      { slug: "all-terrain-crane", name: "All-terrain Cranes", blurb: "220 – 600 t multi-axle mobility" },
      { slug: "rough-terrain-crane", name: "Rough-terrain Cranes", blurb: "Off-road jobsite agility" },
      { slug: "crawler-crane", name: "Crawler Cranes", blurb: "80 – 4 000 t heavy lift" },
      { slug: "tower-crane", name: "Tower Cranes", blurb: "Flat-top & luffing high-rise" },
      { slug: "truck-mounted-crane", name: "Loader Cranes", blurb: "Knuckle-boom material handling" },
    ],
  },
  {
    slug: "road-machinery",
    name: "Road Machinery",
    shortName: "Road",
    icon: "roller",
    tagline: "Build roads that last",
    description:
      "Compaction, grading, paving and milling equipment with intelligent controls for consistent density and surface quality across highway, urban and airport projects.",
    accent: "lime",
    subcategories: [
      { slug: "road-roller", name: "Road Rollers", blurb: "Single & double drum compaction" },
      { slug: "motor-grader", name: "Motor Graders", blurb: "Precision fine grading" },
      { slug: "paver", name: "Asphalt Pavers", blurb: "2.5 – 13 m paving width" },
      { slug: "milling-machine", name: "Cold Milling Machines", blurb: "Efficient surface reclamation" },
    ],
  },
  {
    slug: "port-machinery",
    name: "Port Machinery",
    shortName: "Port",
    icon: "port",
    tagline: "Move the world's cargo",
    description:
      "Reach stackers, empty container handlers, heavy forklifts and yard cranes — including electric and automated solutions — for high-throughput ports, terminals and logistics hubs.",
    accent: "teal",
    subcategories: [
      { slug: "reach-stacker", name: "Reach Stackers", blurb: "45 t container handling" },
      { slug: "empty-container-handler", name: "Empty Container Handlers", blurb: "Efficient stacking to 8-high" },
      { slug: "heavy-forklift", name: "Heavy Forklifts", blurb: "3 – 46 t lifting capacity" },
      { slug: "yard-crane", name: "Yard Cranes (RTG/RMG)", blurb: "Automated terminal cranes" },
    ],
  },
  {
    slug: "mining-machinery",
    name: "Mining Machinery",
    shortName: "Mining",
    icon: "mining",
    tagline: "Power the extraction economy",
    description:
      "Rigid and wide-body mining trucks, large mining excavators and electric-drive haulers built for the harshest surface-mining conditions with the lowest cost per tonne.",
    accent: "stone",
    subcategories: [
      { slug: "mining-truck", name: "Rigid Mining Trucks", blurb: "60 – 220 t payload" },
      { slug: "wide-body-truck", name: "Wide-body Dump Trucks", blurb: "35 – 90 t off-highway haul" },
      { slug: "mining-excavator", name: "Mining Excavators", blurb: "70 – 400 t face shovels" },
      { slug: "electric-mining", name: "Electric Mining Trucks", blurb: "Battery & trolley zero-emission" },
    ],
  },
  {
    slug: "piling-machinery",
    name: "Piling Machinery",
    shortName: "Piling",
    icon: "piling",
    tagline: "Foundations for megaprojects",
    description:
      "Rotary drilling rigs, hydraulic static pile drivers and diaphragm-wall equipment that deliver deep, stable foundations for bridges, high-rises and infrastructure.",
    accent: "violet",
    subcategories: [
      { slug: "rotary-drilling-rig", name: "Rotary Drilling Rigs", blurb: "150 – 620 kN·m torque" },
      { slug: "static-pile-driver", name: "Static Pile Drivers", blurb: "Vibration-free press-in piling" },
    ],
  },
  {
    slug: "truck",
    name: "Trucks",
    shortName: "Trucks",
    icon: "truck",
    tagline: "Electric & smart heavy transport",
    description:
      "New-energy heavy-duty trucks — battery-electric, range-extended and hydrogen — plus tractors, dump and mixer chassis engineered for total cost of ownership and zero-emission logistics.",
    accent: "indigo",
    subcategories: [
      { slug: "electric-heavy-truck", name: "Electric Heavy Trucks", blurb: "Battery-swap & charging tractors" },
      { slug: "dump-truck", name: "Dump Trucks", blurb: "On-highway construction haul" },
      { slug: "mixer-truck", name: "Mixer Chassis", blurb: "Purpose-built concrete transport" },
    ],
  },
  {
    slug: "aerial-work-platform",
    name: "Aerial Work Platforms",
    shortName: "Access",
    icon: "aerial",
    tagline: "Work safely at height",
    description:
      "Scissor lifts, articulating and telescopic boom lifts with electric drive and smart controls for construction, maintenance and industrial access up to 44 m.",
    accent: "yellow",
    subcategories: [
      { slug: "scissor-lift", name: "Scissor Lifts", blurb: "6 – 18 m electric & rough-terrain" },
      { slug: "boom-lift", name: "Boom Lifts", blurb: "16 – 44 m articulating & telescopic" },
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    shortName: "Wind",
    icon: "wind",
    tagline: "Engineering the clean transition",
    description:
      "SANY Renewable Energy delivers onshore and offshore wind turbines and integrated energy-storage systems — from 3 MW smart platforms to 15 MW+ offshore giants.",
    accent: "emerald",
    subcategories: [
      { slug: "onshore-turbine", name: "Onshore Turbines", blurb: "3 – 10 MW smart platforms" },
      { slug: "offshore-turbine", name: "Offshore Turbines", blurb: "8 – 16 MW deep-sea power" },
      { slug: "energy-storage", name: "Energy Storage", blurb: "Grid-scale BESS solutions" },
    ],
  },
];

// ------------------------------------------------------------
//  MODELS
// ------------------------------------------------------------

const M = (m: Model): Model => m;

export const models: Model[] = [
  // ===== MINI EXCAVATORS =====
  M({
    slug: "sy16c", name: "SY16C", tagline: "1.75 t micro excavator with retractable undercarriage",
    categorySlug: "excavator", subcategorySlug: "mini-excavator", accent: "amber",
    badges: ["Best seller"],
    specs: [
      { label: "Operating weight", value: "1,750", unit: "kg" },
      { label: "Engine power", value: "13.5", unit: "kW" },
      { label: "Max digging depth", value: "2,320", unit: "mm" },
      { label: "Bucket capacity", value: "0.04", unit: "m³" },
    ],
    highlights: [
      "Retractable undercarriage passes through 0.98 m gates",
      "Foldable TOPS canopy for low-clearance transport",
      "Load-sensing hydraulics for smooth multi-function control",
    ],
    applications: ["Landscaping", "Utility trenching", "Indoor demolition", "Rental fleets"],
    description:
      "The SY16C is the ideal entry point into the SANY range — a nimble 1.75-tonne machine that fits through standard doorways yet delivers the breakout force of a much larger digger. Its retractable rubber tracks and folding canopy make it a rental-fleet favourite.",
  }),
  M({
    slug: "sy26u", name: "SY26U", tagline: "2.6 t zero-tail-swing performer",
    categorySlug: "excavator", subcategorySlug: "mini-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "2,600", unit: "kg" },
      { label: "Engine power", value: "14.7", unit: "kW" },
      { label: "Max digging depth", value: "2,720", unit: "mm" },
      { label: "Bucket capacity", value: "0.08", unit: "m³" },
    ],
    highlights: [
      "True zero tail swing for close-quarters work",
      "Yanmar engine with class-leading fuel economy",
      "Wide dozer blade for efficient backfilling",
    ],
    applications: ["Urban construction", "Pipeline work", "Landscaping", "Confined sites"],
    description:
      "Purpose-built for tight urban jobsites, the SY26U rotates within its own footprint so the operator can work flush against walls and obstacles without over-swing. A comfortable cab and responsive pilot controls keep productivity high all shift.",
  }),
  M({
    slug: "sy35u", name: "SY35U", tagline: "3.8 t compact excavator, big-machine feel",
    categorySlug: "excavator", subcategorySlug: "mini-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "3,800", unit: "kg" },
      { label: "Engine power", value: "21.2", unit: "kW" },
      { label: "Max digging depth", value: "3,140", unit: "mm" },
      { label: "Bucket capacity", value: "0.11", unit: "m³" },
    ],
    highlights: [
      "Short tail swing balances stability and access",
      "Auxiliary hydraulics ready for breakers & augers",
      "Spacious ROPS/TOPS cab with A/C option",
    ],
    applications: ["Residential build", "Utility installation", "Site preparation"],
    description:
      "The SY35U bridges the gap between micro and small excavators, pairing a comfortable full-size cab with a compact footprint. Proportional auxiliary flow makes it a versatile carrier for hydraulic attachments.",
  }),
  M({
    slug: "sy50u", name: "SY50U", tagline: "5.5 t of compact digging muscle",
    categorySlug: "excavator", subcategorySlug: "mini-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "5,500", unit: "kg" },
      { label: "Engine power", value: "36.4", unit: "kW" },
      { label: "Max digging depth", value: "3,880", unit: "mm" },
      { label: "Bucket capacity", value: "0.16", unit: "m³" },
    ],
    highlights: [
      "Strong breakout force for its class",
      "Low-effort pilot joysticks reduce fatigue",
      "Reinforced boom & arm for heavy duty cycles",
    ],
    applications: ["General contracting", "Landscaping", "Demolition support"],
    description:
      "At the top of the compact class, the SY50U delivers the reach and power of a small excavator while retaining easy transportability. It is the go-to machine for contractors who need one versatile digger for varied work.",
  }),

  // ===== SMALL EXCAVATORS =====
  M({
    slug: "sy75c", name: "SY75C Pro", tagline: "7.5 t versatile compact excavator",
    categorySlug: "excavator", subcategorySlug: "small-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "7,700", unit: "kg" },
      { label: "Engine power", value: "42.5", unit: "kW" },
      { label: "Max digging depth", value: "4,190", unit: "mm" },
      { label: "Bucket capacity", value: "0.28", unit: "m³" },
    ],
    highlights: [
      "Intelligent hydraulic system with 3 work modes",
      "Excellent fuel economy per cubic metre moved",
      "Easy ground-level service access",
    ],
    applications: ["Municipal works", "Landscaping", "Farm & estate", "Utility"],
    description:
      "The SY75C Pro is a compact all-rounder trusted by contractors worldwide. Its smart hydraulics automatically match power to the task, cutting fuel use while maintaining smooth, precise control.",
  }),
  M({
    slug: "sy95c", name: "SY95C", tagline: "9.5 t small excavator, medium-class output",
    categorySlug: "excavator", subcategorySlug: "small-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "9,600", unit: "kg" },
      { label: "Engine power", value: "55", unit: "kW" },
      { label: "Max digging depth", value: "4,500", unit: "mm" },
      { label: "Bucket capacity", value: "0.38", unit: "m³" },
    ],
    highlights: [
      "Powerful yet efficient Stage V / Tier 4F engine",
      "Reinforced structures for demanding cycles",
      "Roomy cab with large touchscreen display",
    ],
    applications: ["Construction", "Quarry support", "Roadworks"],
    description:
      "The SY95C offers the productivity of a bigger machine in a transport-friendly package, making it a favourite where site access limits larger excavators without sacrificing dig depth.",
  }),

  // ===== MEDIUM EXCAVATORS =====
  M({
    slug: "sy155h", name: "SY155H", tagline: "15.8 t balanced medium excavator",
    categorySlug: "excavator", subcategorySlug: "medium-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "15,800", unit: "kg" },
      { label: "Engine power", value: "85.5", unit: "kW" },
      { label: "Max digging depth", value: "5,700", unit: "mm" },
      { label: "Bucket capacity", value: "0.62", unit: "m³" },
    ],
    highlights: [
      "SANY intelligent control matches flow to load",
      "Up to 10% lower fuel burn vs previous generation",
      "Heavy-duty booms for high-hour operation",
    ],
    applications: ["General earthmoving", "Roadbuilding", "Utility", "Site development"],
    description:
      "The SY155H is a hard-working medium excavator that combines strong digging performance with outstanding fuel efficiency, backed by SANY's global parts and service network.",
  }),
  M({
    slug: "sy215c", name: "SY215C", tagline: "21.5 t best-selling medium excavator",
    categorySlug: "excavator", subcategorySlug: "medium-excavator", accent: "amber",
    badges: ["Best seller"],
    specs: [
      { label: "Operating weight", value: "21,500", unit: "kg" },
      { label: "Engine power", value: "119", unit: "kW" },
      { label: "Max digging depth", value: "6,680", unit: "mm" },
      { label: "Bucket capacity", value: "0.93", unit: "m³" },
    ],
    highlights: [
      "Cummins engine with fuel-saving technology (up to 10%)",
      "Positive-flow hydraulics for precise multifunction",
      "Robust reinforced frame and undercarriage",
    ],
    applications: ["Construction", "Mining support", "Quarrying", "Infrastructure"],
    description:
      "The SY215C is one of the world's most popular 20-tonne excavators. Its proven Cummins powertrain and intelligent hydraulics deliver an outstanding balance of power, precision and running cost across virtually every application.",
  }),
  M({
    slug: "sy265c", name: "SY265C", tagline: "26.5 t high-productivity excavator",
    categorySlug: "excavator", subcategorySlug: "medium-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "26,500", unit: "kg" },
      { label: "Engine power", value: "129", unit: "kW" },
      { label: "Max digging depth", value: "6,700", unit: "mm" },
      { label: "Bucket capacity", value: "1.19", unit: "m³" },
    ],
    highlights: [
      "Larger bucket and stronger breakout force",
      "Wide track gauge for lifting stability",
      "Premium cab with air-suspension seat",
    ],
    applications: ["Bulk earthmoving", "Quarry loading", "Heavy construction"],
    description:
      "The SY265C tops the medium class, delivering higher cycle volumes and breakout force for demanding production work while keeping fuel and maintenance costs firmly in check.",
  }),

  // ===== LARGE EXCAVATORS =====
  M({
    slug: "sy365h", name: "SY365H", tagline: "36.5 t heavy-duty excavator",
    categorySlug: "excavator", subcategorySlug: "large-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "36,500", unit: "kg" },
      { label: "Engine power", value: "202", unit: "kW" },
      { label: "Max digging depth", value: "7,380", unit: "mm" },
      { label: "Bucket capacity", value: "1.65", unit: "m³" },
    ],
    highlights: [
      "High-torque engine for continuous heavy loading",
      "Strengthened boom and arm for severe duty",
      "Intelligent power-matching reduces consumption",
    ],
    applications: ["Mining support", "Large infrastructure", "Bulk earthworks"],
    description:
      "Built for production, the SY365H moves serious volume with confidence. Reinforced structures and a powerful drivetrain make it equally at home in quarries and on major civil projects.",
  }),
  M({
    slug: "sy500h", name: "SY500H", tagline: "50 t flagship large excavator",
    categorySlug: "excavator", subcategorySlug: "large-excavator", accent: "amber",
    badges: ["Flagship"],
    specs: [
      { label: "Operating weight", value: "49,800", unit: "kg" },
      { label: "Engine power", value: "298", unit: "kW" },
      { label: "Max digging depth", value: "7,850", unit: "mm" },
      { label: "Bucket capacity", value: "2.30", unit: "m³" },
    ],
    highlights: [
      "Massive breakout and arm-crowd forces",
      "Heavy-duty undercarriage for mining duty",
      "Advanced hydraulics for high-volume loading",
    ],
    applications: ["Surface mining", "Large quarries", "Heavy civil"],
    description:
      "The SY500H is SANY's powerhouse large excavator, engineered to feed haul trucks quickly and reliably. Its robust structures and high-flow hydraulics deliver exceptional productivity in the toughest ground.",
  }),
  M({
    slug: "sy750h", name: "SY750H", tagline: "75 t mining-class excavator",
    categorySlug: "excavator", subcategorySlug: "large-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "75,000", unit: "kg" },
      { label: "Engine power", value: "400", unit: "kW" },
      { label: "Max digging depth", value: "8,200", unit: "mm" },
      { label: "Bucket capacity", value: "4.50", unit: "m³" },
    ],
    highlights: [
      "Tier-matched to 40–60 t haul trucks",
      "Mining-grade cooling and filtration",
      "Reinforced heavy-mining front & car body",
    ],
    applications: ["Open-pit mining", "Overburden removal", "Bulk loading"],
    description:
      "A dedicated mining machine, the SY750H is designed for round-the-clock loading of large haul trucks. Every component is specified for durability and serviceability in extreme conditions.",
  }),

  // ===== WHEELED EXCAVATORS =====
  M({
    slug: "sy155w", name: "SY155W", tagline: "15.5 t road-mobile wheeled excavator",
    categorySlug: "excavator", subcategorySlug: "wheeled-excavator", accent: "amber",
    specs: [
      { label: "Operating weight", value: "15,500", unit: "kg" },
      { label: "Travel speed", value: "35", unit: "km/h" },
      { label: "Max digging depth", value: "5,600", unit: "mm" },
      { label: "Bucket capacity", value: "0.60", unit: "m³" },
    ],
    highlights: [
      "Travels between sites on public roads",
      "Outriggers & dozer blade for lifting stability",
      "Ideal for municipal and utility crews",
    ],
    applications: ["Municipal maintenance", "Utility", "Urban roadworks"],
    description:
      "The SY155W combines excavator versatility with the mobility of a wheeled chassis, letting crews drive from job to job without a low-loader — perfect for scattered urban and municipal work.",
  }),

  // ===== ELECTRIC EXCAVATORS =====
  M({
    slug: "sy215e", name: "SY215E", tagline: "Zero-emission 21.5 t electric excavator",
    categorySlug: "excavator", subcategorySlug: "electric-excavator", accent: "emerald",
    badges: ["New energy"],
    specs: [
      { label: "Operating weight", value: "22,000", unit: "kg" },
      { label: "Battery capacity", value: "422", unit: "kWh" },
      { label: "Motor power", value: "160", unit: "kW" },
      { label: "Runtime", value: "6–8", unit: "h" },
    ],
    highlights: [
      "Zero local emissions & low noise",
      "Fast-charge & battery-swap ready",
      "Lower energy cost than diesel per hour",
    ],
    applications: ["Urban & indoor sites", "Tunnels", "Low-emission zones"],
    description:
      "The SY215E brings full-size 20-tonne performance with zero tailpipe emissions and dramatically lower noise — enabling work in tunnels, indoor demolition and emission-controlled urban zones.",
  }),

  // ===== CONCRETE: TRUCK-MOUNTED PUMPS =====
  M({
    slug: "sym5230-37", name: "SYM5230THB 370C-10", tagline: "37 m truck-mounted concrete boom pump",
    categorySlug: "concrete-machinery", subcategorySlug: "truck-mounted-pump", accent: "sky",
    specs: [
      { label: "Boom reach (vertical)", value: "37", unit: "m" },
      { label: "Horizontal reach", value: "33", unit: "m" },
      { label: "Output (max)", value: "180", unit: "m³/h" },
      { label: "Boom sections", value: "4", unit: "" },
    ],
    highlights: [
      "Lightweight high-strength boom steel",
      "Intelligent anti-vibration boom control",
      "Wear-resistant S-valve pumping system",
    ],
    applications: ["Residential build", "Commercial concrete", "Infrastructure"],
    description:
      "A workhorse of the mid-size class, the 37 m boom pump balances reach, agility and output for everyday residential and commercial pours, with SANY's proven pumping hardware for long service life.",
  }),
  M({
    slug: "sym5463-62", name: "SYM5463THB 620C", tagline: "62 m long-reach boom pump",
    categorySlug: "concrete-machinery", subcategorySlug: "truck-mounted-pump", accent: "sky",
    badges: ["Long reach"],
    specs: [
      { label: "Boom reach (vertical)", value: "62", unit: "m" },
      { label: "Horizontal reach", value: "57", unit: "m" },
      { label: "Output (max)", value: "200", unit: "m³/h" },
      { label: "Boom sections", value: "6", unit: "" },
    ],
    highlights: [
      "Ultra-high-strength lightweight boom",
      "Smart boom anti-sway & auto-fold",
      "High-pressure pumping for tall structures",
    ],
    applications: ["High-rise", "Bridges", "Industrial plants"],
    description:
      "With 62 metres of vertical reach, this boom pump places concrete high and far while remaining road-legal. Intelligent boom control tames vibration for accurate, safe placement on demanding structures.",
  }),
  M({
    slug: "sym-86", name: "SYM5590THBFB 86 m", tagline: "86 m world-class super boom pump",
    categorySlug: "concrete-machinery", subcategorySlug: "truck-mounted-pump", accent: "sky",
    badges: ["Flagship"],
    specs: [
      { label: "Boom reach (vertical)", value: "86", unit: "m" },
      { label: "Horizontal reach", value: "78", unit: "m" },
      { label: "Output (max)", value: "180", unit: "m³/h" },
      { label: "Boom sections", value: "7", unit: "" },
    ],
    highlights: [
      "One of the world's longest boom pumps",
      "Carbon-fibre & high-strength steel boom",
      "Advanced intelligent control system",
    ],
    applications: ["Super high-rise", "Mega infrastructure", "Power plants"],
    description:
      "A record-setting machine, the 86 m boom pump reaches heights other pumps cannot, using advanced lightweight materials and intelligent control to place concrete precisely at the top of the world's tallest projects.",
  }),

  // ===== CONCRETE: TRAILER / LINE PUMPS =====
  M({
    slug: "hbt9022", name: "HBT9022C-5", tagline: "High-pressure trailer concrete pump",
    categorySlug: "concrete-machinery", subcategorySlug: "trailer-pump", accent: "sky",
    specs: [
      { label: "Max output", value: "90", unit: "m³/h" },
      { label: "Max pressure", value: "22", unit: "MPa" },
      { label: "Engine power", value: "168", unit: "kW" },
      { label: "Vertical delivery", value: "300+", unit: "m" },
    ],
    highlights: [
      "High-pressure for long-distance & high-lift delivery",
      "Durable S-tube & hardened wear parts",
      "Simple maintenance and reliable output",
    ],
    applications: ["High-rise", "Tunnels", "Dams", "Remote pours"],
    description:
      "The HBT9022C trailer pump pushes concrete over long distances and to great heights, making it the tool of choice for tunnels, dams and tall buildings where a boom pump cannot reach.",
  }),

  // ===== CONCRETE: TRUCK MIXER =====
  M({
    slug: "sy410c-8", name: "SY410C-8 (10 m³)", tagline: "10 m³ concrete truck mixer",
    categorySlug: "concrete-machinery", subcategorySlug: "truck-mixer", accent: "sky",
    specs: [
      { label: "Drum capacity", value: "10", unit: "m³" },
      { label: "Geometric volume", value: "16", unit: "m³" },
      { label: "Charging speed", value: "≤ 4", unit: "min" },
      { label: "Water tank", value: "600", unit: "L" },
    ],
    highlights: [
      "Wear-resistant drum for long life",
      "Optimised spiral blades for clean discharge",
      "Lightweight design maximises payload",
    ],
    applications: ["Ready-mix delivery", "Batching plant fleets"],
    description:
      "Engineered for high daily throughput, this 10 m³ mixer pairs a durable, easy-clean drum with a fuel-efficient chassis to keep ready-mix moving from plant to pour reliably.",
  }),

  // ===== CONCRETE: PLACING BOOM =====
  M({
    slug: "hgy28", name: "HGY28 Placing Boom", tagline: "28 m self-climbing placing boom",
    categorySlug: "concrete-machinery", subcategorySlug: "placing-boom", accent: "sky",
    specs: [
      { label: "Boom reach", value: "28", unit: "m" },
      { label: "Sections", value: "4", unit: "" },
      { label: "Slewing", value: "360", unit: "°" },
      { label: "Pipe diameter", value: "125", unit: "mm" },
    ],
    highlights: [
      "Self-climbing for high-rise cores",
      "360° coverage for full floor placement",
      "Remote radio control for precise pours",
    ],
    applications: ["High-rise cores", "Bridges", "Large slabs"],
    description:
      "The HGY28 placing boom extends the reach of a stationary pump across an entire floor plate, self-climbing with the structure to deliver precise, labour-saving concrete placement on tall buildings.",
  }),

  // ===== CONCRETE: BATCHING PLANT =====
  M({
    slug: "hzs180", name: "HZS180 Batching Plant", tagline: "180 m³/h stationary batching plant",
    categorySlug: "concrete-machinery", subcategorySlug: "batching-plant", accent: "sky",
    specs: [
      { label: "Rated output", value: "180", unit: "m³/h" },
      { label: "Mixer", value: "3.0", unit: "m³" },
      { label: "Aggregate bins", value: "4", unit: "" },
      { label: "Control", value: "Automated", unit: "" },
    ],
    highlights: [
      "Twin-shaft mixer for homogeneous batches",
      "PLC automation with recipe management",
      "Modular design for fast installation",
    ],
    applications: ["Ready-mix production", "Precast", "Large projects"],
    description:
      "A high-capacity stationary plant, the HZS180 delivers consistent, high-quality concrete at scale with fully automated batching, weighing and mixing controlled from a single operator station.",
  }),

  // ===== CRANES: TRUCK CRANES =====
  M({
    slug: "stc250", name: "STC250T5", tagline: "25 t compact truck crane",
    categorySlug: "crane", subcategorySlug: "truck-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "25", unit: "t" },
      { label: "Max boom length", value: "44.5", unit: "m" },
      { label: "Max lifting height", value: "56", unit: "m" },
      { label: "Engine power", value: "199", unit: "kW" },
    ],
    highlights: [
      "U-shaped high-strength boom profile",
      "Single-cylinder pin telescoping for fast setup",
      "Intelligent LMI safety system",
    ],
    applications: ["General lifting", "Construction", "Plant maintenance"],
    description:
      "The STC250 is a nimble 25-tonne truck crane ideal for everyday lifting. Its strong, light boom and smart control system deliver quick, safe operation with excellent road mobility between jobs.",
  }),
  M({
    slug: "stc800", name: "STC800T", tagline: "80 t heavy-duty truck crane",
    categorySlug: "crane", subcategorySlug: "truck-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "80", unit: "t" },
      { label: "Max boom length", value: "50", unit: "m" },
      { label: "Max lifting height", value: "68", unit: "m" },
      { label: "Engine power", value: "294", unit: "kW" },
    ],
    highlights: [
      "High-capacity boom with strong load charts",
      "Full-power boom for fast, smooth operation",
      "Comfortable cab with intelligent display",
    ],
    applications: ["Infrastructure", "Steel erection", "Wind service"],
    description:
      "The STC800 delivers 80 tonnes of capacity in a road-mobile package, combining a powerful boom with intelligent controls for demanding lifts on infrastructure and industrial projects.",
  }),

  // ===== CRANES: ALL-TERRAIN =====
  M({
    slug: "sac2200", name: "SAC2200E", tagline: "220 t all-terrain crane",
    categorySlug: "crane", subcategorySlug: "all-terrain-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "220", unit: "t" },
      { label: "Max boom length", value: "78", unit: "m" },
      { label: "Max tip height", value: "120", unit: "m" },
      { label: "Axles", value: "5", unit: "" },
    ],
    highlights: [
      "All-wheel steer for confined-site access",
      "Long main boom plus luffing jib options",
      "Highway-legal mobility between projects",
    ],
    applications: ["Wind energy", "Bridges", "Industrial plants"],
    description:
      "The SAC2200 all-terrain crane blends serious lifting capacity with genuine road speed and off-road agility, making it a versatile choice for wind, infrastructure and plant work across long distances.",
  }),

  // ===== CRANES: ROUGH-TERRAIN =====
  M({
    slug: "src550", name: "SRC550", tagline: "55 t rough-terrain crane",
    categorySlug: "crane", subcategorySlug: "rough-terrain-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "55", unit: "t" },
      { label: "Max boom length", value: "43", unit: "m" },
      { label: "Max lifting height", value: "58", unit: "m" },
      { label: "Drive/steer", value: "4×4×4", unit: "" },
    ],
    highlights: [
      "All-wheel drive & crab steer for tough ground",
      "Compact footprint for congested sites",
      "Single-cab operation for efficiency",
    ],
    applications: ["Refineries", "Confined jobsites", "Plant maintenance"],
    description:
      "Built for off-road jobsites, the SRC550 rough-terrain crane combines all-wheel drive and steering with a compact chassis to work where larger cranes cannot go.",
  }),

  // ===== CRANES: CRAWLER =====
  M({
    slug: "scc1500", name: "SCC1500A", tagline: "150 t lattice-boom crawler crane",
    categorySlug: "crane", subcategorySlug: "crawler-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "150", unit: "t" },
      { label: "Max boom length", value: "84", unit: "m" },
      { label: "Max load moment", value: "525", unit: "t·m" },
      { label: "Transport", value: "Modular", unit: "" },
    ],
    highlights: [
      "High load moment for heavy lifts",
      "Fast self-assembly, modular transport",
      "Precise winch control for delicate placement",
    ],
    applications: ["Wind farms", "Bridges", "Petrochemical"],
    description:
      "The SCC1500A crawler crane offers strong load charts and smooth control for heavy lifting across wind, infrastructure and industrial construction, with modular components for cost-effective transport.",
  }),
  M({
    slug: "scc4000", name: "SCC4000A", tagline: "400 t heavy-lift crawler crane",
    categorySlug: "crane", subcategorySlug: "crawler-crane", accent: "orange",
    badges: ["Heavy lift"],
    specs: [
      { label: "Max lifting capacity", value: "400", unit: "t" },
      { label: "Max boom + jib", value: "132", unit: "m" },
      { label: "Max load moment", value: "1,540", unit: "t·m" },
      { label: "Counterweight", value: "160", unit: "t" },
    ],
    highlights: [
      "Superlift for extreme capacity",
      "Ideal for onshore wind turbine erection",
      "Advanced control for safe heavy lifts",
    ],
    applications: ["Wind turbine erection", "Refineries", "Mega-projects"],
    description:
      "A dedicated heavy-lift machine, the SCC4000A is engineered for the largest onshore wind turbines and industrial modules, delivering the reach and capacity that megaprojects demand.",
  }),

  // ===== CRANES: TOWER =====
  M({
    slug: "syt125", name: "SYT125 (T7020-10)", tagline: "10 t flat-top tower crane",
    categorySlug: "crane", subcategorySlug: "tower-crane", accent: "orange",
    specs: [
      { label: "Max lifting capacity", value: "10", unit: "t" },
      { label: "Jib length", value: "70", unit: "m" },
      { label: "Tip load", value: "2.0", unit: "t" },
      { label: "Type", value: "Flat-top", unit: "" },
    ],
    highlights: [
      "Flat-top design for easy multi-crane sites",
      "Frequency-controlled hoist for smooth lifts",
      "Fast erection with modular sections",
    ],
    applications: ["High-rise", "Commercial build", "Infrastructure"],
    description:
      "The SYT125 flat-top tower crane is designed for efficient high-rise construction, offering long jib reach and smooth, precise load handling with straightforward erection and climbing.",
  }),

  // ===== ROAD: ROLLERS =====
  M({
    slug: "ssr220", name: "SSR220C-8", tagline: "22 t single-drum vibratory roller",
    categorySlug: "road-machinery", subcategorySlug: "road-roller", accent: "lime",
    specs: [
      { label: "Operating weight", value: "22,000", unit: "kg" },
      { label: "Drum width", value: "2,170", unit: "mm" },
      { label: "Exciting force", value: "375", unit: "kN" },
      { label: "Engine power", value: "175", unit: "kW" },
    ],
    highlights: [
      "High centrifugal force for deep compaction",
      "Intelligent compaction metering (optional)",
      "Comfortable, low-vibration cab",
    ],
    applications: ["Highways", "Dams", "Airfields", "Subgrade"],
    description:
      "The SSR220C is a heavy single-drum roller built for deep, uniform compaction of subgrades and embankments, with optional intelligent compaction to document density in real time.",
  }),

  // ===== ROAD: GRADER =====
  M({
    slug: "smg220", name: "SMG220C-8", tagline: "220 hp motor grader",
    categorySlug: "road-machinery", subcategorySlug: "motor-grader", accent: "lime",
    specs: [
      { label: "Engine power", value: "164", unit: "kW" },
      { label: "Blade length", value: "4,270", unit: "mm" },
      { label: "Operating weight", value: "16,500", unit: "kg" },
      { label: "Max speed", value: "44", unit: "km/h" },
    ],
    highlights: [
      "Precise blade control for fine grading",
      "Optional 3D grade-control ready",
      "All-wheel drive option for traction",
    ],
    applications: ["Road maintenance", "Site grading", "Mining haul roads"],
    description:
      "The SMG220C motor grader delivers accurate, efficient grading for roads and large sites, with responsive controls and optional machine-guidance readiness for tight-tolerance work.",
  }),

  // ===== ROAD: PAVER =====
  M({
    slug: "sap130", name: "SAP130C-8", tagline: "13 m wide asphalt paver",
    categorySlug: "road-machinery", subcategorySlug: "paver", accent: "lime",
    specs: [
      { label: "Max paving width", value: "13", unit: "m" },
      { label: "Paving thickness", value: "300", unit: "mm" },
      { label: "Hopper capacity", value: "14", unit: "t" },
      { label: "Max output", value: "700", unit: "t/h" },
    ],
    highlights: [
      "Extra-wide screed for highway paving",
      "Uniform mat quality with tamper & vibration",
      "Smart temperature & flow management",
    ],
    applications: ["Highways", "Airports", "Large paving"],
    description:
      "For highway and airport work, the SAP130C lays wide, smooth asphalt mats in a single pass, combining a high-capacity feed system with precise screed control for consistent surface quality.",
  }),

  // ===== PORT: REACH STACKER =====
  M({
    slug: "srsc45", name: "SRSC45H30", tagline: "45 t container reach stacker",
    categorySlug: "port-machinery", subcategorySlug: "reach-stacker", accent: "teal",
    specs: [
      { label: "Rated capacity", value: "45", unit: "t" },
      { label: "Stacking", value: "1-over-5", unit: "" },
      { label: "Engine power", value: "247", unit: "kW" },
      { label: "Spreader", value: "20–40 ft", unit: "" },
    ],
    highlights: [
      "High-visibility cab for safe handling",
      "Efficient hydrostatic drive & load sensing",
      "Rugged boom for intensive port duty",
    ],
    applications: ["Container terminals", "Intermodal yards", "Depots"],
    description:
      "The SRSC45 reach stacker moves 40-foot containers quickly and safely, stacking up to five high with excellent operator visibility and a durable, fuel-efficient drivetrain for round-the-clock terminals.",
  }),

  // ===== PORT: EMPTY CONTAINER HANDLER =====
  M({
    slug: "sdcy90", name: "SDCY90K7H", tagline: "9 t empty container handler",
    categorySlug: "port-machinery", subcategorySlug: "empty-container-handler", accent: "teal",
    specs: [
      { label: "Rated capacity", value: "9", unit: "t" },
      { label: "Stacking", value: "8-high", unit: "" },
      { label: "Engine power", value: "129", unit: "kW" },
      { label: "Spreader", value: "20–40 ft", unit: "" },
    ],
    highlights: [
      "Stacks empties up to 8 containers high",
      "Fast, precise spreader positioning",
      "Compact turning for dense yards",
    ],
    applications: ["Empty depots", "Container yards", "Ports"],
    description:
      "Optimised for empty-container depots, the SDCY90 handles boxes rapidly and stacks them eight high, maximising storage density while keeping cycle times short.",
  }),

  // ===== PORT: HEAVY FORKLIFT =====
  M({
    slug: "scp160", name: "SCP160C", tagline: "16 t heavy diesel forklift",
    categorySlug: "port-machinery", subcategorySlug: "heavy-forklift", accent: "teal",
    specs: [
      { label: "Rated capacity", value: "16", unit: "t" },
      { label: "Load centre", value: "1,200", unit: "mm" },
      { label: "Engine power", value: "162", unit: "kW" },
      { label: "Lift height", value: "3,000", unit: "mm" },
    ],
    highlights: [
      "Heavy-duty mast for big loads",
      "Powerful drivetrain with strong torque",
      "Great visibility and operator comfort",
    ],
    applications: ["Ports", "Steel & timber yards", "Heavy logistics"],
    description:
      "The SCP160 heavy forklift lifts 16 tonnes with ease, combining a robust mast and powerful drivetrain to handle steel, timber and containerised loads in the most demanding yards.",
  }),

  // ===== MINING: RIGID TRUCK =====
  M({
    slug: "skt90s", name: "SKT90S", tagline: "60 t rigid mining dump truck",
    categorySlug: "mining-machinery", subcategorySlug: "mining-truck", accent: "stone",
    specs: [
      { label: "Payload", value: "60", unit: "t" },
      { label: "Engine power", value: "533", unit: "kW" },
      { label: "Body volume", value: "36", unit: "m³" },
      { label: "Max speed", value: "60", unit: "km/h" },
    ],
    highlights: [
      "High power-to-weight for fast haul cycles",
      "Reliable driveline for continuous mining",
      "Advanced braking & retarder for safe descents",
    ],
    applications: ["Open-pit mining", "Overburden haul", "Large quarries"],
    description:
      "The SKT90S rigid hauler moves 60 tonnes per trip with a strong drivetrain and safety-focused braking, delivering low cost per tonne in demanding surface-mining operations.",
  }),

  // ===== MINING: WIDE-BODY =====
  M({
    slug: "skt55e", name: "SKT55E", tagline: "45 t electric wide-body dump truck",
    categorySlug: "mining-machinery", subcategorySlug: "electric-mining", accent: "emerald",
    badges: ["New energy"],
    specs: [
      { label: "Payload", value: "45", unit: "t" },
      { label: "Battery", value: "423", unit: "kWh" },
      { label: "Motor power", value: "480", unit: "kW" },
      { label: "Charging", value: "Battery-swap", unit: "" },
    ],
    highlights: [
      "Zero-emission haulage for greener mines",
      "Energy recovery on downhill loaded runs",
      "Battery-swap keeps trucks working 24/7",
    ],
    applications: ["Green mining", "Quarries", "Short-haul cycles"],
    description:
      "The SKT55E electric wide-body truck slashes fuel cost and emissions while regenerating energy on loaded descents. Battery-swap capability keeps the fleet hauling around the clock.",
  }),

  // ===== MINING: MINING EXCAVATOR =====
  M({
    slug: "sy690", name: "SY690", tagline: "70 t mining excavator",
    categorySlug: "mining-machinery", subcategorySlug: "mining-excavator", accent: "stone",
    specs: [
      { label: "Operating weight", value: "69,500", unit: "kg" },
      { label: "Engine power", value: "382", unit: "kW" },
      { label: "Bucket capacity", value: "4.0", unit: "m³" },
      { label: "Max digging depth", value: "7,700", unit: "mm" },
    ],
    highlights: [
      "High-flow hydraulics for fast truck loading",
      "Mining-grade structures & cooling",
      "Excellent fuel efficiency per tonne",
    ],
    applications: ["Open-pit loading", "Overburden", "Quarrying"],
    description:
      "The SY690 mining excavator is built to load haul trucks quickly and reliably shift after shift, with robust structures and high-flow hydraulics tuned for maximum production.",
  }),

  // ===== PILING: ROTARY DRILLING RIG =====
  M({
    slug: "sr285", name: "SR285R", tagline: "285 kN·m rotary drilling rig",
    categorySlug: "piling-machinery", subcategorySlug: "rotary-drilling-rig", accent: "violet",
    specs: [
      { label: "Max torque", value: "285", unit: "kN·m" },
      { label: "Max drilling diameter", value: "2,000", unit: "mm" },
      { label: "Max drilling depth", value: "68", unit: "m" },
      { label: "Engine power", value: "250", unit: "kW" },
    ],
    highlights: [
      "High torque for hard-rock drilling",
      "Intelligent verticality & depth control",
      "Fast, stable auto-mast folding for transport",
    ],
    applications: ["Bridge foundations", "High-rise piles", "Infrastructure"],
    description:
      "The SR285R rotary drilling rig bores deep, large-diameter piles for major foundations, combining high torque with intelligent controls that keep bores accurate and vertical.",
  }),
  M({
    slug: "sr485", name: "SR485R", tagline: "485 kN·m large rotary drilling rig",
    categorySlug: "piling-machinery", subcategorySlug: "rotary-drilling-rig", accent: "violet",
    badges: ["Deep foundation"],
    specs: [
      { label: "Max torque", value: "485", unit: "kN·m" },
      { label: "Max drilling diameter", value: "2,800", unit: "mm" },
      { label: "Max drilling depth", value: "105", unit: "m" },
      { label: "Engine power", value: "336", unit: "kW" },
    ],
    highlights: [
      "Massive torque for the deepest piles",
      "Heavy-duty mast & rotary drive",
      "Smart drilling assistance for productivity",
    ],
    applications: ["Mega-bridges", "Deep foundations", "Ports"],
    description:
      "For the deepest, largest foundations, the SR485R delivers exceptional torque and depth capacity, making it the rig of choice for mega-bridges and demanding infrastructure piling.",
  }),

  // ===== TRUCKS: ELECTRIC HEAVY =====
  M({
    slug: "e-truck-tractor", name: "SANY e-Truck Tractor", tagline: "49 t battery-electric heavy tractor",
    categorySlug: "truck", subcategorySlug: "electric-heavy-truck", accent: "indigo",
    badges: ["New energy"],
    specs: [
      { label: "GCW", value: "49", unit: "t" },
      { label: "Battery", value: "423", unit: "kWh" },
      { label: "Motor power", value: "360", unit: "kW" },
      { label: "Refuel", value: "Battery-swap", unit: "" },
    ],
    highlights: [
      "Battery-swap in minutes for zero downtime",
      "Zero-emission regional & port haulage",
      "Low energy cost per kilometre",
    ],
    applications: ["Port drayage", "Steel & mining logistics", "Regional haul"],
    description:
      "SANY's battery-electric tractor delivers diesel-class performance with zero tailpipe emissions. Battery-swap technology refuels in minutes, keeping trucks earning around the clock in port and industrial logistics.",
  }),

  // ===== TRUCKS: DUMP =====
  M({
    slug: "dump-truck-8x4", name: "SANY Dump Truck 8×4", tagline: "Construction dump truck",
    categorySlug: "truck", subcategorySlug: "dump-truck", accent: "indigo",
    specs: [
      { label: "Configuration", value: "8×4", unit: "" },
      { label: "Body volume", value: "18", unit: "m³" },
      { label: "Engine power", value: "353", unit: "kW" },
      { label: "Payload", value: "31", unit: "t" },
    ],
    highlights: [
      "High-strength lightweight body for payload",
      "Fast tipping and strong climbing ability",
      "Comfortable, safe modern cab",
    ],
    applications: ["Construction haul", "Aggregates", "Earthworks"],
    description:
      "A rugged on-highway dump truck for construction logistics, combining a lightweight high-strength body with a powerful, efficient driveline to maximise payload and productivity.",
  }),

  // ===== AERIAL: SCISSOR LIFT =====
  M({
    slug: "ssa1212e", name: "SSA1212E", tagline: "12 m electric scissor lift",
    categorySlug: "aerial-work-platform", subcategorySlug: "scissor-lift", accent: "yellow",
    badges: ["Electric"],
    specs: [
      { label: "Platform height", value: "12", unit: "m" },
      { label: "Platform capacity", value: "320", unit: "kg" },
      { label: "Drive", value: "Electric", unit: "" },
      { label: "Extension deck", value: "0.9", unit: "m" },
    ],
    highlights: [
      "Quiet, zero-emission electric drive",
      "Proportional controls for smooth positioning",
      "Compact chassis for indoor access",
    ],
    applications: ["Indoor construction", "Warehousing", "Maintenance"],
    description:
      "The SSA1212E electric scissor lift provides safe, stable access to 12 metres for indoor construction and maintenance, with quiet operation and zero emissions for enclosed environments.",
  }),

  // ===== AERIAL: BOOM LIFT =====
  M({
    slug: "sab24e", name: "SAB24E", tagline: "24 m articulating boom lift",
    categorySlug: "aerial-work-platform", subcategorySlug: "boom-lift", accent: "yellow",
    specs: [
      { label: "Working height", value: "24", unit: "m" },
      { label: "Horizontal outreach", value: "13", unit: "m" },
      { label: "Platform capacity", value: "230", unit: "kg" },
      { label: "Drive", value: "Electric 4WD", unit: "" },
    ],
    highlights: [
      "Articulating boom reaches up-and-over obstacles",
      "Electric 4WD for indoor & outdoor use",
      "Precise proportional joystick control",
    ],
    applications: ["Facades", "Industrial maintenance", "Construction"],
    description:
      "The SAB24E articulating boom lift reaches up and over obstacles to place workers exactly where they are needed, with an electric all-wheel-drive chassis for versatile indoor and outdoor access.",
  }),

  // ===== RENEWABLE: ONSHORE =====
  M({
    slug: "si-190-6mw", name: "SI-190 6.25 MW", tagline: "Onshore smart wind turbine",
    categorySlug: "renewable-energy", subcategorySlug: "onshore-turbine", accent: "emerald",
    badges: ["Clean energy"],
    specs: [
      { label: "Rated power", value: "6.25", unit: "MW" },
      { label: "Rotor diameter", value: "190", unit: "m" },
      { label: "Hub height", value: "120", unit: "m" },
      { label: "Wind class", value: "IEC III", unit: "" },
    ],
    highlights: [
      "Large rotor for high capacity factor",
      "Smart control & digital twin monitoring",
      "Optimised LCOE for low-wind sites",
    ],
    applications: ["Onshore wind farms", "Low-wind regions", "Repowering"],
    description:
      "SANY Renewable Energy's onshore platform pairs a large rotor with intelligent controls and digital-twin monitoring to maximise annual energy yield and drive down the levelised cost of clean electricity.",
  }),

  // ===== RENEWABLE: OFFSHORE =====
  M({
    slug: "so-260-15mw", name: "SO-260 15 MW", tagline: "Offshore wind turbine platform",
    categorySlug: "renewable-energy", subcategorySlug: "offshore-turbine", accent: "emerald",
    badges: ["Offshore"],
    specs: [
      { label: "Rated power", value: "15", unit: "MW" },
      { label: "Rotor diameter", value: "260", unit: "m" },
      { label: "Swept area", value: "53,000", unit: "m²" },
      { label: "Wind class", value: "Typhoon", unit: "" },
    ],
    highlights: [
      "Typhoon-class structural design",
      "High yield for deep-water sites",
      "Condition monitoring for offshore uptime",
    ],
    applications: ["Offshore wind", "Deep-water sites", "Coastal power"],
    description:
      "Engineered for the harsh marine environment, SANY's 15 MW offshore turbine captures enormous energy from a 260 m rotor, with typhoon-class engineering and remote monitoring for reliable deep-water generation.",
  }),

  // ===== RENEWABLE: STORAGE =====
  M({
    slug: "bess-liquid-cooled", name: "SANY Liquid-cooled BESS", tagline: "Grid-scale energy storage system",
    categorySlug: "renewable-energy", subcategorySlug: "energy-storage", accent: "emerald",
    specs: [
      { label: "Container capacity", value: "5", unit: "MWh" },
      { label: "Cooling", value: "Liquid", unit: "" },
      { label: "Cycle life", value: "10,000+", unit: "cycles" },
      { label: "Efficiency", value: "≥ 95", unit: "%" },
    ],
    highlights: [
      "Liquid cooling for long cell life & safety",
      "Modular containerised deployment",
      "Smart EMS for grid & renewable integration",
    ],
    applications: ["Grid firming", "Renewable integration", "Peak shaving"],
    description:
      "SANY's liquid-cooled battery energy-storage system stabilises grids and firms renewable output, packing high capacity into a safe, modular container with intelligent energy management.",
  }),
];

// ------------------------------------------------------------
//  DERIVED HELPERS
// ------------------------------------------------------------

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getModel = (slug: string) => models.find((m) => m.slug === slug);

export const modelsInCategory = (categorySlug: string) =>
  models.filter((m) => m.categorySlug === categorySlug);

export const modelsInSubcategory = (categorySlug: string, subSlug: string) =>
  models.filter((m) => m.categorySlug === categorySlug && m.subcategorySlug === subSlug);

export const subcategoryCounts = (categorySlug: string) => {
  const cat = getCategory(categorySlug);
  if (!cat) return [];
  return cat.subcategories.map((s) => ({
    ...s,
    count: modelsInSubcategory(categorySlug, s.slug).length,
  }));
};

export const featuredModels = () =>
  models.filter((m) => m.badges && m.badges.length > 0).slice(0, 8);

export const totalModelCount = models.length;
export const totalCategoryCount = categories.length;
