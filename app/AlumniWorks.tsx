"use client";

import Image from "next/image";
import LiquidGlass from "liquid-glass-react";
import { useEffect, useRef, useState } from "react";

const workThumbs = [
  {
    title: "Food campaign",
    image: "/images/83d40f1614fb920fd1bdd8fdf7f8792990b98f32.jpg",
  },
  {
    title: "Black Friday",
    image: "/images/bf2b72489ff720a0100b6ab10c6e86a70fbc6c43.jpg",
  },
  {
    title: "Style launch",
    image: "/images/3d74c9843424c9aa30c3f33fc28bd08f861c5aec.jpg",
  },
  {
    title: "Spring drink",
    image: "/images/9bf47fe908af3a71635ab3e3d95e681fc3b09fe4.jpg",
  },
  {
    title: "Automotive",
    image: "/images/automotive copy.jpg",
  },
  {
    title: "Shoe sale",
    image: "/images/ce04d496a79858c7cfcdeeb68c3992c3b57447a2.jpg",
  },
  {
    title: "Auto show",
    image: "/images/2556835a1b7b46f9e856961edea7b9f43a023941.jpg",
  },
];

export default function AlumniWorks() {
  const [selectedIndex, setSelectedIndex] = useState(4);
  const thumbsRailRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isProgrammaticScroll = useRef(false);
  const selectionChangedByScroll = useRef(false);
  const selectedWork = workThumbs[selectedIndex];
  const progress = ((selectedIndex + 1) / workThumbs.length) * 100;

  useEffect(() => {
    if (selectionChangedByScroll.current) {
      selectionChangedByScroll.current = false;
      return;
    }

    isProgrammaticScroll.current = true;
    thumbRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    const timer = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 420);

    return () => window.clearTimeout(timer);
  }, [selectedIndex]);

  const syncSelectionToCenter = () => {
    if (isProgrammaticScroll.current || !thumbsRailRef.current) {
      return;
    }

    const railBounds = thumbsRailRef.current.getBoundingClientRect();
    const railCenter = railBounds.left + railBounds.width / 2;
    let nearestIndex = selectedIndex;
    let nearestDistance = Number.POSITIVE_INFINITY;

    thumbRefs.current.forEach((thumb, index) => {
      if (!thumb) {
        return;
      }

      const thumbBounds = thumb.getBoundingClientRect();
      const thumbCenter = thumbBounds.left + thumbBounds.width / 2;
      const distance = Math.abs(thumbCenter - railCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (nearestIndex !== selectedIndex) {
      selectionChangedByScroll.current = true;
      setSelectedIndex(nearestIndex);
    }
  };

  const selectPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? workThumbs.length - 1 : current - 1,
    );
  };

  const selectNext = () => {
    setSelectedIndex((current) =>
      current === workThumbs.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="works" id="about" aria-label="Student works">
      <div className="worksStage">
        <Image
          src={selectedWork.image}
          alt={`${selectedWork.title} alumni work`}
          fill
          sizes="100vw"
          className="worksHeroImage"
          priority={selectedIndex === 4}
        />
        <div className="worksLabelMount">
          <LiquidGlass
            className="worksLabelGlass"
            displacementScale={64}
            blurAmount={0.1}
            saturation={130}
            aberrationIntensity={2}
            elasticity={0.35}
            cornerRadius={100}
            padding="0"
            mode="prominent"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <span className="worksLabelText">Alumni works</span>
          </LiquidGlass>
        </div>

        <div className="worksMeta">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <a href="#apply">Explore Now</a>
          <dl>
            <div>
              <dt>From 0 - 60 mph</dt>
              <dd>2.4 Sec</dd>
            </div>
            <div>
              <dt>Class storage</dt>
              <dd>30 cu ft</dd>
            </div>
            <div>
              <dt>Range</dt>
              <dd>370 ml</dd>
            </div>
          </dl>
        </div>

        <div className="worksPager" aria-label="Student work carousel">
          <div className="worksPagerControls">
            <button type="button" onClick={selectPrevious}>
              Prev
            </button>
            <span>/</span>
            <button type="button" onClick={selectNext}>
              Next
            </button>
          </div>
          <div className="worksProgress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <small>
            {workThumbs.slice(0, 4).map((_, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Show work ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
                onClick={() => setSelectedIndex(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
            <button type="button" onClick={selectNext} aria-label="Next work">
              +
            </button>
          </small>
        </div>
      </div>

      <div className="worksThumbViewport">
        <div className="workThumbSelection" aria-hidden="true" />
        <div
          className="worksThumbs"
          ref={thumbsRailRef}
          aria-label="More student works"
          onScroll={syncSelectionToCenter}
        >
          {workThumbs.map((thumb, index) => (
            <button
              className="workThumb"
              key={thumb.title}
              type="button"
              ref={(node) => {
                thumbRefs.current[index] = node;
              }}
              aria-current={index === selectedIndex ? "true" : undefined}
              aria-label={`Show ${thumb.title}`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={thumb.image}
                alt=""
                fill
                sizes="243px"
                className="workThumbImage"
              />
              <span>{thumb.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
