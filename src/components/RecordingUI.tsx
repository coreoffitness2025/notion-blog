"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function RecordingUI({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  const screens = [
    {
      src: "/app-ui-dashboard.png",
      alt: dict.recording.dashboardAlt,
      label: dict.recording.dashboardLabel,
      desc: dict.recording.dashboardDesc,
    },
    {
      src: "/app-ui-workout.png",
      alt: dict.recording.workoutAlt,
      label: dict.recording.workoutLabel,
      desc: dict.recording.workoutDesc,
    },
    {
      src: "/app-ui-food.png",
      alt: dict.recording.dietAlt,
      label: dict.recording.dietLabel,
      desc: dict.recording.dietDesc,
    },
  ];

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

        <div className="flex items-start justify-center gap-6 md:gap-10">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center min-w-0"
            >
              <div className="relative w-[110px] h-[196px] sm:w-[180px] sm:h-[320px] md:w-[240px] md:h-[428px] lg:w-[280px] lg:h-[500px]">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 110px, (max-width: 768px) 180px, (max-width: 1024px) 240px, 280px"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-gray-800">
                {screen.label}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 text-center">
                {screen.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
