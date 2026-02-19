"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

const images = [
  "/coach/male_3_side.png",
  "/coach/female_3_front.png",
  "/coach/male_3_front.png",
  "/coach/female_3_side.png",
];

export default function CoachShowcase({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const [active, setActive] = useState<string>("warm");
  const activeIdx = dict.coach.personalities.findIndex((p) => p.id === active);
  const current = dict.coach.personalities[activeIdx];

  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.coach.title}
          </h2>
          <p className="text-gray-500 text-base">{dict.coach.subtitle}</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {dict.coach.personalities.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === p.id
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {p.emoji} {p.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
          >
            <div className="relative w-52 h-80 md:w-64 md:h-96 shrink-0">
              <Image
                src={images[activeIdx]}
                alt={`${current.label} ${dict.coach.coachAlt}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 208px, 256px"
              />
            </div>

            <div className="w-full md:flex-1 max-w-lg space-y-3">
              {current.chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: msg.role === "coach" ? -16 : 16,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                      msg.role === "coach"
                        ? "bg-gray-100 text-gray-700 rounded-tl-md"
                        : "bg-gray-800 text-white rounded-tr-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
