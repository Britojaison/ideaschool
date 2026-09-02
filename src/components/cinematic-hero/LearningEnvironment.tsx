"use client";

import React from "react";
import styles from "./LearningEnvironment.module.css";

export default function LearningEnvironment() {
  return (
    <section className={styles.section} id="learning-environment" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>WHY THE LEARNING ENVIRONMENT MATTERS</div>
          <h2 className={styles.title}>
            YOU CAN LEARN THE SOFTWARE ONLINE.<br />
            <span className={styles.highlight}>YOU CANNOT LEARN PROFESSIONAL JUDGMENT ALONE.</span>
          </h2>
          <p className={styles.description}>
            Tutorials can show you which button to press. Professional growth comes from working through briefs, making decisions, receiving feedback and improving the work through revision.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {/* Left Column: Online Course */}
          <div className={`${styles.compareCard} ${styles.onlineCard}`}>
            <h3 className={styles.cardTitle}>Self-paced online course</h3>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>LEARNING</span>
                <span className={styles.featureDesc}>Watch lessons independently.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>PRACTICE</span>
                <span className={styles.featureDesc}>Follow tutorials and isolated exercises.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>FEEDBACK</span>
                <span className={styles.featureDesc}>Limited, delayed or automated.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>ENVIRONMENT</span>
                <span className={styles.featureDesc}>Learn largely on your own.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>OUTCOME</span>
                <span className={styles.featureDesc}>Understand the software.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Idea School */}
          <div className={`${styles.compareCard} ${styles.ideaSchoolCard}`}>
            <div className={styles.glowEffect}></div>
            <h3 className={styles.cardTitle}>Idea School</h3>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>LEARNING</span>
                <span className={styles.featureDesc}>Combine structured online foundations with guided physical sessions.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>PRACTICE</span>
                <span className={styles.featureDesc}>Work through assignments and professional-style briefs.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>FEEDBACK</span>
                <span className={styles.featureDesc}>Receive mentor reviews and clear revision direction.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>ENVIRONMENT</span>
                <span className={styles.featureDesc}>Learn alongside peers and working creative professionals.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureLabel}>OUTCOME</span>
                <span className={styles.featureDesc}>Build stronger work, professional habits and portfolio confidence.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Core Principles */}
        <div className={styles.principlesGrid}>
          <div className={styles.principleItem}>
            <span className={styles.principleNumber}>01</span>
            <h4 className={styles.principleTitle}>Craft before shortcuts</h4>
            <p className={styles.principleDesc}>
              Build pacing, story, sound and design judgment before leaning on plugins or AI.
            </p>
          </div>
          <div className={styles.principleItem}>
            <span className={styles.principleNumber}>02</span>
            <h4 className={styles.principleTitle}>Practice before presentation</h4>
            <p className={styles.principleDesc}>
              Create work every week, review it honestly and improve it before adding it to a portfolio.
            </p>
          </div>
          <div className={styles.principleItem}>
            <span className={styles.principleNumber}>03</span>
            <h4 className={styles.principleTitle}>Studio habits before hype</h4>
            <p className={styles.principleDesc}>
              Learn briefs, file discipline, critique, revision and delivery—the habits creative teams rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
