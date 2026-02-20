"use client";

import { motion } from "framer-motion";
import CharacterCard from "@/components/chat/CharacterCard";
import { CHARACTERS } from "@/lib/chat/characters";
import type { Dictionary } from "@/lib/i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function CharacterGrid({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {CHARACTERS.map((character) => (
        <motion.div key={character.id} variants={item}>
          <CharacterCard
            character={character}
            locale={locale}
            ctaLabel={dict.chat.startChat}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
