"use client";

import { useEffect, useRef, useState } from "react";
import DotField from "../DotField";

export default function LazyCurriculumDotField() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    const mount = mountRef.current;

    if (!mount) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldRender(true);
        observer.disconnect();
      },
      {
        rootMargin: "360px 0px",
      },
    );

    observer.observe(mount);

    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={mountRef} className="programCurriculumDots">
      {shouldRender ? (
        <DotField
          dotRadius={2.6}
          dotSpacing={16}
          cursorRadius={460}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={60}
          glowRadius={150}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(218, 253, 85, 0.42)"
          gradientTo="rgba(180, 151, 207, 0.26)"
          glowColor="rgba(218, 253, 85, 0.14)"
        />
      ) : null}
    </div>
  );
}
