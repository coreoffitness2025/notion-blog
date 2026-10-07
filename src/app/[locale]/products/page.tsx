import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// 제품 개요 — 메뉴 'Product' 의 첫 화면 (2026-10-08 대표: 애플리케이션 / 전자책 / 스마트 체중계로 구분)
// 기존 /shop(Coming Soon) 은 next.config 에서 여기로 보낸다.

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/products";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "제품 | CoreVia Fitness" : "Products | CoreVia Fitness",
    description: isKo
      ? "코비아 피트니스 앱·코비아 리커버리 앱, 전자책 Core of Fitness, 앱에 바로 기록되는 코비아 스마트 체중계."
      : "CoreVia Fitness and CoreVia Recovery apps, the Core of Fitness ebook, and the CoreVia smart scale that records straight to the app.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const prefix = isKo ? "" : `/${locale}`;

  const items = [
    {
      href: `${prefix}/products/apps`,
      image: "/icon-512.png",
      imageAlt: "CoreVia Fitness",
      label: isKo ? "애플리케이션" : "Apps",
      title: isKo ? "코비아 피트니스 · 코비아 리커버리" : "CoreVia Fitness · CoreVia Recovery",
      desc: isKo
        ? "운동·식단을 함께 기록하는 피트니스 앱, 통증과 재활 운동을 기록하는 리커버리 앱."
        : "A fitness app that logs workouts and meals together, and a recovery app that logs pain and rehab exercises.",
      meta: isKo ? "무료 다운로드" : "Free to download",
    },
    {
      href: `${prefix}/ebook`,
      image: "/ebook-cover.png",
      imageAlt: "Core of Fitness",
      label: isKo ? "전자책" : "Ebook",
      title: "Core of Fitness",
      desc: isKo
        ? "체중 감량과 근비대의 핵심을 정리한 PDF 전자책. 식단·운동 프로그램 수록."
        : "A PDF ebook on the essentials of fat loss and muscle gain, with meal and workout programs.",
      meta: isKo ? "20,000원" : "₩20,000",
    },
    {
      href: `${prefix}/products/scale`,
      image: "/products/scale-photo.jpg",
      imageAlt: isKo ? "코비아 스마트 체중계" : "CoreVia smart scale",
      label: isKo ? "스마트 체중계" : "Smart scale",
      title: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale",
      desc: isKo
        ? "올라서면 몸무게와 체성분 15가지가 코비아 피트니스 앱에 날짜별로 쌓입니다."
        : "Step on and your weight plus 15 body composition metrics are saved by date in the CoreVia Fitness app.",
      meta: isKo ? "24,000원 · 무료배송" : "₩24,000 · Free shipping (Korea)",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">
            {isKo ? "코비아의 제품" : "CoreVia Products"}
          </h1>
          <p className="text-gray-500">
            {isKo
              ? "기록하는 앱, 읽는 책, 재는 기기 — 하나의 기록으로 이어집니다."
              : "An app to record, a book to read, a device to measure — all in one record."}
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={480}
                  height={480}
                  className="w-full h-full object-contain p-8 group-hover:scale-[1.03] transition-transform"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-[var(--corevia-primary)] mb-2">
                  {item.label}
                </span>
                <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{item.meta}</span>
                  <span className="text-sm font-medium text-[var(--corevia-primary)]">
                    {isKo ? "자세히 보기 →" : "Learn more →"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
