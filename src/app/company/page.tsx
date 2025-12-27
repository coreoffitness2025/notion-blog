export default function CompanyPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>기업 소개</h1>
      <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.8 }}>
        Corevia는 “기록 → 피드백 → 변화”의 루프를 가장 단순하고 강력하게 만드는
        피트니스 제품을 지향합니다.
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      <h2 style={{ fontSize: 20, fontWeight: 800 }}>미션</h2>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
        누구나 꾸준히 실행할 수 있는 실전형 피트니스 경험을 제공합니다.
      </p>
    </div>
  );
}
