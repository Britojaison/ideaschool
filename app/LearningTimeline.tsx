"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const steps = [
  {
    label: "Weeks 1-4",
    title: "Foundations",
    side: "left",
  },
  {
    label: "Weeks 5-8",
    title: "Real Projects",
    side: "right",
  },
  {
    label: "Weeks 9-12",
    title: "Advanced & AI",
    side: "left",
  },
];

export default function LearningTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveStep = () => {
      const section = timelineRef.current?.closest(".learningFaq");

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.72;
      const end = -rect.height * 0.12;
      const progress = (start - rect.top) / (start - end);
      const nextIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.round(progress * (steps.length - 1))),
      );

      setActiveIndex(nextIndex);
    };

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <div className="learningTimeline" aria-label="Program timeline" ref={timelineRef}>
      {steps.map((step, index) => (
        <article
          className={`learningStep ${step.side} ${index === activeIndex ? "active" : ""}`}
          key={step.title}
          style={{ "--step": index } as CSSProperties}
          aria-current={index === activeIndex ? "step" : undefined}
        >
          <span className="learningDot" aria-hidden="true" />
          <div className="learningStepLabel">
            <span>{step.label}</span>
            <strong>{step.title}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
