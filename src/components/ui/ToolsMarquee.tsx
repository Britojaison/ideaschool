"use client";

import React from "react";

const allTools = [
  "/images/adobepremierepro.svg",
  "/images/ps-logo-transparent.webp",
  "/images/Ae_logo.webp",
  "/images/Canva_icon.webp",
  "/images/opus_clip.webp",
  "/images/elevenlabs-official-logo.svg",
  "/images/framer.webp",
  "/images/tool1.webp",
  "/images/heygen.webp",
  "/images/higgsfield_ai.webp",
];

export default function ToolsMarquee() {
  return (
    <section 
      style={{ 
        padding: "80px 0 60px", 
        backgroundColor: "#FBFAF2",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px dashed rgba(17, 17, 17, 0.15)",
      }}
    >
      {/* Section Header — matches SelectedProjects / ProgramBrochure */}
      <div style={{ marginBottom: "40px", padding: "0 3.5vw" }}>
        <h2
          style={{
            fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif',
            fontSize: "clamp(26px, 2.8vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            textTransform: "uppercase" as const,
            color: "#111111",
            margin: "0 0 0.5rem 0",
            lineHeight: 1,
          }}
        >
          MASTER THE TOOLS. UNDERSTAND WHEN TO USE THEM.
        </h2>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <MarqueeRow items={allTools} direction="left" />
      </div>

      {/* Category Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          width: "100%",
          maxWidth: "1290px",
          margin: "64px auto 0",
          padding: "0 32px",
        }}
        className="tools-category-grid"
      >
        {[
          { title: "Video Editing", desc: "Premiere Pro and professional editing workflows" },
          { title: "Motion & VFX", desc: "After Effects, compositing, animation and visual effects" },
          { title: "Creative AI", desc: "Higgsfield, AI-powered image, video, ideation and production workflows" },
          { title: "Design & Content", desc: "Visual design tools and creative production workflows" },
        ].map((cat) => (
          <div
            key={cat.title}
            className="tools-card"
            style={{
              backgroundColor: "rgba(17,17,17,0.035)",
              padding: "44px 34px",
              borderLeft: "1px solid rgba(17,17,17,0.1)",
              position: "relative",
              cursor: "pointer",
              transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
            }}
          >
            <h3
              style={{
                color: "#111111",
                fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif',
                fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.04em",
                marginBottom: "14px",
                transition: "color 0.3s ease",
              }}
            >
              {cat.title}
            </h3>
            <p
              style={{
                color: "rgba(17, 17, 17, 0.65)",
                fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif',
                fontSize: "clamp(0.92rem, 1.05vw, 1.02rem)",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
                transition: "color 0.3s ease",
              }}
            >
              {cat.desc}
            </p>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: scrollLeft 30s linear infinite;
        }
        .marquee-track-right {
          animation: scrollRight 30s linear infinite;
        }
        .tools-card:hover {
          background-color: #DAFD55 !important;
          border-left-color: rgba(17, 17, 17, 0.3) !important;
        }
        .tools-card:hover h3 {
          color: #111111 !important;
        }
        .tools-card:hover p {
          color: rgba(17, 17, 17, 0.85) !important;
        }
        @media (max-width: 768px) {
          .tools-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            padding: 0 16px !important;
            margin-top: 40px !important;
          }
          .tools-card {
            padding: 24px 20px !important;
            border: 1px solid rgba(17,17,17,0.1) !important;
            border-radius: 12px !important;
            background-color: rgba(17,17,17,0.035) !important;
          }
          .tools-card:hover {
            border-color: rgba(17, 17, 17, 0.35) !important;
          }
          .tools-card span {
            margin-bottom: 8px !important;
            font-size: 0.65rem !important;
          }
          .tools-card h3 {
            font-size: 0.98rem !important;
            margin-bottom: 8px !important;
          }
          .tools-card p {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
        }
      `}} />
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: string[], direction: "left" | "right" }) {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <div 
        className={`marquee-track marquee-track-${direction}`}
        style={{ 
          display: "flex", 
          gap: "20px", 
          width: "max-content",
          padding: "0 10px"
        }}
      >
        {duplicatedItems.map((src, idx) => (
          <div 
            key={idx}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#16161a", // Subtle card background
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              padding: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.filter = "grayscale(0%) opacity(100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.filter = "grayscale(100%) opacity(100%)";
            }}
          >
            <img 
              src={src} 
              alt="Tool Logo" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "grayscale(100%) opacity(100%)",
                transition: "filter 0.4s ease",
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
