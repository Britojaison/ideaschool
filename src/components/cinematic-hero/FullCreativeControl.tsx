"use client";

import React, { useState, useRef } from "react";
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

  return (
    <section ref={sectionRef} className={styles.section} id="creative-control" data-header-theme="dark">
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
          We teach the entire cinematic editing pipeline. We don&apos;t teach shortcuts. We build industry leaders.
        </p>
      </div>
    </section>
  );
}
