"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./FullCreativeControl.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current,
        {
          "--control-bg": "#080808",
          "--control-heading": "#FFFFFF",
          "--control-copy": "#A0AAB2",
          "--control-border": "rgba(255, 255, 255, 0.15)",
        },
        {
          "--control-bg": "#FBFAF2",
          "--control-heading": "#111111",
          "--control-copy": "#596168",
          "--control-border": "rgba(17, 17, 17, 0.15)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: "top 18%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

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
    <section ref={sectionRef} className={styles.section} id="creative-control" data-header-theme="light">
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
