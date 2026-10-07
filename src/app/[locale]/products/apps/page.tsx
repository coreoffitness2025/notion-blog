import type { Metadata } from "next";
import Image from "next/image";

// 애플리케이션 소개 — 코비아 피트니스 + 코비아 리커버리 (2026-10-08)
// Recovery 문구는 '기록 도구'만: 치료·재활 효과 표방 금지(식약처 웰니스 판단기준, policy/recovery-no-exercise-prescription)
// 코치는 'AI 코치'가 아니라 '코치진'(policy/no-ai-emphasis). 출시된 기능만 적는다.

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/products/apps";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "애플리케이션 | CoreVia Fitness" : "Apps | CoreVia Fitness",
    description: isKo
      ? "운동·식단을 함께 기록하는 코비아 피트니스, 통증과 재활 운동을 기록하는 코비아 리커버리. 무료 다운로드."
      : "CoreVia Fitness logs workouts and meals together; CoreVia Recovery logs pain and rehab exercises. Free to download.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

function StoreButtons({ app, isKo }: { app: "fitness" | "recovery"; isKo: boolean }) {
  const c = `site-products-apps-${app}`;
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`/go?app=${app}&p=ios&c=${c}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
      >
        App Store
      </a>
      <a
        href={`/go?app=${app}&p=android&c=${c}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white text-sm font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        Google Play
      </a>
      <span className="sr-only">{isKo ? "무료 다운로드" : "Free download"}</span>
    </div>
  );
}

function FeatureList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((f) => (
        <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-5">
          <h3 className="text-base font-bold text-gray-800 mb-1.5">{f.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default async function AppsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const shots = isKo ? "/store-screenshots" : "/store-screenshots-en";

  const fitness = isKo
    ? [
        { title: "점진적 과부하 기록", desc: "지난 무게·횟수·볼륨을 자동으로 비교해 오늘 더 나은 기록을 세웁니다. 주기화 프로그램도 지원합니다." },
        { title: "AI 칼로리 분석", desc: "음식 사진 한 장으로 칼로리와 영양소를 기록합니다. 한국 음식도 지원합니다." },
        { title: "코치진 상담", desc: "운동과 식단 기록을 함께 보고 피드백합니다. 코치 성격은 직접 고를 수 있습니다." },
        { title: "스마트 체중계 연동", desc: "코비아 스마트 체중계에 올라서면 몸무게와 체성분이 오늘 날짜로 저장됩니다." },
      ]
    : [
        { title: "Progressive overload tracking", desc: "Automatically compares your last weight, reps and volume so you can beat them today. Periodized programs included." },
        { title: "AI calorie analysis", desc: "Log calories and nutrients from a single food photo. Korean dishes supported." },
        { title: "Coaching team feedback", desc: "Feedback that looks at your workouts and meals together. Pick the coach personality you like." },
        { title: "Smart scale sync", desc: "Step on the CoreVia smart scale and your weight and body composition are saved to today." },
      ];

  const recovery = isKo
    ? [
        { title: "통증 일지", desc: "아픈 부위·강도·상황을 기록하고, 날짜별 추이로 돌아봅니다." },
        { title: "재활 운동 기록", desc: "한 운동과 세트를 기록합니다. 어떤 운동을 할지는 담당 의료진과 상의하세요." },
        { title: "가동범위 사진 측정", desc: "다른 사람이 뒤 카메라로 찍어 준 사진으로 관절 각도를 기록하고 좌우를 비교합니다." },
        { title: "주간 회복 리포트", desc: "한 주 동안의 통증·가동범위·운동 기록을 한눈에 정리합니다." },
      ]
    : [
        { title: "Pain journal", desc: "Log where it hurts, how much and when, and look back at the trend by date." },
        { title: "Rehab exercise log", desc: "Log the exercises and sets you did. Ask your care team which exercises to do." },
        { title: "Range-of-motion photos", desc: "Record joint angles from photos someone takes with the rear camera, and compare left and right." },
        { title: "Weekly recovery report", desc: "Your week of pain, range of motion and exercise logs on one page." },
      ];

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      <section className="pt-20 pb-6 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">
            {isKo ? "애플리케이션" : "Apps"}
          </h1>
          <p className="text-gray-500">
            {isKo ? "두 앱 모두 무료로 시작할 수 있습니다." : "Both apps are free to start."}
          </p>
        </div>
      </section>

      {/* CoreVia Fitness */}
      <section id="fitness" className="py-14 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-10 md:grid-cols-[1fr_320px] items-start">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Image src="/icon-512.png" alt="CoreVia Fitness" width={64} height={64} className="rounded-2xl border border-gray-200" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{isKo ? "코비아 피트니스" : "CoreVia Fitness"}</h2>
                <p className="text-sm text-gray-500">{isKo ? "운동과 식단을 함께 기록하는 앱" : "Log workouts and meals together"}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              {isKo
                ? "운동과 식단은 따로 볼 것이 아니라 함께 봐야 합니다. 두 가지를 같은 곳에 기록하고, 쌓인 기록을 바탕으로 피드백을 받습니다. 기본 기능은 무료이고, 코치진 분석을 더 쓰고 싶을 때 Pro를 선택할 수 있습니다."
                : "Workouts and meals belong together. Record both in one place and get feedback based on what you've logged. Core features are free; choose Pro if you want more coaching analysis."}
            </p>
            <div className="mb-8"><FeatureList items={fitness} /></div>
            <StoreButtons app="fitness" isKo={isKo} />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <Image src={`${shots}/03-workout.png`} alt={isKo ? "운동 기록 화면" : "Workout log screen"} width={320} height={693} className="w-full h-auto rounded-2xl border border-gray-200" />
            <Image src={`${shots}/04-nutrition.png`} alt={isKo ? "식단 기록 화면" : "Meal log screen"} width={320} height={693} className="w-full h-auto rounded-2xl border border-gray-200 md:hidden" />
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-4"><hr className="border-gray-200" /></div>

      {/* CoreVia Recovery */}
      <section id="recovery" className="py-14 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <Image src="/products/recovery-icon.png" alt="CoreVia Recovery" width={64} height={64} className="rounded-2xl border border-gray-200" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{isKo ? "코비아 리커버리" : "CoreVia Recovery"}</h2>
              <p className="text-sm text-gray-500">{isKo ? "통증과 재활 운동을 기록하는 앱" : "Log pain and rehab exercises"}</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-[720px]">
            {isKo
              ? "수술이나 부상 뒤, 매일의 통증과 운동을 남겨 두면 진료 때 지난 몇 주를 정확히 이야기할 수 있습니다. 코비아 리커버리는 그 기록을 쉽게 쌓고 돌아보게 돕는 앱입니다."
              : "After surgery or injury, a daily record of pain and exercise lets you describe the past few weeks accurately at your next appointment. CoreVia Recovery makes that record easy to keep and review."}
          </p>
          <div className="mb-6"><FeatureList items={recovery} /></div>
          <p className="text-xs text-gray-400 leading-relaxed mb-8">
            {isKo
              ? "코비아 리커버리는 기록을 돕는 앱이며 의료기기가 아닙니다. 질병의 진단·치료나 운동 처방을 하지 않습니다. 운동과 회복 계획은 담당 의료진과 상의하세요."
              : "CoreVia Recovery is a record-keeping app, not a medical device. It does not diagnose, treat or prescribe exercise. Discuss your exercise and recovery plan with your care team."}
          </p>
          <StoreButtons app="recovery" isKo={isKo} />
        </div>
      </section>
    </main>
  );
}
