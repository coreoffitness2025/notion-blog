import { getDictionary } from "@/lib/i18n";
import ProgramsClient from "./client";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <ProgramsClient dict={dict} locale={locale} />;
}
