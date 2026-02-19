import { getDictionary, type Dictionary, type Locale } from "./i18n";

/**
 * Simple wrapper for getting dictionary from locale.
 * No React hooks — works in both server and client components during SSG.
 */
export function useDictionary(locale: string): Dictionary {
  return getDictionary(locale);
}

export function getPrefix(locale: string): string {
  return locale === "ko" ? "" : `/${locale}`;
}
