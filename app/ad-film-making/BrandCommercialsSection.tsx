"use client";

import { useEffect, useRef, useState } from "react";
import BrandCommercialVideo from "./BrandCommercialVideo";

type BrandCommercial = {
  title: string;
  mobileHeading?: string;
  src: string;
  poster: string;
};

export default function BrandCommercialsSection({
  commercials,
}: {
  commercials: BrandCommercial[];
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncMobileState = () => setIsMobile(mediaQuery.matches);

    syncMobileState();
    mediaQuery.addEventListener("change", syncMobileState);

    return () => mediaQuery.removeEventListener("change", syncMobileState);
  }, []);

  useEffect(() => {
    const cards = cardRefs.current.filter((card): card is HTMLElement => card !== null);

    if (!cards.length || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = cards.findIndex((card) => card === visibleEntry.target);

        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      {
        threshold: [0.42, 0.58, 0.72],
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [commercials.length]);

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
              <article
                className="brandCommercialCard"
                key={commercial.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                {commercial.mobileHeading ? (
                  <h3 className="brandCommercialMobileHeading">{commercial.mobileHeading}</h3>
                ) : null}
                <BrandCommercialVideo
                  src={commercial.src}
                  poster={commercial.poster}
                  title={commercial.title}
                  isActive={isMobile || index === activeIndex}
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
