"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

const screenshotFiles = [
  { name: "01-coach-k.png", alt: "AI Coach" },
  { name: "02-coach-jane.png", alt: "Coach Customizing" },
  { name: "03-workout.png", alt: "Workout Input" },
  { name: "04-nutrition.png", alt: "Nutrition Tracking" },
  { name: "05-dashboard.png", alt: "Home Dashboard" },
  { name: "06-trainer-mode.png", alt: "Trainer Mode" },
];

export default function RecordingUI({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const dir = locale === "ko" ? "/store-screenshots" : "/store-screenshots-en";
  const screenshots = screenshotFiles.map((f) => ({
    src: `${dir}/${f.name}`,
    alt: f.alt,
  }));

  const doubled = [...screenshots, ...screenshots];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.recording.title}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            {dict.recording.subtitle1}
            <br className="hidden sm:block" />
            {dict.recording.subtitle2}
          </p>
        </motion.div>
      </div>

      {/* 무한 자동 스크롤 + 양쪽 페이드 그래디언트 */}
      <div className="relative group">
        {/* 왼쪽 페이드 */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* 오른쪽 페이드 */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((shot, i) => (
            <div key={`${shot.src}-${i}`} className="flex-shrink-0">
              <div className="relative w-[200px] h-[432px] sm:w-[220px] sm:h-[476px] md:w-[260px] md:h-[562px] lg:w-[300px] lg:h-[649px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
