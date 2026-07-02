"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/products";
import { CategoryIcon, Icon, Logo } from "./Icons";
import { accent } from "@/lib/theme";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/strings";
import { locCategory } from "@/i18n/content";
import { locales, localeNames, type Locale } from "@/i18n/config";

const NAV = [
  { key: "products", href: "/products" },
  { key: "solutions", href: "/solutions" },
  { key: "service", href: "/service" },
  { key: "about", href: "/about" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMobile(false);
    setSearch(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (search) setTimeout(() => searchRef.current?.focus(), 30);
  }, [search]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearch(false);
        setMega(false);
        setMobile(false);
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 120);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    setSearch(false);
  };

  const solid = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-white/90 backdrop-blur-xl border-b border-line" : "bg-transparent"
        }`}
      >
        {/* utility bar */}
        <div className={`hidden lg:block border-b transition-colors ${solid ? "border-line/70" : "border-white/15"}`}>
          <div className="container-max flex h-9 items-center justify-between text-[12.5px]">
            <div className={`flex items-center gap-5 ${solid ? "text-steel" : "text-white/80"}`}>
              <span className="font-medium">{t("brand.slogan", locale)}</span>
            </div>
            <div className={`flex items-center gap-5 ${solid ? "text-steel" : "text-white/80"}`}>
              <Link href="/service" className="link-underline">
                {t("header.afterSales", locale)}
              </Link>
              <Link href="/about" className="link-underline">
                {t("header.investors", locale)}
              </Link>
              <a href="tel:+861234567890" className="inline-flex items-center gap-1.5 link-underline">
                <Icon.Phone size={14} /> 400-8866-318
              </a>
              <div className="relative">
                <button onClick={() => setLangOpen((v) => !v)} className="inline-flex items-center gap-1.5 font-medium">
                  <Icon.Globe size={14} />
                  {localeNames[locale]}
                  <Icon.ChevronDown size={13} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-7 z-50 w-40 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-xl">
                    {locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLocale(l as Locale);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm text-ink hover:bg-paper ${
                          locale === l ? "font-semibold text-brand" : ""
                        }`}
                      >
                        {localeNames[l]}
                        {locale === l && <Icon.Check size={14} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* main bar */}
        <div className="container-max flex h-[60px] items-center justify-between gap-6">
          <Link href="/" aria-label="SANY home" className="shrink-0">
            <Logo light={!solid} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isProducts = item.href === "/products";
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div
                  key={item.href}
                  onMouseEnter={isProducts ? openMega : undefined}
                  onMouseLeave={isProducts ? scheduleClose : undefined}
                >
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                      solid ? (active ? "text-brand" : "text-ink hover:text-brand") : "text-white/90 hover:text-white"
                    }`}
                  >
                    {t(`nav.${item.key}`, locale)}
                    {isProducts && (
                      <Icon.ChevronDown size={15} className={mega ? "rotate-180 transition-transform" : "transition-transform"} />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearch(true)}
              aria-label="Search"
              className={`grid h-10 w-10 place-items-center rounded-lg transition-colors ${
                solid ? "text-ink hover:bg-paper" : "text-white hover:bg-white/10"
              }`}
            >
              <Icon.Search size={19} />
            </button>
            <Link href="/contact" className="btn btn-primary hidden h-10 !px-5 !py-0 text-sm sm:inline-flex">
              {t("cta.getQuote", locale)}
            </Link>
            <button
              onClick={() => setMobile(true)}
              aria-label="Menu"
              className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
                solid ? "text-ink hover:bg-paper" : "text-white hover:bg-white/10"
              }`}
            >
              <Icon.Menu size={22} />
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {mega && (
          <div
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-t border-line bg-white/95 shadow-[0_30px_60px_-30px_rgba(11,13,18,.35)] backdrop-blur-xl lg:block animate-fade-up"
          >
            <div className="container-max grid grid-cols-[1fr_320px] gap-8 py-8">
              <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                {categories.map((c) => {
                  const lc = locCategory(c, locale);
                  return (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-paper"
                    >
                      <span
                        className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                        style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                      >
                        <CategoryIcon name={c.icon} size={20} />
                      </span>
                      <span>
                        <span className="flex items-center gap-1 text-[14.5px] font-semibold text-ink group-hover:text-brand">
                          {lc.name}
                        </span>
                        <span className="mt-0.5 block text-[12.5px] leading-snug text-steel">{lc.tagline}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="rounded-2xl bg-ink p-6 text-white">
                <p className="eyebrow !text-brand-soft">{t("header.megaEyebrow", locale)}</p>
                <h4 className="mt-2 text-xl font-bold">{t("header.megaTitle", locale)}</h4>
                <p className="mt-2 text-sm text-white/70">{t("header.megaDesc", locale)}</p>
                <Link href="/products" className="btn btn-white mt-5 w-full !py-3 text-sm">
                  {t("cta.allProducts", locale)}
                  <Icon.ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
                  {t("cta.talkExpert", locale)} <Icon.ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH OVERLAY */}
      {search && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setSearch(false)} />
          <div className="relative mt-[12vh] w-full max-w-2xl px-4 animate-fade-up">
            <form onSubmit={submitSearch} className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center gap-3 px-5">
                <Icon.Search size={22} className="text-steel" />
                <input
                  ref={searchRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={t("header.searchPlaceholder", locale)}
                  className="h-16 w-full bg-transparent text-lg outline-none placeholder:text-mist"
                />
                <button type="button" onClick={() => setSearch(false)} className="text-steel hover:text-ink">
                  <Icon.Close size={22} />
                </button>
              </div>
              <div className="border-t border-line bg-paper px-5 py-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-mist">{t("header.popular", locale)}</p>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 6).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink hover:border-brand hover:text-brand"
                    >
                      {locCategory(c, locale).name}
                    </Link>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MOBILE NAV */}
      {mobile && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setMobile(false)} />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl animate-fade-up">
            <div className="flex h-[60px] items-center justify-between border-b border-line px-5">
              <Logo />
              <button onClick={() => setMobile(false)} aria-label="Close" className="text-ink">
                <Icon.Close size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-mist">{t("nav.products", locale)}</p>
              <div className="mb-4 grid gap-0.5">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-paper"
                  >
                    <span
                      className="grid h-8 w-8 place-items-center rounded-lg"
                      style={{ background: accent(c.accent).tint, color: accent(c.accent).ink }}
                    >
                      <CategoryIcon name={c.icon} size={18} />
                    </span>
                    <span className="text-[15px] font-medium text-ink">{locCategory(c, locale).name}</span>
                  </Link>
                ))}
              </div>
              <div className="border-t border-line pt-3">
                {NAV.filter((n) => n.href !== "/products").map((n) => (
                  <Link key={n.href} href={n.href} className="block rounded-xl px-2 py-3 text-[15px] font-medium text-ink hover:bg-paper">
                    {t(`nav.${n.key}`, locale)}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-line pt-3">
                <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-mist">
                  <Icon.Globe size={13} className="mr-1 inline" />
                </p>
                <div className="flex gap-2 px-2">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocale(l as Locale)}
                      className={`rounded-lg border px-3 py-1.5 text-sm ${
                        locale === l ? "border-brand bg-brand-soft font-semibold text-brand" : "border-line text-ink"
                      }`}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-line p-4">
              <Link href="/contact" className="btn btn-primary w-full">
                {t("cta.getQuote", locale)} <Icon.ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
