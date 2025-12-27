import Link from "next/link";
import { getPostsFromCache } from "@/lib/notion";
import { format } from "date-fns";

export default function HomePage() {
  // 최신 고객 사례 3개 가져오기
  const cases = getPostsFromCache("Case").slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            AI 기반 피트니스 플랫폼
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            헬스케어 AI로
            <br />
            <span className="text-blue-600">운동 경험을 재정의</span>합니다
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            기록에서 인사이트로, 인사이트에서 변화로.
            <br />
            Corevia는 AI 기반 피트니스 코칭으로 누구나 꾸준히 운동할 수 있게 돕습니다.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <Link
              href="/solution"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              솔루션 보기 →
            </Link>
            <Link
              href="/guide"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              무료 가이드
            </Link>
          </div>
        </section>

        <hr className="border-blue-100 my-12" />

        {/* Problem Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            운동, 왜 작심삼일이 될까요?
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { emoji: "📝", title: "기록이 번거로움", desc: "운동 후 일일이 기록하기 귀찮아 포기" },
              { emoji: "📊", title: "성과가 안 보임", desc: "내가 잘하고 있는지 객관적 피드백 부재" },
              { emoji: "🎯", title: "동기부여 부족", desc: "혼자 운동하면 금방 지치고 흥미 상실" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16 p-8 md:p-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl text-white">
          <h2 className="text-3xl font-extrabold mb-4">
            Corevia가 해결합니다
          </h2>
          <p className="text-blue-100 leading-relaxed max-w-2xl text-lg">
            AI가 운동을 분석하고, 자동으로 리포트를 생성하며, 개인화된 코칭을 제공합니다.
            단순 기록을 넘어 <strong className="text-white">실질적인 변화</strong>를 만들어가는 피트니스 파트너입니다.
          </p>
          <Link
            href="/solution"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            자세히 알아보기 →
          </Link>
        </section>

        {/* App Download Banner */}
        <section className="mb-16 p-8 bg-[#1da1f2] rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <p className="text-blue-100 mb-1">가장 쉽고 직관적인 AI 피트니스 앱</p>
              <h3 className="text-2xl md:text-3xl font-bold">Corevia Fitness</h3>
              <p className="text-blue-100 mt-2">지금 바로 다운로드하세요!</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <span className="font-semibold">Google Play</span>
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            솔루션
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Corevia Fitness",
                desc: "운동/식단 기록과 AI 분석을 결합한 일반 사용자용 피트니스 앱",
                icon: "💪",
              },
              {
                title: "Corevia Trainer",
                desc: "트레이너가 회원을 효율적으로 관리하고 코칭할 수 있는 전용 앱",
                icon: "👨‍🏫",
              },
              {
                title: "운동 평가 AI",
                desc: "카메라 기반 자세 분석, ROM 측정, 반복 횟수 카운팅 기술",
                icon: "🤖",
              },
            ].map((product) => (
              <div
                key={product.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-shadow"
              >
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/solution"
              className="text-blue-600 font-semibold hover:underline"
            >
              솔루션 자세히 보기 →
            </Link>
          </div>
        </section>

        {/* Free Guide Section */}
        <section className="mb-16 p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl border border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-3">
                무료 제공
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">피트니스 가이드</h3>
              <p className="text-gray-600">
                1RM 계산기, 칼로리 계산기, 50+ 운동 가이드, 식단 추천까지!
                <br />
                앱 없이도 웹에서 무료로 사용하세요.
              </p>
            </div>
            <Link
              href="/guide"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              무료 가이드 보기 →
            </Link>
          </div>
        </section>

        {/* Cases Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            고객 사례
          </h2>
          {cases.length === 0 ? (
            <p className="text-gray-500">곧 다양한 성공 사례를 공유할 예정입니다.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {cases.map((c) => (
                <Link
                  key={c.id}
                  href={`/cases/${c.slug}`}
                  className="p-5 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {c.description?.slice(0, 80)}...
                  </p>
                  <time className="text-xs text-gray-400">
                    {format(new Date(c.date), "yyyy.MM.dd")}
                  </time>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-6 text-center">
            <Link
              href="/cases"
              className="text-blue-600 font-semibold hover:underline"
            >
              모든 고객 사례 보기 →
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">FAQ</h2>
          <div className="grid gap-4">
            {[
              {
                q: "Corevia 앱은 어디서 다운받을 수 있나요?",
                a: "Android는 Google Play에서 다운로드 가능합니다. iOS 버전은 곧 출시 예정입니다.",
              },
              {
                q: "트레이너가 아니어도 사용할 수 있나요?",
                a: "네, Corevia Fitness는 일반 사용자를 위한 앱이며 누구나 사용 가능합니다.",
              },
              {
                q: "기업/피트니스 센터 파트너십은 어떻게 하나요?",
                a: "문의 페이지를 통해 연락주시면 상세히 안내드립니다.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-5 bg-white border border-blue-100 rounded-2xl"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Q. {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center p-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Corevia와 함께 시작하세요
          </h2>
          <p className="text-blue-100 mb-6">
            문의사항이 있으시면 언제든 연락주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            문의하기 →
          </Link>
          <p className="mt-4 text-sm text-blue-200">
            coreoffitness2025@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
