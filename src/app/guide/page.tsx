import Link from "next/link";

const guideItems = [
  {
    title: "1RM 계산기",
    description: "운동 중량과 반복 횟수로 1RM(최대 1회 중량)을 계산하세요",
    href: "/guide/1rm",
    icon: "🏋️",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "칼로리 계산기",
    description: "나에게 맞는 일일 칼로리와 매크로 영양소를 계산하세요",
    href: "/guide/calorie",
    icon: "🔥",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "운동 가이드",
    description: "부위별 운동 방법과 올바른 자세를 확인하세요",
    href: "/guide/exercises",
    icon: "💪",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "피트니스 핸드북",
    description: "운동과 영양에 대한 심층 가이드 아티클",
    href: "/guide/handbook",
    icon: "📚",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "식단 추천",
    description: "목표에 맞는 식단 플랜과 영양 정보",
    href: "/guide/meal-plans",
    icon: "🥗",
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "운동 프로그램",
    description: "레벨과 목표에 맞는 맞춤 운동 프로그램",
    href: "/guide/programs",
    icon: "📋",
    color: "from-pink-500 to-rose-600",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
            무료 온라인 PT
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            피트니스 가이드
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            과학적인 운동 방법과 영양 정보를 무료로 제공합니다.
            <br />
            AI 기반 Corevia 피트니스 앱의 핵심 콘텐츠를 웹에서 만나보세요.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="absolute bottom-6 right-6 text-gray-600 group-hover:text-blue-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            더 많은 기능을 원하시나요?
          </h2>
          <p className="text-gray-400 mb-8">
            Corevia 피트니스 앱에서 AI 기반 운동 분석, 개인화된 프로그램 추천,
            <br />
            실시간 피드백 등 더 많은 기능을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solution"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              솔루션 알아보기
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

