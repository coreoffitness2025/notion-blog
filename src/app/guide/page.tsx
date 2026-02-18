import Link from "next/link";

const guideItems = [
  {
    title: "1RM 계산기",
    description: "운동 중량과 반복 횟수로 1RM(최대 1회 중량)을 계산하세요",
    href: "/guide/1rm",
    icon: "🏋️",
  },
  {
    title: "칼로리 계산기",
    description: "나에게 맞는 일일 칼로리와 매크로 영양소를 계산하세요",
    href: "/guide/calorie",
    icon: "🔥",
  },
  {
    title: "운동 가이드",
    description: "부위별 운동 방법과 올바른 자세를 확인하세요",
    href: "/guide/exercises",
    icon: "💪",
  },
  {
    title: "피트니스 핸드북",
    description: "운동과 영양에 대한 심층 가이드 아티클",
    href: "/guide/handbook",
    icon: "📚",
  },
  {
    title: "식단 추천",
    description: "목표에 맞는 식단 플랜과 영양 정보",
    href: "/guide/meal-plans",
    icon: "🥗",
  },
  {
    title: "운동 프로그램",
    description: "레벨과 목표에 맞는 맞춤 운동 프로그램",
    href: "/guide/programs",
    icon: "📋",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-sm font-medium mb-6">
            무료 피트니스 도구
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            피트니스 가이드
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            과학적인 운동 방법과 영양 정보를 무료로 제공합니다.
            <br />
            코비아 피트니스 앱의 핵심 콘텐츠를 웹에서 만나보세요.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guideItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--corevia-primary)] transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            더 많은 기능을 원하시나요?
          </h2>
          <p className="text-gray-500 mb-8">
            코비아 피트니스 앱에서 AI 기반 운동 분석, 개인화된 코칭,
            <br />
            실시간 피드백 등 더 많은 기능을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
            >
              앱 다운로드
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
