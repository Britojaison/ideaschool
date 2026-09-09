"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const tools = [
  { 
    label: "Premiere Pro", icon: "/images/adobepremierepro.svg", bg: "#ffffff", color: "#000000", width: "55%", borderRadius: "24px", zIndex: 1,
    xRange: [-80, 80], yRange: [-40, 40], rotateRange: [-12, 12] 
  },
  { 
    label: "After Effects", icon: "/images/after effects.png", bg: "#dafd55", color: "#000000", width: "75%", borderRadius: "100px", zIndex: 2,
    xRange: [-40, 40], yRange: [-20, 20], rotateRange: [-6, 6] 
  },
  { 
    label: "Audio Tools", icon: "/images/Audio tools.jpg.avif", bg: "#d2bbf4", color: "#000000", width: "65%", borderRadius: "32px", zIndex: 3,
    xRange: [40, -40], yRange: [20, -20], rotateRange: [5, -5] 
  },
  { 
    label: "Higgsfield AI", icon: "/images/higgsfield_ai.webp", bg: "#000000", color: "#ffffff", width: "60%", borderRadius: "100px", zIndex: 4,
    xRange: [90, -90], yRange: [50, -50], rotateRange: [15, -15] 
  },
];

function ToolCard({ tool, smoothX, smoothY, index }: any) {
  // Map normalized mouse coordinates (-1 to 1) to specific movement ranges for each card
  const x = useTransform(smoothX, [-1, 1], tool.xRange);
  const y = useTransform(smoothY, [-1, 1], tool.yRange);
  const rotate = useTransform(smoothX, [-1, 1], tool.rotateRange);

  return (
    <motion.div
      className="workshopToolCard"
      initial={{ y: 150, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-18% 0px -12%" }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 20,
        delay: 0.1
      }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: tool.zIndex,
        position: "relative",
        marginTop: index !== 0 ? "clamp(-20px, -3vw, -40px)" : "0",
      }}
    >
      <motion.div
        className="workshopToolCardInner"
        whileHover={{ scale: 1.03 }}
        style={{
          "--tool-width": tool.width,
          "--tool-radius": tool.borderRadius,
          x: x as any,
          y: y as any,
          rotate: rotate as any,
          backgroundColor: tool.bg,
          color: tool.color,
          width: "var(--tool-width)",
          padding: "clamp(16px, 2.5vw, 32px) 20px",
          borderRadius: "var(--tool-radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(12px, 2vw, 24px)",
          fontSize: "clamp(28px, 4.5vw, 56px)",
          fontWeight: "500",
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.04em",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          whiteSpace: "nowrap",
          userSelect: "none",
          cursor: "default"
        } as any}
      >
        {tool.icon && (
          <img 
            src={tool.icon} 
            alt={tool.label} 
            style={{ 
              height: "1.2em",
              width: "auto",
              objectFit: "contain",
              display: "block",
              pointerEvents: "none",
              borderRadius: "8px"
            }} 
          />
        )}
        {tool.label}
      </motion.div>
    </motion.div>
  );
}

export default function WorkshopToolsInteractive() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobileMotion, setIsMobileMotion] = useState(false);

  // Smooth out the mouse values with a spring for that fluid, delayed feeling
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateMotionMode = () => setIsMobileMotion(mobileQuery.matches);
    updateMotionMode();

    const handlePointerMove = (e: PointerEvent) => {
      // Normalize mouse coordinates between -1 and 1
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    mobileQuery.addEventListener("change", updateMotionMode);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      mobileQuery.removeEventListener("change", updateMotionMode);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isMobileMotion) {
      return;
    }

    let frameId = 0;
    const startedAt = performance.now();

    const animateMobileTools = (now: number) => {
      const elapsed = (now - startedAt) / 1000;
      mouseX.set(Math.sin(elapsed * 0.85) * 0.42);
      mouseY.set(Math.cos(elapsed * 0.65) * 0.5);
      frameId = requestAnimationFrame(animateMobileTools);
    };

    frameId = requestAnimationFrame(animateMobileTools);

    return () => cancelAnimationFrame(frameId);
  }, [isMobileMotion, mouseX, mouseY]);

  return (
    <section 
      className="workshopToolsInteractiveSection" 
      id="tools"
      style={{ 
        minHeight: "100vh",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        overflow: "hidden",
        position: "relative",
        background: "radial-gradient(circle at center, rgba(218, 253, 85, 0.05) 0%, transparent 60%)",
        padding: "10vh 20px"
      }}
    >
      <motion.div 
        className="workshopToolsEyebrow"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
        style={{
          position: "absolute",
          top: "4vw",
          left: "1vw",
          fontSize: "clamp(80px, 15vw, 220px)",
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          color: "#000000",
          opacity: 1,
          zIndex: 0,
          pointerEvents: "none",
          lineHeight: 0.8,
          letterSpacing: "-0.05em"
        }}
      >
        TOOLS
      </motion.div>
      <motion.div 
        className="workshopToolsFooterWord"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
        style={{
          position: "absolute",
          bottom: "2vw",
          right: "1vw",
          fontSize: "clamp(80px, 15vw, 220px)",
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          color: "#000000",
          opacity: 1,
          zIndex: 0,
          pointerEvents: "none",
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
          textAlign: "right"
        }}
      >
        YOU&apos;LL LEARN
      </motion.div>

      <div style={{ 
        position: "relative", 
        width: "100%",
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10
      }}>
        {tools.map((tool, index) => (
          <ToolCard 
            key={index} 
            tool={tool} 
            smoothX={smoothX} 
            smoothY={smoothY} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
