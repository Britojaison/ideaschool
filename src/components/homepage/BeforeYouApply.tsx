"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./BeforeYouApply.module.css";
import TextAnimation from "@/components/ui/staggerText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const points = [
  {
    number: "01",
    text: "Work on briefs instead of only listening to lectures",
  },
  {
    number: "02",
    text: "Make things before you feel completely ready",
  },
  {
    number: "03",
    text: "Have your work questioned and reviewed",
  },
  {
    number: "04",
    text: "Understand why something works, not just which button to press",
  },
  {
    number: "05",
    text: "Learn alongside other people making things",
  },
  {
    number: "06",
    text: "Leave with better judgement and better work",
  },
];

export default function BeforeYouApply() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(rowsRef.current?.children || []);
      gsap.fromTo(
        rows,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowsRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="before-you-apply"
      data-header-theme="light"
    >
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <TextAnimation divideBy="word">Before You Apply</TextAnimation>
          </div>
          <h2 className={styles.mainTitle}>
            <TextAnimation divideBy="word" delay={0.08}>
              COME READY TO GET STUCK IN.
            </TextAnimation>
          </h2>
          <p className={styles.subIntro}>
            <TextAnimation divideBy="word" delay={0.2}>
              You will probably enjoy Idea School if you want to:
            </TextAnimation>
          </p>
        </div>

        {/* Stripped Bold Editorial Statement Rows */}
        <div ref={rowsRef} className={styles.rowsContainer}>
          {points.map((point) => (
            <div key={point.number} className={styles.rowItem}>
              <span className={styles.rowNumber}>{point.number}</span>
              <h3 className={styles.rowText}>{point.text}</h3>
              <span className={styles.rowArrow} aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
