import Link from "next/link";

export default function RootNotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <h1 style={{ fontSize: "60px", fontWeight: 800, color: "#e5e7eb", marginBottom: "16px" }}>404</h1>
      <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "32px" }}>
        페이지를 찾을 수 없습니다
      </p>
      <Link
        href="/"
        style={{ padding: "12px 24px", background: "#4285F4", color: "white", fontWeight: 600, borderRadius: "8px", textDecoration: "none" }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
