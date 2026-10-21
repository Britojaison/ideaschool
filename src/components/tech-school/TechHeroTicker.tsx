"use client";

import React from "react";
import styles from "./TechSchool.module.css";

const TICKER_POINTS = [
  "1 Full-Day Interactive Build Sprint",
  "Launch a Live AI SaaS by the End of Day",
  "Master Agentic IDEs and Architecture",
];

export default function TechHeroTicker() {
  return (
    <div className={styles.heroTickerSection} aria-label="Workshop Highlights Marquee">
      <div className={styles.heroTickerTrack}>
        {/* Track Group 1 */}
        <div className={styles.heroTickerGroup}>
          {TICKER_POINTS.map((text, idx) => (
            <React.Fragment key={`group1-${idx}`}>
              <div className={styles.heroTickerItem}>
                <span className={styles.heroTickerText}>{text}</span>
              </div>
              <span className={styles.heroTickerStar} aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Track Group 2 (Duplicate for seamless continuous loop) */}
        <div className={styles.heroTickerGroup} aria-hidden="true">
          {TICKER_POINTS.map((text, idx) => (
            <React.Fragment key={`group2-${idx}`}>
              <div className={styles.heroTickerItem}>
                <span className={styles.heroTickerText}>{text}</span>
              </div>
              <span className={styles.heroTickerStar} aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
