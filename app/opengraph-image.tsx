import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// System-safe fonts only — no brand TTFs fetched for this pass. Drop
// Instrument Serif / JetBrains Mono .ttf files into app/fonts/ and pass
// them via the `fonts` option here to upgrade later.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F7F6F3",
          backgroundImage:
            "linear-gradient(#E1DED7 1px, transparent 1px), linear-gradient(90deg, #E1DED7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="28" height="39" viewBox="0 0 200 280">
            <path
              d="M 60 130 Q 70 110 90 80 Q 110 50 115 30 Q 120 18 110 22 Q 95 32 90 60 Q 87 90 95 115 Q 110 145 130 130 Q 145 122 140 135 L 100 250"
              fill="none"
              stroke="#B8743D"
              strokeWidth="16"
            />
          </svg>
          <span style={{ fontSize: 28, color: "#141210" }}>Moath K. Awaja</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 72, color: "#141210" }}>Backend, made deliberate.</span>
          <span style={{ fontSize: 28, color: "#6B6660" }}>{profile.heroSubline}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
