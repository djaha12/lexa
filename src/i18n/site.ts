import { type L, type Locale, tx } from "./config";

// ============================================================
//  Site-level content translations (ru / en / zh)
// ============================================================

const statLabel: Record<string, L> = {
  "Countries & regions served": { ru: "Стран и регионов обслуживания", en: "Countries & regions served", zh: "服务国家与地区" },
  "Manufacturing bases worldwide": { ru: "Производственных площадок в мире", en: "Manufacturing bases worldwide", zh: "全球制造基地" },
  "Revenue reinvested in R&D": { ru: "выручки реинвестируется в R&D", en: "Revenue reinvested in R&D", zh: "营收再投入研发" },
  "Global rank in concrete machinery": { ru: "место в мире по бетонной технике", en: "Global rank in concrete machinery", zh: "混凝土机械全球排名" },
};

const valueProp: Record<string, { title: L; body: L }> = {
  chip: {
    title: { ru: "Интеллектуальное производство", en: "Intelligent manufacturing", zh: "智能制造" },
    body: {
      ru: "«Маячковые» заводы и цифровые двойники обеспечивают мировое качество и стабильность в масштабе.",
      en: "Lighthouse factories and digital twins deliver world-class quality and consistency at scale.",
      zh: "灯塔工厂与数字孪生带来世界级的品质与规模化的一致性。",
    },
  },
  globe: {
    title: { ru: "Глобальная сервисная сеть", en: "Global service network", zh: "全球服务网络" },
    body: {
      ru: "Запчасти, специалисты и обучение в 180+ странах поддерживают ваш парк с минимальными простоями.",
      en: "Parts, technicians and training across 180+ countries keep your fleet running with minimal downtime.",
      zh: "覆盖 180 多个国家的配件、技师与培训，让您的车队将停机降至最低。",
    },
  },
  leaf: {
    title: { ru: "Лидерство в новой энергетике", en: "New-energy leadership", zh: "新能源引领" },
    body: {
      ru: "Электрические, водородные машины и смена батарей снижают выбросы и стоимость владения.",
      en: "Electric, hydrogen and battery-swap machines cut emissions and total cost of ownership.",
      zh: "电动、氢能与换电设备降低排放与总拥有成本。",
    },
  },
  shield: {
    title: { ru: "Проверенная надёжность", en: "Proven durability", zh: "可靠耐久" },
    body: {
      ru: "Каждая машина спроектирована и испытана для самых суровых площадок и долгого срока службы.",
      en: "Every machine is engineered and tested for the harshest jobsites and the longest service life.",
      zh: "每台设备都为最严苛的工况和最长的使用寿命而设计与测试。",
    },
  },
};

const industry: Record<string, { name: L; blurb: L }> = {
  "Building Construction": {
    name: { ru: "Гражданское строительство", en: "Building Construction", zh: "房屋建筑" },
    blurb: { ru: "От фундамента до отделки.", en: "From foundations to finishing.", zh: "从基础到精装。" },
  },
  Infrastructure: {
    name: { ru: "Инфраструктура", en: "Infrastructure", zh: "基础设施" },
    blurb: { ru: "Дороги, мосты, ж/д и сети.", en: "Roads, bridges, rail & utilities.", zh: "道路、桥梁、铁路与市政。" },
  },
  "Mining & Quarrying": {
    name: { ru: "Добыча и карьеры", en: "Mining & Quarrying", zh: "矿山与采石" },
    blurb: { ru: "Минимальная стоимость тонны.", en: "Lowest cost per tonne.", zh: "最低吨成本。" },
  },
  "Energy & Wind": {
    name: { ru: "Энергетика и ветер", en: "Energy & Wind", zh: "能源与风电" },
    blurb: { ru: "Двигатель чистого перехода.", en: "Powering the clean transition.", zh: "赋能清洁转型。" },
  },
  "Ports & Logistics": {
    name: { ru: "Порты и логистика", en: "Ports & Logistics", zh: "港口与物流" },
    blurb: { ru: "Перемещаем грузы мира.", en: "Moving the world's cargo.", zh: "搬运世界货物。" },
  },
  "Municipal & Utility": {
    name: { ru: "ЖКХ и муниципалитеты", en: "Municipal & Utility", zh: "市政与公用" },
    blurb: { ru: "Строим города лучше.", en: "Building better cities.", zh: "建设更美好的城市。" },
  },
};

const newsItem: Record<string, { title: L; excerpt: L; tag: L }> = {
  "sany-record-boom-pump": {
    title: {
      ru: "SANY представляет интеллектуальный автобетононасос нового поколения",
      en: "SANY unveils next-generation intelligent boom pump",
      zh: "SANY 发布新一代智能臂架泵车",
    },
    excerpt: {
      ru: "Новый флагманский насос сочетает лёгкие композитные стрелы с ИИ-управлением гашением вибрации для более безопасной и быстрой укладки.",
      en: "A new flagship truck-mounted pump combines lightweight composite booms with AI-assisted anti-vibration control for safer, faster placement.",
      zh: "全新旗舰泵车将轻量化复合臂架与 AI 辅助减振控制相结合，实现更安全、更快速的布料。",
    },
    tag: { ru: "Продукт", en: "Product", zh: "产品" },
  },
  "electric-fleet-milestone": {
    title: {
      ru: "Парк новой энергетики SANY преодолел важный рубеж",
      en: "SANY new-energy fleet passes major deployment milestone",
      zh: "SANY 新能源车队突破重大交付里程碑",
    },
    excerpt: {
      ru: "Электрические грузовики и экскаваторы устанавливают новый мировой рекорд поставок, пока клиенты ускоряют декарбонизацию.",
      en: "Battery-electric trucks and excavators reach a new global deployment record as customers accelerate decarbonisation.",
      zh: "随着客户加速脱碳，纯电卡车与挖掘机创下全球交付新纪录。",
    },
    tag: { ru: "Новая энергетика", en: "New Energy", zh: "新能源" },
  },
  "offshore-wind-15mw": {
    title: {
      ru: "Платформа морской турбины 15 МВт вышла в серийное производство",
      en: "15 MW offshore turbine platform enters serial production",
      zh: "15 MW 海上风电平台进入量产",
    },
    excerpt: {
      ru: "SANY Renewable Energy наращивает выпуск своей платформы «тайфун-класса» для глубоководных ветропарков.",
      en: "SANY Renewable Energy scales up manufacturing of its typhoon-class offshore platform for deep-water wind farms.",
      zh: "SANY 新能源扩大其抗台风级海上平台的量产，服务深水风电场。",
    },
    tag: { ru: "Энергетика", en: "Energy", zh: "能源" },
  },
  "global-service-expansion": {
    title: {
      ru: "SANY расширяет глобальную сеть запчастей и сервиса",
      en: "SANY expands global parts and service network",
      zh: "SANY 扩展全球配件与服务网络",
    },
    excerpt: {
      ru: "Новые региональные распределительные центры сокращают сроки поставки запчастей и усиливают послепродажную поддержку на ключевых рынках.",
      en: "New regional distribution centres cut parts lead times and strengthen after-sales support across key markets.",
      zh: "新的区域配送中心缩短配件交付周期，强化重点市场的售后支持。",
    },
    tag: { ru: "Сервис", en: "Service", zh: "服务" },
  },
};

const timeline: Record<string, { title: L; body: L }> = {
  "1989": {
    title: { ru: "Основание", en: "Founded", zh: "创立" },
    body: { ru: "Основана SANY, начав со сварочных материалов.", en: "SANY is established, beginning with welding materials.", zh: "SANY 成立，从焊接材料起步。" },
  },
  "1994": {
    title: { ru: "Тяжёлая индустрия", en: "Heavy industry", zh: "进军重工" },
    body: { ru: "Выход в бетонную технику — начало глобального пути.", en: "Entry into concrete machinery — the start of a global journey.", zh: "进入混凝土机械领域——全球征程的起点。" },
  },
  "2003": {
    title: { ru: "Выход на биржу", en: "Public listing", zh: "上市" },
    body: { ru: "SANY Heavy Industry выходит на Шанхайскую биржу.", en: "SANY Heavy Industry lists on the Shanghai Stock Exchange.", zh: "三一重工在上海证券交易所上市。" },
  },
  "2012": {
    title: { ru: "Глобальная экспансия", en: "Global expansion", zh: "全球扩张" },
    body: { ru: "Приобретение Putzmeister ускоряет мировой охват.", en: "Acquisition of Putzmeister accelerates worldwide reach.", zh: "收购普茨迈斯特，加速全球布局。" },
  },
  "2020": {
    title: { ru: "«Маячковые» заводы", en: "Lighthouse factories", zh: "灯塔工厂" },
    body: { ru: "Интеллектуальное производство задаёт новый отраслевой стандарт.", en: "Intelligent manufacturing sets a new industry benchmark.", zh: "智能制造树立行业新标杆。" },
  },
  "2024": {
    title: { ru: "Эра новой энергетики", en: "New-energy era", zh: "新能源时代" },
    body: { ru: "Электрификация грузовиков, экскаваторов и карьерной техники.", en: "Electrification across trucks, excavators and mining.", zh: "卡车、挖掘机与矿山设备全面电动化。" },
  },
};

const region: Record<string, { name: L; note: L }> = {
  "Asia Pacific": {
    name: { ru: "Азиатско-Тихоокеанский регион", en: "Asia Pacific", zh: "亚太" },
    note: { ru: "Домашний регион и крупнейшая производственная база", en: "Home region & largest manufacturing base", zh: "本土区域与最大制造基地" },
  },
  Europe: {
    name: { ru: "Европа", en: "Europe", zh: "欧洲" },
    note: { ru: "Полное покрытие продаж и сервиса", en: "Full sales & service coverage", zh: "全面销售与服务覆盖" },
  },
  "North America": {
    name: { ru: "Северная Америка", en: "North America", zh: "北美" },
    note: { ru: "Растущая дилерская и сервисная сеть", en: "Growing dealer & support network", zh: "不断壮大的经销与支持网络" },
  },
  "Latin America": {
    name: { ru: "Латинская Америка", en: "Latin America", zh: "拉丁美洲" },
    note: { ru: "Сильные позиции в добыче и инфраструктуре", en: "Strong presence in mining & infrastructure", zh: "在矿山与基建领域布局深厚" },
  },
  "Middle East": {
    name: { ru: "Ближний Восток", en: "Middle East", zh: "中东" },
    note: { ru: "Фокус на мегапроектах и энергетике", en: "Mega-project & energy focus", zh: "聚焦超级工程与能源" },
  },
  Africa: {
    name: { ru: "Африка", en: "Africa", zh: "非洲" },
    note: { ru: "Партнёр по инфраструктуре и ресурсам", en: "Infrastructure & resources partner", zh: "基础设施与资源伙伴" },
  },
};

const office: Record<string, { region: L; city: L }> = {
  "Global HQ": { region: { ru: "Глобальный штаб", en: "Global HQ", zh: "全球总部" }, city: { ru: "Чанша, Китай", en: "Changsha, China", zh: "中国·长沙" } },
  Europe: { region: { ru: "Европа", en: "Europe", zh: "欧洲" }, city: { ru: "Кёльн, Германия", en: "Cologne, Germany", zh: "德国·科隆" } },
  Americas: { region: { ru: "Америка", en: "Americas", zh: "美洲" }, city: { ru: "Пичтри-Сити, США", en: "Peachtree City, USA", zh: "美国·桃树城" } },
  "Middle East": { region: { ru: "Ближний Восток", en: "Middle East", zh: "中东" }, city: { ru: "Дубай, ОАЭ", en: "Dubai, UAE", zh: "阿联酋·迪拜" } },
};

const company = {
  tagline: { ru: "Качество меняет мир", en: "Quality Changes the World", zh: "品质改变世界" },
  headquarters: { ru: "Чанша, Китай", en: "Changsha, China", zh: "中国·长沙" },
  intro: {
    ru: "SANY — один из мировых лидеров в производстве строительной и промышленной техники. Входит в число глобальных лидеров по бетонной технике, экскаваторам, кранам и др.; продукция работает более чем в 180 странах и регионах.",
    en: "SANY is one of the world's leading manufacturers of construction and industrial equipment — ranked among the global top players in concrete machinery, excavators, cranes and more, with products working in over 180 countries and regions.",
    zh: "SANY 是全球领先的工程与工业装备制造商之一——在混凝土机械、挖掘机、起重机等领域跻身全球前列，产品服务于 180 多个国家和地区。",
  },
};

// ---- accessors ----
export const locStatLabel = (label: string, l: Locale) => tx(statLabel[label], l, label);
export const locValueProp = (icon: string, l: Locale, fb: { title: string; body: string }) => ({
  title: tx(valueProp[icon]?.title, l, fb.title),
  body: tx(valueProp[icon]?.body, l, fb.body),
});
export const locIndustry = (name: string, l: Locale, fbBlurb: string) => ({
  name: tx(industry[name]?.name, l, name),
  blurb: tx(industry[name]?.blurb, l, fbBlurb),
});
export const locNews = (slug: string, l: Locale, fb: { title: string; excerpt: string; tag: string }) => ({
  title: tx(newsItem[slug]?.title, l, fb.title),
  excerpt: tx(newsItem[slug]?.excerpt, l, fb.excerpt),
  tag: tx(newsItem[slug]?.tag, l, fb.tag),
});
export const locTimeline = (year: string, l: Locale, fb: { title: string; body: string }) => ({
  title: tx(timeline[year]?.title, l, fb.title),
  body: tx(timeline[year]?.body, l, fb.body),
});
export const locRegion = (name: string, l: Locale, fbNote: string) => ({
  name: tx(region[name]?.name, l, name),
  note: tx(region[name]?.note, l, fbNote),
});
export const locOffice = (regionKey: string, l: Locale, fb: { region: string; city: string }) => ({
  region: tx(office[regionKey]?.region, l, fb.region),
  city: tx(office[regionKey]?.city, l, fb.city),
});
export const locCompany = (l: Locale) => ({
  tagline: tx(company.tagline, l),
  headquarters: tx(company.headquarters, l),
  intro: tx(company.intro, l),
});
