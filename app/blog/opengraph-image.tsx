import { ImageResponse } from "next/og";

export const alt = "Owbird Writes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, #2a2a2a 0%, #0b0b0c 45%, #050505 100%)",
          color: "#f4f4f5",
          fontFamily: "Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "40px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Blog
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              maxWidth: "920px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 72,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Owbird Writes
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.4,
                color: "#d4d4d8",
              }}
            >
              Ideas, experiments, and field notes on building systems over time.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#a1a1aa",
            }}
          >
            <div style={{ display: "flex" }}>owbird.dev/blog</div>
            <div style={{ display: "flex" }}>Obed D. A. Forkuo</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
