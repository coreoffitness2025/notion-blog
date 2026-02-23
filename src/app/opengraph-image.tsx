import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CoreVia - Real Online PT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F8FAFC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #4285F4, #60A5FA)",
          }}
        />

        {/* Logo */}
        <img
          src="https://coreviafitness.com/logo.png"
          alt=""
          width={140}
          height={140}
          style={{ borderRadius: 28, marginBottom: 28 }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#4285F4",
            letterSpacing: -1,
            marginBottom: 16,
          }}
        >
          CoreVia
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 8,
          }}
        >
          진짜 온라인 PT, 코비아 피트니스
        </div>

        {/* Subtext */}
        <div style={{ fontSize: 20, color: "#9CA3AF" }}>
          운동도 식단도, 제대로
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "#9CA3AF",
            letterSpacing: 0.5,
          }}
        >
          coreviafitness.com
        </div>
      </div>
    ),
    { ...size }
  );
}
