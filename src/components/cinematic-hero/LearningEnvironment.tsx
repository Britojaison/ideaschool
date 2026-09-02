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
            <div className={styles.tag}>INSIDE IDEA SCHOOL</div>
            <div className={styles.title}>
              <ScrollHighlight 
                text="BUILT AROUND PRACTICE, FEEDBACK AND BETTER WORK."
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
                text="Show the environment as it is: students creating, mentors reviewing, assignments progressing and work improving through revision."
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

        <div className={styles.sectionGroup}>
          <div className={styles.sectionTitle}>
            THE DIFFERENCE
          </div>
          
          <div className={styles.featuresGrid}>
            {/* Card 1: Learning */}
            <div className={styles.gridCard}>
              <div className={styles.cardBadge}>
                <span className={styles.badgeDot}></span>
                LEARNING
              </div>
              <h3 className={styles.cardTitle}>Combine structured online foundations with guided physical sessions.</h3>
              <p className={styles.cardDesc}>Online course: Watch lessons independently.</p>
            </div>

            {/* Card 2: Practice */}
            <div className={styles.gridCard}>
              <div className={styles.cardBadge}>
                <span className={styles.badgeDot}></span>
                PRACTICE
              </div>
              <h3 className={styles.cardTitle}>Work through assignments and professional-style briefs.</h3>
              <p className={styles.cardDesc}>Online course: Follow tutorials and isolated exercises.</p>
            </div>

            {/* Card 3: Feedback */}
            <div className={styles.gridCard}>
              <div className={styles.cardBadge}>
                <span className={styles.badgeDot}></span>
                FEEDBACK
              </div>
              <h3 className={styles.cardTitle}>Receive mentor reviews and clear revision direction.</h3>
              <p className={styles.cardDesc}>Online course: Limited, delayed or automated.</p>
            </div>

            {/* Card 4: Environment */}
            <div className={styles.gridCard}>
              <div className={styles.cardBadge}>
                <span className={styles.badgeDot}></span>
                ENVIRONMENT
              </div>
              <h3 className={styles.cardTitle}>Learn alongside peers and working creative professionals.</h3>
              <p className={styles.cardDesc}>Online course: Learn largely on your own.</p>
            </div>

            {/* Card 5: Outcome */}
            <div className={styles.gridCard} style={{ gridColumn: "span 2" }}>
              <div className={styles.cardBadge}>
                <span className={styles.badgeDot}></span>
                OUTCOME
              </div>
              <h3 className={styles.cardTitle}>Build stronger work, professional habits and portfolio confidence.</h3>
              <p className={styles.cardDesc}>Online course: Understand the software.</p>
            </div>
          </div>
        </div>

        <div className={styles.sectionGroup}>
          <div className={styles.sectionTitle}>
            CORE PRINCIPLES
          </div>

          <div className={styles.principlesList}>
            {/* Principle 1 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Craft before shortcuts</h3>
              <p className={styles.principleDesc}>Build pacing, story, sound and design judgment before leaning on plugins or AI.</p>
            </div>

            {/* Principle 2 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Practice before presentation</h3>
              <p className={styles.principleDesc}>Create work every week, review it honestly and improve it before adding it to a portfolio.</p>
            </div>

            {/* Principle 3 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Studio habits before hype</h3>
              <p className={styles.principleDesc}>Learn briefs, file discipline, critique, revision and delivery—the habits creative teams rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
