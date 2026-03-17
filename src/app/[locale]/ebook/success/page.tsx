import { getDictionary } from "@/lib/i18n";
import EbookSuccessClient from "./client";

export default async function EbookSuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <EbookSuccessClient dict={dict} />;
}
