"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechSchool.module.css";
import { ArrowRight } from "lucide-react";

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



      {/* Centered Robo Visual Anchored to Base */}
      <div className={styles.heroCenterVisualContainer}>
        {/* Glowing radial gradient backdrop */}
        <div className={styles.heroCenterRoboGlow} aria-hidden="true" />

        <Image
          src="/images/vibecode/robo.png"
          alt="AI Engineering Architect Guide"
          width={2758}
          height={3356}
          priority
          className={styles.heroCenterRoboImg}
          style={{ height: "100%", width: "auto" }}
        />
      </div>

      {/* Main Heading Lockup - Dead Centered Vertically & Horizontally */}
      <h1 className={styles.heroPosterLockup}>
        <span className={styles.heroPosterTextTop}>
          <span>STOP &ldquo;VIBE CODING,&rdquo;</span>
          <span>START</span>
        </span>
        <span className={styles.heroPosterStripe}>
          <span className={styles.heroPosterExperimentText}>ENGINEERING.</span>
        </span>
      </h1>

      {/* Foreground Actions: Subheadline & CTA */}
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
        </div>
      </div>
    </section>
  );
}
