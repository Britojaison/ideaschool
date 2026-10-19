"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechSchool.module.css";
import { ArrowRight, Wrench, Rocket, Cpu } from "lucide-react";

interface TechHeroProps {
  onReserveClick?: () => void;
}

export default function TechHero({ onReserveClick }: TechHeroProps) {
  const handleScrollToCta = () => {
    if (onReserveClick) {
      onReserveClick();
    } else {
      const el = document.getElementById("reservation-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.dispatchEvent(new CustomEvent("open-home-form"));
      }
    }
  };

  return (
    <section className={styles.heroSection} data-header-theme="dark">
      {/* Ambient glowing radial effects */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      
      {/* 3D Wireframe Grid Plane from moodboard */}
      <div className={styles.wireframeGridPlane} aria-hidden="true" />

      {/* Main Content Container (Left Column) */}
      <div className={styles.container}>
        <div className={styles.heroContentLeft}>
          {/* Badge: LIVE 1-DAY BUILD WORKSHOP */}
          <div className={styles.heroBadge}>
            <span className={styles.liveIndicatorPulse} aria-hidden="true" />
            <span>LIVE 1-DAY BUILD WORKSHOP</span>
          </div>

          {/* Headline: Stop "Vibe Coding." Start Engineering. */}
          <h1 className={styles.heroTitle}>
            Stop <span className={styles.heroTitleHighlight}>&ldquo;Vibe Coding.&rdquo;</span><br />
            Start <span className={styles.heroTitleGradient}>Engineering.</span>
          </h1>

          {/* Subheadline from PDF */}
          <p className={styles.heroSubheadline}>
            Anyone can prompt an AI to spit out code. <strong>Real software engineers</strong> know how to design, secure, and ship production-grade systems. Build and deploy a <span className={styles.highlightGold}>live AI SaaS application</span> in a single day.
          </p>

          {/* CTA Button */}
          <div className={styles.heroCtaGroup} style={{ alignItems: "flex-start" }}>
            <button
              type="button"
              onClick={handleScrollToCta}
              className={styles.primaryCtaBtn}
              id="hero-reserve-btn"
              aria-label="Reserve Your Seat Now for the Tech Workshop"
            >
              <span>Reserve Your Seat Now</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Proof Points - Stacked in Left Column */}
          <div className={styles.proofPointsStack}>
            <div className={styles.proofCard}>
              <div className={styles.proofCardIcon}>
                <Wrench size={16} color="#f2bf49" />
              </div>
              <div className={styles.proofCardText}>
                1 Full-Day Interactive Build Sprint
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofCardIcon}>
                <Rocket size={16} color="#ff3b7a" />
              </div>
              <div className={styles.proofCardText}>
                Launch a Live AI SaaS by the End of Day
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofCardIcon}>
                <Cpu size={16} color="#f2bf49" />
              </div>
              <div className={styles.proofCardText}>
                Master Agentic IDEs, Next.js, Backend Architectures & RAG
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Huge Guide 3D Chrome Figure Anchored Flush to the Screen Base */}
      <div className={styles.heroHugeGuideContainer}>
        {/* Glowing radial gradient backdrop */}
        <div className={styles.heroHugeGuideGlow} aria-hidden="true" />

        <Image
          src="/images/vibecode/guide.png"
          alt="AI Engineering Architect Guide"
          width={1209}
          height={1301}
          priority
          className={styles.heroHugeGuideImg}
          style={{ height: "100%", width: "auto" }}
        />
      </div>
    </section>
  );
}
