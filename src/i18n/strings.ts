import type { L, Locale } from "./config";

// ============================================================
//  UI / page strings — Russian / English / Chinese
// ============================================================

const S: Record<string, L> = {
  // ---- common ----
  "brand.slogan": {
    ru: "Дилер техники SANY в Кыргызстане",
    en: "SANY equipment dealer in Kyrgyzstan",
    zh: "SANY 吉尔吉斯斯坦设备经销商",
  },
  "dealer.subtitle": {
    ru: "Дилер техники SANY в Кыргызстане",
    en: "SANY equipment dealer in Kyrgyzstan",
    zh: "SANY 吉尔吉斯斯坦设备经销商",
  },
  "cta.getQuote": { ru: "Запросить КП", en: "Get a quote", zh: "获取报价" },
  "cta.requestQuote": { ru: "Запросить КП", en: "Request a quote", zh: "索取报价" },
  "cta.contactSales": { ru: "Связаться с продажами", en: "Contact sales", zh: "联系销售" },
  "cta.contactSupport": { ru: "Связаться с поддержкой", en: "Contact support", zh: "联系支持" },
  "cta.browseProducts": { ru: "Смотреть продукцию", en: "Browse products", zh: "浏览产品" },
  "cta.allProducts": { ru: "Вся продукция", en: "All products", zh: "全部产品" },
  "cta.viewAll": { ru: "Смотреть все", en: "View all", zh: "查看全部" },
  "cta.viewAllArrow": { ru: "Смотреть все →", en: "View all →", zh: "查看全部 →" },
  "cta.talkExpert": { ru: "Связаться с экспертом", en: "Talk to an expert", zh: "咨询专家" },
  "cta.talkSany": { ru: "Связаться с SANY", en: "Talk to SANY", zh: "联系 SANY" },
  "cta.learnMore": { ru: "Подробнее", en: "Learn more", zh: "了解更多" },
  "cta.backHome": { ru: "На главную", en: "Back home", zh: "返回首页" },
  "common.models": { ru: "моделей", en: "models", zh: "款" },
  "common.categories": { ru: "категорий", en: "categories", zh: "类别" },
  "common.lines": { ru: "линеек", en: "product lines", zh: "产品线" },
  "common.explore": { ru: "Смотреть", en: "Explore", zh: "查看" },

  // ---- nav ----
  "nav.products": { ru: "Продукция", en: "Products", zh: "产品" },
  "nav.solutions": { ru: "Решения", en: "Solutions", zh: "解决方案" },
  "nav.service": { ru: "Сервис", en: "Service", zh: "服务" },
  "nav.about": { ru: "О компании", en: "About", zh: "关于我们" },
  "nav.news": { ru: "Пресс-центр", en: "Newsroom", zh: "新闻中心" },
  "nav.contact": { ru: "Контакты", en: "Contact", zh: "联系我们" },

  // ---- header ----
  "header.afterSales": { ru: "Сервис", en: "After-sales", zh: "售后" },
  "header.investors": { ru: "Инвесторам", en: "Investors", zh: "投资者" },
  "header.megaEyebrow": { ru: "Каталог", en: "Explore the range", zh: "探索产品" },
  "header.megaTitle": { ru: "Найдите свою технику", en: "Find the right machine", zh: "找到合适的设备" },
  "header.megaDesc": {
    ru: "Изучите полный каталог, сравните характеристики и запросите индивидуальное предложение у местной команды SANY.",
    en: "Browse the complete catalogue, compare specifications and request a tailored quote from your local SANY team.",
    zh: "浏览完整产品目录，比较技术参数，并向当地 SANY 团队索取专属报价。",
  },
  "header.searchPlaceholder": {
    ru: "Поиск: экскаваторы, краны, насосы, модели…",
    en: "Search excavators, cranes, pumps, models…",
    zh: "搜索挖掘机、起重机、泵车、型号…",
  },
  "header.popular": { ru: "Популярные категории", en: "Popular categories", zh: "热门分类" },

  // ---- hero ----
  "hero.badge": {
    ru: "Дилер SANY в Кыргызстане",
    en: "SANY dealer in Kyrgyzstan",
    zh: "SANY 吉尔吉斯斯坦经销商",
  },
  "hero.titleTop": { ru: "Техника SANY", en: "SANY equipment", zh: "SANY 工程机械" },
  "hero.titleAccent": { ru: "в Кыргызстане", en: "in Kyrgyzstan", zh: "在吉尔吉斯斯坦" },
  "hero.subcopy": {
    ru: "Продажа, гарантийный и постгарантийный сервис, оригинальные запчасти и выезд специалистов по всему Кыргызстану. Экскаваторы, краны, бетонная и дорожная техника SANY — со склада и под заказ.",
    en: "Sales, warranty and post-warranty service, genuine spare parts and on-site support across Kyrgyzstan. SANY excavators, cranes, concrete and road machinery — in stock and to order.",
    zh: "在吉尔吉斯斯坦全境提供销售、保修与保外服务、原厂配件及现场支持。SANY 挖掘机、起重机、混凝土与路面机械——现货及订购。",
  },
  "hero.exploreProducts": { ru: "Смотреть каталог", en: "Explore products", zh: "浏览产品" },
  "hero.nowViewing": { ru: "Сейчас смотрите", en: "Now viewing", zh: "正在查看" },

  // ---- home: stats section handled by data ----
  // ---- home: range ----
  "home.range.eyebrow": { ru: "Весь модельный ряд", en: "The full range", zh: "完整产品线" },
  "home.range.title": { ru: "Вся техника для вашего проекта", en: "Every machine your project needs", zh: "满足项目所需的每一台设备" },
  "home.range.intro": {
    ru: "Десять семейств техники, сотни моделей — один надёжный бренд. Изучите полный ассортимент SANY.",
    en: "Ten equipment families, hundreds of models — one trusted brand. Explore the complete SANY assortment.",
    zh: "十大设备家族、数百款型号——同一个值得信赖的品牌。探索 SANY 完整产品阵容。",
  },
  "home.range.viewAll": { ru: "Смотреть всю продукцию", en: "View all products", zh: "查看全部产品" },

  // ---- home: featured ----
  "home.featured.eyebrow": { ru: "Флагманы и хиты продаж", en: "Flagship & best-sellers", zh: "旗舰与畅销" },
  "home.featured.title": { ru: "Избранная техника", en: "Featured equipment", zh: "精选设备" },
  "home.featured.intro": {
    ru: "Проверенные машины, работающие на объектах более чем в 180 странах.",
    en: "Proven performers trusted on jobsites in more than 180 countries.",
    zh: "在全球 180 多个国家和地区的工地上久经考验。",
  },

  // ---- home: why ----
  "home.why.eyebrow": { ru: "Почему мы", en: "Why us", zh: "为何选择我们" },
  "home.why.title": { ru: "Не просто продавец, а надёжный дилер", en: "More than a seller — a reliable dealer", zh: "不只是卖家，而是可靠的经销商" },
  "home.why.intro": {
    ru: "Покупая у нас, вы получаете технику SANY с гарантией, сервис силами обученных инженеров, оригинальные запчасти и поддержку по всему Кыргызстану.",
    en: "Buy from us and you get SANY machines with warranty, service by trained engineers, genuine parts and support across Kyrgyzstan.",
    zh: "在我们这里购买，您将获得带质保的 SANY 设备、专业工程师服务、原厂配件以及覆盖全吉尔吉斯斯坦的支持。",
  },
  "home.why.about": { ru: "О компании SANY", en: "About SANY", zh: "关于 SANY" },
  "home.why.service": { ru: "Сервис и поддержка", en: "Service & support", zh: "服务与支持" },

  // ---- home: new energy ----
  "home.energy.eyebrow": { ru: "Новая энергетика", en: "New energy", zh: "新能源" },
  "home.energy.title": { ru: "Энергия для площадки без выбросов", en: "Powering the zero-emission jobsite", zh: "为零排放工地赋能" },
  "home.energy.intro": {
    ru: "Электрические экскаваторы, тягачи со сменными батареями, карьерные самосвалы и накопители энергии — SANY электрифицирует всю тяжёлую индустрию.",
    en: "Battery-electric excavators, battery-swap heavy trucks, electric mining haulers and grid-scale storage — SANY is electrifying every corner of heavy industry.",
    zh: "纯电挖掘机、换电重卡、电动矿用车与电网级储能——SANY 正在电气化重工业的每一个角落。",
  },
  "home.energy.b1": { ru: "Смена батареи заряжает тягач за минуты", en: "Battery-swap refuels trucks in minutes", zh: "换电让卡车数分钟内“补能”" },
  "home.energy.b2": { ru: "Стоимость энергии за час ниже, чем у дизеля", en: "Lower energy cost per hour than diesel", zh: "每小时能耗成本低于柴油" },
  "home.energy.b3": { ru: "Ноль выбросов для городских и закрытых работ", en: "Zero local emissions for urban & indoor work", zh: "城市与室内作业零本地排放" },
  "home.energy.cta": { ru: "Узнать о новой энергетике", en: "Discover new energy", zh: "了解新能源" },
  "home.energy.s1": { ru: "Ёмкость батареи", en: "Battery capacity", zh: "电池容量" },
  "home.energy.s2": { ru: "Выброс CO₂", en: "Tailpipe CO₂", zh: "尾气 CO₂" },
  "home.energy.s3": { ru: "Работа на сменных батареях", en: "Battery-swap uptime", zh: "换电正常运行" },
  "home.energy.s4": { ru: "Оффшорная турбина", en: "Offshore turbine", zh: "海上风机" },

  // ---- home: industries ----
  "home.ind.eyebrow": { ru: "Решения по отраслям", en: "Solutions by industry", zh: "行业解决方案" },
  "home.ind.title": { ru: "Под вашу задачу", en: "Built for how you work", zh: "为您的作业方式而生" },
  "home.ind.intro": {
    ru: "Комплекты техники и экспертиза под каждую отрасль.",
    en: "Tailored equipment packages and expertise for every sector.",
    zh: "为每个行业量身打造的设备方案与专业支持。",
  },

  // ---- home: news ----
  "home.news.eyebrow": { ru: "Пресс-центр", en: "Newsroom", zh: "新闻中心" },
  "home.news.title": { ru: "Последние новости SANY", en: "Latest from SANY", zh: "SANY 最新动态" },
  "home.news.all": { ru: "Все новости", en: "All news", zh: "全部新闻" },

  // ---- home: global ----
  "home.global.eyebrow": { ru: "Глобальное присутствие", en: "Global presence", zh: "全球布局" },
  "home.global.title": { ru: "Локальный партнёр по всему миру", en: "Local partner, worldwide", zh: "遍布全球的本地伙伴" },
  "home.global.intro": {
    ru: "Производственные площадки на нескольких континентах и дилеры в 180+ странах — поддержка SANY всегда рядом.",
    en: "With manufacturing bases on multiple continents and dealers across 180+ countries, SANY support is always close by.",
    zh: "制造基地遍布多个大洲，经销商覆盖 180 多个国家——SANY 的支持始终近在身边。",
  },
  "home.global.countries": { ru: "Стран", en: "Countries", zh: "国家" },
  "home.global.factories": { ru: "Заводов", en: "Factories", zh: "工厂" },
  "home.global.machinesYr": { ru: "Машин / год", en: "Machines / yr", zh: "台/年" },
  "home.global.quote": {
    ru: "«Техника SANY держит наши операции в движении — с сервисом и запчастями, на которые можно положиться, где бы мы ни работали.»",
    en: "\"SANY equipment keeps our operations moving — with service and parts support we can count on, wherever the work takes us.\"",
    zh: "「SANY 设备让我们的作业持续运转——无论走到哪里，都有可靠的服务与配件支持。」",
  },
  "home.global.quoteAuthor": { ru: "— Заказчик в сфере инфраструктуры", en: "— Global infrastructure customer", zh: "— 全球基础设施客户" },
  "home.global.findTeam": { ru: "Найти местную команду", en: "Find your local team", zh: "查找当地团队" },

  // ---- footer ----
  "footer.ctaTitle": { ru: "Готовы двигать проект вперёд?", en: "Ready to move your project forward?", zh: "准备好推进您的项目了吗？" },
  "footer.ctaBody": {
    ru: "Обсудите с экспертом SANY подходящую технику, финансирование и сервис для вашего предприятия.",
    en: "Talk to a SANY specialist about the right equipment, financing and after-sales support for your operation.",
    zh: "与 SANY 专家探讨适合您运营的设备、金融方案与售后支持。",
  },
  "footer.intro": {
    ru: "Дилер SANY в Кыргызстане: продажа, сервис, оригинальные запчасти и поддержка клиентов по всей стране.",
    en: "SANY dealer in Kyrgyzstan: sales, service, genuine parts and customer support nationwide.",
    zh: "SANY 吉尔吉斯斯坦经销商：全国范围的销售、服务、原厂配件与客户支持。",
  },
  "footer.col.products": { ru: "Продукция", en: "Products", zh: "产品" },
  "footer.col.company": { ru: "Компания", en: "Company", zh: "公司" },
  "footer.col.support": { ru: "Поддержка", en: "Support", zh: "支持" },
  "footer.col.solutions": { ru: "Решения", en: "Solutions", zh: "解决方案" },
  "footer.rights": {
    ru: "© 2026 SANY Global. Все права защищены. Независимый концепт-сайт.",
    en: "© 2026 SANY Global. All rights reserved. Independent concept site.",
    zh: "© 2026 SANY Global. 版权所有。独立概念网站。",
  },
  // footer links
  "link.aboutSany": { ru: "О компании SANY", en: "About SANY", zh: "关于 SANY" },
  "link.newsroom": { ru: "Пресс-центр", en: "Newsroom", zh: "新闻中心" },
  "link.sustainability": { ru: "Устойчивое развитие", en: "Sustainability", zh: "可持续发展" },
  "link.careers": { ru: "Карьера", en: "Careers", zh: "招聘" },
  "link.investors": { ru: "Инвесторам", en: "Investors", zh: "投资者" },
  "link.serviceParts": { ru: "Сервис и запчасти", en: "Service & parts", zh: "服务与配件" },
  "link.findDealer": { ru: "Найти дилера", en: "Find a dealer", zh: "查找经销商" },
  "link.financing": { ru: "Финансирование", en: "Financing", zh: "金融方案" },
  "link.training": { ru: "Обучение", en: "Training", zh: "培训" },
  "link.warranty": { ru: "Гарантия", en: "Warranty", zh: "质保" },
  "link.byIndustry": { ru: "По отраслям", en: "By industry", zh: "按行业" },
  "link.newEnergy": { ru: "Новая энергетика", en: "New energy", zh: "新能源" },
  "link.smartMachines": { ru: "Умные машины", en: "Intelligent machines", zh: "智能设备" },
  "link.telematics": { ru: "Парк и телематика", en: "Fleet & telematics", zh: "车队与远程信息" },
  "link.privacy": { ru: "Конфиденциальность", en: "Privacy", zh: "隐私政策" },
  "link.terms": { ru: "Условия", en: "Terms", zh: "条款" },
  "link.cookies": { ru: "Cookie", en: "Cookies", zh: "Cookie" },
  "link.globalNetwork": { ru: "Глобальная сеть", en: "Global network", zh: "全球网络" },

  // ---- products index ----
  "products.eyebrow": { ru: "Каталог продукции", en: "Product catalogue", zh: "产品目录" },
  "products.title": { ru: "Полный модельный ряд SANY", en: "The complete SANY range", zh: "SANY 完整产品线" },
  "products.intro": {
    ru: "Десять семейств техники и растущий каталог проверенных моделей. Выберите категорию, чтобы изучить характеристики и запросить предложение.",
    en: "Ten equipment families and a growing catalogue of proven models. Choose a category to explore specifications and request a quote.",
    zh: "十大设备家族及不断丰富的成熟型号。选择一个类别，查看技术参数并索取报价。",
  },
  "products.exploreOther": { ru: "Другие категории", en: "Explore other categories", zh: "浏览其他类别" },

  // ---- category page ----
  "cat.overview.lines": { ru: "линеек", en: "product lines", zh: "产品线" },
  "cat.exploreOther": { ru: "Другие категории", en: "Explore other categories", zh: "浏览其他类别" },
  "cat.exploreCta": { ru: "Смотреть", en: "Explore", zh: "查看" },

  // ---- browser (filters) ----
  "browser.all": { ru: "Все", en: "All", zh: "全部" },
  "browser.sort.recommended": { ru: "Рекомендуем", en: "Recommended", zh: "推荐" },
  "browser.sort.az": { ru: "По названию А–Я", en: "Name A–Z", zh: "名称 A–Z" },
  "browser.empty": {
    ru: "В этой линейке пока нет моделей — свяжитесь с нами для актуального наличия.",
    en: "No models in this line yet — contact us for the latest availability.",
    zh: "该产品线暂无型号——请联系我们了解最新供应情况。",
  },

  // ---- product card ----
  // (specs come from data)

  // ---- model page ----
  "model.overview": { ru: "Обзор", en: "Overview", zh: "概述" },
  "model.overviewTitle": { ru: "Создан работать, рассчитан служить", en: "Built to perform, engineered to last", zh: "为性能而造，为耐久而生" },
  "model.highlights": { ru: "Ключевые преимущества", en: "Key highlights", zh: "核心亮点" },
  "model.applications": { ru: "Типичные применения", en: "Typical applications", zh: "典型应用" },
  "model.needHelp": { ru: "Нужна помощь с выбором?", en: "Need help choosing?", zh: "需要选型帮助？" },
  "model.needHelpBody": { ru: "Обсудите модель", en: "Talk to a SANY specialist about the", zh: "就以下机型咨询 SANY 专家：" },
  "model.needHelpBody2": { ru: "с экспертом SANY.", en: ".", zh: "" },
  "model.specs": { ru: "Технические характеристики", en: "Technical specifications", zh: "技术参数" },
  "model.fullSpecs": { ru: "Все характеристики", en: "Full specifications", zh: "完整参数" },
  "model.specNote": {
    ru: "Характеристики ориентировочные и могут отличаться в зависимости от рынка и комплектации. Уточняйте у местной команды SANY.",
    en: "Specifications are indicative and may vary by market and configuration. Contact your local SANY team for the definitive datasheet.",
    zh: "参数仅供参考，可能因市场和配置而异。请联系当地 SANY 团队获取最终数据表。",
  },
  "model.moreIn": { ru: "Ещё в категории", en: "More", zh: "更多" },
  "model.rowCategory": { ru: "Категория", en: "Category", zh: "类别" },
  "model.rowLine": { ru: "Линейка", en: "Product line", zh: "产品线" },

  // ---- search ----
  "search.eyebrow": { ru: "Поиск", en: "Search", zh: "搜索" },
  "search.title": { ru: "Найдите свою технику", en: "Find your machine", zh: "找到您的设备" },
  "search.intro": { ru: "Ищите по каталогу: модель, категория или ключевое слово.", en: "Search the full catalogue by model, category or keyword.", zh: "按型号、类别或关键词搜索完整目录。" },
  "search.browse": { ru: "Категории", en: "Browse categories", zh: "浏览类别" },
  "search.results": { ru: "результатов по запросу", en: "results for", zh: "条结果，关键词" },
  "search.result": { ru: "результат по запросу", en: "result for", zh: "条结果，关键词" },
  "search.noMatch": { ru: "Ничего не найдено", en: "No matches found", zh: "未找到匹配结果" },
  "search.noMatchBody": { ru: "Попробуйте другое слово или", en: "Try a different keyword, or", zh: "请尝试其他关键词，或" },
  "search.browseAll": { ru: "смотреть всю продукцию", en: "browse all products", zh: "浏览全部产品" },

  // ---- contact ----
  "contact.eyebrow": { ru: "Контакты", en: "Contact us", zh: "联系我们" },
  "contact.title": { ru: "Давайте строить вместе", en: "Let's build something", zh: "共建未来" },
  "contact.intro": {
    ru: "Запросите коммерческое предложение или задайте технический вопрос — отвечаем быстро.",
    en: "Request a quote or ask a technical question — we respond fast.",
    zh: "索取报价或咨询技术问题——我们快速响应。",
  },
  "contact.talk": { ru: "Связаться с SANY", en: "Talk to SANY", zh: "联系 SANY" },
  "contact.talkBody": {
    ru: "Нужна одна машина или целый парк — наши специалисты помогут подобрать технику, финансирование и сервис.",
    en: "Whether you need a single machine or a full fleet, our specialists will help you choose the right equipment, financing and support package.",
    zh: "无论是单台设备还是整支车队，我们的专家都将帮您选择合适的设备、金融与服务方案。",
  },
  "contact.callSales": { ru: "Позвонить в отдел продаж", en: "Call sales", zh: "致电销售" },
  "contact.emailUs": { ru: "Написать нам", en: "Email us", zh: "邮件联系" },
  "contact.offices": { ru: "Региональные офисы", en: "Regional offices", zh: "区域办事处" },
  "contact.phoneNote": {
    ru: "По любому номеру — звонок или WhatsApp",
    en: "Any number — call or WhatsApp",
    zh: "任一号码——可致电或 WhatsApp",
  },
  // form
  "form.name": { ru: "Имя и фамилия", en: "Full name", zh: "姓名" },
  "form.email": { ru: "Рабочий e-mail", en: "Work email", zh: "工作邮箱" },
  "form.company": { ru: "Компания", en: "Company", zh: "公司" },
  "form.country": { ru: "Страна / регион", en: "Country / region", zh: "国家 / 地区" },
  "form.interest": { ru: "Интересующая продукция", en: "Product interest", zh: "感兴趣的产品" },
  "form.selectCategory": { ru: "Выберите категорию…", en: "Select a category…", zh: "选择类别…" },
  "form.message": { ru: "Сообщение", en: "Message", zh: "留言" },
  "form.messagePlaceholder": { ru: "Расскажите о проекте и требованиях…", en: "Tell us about your project and requirements…", zh: "请介绍您的项目和需求…" },
  "form.send": { ru: "Отправить запрос", en: "Send enquiry", zh: "提交咨询" },
  "form.consent": {
    ru: "Отправляя форму, вы соглашаетесь на связь со стороны SANY. Это демо-форма концепта.",
    en: "By submitting you agree to be contacted by SANY. This is a concept demo form.",
    zh: "提交即表示您同意 SANY 与您联系。此为概念演示表单。",
  },
  "form.enquiryAbout": { ru: "Запрос по модели", en: "Enquiry about", zh: "咨询机型" },
  "form.thanks": { ru: "Спасибо", en: "Thank you", zh: "谢谢" },
  "form.thanksBody": {
    ru: "Ваш запрос получен. Представитель SANY скоро свяжется с вами.",
    en: "Your enquiry has been received. A SANY representative will be in touch shortly to help with your request.",
    zh: "我们已收到您的咨询。SANY 代表将很快与您联系。",
  },
  "form.another": { ru: "Отправить ещё запрос", en: "Send another enquiry", zh: "再提交一个咨询" },
  "form.defaultMsg": { ru: "Прошу подготовить коммерческое предложение по модели", en: "I would like a quote for the", zh: "我想获取以下机型的报价：" },

  // ---- about ----
  "about.eyebrow": { ru: "О компании SANY", en: "About SANY", zh: "关于 SANY" },
  "about.title": { ru: "Качество меняет мир", en: "Quality changes the world", zh: "品质改变世界" },
  "about.mission.eyebrow": { ru: "Наша миссия", en: "Our mission", zh: "我们的使命" },
  "about.mission.title": { ru: "Строим лучший мир — машина за машиной", en: "Building a better world, one machine at a time", zh: "以每一台设备，建设更美好的世界" },
  "about.mission.intro": {
    ru: "С 1989 года SANY выросла из небольшой мастерской сварочных материалов в мирового лидера тяжёлой техники благодаря постоянным инвестициям в R&D и интеллектуальное производство.",
    en: "Since 1989, SANY has grown from a small welding-materials workshop into a global leader in heavy equipment, driven by relentless investment in R&D and intelligent manufacturing.",
    zh: "自 1989 年以来，SANY 凭借对研发和智能制造的持续投入，从一家小型焊接材料作坊成长为重型装备的全球领导者。",
  },
  "about.mission.body": {
    ru: "Сегодня наши машины строят дороги, мосты, города, рудники и объекты чистой энергетики, двигающие человечество вперёд — с сервисом и запчастями в 180+ странах.",
    en: "Today our machines build the roads, bridges, cities, mines and clean-energy projects that move humanity forward — backed by service and parts in more than 180 countries.",
    zh: "今天，我们的设备建造着推动人类前行的道路、桥梁、城市、矿山和清洁能源项目——并有覆盖 180 多个国家的服务与配件支持。",
  },
  "about.founded": { ru: "Год основания", en: "Year founded", zh: "成立年份" },
  "about.hq": { ru: "Штаб-квартира", en: "Headquarters", zh: "总部" },
  "about.rd": { ru: "выручки в R&D", en: "of revenue into R&D", zh: "营收投入研发" },
  "about.top3": { ru: "Производитель техники", en: "Global equipment maker", zh: "全球装备制造商" },
  "about.milestones.eyebrow": { ru: "Вехи", en: "Milestones", zh: "里程碑" },
  "about.milestones.title": { ru: "Путь роста", en: "A journey of growth", zh: "成长之路" },
  "about.values.eyebrow": { ru: "Что нами движет", en: "What drives us", zh: "驱动我们的力量" },
  "about.values.title": { ru: "Наши ценности в действии", en: "Our values in action", zh: "价值观见于行动" },

  // ---- service ----
  "service.eyebrow": { ru: "Сервис и поддержка", en: "Service & support", zh: "服务与支持" },
  "service.title": { ru: "Бесперебойность — гарантия SANY", en: "Uptime, guaranteed by SANY", zh: "正常运行，SANY 保障" },
  "service.intro": {
    ru: "Владение техникой SANY — это глобальная сеть запчастей, специалистов и технологий, поддерживающих вашу производительность на протяжении всего срока службы.",
    en: "Owning a SANY machine means a global network of parts, people and technology dedicated to keeping you productive — for the whole life of your equipment.",
    zh: "拥有 SANY 设备，即拥有一张由配件、人员与技术构成的全球网络，在设备全生命周期内保障您的高效运转。",
  },
  "service.what.eyebrow": { ru: "Что мы предлагаем", en: "What we offer", zh: "我们的服务" },
  "service.what.title": { ru: "Забота о клиенте от и до", en: "End-to-end customer care", zh: "端到端的客户关怀" },
  "service.how.eyebrow": { ru: "Как это работает", en: "How it works", zh: "服务流程" },
  "service.how.title": { ru: "Поддержка в четыре шага", en: "Support in four simple steps", zh: "四步获得支持" },
  "service.cta.title": { ru: "Нужны запчасти или сервис сегодня?", en: "Need parts or service today?", zh: "今天需要配件或服务？" },
  "service.cta.body": { ru: "Наша команда готова помочь свести простои к минимуму.", en: "Our team is ready to help you minimise downtime.", zh: "我们的团队随时助您将停机时间降至最低。" },

  // ---- solutions ----
  "sol.eyebrow": { ru: "Решения", en: "Solutions", zh: "解决方案" },
  "sol.title": { ru: "Техника под вашу задачу", en: "Equipment matched to your mission", zh: "为您的使命匹配设备" },
  "sol.intro": {
    ru: "У каждой отрасли свои требования. Узнайте, как техника SANY, новая энергетика и умные машины решают их вместе.",
    en: "Every sector has its own demands. Explore how SANY equipment, new-energy technology and intelligent machines come together to solve them.",
    zh: "每个行业都有独特需求。了解 SANY 设备、新能源技术与智能装备如何协同应对。",
  },
  "sol.byIndustry.eyebrow": { ru: "По отраслям", en: "By industry", zh: "按行业" },
  "sol.byIndustry.title": { ru: "Под ваш сектор", en: "Built for your sector", zh: "为您的行业而建" },
  "sol.energy.title": { ru: "Электрификация тяжёлой индустрии", en: "Electrifying heavy industry", zh: "重工业电气化" },
  "sol.energy.intro": {
    ru: "Электро-, сменные батареи и водород — в экскаваторах, грузовиках, карьерных самосвалах и накопителях: меньше выбросов и стоимость часа.",
    en: "Battery-electric, battery-swap and hydrogen technologies across excavators, trucks, mining haulers and storage — cutting emissions and cost per hour.",
    zh: "纯电、换电与氢能技术，覆盖挖掘机、卡车、矿用车与储能——降低排放与每小时成本。",
  },
  "sol.energy.renewables": { ru: "Возобновляемая энергетика", en: "Renewable energy", zh: "可再生能源" },
  "sol.energy.etrucks": { ru: "Электрогрузовики", en: "Electric trucks", zh: "电动卡车" },
  "sol.smart.eyebrow": { ru: "Умные машины", en: "Intelligent machines", zh: "智能设备" },
  "sol.smart.title": { ru: "Умнее железо — лучше результат", en: "Smarter iron, better outcomes", zh: "更智能的装备，更优的成果" },
  "sol.smart.intro": {
    ru: "Интеллектуальная гидравлика, управление по нивелиру, удалённая диагностика и цифровые двойники превращают каждую машину SANY в подключённый актив с данными.",
    en: "Intelligent hydraulics, machine guidance, remote diagnostics and digital twins turn every SANY machine into a connected, data-driven asset.",
    zh: "智能液压、机械引导、远程诊断与数字孪生，让每台 SANY 设备成为互联、数据驱动的资产。",
  },
  "sol.smart.b1": { ru: "Телематика для видимости всего парка", en: "Telematics for real-time fleet visibility", zh: "远程信息，实时掌握车队" },
  "sol.smart.b2": { ru: "Управление по нивелиру и точность загрузки", en: "Machine guidance for grade & payload accuracy", zh: "机械引导，精准控高与载重" },
  "sol.smart.b3": { ru: "Прогнозное ТО против простоев", en: "Predictive maintenance to prevent downtime", zh: "预测性维护，防止停机" },
  "sol.smart.b4": { ru: "Готовность к удалённой и автономной работе", en: "Remote & autonomous-ready operation", zh: "支持远程与自动化作业" },

  // ---- news ----
  "news.eyebrow": { ru: "Пресс-центр", en: "Newsroom", zh: "新闻中心" },
  "news.title": { ru: "Истории SANY", en: "Stories from SANY", zh: "SANY 的故事" },
  "news.intro": {
    ru: "Запуски продуктов, вехи и люди, создающие будущее тяжёлой индустрии.",
    en: "Product launches, milestones and the people building the future of heavy industry.",
    zh: "产品发布、重要里程碑，以及塑造重工业未来的人们。",
  },
  "news.read": { ru: "Читать", en: "Read story", zh: "阅读全文" },
  "news.more": { ru: "Ещё материалы", en: "More stories", zh: "更多报道" },
  "news.backTo": { ru: "Назад в пресс-центр", en: "Back to newsroom", zh: "返回新闻中心" },
  "news.article.p1": {
    ru: "SANY продолжает расширять границы возможностей тяжёлой техники. Это событие отражает многолетнюю приверженность компании интеллектуальным, эффективным и устойчивым машинам для клиентов по всему миру.",
    en: "SANY continues to push the boundaries of what heavy equipment can do. This development reflects the company's long-standing commitment to intelligent, efficient and sustainable machinery for customers around the world.",
    zh: "SANY 持续拓展重型装备的能力边界。这一进展体现了公司长期以来为全球客户打造智能、高效、可持续设备的承诺。",
  },
  "news.article.p2": {
    ru: "Созданные на передовых «маячковых» заводах SANY, новейшие продукты сочетают проверенную надёжность с цифровыми технологиями и новой энергетикой — снижая эксплуатационные расходы и воздействие на среду без потери производительности.",
    en: "Engineered in SANY's advanced \"lighthouse\" factories, the latest generation of products combines proven durability with new digital and new-energy technologies — delivering lower operating costs and a smaller environmental footprint without compromising on performance.",
    zh: "在 SANY 先进的「灯塔」工厂中打造，新一代产品将久经考验的耐久性与数字化、新能源技术相结合——在不牺牲性能的前提下，降低使用成本与环境足迹。",
  },
  "news.article.h2": { ru: "Что это значит для клиентов", en: "What it means for customers", zh: "对客户意味着什么" },
  "news.article.p3": {
    ru: "Для подрядчиков и операторов такие достижения означают больше времени в работе, лучшую топливную и энергоэффективность и уверенность, которую даёт глобальная сеть сервиса и запчастей в 180+ странах.",
    en: "For contractors and operators, advances like these translate into higher uptime, better fuel or energy efficiency, and the confidence that comes from a global service and parts network spanning more than 180 countries and regions.",
    zh: "对承包商和操作者而言，这些进步意味着更高的正常运行率、更优的燃油或能耗效率，以及来自覆盖 180 多个国家和地区的全球服务与配件网络的信心。",
  },
  "news.article.p4": {
    ru: "Чтобы узнать, как это принесёт пользу вашему бизнесу, свяжитесь с местной командой SANY для индивидуальной консультации и предложения.",
    en: "To learn how this can benefit your operation, get in touch with your local SANY team for a tailored consultation and quote.",
    zh: "如需了解这将如何助力您的业务，请联系当地 SANY 团队获取专属咨询与报价。",
  },

  // ---- 404 ----
  "nf.title": { ru: "Эта страница свернула не туда", en: "This page took a wrong turn", zh: "此页面走错了路" },
  "nf.body": {
    ru: "Страница, которую вы ищете, не существует или была перемещена. Давайте вернём вас на путь.",
    en: "The page you're looking for doesn't exist or has moved. Let's get you back on track.",
    zh: "您访问的页面不存在或已移动。让我们帮您回到正轨。",
  },
};

export function t(key: string, locale: Locale): string {
  const entry = S[key];
  if (!entry) return key;
  return entry[locale] ?? entry.en ?? entry.ru ?? key;
}
