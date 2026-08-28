"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FullCreativeControl.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepItem {
  id: string;
  index: string;
  name: string;
  description: string;
  side: "left" | "right";
}

const STEPS: StepItem[] = [
  {
    id: "01",
    index: "[01]",
    name: "STORY & VISUAL THINKING",
    description:
      "LEARN HOW TO STRUCTURE CONTENT, BUILD ATTENTION, WORK WITH PACING AND TRANSLATE IDEAS INTO VISUAL NARRATIVES.",
    side: "left"
  },
  {
    id: "02",
    index: "[02]",
    name: "PROFESSIONAL VIDEO EDITING",
    description:
      "DEVELOP STRONG EDITING FUNDAMENTALS, RHYTHM, TRANSITIONS, SOUND, STORYTELLING AND EFFICIENT PROJECT WORKFLOWS.",
    side: "right"
  },
  {
    id: "03",
    index: "[03]",
    name: "MOTION & VISUAL DESIGN",
    description:
      "ADD MOTION GRAPHICS, TYPOGRAPHY, COMPOSITING AND VISUAL TREATMENTS TO YOUR EDITING SKILLSET.",
    side: "left"
  },
  {
    id: "04",
    index: "[04]",
    name: "CREATIVE AI & MODERN PRODUCTION",
    description:
      "USE AI AS PART OF THE CREATIVE PROCESS FROM IDEATION AND VISUAL DEVELOPMENT TO CONTENT CREATION AND PRODUCTION EFFICIENCY.",
    side: "right"
  }
];

export default function FullCreativeControl() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [isMagicActive, setIsMagicActive] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const cameraButtonRef = useRef<HTMLButtonElement>(null);
  const magicHintRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const manifestRef = useRef<HTMLDivElement>(null);

  const manualThemeRef = useRef<"dark" | "cream" | null>(null);
  const currentProgressRef = useRef<number>(0);
  const shutterAudioRef = useRef<HTMLAudioElement | null>(null);

  // Cached DOM element references to avoid querySelectorAll on every scroll frame
  const cachedTitlesRef = useRef<NodeListOf<Element> | null>(null);
  const cachedCopiesRef = useRef<NodeListOf<Element> | null>(null);
  const lastThemeEventRef = useRef<number>(0);

  useEffect(() => {
    try {
      shutterAudioRef.current = new Audio("/audio/camera_shutter.mp3");
      shutterAudioRef.current.volume = 0.85;
      shutterAudioRef.current.preload = "auto";
    } catch {}
  }, []);

  // Apply colors smoothly to all elements in section
  const applyColors = useCallback((progress: number) => {
    if (!sectionRef.current) return;

    const bgColor = gsap.utils.interpolate("#080808", "#FBFAF2", progress);
    const borderColor = gsap.utils.interpolate(
      "rgba(255, 255, 255, 0.15)",
      "rgba(17, 17, 17, 0.15)",
      progress
    );
    const headingColor = gsap.utils.interpolate("#FFFFFF", "#111111", progress);
    const copyColor = gsap.utils.interpolate("#A0AAB2", "#596168", progress);

    gsap.set(sectionRef.current, {
      backgroundColor: bgColor,
      borderColor: borderColor,
    });

    // Use cached DOM queries instead of querySelectorAll on every frame
    if (!cachedTitlesRef.current) {
      cachedTitlesRef.current = sectionRef.current.querySelectorAll(`.${styles.title}, .${styles.stepName}`);
    }
    if (cachedTitlesRef.current.length) gsap.set(cachedTitlesRef.current, { color: headingColor });

    if (!cachedCopiesRef.current) {
      cachedCopiesRef.current = sectionRef.current.querySelectorAll(
        `.${styles.subtitle}, .${styles.stepDescription}, .${styles.manifestText}`
      );
    }
    if (cachedCopiesRef.current.length) gsap.set(cachedCopiesRef.current, { color: copyColor });

    // Throttle header-theme-check event to avoid firing on every scroll frame
    const now = Date.now();
    if (now - lastThemeEventRef.current > 100) {
      lastThemeEventRef.current = now;
      window.dispatchEvent(new Event("header-theme-check"));
    }
  }, []);

  // 3D Magnetic Cursor Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cameraRef.current) return;
    const rect = cameraRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const normX = x / (rect.width / 2);
    const normY = y / (rect.height / 2);

    gsap.to(cameraRef.current, {
      rotateY: normX * 16,
      rotateX: -normY * 16,
      x: normX * 10,
      y: normY * 10,
      transformPerspective: 800,
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cameraRef.current) return;
    gsap.to(cameraRef.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  // Magic Click Handler — Shutter Snap, Color Shift & Dynamic Ripple Wave
  const handleMagicClick = () => {
    setIsMagicActive((prev) => !prev);

    // Play camera shutter sound
    if (shutterAudioRef.current) {
      shutterAudioRef.current.currentTime = 0;
      shutterAudioRef.current.play().catch(() => {});
    } else {
      try {
        const audio = new Audio("/audio/camera_shutter.mp3");
        audio.volume = 0.85;
        audio.play().catch(() => {});
      } catch {}
    }

    // Determine current theme state (from manual toggle or scroll progress)
    const isCurrentlyCream = manualThemeRef.current 
      ? manualThemeRef.current === "cream" 
      : currentProgressRef.current >= 0.5;

    const nextTheme: "dark" | "cream" = isCurrentlyCream ? "dark" : "cream";
    manualThemeRef.current = nextTheme;
    const targetProgress = nextTheme === "cream" ? 1 : 0;

    // 1. Shutter Flash Burst
    if (flashRef.current) {
      gsap.fromTo(
        flashRef.current,
        { opacity: 1, scale: 0.6 },
        { opacity: 0, scale: 2.2, duration: 0.55, ease: "power2.out" }
      );
    }

    // 2. Camera Shutter Snap & Recoil
    if (cameraRef.current) {
      gsap.timeline()
        .to(cameraRef.current, { scale: 0.92, rotation: -3, duration: 0.1, ease: "power2.in" })
        .to(cameraRef.current, { scale: 1.08, rotation: 2.5, duration: 0.2, ease: "back.out(2)" })
        .to(cameraRef.current, { scale: 1, rotation: 0, duration: 0.35, ease: "elastic.out(1, 0.4)" });
    }

    // 3. Smooth Color Shift from current progress to target
    const startProgress = currentProgressRef.current;
    const progressObj = { p: startProgress };
    gsap.to(progressObj, {
      p: targetProgress,
      duration: 0.75,
      ease: "power2.inOut",
      onUpdate: () => {
        currentProgressRef.current = progressObj.p;
        applyColors(progressObj.p);
      }
    });

    // 4. Dynamic Content Wave from all sides
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { x: -25 },
        { x: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }
      );
    }

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const waveX = i % 2 === 0 ? -35 : 35;
      gsap.fromTo(
        el,
        { x: waveX, scale: 0.97 },
        { x: 0, scale: 1, duration: 0.65, delay: i * 0.07, ease: "elastic.out(1, 0.5)" }
      );
    });

    if (manifestRef.current) {
      gsap.fromTo(
        manifestRef.current,
        { y: 20 },
        { y: 0, duration: 0.6, delay: 0.25, ease: "elastic.out(1, 0.5)" }
      );
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const camera = cameraRef.current;
    const magicHint = magicHintRef.current;
    const manifest = manifestRef.current;

    if (!section || !header || !camera || !manifest) return;

    const mm = gsap.matchMedia();

    // Helper: show everything immediately (used as fallback)
    const forceShowAll = () => {
      gsap.set(camera, { x: 0, y: 0, opacity: 1, scale: 1, clearProps: "all" });
      if (magicHint) gsap.set(magicHint, { opacity: 1, y: 0, clearProps: "all" });
      gsap.set(header, { x: 0, opacity: 1, clearProps: "all" });
      stepRefs.current.forEach((el) => {
        if (el) gsap.set(el, { x: 0, opacity: 1, clearProps: "all" });
      });
      gsap.set(manifest, { y: 0, opacity: 1, clearProps: "all" });
    };

    mm.add("(min-width: 768px)", () => {
      // Check if section is already visible in viewport (e.g. page loaded mid-scroll)
      const rect = section.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.8;

      if (alreadyVisible) {
        // Already past trigger — show everything immediately, apply cream colors
        forceShowAll();
        applyColors(1);
        currentProgressRef.current = 1;
      } else {
        // Set initial states for entrance
        gsap.set(camera, { x: 40, opacity: 0, scale: 0.95 });
        if (magicHint) gsap.set(magicHint, { opacity: 0, y: -10 });
        gsap.set(header, { x: -50, opacity: 0 });
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { x: i % 2 === 0 ? -60 : 60, opacity: 0 });
        });
        gsap.set(manifest, { y: 30, opacity: 0 });

        // Content entrance — plays once when section enters viewport
        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          }
        });

        entranceTl
          .to(camera, {
            x: 0, opacity: 1, scale: 1,
            ease: "power3.out", duration: 0.8
          }, 0)
          .to(magicHint ? [magicHint] : [], {
            opacity: 1, y: 0, duration: 0.4, ease: "power2.out"
          }, 0.1)
          .to(header, {
            x: 0, opacity: 1, duration: 0.6, ease: "power3.out"
          }, 0.1)
          .to(stepRefs.current.filter(Boolean), {
            x: 0, opacity: 1, stagger: 0.05,
            ease: "power3.out", duration: 0.6
          }, 0.15)
          .to(manifest, {
            y: 0, opacity: 1, duration: 0.5, ease: "power3.out"
          }, 0.25);

        // Safety fallback: if animations haven't completed after 2s, force show
        const safetyTimer = setTimeout(() => {
          forceShowAll();
        }, 2000);

        // Clear safety timer if entrance plays normally
        entranceTl.eventCallback("onComplete", () => {
          clearTimeout(safetyTimer);
        });
      }

      // Color transition — separate scrub
      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "top 20%",
        scrub: 1.5,
        onUpdate: (self) => {
          if (manualThemeRef.current === null) {
            currentProgressRef.current = self.progress;
            applyColors(self.progress);
          }
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      const rect = section.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.85;

      if (alreadyVisible) {
        forceShowAll();
        applyColors(1);
        currentProgressRef.current = 1;
      } else {
        gsap.set(camera, { opacity: 0, y: 20 });
        gsap.set(header, { opacity: 0, y: -15 });
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -30 : 30 });
        });
        gsap.set(manifest, { opacity: 0, y: 20 });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          }
        });

        mobileTl
          .to(camera, { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 }, 0)
          .to(header, { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 }, 0.06)
          .to(stepRefs.current.filter(Boolean), {
            opacity: 1, x: 0, stagger: 0.04, ease: "power2.out", duration: 0.5
          }, 0.1)
          .to(manifest, { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 }, 0.15);

        const safetyTimer = setTimeout(() => {
          forceShowAll();
        }, 2000);

        mobileTl.eventCallback("onComplete", () => {
          clearTimeout(safetyTimer);
        });
      }

      // Color transition scrub for mobile
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "top 25%",
        scrub: 1.5,
        onUpdate: (self) => {
          if (manualThemeRef.current === null) {
            currentProgressRef.current = self.progress;
            applyColors(self.progress);
          }
        }
      });
    });

    return () => mm.revert();
  }, [applyColors]);

  return (
    <section ref={sectionRef} className={styles.section} id="creative-control">
      <div className={styles.inner} ref={containerRef}>
        {/* Top Header & 3D Magnetic Camera Showcase Row */}
        <div className={styles.headerRow}>
          {/* Left: Headline & Narrative */}
          <div ref={headerRef} className={styles.headerCopy}>
            <h2 className={styles.title}>FROM RAW FOOTAGE TO FINISHED CREATIVE WORK.</h2>
            <p className={styles.subtitle}>
              A modern video editor needs more than cutting and arranging clips. The program develops your ability across the creative process giving you a broader skillset around your core editing capability.
            </p>
          </div>

          {/* Right: 3D Floating Magnetic Camera with 'Click to see magic' */}
          <div className={styles.cameraShowcase}>
            {/* Animated Magic Hint Arrow & Text */}
            <div ref={magicHintRef} className={styles.magicHintWrapper}>
              <div className={styles.magicHintContent}>
                <span className={styles.magicText}>click to see magic</span>
                <svg
                  className={styles.magicArrowSvg}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4V17M12 17L7 12M12 17L17 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Interactive 3D Magnetic Button */}
            <button
              ref={cameraButtonRef}
              type="button"
              className={styles.cameraButton}
              onClick={handleMagicClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label="Click camera to see magic transformation"
            >
              {/* Shutter Flash burst */}
              <div ref={flashRef} className={styles.flashOverlay} />

              {/* Ambient Camera Glow */}
              <div className={styles.cameraGlow} />

              {/* 3D Floating Camera Wrapper */}
              <div ref={cameraRef} className={styles.cameraWrapper}>
                <Image
                  src="/images/camlab-cam5.png"
                  alt="Idea School Cinema Camera Rig"
                  width={460}
                  height={345}
                  className={styles.cameraImg}
                  priority
                />
              </div>
            </button>
          </div>
        </div>

        {/* Interactive Process Reel */}
        <div ref={reelRef} className={styles.reelContainer}>
          <div className={styles.stepsList}>
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;

              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  type="button"
                  className={`${styles.stepItem} ${
                    isActive ? styles.activeStep : styles.inactiveStep
                  }`}
                  onClick={() => setActiveStepIdx(idx)}
                  onMouseEnter={() => setActiveStepIdx(idx)}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className={styles.stepHeadingRow}>
                    <span className={styles.stepName}>{step.name}</span>
                  </div>

                  <div
                    className={`${styles.descAccordion} ${
                      isActive ? styles.descAccordionOpen : ""
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div className={styles.descInner}>
                      <div className={styles.stepDescription}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Manifesto Statement */}
        <div ref={manifestRef} className={styles.manifestBlock}>
            <p className={styles.conclusionText}>The result is not just another software trained editor. It&apos;s a creative professional with a broader understanding of how modern content gets made.</p>
        </div>
      </div>
    </section>
  );
}
