"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COACHES, PERSONALITIES, Coach, PersonalityOption } from "@/lib/chat/characters";
import type { Dictionary } from "@/lib/i18n";

function CoachCard({
  coach,
  locale,
  dict,
}: {
  coach: Coach;
  locale: string;
  dict: Dictionary;
}) {
  const [selected, setSelected] = useState<PersonalityOption>(PERSONALITIES[0]);
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";
  const chatHref = `${prefix}/chat/${coach.gender}-${selected.type}`;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
      {/* Coach image + info */}
      <div className="relative flex flex-col items-center pt-8 pb-4">
        <div className="relative w-40 h-56 md:w-48 md:h-64">
          <Image
            src={coach.cardImage}
            alt={coach.name[loc]}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 160px, 192px"
          />
        </div>
        <h3 className="text-xl font-bold text-white mt-3">
          {coach.name[loc]}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          {coach.description[loc]}
        </p>
      </div>

      {/* Personality tabs */}
      <div className="px-4 pb-2">
        <p className="text-xs text-gray-500 mb-2 text-center">
          {dict.chat.pickPersonality}
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {PERSONALITIES.map((p) => (
            <button
              key={p.type}
              onClick={() => setSelected(p)}
              className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl text-center transition-all ${
                selected.type === p.type
                  ? "bg-purple-500/20 border border-purple-500/40"
                  : "bg-white/5 border border-transparent hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{p.emoji}</span>
              <span
                className={`text-[11px] font-medium ${
                  selected.type === p.type ? "text-purple-300" : "text-gray-400"
                }`}
              >
                {p.label[loc]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected personality description + preview */}
      <div className="px-4 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.type}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="bg-white/5 rounded-xl p-3 mb-3"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 bg-gray-700">
                <Image
                  src={coach.avatarImage}
                  alt=""
                  width={28}
                  height={28}
                  className={`w-full h-full ${
                    coach.gender === "male"
                      ? "object-cover object-[center_15%] scale-[2.5]"
                      : "object-cover object-top"
                  }`}
                />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {coach.name[loc]} · {selected.label[loc]}
                </p>
                <p className="text-sm text-gray-300 mt-0.5 italic">
                  &ldquo;{dict.chat.personalityPreviews[selected.type]}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <Link
          href={chatHref}
          className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          {dict.chat.startChat}
        </Link>
      </div>
    </div>
  );
}

export default function CharacterGrid({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
    >
      <CoachCard coach={COACHES.male} locale={locale} dict={dict} />
      <CoachCard coach={COACHES.female} locale={locale} dict={dict} />
    </motion.div>
  );
}
