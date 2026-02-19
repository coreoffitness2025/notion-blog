import { getDictionary } from "@/lib/i18n";
import HandbookClient from "./client";

export default async function HandbookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <HandbookClient dict={dict} locale={locale} />;
}
