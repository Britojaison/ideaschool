"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "@/components/ui/staggerText";
import styles from "./WhatYouBuild.module.css";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    step: "00",
    title: "Creative editing project output",
    description: "Build your portfolio as you learn. Every module should lead to work you can review, improve and present.",
    image: "/images/DSC00232.JPG"
  },
  {
    step: "01",
    title: "Short-form and commercial editing",
    description: "Develop pacing, structure, captions, sound and platform-ready delivery.",
    image: "/images/DSC00048.JPG"
  },
  {
    step: "02",
    title: "Motion graphics and visual effects",
    description: "Use typography, animation, compositing, tracking and visual treatments with purpose.",
    image: "/images/DSC00298.JPG"
  },
  {
    step: "03",
    title: "Creative AI production",
    description: "Use AI for ideation, visual development and production without replacing creative judgment.",
    image: "/images/DSC00123.JPG"
  },
  {
    step: "04",
    title: "Professional portfolio work",
    description: "Present finished work and explain the decisions behind it with confidence.",
    image: "/images/DSC00041.JPG"
  }
];

export default function WhatYouBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeText, setActiveText] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const TOTAL_SEGMENTS = 2 + SLIDES.length; // 7 segments total

      // Initialize subsequent images to be hidden below
      for (let i = 1; i < SLIDES.length; i++) {
        if (imageRefs.current[i]) {
          gsap.set(imageRefs.current[i], { yPercent: 100, zIndex: i + 1 });
        }
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${TOTAL_SEGMENTS * 100}%`,
          scrub: true,
          pin: true,
          refreshPriority: -1,
          onUpdate: (self) => {
            // progress = 1 means segment = 7. We want it capped at 6.
            const rawSegment = Math.floor(self.progress * TOTAL_SEGMENTS);
            const segment = Math.min(TOTAL_SEGMENTS - 1, rawSegment);
            
            let newActive = Math.max(0, segment - 1);
            newActive = Math.min(newActive, SLIDES.length); // Max index is 5 (Intro + 5 slides)
            
            // We need to safely update state without infinite loops in GSAP callback
            // State updates in GSAP onUpdate can cause issues if not careful, 
            // but Next.js batched state updates usually handle this fine.
            setActiveText((prev) => (prev !== newActive ? newActive : prev));
          }
        }
      });

      // Phase 0: Hold (1 duration)
      tl.to({}, { duration: 1 });

      // Phase 1: Shrink Image 0 (1 duration)
      if (imageRefs.current[0]) {
        tl.to(imageRefs.current[0], { width: "50%", ease: "none", duration: 1 });
      }

      // Phase 2: Hold Image 0 while Text 1 is shown (1 duration)
      tl.to({}, { duration: 1 });

      // Phase 3-6: Slide images 1-4 (1 duration each)
      for (let i = 1; i < SLIDES.length; i++) {
        if (imageRefs.current[i]) {
          tl.to(imageRefs.current[i], { yPercent: 0, ease: "none", duration: 1 });
        }
      }

      const ro = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      ro.observe(document.body);

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        clearTimeout(refreshTimeout);
        ro.disconnect();
      };
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className={styles.wrapper} ref={containerRef}>
      {/* Sticky Right Side - Desktop Only */}
      <div className={`${styles.stickyContainer} ${styles.desktopOnly}`}>
        {SLIDES.map((slide, index) => (
          <div 
            key={`img-${index}`} 
            className={`${styles.imageWrapper} ${index === 0 ? styles.imageWrapperFirst : ""}`}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Pinned Left Side - Desktop Only */}
      <div className={`${styles.leftPanel} ${styles.desktopOnly}`}>
        {/* Intro Block (activeText === 0) */}
        {activeText === 0 && (
          <div className={styles.textBlock}>
            <div className={styles.introSection}>
              <h2 className={styles.introTitle}>WHAT YOU BUILD</h2>
              <h3 className={styles.introHeading}>
                <TextAnimation divideBy="word" delay={0.1}>
                  WORK THAT SHOWS WHAT YOU CAN DO.
                </TextAnimation>
              </h3>
              <p className={styles.introDesc}>
                <TextAnimation divideBy="word" delay={0.2}>
                  Your portfolio develops throughout the program through practical assignments, mentor reviews and revision cycles.
                </TextAnimation>
              </p>
            </div>
          </div>
        )}

        {/* Text Blocks for Slides (activeText === 1 to 5) */}
        {SLIDES.map((slide, index) => (
          activeText === index + 1 && (
            <div key={`text-${index}`} className={styles.textBlock}>
              <div className={styles.slideContent}>
                {slide.step !== "00" && <span className={styles.stepNumber}>{slide.step}</span>}
                <h4 className={styles.stepTitle}>
                  <TextAnimation divideBy="word" delay={0.1}>
                    {slide.title}
                  </TextAnimation>
                </h4>
                <p className={styles.stepDesc}>
                  <TextAnimation divideBy="word" delay={0.2}>
                    {slide.description}
                  </TextAnimation>
                </p>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Mobile Stacked Section */}
      <div className={styles.mobileOnly}>
        {/* Intro for mobile */}
        <div className={styles.textBlock}>
          <div className={styles.introSection}>
            <h2 className={styles.introTitle}>WHAT YOU BUILD</h2>
            <h3 className={styles.introHeading}>
              <TextAnimation divideBy="word" delay={0.1}>
                WORK THAT SHOWS WHAT YOU CAN DO.
              </TextAnimation>
            </h3>
            <p className={styles.introDesc}>
              <TextAnimation divideBy="word" delay={0.2}>
                Your portfolio develops throughout the program through practical assignments, mentor reviews and revision cycles.
              </TextAnimation>
            </p>
          </div>
        </div>
        
        {SLIDES.map((slide, index) => (
          <div key={`mobile-slide-${index}`} className={styles.mobileSlide}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.textBlock}>
              {slide.step !== "00" && <span className={styles.stepNumber}>{slide.step}</span>}
              <h4 className={styles.stepTitle}>
                <TextAnimation divideBy="word" delay={0.1}>
                  {slide.title}
                </TextAnimation>
              </h4>
              <p className={styles.stepDesc}>
                <TextAnimation divideBy="word" delay={0.2}>
                  {slide.description}
                </TextAnimation>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
