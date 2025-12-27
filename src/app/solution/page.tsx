"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SolutionPage() {
  const [showIosModal, setShowIosModal] = useState(false);

  const solutions = [
    {
      id: "fitness",
      title: "Corevia Fitness",
      subtitle: "일반 사용자를 위한 AI 피트니스 앱",
      problem: "운동 기록이 번거롭고, 내 성과가 잘 보이지 않아 포기하게 됩니다.",
      features: [
        "간편한 운동/식단 기록",
        "AI 기반 월간 리포트",
        "목표 달성률 시각화",
        "개인화된 운동 추천",
      ],
      target: "혼자 운동하면서 꾸준함을 유지하고 싶은 분",
      hasApp: true,
    },
    {
      id: "trainer",
      title: "Corevia Trainer",
      subtitle: "트레이너 전용 회원 관리 앱",
      problem: "여러 회원을 관리하면서 개인별 맞춤 코칭을 제공하기 어렵습니다.",
      features: [
        "회원별 운동 기록 대시보드",
        "일정 및 세션 관리",
        "자동 생성 피드백 리포트",
        "회원과의 소통 기능",
      ],
      target: "효율적으로 회원을 관리하고 싶은 퍼스널 트레이너",
      hasApp: false,
    },
    {
      id: "ai",
      title: "운동 평가 AI",
      subtitle: "카메라 기반 자세 분석 기술",
      problem: "운동 자세가 올바른지, 제대로 수행하고 있는지 확인이 어렵습니다.",
      features: [
        "실시간 자세(Pose) 분석",
        "운동 반복 횟수 자동 카운팅",
        "관절 가동범위(ROM) 측정",
        "운동별 수행 품질 점수",
      ],
      target: "정확한 자세로 운동하고 싶은 모든 분",
      hasApp: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 16px" }}>
        {/* Header */}
        <section style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">솔루션</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Corevia는 AI 기술을 활용하여 피트니스 경험을 혁신합니다.
            <br />
            개인 사용자부터 트레이너까지, 모두를 위한 솔루션을 제공합니다.
          </p>
        </section>

        {/* Corevia Fitness App Hero Section */}
        <section className="mb-16 bg-[#1da1f2] rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <p className="text-white/90 text-lg mb-2">가장 쉽고 직관적인</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">AI 피트니스 앱</h2>
            <p className="text-white text-2xl md:text-3xl font-bold italic mb-8">Corevia Fitness</p>
            
            {/* App Icon */}
            <div className="flex justify-center mb-8">
              <Image
                src="/appstore.png"
                alt="Corevia Fitness App Icon"
                width={176}
                height={176}
                className="w-36 h-36 md:w-44 md:h-44 rounded-[2rem]"
              />
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
              
              <button
                onClick={() => setShowIosModal(true)}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <div className="grid gap-12">
          {solutions.map((sol, index) => (
            <section
              key={sol.id}
              className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-600">{sol.subtitle}</span>
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {sol.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Problem */}
                <div>
                  <h3 className="text-sm font-bold text-blue-600 mb-2">문제</h3>
                  <p className="text-gray-700 leading-relaxed">{sol.problem}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-sm font-bold text-blue-600 mb-2">핵심 기능</h3>
                  <ul className="space-y-1">
                    {sol.features.map((f) => (
                      <li key={f} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target */}
                <div>
                  <h3 className="text-sm font-bold text-blue-600 mb-2">누구에게 좋은가요?</h3>
                  <p className="text-gray-700 leading-relaxed">{sol.target}</p>
                </div>
              </div>

              {/* App Download for Fitness */}
              {sol.hasApp && (
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Android 다운로드
                    </a>
                    <button
                      onClick={() => setShowIosModal(true)}
                      className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      iOS 다운로드
                    </button>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            솔루션에 대해 더 알고 싶으신가요?
          </h2>
          <p className="text-blue-100 mb-6">
            제품 데모, 파트너십, 기타 문의사항을 환영합니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            문의하기 →
          </Link>
        </section>
      </div>

      {/* iOS Modal */}
      {showIosModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowIosModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">iOS 앱 출시 준비 중</h3>
            <p className="text-gray-600 mb-6">
              iOS 버전은 현재 개발 중입니다.<br />
              곧 App Store에서 만나보실 수 있습니다!
            </p>
            <button
              onClick={() => setShowIosModal(false)}
              className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
