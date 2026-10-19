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

      {/* Top Header Block: Badge */}
      <div className={styles.container}>
        <div className={styles.heroCenterHeader}>
          {/* Badge: LIVE 1-DAY BUILD WORKSHOP */}
          <div className={styles.heroBadge}>
            <span className={styles.liveIndicatorPulse} aria-hidden="true" />
            <span>LIVE 1-DAY BUILD WORKSHOP</span>
          </div>
        </div>
      </div>

      {/* Centered Robo Visual with Stop Vibe Coding, Start Engineering Poster Lockup Overlay */}
      <div className={styles.heroCenterVisualContainer}>
        {/* Glowing radial gradient backdrop */}
        <div className={styles.heroCenterRoboGlow} aria-hidden="true" />

        {/* Poster Lockup on Robot:
            STOP "VIBE CODING,"
            START
            [ ENGINEERING. ] (Highlighted in Sopar font on gradient stripe) */}
        <h1 className={styles.heroPosterLockup}>
          <span className={styles.heroPosterTextTop}>
            <span>STOP &ldquo;VIBE CODING,&rdquo;</span>
            <span>START</span>
          </span>
          <span className={styles.heroPosterStripe}>
            <span className={styles.heroPosterExperimentText}>ENGINEERING.</span>
          </span>
        </h1>

        {/* Centered Robot Image Anchored to Base */}
        <Image
          src="/images/vibecode/guide.png"
          alt="AI Engineering Architect Guide"
          width={1209}
          height={1301}
          priority
          className={styles.heroCenterRoboImg}
          style={{ height: "100%", width: "auto" }}
        />
      </div>

      {/* Foreground Actions: Subheadline, CTA & Proof Points */}
      <div className={styles.container} style={{ zIndex: 20 }}>
        <div className={styles.heroForegroundActions}>
          {/* Subheadline from PDF */}
          <p className={styles.heroSubheadline} style={{ marginBottom: "6px" }}>
            Anyone can prompt an AI to spit out code. <strong>Real software engineers</strong> know how to design, secure, and ship production-grade systems. Build and deploy a <span className={styles.highlightGold}>live AI SaaS application</span> in a single day.
          </p>

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

          {/* Proof Points Strip */}
          <div className={styles.proofPointsRow}>
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
    </section>
  );
}
