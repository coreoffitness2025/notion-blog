"use client";

import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

const skinIcons = [
  <svg key="hair" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0" /></svg>,
  <svg key="outfit" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>,
  <svg key="shoes" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>,
  <svg key="acc" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>,
];

export default function PointsCustomization({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-[var(--section-py)] px-[var(--section-px)] bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[length:var(--text-heading)] font-bold text-gray-800 mb-3 tracking-tight">
            {dict.points.title}
          </h2>
          <p className="text-base text-gray-500">{dict.points.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-10 md:mb-16">
          {dict.points.steps.map((s, i) => (
            <div key={s.step} className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-xs font-medium text-gray-300 block mb-1">
                  {s.step}
                </span>
                <span className="text-base font-semibold text-gray-800 block">
                  {s.title}
                </span>
                <span className="text-xs text-gray-400 mt-1 block">
                  {s.sub}
                </span>
              </motion.div>

              {i < 2 && (
                <svg
                  className="w-4 h-4 text-gray-300 shrink-0 rotate-90 sm:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-base font-medium text-gray-600 mb-8">
            {dict.points.skinGalleryTitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 w-full max-w-[800px]">
            {dict.points.skins.map((skin, i) => (
              <motion.div
                key={skin.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex flex-col items-center bg-gray-50 rounded-2xl p-4 md:p-6 lg:p-8"
              >
                <span className="absolute top-3 right-3 text-[10px] font-medium text-white bg-gray-400 rounded-full px-2 py-0.5">
                  {dict.points.comingSoon}
                </span>
                <div className="text-gray-300 mb-4">
                  {skinIcons[i]}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {skin.name}
                </span>
                <span className="text-xs text-gray-400 mt-1 text-center">
                  {skin.desc}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-6">
            {dict.points.collectMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
