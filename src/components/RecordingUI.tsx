"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";
import { useRef } from "react";

const screenshots = [
  { src: "/store-screenshots/01-coach-k.png", alt: "AI Coach" },
  { src: "/store-screenshots/02-coach-jane.png", alt: "Coach Customizing" },
  { src: "/store-screenshots/03-workout.png", alt: "Workout Input" },
  { src: "/store-screenshots/04-nutrition.png", alt: "Nutrition Tracking" },
  { src: "/store-screenshots/05-dashboard.png", alt: "Home Dashboard" },
  { src: "/store-screenshots/06-trainer-mode.png", alt: "Trainer Mode" },
];

export default function RecordingUI({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.recording.title}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            {dict.recording.subtitle1}
            <br className="hidden sm:block" />
            {dict.recording.subtitle2}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 snap-center"
            >
              <div className="relative w-[200px] h-[432px] sm:w-[240px] sm:h-[519px] md:w-[280px] md:h-[606px] lg:w-[320px] lg:h-[692px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
