import Link from "next/link";
import Image from "next/image";
import { getPostsFromCache } from "@/lib/notion";
import { format } from "date-fns";

// 인더스트리 데이터
const industries = [
  {
    id: "fitness",
    title: "Fitness",
    image: "/industries/fitness.jpg",
    active: true,
  },
  {
    id: "golf",
    title: "Golf",
    image: "/industries/golf.jpg",
    active: false,
  },
  {
    id: "yoga",
    title: "Yoga",
    image: "/industries/yoga.jpg",
    active: false,
  },
  {
    id: "pilates",
    title: "Pilates",
    image: "/industries/pilates.jpg",
    active: false,
  },
];

// 솔루션 카드 데이터
const solutions = [
  {
    id: "engine",
    title: "Motion Evaluation",
    subtitle: "Biomechanics Engine",
    badge: "Coming soon",
    badgeType: "coming" as const,
    desc: "rep 단위 분할과 동작 지표(ROM/Tempo/Symmetry)를 기반으로 수행 품질을 평가하는 파이프라인을 개발합니다. 출력은 점수/태그/요약 지표 형태로 제공됩니다.",
  },
  {
    id: "fitness",
    title: "Corevia Fitness",
    subtitle: "Tracking App",
    badge: "Available",
    badgeType: "available" as const,
    desc: "메인 리프트 중심의 성장 추적과 사진 기반 식단 기록을 통합한 트래킹 앱입니다. 기록-요약-리포트 워크플로우로 실행을 지속 가능하게 구성합니다.",
  },
  {
    id: "module",
    title: "On-device Evaluation Module",
    subtitle: "Privacy-first Inference",
    badge: "Coming soon",
    badgeType: "coming" as const,
    desc: "프라이버시-우선(On-device) 추론 기반 평가 모듈을 연구/개발 중입니다. 영상 저장/전송을 최소화하고, 요약 지표 중심으로 동기화하는 방식을 지향합니다.",
  },
];

export default function HomePage() {
  const cases = getPostsFromCache("Case").slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium mb-6">
              AI Biomechanics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              AI Biomechanics 기반
              <br />
              운동평가 기술
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Corevia는 동작 데이터를 기반으로 운동 수행 품질을 정량화하는 평가 기술을 개발합니다.
              운동역학(Biomechanics) 관점의 분석과 트레이닝 도메인 경험을 결합해, 실사용 환경에서 재현 가능한 평가 워크플로우를 구축합니다.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                href="/solution"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                제품 보기
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                데모/파일럿 문의
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 my-12" />

        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">솔루션</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="relative p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
              >
                {/* Badge */}
                <span
                  className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded ${
                    sol.badgeType === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {sol.badge}
                </span>

                <div className="pr-16">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{sol.subtitle}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/solution"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              솔루션 자세히 보기 →
            </Link>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">인더스트리</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
                  ind.active ? "cursor-pointer" : "cursor-default"
                }`}
              >
                {/* Placeholder background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 ${
                    !ind.active ? "grayscale opacity-80" : ""
                  }`}
                />
                
                {/* Title */}
                <div className="absolute inset-0 flex items-end p-4">
                  <h3
                    className={`text-lg font-bold ${
                      ind.active ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {ind.title}
                  </h3>
                </div>

                {/* Coming soon badge */}
                {!ind.active && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/industries"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              인더스트리 자세히 보기 →
            </Link>
          </div>
        </section>

        {/* App Download Banner */}
        <section className="mb-16 p-8 bg-gray-900 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded mb-2">
                Available
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">Corevia Fitness</h3>
              <p className="text-gray-400 mt-2">
                기록-요약-리포트 워크플로우 기반 트래킹 앱
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="mb-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">운동 가이드</h3>
              <p className="text-gray-600">
                1RM 계산기, 칼로리 계산기, 운동 가이드, 식단 추천 등
                무료로 제공되는 피트니스 도구 모음
              </p>
            </div>
            <Link
              href="/guide"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              가이드 보기 →
            </Link>
          </div>
        </section>

        {/* Cases Preview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">고객 사례</h2>
          {cases.length === 0 ? (
            <p className="text-gray-500">파일럿 프로젝트 진행 중입니다.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {cases.map((c) => (
                <Link
                  key={c.id}
                  href={`/cases/${c.slug}`}
                  className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
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
          <div className="mt-6">
            <Link
              href="/cases"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              모든 고객 사례 보기 →
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ</h2>
          <div className="grid gap-4">
            {[
              {
                q: "Corevia Fitness 앱은 어디서 다운로드할 수 있나요?",
                a: "Android는 Google Play에서 다운로드 가능합니다. iOS 버전은 준비 중입니다.",
              },
              {
                q: "운동평가 기술은 어떤 형태로 제공되나요?",
                a: "현재 R&D 단계이며, 파일럿 형태로 제공 가능합니다. 문의 페이지를 통해 연락 부탁드립니다.",
              },
              {
                q: "기업/피트니스 센터 파트너십은 어떻게 진행하나요?",
                a: "문의 페이지를 통해 연락주시면 상세히 안내드립니다.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-5 bg-white border border-gray-200 rounded-xl"
              >
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Q. {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center p-12 bg-gray-900 rounded-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            파일럿/데모 문의
          </h2>
          <p className="text-gray-400 mb-6">
            제품 데모, 파트너십, 기타 문의사항을 환영합니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            문의하기 →
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            coreoffitness2025@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
