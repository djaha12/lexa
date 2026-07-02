import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sany-global.example.com"),
  title: {
    default: "SANY Global — Construction & Industrial Equipment",
    template: "%s | SANY Global",
  },
  description:
    "SANY is one of the world's leading manufacturers of construction and industrial equipment — excavators, concrete machinery, cranes, road, port and mining machinery, and new-energy solutions.",
  keywords: [
    "SANY",
    "excavators",
    "concrete pump",
    "cranes",
    "construction equipment",
    "heavy machinery",
    "mining trucks",
    "wind turbines",
  ],
  openGraph: {
    title: "SANY Global — Construction & Industrial Equipment",
    description:
      "The world's best-selling excavator brand and No.1 in concrete machinery. Explore the full range.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
