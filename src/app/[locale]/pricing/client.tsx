"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

export default function PricingClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.pricing;
  const isKo = locale === "ko";
  const [yearly, setYearly] = useState(false);

  const currency = isKo ? "₩" : "$";

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] text-sm font-medium rounded-full mb-4">
            {t.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-gray-500 text-lg mb-8">{t.subtitle}</p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 border border-gray-200">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? "bg-gray-800 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.monthly}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                yearly
                  ? "bg-gray-800 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.yearly}
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {t.yearlyDiscount}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.plans.map((plan, i) => {
            const isPro = plan.id === "pro";
            const isMax = plan.id === "max";
            const isFree = plan.id === "free";
            const price = yearly ? plan.priceYearly : plan.price;
            const period = yearly ? t.perYear : t.perMonth;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all ${
                  isPro
                    ? "border-[var(--corevia-pro)] shadow-lg scale-[1.02] md:scale-105"
                    : isMax
                      ? "border-[var(--corevia-max)] shadow-md"
                      : "border-gray-200"
                }`}
              >
                {/* Badge */}
                {isPro && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--corevia-pro)] text-white text-xs font-bold rounded-full">
                    {t.mostPopular}
                  </span>
                )}
                {isMax && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--corevia-max)] text-white text-xs font-bold rounded-full">
                    {t.best}
                  </span>
                )}

                {/* Plan Name */}
                <h3
                  className={`text-xl font-bold mb-1 ${
                    isPro
                      ? "text-[var(--corevia-pro)]"
                      : isMax
                        ? "text-[var(--corevia-max)]"
                        : "text-gray-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {isFree ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-800">
                        {t.free}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-800">
                        {currency}
                        {price}
                      </span>
                      <span className="text-gray-400 text-sm">{period}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all mb-6 ${
                    isPro
                      ? "bg-[var(--corevia-pro)] text-white hover:opacity-90"
                      : isMax
                        ? "bg-[var(--corevia-max)] text-white hover:opacity-90"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {isFree ? t.getStarted : t.upgradeCta}
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isPro
                            ? "text-[var(--corevia-pro)]"
                            : isMax
                              ? "text-[var(--corevia-max)]"
                              : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            {t.comparisonTitle}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-sm font-medium text-gray-500 w-2/5" />
                  <th className="py-3 px-2 text-center text-sm font-bold text-gray-800">
                    Free
                  </th>
                  <th className="py-3 px-2 text-center text-sm font-bold text-[var(--corevia-pro)]">
                    Pro
                  </th>
                  <th className="py-3 px-2 text-center text-sm font-bold text-[var(--corevia-max)]">
                    Max
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.categories.map((category) => (
                  <>
                    <tr key={category.name}>
                      <td
                        colSpan={4}
                        className="pt-6 pb-2 text-xs font-bold text-gray-400 uppercase tracking-wider"
                      >
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-b border-gray-50"
                      >
                        <td className="py-3 pr-4 text-sm text-gray-700">
                          {feature.name}
                        </td>
                        <td className="py-3 px-2 text-center">
                          {feature.free ? (
                            <CheckIcon className="text-gray-400" />
                          ) : (
                            <XIcon />
                          )}
                        </td>
                        <td className="py-3 px-2 text-center">
                          {feature.pro ? (
                            <CheckIcon className="text-[var(--corevia-pro)]" />
                          ) : (
                            <XIcon />
                          )}
                        </td>
                        <td className="py-3 px-2 text-center">
                          {feature.max ? (
                            <CheckIcon className="text-[var(--corevia-max)]" />
                          ) : (
                            <XIcon />
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--corevia-bg)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            {t.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {t.ctaTitle}
          </h2>
          <p className="text-gray-500 mb-8">{t.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white font-medium px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all"
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
            <Link
              href={`${prefix}/guide`}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-600 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
            >
              {dict.nav.guide}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 mx-auto ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 mx-auto text-gray-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  );
}
