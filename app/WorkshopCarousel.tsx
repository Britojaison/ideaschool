"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Workshop = {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
};

type WorkshopCarouselProps = {
  workshops: Workshop[];
};

export default function WorkshopCarousel({ workshops }: WorkshopCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = cardRefs.current[activeIndex];

    if (!carousel || !activeCard) {
      return;
    }

    const nextScrollLeft =
      activeCard.offsetLeft - carousel.clientWidth / 2 + activeCard.clientWidth / 2;

    carousel.scrollTo({
      left: nextScrollLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div
      className="workshopCards"
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setActiveIndex(1);
        setIsPaused(false);
      }}
    >
      {workshops.map((workshop, index) => {
        const isAutoActive = !isPaused && index === activeIndex;

        return (
          <article
            className={`workshopCard${workshop.comingSoon ? " comingSoon" : ""}${isAutoActive ? " isAutoActive" : ""}${!isPaused && !isAutoActive ? " isAutoDimmed" : ""}`}
            key={workshop.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            onMouseEnter={() => {
              setActiveIndex(index);
              setIsPaused(true);
            }}
            onFocus={() => {
              setActiveIndex(index);
              setIsPaused(true);
            }}
            onBlur={() => {
              setActiveIndex(1);
              setIsPaused(false);
            }}
          >
            {index === 1 ? (
              <span className="availability">
                <span className="availabilityText">Available</span>
              </span>
            ) : null}
            <Image
              src={workshop.image}
              alt=""
              fill
              sizes="(max-width: 980px) 100vw, 33vw"
              className="workshopCardImage"
            />
            {workshop.comingSoon ? (
              <span className="comingSoonLabel">Coming Soon</span>
            ) : (
              <div className="workshopCardCopy">
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
