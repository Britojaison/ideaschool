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
    text: "work on briefs instead of only listening to lectures",
  },
  {
    number: "02",
    text: "make things before you feel completely ready",
  },
  {
    number: "03",
    text: "have your work questioned and reviewed",
  },
  {
    number: "04",
    text: "understand why something works, not just which button to press",
  },
  {
    number: "05",
    text: "learn alongside other people making things",
  },
  {
    number: "06",
    text: "leave with better judgement and better work",
  },
];

export default function BeforeYouApply() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(listRef.current?.children || []);
      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: 40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
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
        <div className={styles.layout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>
              <TextAnimation divideBy="word">Before You Apply</TextAnimation>
            </span>
            <h2 className={styles.mainTitle}>
              <TextAnimation divideBy="word" delay={0.1}>
                COME READY TO GET STUCK IN.
              </TextAnimation>
            </h2>
            <p className={styles.subIntro}>
              <TextAnimation divideBy="word" delay={0.25}>
                You will probably enjoy Idea School if you want to:
              </TextAnimation>
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <ul ref={listRef} className={styles.itemsList}>
              {points.map((point) => (
                <li key={point.number} className={styles.listItem}>
                  <span className={styles.itemNumber}>{point.number}</span>
                  <span className={styles.itemText}>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
