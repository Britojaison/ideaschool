"use client";

import React, { useState, useRef, useEffect } from "react";
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
}

const STEPS: StepItem[] = [
  {
    id: "01",
    index: "[01]",
    name: "CONCEPT",
    description:
      "NARRATIVE ARCHITECTURE, CAMPAIGN POSITIONING, VISUAL IDENTITY, STORYBOARDS AND PREVISUALIZATION ALIGNED WITH YOUR 3D TEAM."
  },
  {
    id: "02",
    index: "[02]",
    name: "PRE-PRODUCTION",
    description:
      "CINEMATOGRAPHY PLANNING, TALENT CASTING, LOCATION SCOUTING, LIGHTING DESIGN, AND SEAMLESS 3D ASSET INTEGRATION."
  },
  {
    id: "03",
    index: "[03]",
    name: "PRODUCTION",
    description:
      "DIRECTOR-LED SHOOTS — IN STUDIO, ON LOCATION, OR HYBRID. PRECISION CHOREOGRAPHY DESIGNED TO MERGE SEAMLESSLY WITH ARCHITECTURAL VISUALIZATION."
  },
  {
    id: "04",
    index: "[04]",
    name: "POST-PRODUCTION",
    description:
      "EDITORIAL CRAFT, COLOR GRADING, PHOTOREAL CGI COMPOSITING, SOUND DESIGN, AND CINEMATIC MASTERING."
  }
];

export default function FullCreativeControl() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.section} id="creative-control" data-header-theme="dark">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>FULL CREATIVE CONTROL</h2>
        <p className={styles.subtitle}>
          Translating spatial design into emotional narrative, from the first concept to the final cut.
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

                {isActive && (
                  <div className={styles.stepDescription}>
                    {step.description}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Manifesto Statement */}
      <div className={styles.manifestBlock}>
        <p className={styles.manifestText}>
          We architect the entire cinematic experience. We don&apos;t consult. We don&apos;t deliver parts.
        </p>
      </div>
    </section>
  );
}
