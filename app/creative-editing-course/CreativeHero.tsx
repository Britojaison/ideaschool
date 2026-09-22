"use client";

import React from "react";
import Image from "next/image";
import styles from "./CreativeHero.module.css";
import TextAnimation from "@/components/ui/staggerText";

export default function CreativeHero() {
  const handleApplyClick = () => {
    window.dispatchEvent(new Event("open-home-form"));
  };

  const handleCurriculumClick = () => {
    const el = document.getElementById("program") || document.getElementById("learning-environment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={styles.heroSection}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Creative Editing & AI Hero"
    >
      {/* Background Image Container */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/videofullcourse/hero.png"
          alt="Creative Editing Course Hero"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        <div className={styles.bottomVignette} />
      </div>

      {/* Hero Content Overlay */}
      <div className={styles.contentContainer}>
        {/* Main Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlinePrimary}>
            <TextAnimation divideBy="word">India’s First Agency-Led</TextAnimation>
          </span>
          <span className={styles.headlineAccent}>
            <TextAnimation divideBy="word" delay={0.15}>
              AI Video Editing Mastery
            </TextAnimation>
          </span>
        </h1>

        {/* 3 Value Points (Horizontal with Icons) */}
        <div className={styles.featurePointsRow}>
          <div className={styles.featurePointItem}>
            <span className={styles.featureIconWrap} aria-hidden="true">
              {/* Ticket / Seat Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </span>
            <span className={styles.featureText}>Only 25 Seats</span>
          </div>

          <span className={styles.featureDot} aria-hidden="true">•</span>

          <div className={styles.featurePointItem}>
            <span className={styles.featureIconWrap} aria-hidden="true">
              {/* Briefcase / Client Work Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <span className={styles.featureText}>Practice / Work with real clients</span>
          </div>

          <span className={styles.featureDot} aria-hidden="true">•</span>

          <div className={styles.featurePointItem}>
            <span className={styles.featureIconWrap} aria-hidden="true">
              {/* Verified / Guaranteed Shield Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </span>
            <span className={styles.featureText}>Guaranteed placements</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className={styles.ctaGroup}>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={handleApplyClick}
          >
            <span>Apply For Cohort</span>
            <span className={styles.btnArrow} aria-hidden="true">↗</span>
          </button>

          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={handleCurriculumClick}
          >
            <span>Download Brochure</span>
            <span className={styles.btnDownArrow} aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
