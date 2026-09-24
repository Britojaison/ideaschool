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
          {/* Sleek audio waveform / video timeline bars design */}
          <div className={styles.waveEffect} aria-hidden="true">
            <span className={styles.waveBar} style={{ height: "45%" }} />
            <span className={styles.waveBar} style={{ height: "65%" }} />
            <span className={styles.waveBar} style={{ height: "30%" }} />
            <span className={styles.waveBar} style={{ height: "80%" }} />
            <span className={styles.waveBar} style={{ height: "95%" }} />
            <span className={styles.waveBar} style={{ height: "60%" }} />
            <span className={styles.waveBar} style={{ height: "85%" }} />
            <span className={styles.waveBar} style={{ height: "40%" }} />
            <span className={styles.waveBar} style={{ height: "70%" }} />
            <span className={styles.waveBar} style={{ height: "100%" }} />
            <span className={styles.waveBar} style={{ height: "75%" }} />
            <span className={styles.waveBar} style={{ height: "50%" }} />
            <span className={styles.waveBar} style={{ height: "85%" }} />
            <span className={styles.waveBar} style={{ height: "65%" }} />
            <span className={styles.waveBar} style={{ height: "35%" }} />
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
