import { getDictionary } from "@/lib/i18n";
import OneRmClient from "./client";

export default async function OneRmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <OneRmClient dict={dict} locale={locale} />;
}
