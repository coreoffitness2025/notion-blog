"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// 솔루션 데이터
const solutions = [
  {
    id: "engine",
    title: "Motion Evaluation",
    subtitle: "Biomechanics Engine",
    badge: "Coming soon",
    badgeType: "coming" as const,
    problem: "운동 수행 품질을 객관적으로 측정하고 피드백하기 어렵습니다.",
    features: [
      "rep 단위 동작 분할",
      "ROM(관절 가동범위) 측정",
      "Tempo(동작 속도) 분석",
      "Symmetry(좌우 대칭성) 평가",
      "Quality Score 산출",
    ],
    output: "점수, 태그, 요약 지표 형태로 출력",
    hasApp: false,
  },
  {
    id: "fitness",
    title: "Corevia Fitness",
    subtitle: "Tracking App",
    badge: "Available",
    badgeType: "available" as const,
    problem: "운동/식단 기록이 번거롭고, 성과를 확인하기 어렵습니다.",
    features: [
      "메인 리프트 중심 성장 추적",
      "사진 기반 식단 기록",
      "세션별/월간 리포트 자동 생성",
      "목표 달성률 시각화",
    ],
    output: "기록-요약-리포트 워크플로우",
    hasApp: true,
  },
  {
    id: "module",
    title: "On-device Evaluation Module",
    subtitle: "Privacy-first Inference",
    badge: "Coming soon",
    badgeType: "coming" as const,
    problem: "영상 저장/전송에 대한 프라이버시 우려가 있습니다.",
    features: [
      "On-device 추론 기반 평가",
      "영상 저장/전송 최소화",
      "요약 지표 중심 동기화",
      "경량 모델 최적화",
    ],
    output: "프라이버시-우선 설계, 요약 데이터만 동기화",
    hasApp: false,
  },
];

// Output 지표
const outputs = [
  "Rep Summary",
  "ROM",
  "Tempo",
  "Symmetry",
  "Quality Score",
  "Risk Tags",
];

export default function SolutionPage() {
  const [showIosModal, setShowIosModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 16px" }}>
        {/* Header */}
        <section style={{ marginBottom: 48 }}>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">솔루션</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
            동작 데이터 기반 운동평가 기술과 트래킹 앱을 제공합니다.
          </p>
        </section>

        {/* Outputs Box */}
        <section className="mb-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
            Outputs
          </h3>
          <div className="flex flex-wrap gap-2">
            {outputs.map((output) => (
              <span
                key={output}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm text-gray-700"
              >
                {output}
              </span>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <div className="grid gap-8">
          {solutions.map((sol) => (
            <section
              key={sol.id}
              className="p-8 rounded-xl bg-white border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sol.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{sol.subtitle}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded ${
                    sol.badgeType === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {sol.badge}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Problem */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 mb-2">Problem</h3>
                  <p className="text-gray-700 leading-relaxed">{sol.problem}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 mb-2">Features</h3>
                  <ul className="space-y-1">
                    {sol.features.map((f) => (
                      <li key={f} className="text-gray-700 flex items-start gap-2 text-sm">
                        <span className="text-gray-400 mt-0.5">-</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Output */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 mb-2">Output</h3>
                  <p className="text-gray-700 leading-relaxed">{sol.output}</p>
                </div>
              </div>

              {/* App Download for Fitness */}
              {sol.hasApp && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Android 다운로드
                    </a>
                    <button
                      onClick={() => setShowIosModal(true)}
                      className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      iOS (준비 중)
                    </button>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center mt-16 p-12 bg-gray-900 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-3">
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
        </section>
      </div>

      {/* iOS Modal */}
      {showIosModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowIosModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">iOS 앱</h3>
            <p className="text-gray-600 mb-6">
              iOS 버전은 현재 준비 중입니다.
            </p>
            <button
              onClick={() => setShowIosModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
