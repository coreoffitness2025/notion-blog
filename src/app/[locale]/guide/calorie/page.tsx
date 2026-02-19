import { getDictionary } from "@/lib/i18n";
import CalorieClient from "./client";

export default async function CaloriePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <CalorieClient dict={dict} locale={locale} />;
}
