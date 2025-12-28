import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인더스트리",
  description: "Corevia의 운동평가 기술이 적용되는 산업 분야: Fitness, Golf, Yoga, Pilates",
};

// 인더스트리 데이터
const industries = [
  {
    id: "fitness",
    title: "Fitness",
    active: true,
  },
  {
    id: "golf",
    title: "Golf",
    active: false,
  },
  {
    id: "yoga",
    title: "Yoga",
    active: false,
  },
  {
    id: "pilates",
    title: "Pilates",
    active: false,
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 16px" }}>
        {/* Header */}
        <section style={{ marginBottom: 48 }}>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">인더스트리</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
            Corevia의 운동평가 기술이 적용되는 산업 분야입니다.
          </p>
        </section>

        {/* Industries Grid */}
        <section className="mb-16">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`relative aspect-[16/9] rounded-xl overflow-hidden ${
                  ind.active ? "" : "cursor-default"
                }`}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 ${
                    !ind.active ? "grayscale opacity-80" : ""
                  }`}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className={`text-2xl font-bold ${
                      ind.active ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {ind.title}
                  </h3>
                </div>

                {/* Badge */}
                {ind.active ? (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                    Available
                  </span>
                ) : (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-16 p-8 bg-gray-50 border border-gray-200 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            운동평가 기술 적용
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Corevia의 Motion Evaluation 기술은 동작 데이터를 기반으로 수행 품질을 정량화합니다.
            현재 Fitness 분야에서 활용 중이며, Golf, Yoga, Pilates 분야로 확장을 준비하고 있습니다.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center p-12 bg-gray-900 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-3">
            파트너십/파일럿 문의
          </h2>
          <p className="text-gray-400 mb-6">
            새로운 분야 적용, 파트너십에 관심이 있으시면 연락 부탁드립니다.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            문의하기 →
          </a>
        </section>
      </div>
    </div>
  );
}

