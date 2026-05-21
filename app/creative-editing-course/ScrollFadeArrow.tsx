"use client";

import { useEffect, useRef } from "react";

export default function ScrollFadeArrow() {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateArrow = () => {
      animationFrame = 0;

      if (!arrowRef.current) {
        return;
      }

      const section = arrowRef.current.closest<HTMLElement>(".longCourseOutcomes");

      if (!section) {
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const enterProgress = Math.min(
        Math.max((window.innerHeight * 0.82 - sectionRect.top) / (window.innerHeight * 0.36), 0),
        1,
      );
      const exitProgress = Math.min(
        Math.max((window.innerHeight * 0.18 - sectionRect.bottom) / (window.innerHeight * 0.5), 0),
        1,
      );
      const opacity = enterProgress * (1 - exitProgress);
      const leftClip = (1 - enterProgress) * 100;
      const rightClip = exitProgress * 100;
      const shift = (1 - enterProgress) * 32 - exitProgress * 28;

      arrowRef.current.style.setProperty("--arrow-opacity", `${opacity}`);
      arrowRef.current.style.setProperty("--arrow-clip-left", `${leftClip}%`);
      arrowRef.current.style.setProperty("--arrow-clip-right", `${rightClip}%`);
      arrowRef.current.style.setProperty("--arrow-shift", `${shift}px`);
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateArrow);
    };

    updateArrow();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="longCourseScrollArrow" aria-hidden="true" ref={arrowRef}>
      <span />
    </div>
  );
}
