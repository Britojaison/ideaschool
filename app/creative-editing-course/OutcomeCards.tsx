"use client";

import { useEffect, useRef, useState } from "react";

type OutcomeCardsProps = {
  outcomes: string[];
};

export default function OutcomeCards({ outcomes }: OutcomeCardsProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.18) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: [0, 0.18],
      },
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`outcomeGrid ${isVisible ? "is-visible" : ""}`} ref={gridRef}>
      {outcomes.map((outcome, index) => (
        <article className="outcomeCard" key={outcome}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{outcome}</p>
        </article>
      ))}
    </div>
  );
}
