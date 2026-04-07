import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/shop";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "Shop | CoreVia Fitness" : "Shop | CoreVia Fitness",
    description: isKo
      ? "CoreVia Fitness만의 피트니스 상품이 곧 출시됩니다. 앱에서 포인트를 쌓고 할인받으세요."
      : "CoreVia Fitness products coming soon. Earn points in the app and get discounts.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {isKo ? "Coming Soon" : "Coming Soon"}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-2">
          {isKo
            ? "CoreVia Fitness만의 상품이 곧 출시됩니다."
            : "Exclusive CoreVia Fitness products are on the way."}
        </p>

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {isKo
            ? "앱을 사용해서 포인트를 쌓고, 출시 시 할인받으세요."
            : "Earn points in the app now and get discounts when we launch."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={isKo ? "https://apps.apple.com/app/corevia-fitness/id6753667196" : "https://apps.apple.com/us/app/corevia-fitness/id6753667196"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </main>
  );
}
