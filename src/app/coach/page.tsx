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
          <span className="inline-block px-4 py-1.5 bg-gray-200/60 text-gray-500 text-sm font-medium rounded-full mb-6">
            AI Coach
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 tracking-tight">
            나만의 AI PT 코치를
            <br />
            만나보세요
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            기록을 빠짐없이 할수록 더 정확한 코칭을 받을 수 있어요.
            <br />
            4가지 성격 중 골라보세요.
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
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-tight">
            일반 AI 챗봇과 뭐가 달라요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "내 기록을 진짜 봐요",
                desc: "운동 기록, 식단 사진, 체형 분석까지. AI가 실제로 보고 조언해줘요.",
              },
              {
                title: "운동+식단 같이 봐요",
                desc: "\"등 운동 했는데 단백질이 부족해요\" — 따로따로가 아니라 같이 보고 피드백해줘요.",
              },
              {
                title: "생체 2급 트레이너가 만들었어요",
                desc: "생체 2급 자격 + 피트니스 대회 수상 트레이너가 직접 AI를 튜닝했어요.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
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
