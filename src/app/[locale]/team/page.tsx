import { getDictionary } from "@/lib/i18n";
import TeamPageClient from "./client";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <TeamPageClient dict={dict} locale={locale} />;
}
