"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./StudentTestimonials.module.css";

const testimonials = [
  {
    name: "Manjunath Hegde",
    role: "Video Editor & Motion Designer",
    image: "/images/videofullcourse/MANJUNATH HEGDE - PROFILE.webp",
    quote:
      "Working on real agency briefs completely changed how I approach storytelling and pacing. The mentor feedback and studio deadlines gave me the confidence to handle commercial client projects seamlessly.",
    tag: "Commercial Editor",
    highlight: "Agency-Ready Output",
  },
  {
    name: "Heren",
    role: "Creative AI & Video Specialist",
    image: "/images/videofullcourse/PROFILE heren.webp",
    quote:
      "Learning both core editing discipline and cutting-edge Gen AI workflows gave me an unfair advantage. I went from editing standard videos to directing complex, visual-heavy campaigns.",
    tag: "AI Direction",
    highlight: "Next-Gen Workflows",
  },
  {
    name: "Alok",
    role: "Post-Production Specialist",
    image: "/images/videofullcourse/PROFILE.webp",
    quote:
      "The hands-on environment and direct critique from industry professionals were invaluable. By week 12, my showreel was stronger than what I had managed to build in two years on my own.",
    tag: "Showreel & Craft",
    highlight: "Studio Discipline",
  },
];

export default function StudentTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.clientWidth / 2;
    const children = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const child = children[index];
      const targetLeft =
        child.offsetLeft - (container.clientWidth - child.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1));
  };

  return (
    <section
      id="student-testimonials"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Hear from our students"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>HEAR FROM OUR </span>
            <span className={styles.highlightWord}>STUDENTS.</span>
          </h2>
        </div>

        {/* Testimonials Cards (3-column Grid on desktop, smooth snap Carousel on tablet & mobile) */}
        <div
          ref={carouselRef}
          className={styles.grid}
          onScroll={handleScroll}
        >
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.studentImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.quoteWrap}>
                  <span className={styles.quoteMark} aria-hidden="true">“</span>
                  <p className={styles.quoteText}>{t.quote}</p>
                </div>

                <div className={styles.authorFooter}>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{t.name}</h3>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Controls (Tablet & Mobile only) */}
        <div className={styles.carouselControls} aria-label="Testimonial navigation">
          <button
            type="button"
            className={styles.navButton}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.dotsContainer}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === activeIndex ? "true" : "false"}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.navButton}
            onClick={handleNext}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
