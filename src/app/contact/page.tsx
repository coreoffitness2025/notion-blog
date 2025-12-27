import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기",
  description: "Corevia에 문의하세요. 제품, 파트너십, 기타 문의사항을 환영합니다.",
};

export default function ContactPage() {
  const email = "coreoffitness2025@gmail.com";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 16px" }}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">
            문의하기
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Corevia에 대해 궁금한 점이 있으시면 언제든 연락주세요.
            <br />
            제품 문의, 파트너십 제안, 기타 문의사항을 환영합니다.
          </p>
        </div>

        <div className="p-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl text-center text-white mb-12">
          <div className="text-sm text-blue-100 mb-2">
            이메일 문의
          </div>
          <div className="text-2xl md:text-3xl font-bold mb-6 break-all">
            {email}
          </div>
          <a
            href={`mailto:${email}`}
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            이메일 보내기 →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              제품 문의
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Corevia Fitness, Trainer 앱 또는 운동 평가 AI에 대한 문의
            </p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              파트너십
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              피트니스 센터, 기업 협업, API 연동 파트너십 제안
            </p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              채용
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Corevia와 함께할 인재를 찾고 있습니다
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">다른 페이지도 둘러보세요</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/solution" className="text-blue-600 font-semibold hover:underline">
              솔루션 →
            </Link>
            <Link href="/guide" className="text-blue-600 font-semibold hover:underline">
              무료 가이드 →
            </Link>
            <Link href="/posts" className="text-blue-600 font-semibold hover:underline">
              블로그 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
