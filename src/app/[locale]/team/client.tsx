"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const careerIcons = [
  <svg key="0" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  <svg key="1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
];

const fitnessIcons = [
  <svg key="0" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
      {children}
    </span>
  );
}

function GradientDivider() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}

export default function TeamPageClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <div className="bg-white">
      {/* Hero — minimal */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[720px] mx-auto"
        >
          <h1 className="text-[clamp(2rem,4vw+0.5rem,3.25rem)] font-bold text-gray-900 tracking-tight">
            {dict.team.title}
          </h1>
        </motion.div>
      </section>

      <GradientDivider />

      {/* Mission */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[720px] mx-auto"
        >
          <div className="mb-10 md:mb-12">
            <SectionLabel>{dict.team.missionLabel}</SectionLabel>
          </div>

          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] font-bold text-gray-900 leading-[1.2] tracking-tight mb-8 md:mb-10 whitespace-pre-line">
            {dict.team.missionHeadline}
          </h2>

          <p className="text-[clamp(1rem,0.5vw+0.875rem,1.25rem)] text-gray-500 leading-[1.8] whitespace-pre-line">
            {dict.team.missionText}
          </p>
        </motion.div>
      </section>

      <GradientDivider />

      {/* Vision */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[720px] mx-auto"
        >
          <div className="mb-10 md:mb-12">
            <SectionLabel>{dict.team.visionLabel}</SectionLabel>
          </div>

          <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] font-bold text-gray-900 leading-[1.2] tracking-tight mb-8 md:mb-10">
            {dict.team.visionHeadline}
          </h2>

          <p className="text-[clamp(1rem,0.5vw+0.875rem,1.25rem)] text-gray-500 leading-[1.8] whitespace-pre-line">
            {dict.team.visionText}
          </p>
        </motion.div>
      </section>

      <GradientDivider />

      {/* Team */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[720px] mx-auto"
        >
          <div className="mb-10 md:mb-12">
            <SectionLabel>{dict.team.teamLabel}</SectionLabel>
          </div>

          {/* Person card */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                <Image
                  src="/coach/male_3_face.png"
                  alt="James"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-0.5">
                  James
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Founder & Developer
                </p>

                {/* Career */}
                <div className="mb-5">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-3">
                    Career
                  </p>
                  <div className="space-y-2">
                    {dict.team.careers.map((label, i) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 text-gray-600"
                      >
                        <span className="text-gray-300">
                          {careerIcons[i]}
                        </span>
                        <span className="text-[13px] font-medium">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fitness */}
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-3">
                    Fitness
                  </p>
                  <div className="space-y-2">
                    {dict.team.fitness.map((label, i) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 text-gray-600"
                      >
                        <span className="text-gray-300">
                          {fitnessIcons[i]}
                        </span>
                        <span className="text-[13px] font-medium">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="pb-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400 mb-5">
            {dict.team.contactCta}
          </p>
          <a
            href="mailto:coreoffitness2025@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            {dict.team.contactBtn}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
