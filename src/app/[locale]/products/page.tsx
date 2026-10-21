import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// 제품 개요 — 메뉴 'Product' 의 첫 화면 (2026-10-08 대표: 애플리케이션 / 전자책 / 체중계로 구분 · 10/11 블루투스 체중계로 개칭)
// 10/21 대표 개편: 코비아 SW(코비아 CRM) / 애플리케이션(코비아 피트니스·코비아 리커버리) / 커머스(코비아 스마트 체중계). 전자책은 목록에서 빠짐(/ebook 페이지는 그대로).
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
      ? "웰니스 센터를 위한 코비아 CRM, 코비아 피트니스·코비아 리커버리 앱, 앱에 바로 기록되는 코비아 스마트 체중계."
      : "CoreVia CRM for wellness centers, the CoreVia Fitness and CoreVia Recovery apps, and the CoreVia Smart Scale that records straight to the app.",
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

  const store = (id: string, detail: string) =>
    `https://smartstore.naver.com/coreviafitness_store/products/${id}?nt_source=site&nt_medium=products&nt_detail=${detail}`;
  const quick = [
    { href: "/go?app=fitness&c=site-products-top", label: isKo ? "피트니스 앱 받기" : "Get CoreVia Fitness", sub: isKo ? "무료" : "Free", primary: true, external: true },
    { href: "/go?app=recovery&c=site-products-top", label: isKo ? "리커버리 앱 받기" : "Get CoreVia Recovery", sub: isKo ? "무료" : "Free", primary: true, external: true },
    { href: store("13779186739", "scale-top"), label: isKo ? "체중계 구매" : "Buy the scale", sub: isKo ? "24,000원 · 스마트스토어" : "₩24,000 · Naver Smart Store", primary: false, external: true },
    { href: `${prefix}/products/crm#inquiry`, label: isKo ? "CRM 도입 문의" : "CRM inquiry", sub: isKo ? "베타 센터 모집" : "Beta centers wanted", primary: false, external: false },
  ];

  type Item = { href: string; image: string; imageAlt: string; cover?: boolean; title: string; desc: string; meta: string };
  const groups: { label: string; desc: string; items: Item[] }[] = [
    {
      label: isKo ? "코비아 SW" : "CoreVia SW",
      desc: isKo ? "센터를 위한 소프트웨어" : "Software for centers",
      items: [
        {
          href: `${prefix}/products/crm`,
          image: "/crm/today.webp",
          imageAlt: isKo ? "코비아 CRM 오늘 관리 화면" : "CoreVia CRM today screen",
          cover: true,
          title: isKo ? "코비아 CRM" : "CoreVia CRM",
          desc: isKo
            ? "웰니스 센터를 위한 웹 CRM. 회원권 판매부터 급여 정산까지, 회원 앱 운동 기록과 측정 추이를 한 화면에서."
            : "A web CRM for wellness centers — from memberships to payroll, with members' app workouts and measurements on one screen.",
          meta: isKo ? "베타 · 도입 문의" : "Beta · Contact us",
        },
      ],
    },
    {
      label: isKo ? "애플리케이션" : "Apps",
      desc: isKo ? "무료로 시작하는 기록 앱" : "Logging apps, free to start",
      items: [
        {
          href: `${prefix}/products/apps#fitness`,
          image: "/icon-512.png",
          imageAlt: "CoreVia Fitness",
          title: isKo ? "코비아 피트니스" : "CoreVia Fitness",
          desc: isKo ? "운동·식단·체중을 함께 기록하고 코치진 피드백을 받는 피트니스 앱." : "A fitness app that logs workouts, meals and weight together, with coaching team feedback.",
          meta: isKo ? "무료 다운로드" : "Free to download",
        },
        {
          href: `${prefix}/products/apps#recovery`,
          image: "/products/recovery-icon.png",
          imageAlt: "CoreVia Recovery",
          title: isKo ? "코비아 리커버리" : "CoreVia Recovery",
          desc: isKo ? "통증 일지와 재활 운동, 가동범위 사진 기록을 남기는 회복 기록 앱." : "A recovery log for pain, rehab exercises and range-of-motion photos.",
          meta: isKo ? "무료 다운로드" : "Free to download",
        },
      ],
    },
    {
      label: isKo ? "커머스" : "Commerce",
      desc: isKo ? "앱과 이어지는 기기" : "Devices that connect to the app",
      items: [
        {
          href: `${prefix}/products/scale`,
          image: "/products/scale-photo.jpg",
          imageAlt: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale",
          title: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale",
          desc: isKo
            ? "올라서면 몸무게가 코비아 피트니스 앱에 날짜별로 쌓입니다. 앱 Pro 3개월 포함."
            : "Step on and your weight is saved by date in the CoreVia Fitness app. Includes 3 months of Pro.",
          meta: isKo ? "24,000원 · 무료배송" : "₩24,000 · Free shipping (Korea)",
        },
      ],
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
              ? "센터를 돕는 소프트웨어, 기록하는 앱, 재는 기기 — 하나의 기록으로 이어집니다."
              : "Software for centers, apps to record, a device to measure — all in one record."}
          </p>
          {/* 맨 위에서 바로 받기·구매 (2026-10-08 대표). 앱은 /go 가 기기에 맞는 스토어로 보낸다 */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[860px] mx-auto">
            {quick.map((q) => (
              <a
                key={q.href}
                href={q.href}
                target={q.external ? "_blank" : undefined}
                rel={q.external ? "noopener noreferrer" : undefined}
                className={`flex flex-col items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  q.primary
                    ? "bg-[var(--corevia-primary)] text-white"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                <span>{q.label}</span>
                <span className={`text-xs font-normal mt-0.5 ${q.primary ? "text-white/80" : "text-gray-500"}`}>{q.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-12">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-xl font-bold text-gray-800">{g.label}</h2>
                <span className="text-sm text-gray-400">{g.desc}</span>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {g.items.map((item) => (
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
                        className={`w-full h-full group-hover:scale-[1.03] transition-transform ${item.cover ? "object-cover object-left-top" : "object-contain p-8"}`}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-[var(--corevia-primary)] mb-2">{g.label}</span>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
