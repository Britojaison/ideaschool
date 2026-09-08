"use client";

import Link from "next/link";
import styles from "./VisualSchoolCTA.module.css";
import TextAnimation from "@/components/ui/staggerText";

export default function VisualSchoolCTA() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.eyebrow}>
        <TextAnimation divideBy="word">VISUAL SCHOOL</TextAnimation>
      </div>
      
      <svg
        className={styles.arrowIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <line x1="4" y1="20" x2="20" y2="4" />
        <polyline points="10 4 20 4 20 14" />
      </svg>

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          <TextAnimation divideBy="word" delay={0.05}>
            DON’T JUST LEARN THE TOOLS.
          </TextAnimation>
          <br />
          <TextAnimation divideBy="word" delay={0.2}>
            LEARN WHAT TO DO WITH THEM.
          </TextAnimation>
        </h2>
        <p className={styles.description}>
          <TextAnimation divideBy="word" delay={0.35}>
            Build skills in editing, filmmaking, design and Creative AI through practical briefs, mentor feedback and industry experience.
          </TextAnimation>
        </p>
        <div className={styles.buttonGroup}>
          <Link 
            href="/visual-school" 
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            EXPLORE VISUAL SCHOOL
          </Link>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-home-form'))}
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            TALK TO IDEA SCHOOL
          </button>
        </div>
      </div>
    </section>
  );
}
