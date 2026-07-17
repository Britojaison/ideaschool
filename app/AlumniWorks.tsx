"use client";

import LiquidGlass from "liquid-glass-react";
import { useEffect, useRef, useState } from "react";

const workThumbs = [
  {
    title: "MM Women's Day",
    video: "/images/MM Women's Day.mp4",
    poster: "/images/alumni-posters/MM Women's Day.mp4.webp",
  },
  {
    title: "Nurse Day PR 2",
    video: "/images/Nurse day PR 2.mp4",
    poster: "/images/alumni-posters/Nurse day PR 2.mp4.webp",
  },
  {
    title: "Celine Paris",
    video: "/images/Celine Paris.mp4",
    poster: "/images/alumni-posters/Celine Paris.mp4.webp",
  },
  {
    title: "Aadi Sale",
    video: "/images/Aadi Sale (1).mp4",
    poster: "/images/alumni-posters/Aadi Sale (1).mp4.webp",
  },
  {
    title: "Ranjit watch",
    video: "/images/Ranjit watch.mp4",
    poster: "/images/alumni-posters/Ranjit watch.mp4.webp",
  },
  {
    title: "Girish",
    video: "/images/alumini-works/Girish_ 2.mp4",
    poster: "/images/alumni-posters/Girish_ 2.mp4.webp",
  },
  {
    title: "Kodak",
    video: "/images/alumini-works/Kodakl.mp4",
    poster: "/images/alumni-posters/Kodakl.mp4.webp",
  },
  {
    title: "Manguu Ad",
    video: "/images/alumini-works/Manguu_Ad.mp4",
    poster: "/images/alumni-posters/Manguu_Ad.mp4.webp",
  },
  {
    title: "TAPO",
    video: "/images/alumini-works/TAPO.mp4",
    poster: "/images/alumni-posters/TAPO.mp4.webp",
  },
  {
    title: "111",
    video: "/images/alumini-works/111.mp4",
    poster: "/images/alumni-posters/111.mp4.webp",
  },
];

export default function AlumniWorks() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
        <video
          key={selectedWork.video}
          className="worksHeroImage"
          autoPlay
          loop
          muted
          playsInline
          poster={selectedWork.poster}
          preload="metadata"
          aria-label={`${selectedWork.title} alumni work`}
        >
          <source src={selectedWork.video} type="video/mp4" />
        </video>
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
            {workThumbs.map((_, index) => (
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
          </small>
        </div>
      </div>

      <div className="worksThumbViewport">
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
              <video
                className="workThumbImage"
                muted
                playsInline
                poster={thumb.poster}
                preload="metadata"
                aria-hidden="true"
              >
                <source src={thumb.video} type="video/mp4" />
              </video>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
