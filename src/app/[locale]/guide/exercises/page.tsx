import { getDictionary } from "@/lib/i18n";
import ExercisesClient from "./client";

export default async function ExercisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <ExercisesClient dict={dict} locale={locale} />;
}
