"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { COOKIE, defaultLocale, type Locale } from "./config";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<Ctx>({ locale: defaultLocale, setLocale: () => {} });

export function LocaleProvider({
  initial,
  children,
}: {
  initial: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initial);

  const setLocale = useCallback(
    (l: Locale) => {
      document.cookie = `${COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
      setLocaleState(l);
      if (typeof document !== "undefined") document.documentElement.lang = l;
      // re-render server components with the new cookie
      router.refresh();
    },
    [router]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
