"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { label: "🎬 Adobe Premiere Pro", bg: "#ffffff", color: "#000000" },
  { label: "🎨 Adobe After Effects", bg: "#dafd55", color: "#000000" },
  { label: "🎵 Audio Enhancement Tools", bg: "#d2bbf4", color: "#000000" },
  { label: "📱 Higgsfield", bg: "#000000", color: "#ffffff" },
];

export default function WorkshopToolsInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".interactiveToolPill",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="workshopToolsInteractiveSection workshopGsapSection" 
      id="tools"
      ref={containerRef}
      style={{ 
        padding: "15vh 20px", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        overflow: "hidden" 
      }}
    >
      <div className="interactiveToolsStack" style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "100%",
        maxWidth: "900px" 
      }}>
        {tools.map((tool, index) => (
          <div 
            key={index}
            className="interactiveToolPill"
            style={{
              backgroundColor: tool.bg,
              color: tool.color,
              padding: "clamp(20px, 4vw, 40px) clamp(30px, 6vw, 80px)",
              borderRadius: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: "600",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.03em",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              zIndex: tools.length - index,
              marginTop: index !== 0 ? "clamp(-40px, -6vw, -80px)" : "0",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: "pointer",
              position: "relative",
              width: "max-content",
              minWidth: "70%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translateY(-20px) scale(1.03)`;
              e.currentTarget.style.zIndex = "10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translateY(0) scale(1)`;
              e.currentTarget.style.zIndex = `${tools.length - index}`;
            }}
          >
            <span>{tool.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
