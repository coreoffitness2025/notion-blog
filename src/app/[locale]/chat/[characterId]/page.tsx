import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { parseCharacterId, getCoach, PERSONALITIES } from "@/lib/chat/characters";
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
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";
  const parsed = parseCharacterId(characterId);

  if (!parsed) return {};

  const coach = getCoach(parsed.gender);
  const personality = PERSONALITIES.find((p) => p.type === parsed.personality);
  const title = `${coach.name[loc]} (${personality?.label[loc]}) - ${dict.chat.metaTitle}`;

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
  const parsed = parseCharacterId(characterId);

  if (!parsed) notFound();

  const dict = getDictionary(locale);

  return <ChatInterface locale={locale} characterId={characterId} dict={dict} />;
}
