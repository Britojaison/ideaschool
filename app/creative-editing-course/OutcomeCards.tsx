"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type OutcomeCardsProps = {
  outcomes: string[];
};

const outcomeImages = [
  "/images/Editing.jpg",
  "/images/Motion Graphics.jpg",
  "/images/VFX.jpg",
  "/images/Graphic Design.jpg",
  "/images/Artboard 2 (1).jpg",
  "/images/Industry.jpg",
];

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
          <div className="outcomeCardMedia">
            <Image
              src={outcomeImages[index]}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 55vw"
              className="outcomeCardImage"
            />
          </div>
          <div className="outcomeCardMeta">
            <p>{outcome}</p>
            <span aria-hidden="true">
              {String(index + 1).padStart(3, "0")} / <i>{String(outcomes.length).padStart(3, "0")}</i>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
