import ko from "./dictionaries/ko";
import en from "./dictionaries/en";

export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

export type Dictionary = typeof ko;

const dictionaries: Record<Locale, Dictionary> = { ko, en };

export function getDictionary(locale: string): Dictionary {
  if (locale in dictionaries) return dictionaries[locale as Locale];
  return dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
