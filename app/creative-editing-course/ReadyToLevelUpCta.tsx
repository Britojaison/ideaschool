"use client";

import React from "react";
import styles from "./ReadyToLevelUpCta.module.css";

export default function ReadyToLevelUpCta() {
  const handleApply = () => {
    window.dispatchEvent(new Event("open-home-form"));
  };

  return (
    <section
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Ready to Level Up CTA"
    >
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          {/* Subtle concentric ripple rings effect like in reference */}
          <div className={styles.radialEffect} aria-hidden="true">
            <span className={styles.ring} style={{ width: "180px", height: "180px" }} />
            <span className={styles.ring} style={{ width: "300px", height: "300px" }} />
            <span className={styles.ring} style={{ width: "420px", height: "420px" }} />
            <span className={styles.ring} style={{ width: "560px", height: "560px" }} />
            <span className={styles.ring} style={{ width: "700px", height: "700px" }} />
          </div>

          {/* Left Text */}
          <div className={styles.textContent}>
            <h2 className={styles.headline}>Ready to Level Up ?</h2>
            <p className={styles.subtext}>Only 25 seats available for this cohort.</p>
          </div>

          {/* Right Apply Button */}
          <div className={styles.actionWrap}>
            <button
              type="button"
              className={styles.applyBtn}
              onClick={handleApply}
              aria-label="Apply for cohort"
            >
              <span>Apply Now</span>
              <span className={styles.btnArrow} aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
