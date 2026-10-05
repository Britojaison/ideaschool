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
          {/* Cinematic Film Strip & Timeline Frames Overlay */}
          <div className={styles.filmStripOverlay} aria-hidden="true">
            {/* Top sprocket holes */}
            <div className={styles.sprocketRow}>
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={`top-${i}`} className={styles.sprocketHole} />
              ))}
            </div>

            {/* Film cell frames with timecode & marker tracks */}
            <div className={styles.filmFramesTrack}>
              <div className={styles.filmFrame}>
                <span className={styles.frameTc}>00:12:04:18</span>
                <div className={styles.playheadLine} />
              </div>
              <div className={styles.filmFrame}>
                <span className={styles.frameTc}>00:12:05:02</span>
                <div className={styles.audioMiniTrack}>
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "80%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "95%" }} />
                  <span style={{ height: "35%" }} />
                </div>
              </div>
              <div className={styles.filmFrame}>
                <span className={styles.frameTc}>00:12:05:14</span>
                <div className={styles.keyframeDot} />
              </div>
              <div className={styles.filmFrame}>
                <span className={styles.frameTc}>00:12:06:00</span>
              </div>
            </div>

            {/* Bottom sprocket holes */}
            <div className={styles.sprocketRow}>
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={`bot-${i}`} className={styles.sprocketHole} />
              ))}
            </div>
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
