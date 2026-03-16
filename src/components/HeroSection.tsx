"use client";

import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function HeroSection({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-[var(--corevia-bg)] py-[var(--section-py)] px-[var(--section-px)]">
      <div className="absolute top-0 right-0 w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] bg-gray-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1120px] mx-auto relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[length:var(--text-display)] font-bold text-gray-800 leading-[1.1] mb-4 md:mb-6 tracking-tight"
          >
            {dict.hero.title1}
            <br />
            <span className="text-[var(--corevia-primary)]">
              {dict.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[length:var(--text-body-lg)] text-gray-500 leading-relaxed mb-8 md:mb-12 max-w-lg md:max-w-xl mx-auto"
          >
            {dict.hero.subtitle1}
            <br className="hidden sm:block" />
            {dict.hero.subtitle2}
            {(dict.hero.subtext1 || dict.hero.subtext2) && (
              <>
                <br />
                <span className="text-sm text-gray-400 mt-1 inline-block">
                  {dict.hero.subtext1}
                  {dict.hero.subtext1 && dict.hero.subtext2 && <br className="hidden sm:block" />}
                  {dict.hero.subtext2}
                </span>
              </>
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href={locale === "en" ? "https://apps.apple.com/us/app/corevia-fitness/id6753667196" : "https://apps.apple.com/app/corevia-fitness/id6753667196"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-medium px-8 py-4 rounded-2xl text-base hover:bg-gray-800 transition-all shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white font-medium px-8 py-4 rounded-2xl text-base hover:bg-blue-600 transition-all shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Google Play
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-600 font-medium px-8 py-4 rounded-2xl text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              {dict.hero.explore}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
