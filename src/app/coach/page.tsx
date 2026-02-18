import type { Metadata } from "next";
import CoachShowcase from "@/components/CoachShowcase";
import PointsCustomization from "@/components/PointsCustomization";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export const metadata: Metadata = {
  title: "AI 코치 소개",
  description:
    "4가지 성격의 AI PT 코치가 운동과 식단을 함께 관리해줍니다. 독설형, 격려형, 냉정형, 밸런스형 중 나에게 맞는 코치를 골라보세요.",
};

export default function CoachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <section className="py-16 px-4 bg-[var(--corevia-bg)]">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--corevia-ai)]/10 text-[var(--corevia-ai)] text-sm font-semibold rounded-full mb-6">
            AI Coach
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            나만의 AI PT 코치를
            <br />
            만나보세요
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            당신의 완전한 기록을 바탕으로 최적의 코칭을.
            <br />
            4가지 성격 중 골라서, 운동+식단 크로스 피드백을 받아보세요.
          </p>
        </div>
      </section>

      {/* 성격별 쇼케이스 */}
      <CoachShowcase />

      {/* 포인트 & 커스터마이징 */}
      <PointsCustomization />

      {/* 코치 특징 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            일반 AI 챗봇과 뭐가 다른가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "내 기록을 진짜 봐요",
                desc: "오늘 운동 기록, 식단 사진, 체형 분석 데이터까지 — AI 코치가 실제로 참고해서 조언합니다.",
                color: "bg-blue-50",
                accent: "text-[var(--corevia-primary)]",
              },
              {
                title: "운동+식단 크로스",
                desc: '"오늘 등 운동 했는데 단백질이 부족해요" — 운동과 식단을 함께 보고 연결된 피드백을 줍니다.',
                color: "bg-green-50",
                accent: "text-green-600",
              },
              {
                title: "전문가가 직접 튜닝",
                desc: "생체 2급 자격 + 피트니스 대회 수상 트레이너가 직접 AI 에이전트를 튜닝합니다. 진짜 PT 경험이 녹아있어요.",
                color: "bg-purple-50",
                accent: "text-[var(--corevia-ai)]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${item.color} rounded-2xl p-8`}
              >
                <h3 className={`text-xl font-bold mb-3 ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AppDownloadCTA />
    </div>
  );
}
