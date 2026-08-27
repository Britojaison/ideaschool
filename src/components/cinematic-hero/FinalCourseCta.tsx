"use client";

import React from "react";
import Image from "next/image";
import styles from "./FinalCourseCta.module.css";

export default function FinalCourseCta() {
  const handleApplyClick = () => {
    window.dispatchEvent(new Event("open-home-form"));
  };

  return (
    <section className={styles.section} id="final-cta" data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Don&apos;t Just Learn How to Edit. Build the Capability to Create.
          </h2>
        </div>

        <div className={styles.editorialBlock}>
          <div className={styles.editorialCol}>
            <p className={styles.paragraph}>
              The creative industry is changing quickly.
            </p>
            <p className={styles.paragraph}>
              The most valuable editors aren&apos;t defined by how many buttons they know inside a software.
            </p>
            <p className={styles.emphasis}>
              They&apos;re defined by how well they can understand a brief, make creative decisions, solve problems and deliver strong work.
            </p>
          </div>

          <div className={styles.editorialVisualCol}>
            <div className={styles.cameraWrapper}>
              <Image
                src="/images/camlab-cam1.png"
                alt="Cinema Production Rig"
                width={280}
                height={280}
                className={styles.cameraImg}
                priority
              />
            </div>
          </div>

          <div className={styles.editorialCol}>
            <p className={styles.paragraph}>
              Idea Creative School is built to help you develop that capability.
            </p>
            <p className={styles.tagline}>
              Build your skills. Build your portfolio. Build your career.
            </p>
          </div>
        </div>

        <div className={styles.programCard}>
          <div className={styles.programCardLeft}>
            <h3 className={styles.programTitle}>
              Full-Stack Video Editing &amp; Creative AI Mastery
            </h3>
            <p className={styles.programDesc}>
              24 weeks to build the creative skills, experience and confidence to step into the industry.
            </p>
          </div>

          <button
            type="button"
            onClick={handleApplyClick}
            className={styles.applyButton}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
