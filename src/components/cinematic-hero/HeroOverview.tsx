"use client";

import React from "react";
import styles from "./HeroOverview.module.css";
import Link from "next/link";

export default function HeroOverview() {
  return (
    <section className={styles.section} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.tag}>24-WEEK VIDEO EDITING & CREATIVE AI PROGRAM</div>
          <h2 className={styles.headline}><span className={styles.highlight}>EDITING</span> IS JUST THE START.</h2>
          <div className={styles.description}>
            <p>Build practical skills across editing, storytelling, motion design and Creative AI—then apply them through briefs, mentor feedback and portfolio projects.</p>
            <p>Professional editors also need to understand a brief, structure a story, make creative decisions, respond to feedback and deliver work professionally. Idea School is designed to help you develop those capabilities—not simply learn where the buttons are.</p>
          </div>
          <div className={styles.ctaGroup}>
            <Link href="#enrol" className={styles.primaryBtn}>
              APPLY NOW
            </Link>
            <Link href="#program" className={styles.secondaryBtn}>
              EXPLORE THE PROGRAM
            </Link>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>24 weeks</span>
            <span className={styles.statLabel}>TOTAL PROGRAM</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>12 + 12</span>
            <span className={styles.statLabel}>TRAINING + EXPERIENCE</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>Hybrid</span>
            <span className={styles.statLabel}>OFFLINE + GUIDED LEARNING</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>Mentor-led</span>
            <span className={styles.statLabel}>PRACTICE, REVIEW, REVISE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
