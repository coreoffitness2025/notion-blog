export default function CasesPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>고객 사례</h1>
      <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.8 }}>
        초기에는 “개발 로그 + 사용자 피드백 + 성과” 형태로 쌓는 걸 추천합니다.
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      <ul style={{ lineHeight: 1.9 }}>
        <li>사례 #1: 4주 루틴 유지율 개선</li>
        <li>사례 #2: 식단 기록 자동화로 실행력 상승</li>
        <li>사례 #3: 리포트 기반 피드백으로 목표 달성</li>
      </ul>
    </div>
  );
}
