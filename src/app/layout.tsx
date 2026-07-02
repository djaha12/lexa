import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

const meta: Record<Locale, { title: string; desc: string }> = {
  ru: {
    title: "SANY Global — строительная и промышленная техника",
    desc: "SANY — один из мировых лидеров в производстве строительной и промышленной техники: экскаваторы, бетонная техника, краны, дорожная, портовая и карьерная техника, решения новой энергетики.",
  },
  en: {
    title: "SANY Global — Construction & Industrial Equipment",
    desc: "SANY is one of the world's leading manufacturers of construction and industrial equipment — excavators, concrete machinery, cranes, road, port and mining machinery, and new-energy solutions.",
  },
  zh: {
    title: "SANY Global — 工程与工业装备",
    desc: "SANY 是全球领先的工程与工业装备制造商之一——挖掘机、混凝土机械、起重机、路面、港口与矿山机械，以及新能源解决方案。",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = meta[locale];
  return {
    metadataBase: new URL("https://sany-global.example.com"),
    title: { default: m.title, template: "%s | SANY Global" },
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
