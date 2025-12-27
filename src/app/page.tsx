import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.1 }}>
        Corevia
        <br />
        피트니스 앱과 AI 코칭을 연결합니다
      </h1>

      <p style={{ marginTop: 14, fontSize: 18, opacity: 0.85, maxWidth: 720 }}>
        기록(운동/식단) → 인사이트 → 코칭까지 이어지는 실전형 피트니스 경험을
        만듭니다.
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
        <Link href="/solution">솔루션 보기 →</Link>
        <span style={{ opacity: 0.5 }}>|</span>
        <Link href="/blog">블로그 보기 →</Link>
      </div>

      <hr style={{ margin: "28px 0", opacity: 0.2 }} />

      <div style={{ display: "grid", gap: 14 }}>
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 800 }}>무엇을 하나요?</h2>
          <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
            <li>운동/식단 기록 기반의 피트니스 앱</li>
            <li>AI 기반 월간/세션 리포트</li>
            <li>온디바이스 비전 기반 자세/ROM/rep 피드백(로드맵)</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 800 }}>다음 단계</h2>
          <p style={{ marginTop: 10, opacity: 0.85 }}>
            웹 홈페이지(소개/솔루션/사례) + 노션 블로그를 결합해 운영합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
