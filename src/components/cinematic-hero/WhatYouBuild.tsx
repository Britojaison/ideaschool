"use client";

import React, { useRef, useState, useEffect } from "react";
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
    title: "Creative editing project output",
    description: "Build your portfolio as you learn. Every module should lead to work you can review, improve and present.",
    image: "/images/DSC00232.webp"
  },
  {
    title: "Short-form and commercial editing",
    description: "Develop pacing, structure, captions, sound and platform-ready delivery.",
    image: "/images/DSC00048.webp"
  },
  {
    title: "Motion graphics and visual effects",
    description: "Use typography, animation, compositing, tracking and visual treatments with purpose.",
    image: "/images/DSC00298.webp"
  },
  {
    title: "Creative AI production",
    description: "Use AI for ideation, visual development and production without replacing creative judgment.",
    image: "/images/DSC00123.webp"
  },
  {
    title: "Professional portfolio work",
    description: "Present finished work and explain the decisions behind it with confidence.",
    image: "/images/DSC00041.webp"
  }
];

export default function WhatYouBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeText, setActiveText] = useState(0);

  // Mouse cursor follower
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useRef<gsap.QuickToFunc | null>(null);
  const cursorY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    cursorX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.18,
      ease: "power2.out",
    });
    cursorY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.18,
      ease: "power2.out",
    });

    const checkHoverOnScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= 0;
      if (!inView) {
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", checkHoverOnScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkHoverOnScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorX.current && cursorY.current) {
      cursorX.current(e.clientX);
      cursorY.current(e.clientY);
    }
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const INTRO_HOLD_DURATION = 1;
      const IMAGE_RESIZE_DURATION = 1.2;
      const INTRO_READING_DURATION = 1.8;
      const SLIDE_READING_DURATION = 2;
      const IMAGE_REVEAL_DURATION = 1;
      const FINAL_EXIT_HOLD_DURATION = 1;
      const textChangeTimes = [0];

      // Initialize first image to 100% full width
      if (imageRefs.current[0]) {
        gsap.set(imageRefs.current[0], { width: "100%" });
      }

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
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          onUpdate: (self) => {
            const timelineTime = self.progress * tl.duration();
            let newActive = 0;

            for (let i = 1; i < textChangeTimes.length; i++) {
              if (timelineTime >= textChangeTimes[i]) newActive = i;
            }

            // We need to safely update state without infinite loops in GSAP callback
            // State updates in GSAP onUpdate can cause issues if not careful, 
            // but Next.js batched state updates usually handle this fine.
            setActiveText((prev) => (prev !== newActive ? newActive : prev));
          }
        }
      });

      // 1. Hold on full-bleed image so user sees the initial full image
      tl.to({}, { duration: INTRO_HOLD_DURATION });

      // 2. Shrink first image from 100% to 50%, revealing the intro on the left
      if (imageRefs.current[0]) {
        tl.fromTo(
          imageRefs.current[0],
          { width: "100%" },
          {
            width: "50%",
            ease: "none",
            duration: IMAGE_RESIZE_DURATION,
          }
        );
      }

      // 3. Pause so the user can read the revealed intro ("WORK THAT SHOWS WHAT YOU CAN DO")
      tl.to({}, { duration: INTRO_READING_DURATION });

      // 4. ON NEXT SCROLL: Switch to Slide 0 ("Creative editing project output")
      textChangeTimes.push(tl.duration());
      tl.to({}, { duration: SLIDE_READING_DURATION });

      // 5. Subsequent slides (1 through 4)
      for (let i = 1; i < SLIDES.length; i++) {
        if (imageRefs.current[i]) {
          tl.fromTo(
            imageRefs.current[i],
            { yPercent: 100 },
            {
              yPercent: 0,
              ease: "none",
              duration: IMAGE_REVEAL_DURATION,
            }
          );
        }

        textChangeTimes.push(tl.duration());
        tl.to({}, {
          duration: i === SLIDES.length - 1
            ? FINAL_EXIT_HOLD_DURATION
            : SLIDE_READING_DURATION,
        });
      }

      ScrollTrigger.sort();
      ScrollTrigger.refresh();

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      }, 300);

      return () => {
        clearTimeout(refreshTimeout);
      };
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      className={styles.wrapper}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop Mouse Cursor Follower saying SCROLL */}
      <div
        ref={cursorRef}
        className={`${styles.cursorFollower} ${isHovered ? styles.cursorFollowerActive : ""}`}
      >
        <span className={styles.cursorWord}>SCROLL</span>
      </div>

      <div className={styles.stickyStage}>
        {/* Sticky Right Side - Desktop Only */}
        <div className={`${styles.stickyContainer} ${styles.desktopOnly}`}>
          {SLIDES.map((slide, index) => (
            <div
              key={`img-${index}`}
              className={`${styles.imageWrapper} ${index === 0 ? styles.imageWrapperFirst : ""}`}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              style={index === 0 ? { width: "100%" } : undefined}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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

          <div className={styles.mobileGrid}>
            {SLIDES.map((slide, index) => (
              <div key={`mobile-slide-${index}`} className={styles.mobileSlide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.textBlock}>
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
        </div>
      </div>
    </section>
  );
}
