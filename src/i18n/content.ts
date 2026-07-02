import { type L, type Locale, tx } from "./config";
import type { Category, Model, Subcategory } from "@/data/products";

// ============================================================
//  Catalogue translations (ru / en / zh)
//  The English strings in src/data/products.ts are the base;
//  these override per-locale, with graceful fallback.
// ============================================================

type CatT = {
  name: L;
  shortName: L;
  tagline: L;
  description: L;
  subs: Record<string, { name: L; blurb: L }>;
};

const cat: Record<string, CatT> = {
  excavator: {
    name: { ru: "Экскаваторы", en: "Excavators", zh: "挖掘机" },
    shortName: { ru: "Экскаваторы", en: "Excavators", zh: "挖掘机" },
    tagline: {
      ru: "От микроэкскаваторов 1,6 т до карьерных гигантов 90 т",
      en: "From 1.6 t micro diggers to 90 t mining giants",
      zh: "从 1.6 吨微型挖机到 90 吨矿用巨机",
    },
    description: {
      ru: "Самый продаваемый бренд экскаваторов в мире. Полный модельный ряд, созданный ради экономичности, интеллектуальной гидравлики и лучшей в отрасли надёжности — от компактных городских задач до тяжёлых земляных работ.",
      en: "The world's best-selling excavator brand. A complete range engineered for fuel efficiency, intelligent hydraulics and industry-leading durability — from compact urban work to heavy earthmoving.",
      zh: "全球最畅销的挖掘机品牌。完整产品线为燃油经济性、智能液压和行业领先的耐久性而生——从紧凑的城市作业到重型土方工程。",
    },
    subs: {
      "mini-excavator": {
        name: { ru: "Мини-экскаваторы", en: "Mini Excavators", zh: "迷你挖掘机" },
        blurb: { ru: "1,6–5,5 т, нулевой и малый свес", en: "1.6 – 5.5 t, zero & short tail swing", zh: "1.6–5.5 吨，零/短尾回转" },
      },
      "small-excavator": {
        name: { ru: "Малые экскаваторы", en: "Small Excavators", zh: "小型挖掘机" },
        blurb: { ru: "6–10 т, универсальные рабочие лошадки", en: "6 – 10 t versatile workhorses", zh: "6–10 吨多面手" },
      },
      "medium-excavator": {
        name: { ru: "Средние экскаваторы", en: "Medium Excavators", zh: "中型挖掘机" },
        blurb: { ru: "13–27 т, универсальные машины", en: "13 – 27 t all-round performers", zh: "13–27 吨全能机型" },
      },
      "large-excavator": {
        name: { ru: "Большие экскаваторы", en: "Large Excavators", zh: "大型挖掘机" },
        blurb: { ru: "30–95 т, тяжёлые земляные работы", en: "30 – 95 t heavy earthmoving", zh: "30–95 吨重型土方" },
      },
      "wheeled-excavator": {
        name: { ru: "Колёсные экскаваторы", en: "Wheeled Excavators", zh: "轮式挖掘机" },
        blurb: { ru: "Мобильные, быстрое перемещение", en: "Road-mobile, fast repositioning", zh: "公路自行，快速转场" },
      },
      "electric-excavator": {
        name: { ru: "Электрические экскаваторы", en: "Electric Excavators", zh: "电动挖掘机" },
        blurb: { ru: "Нулевые выбросы: АКБ и кабель", en: "Zero-emission battery & cable power", zh: "零排放，电池与电缆供电" },
      },
    },
  },
  "concrete-machinery": {
    name: { ru: "Бетонная техника", en: "Concrete Machinery", zh: "混凝土机械" },
    shortName: { ru: "Бетон", en: "Concrete", zh: "混凝土" },
    tagline: { ru: "№1 в мире по бетонной технике", en: "World No.1 in concrete machinery", zh: "混凝土机械全球第一" },
    description: {
      ru: "Первое место в мире по бетонному оборудованию. Автобетононасосы с вылетом до 86 м, прицепные насосы высокого давления, миксеры, распределительные стрелы и полнокомплектные бетонные заводы, задающие отраслевой стандарт.",
      en: "Ranked first globally in concrete equipment. Truck-mounted boom pumps up to 86 m, high-pressure trailer pumps, mixers, placing booms and complete batching plants that set the industry benchmark.",
      zh: "混凝土设备全球排名第一。臂架泵车臂长达 86 米，高压拖泵、搅拌车、布料机及成套搅拌站，树立行业标杆。",
    },
    subs: {
      "truck-mounted-pump": {
        name: { ru: "Автобетононасосы", en: "Truck-mounted Pumps", zh: "臂架泵车" },
        blurb: { ru: "Вылет стрелы 23–86 м", en: "23 – 86 m boom reach", zh: "臂架 23–86 米" },
      },
      "trailer-pump": {
        name: { ru: "Прицепные и линейные насосы", en: "Trailer & Line Pumps", zh: "拖泵与地泵" },
        blurb: { ru: "Дальняя подача под высоким давлением", en: "High-pressure long-distance delivery", zh: "高压远距离输送" },
      },
      "truck-mixer": {
        name: { ru: "Автобетоносмесители", en: "Truck Mixers", zh: "混凝土搅拌车" },
        blurb: { ru: "Барабаны 6–16 м³", en: "6 – 16 m³ agitator trucks", zh: "6–16 m³ 搅拌车" },
      },
      "placing-boom": {
        name: { ru: "Распределительные стрелы", en: "Placing Booms", zh: "布料机" },
        blurb: { ru: "Точная укладка на высоте", en: "Precision high-rise placement", zh: "高层精准布料" },
      },
      "batching-plant": {
        name: { ru: "Бетонные заводы", en: "Batching Plants", zh: "搅拌站" },
        blurb: { ru: "60–240 м³/ч, стационарные и мобильные", en: "60 – 240 m³/h stationary & mobile", zh: "60–240 m³/h 固定与移动" },
      },
    },
  },
  crane: {
    name: { ru: "Краны", en: "Cranes", zh: "起重机" },
    shortName: { ru: "Краны", en: "Cranes", zh: "起重机" },
    tagline: { ru: "Подъём от 12 т до 4000 т", en: "Lifting from 12 t to 4 000 t", zh: "起重能力 12 至 4000 吨" },
    description: {
      ru: "Полный подъёмный портфель: автокраны, вседорожные и внедорожные краны, гусеничные краны до 4000 т, башенные и краны-манипуляторы — для максимальной грузоподъёмности, вылета и безопасности на площадке.",
      en: "A full lifting portfolio: truck cranes, all-terrain and rough-terrain cranes, crawler cranes to 4 000 t, tower cranes and loader cranes — engineered for maximum capacity, reach and jobsite safety.",
      zh: "完整的起重产品线：汽车起重机、全地面与越野起重机、履带起重机（可达 4000 吨）、塔式起重机与随车起重机——为最大起重量、幅度与现场安全而设计。",
    },
    subs: {
      "truck-crane": {
        name: { ru: "Автокраны", en: "Truck Cranes", zh: "汽车起重机" },
        blurb: { ru: "25–130 т, мобильный подъём", en: "25 – 130 t road-mobile lifting", zh: "25–130 吨公路自行" },
      },
      "all-terrain-crane": {
        name: { ru: "Вседорожные краны", en: "All-terrain Cranes", zh: "全地面起重机" },
        blurb: { ru: "220–600 т, многоосное шасси", en: "220 – 600 t multi-axle mobility", zh: "220–600 吨多轴机动" },
      },
      "rough-terrain-crane": {
        name: { ru: "Внедорожные краны", en: "Rough-terrain Cranes", zh: "越野起重机" },
        blurb: { ru: "Манёвренность вне дорог", en: "Off-road jobsite agility", zh: "非道路灵活作业" },
      },
      "crawler-crane": {
        name: { ru: "Гусеничные краны", en: "Crawler Cranes", zh: "履带起重机" },
        blurb: { ru: "80–4000 т, тяжёлый подъём", en: "80 – 4 000 t heavy lift", zh: "80–4000 吨重吊" },
      },
      "tower-crane": {
        name: { ru: "Башенные краны", en: "Tower Cranes", zh: "塔式起重机" },
        blurb: { ru: "Плоский верх и люлечные", en: "Flat-top & luffing high-rise", zh: "平头与动臂高层" },
      },
      "truck-mounted-crane": {
        name: { ru: "Краны-манипуляторы", en: "Loader Cranes", zh: "随车起重机" },
        blurb: { ru: "Стрела-манипулятор для грузов", en: "Knuckle-boom material handling", zh: "折臂物料搬运" },
      },
    },
  },
  "road-machinery": {
    name: { ru: "Дорожная техника", en: "Road Machinery", zh: "路面机械" },
    shortName: { ru: "Дорога", en: "Road", zh: "路面" },
    tagline: { ru: "Дороги, которые служат", en: "Build roads that last", zh: "筑就经久之路" },
    description: {
      ru: "Уплотнение, планировка, укладка и фрезерование с интеллектуальным управлением для стабильной плотности и качества поверхности на трассах, в городах и аэропортах.",
      en: "Compaction, grading, paving and milling equipment with intelligent controls for consistent density and surface quality across highway, urban and airport projects.",
      zh: "压实、平地、摊铺与铣刨设备，配备智能控制，为高速公路、城市与机场项目提供稳定的密实度与路面质量。",
    },
    subs: {
      "road-roller": {
        name: { ru: "Дорожные катки", en: "Road Rollers", zh: "压路机" },
        blurb: { ru: "Одно- и двухвальцовые", en: "Single & double drum compaction", zh: "单钢轮与双钢轮压实" },
      },
      "motor-grader": {
        name: { ru: "Автогрейдеры", en: "Motor Graders", zh: "平地机" },
        blurb: { ru: "Точная планировка", en: "Precision fine grading", zh: "精细平整" },
      },
      paver: {
        name: { ru: "Асфальтоукладчики", en: "Asphalt Pavers", zh: "沥青摊铺机" },
        blurb: { ru: "Ширина укладки 2,5–13 м", en: "2.5 – 13 m paving width", zh: "摊铺宽度 2.5–13 米" },
      },
      "milling-machine": {
        name: { ru: "Дорожные фрезы", en: "Cold Milling Machines", zh: "冷铣刨机" },
        blurb: { ru: "Эффективное восстановление покрытия", en: "Efficient surface reclamation", zh: "高效路面再生" },
      },
    },
  },
  "port-machinery": {
    name: { ru: "Портовая техника", en: "Port Machinery", zh: "港口机械" },
    shortName: { ru: "Порт", en: "Port", zh: "港口" },
    tagline: { ru: "Перемещаем грузы мира", en: "Move the world's cargo", zh: "搬运世界货物" },
    description: {
      ru: "Ричстакеры, погрузчики порожних контейнеров, тяжёлые вилочные погрузчики и складские краны — включая электрические и автоматизированные решения — для высокопроизводительных портов, терминалов и логистических хабов.",
      en: "Reach stackers, empty container handlers, heavy forklifts and yard cranes — including electric and automated solutions — for high-throughput ports, terminals and logistics hubs.",
      zh: "正面吊、空箱堆高机、重型叉车与场桥——包括电动与自动化方案——为高吞吐港口、码头与物流枢纽服务。",
    },
    subs: {
      "reach-stacker": {
        name: { ru: "Ричстакеры", en: "Reach Stackers", zh: "正面吊" },
        blurb: { ru: "Обработка контейнеров 45 т", en: "45 t container handling", zh: "45 吨集装箱作业" },
      },
      "empty-container-handler": {
        name: { ru: "Погрузчики порожних контейнеров", en: "Empty Container Handlers", zh: "空箱堆高机" },
        blurb: { ru: "Штабелирование до 8 ярусов", en: "Efficient stacking to 8-high", zh: "高效堆码至 8 层" },
      },
      "heavy-forklift": {
        name: { ru: "Тяжёлые погрузчики", en: "Heavy Forklifts", zh: "重型叉车" },
        blurb: { ru: "Грузоподъёмность 3–46 т", en: "3 – 46 t lifting capacity", zh: "起重量 3–46 吨" },
      },
      "yard-crane": {
        name: { ru: "Складские краны (RTG/RMG)", en: "Yard Cranes (RTG/RMG)", zh: "场桥 (RTG/RMG)" },
        blurb: { ru: "Автоматизированные терминальные краны", en: "Automated terminal cranes", zh: "自动化码头起重机" },
      },
    },
  },
  "mining-machinery": {
    name: { ru: "Карьерная техника", en: "Mining Machinery", zh: "矿山机械" },
    shortName: { ru: "Карьер", en: "Mining", zh: "矿山" },
    tagline: { ru: "Двигатель добывающей экономики", en: "Power the extraction economy", zh: "驱动采掘经济" },
    description: {
      ru: "Жёсткие и широкорамные карьерные самосвалы, большие карьерные экскаваторы и электросамосвалы, созданные для самых суровых условий открытой добычи с минимальной стоимостью тонны.",
      en: "Rigid and wide-body mining trucks, large mining excavators and electric-drive haulers built for the harshest surface-mining conditions with the lowest cost per tonne.",
      zh: "刚性与宽体矿用卡车、大型矿用挖掘机及电驱运输车，专为最严苛的露天采矿工况打造，实现最低吨成本。",
    },
    subs: {
      "mining-truck": {
        name: { ru: "Жёсткие карьерные самосвалы", en: "Rigid Mining Trucks", zh: "刚性矿用卡车" },
        blurb: { ru: "Грузоподъёмность 60–220 т", en: "60 – 220 t payload", zh: "载重 60–220 吨" },
      },
      "wide-body-truck": {
        name: { ru: "Широкорамные самосвалы", en: "Wide-body Dump Trucks", zh: "宽体自卸车" },
        blurb: { ru: "Внедорожная перевозка 35–90 т", en: "35 – 90 t off-highway haul", zh: "35–90 吨非公路运输" },
      },
      "mining-excavator": {
        name: { ru: "Карьерные экскаваторы", en: "Mining Excavators", zh: "矿用挖掘机" },
        blurb: { ru: "Забойные лопаты 70–400 т", en: "70 – 400 t face shovels", zh: "70–400 吨正铲" },
      },
      "electric-mining": {
        name: { ru: "Электросамосвалы", en: "Electric Mining Trucks", zh: "电动矿用车" },
        blurb: { ru: "АКБ и троллей, нулевые выбросы", en: "Battery & trolley zero-emission", zh: "电池与受电弓，零排放" },
      },
    },
  },
  "piling-machinery": {
    name: { ru: "Сваебойная техника", en: "Piling Machinery", zh: "桩工机械" },
    shortName: { ru: "Сваи", en: "Piling", zh: "桩工" },
    tagline: { ru: "Фундаменты для мегапроектов", en: "Foundations for megaprojects", zh: "为超级工程筑基" },
    description: {
      ru: "Буровые установки, гидравлические статические сваевдавливатели и оборудование для стены в грунте, обеспечивающие глубокие и устойчивые фундаменты для мостов, высоток и инфраструктуры.",
      en: "Rotary drilling rigs, hydraulic static pile drivers and diaphragm-wall equipment that deliver deep, stable foundations for bridges, high-rises and infrastructure.",
      zh: "旋挖钻机、液压静力压桩机及地下连续墙设备，为桥梁、高层与基础设施提供深稳基础。",
    },
    subs: {
      "rotary-drilling-rig": {
        name: { ru: "Буровые установки", en: "Rotary Drilling Rigs", zh: "旋挖钻机" },
        blurb: { ru: "Крутящий момент 150–620 кН·м", en: "150 – 620 kN·m torque", zh: "扭矩 150–620 kN·m" },
      },
      "static-pile-driver": {
        name: { ru: "Статические сваевдавливатели", en: "Static Pile Drivers", zh: "静力压桩机" },
        blurb: { ru: "Безвибрационное вдавливание свай", en: "Vibration-free press-in piling", zh: "无振动压入式沉桩" },
      },
    },
  },
  truck: {
    name: { ru: "Грузовики", en: "Trucks", zh: "卡车" },
    shortName: { ru: "Грузовики", en: "Trucks", zh: "卡车" },
    tagline: { ru: "Электро и умный тяжёлый транспорт", en: "Electric & smart heavy transport", zh: "电动与智能重卡" },
    description: {
      ru: "Тяжёлые грузовики новой энергетики — аккумуляторные, с увеличенным пробегом и водородные — а также тягачи, самосвалы и бетоновозные шасси для минимальной стоимости владения и логистики без выбросов.",
      en: "New-energy heavy-duty trucks — battery-electric, range-extended and hydrogen — plus tractors, dump and mixer chassis engineered for total cost of ownership and zero-emission logistics.",
      zh: "新能源重卡——纯电、增程与氢能——以及牵引、自卸与搅拌底盘，为总拥有成本与零排放物流而设计。",
    },
    subs: {
      "electric-heavy-truck": {
        name: { ru: "Электрические тягачи", en: "Electric Heavy Trucks", zh: "电动重卡" },
        blurb: { ru: "Смена батареи и зарядка", en: "Battery-swap & charging tractors", zh: "换电与充电牵引车" },
      },
      "dump-truck": {
        name: { ru: "Самосвалы", en: "Dump Trucks", zh: "自卸车" },
        blurb: { ru: "Дорожная перевозка на стройке", en: "On-highway construction haul", zh: "公路建筑运输" },
      },
      "mixer-truck": {
        name: { ru: "Бетоновозные шасси", en: "Mixer Chassis", zh: "搅拌底盘" },
        blurb: { ru: "Спецшасси для бетона", en: "Purpose-built concrete transport", zh: "专用混凝土运输" },
      },
    },
  },
  "aerial-work-platform": {
    name: { ru: "Подъёмники", en: "Aerial Work Platforms", zh: "高空作业平台" },
    shortName: { ru: "Подъёмники", en: "Access", zh: "高空平台" },
    tagline: { ru: "Безопасная работа на высоте", en: "Work safely at height", zh: "高空作业更安全" },
    description: {
      ru: "Ножничные, коленчатые и телескопические подъёмники с электроприводом и умным управлением для строительства, обслуживания и промышленного доступа до 44 м.",
      en: "Scissor lifts, articulating and telescopic boom lifts with electric drive and smart controls for construction, maintenance and industrial access up to 44 m.",
      zh: "剪叉式、曲臂与直臂高空作业平台，电力驱动、智能控制，用于建筑、维护与工业高空作业，最高达 44 米。",
    },
    subs: {
      "scissor-lift": {
        name: { ru: "Ножничные подъёмники", en: "Scissor Lifts", zh: "剪叉式平台" },
        blurb: { ru: "6–18 м, электро и внедорожные", en: "6 – 18 m electric & rough-terrain", zh: "6–18 米，电动与越野" },
      },
      "boom-lift": {
        name: { ru: "Коленчатые подъёмники", en: "Boom Lifts", zh: "臂式平台" },
        blurb: { ru: "16–44 м, коленчатые и телескопические", en: "16 – 44 m articulating & telescopic", zh: "16–44 米，曲臂与直臂" },
      },
    },
  },
  "renewable-energy": {
    name: { ru: "Возобновляемая энергетика", en: "Renewable Energy", zh: "可再生能源" },
    shortName: { ru: "Ветер", en: "Wind", zh: "风电" },
    tagline: { ru: "Инженерия чистого перехода", en: "Engineering the clean transition", zh: "工程化清洁转型" },
    description: {
      ru: "SANY Renewable Energy поставляет наземные и морские ветротурбины и интегрированные системы накопления энергии — от умных платформ 3 МВт до морских гигантов 15 МВт+.",
      en: "SANY Renewable Energy delivers onshore and offshore wind turbines and integrated energy-storage systems — from 3 MW smart platforms to 15 MW+ offshore giants.",
      zh: "SANY 新能源提供陆上与海上风电机组及集成储能系统——从 3 MW 智能平台到 15 MW+ 海上巨机。",
    },
    subs: {
      "onshore-turbine": {
        name: { ru: "Наземные турбины", en: "Onshore Turbines", zh: "陆上风机" },
        blurb: { ru: "Умные платформы 3–10 МВт", en: "3 – 10 MW smart platforms", zh: "3–10 MW 智能平台" },
      },
      "offshore-turbine": {
        name: { ru: "Морские турбины", en: "Offshore Turbines", zh: "海上风机" },
        blurb: { ru: "8–16 МВт для глубокой воды", en: "8 – 16 MW deep-sea power", zh: "8–16 MW 深海发电" },
      },
      "energy-storage": {
        name: { ru: "Накопители энергии", en: "Energy Storage", zh: "储能系统" },
        blurb: { ru: "Сетевые решения BESS", en: "Grid-scale BESS solutions", zh: "电网级 BESS 方案" },
      },
    },
  },
};

// ---- spec labels ----
const specLabel: Record<string, L> = {
  "Operating weight": { ru: "Эксплуатационная масса", en: "Operating weight", zh: "工作重量" },
  "Engine power": { ru: "Мощность двигателя", en: "Engine power", zh: "发动机功率" },
  "Max digging depth": { ru: "Макс. глубина копания", en: "Max digging depth", zh: "最大挖掘深度" },
  "Bucket capacity": { ru: "Объём ковша", en: "Bucket capacity", zh: "铲斗容量" },
  "Travel speed": { ru: "Скорость хода", en: "Travel speed", zh: "行驶速度" },
  "Battery capacity": { ru: "Ёмкость батареи", en: "Battery capacity", zh: "电池容量" },
  "Motor power": { ru: "Мощность мотора", en: "Motor power", zh: "电机功率" },
  Runtime: { ru: "Время работы", en: "Runtime", zh: "运行时长" },
  "Boom reach (vertical)": { ru: "Вылет стрелы (верт.)", en: "Boom reach (vertical)", zh: "臂架高度（垂直）" },
  "Horizontal reach": { ru: "Горизонтальный вылет", en: "Horizontal reach", zh: "水平幅度" },
  "Output (max)": { ru: "Производительность (макс.)", en: "Output (max)", zh: "最大输出" },
  "Boom sections": { ru: "Секций стрелы", en: "Boom sections", zh: "臂架节数" },
  "Max output": { ru: "Макс. производительность", en: "Max output", zh: "最大输出量" },
  "Max pressure": { ru: "Макс. давление", en: "Max pressure", zh: "最大压力" },
  "Vertical delivery": { ru: "Вертикальная подача", en: "Vertical delivery", zh: "垂直输送" },
  "Drum capacity": { ru: "Объём барабана", en: "Drum capacity", zh: "搅拌容量" },
  "Geometric volume": { ru: "Геометрический объём", en: "Geometric volume", zh: "几何容积" },
  "Charging speed": { ru: "Скорость загрузки", en: "Charging speed", zh: "进料速度" },
  "Water tank": { ru: "Бак для воды", en: "Water tank", zh: "水箱" },
  "Boom reach": { ru: "Вылет стрелы", en: "Boom reach", zh: "臂架幅度" },
  Sections: { ru: "Секции", en: "Sections", zh: "节数" },
  Slewing: { ru: "Поворот", en: "Slewing", zh: "回转" },
  "Pipe diameter": { ru: "Диаметр трубы", en: "Pipe diameter", zh: "管径" },
  "Rated output": { ru: "Номинальная производительность", en: "Rated output", zh: "额定产量" },
  Mixer: { ru: "Смеситель", en: "Mixer", zh: "搅拌主机" },
  "Aggregate bins": { ru: "Бункеры заполнителя", en: "Aggregate bins", zh: "骨料仓" },
  Control: { ru: "Управление", en: "Control", zh: "控制" },
  "Max lifting capacity": { ru: "Макс. грузоподъёмность", en: "Max lifting capacity", zh: "最大起重量" },
  "Max boom length": { ru: "Макс. длина стрелы", en: "Max boom length", zh: "最大臂长" },
  "Max lifting height": { ru: "Макс. высота подъёма", en: "Max lifting height", zh: "最大起升高度" },
  "Max tip height": { ru: "Макс. высота оголовка", en: "Max tip height", zh: "最大臂端高度" },
  Axles: { ru: "Осей", en: "Axles", zh: "车轴数" },
  "Drive/steer": { ru: "Привод/руление", en: "Drive/steer", zh: "驱动/转向" },
  "Max boom + jib": { ru: "Макс. стрела + гусёк", en: "Max boom + jib", zh: "最大主臂+副臂" },
  "Max load moment": { ru: "Макс. грузовой момент", en: "Max load moment", zh: "最大起重力矩" },
  Counterweight: { ru: "Противовес", en: "Counterweight", zh: "配重" },
  "Jib length": { ru: "Длина стрелы", en: "Jib length", zh: "臂长" },
  "Tip load": { ru: "Момент на оголовке", en: "Tip load", zh: "臂端载荷" },
  Type: { ru: "Тип", en: "Type", zh: "类型" },
  "Drum width": { ru: "Ширина вальца", en: "Drum width", zh: "钢轮宽度" },
  "Exciting force": { ru: "Возмущающая сила", en: "Exciting force", zh: "激振力" },
  "Blade length": { ru: "Длина отвала", en: "Blade length", zh: "刮刀长度" },
  "Max speed": { ru: "Макс. скорость", en: "Max speed", zh: "最高速度" },
  "Max paving width": { ru: "Макс. ширина укладки", en: "Max paving width", zh: "最大摊铺宽度" },
  "Paving thickness": { ru: "Толщина укладки", en: "Paving thickness", zh: "摊铺厚度" },
  "Hopper capacity": { ru: "Объём бункера", en: "Hopper capacity", zh: "料斗容量" },
  "Rated capacity": { ru: "Номинальная г/п", en: "Rated capacity", zh: "额定起重量" },
  Stacking: { ru: "Штабелирование", en: "Stacking", zh: "堆码" },
  Spreader: { ru: "Спредер", en: "Spreader", zh: "吊具" },
  "Load centre": { ru: "Центр нагрузки", en: "Load centre", zh: "载荷中心" },
  "Lift height": { ru: "Высота подъёма", en: "Lift height", zh: "起升高度" },
  Payload: { ru: "Грузоподъёмность", en: "Payload", zh: "载重" },
  "Body volume": { ru: "Объём кузова", en: "Body volume", zh: "车厢容积" },
  Battery: { ru: "Батарея", en: "Battery", zh: "电池" },
  Charging: { ru: "Зарядка", en: "Charging", zh: "充电" },
  "Max torque": { ru: "Макс. момент", en: "Max torque", zh: "最大扭矩" },
  "Max drilling diameter": { ru: "Макс. диаметр бурения", en: "Max drilling diameter", zh: "最大钻孔直径" },
  "Max drilling depth": { ru: "Макс. глубина бурения", en: "Max drilling depth", zh: "最大钻孔深度" },
  GCW: { ru: "Полная масса автопоезда", en: "GCW", zh: "总质量" },
  Refuel: { ru: "Пополнение энергии", en: "Refuel", zh: "补能" },
  Configuration: { ru: "Колёсная формула", en: "Configuration", zh: "驱动形式" },
  "Platform height": { ru: "Высота платформы", en: "Platform height", zh: "平台高度" },
  "Platform capacity": { ru: "Г/п платформы", en: "Platform capacity", zh: "平台载重" },
  "Extension deck": { ru: "Выдвижная площадка", en: "Extension deck", zh: "延伸平台" },
  "Working height": { ru: "Рабочая высота", en: "Working height", zh: "工作高度" },
  "Horizontal outreach": { ru: "Горизонтальный вылет", en: "Horizontal outreach", zh: "水平作业幅度" },
  "Rated power": { ru: "Номинальная мощность", en: "Rated power", zh: "额定功率" },
  "Rotor diameter": { ru: "Диаметр ротора", en: "Rotor diameter", zh: "风轮直径" },
  "Hub height": { ru: "Высота ступицы", en: "Hub height", zh: "轮毂高度" },
  "Wind class": { ru: "Класс ветра", en: "Wind class", zh: "风区等级" },
  "Swept area": { ru: "Ометаемая площадь", en: "Swept area", zh: "扫风面积" },
  "Container capacity": { ru: "Ёмкость контейнера", en: "Container capacity", zh: "单柜容量" },
  Cooling: { ru: "Охлаждение", en: "Cooling", zh: "冷却" },
  "Cycle life": { ru: "Ресурс циклов", en: "Cycle life", zh: "循环寿命" },
  Efficiency: { ru: "КПД", en: "Efficiency", zh: "效率" },
};

// ---- units ----
const unit: Record<string, L> = {
  kg: { ru: "кг", en: "kg", zh: "kg" },
  t: { ru: "т", en: "t", zh: "t" },
  kW: { ru: "кВт", en: "kW", zh: "kW" },
  mm: { ru: "мм", en: "mm", zh: "mm" },
  m: { ru: "м", en: "m", zh: "m" },
  "m³": { ru: "м³", en: "m³", zh: "m³" },
  "km/h": { ru: "км/ч", en: "km/h", zh: "km/h" },
  kWh: { ru: "кВт·ч", en: "kWh", zh: "kWh" },
  h: { ru: "ч", en: "h", zh: "小时" },
  MPa: { ru: "МПа", en: "MPa", zh: "MPa" },
  L: { ru: "л", en: "L", zh: "L" },
  min: { ru: "мин", en: "min", zh: "分钟" },
  "m³/h": { ru: "м³/ч", en: "m³/h", zh: "m³/h" },
  "t·m": { ru: "т·м", en: "t·m", zh: "t·m" },
  "kN·m": { ru: "кН·м", en: "kN·m", zh: "kN·m" },
  "t/h": { ru: "т/ч", en: "t/h", zh: "t/h" },
  "m²": { ru: "м²", en: "m²", zh: "m²" },
  MW: { ru: "МВт", en: "MW", zh: "MW" },
  cycles: { ru: "циклов", en: "cycles", zh: "次" },
};

// ---- badges ----
const badge: Record<string, L> = {
  "Best seller": { ru: "Хит продаж", en: "Best seller", zh: "畅销" },
  Flagship: { ru: "Флагман", en: "Flagship", zh: "旗舰" },
  "New energy": { ru: "Новая энергетика", en: "New energy", zh: "新能源" },
  "Long reach": { ru: "Большой вылет", en: "Long reach", zh: "长臂架" },
  "Heavy lift": { ru: "Тяжёлый подъём", en: "Heavy lift", zh: "重吊" },
  "Deep foundation": { ru: "Глубокий фундамент", en: "Deep foundation", zh: "深基础" },
  Electric: { ru: "Электро", en: "Electric", zh: "电动" },
  Offshore: { ru: "Оффшор", en: "Offshore", zh: "海上" },
  "Clean energy": { ru: "Чистая энергия", en: "Clean energy", zh: "清洁能源" },
};

// ---- spec value words (numeric values pass through unchanged) ----
const valueWord: Record<string, L> = {
  "Battery-swap": { ru: "Смена батареи", en: "Battery-swap", zh: "换电" },
  Automated: { ru: "Автоматизир.", en: "Automated", zh: "全自动" },
  Modular: { ru: "Модульная", en: "Modular", zh: "模块化" },
  Liquid: { ru: "Жидкостное", en: "Liquid", zh: "液冷" },
  "Flat-top": { ru: "Плоский верх", en: "Flat-top", zh: "平头" },
  "8-high": { ru: "до 8 ярусов", en: "8-high", zh: "8 层高" },
  "1-over-5": { ru: "1 на 5", en: "1-over-5", zh: "1 过 5" },
  "20–40 ft": { ru: "20–40 фут", en: "20–40 ft", zh: "20–40 英尺" },
  Typhoon: { ru: "Тайфун-класс", en: "Typhoon", zh: "抗台风" },
  Electric: { ru: "Электро", en: "Electric", zh: "电动" },
  "Electric 4WD": { ru: "Электро 4WD", en: "Electric 4WD", zh: "电动四驱" },
};

// ---- application phrases ----
const appPhrase: Record<string, L> = {
  Landscaping: { ru: "Ландшафт", en: "Landscaping", zh: "园林绿化" },
  "Utility trenching": { ru: "Прокладка коммуникаций", en: "Utility trenching", zh: "管线开挖" },
  "Indoor demolition": { ru: "Демонтаж в помещениях", en: "Indoor demolition", zh: "室内拆除" },
  "Rental fleets": { ru: "Арендные парки", en: "Rental fleets", zh: "租赁车队" },
  "Urban construction": { ru: "Городское строительство", en: "Urban construction", zh: "城市施工" },
  "Pipeline work": { ru: "Трубопроводы", en: "Pipeline work", zh: "管道作业" },
  "Confined sites": { ru: "Стеснённые площадки", en: "Confined sites", zh: "狭窄场地" },
  "Residential build": { ru: "Жилое строительство", en: "Residential build", zh: "住宅建设" },
  "Utility installation": { ru: "Монтаж сетей", en: "Utility installation", zh: "市政管网" },
  "Site preparation": { ru: "Подготовка площадки", en: "Site preparation", zh: "场地平整" },
  "General contracting": { ru: "Генподряд", en: "General contracting", zh: "综合承包" },
  "Demolition support": { ru: "Поддержка сноса", en: "Demolition support", zh: "拆除辅助" },
  "Municipal works": { ru: "Муниципальные работы", en: "Municipal works", zh: "市政工程" },
  "Farm & estate": { ru: "Фермы и хозяйства", en: "Farm & estate", zh: "农场与庄园" },
  Utility: { ru: "Инженерные сети", en: "Utility", zh: "市政公用" },
  Construction: { ru: "Строительство", en: "Construction", zh: "建筑施工" },
  "Quarry support": { ru: "Работа в карьере", en: "Quarry support", zh: "采石辅助" },
  Roadworks: { ru: "Дорожные работы", en: "Roadworks", zh: "道路施工" },
  "General earthmoving": { ru: "Земляные работы", en: "General earthmoving", zh: "一般土方" },
  Roadbuilding: { ru: "Дорожное строительство", en: "Roadbuilding", zh: "道路建设" },
  "Site development": { ru: "Освоение территории", en: "Site development", zh: "场地开发" },
  "Mining support": { ru: "Поддержка добычи", en: "Mining support", zh: "矿山辅助" },
  Quarrying: { ru: "Карьерные работы", en: "Quarrying", zh: "采石" },
  Infrastructure: { ru: "Инфраструктура", en: "Infrastructure", zh: "基础设施" },
  "Bulk earthmoving": { ru: "Массовые земляные работы", en: "Bulk earthmoving", zh: "大方量土方" },
  "Quarry loading": { ru: "Погрузка в карьере", en: "Quarry loading", zh: "采石装载" },
  "Heavy construction": { ru: "Тяжёлое строительство", en: "Heavy construction", zh: "重型施工" },
  "Large infrastructure": { ru: "Крупная инфраструктура", en: "Large infrastructure", zh: "大型基础设施" },
  "Bulk earthworks": { ru: "Массовые земляные работы", en: "Bulk earthworks", zh: "大方量土方" },
  "Surface mining": { ru: "Открытая добыча", en: "Surface mining", zh: "露天开采" },
  "Large quarries": { ru: "Крупные карьеры", en: "Large quarries", zh: "大型采石场" },
  "Heavy civil": { ru: "Тяжёлое гражданское строительство", en: "Heavy civil", zh: "重型基建" },
  "Open-pit mining": { ru: "Открытые рудники", en: "Open-pit mining", zh: "露天矿" },
  "Overburden removal": { ru: "Снятие вскрыши", en: "Overburden removal", zh: "剥离作业" },
  "Bulk loading": { ru: "Массовая погрузка", en: "Bulk loading", zh: "散料装载" },
  "Municipal maintenance": { ru: "Городское хозяйство", en: "Municipal maintenance", zh: "市政养护" },
  "Urban roadworks": { ru: "Городские дороги", en: "Urban roadworks", zh: "城市道路" },
  "Urban & indoor sites": { ru: "Город и помещения", en: "Urban & indoor sites", zh: "城市与室内" },
  Tunnels: { ru: "Тоннели", en: "Tunnels", zh: "隧道" },
  "Low-emission zones": { ru: "Зоны низких выбросов", en: "Low-emission zones", zh: "低排放区" },
  "Commercial concrete": { ru: "Коммерческий бетон", en: "Commercial concrete", zh: "商业混凝土" },
  "High-rise": { ru: "Высотное строительство", en: "High-rise", zh: "高层建筑" },
  Bridges: { ru: "Мосты", en: "Bridges", zh: "桥梁" },
  "Industrial plants": { ru: "Промышленные объекты", en: "Industrial plants", zh: "工业厂房" },
  "Power plants": { ru: "Электростанции", en: "Power plants", zh: "电厂" },
  "Mega infrastructure": { ru: "Мегаинфраструктура", en: "Mega infrastructure", zh: "超级基建" },
  "Super high-rise": { ru: "Сверхвысотки", en: "Super high-rise", zh: "超高层" },
  Dams: { ru: "Плотины", en: "Dams", zh: "大坝" },
  "Remote pours": { ru: "Удалённая заливка", en: "Remote pours", zh: "远距离浇筑" },
  "Ready-mix delivery": { ru: "Доставка товарного бетона", en: "Ready-mix delivery", zh: "商砼配送" },
  "Batching plant fleets": { ru: "Парки бетонных заводов", en: "Batching plant fleets", zh: "搅拌站车队" },
  "High-rise cores": { ru: "Ядра высоток", en: "High-rise cores", zh: "高层核心筒" },
  "Large slabs": { ru: "Крупные плиты", en: "Large slabs", zh: "大面积楼板" },
  "Ready-mix production": { ru: "Производство товарного бетона", en: "Ready-mix production", zh: "商砼生产" },
  Precast: { ru: "Сборный железобетон", en: "Precast", zh: "预制构件" },
  "Large projects": { ru: "Крупные проекты", en: "Large projects", zh: "大型项目" },
  "General lifting": { ru: "Общий подъём", en: "General lifting", zh: "一般吊装" },
  "Plant maintenance": { ru: "Обслуживание заводов", en: "Plant maintenance", zh: "工厂维护" },
  "Steel erection": { ru: "Монтаж металлоконструкций", en: "Steel erection", zh: "钢结构吊装" },
  "Wind service": { ru: "Обслуживание ВЭУ", en: "Wind service", zh: "风电运维" },
  "Wind energy": { ru: "Ветроэнергетика", en: "Wind energy", zh: "风电" },
  Refineries: { ru: "НПЗ", en: "Refineries", zh: "炼化厂" },
  "Confined jobsites": { ru: "Стеснённые площадки", en: "Confined jobsites", zh: "狭窄工地" },
  "Wind farms": { ru: "Ветропарки", en: "Wind farms", zh: "风电场" },
  Petrochemical: { ru: "Нефтехимия", en: "Petrochemical", zh: "石化" },
  "Wind turbine erection": { ru: "Монтаж ветротурбин", en: "Wind turbine erection", zh: "风机吊装" },
  "Mega-projects": { ru: "Мегапроекты", en: "Mega-projects", zh: "超级工程" },
  "Commercial build": { ru: "Коммерческое строительство", en: "Commercial build", zh: "商业建筑" },
  Highways: { ru: "Автомагистрали", en: "Highways", zh: "高速公路" },
  Airfields: { ru: "Аэродромы", en: "Airfields", zh: "机场跑道" },
  Subgrade: { ru: "Земляное полотно", en: "Subgrade", zh: "路基" },
  "Road maintenance": { ru: "Содержание дорог", en: "Road maintenance", zh: "道路养护" },
  "Site grading": { ru: "Планировка площадки", en: "Site grading", zh: "场地平整" },
  "Mining haul roads": { ru: "Карьерные дороги", en: "Mining haul roads", zh: "矿山运输道路" },
  Airports: { ru: "Аэропорты", en: "Airports", zh: "机场" },
  "Large paving": { ru: "Крупная укладка", en: "Large paving", zh: "大面积摊铺" },
  "Container terminals": { ru: "Контейнерные терминалы", en: "Container terminals", zh: "集装箱码头" },
  "Intermodal yards": { ru: "Интермодальные площадки", en: "Intermodal yards", zh: "多式联运场站" },
  Depots: { ru: "Депо", en: "Depots", zh: "堆场" },
  "Empty depots": { ru: "Депо порожних", en: "Empty depots", zh: "空箱堆场" },
  "Container yards": { ru: "Контейнерные площадки", en: "Container yards", zh: "集装箱堆场" },
  Ports: { ru: "Порты", en: "Ports", zh: "港口" },
  "Steel & timber yards": { ru: "Склады металла и леса", en: "Steel & timber yards", zh: "钢材与木材堆场" },
  "Heavy logistics": { ru: "Тяжёлая логистика", en: "Heavy logistics", zh: "重型物流" },
  "Overburden haul": { ru: "Вывоз вскрыши", en: "Overburden haul", zh: "剥离运输" },
  "Green mining": { ru: "Зелёная добыча", en: "Green mining", zh: "绿色矿山" },
  Quarries: { ru: "Карьеры", en: "Quarries", zh: "采石场" },
  "Short-haul cycles": { ru: "Короткие циклы", en: "Short-haul cycles", zh: "短距循环" },
  "Open-pit loading": { ru: "Погрузка в разрезе", en: "Open-pit loading", zh: "露天装载" },
  Overburden: { ru: "Вскрыша", en: "Overburden", zh: "剥离" },
  "Bridge foundations": { ru: "Фундаменты мостов", en: "Bridge foundations", zh: "桥梁基础" },
  "High-rise piles": { ru: "Сваи высоток", en: "High-rise piles", zh: "高层桩基" },
  "Mega-bridges": { ru: "Мегамосты", en: "Mega-bridges", zh: "超级大桥" },
  "Deep foundations": { ru: "Глубокие фундаменты", en: "Deep foundations", zh: "深基础" },
  "Port drayage": { ru: "Портовые перевозки", en: "Port drayage", zh: "港口短驳" },
  "Steel & mining logistics": { ru: "Логистика металлургии и добычи", en: "Steel & mining logistics", zh: "钢铁与矿山物流" },
  "Regional haul": { ru: "Региональные перевозки", en: "Regional haul", zh: "区域运输" },
  "Construction haul": { ru: "Строительные перевозки", en: "Construction haul", zh: "工程运输" },
  Aggregates: { ru: "Инертные материалы", en: "Aggregates", zh: "砂石骨料" },
  Earthworks: { ru: "Земляные работы", en: "Earthworks", zh: "土方工程" },
  "Indoor construction": { ru: "Работы в помещениях", en: "Indoor construction", zh: "室内施工" },
  Warehousing: { ru: "Склады", en: "Warehousing", zh: "仓储" },
  Maintenance: { ru: "Обслуживание", en: "Maintenance", zh: "维护保养" },
  Facades: { ru: "Фасады", en: "Facades", zh: "幕墙外立面" },
  "Industrial maintenance": { ru: "Промышленное обслуживание", en: "Industrial maintenance", zh: "工业维护" },
  "Onshore wind farms": { ru: "Наземные ветропарки", en: "Onshore wind farms", zh: "陆上风电场" },
  "Low-wind regions": { ru: "Низковетровые регионы", en: "Low-wind regions", zh: "低风速地区" },
  Repowering: { ru: "Модернизация ВЭС", en: "Repowering", zh: "风场升级" },
  "Offshore wind": { ru: "Морская ветроэнергетика", en: "Offshore wind", zh: "海上风电" },
  "Deep-water sites": { ru: "Глубоководные площадки", en: "Deep-water sites", zh: "深水场址" },
  "Coastal power": { ru: "Прибрежная генерация", en: "Coastal power", zh: "沿海发电" },
  "Grid firming": { ru: "Стабилизация сети", en: "Grid firming", zh: "电网调峰" },
  "Renewable integration": { ru: "Интеграция ВИЭ", en: "Renewable integration", zh: "新能源消纳" },
  "Peak shaving": { ru: "Сглаживание пиков", en: "Peak shaving", zh: "削峰填谷" },
};

// ---- model taglines ----
const modelTagline: Record<string, L> = {
  sy16c: { ru: "Микроэкскаватор 1,75 т с раздвижной ходовой", en: "1.75 t micro excavator with retractable undercarriage", zh: "1.75 吨微挖，可伸缩底盘" },
  sy26u: { ru: "Компакт 2,6 т с нулевым задним свесом", en: "2.6 t zero-tail-swing performer", zh: "2.6 吨零尾回转能手" },
  sy35u: { ru: "Компакт 3,8 т с ощущением большой машины", en: "3.8 t compact excavator, big-machine feel", zh: "3.8 吨紧凑挖机，大机手感" },
  sy50u: { ru: "5,5 т компактной копающей силы", en: "5.5 t of compact digging muscle", zh: "5.5 吨紧凑挖掘力量" },
  sy75c: { ru: "Универсальный компакт 7,5 т", en: "7.5 t versatile compact excavator", zh: "7.5 吨多用途紧凑挖机" },
  sy95c: { ru: "Малый экскаватор 9,5 т с отдачей среднего класса", en: "9.5 t small excavator, medium-class output", zh: "9.5 吨小挖，中挖产出" },
  sy155h: { ru: "Сбалансированный средний экскаватор 15,8 т", en: "15.8 t balanced medium excavator", zh: "15.8 吨均衡中挖" },
  sy215c: { ru: "Самый продаваемый средний экскаватор 21,5 т", en: "21.5 t best-selling medium excavator", zh: "21.5 吨畅销中挖" },
  sy265c: { ru: "Высокопроизводительный экскаватор 26,5 т", en: "26.5 t high-productivity excavator", zh: "26.5 吨高效挖机" },
  sy365h: { ru: "Тяжёлый экскаватор 36,5 т", en: "36.5 t heavy-duty excavator", zh: "36.5 吨重载挖机" },
  sy500h: { ru: "Флагманский большой экскаватор 50 т", en: "50 t flagship large excavator", zh: "50 吨旗舰大挖" },
  sy750h: { ru: "Карьерный экскаватор 75 т", en: "75 t mining-class excavator", zh: "75 吨矿用级挖机" },
  sy155w: { ru: "Колёсный экскаватор 15,5 т для дорог", en: "15.5 t road-mobile wheeled excavator", zh: "15.5 吨公路自行轮挖" },
  sy215e: { ru: "Электроэкскаватор 21,5 т с нулевыми выбросами", en: "Zero-emission 21.5 t electric excavator", zh: "21.5 吨零排放电动挖机" },
  "sym5230-37": { ru: "Автобетононасос со стрелой 37 м", en: "37 m truck-mounted concrete boom pump", zh: "37 米臂架泵车" },
  "sym5463-62": { ru: "Автобетононасос с большим вылетом 62 м", en: "62 m long-reach boom pump", zh: "62 米长臂架泵车" },
  "sym-86": { ru: "Супернасос мирового класса 86 м", en: "86 m world-class super boom pump", zh: "86 米世界级超长臂泵车" },
  hbt9022: { ru: "Прицепной бетононасос высокого давления", en: "High-pressure trailer concrete pump", zh: "高压拖泵" },
  "sy410c-8": { ru: "Автобетоносмеситель 10 м³", en: "10 m³ concrete truck mixer", zh: "10 m³ 混凝土搅拌车" },
  hgy28: { ru: "Самоподъёмная распределительная стрела 28 м", en: "28 m self-climbing placing boom", zh: "28 米自爬升布料机" },
  hzs180: { ru: "Стационарный бетонный завод 180 м³/ч", en: "180 m³/h stationary batching plant", zh: "180 m³/h 固定搅拌站" },
  stc250: { ru: "Компактный автокран 25 т", en: "25 t compact truck crane", zh: "25 吨紧凑汽车吊" },
  stc800: { ru: "Тяжёлый автокран 80 т", en: "80 t heavy-duty truck crane", zh: "80 吨重型汽车吊" },
  sac2200: { ru: "Вседорожный кран 220 т", en: "220 t all-terrain crane", zh: "220 吨全地面起重机" },
  src550: { ru: "Внедорожный кран 55 т", en: "55 t rough-terrain crane", zh: "55 吨越野起重机" },
  scc1500: { ru: "Гусеничный кран 150 т с решётчатой стрелой", en: "150 t lattice-boom crawler crane", zh: "150 吨桁架臂履带吊" },
  scc4000: { ru: "Гусеничный кран 400 т для тяжёлого подъёма", en: "400 t heavy-lift crawler crane", zh: "400 吨重吊履带起重机" },
  syt125: { ru: "Башенный кран 10 т с плоским верхом", en: "10 t flat-top tower crane", zh: "10 吨平头塔吊" },
  ssr220: { ru: "Одновальцовый виброкаток 22 т", en: "22 t single-drum vibratory roller", zh: "22 吨单钢轮振动压路机" },
  smg220: { ru: "Автогрейдер 220 л.с.", en: "220 hp motor grader", zh: "220 马力平地机" },
  sap130: { ru: "Широкий асфальтоукладчик 13 м", en: "13 m wide asphalt paver", zh: "13 米宽幅摊铺机" },
  srsc45: { ru: "Контейнерный ричстакер 45 т", en: "45 t container reach stacker", zh: "45 吨集装箱正面吊" },
  sdcy90: { ru: "Погрузчик порожних контейнеров 9 т", en: "9 t empty container handler", zh: "9 吨空箱堆高机" },
  scp160: { ru: "Тяжёлый дизельный погрузчик 16 т", en: "16 t heavy diesel forklift", zh: "16 吨重型柴油叉车" },
  skt90s: { ru: "Жёсткий карьерный самосвал 60 т", en: "60 t rigid mining dump truck", zh: "60 吨刚性矿用自卸车" },
  skt55e: { ru: "Электрический широкорамный самосвал 45 т", en: "45 t electric wide-body dump truck", zh: "45 吨电动宽体自卸车" },
  sy690: { ru: "Карьерный экскаватор 70 т", en: "70 t mining excavator", zh: "70 吨矿用挖掘机" },
  sr285: { ru: "Буровая установка 285 кН·м", en: "285 kN·m rotary drilling rig", zh: "285 kN·m 旋挖钻机" },
  sr485: { ru: "Большая буровая установка 485 кН·м", en: "485 kN·m large rotary drilling rig", zh: "485 kN·m 大型旋挖钻机" },
  "e-truck-tractor": { ru: "Аккумуляторный тяжёлый тягач 49 т", en: "49 t battery-electric heavy tractor", zh: "49 吨纯电重型牵引车" },
  "dump-truck-8x4": { ru: "Строительный самосвал", en: "Construction dump truck", zh: "工程自卸车" },
  ssa1212e: { ru: "Электрический ножничный подъёмник 12 м", en: "12 m electric scissor lift", zh: "12 米电动剪叉平台" },
  sab24e: { ru: "Коленчатый подъёмник 24 м", en: "24 m articulating boom lift", zh: "24 米曲臂平台" },
  "si-190-6mw": { ru: "Наземная умная ветротурбина", en: "Onshore smart wind turbine", zh: "陆上智能风机" },
  "so-260-15mw": { ru: "Платформа морской ветротурбины", en: "Offshore wind turbine platform", zh: "海上风电平台" },
  "bess-liquid-cooled": { ru: "Сетевая система накопления энергии", en: "Grid-scale energy storage system", zh: "电网级储能系统" },
};

// ------------------------------------------------------------
//  Accessors
// ------------------------------------------------------------

export const locCategory = (c: Category, l: Locale) => ({
  name: tx(cat[c.slug]?.name, l, c.name),
  shortName: tx(cat[c.slug]?.shortName, l, c.shortName),
  tagline: tx(cat[c.slug]?.tagline, l, c.tagline),
  description: tx(cat[c.slug]?.description, l, c.description),
});

export const locSubcategory = (catSlug: string, s: Subcategory, l: Locale) => ({
  name: tx(cat[catSlug]?.subs?.[s.slug]?.name, l, s.name),
  blurb: tx(cat[catSlug]?.subs?.[s.slug]?.blurb, l, s.blurb),
});

export const locSpecLabel = (label: string, l: Locale) => tx(specLabel[label], l, label);
export const locUnit = (u: string | undefined, l: Locale) => (u ? tx(unit[u], l, u) : "");
export const locBadge = (b: string, l: Locale) => tx(badge[b], l, b);
export const locValue = (v: string, l: Locale) => tx(valueWord[v], l, v);
export const locTagline = (m: Model, l: Locale) => tx(modelTagline[m.slug], l, m.tagline);
export const locApplications = (m: Model, l: Locale) =>
  m.applications.map((a) => tx(appPhrase[a], l, a));
// long-form fields fall back to the English base copy
export const locDescription = (m: Model, _l: Locale) => m.description;
export const locHighlights = (m: Model, _l: Locale) => m.highlights;
