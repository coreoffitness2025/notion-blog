import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/contact";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
  const dict = getDictionary(locale);

  return {
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDesc,
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const email = "coreoffitness2025@gmail.com";

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      <div className="max-w-[800px] mx-auto px-4 pt-20 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4">
            {dict.contact.title}
          </h1>
          <p className="text-lg text-gray-500">
            {dict.contact.subtitle1}
            <br />
            {dict.contact.subtitle2}
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 text-center mb-10">
          <p className="text-sm text-gray-400 mb-2">{dict.contact.emailLabel}</p>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6 break-all">
            {email}
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-block px-8 py-3.5 bg-[var(--corevia-primary)] text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            {dict.contact.emailButton}
          </a>
        </div>

        {/* Contact Types */}
        <div className="grid gap-4 md:grid-cols-3 mb-14">
          {dict.contact.categories.map((cat, i) => (
            <div key={cat.title} className="bg-white border border-gray-100 rounded-xl p-6">
              <div className="w-10 h-10 bg-[var(--corevia-primary)]/10 rounded-lg flex items-center justify-center mb-4">
                {i === 0 && (
                  <svg className="w-5 h-5 text-[var(--corevia-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-3">{dict.contact.footerLabel}</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href={`${prefix}/coach`} className="text-sm text-[var(--corevia-primary)] font-medium hover:underline">
              {dict.contact.footerLinks.aiCoach}
            </Link>
            <Link href={`${prefix}/guide`} className="text-sm text-[var(--corevia-primary)] font-medium hover:underline">
              {dict.contact.footerLinks.guide}
            </Link>
            <Link href={`${prefix}/posts`} className="text-sm text-[var(--corevia-primary)] font-medium hover:underline">
              {dict.contact.footerLinks.blog}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
