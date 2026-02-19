"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

export default function EbookPageClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {/* Cover Image */}
            <div className="flex-shrink-0">
              <div className="w-[260px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/ebook-cover.png"
                  alt={dict.ebook.title}
                  width={260}
                  height={368}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-xs font-semibold mb-4">
                {dict.ebook.badge}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">
                {dict.ebook.title}
              </h1>
              <p className="text-lg text-gray-500 mb-2">{dict.ebook.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-6">
                {dict.ebook.description1}
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                {dict.ebook.description2}
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                {dict.ebook.description3}
              </p>
              <p className="text-xs text-gray-400">
                {dict.ebook.author}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="pb-12 px-4">
        <div className="max-w-[600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {dict.ebook.highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100"
              >
                <p className="text-2xl font-bold text-[var(--corevia-primary)]">
                  {h.number}
                </p>
                <p className="text-xs text-gray-400 mt-1">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOC Preview Images */}
      <section className="pb-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-xl font-bold text-gray-800 text-center mb-8"
          >
            {dict.ebook.tocTitle}
          </motion.h2>

          {/* TOC Images */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-10"
          >
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-[380px] mx-auto md:mx-0">
              <Image
                src="/ebook-toc1.png"
                alt={`${dict.ebook.tocTitle} 1`}
                width={380}
                height={536}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-[380px] mx-auto md:mx-0">
              <Image
                src="/ebook-toc2.png"
                alt={`${dict.ebook.tocTitle} 2`}
                width={380}
                height={536}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* TOC Text */}
          <div className="space-y-4 max-w-[700px] mx-auto">
            {dict.ebook.chapters.map((ch, i) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm font-bold text-[var(--corevia-primary)]">
                    {ch.num}.
                  </span>
                  <h3 className="text-base font-semibold text-gray-800">
                    {ch.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ch.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-8">
            {dict.ebook.recommendTitle}
          </h2>
          <div className="space-y-3">
            {dict.ebook.recommendations.map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 bg-[var(--corevia-bg)] rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 text-[var(--corevia-primary)] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-sm text-gray-400 mb-2">{dict.ebook.priceLabel}</p>
            <p className="text-3xl font-bold text-gray-800 mb-1">
              {dict.ebook.price}
            </p>
            <p className="text-xs text-gray-400 mb-6">{dict.ebook.deliveryNote}</p>

            {/* TODO: Stripe Checkout 연동 후 href를 /api/checkout으로 변경 */}
            <button
              disabled
              className="w-full py-4 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl opacity-50 cursor-not-allowed mb-3"
            >
              {dict.ebook.buyButton}
            </button>
            <p className="text-xs text-gray-400">
              {dict.ebook.comingSoon}
            </p>
          </div>

          <div className="text-center mt-6">
            <Link
              href={`${prefix}/guide/handbook`}
              className="text-sm text-gray-500 hover:text-[var(--corevia-primary)] transition-colors"
            >
              {dict.ebook.freeHandbook}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
