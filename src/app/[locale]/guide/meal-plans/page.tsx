import { getDictionary } from "@/lib/i18n";
import MealPlansClient from "./client";

export default async function MealPlansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <MealPlansClient dict={dict} locale={locale} />;
}
