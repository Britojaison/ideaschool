"use client";

import React from "react";

const allTools = [
  "/images/adobepremierepro.svg",
  "/images/ps-logo-transparent.png",
  "/images/Ae_logo.webp",
  "/images/Canva_icon.png",
  "/images/captionsai.avif",
  "/images/opus_clip.png",
  "/images/elevenlabs-official-logo.svg",
  "/images/framer.webp",
  "/images/tool1.webp",
  "/images/heygen.webp",
  "/images/moj.webp",
  "/images/higgsfield_ai.webp",
];

export default function ToolsMarquee() {
  return (
    <section 
      style={{ 
        padding: "80px 0", 
        backgroundColor: "transparent", 
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2 
        style={{
          color: "#ffffff",
          fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif',
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 900,
          textTransform: "uppercase",
          marginBottom: "40px",
          textAlign: "center",
          letterSpacing: "2px"
        }}
      >
        Tools Covered
      </h2>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <MarqueeRow items={allTools} direction="left" />
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
        .marquee-track:hover {
          animation-play-state: paused;
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
