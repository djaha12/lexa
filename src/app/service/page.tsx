import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";
import { tx, type L } from "@/i18n/config";

export const metadata = { title: "Service & Support" };

const services: { id: string; icon: string; title: L; body: L }[] = [
  {
    id: "parts",
    icon: "Wrench",
    title: { ru: "Оригинальные запчасти", en: "Genuine parts", zh: "原厂配件" },
    body: {
      ru: "Региональные склады и быстрая доставка держат оригинальные запчасти SANY близко к вашему объекту.",
      en: "Regional distribution centres and fast delivery keep original SANY parts close to your jobsite.",
      zh: "区域配送中心与快速交付，让原厂 SANY 配件始终贴近您的工地。",
    },
  },
  {
    id: "maintenance",
    icon: "Spec",
    title: { ru: "ТО и ремонт", en: "Maintenance & repair", zh: "维护与维修" },
    body: {
      ru: "Планы профилактического обслуживания и опытные техники максимизируют время работы и ресурс машины.",
      en: "Preventive maintenance plans and expert technicians maximise uptime and machine life.",
      zh: "预防性保养计划与专业技师，最大化正常运行时间与设备寿命。",
    },
  },
  {
    id: "financing",
    icon: "Download",
    title: { ru: "Финансирование", en: "Financing", zh: "金融方案" },
    body: {
      ru: "Гибкий лизинг и финансирование под ваш денежный поток и задачи проекта.",
      en: "Flexible leasing and financing packages tailored to your cash-flow and project needs.",
      zh: "灵活的租赁与融资方案，契合您的现金流与项目需求。",
    },
  },
  {
    id: "training",
    icon: "Check",
    title: { ru: "Обучение операторов", en: "Operator training", zh: "操作培训" },
    body: {
      ru: "Сертифицированное обучение повышает безопасность, производительность и экономичность на каждой машине.",
      en: "Certified training improves safety, productivity and fuel efficiency on every machine.",
      zh: "认证培训提升每台设备的安全性、生产率与燃油效率。",
    },
  },
  {
    id: "warranty",
    icon: "Globe",
    title: { ru: "Гарантия", en: "Warranty", zh: "质保" },
    body: {
      ru: "Комплексная гарантия с поддержкой более чем в 180 странах и регионах.",
      en: "Comprehensive warranty coverage with support in more than 180 countries and regions.",
      zh: "全面质保覆盖，支持遍及 180 多个国家和地区。",
    },
  },
  {
    id: "telematics",
    icon: "Phone",
    title: { ru: "Парк и телематика", en: "Fleet & telematics", zh: "车队与远程信息" },
    body: {
      ru: "Данные о состоянии, местоположении и загрузке машин в реальном времени для умного управления парком.",
      en: "Real-time machine health, location and utilisation data to run a smarter fleet.",
      zh: "实时的设备健康、位置与利用率数据，助您更智能地管理车队。",
    },
  },
];

const steps: { n: string; ttl: L; d: L }[] = [
  {
    n: "01",
    ttl: { ru: "Обращение", en: "Contact", zh: "联系" },
    d: { ru: "Свяжитесь с местным дилером SANY или глобальной линией поддержки.", en: "Reach your local SANY dealer or our global support line.", zh: "联系当地 SANY 经销商或全球支持热线。" },
  },
  {
    n: "02",
    ttl: { ru: "Диагностика", en: "Diagnose", zh: "诊断" },
    d: { ru: "Телематика и эксперты быстро находят причину.", en: "Remote telematics and expert diagnosis pinpoint the issue fast.", zh: "远程信息与专家诊断，快速定位问题。" },
  },
  {
    n: "03",
    ttl: { ru: "Решение", en: "Resolve", zh: "解决" },
    d: { ru: "Оригинальные запчасти и обученные техники быстро возвращают вас в строй.", en: "Genuine parts and trained technicians get you running again.", zh: "原厂配件与专业技师，让您迅速复工。" },
  },
  {
    n: "04",
    ttl: { ru: "Оптимизация", en: "Optimise", zh: "优化" },
    d: { ru: "Постоянные планы держат ваш парк на пике эффективности.", en: "Ongoing plans keep your fleet performing at its best.", zh: "持续的方案让您的车队保持最佳状态。" },
  },
];

export default async function ServicePage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("service.eyebrow", locale)}
        title={t("service.title", locale)}
        intro={t("service.intro", locale)}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("nav.service", locale) }]}
        icon="chip"
      />

      <section className="section-pad bg-paper">
        <div className="container-max">
          <SectionHeading eyebrow={t("service.what.eyebrow", locale)} title={t("service.what.title", locale)} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const IconEl = (Icon as Record<string, React.FC<{ size?: number; className?: string }>>)[s.icon];
              return (
                <Reveal key={s.id} delay={(i % 3) * 70}>
                  <div id={s.id} className="card card-hover h-full scroll-mt-24 p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                      {IconEl && <IconEl size={24} />}
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink">{tx(s.title, locale)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{tx(s.body, locale)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading eyebrow={t("service.how.eyebrow", locale)} title={t("service.how.title", locale)} align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-cloud">{s.n}</div>
                  <h3 className="mt-2 text-lg font-bold text-ink">{tx(s.ttl, locale)}</h3>
                  <p className="mt-1.5 text-sm text-steel">{tx(s.d, locale)}</p>
                  {i < steps.length - 1 && <Icon.ArrowRight size={20} className="absolute -right-3 top-6 hidden text-mist md:block" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t("service.cta.title", locale)}</h2>
            <p className="mt-2 text-white/65">{t("service.cta.body", locale)}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">
              {t("cta.contactSupport", locale)} <Icon.ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              {t("cta.browseProducts", locale)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
