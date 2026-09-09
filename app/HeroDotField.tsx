"use client";

import { useEffect, useState } from "react";
import DotField from "./DotField";

export default function HeroDotField() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let frameId: number | null = null;

    const updateOpacity = () => {
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.72;
      const end = viewportHeight * 0.98;
      const progress = Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1);
      setOpacity(1 - progress * progress);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateOpacity);
    };

    updateOpacity();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="heroDotField" style={{ opacity }}>
      <DotField
        dotRadius={2.8}
        dotSpacing={16}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
        gradientFrom="rgba(168, 85, 247, 0.52)"
        gradientTo="rgba(180, 151, 207, 0.38)"
        glowColor="rgba(168, 85, 247, 0.18)"
      />
    </div>
  );
}
