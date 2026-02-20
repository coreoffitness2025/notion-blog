import type { Metadata } from "next";
import { getDictionary, locales } from "@/lib/i18n";
import CharacterGrid from "./CharacterGrid";

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

  return (
    <section className="min-h-[calc(100vh-64px)] bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.chat.heroTitle}
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            {dict.chat.heroSubtitle}
          </p>
        </div>

        <CharacterGrid locale={locale} dict={dict} />

        <p className="text-center text-sm text-gray-400 mt-10">
          {dict.chat.freeNotice}
        </p>
      </div>
    </section>
  );
}
