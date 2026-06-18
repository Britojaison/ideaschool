"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const tools = [
  { 
    label: "Premiere Pro", bg: "#ffffff", color: "#000000", width: "65%", borderRadius: "24px", zIndex: 1,
    xRange: [-80, 80], yRange: [-40, 40], rotateRange: [-12, 12] 
  },
  { 
    label: "After Effects", bg: "#dafd55", color: "#000000", width: "90%", borderRadius: "100px", zIndex: 2,
    xRange: [-40, 40], yRange: [-20, 20], rotateRange: [-6, 6] 
  },
  { 
    label: "Audio Tools", bg: "#d2bbf4", color: "#000000", width: "80%", borderRadius: "32px", zIndex: 3,
    xRange: [40, -40], yRange: [20, -20], rotateRange: [5, -5] 
  },
  { 
    label: "Higgsfield AI", bg: "#000000", color: "#ffffff", width: "70%", borderRadius: "100px", zIndex: 4,
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
      initial={{ y: 150, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
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
        whileHover={{ scale: 1.03 }}
        style={{
          x,
          y,
          rotate,
          backgroundColor: tool.bg,
          color: tool.color,
          width: tool.width,
          padding: "clamp(20px, 3vw, 40px) 20px",
          borderRadius: tool.borderRadius,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(32px, 6vw, 72px)",
          fontWeight: "500",
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.04em",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          whiteSpace: "nowrap",
          userSelect: "none",
          cursor: "default"
        }}
      >
        {tool.label}
      </motion.div>
    </motion.div>
  );
}

export default function WorkshopToolsInteractive() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values with a spring for that fluid, delayed feeling
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates between -1 and 1
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
      <div style={{ 
        position: "relative", 
        width: "100%",
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
