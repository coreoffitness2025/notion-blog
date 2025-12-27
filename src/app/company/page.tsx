import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업 소개",
  description: "Corevia는 헬스케어 AI 기업으로, 누구나 꾸준히 운동할 수 있는 실전형 피트니스 경험을 만듭니다.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        {/* Hero */}
        <section className="mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            헬스케어 AI 기업
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            기록에서 변화까지,
            <br />
            <span className="text-blue-600">피트니스의 새로운 경험</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
            Corevia는 <strong className="text-gray-900">헬스케어 AI 기업</strong>입니다.
            <br />
            운동 기록과 AI 분석을 결합하여 누구나 꾸준히 운동하고, 실질적인 변화를 경험할 수 있도록 돕습니다.
          </p>
        </section>

        <hr className="border-blue-100 mb-12" />

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            미션
          </h2>
          <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white">
            <p className="text-xl font-semibold leading-relaxed">
              "누구나 꾸준히 실행할 수 있는 실전형 피트니스 경험을 제공합니다."
            </p>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed">
            운동은 꾸준함이 핵심입니다. 하지만 많은 사람들이 동기부여 부족, 성과 확인 어려움, 
            번거로운 기록 과정 때문에 포기합니다. Corevia는 AI 기술로 이 문제를 해결하고, 
            운동이 일상의 습관이 될 수 있도록 돕습니다.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            우리가 하는 일
          </h2>
          <div className="grid gap-4">
            {[
              {
                icon: "📝",
                title: "운동/식단 기록 자동화",
                desc: "복잡한 기록 과정을 최소화하고, AI가 자동으로 분류/분석합니다.",
              },
              {
                icon: "📊",
                title: "AI 기반 인사이트 제공",
                desc: "월간/세션별 리포트로 성과를 시각화하고 개선점을 제안합니다.",
              },
              {
                icon: "🎯",
                title: "비전 AI 운동 평가",
                desc: "카메라 기반 자세 분석, 반복 횟수 카운팅, ROM 측정 기술을 개발합니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">팀</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Corevia 팀은 <strong className="text-gray-900">기획, 개발, 트레이닝 도메인 경험</strong>을 갖춘 멤버들로 구성되어 있습니다.
            실제 피트니스 현장의 니즈를 이해하고, 기술로 해결합니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { role: "제품 기획", desc: "사용자 경험 설계, 로드맵 관리", icon: "💡" },
              { role: "개발", desc: "모바일 앱, 백엔드, AI 모델 개발", icon: "💻" },
              { role: "트레이닝 도메인", desc: "운동 프로그램, 피드백 로직 설계", icon: "🏋️" },
            ].map((member) => (
              <div
                key={member.role}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  {member.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {member.role}
                </h4>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            핵심 가치
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "실용성",
                desc: "현장에서 바로 쓸 수 있는 기능에 집중합니다.",
                color: "from-blue-400 to-blue-500",
              },
              {
                title: "지속성",
                desc: "한 번 쓰고 마는 것이 아닌, 습관이 되는 제품을 만듭니다.",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "신뢰",
                desc: "데이터 기반의 정확한 피드백으로 신뢰를 쌓습니다.",
                color: "from-blue-600 to-blue-700",
              },
            ].map((value) => (
              <div
                key={value.title}
                className={`p-6 bg-gradient-to-br ${value.color} rounded-2xl text-white`}
              >
                <h3 className="text-xl font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
