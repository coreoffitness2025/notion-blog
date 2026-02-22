"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

const careerIcons = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
];

const fitnessIcons = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
];

export default function TeamPageClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <section className="bg-white pt-20 pb-24 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4">{dict.team.title}</h1>
          {dict.team.subtitle && <p className="text-lg text-gray-500">{dict.team.subtitle}</p>}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center mb-24">
          {/* Mission */}
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">{dict.team.missionLabel}</p>
          <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed max-w-[600px] mx-auto">
            {dict.team.missionText.split(/(Core|Via)/g).map((part, i) =>
              part === "Core" || part === "Via" ? (
                <span key={i} className="text-[#4285F4]">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>

          <div className="mb-32 md:mb-40" />

          {/* Vision */}
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">{dict.team.visionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{dict.team.visionHeadline}</h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-[520px] mx-auto">
            {dict.team.visionText.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="mb-32 md:mb-40" />

          {/* Closing */}
          <p className="text-lg font-semibold text-gray-800">{dict.team.closing}</p>
        </motion.div>

        {/* About Team */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{dict.team.aboutTitle}</h2>
          <p className="text-sm text-gray-500 text-center mb-8">{dict.team.aboutDesc}</p>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image src="/coach/male_3_face.png" alt="Coach K" width={112} height={112} className="object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">James</h3>
                <p className="text-sm text-gray-400 mb-6">Founder & Developer</p>
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Career</p>
                  <div className="space-y-2.5">
                    {dict.team.careers.map((label, i) => (
                      <div key={label} className="flex items-center gap-3 text-gray-700">
                        <span className="text-gray-400">{careerIcons[i]}</span>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Fitness Domain</p>
                  <div className="space-y-2.5">
                    {dict.team.fitness.map((label, i) => (
                      <div key={label} className="flex items-center gap-3 text-gray-700">
                        <span className="text-gray-400">{fitnessIcons[i]}</span>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-16">
          <p className="text-sm text-gray-400 mb-4">{dict.team.contactCta}</p>
          <a href="mailto:coreoffitness2025@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4285F4] text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors">
            {dict.team.contactBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
