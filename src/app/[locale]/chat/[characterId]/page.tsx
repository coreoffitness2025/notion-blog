import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { getCharacterById } from "@/lib/chat/characters";
import { notFound } from "next/navigation";
import ChatInterface from "./ChatInterface";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; characterId: string }>;
}): Promise<Metadata> {
  const { locale, characterId } = await params;
  const dict = getDictionary(locale);
  const loc = locale === "en" ? "en" : "ko";
  const character = getCharacterById(characterId);

  if (!character) return {};

  const title = `${character.name[loc]} - ${dict.chat.metaTitle}`;

  return {
    title,
    description: dict.chat.metaDesc,
    alternates: {
      languages: {
        ko: `${siteUrl}/chat/${characterId}`,
        en: `${siteUrl}/en/chat/${characterId}`,
      },
    },
  };
}

export default async function ChatCharacterPage({
  params,
}: {
  params: Promise<{ locale: string; characterId: string }>;
}) {
  const { locale, characterId } = await params;
  const character = getCharacterById(characterId);

  if (!character) notFound();

  const dict = getDictionary(locale);

  return <ChatInterface locale={locale} characterId={characterId} dict={dict} />;
}
