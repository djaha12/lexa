import { cookies } from "next/headers";
import { COOKIE, defaultLocale, isLocale, type Locale } from "./config";

/** Read the active locale from the cookie on the server. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const v = store.get(COOKIE)?.value;
  return isLocale(v) ? v : defaultLocale;
}
