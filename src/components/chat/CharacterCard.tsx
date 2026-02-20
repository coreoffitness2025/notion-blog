"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Character } from "@/lib/chat/characters";

interface CharacterCardProps {
  character: Character;
  locale: string;
  ctaLabel: string;
}

const personalityEmoji: Record<string, string> = {
  tough: "😤",
  cheerful: "🤗",
  cool: "🧊",
  balanced: "⚖️",
};

const personalityColor: Record<string, string> = {
  tough: "bg-red-50 text-red-600 border-red-200",
  cheerful: "bg-amber-50 text-amber-600 border-amber-200",
  cool: "bg-blue-50 text-blue-600 border-blue-200",
  balanced: "bg-green-50 text-green-600 border-green-200",
};

export default function CharacterCard({
  character,
  locale,
  ctaLabel,
}: CharacterCardProps) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const loc = locale === "en" ? "en" : "ko";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white flex items-end justify-center">
        <Image
          src={character.cardImage}
          alt={character.name[loc]}
          width={160}
          height={200}
          className="object-contain object-bottom"
          sizes="160px"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800 text-base">
            {character.name[loc]}
          </h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border ${personalityColor[character.personalityType]}`}
          >
            {personalityEmoji[character.personalityType]}{" "}
            {character.specialty[loc]}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          {character.description[loc]}
        </p>

        <Link
          href={`${prefix}/chat/${character.id}`}
          className="block w-full text-center py-2.5 bg-[var(--corevia-primary)] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}
