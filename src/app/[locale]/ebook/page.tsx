import { getDictionary } from "@/lib/i18n";
import EbookPageClient from "./client";

export default async function EbookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <EbookPageClient dict={dict} locale={locale} />;
}
