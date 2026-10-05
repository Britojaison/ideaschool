"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./CurriculumStackSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CurriculumModule {
  id: string;
  phase: string;
  title: string;
  duration: string;
  topics: string[];
  image: string;
  bgColor: string;
  textColor: string;
  secondaryTextColor: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  sharpShadowColor: string;
}

const MODULES: CurriculumModule[] = [
  {
    id: "module-1",
    phase: "Phase 1",
    title: "Visual Editing Foundations",
    duration: "Week 1–2",
    topics: [
      "Premiere Pro Basics",
      "Short-Form Retention",
      "A-Roll & B-Roll",
      "Planned Editing",
      "Motion Graphics Fundamentals",
    ],
    image: "/images/DSC00048.webp",
    bgColor: "#d9fa2f",
    textColor: "#0a0a0c",
    secondaryTextColor: "rgba(10, 10, 12, 0.85)",
    accentColor: "#0a0a0c",
    badgeBg: "rgba(10, 10, 12, 0.12)",
    badgeBorder: "rgba(10, 10, 12, 0.25)",
    badgeText: "#0a0a0c",
    sharpShadowColor: "#552ead",
  },
  {
    id: "module-2",
    phase: "Phase 2",
    title: "Colour & Sound Editing",
    duration: "Week 3–4",
    topics: [
      "Colour Correction & Grading",
      "Audio Editing & Sound Design",
      "AI Tools for Repurposing Content",
    ],
    image: "/images/DSC00123.webp",
    bgColor: "#552ead",
    textColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.9)",
    accentColor: "#d9fa2f",
    badgeBg: "rgba(255, 255, 255, 0.15)",
    badgeBorder: "rgba(255, 255, 255, 0.3)",
    badgeText: "#ffffff",
    sharpShadowColor: "#d9fa2f",
  },
  {
    id: "module-3",
    phase: "Phase 3",
    title: "Advanced Motion Graphics",
    duration: "Week 5–6",
    topics: [
      "AI B-Roll & Instant VFX",
      "Long-Form & Podcast Editing",
      "Thumbnail Design & CTR Optimization",
    ],
    image: "/images/DSC00298.webp",
    bgColor: "#efeeea",
    textColor: "#0a0a0c",
    secondaryTextColor: "rgba(10, 10, 12, 0.85)",
    accentColor: "#0a0a0c",
    badgeBg: "rgba(10, 10, 12, 0.12)",
    badgeBorder: "rgba(10, 10, 12, 0.25)",
    badgeText: "#0a0a0c",
    sharpShadowColor: "#cd0c41",
  },
  {
    id: "module-4",
    phase: "Phase 4",
    title: "Podcast Editing & AI Workflow",
    duration: "Week 7–9",
    topics: [
      "AI-Assisted Viral Hooks",
      "Storytelling & Script-Based Editing",
      "Technical Mastery",
      "Final Project",
    ],
    image: "/images/DSC00041.webp",
    bgColor: "#cd0c41",
    textColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.92)",
    accentColor: "#ffffff",
    badgeBg: "rgba(255, 255, 255, 0.18)",
    badgeBorder: "rgba(255, 255, 255, 0.32)",
    badgeText: "#ffffff",
    sharpShadowColor: "#ffb621",
  },
  {
    id: "module-5",
    phase: "Phase 5",
    title: "Final Project & Portfolio Making",
    duration: "Week 10–12",
    topics: [
      "Final Project",
      "Portfolio Making",
      "Client Presentation & Showreel Standards",
      "Interview & Industry Readiness",
    ],
    image: "/images/DSC00033.webp",
    bgColor: "#ff5c2f",
    textColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.92)",
    accentColor: "#ffffff",
    badgeBg: "rgba(255, 255, 255, 0.18)",
    badgeBorder: "rgba(255, 255, 255, 0.32)",
    badgeText: "#ffffff",
    sharpShadowColor: "#552ead",
  },
  {
    id: "module-6",
    phase: "Phase 6",
    title: "Industry Experience & Agency Work",
    duration: "Week 13–24",
    topics: [
      "88GB Studio Client Briefs",
      "Weekly High-Paced Deliverables",
      "Mentor Review & Direct Iterations",
      "Production-Ready Commercial Reel",
    ],
    image: "/images/DSC00093.webp",
    bgColor: "#ffb621",
    textColor: "#0a0a0c",
    secondaryTextColor: "rgba(10, 10, 12, 0.88)",
    accentColor: "#0a0a0c",
    badgeBg: "rgba(10, 10, 12, 0.12)",
    badgeBorder: "rgba(10, 10, 12, 0.25)",
    badgeText: "#0a0a0c",
    sharpShadowColor: "#cd0c41",
  },
];

export default function CurriculumStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Stacking card animation using ScrollTrigger
      cards.forEach((card, index) => {
        // Uniform sticky position so all cards lock to the exact same top boundary
        // When the final card reaches this point and the parent scrolls away,
        // ALL stacked cards move together as a single unified deck.
        const topOffset = 110;
        card.style.top = `${topOffset}px`;

        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];

          ScrollTrigger.create({
            trigger: nextCard,
            start: `top ${topOffset + 80}px`,
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              // Scale down card slightly and dim as next card overlaps
              const scale = 1 - self.progress * 0.05;
              const brightness = 1 - self.progress * 0.35;
              gsap.to(card, {
                scale,
                filter: `brightness(${brightness})`,
                duration: 0.1,
                overwrite: "auto",
              });
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="curriculum-blueprint"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Curriculum: The Blueprint to Professional Editing"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>THE BLUEPRINT TO </span>
            <span className={styles.highlightWord}>PROFESSIONAL EDITING.</span>
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className={styles.cardsStackWrapper}>
          {MODULES.map((module, i) => (
            <div
              key={module.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={styles.stackCard}
              style={{
                backgroundColor: module.bgColor,
                color: module.textColor,
                boxShadow: `-12px 14px 0px 0px ${module.sharpShadowColor}`,
                border: "none",
              }}
            >
              {/* Left Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardMetaRow}>
                  <span
                    className={styles.phaseLabel}
                    style={{ color: module.textColor }}
                  >
                    {module.phase}
                  </span>
                </div>

                <h3
                  className={styles.moduleTitle}
                  style={{ color: module.textColor }}
                >
                  {module.title}
                </h3>

                {/* Topics Bullet List with checkmarks */}
                <ul className={styles.topicList}>
                  {module.topics.map((topic, tIdx) => (
                    <li key={tIdx} className={styles.topicItem}>
                      <span
                        className={styles.checkIconWrap}
                        style={{ color: module.accentColor }}
                        aria-hidden="true"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.707a1 1 0 00-1.414-1.414L10 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6z"
                          />
                        </svg>
                      </span>
                      <span
                        className={styles.topicText}
                        style={{ color: module.secondaryTextColor }}
                      >
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Media Preview */}
              <div className={styles.cardMedia}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 550px"
                    className={styles.moduleImage}
                  />
                  <div className={styles.imageOverlay} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
