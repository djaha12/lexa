import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

const meta: Record<Locale, { title: string; desc: string }> = {
  ru: {
    title: "SANY Кыргызстан — техника, сервис и запчасти",
    desc: "Дилер SANY в Кыргызстане: продажа экскаваторов, кранов, бетонной и дорожной техники, гарантийный и постгарантийный сервис, оригинальные запчасти и выезд по всей стране.",
  },
  en: {
    title: "SANY Kyrgyzstan — equipment, service and parts",
    desc: "SANY dealer in Kyrgyzstan: sales of excavators, cranes, concrete and road machinery, warranty and post-warranty service, genuine spare parts and on-site support nationwide.",
  },
  zh: {
    title: "SANY 吉尔吉斯斯坦 — 设备、服务与配件",
    desc: "SANY 在吉尔吉斯斯坦的经销商：销售挖掘机、起重机、混凝土与路面机械，提供保修与保外服务、原厂配件及全国上门支持。",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = meta[locale];
  return {
    metadataBase: new URL("https://sany.kg"),
    title: { default: m.title, template: "%s | SANY Кыргызстан" },
    description: m.desc,
    openGraph: { title: m.title, description: m.desc, type: "website" },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className="min-h-screen antialiased">
        <LocaleProvider initial={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
          >
            {locale === "ru" ? "Перейти к содержимому" : locale === "zh" ? "跳转到内容" : "Skip to content"}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
