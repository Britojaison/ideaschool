"use client";

import React from "react";
import Image from "next/image";
import TextAnimation from "@/components/ui/staggerText";
import styles from "./WhatYouBuild.module.css";

const BUILD_ROLES = [
  {
    step: "01",
    title: "Video Editor",
    description: "Master narrative structure, pacing, dramatic timing, and assembly for commercials and films.",
    image: "/images/DSC00048.webp"
  },
  {
    step: "02",
    title: "Social Media Editor",
    description: "Craft high-retention vertical edits, viral hooks, dynamic subtitles, and platform-first deliverables.",
    image: "/images/DSC00093.webp"
  },
  {
    step: "03",
    title: "Motion Graphic Editor",
    description: "Design kinetic typography, logo reveals, 2D/3D visual accents, and composited screen overlays.",
    image: "/images/DSC00298.webp"
  },
  {
    step: "04",
    title: "Assistant Editor",
    description: "Handle footage ingest, multi-cam sync, project organization, proxy workflows, and rough cut prep.",
    image: "/images/DSC00123.webp"
  },
  {
    step: "05",
    title: "Freelance Editor",
    description: "Manage client briefs, project revisions, rate negotiation, contracts, and autonomous end-to-end delivery.",
    image: "/images/DSC00041.webp"
  },
  {
    step: "06",
    title: "Post Production Artist",
    description: "Execute color grading, audio cleanup, sound design, visual enhancement, and multi-format mastering.",
    image: "/images/DSC00033.webp"
  }
];

export default function WhatYouBuild() {
  return (
    <section
      className={styles.section}
      id="what-you-build"
      data-header-theme="dark"
      aria-label="What You Build"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <TextAnimation divideBy="word">WHAT YOU BUILD</TextAnimation>
          </p>
          <h2 className={styles.title}>
            <TextAnimation divideBy="word" delay={0.08}>
              Work that shows what you can do.
            </TextAnimation>
          </h2>
          <p className={styles.description}>
            <TextAnimation divideBy="word" delay={0.16}>
              Your portfolio develops throughout the program through practical assignments, mentor reviews and revision cycles.
            </TextAnimation>
          </p>
        </div>

        {/* 6 Career Roles Grid (3 per row) */}
        <div className={styles.grid}>
          {BUILD_ROLES.map((point) => (
            <article key={point.step} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardNumber}>{point.step}</span>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardDescription}>{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
