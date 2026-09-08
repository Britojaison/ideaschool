"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./HowLearningWorks.module.css";
import TextAnimation from "@/components/ui/staggerText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Read the problem before choosing a direction.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Test ideas, references and possible directions.",
  },
  {
    number: "03",
    title: "Build",
    description: "Use the right tools to develop the idea.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Discuss the decisions behind the work, not only the final output.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Use feedback to resolve the details and improve the result.",
  },
];

export default function HowLearningWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(steps.length).fill(null)
  );
  const stepRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(steps.length).fill(null)
  );

  useGSAP(
    () => {
      const path = pathRef.current;
      const svg = svgRef.current;
      const timeline = timelineRef.current;

      if (!path || !svg || !timeline) return;

      const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
      if (dots.length === 0) return;

      /* ── Compute dot positions relative to timeline container ── */
      const containerRect = timeline.getBoundingClientRect();
      const points = dots.map((dot) => {
        const rect = dot.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });

      /* ── Set SVG viewBox to match container ── */
      svg.setAttribute(
        "viewBox",
        `0 0 ${containerRect.width} ${containerRect.height}`
      );

      /* ── Build smooth S-curve through points with lead-in / lead-out ── */
      const leadIn = { x: containerRect.width / 2, y: 0 };
      const leadOut = {
        x: containerRect.width / 2,
        y: containerRect.height,
      };
      const allPoints = [leadIn, ...points, leadOut];

      let d = `M ${allPoints[0].x},${allPoints[0].y}`;
      for (let i = 0; i < allPoints.length - 1; i++) {
        const curr = allPoints[i];
        const next = allPoints[i + 1];
        const midY = (curr.y + next.y) / 2;
        d += ` C ${curr.x},${midY} ${next.x},${midY} ${next.x},${next.y}`;
      }

      path.setAttribute("d", d);

      /* ── Animate path drawing on scroll ── */
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
        },
      });

      /* ── Animate step content ── */
      stepRefs.current.forEach((step) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              end: "top 58%",
              scrub: 1,
            },
          }
        );
      });

      /* ── Animate dots ── */
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            ease: "back.out(1.7)",
            duration: 0.5,
            scrollTrigger: {
              trigger: dot,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="how-learning-works"
    >
      <div className={styles.container}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <h2 className={styles.sectionLabel}>
            <TextAnimation divideBy="word">HOW LEARNING WORKS</TextAnimation>
          </h2>
          <p className={styles.headline}>
            <TextAnimation divideBy="word" delay={0.1}>
              UNDERSTAND THE IDEA. BUILD WITH PURPOSE.
            </TextAnimation>
            <br />
            <TextAnimation divideBy="word" delay={0.25}>
              REFINE THE OUTCOME.
            </TextAnimation>
          </p>
          <p className={styles.headerDesc}>
            <TextAnimation divideBy="word" delay={0.4}>
              You work through practical briefs, explain your decisions and strengthen the outcome through feedback.
            </TextAnimation>
          </p>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className={styles.timeline}>
          {/* SVG curvy line */}
          <svg
            ref={svgRef}
            className={styles.svg}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Fade mask: line fades in at top, fades out at bottom */}
            <defs>
              <linearGradient id="hlw-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="8%" stopColor="white" stopOpacity="1" />
                <stop offset="92%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="hlw-fade-mask">
                <rect width="100%" height="100%" fill="url(#hlw-fade)" />
              </mask>
            </defs>
            {/* Active drawing path with fade ends */}
            <path
              ref={pathRef}
              fill="none"
              stroke="#FBFAF2"
              strokeWidth="1.5"
              strokeLinecap="round"
              mask="url(#hlw-fade-mask)"
            />
          </svg>

          {/* Step items */}
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`${styles.step} ${
                i % 2 === 0 ? styles.stepLeft : styles.stepRight
              }`}
            >
              <div
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                className={styles.dot}
              >
                <span>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
