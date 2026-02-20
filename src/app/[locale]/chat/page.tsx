import type { Metadata } from "next";
import { getDictionary, locales } from "@/lib/i18n";
import ChatPageClient from "./ChatPageClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isKo = locale === "ko";

  return {
    title: dict.chat.metaTitle,
    description: dict.chat.metaDesc,
    alternates: {
      languages: {
        ko: `${siteUrl}/chat`,
        en: `${siteUrl}/en/chat`,
      },
    },
    openGraph: {
      title: dict.chat.metaTitle,
      description: dict.chat.metaDesc,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
      url: isKo ? `${siteUrl}/chat` : `${siteUrl}/en/chat`,
    },
  };
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return <ChatPageClient locale={locale} dict={dict} />;
}
