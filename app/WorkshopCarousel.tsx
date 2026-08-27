"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Workshop = {
  title: string;
  description: string;
  image: string;
  href?: string;
  comingSoon?: boolean;
  hideApplyButton?: boolean;
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
        const className = `workshopCard${workshop.comingSoon ? " comingSoon" : ""}${isAutoActive ? " isAutoActive" : ""}${!isPaused && !isAutoActive ? " isAutoDimmed" : ""}`;
        const sharedProps = {
          className,
          onMouseEnter: () => {
            setActiveIndex(index);
            setIsPaused(true);
          },
          onFocus: () => {
            setActiveIndex(index);
            setIsPaused(true);
          },
          onBlur: () => {
            setActiveIndex(1);
            setIsPaused(false);
          },
        };
        const cardContent = (
          <>
            {workshop.href && !workshop.hideApplyButton ? (
              <span className="availability">Apply Now</span>
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
            ) : null}
            <div className="workshopCardCopy" style={{ textAlign: "left", alignItems: "flex-start" }}>
              <h3 style={{ display: "block", textAlign: "left", margin: 0, width: "100%" }}>{workshop.title}</h3>
              <p style={{ display: "block", textAlign: "left", margin: "12px 0 0", width: "100%" }}>{workshop.description}</p>
            </div>
          </>
        );

        if (workshop.href) {
          return (
            <Link
              {...sharedProps}
              href={workshop.href}
              key={workshop.title}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              aria-label={`Apply for ${workshop.title}`}
            >
              {cardContent}
            </Link>
          );
        }

        return (
          <article
            {...sharedProps}
            key={workshop.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          >
            {cardContent}
          </article>
        );
      })}
    </div>
  );
}
