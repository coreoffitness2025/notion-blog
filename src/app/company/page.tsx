import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업 소개",
  description: "Corevia는 동작 데이터를 기반으로 운동 수행 품질을 정량화하는 AI Biomechanics 평가 기술을 개발합니다.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        {/* Hero */}
        <section className="mb-16">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium mb-6">
            AI Biomechanics
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            AI Biomechanics 기반
            <br />
            운동평가 기술 기업
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
            Corevia는 동작 데이터를 기반으로 운동 수행 품질을 정량화하는 평가 기술을 개발합니다.
            운동역학(Biomechanics) 관점의 분석과 트레이닝 도메인 경험을 결합해, 실사용 환경에서 재현 가능한 평가 워크플로우를 구축합니다.
          </p>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Principles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Principles
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Measurement-first",
                desc: "동작을 측정 가능한 지표로 정의",
              },
              {
                title: "Privacy-first",
                desc: "영상 저장/전송 최소화 설계 우선",
              },
              {
                title: "Deployment-ready",
                desc: "앱/현장 환경에서 재현 가능한 파이프라인 지향",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            What We Do
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: "Motion Evaluation Pipeline",
                desc: "rep 분할, ROM/Tempo/Symmetry 지표 추출, 품질 점수 산출",
              },
              {
                title: "Tracking App (Corevia Fitness)",
                desc: "메인 리프트 중심 성장 추적, 사진 기반 식단 기록, 리포트 자동 생성",
              },
              {
                title: "On-device Module R&D",
                desc: "프라이버시-우선 추론 모듈 연구, 요약 지표 중심 동기화 설계",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border border-gray-200 rounded-xl"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Team</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            기획, 개발, 트레이닝 도메인 경험을 갖춘 멤버로 구성되어 있습니다.
            피트니스 현장의 요구사항을 이해하고, 기술로 해결합니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { role: "Product", desc: "사용자 경험 설계, 로드맵 관리" },
              { role: "Engineering", desc: "앱, 백엔드, ML 파이프라인 개발" },
              { role: "Training Domain", desc: "운동 프로그램, 피드백 로직 설계" },
            ].map((member) => (
              <div
                key={member.role}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {member.role}
                </h4>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-8 bg-gray-900 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            파일럿/데모 문의
          </h2>
          <p className="text-gray-400 mb-6">
            제품 데모, 파트너십, 기타 문의사항을 환영합니다.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            문의하기 →
          </a>
        </section>
      </div>
    </div>
  );
}
