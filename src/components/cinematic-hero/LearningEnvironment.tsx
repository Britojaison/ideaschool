"use client";

import React from "react";
import styles from "./LearningEnvironment.module.css";
import ScrollHighlight from "../ui/ScrollHighlight";

export default function LearningEnvironment() {
  return (
    <section className={styles.section} id="learning-environment" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tag}>WHY THE LEARNING ENVIRONMENT MATTERS</div>
            <div className={styles.title}>
              <ScrollHighlight 
                text="YOU CAN LEARN THE SOFTWARE ONLINE.
YOU CANNOT LEARN PROFESSIONAL JUDGMENT ALONE."
                font={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                splitBy="words"
                scrollStart="top bottom"
                scrollEnd="center center"
              />
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.description}>
              <ScrollHighlight 
                text="Tutorials can show you which button to press. Professional growth comes from working through briefs, making decisions, receiving feedback and improving the work through revision."
                font={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                splitBy="words"
                dimColor="#475569"
                highlightColor="#A0AAB2"
                scrollStart="bottom bottom"
                scrollEnd="center center"
              />
            </div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {/* Card 1 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Structured Learning</h3>
            <p className={styles.cardDesc}>Combine structured online foundations with guided physical sessions.</p>
          </div>

          {/* Card 2 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Professional Practice</h3>
            <p className={styles.cardDesc}>Work through assignments and professional-style briefs.</p>
          </div>

          {/* Card 3 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Expert Feedback</h3>
            <p className={styles.cardDesc}>Receive mentor reviews and clear revision direction.</p>
          </div>

          {/* Card 4 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Peer Environment</h3>
            <p className={styles.cardDesc}>Learn alongside peers and working creative professionals.</p>
          </div>

          {/* Card 5 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Proven Outcomes</h3>
            <p className={styles.cardDesc}>Build stronger work, professional habits and portfolio confidence.</p>
          </div>

          {/* Card 6 */}
          <div className={styles.gridCard}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}></span>
              IDEA SCHOOL
            </div>
            <h3 className={styles.cardTitle}>Career Readiness</h3>
            <p className={styles.cardDesc}>Develop the studio habits creative teams rely on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
