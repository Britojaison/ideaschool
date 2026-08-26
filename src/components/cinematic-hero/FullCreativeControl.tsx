"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./FullCreativeControl.module.css";

interface StepItem {
  id: string;
  index: string;
  name: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    id: "01",
    index: "[01]",
    name: "STORY & CONCEPT",
    description:
      "NARRATIVE PACING, SCRIPT BREAKDOWNS, EDITORIAL HOOK ARCHITECTURE, STORYBOARDS, AND VISUAL PRE-VISUALIZATION ALIGNED WITH CLIENT BRIEFS."
  },
  {
    id: "02",
    index: "[02]",
    name: "CORE CRAFT & EDITING",
    description:
      "PREMIERE PRO ADVANCED WORKFLOWS, MULTI-CAM SYNCHRONIZATION, RHYTHM-BASED CUTTING, SOUND DESIGN, AND AUDIO MIXING."
  },
  {
    id: "03",
    index: "[03]",
    name: "MOTION & CREATIVE AI",
    description:
      "AFTER EFFECTS VFX, ROTOSCOPING, 3D INTEGRATION, FLUX, SEEDANCE, RUNWAY, AND HIGH-END GENERATIVE COMMERCIAL PIPELINES."
  },
  {
    id: "04",
    index: "[04]",
    name: "COLOR & MASTERING",
    description:
      "DAVINCI RESOLVE COLOR GRADING, CINEMATIC TEXTURE, SOUND MASTERING, EXPORT OPTIMIZATION, AND BRAND-READY PORTFOLIO DELIVERY."
  }
];

export default function FullCreativeControl() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const secRect = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          const colorProgress = gsap.utils.clamp(0, 1, (vh - secRect.top) / vh);
          const headingColor = gsap.utils.interpolate("#FFFFFF", "#111111", colorProgress);
          const copyColor = gsap.utils.interpolate("#A0AAB2", "#596168", colorProgress);

          gsap.set(sectionRef.current, {
            backgroundColor: gsap.utils.interpolate("#080808", "#FBFAF2", colorProgress),
            borderColor: gsap.utils.interpolate(
              "rgba(255, 255, 255, 0.15)",
              "rgba(17, 17, 17, 0.15)",
              colorProgress
            ),
          });
          gsap.set(
            sectionRef.current.querySelectorAll(`.${styles.title}, .${styles.stepName}`),
            { color: headingColor }
          );
          gsap.set(
            sectionRef.current.querySelectorAll(
              `.${styles.subtitle}, .${styles.stepDescription}, .${styles.manifestText}`
            ),
            { color: copyColor }
          );
          window.dispatchEvent(new Event("header-theme-check"));

          // Check if section is visible in viewport
          if (secRect.top < vh * 0.85 && secRect.bottom > vh * 0.15) {
            const focalPoint = vh * 0.48; // Natural reading eye line
            let closestIdx = 0;
            let minDistance = Infinity;

            stepRefs.current.forEach((el, idx) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const elCenter = rect.top + rect.height / 2;
              const distance = Math.abs(elCenter - focalPoint);

              if (distance < minDistance) {
                minDistance = distance;
                closestIdx = idx;
              }
            });

            setActiveStepIdx(closestIdx);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="creative-control">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>FULL CREATIVE CONTROL</h2>
        <p className={styles.subtitle}>
          Translating raw footage and AI generation into emotional narrative, from the first cut to the final master.
        </p>
      </div>

      {/* Interactive Process Reel */}
      <div className={styles.reelContainer}>
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
                  <span className={styles.stepIndex}>{step.index}</span>
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
      <div className={styles.manifestBlock}>
        <p className={styles.manifestText}>
          We teach the entire cinematic editing pipeline. We don&apos;t teach shortcuts. We build industry leaders.
        </p>
      </div>
    </section>
  );
}
