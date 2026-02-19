"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-gray-800 group-hover:text-gray-600 transition-colors pr-4">
          {q}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">
          {dict.faq.title}
        </h2>
        <div>
          {dict.faq.items.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
