"use client";

import { useRef, useState } from "react";
import BrandCommercialVideo from "./BrandCommercialVideo";

type BrandCommercial = {
  title: string;
  src: string;
  poster: string;
};

export default function BrandCommercialsSection({
  commercials,
}: {
  commercials: BrandCommercial[];
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncActiveSlide = () => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const nextIndex = Math.round(rail.scrollLeft / rail.clientWidth);
    setActiveIndex(Math.max(0, Math.min(commercials.length - 1, nextIndex)));
  };

  const scrollBySlide = (direction: -1 | 1) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(commercials.length - 1, activeIndex + direction));
    setActiveIndex(nextIndex);

    rail.scrollTo({
      left: rail.clientWidth * nextIndex,
      behavior: "smooth",
    });
  };

  return (
    <section className="brandCommercials" aria-label="Brand commercial ad films">
      <div className="brandCommercialsInner">
        <h2>Create Brand Commercial ad films Without a Crew.</h2>
        <div className="brandCommercialViewport">
          <button
            className="brandCommercialArrow isPrevious"
            type="button"
            aria-label="Previous brand commercial"
            disabled={activeIndex === 0}
            onClick={() => scrollBySlide(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="brandCommercialGrid" ref={railRef} onScroll={syncActiveSlide}>
            {commercials.map((commercial, index) => (
              <article className="brandCommercialCard" key={commercial.title}>
                <BrandCommercialVideo
                  src={commercial.src}
                  poster={commercial.poster}
                  title={commercial.title}
                  isActive={index === activeIndex}
                />
              </article>
            ))}
          </div>
          <button
            className="brandCommercialArrow isNext"
            type="button"
            aria-label="Next brand commercial"
            disabled={activeIndex === commercials.length - 1}
            onClick={() => scrollBySlide(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
