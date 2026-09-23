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

const CARD_THEMES = [
  {
    bgColor: "#d9fa2f",
    textColor: "#0a0a0c",
    descColor: "rgba(10, 10, 12, 0.78)",
    badgeBg: "rgba(10, 10, 12, 0.12)",
    badgeBorder: "rgba(10, 10, 12, 0.22)",
    badgeColor: "#0a0a0c",
    shadow: "#552ead",
    border: "1px solid rgba(10, 10, 12, 0.12)",
  },
  {
    bgColor: "#552ead",
    textColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.85)",
    badgeBg: "rgba(255, 255, 255, 0.15)",
    badgeBorder: "rgba(255, 255, 255, 0.28)",
    badgeColor: "#ffffff",
    shadow: "#d9fa2f",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#efeeea",
    textColor: "#0a0a0c",
    descColor: "rgba(10, 10, 12, 0.76)",
    badgeBg: "rgba(10, 10, 12, 0.1)",
    badgeBorder: "rgba(10, 10, 12, 0.18)",
    badgeColor: "#0a0a0c",
    shadow: "#cd0c41",
    border: "1px solid rgba(10, 10, 12, 0.1)",
  },
  {
    bgColor: "#cd0c41",
    textColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.88)",
    badgeBg: "rgba(255, 255, 255, 0.18)",
    badgeBorder: "rgba(255, 255, 255, 0.3)",
    badgeColor: "#ffffff",
    shadow: "#ffb621",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#ff5c2f",
    textColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.88)",
    badgeBg: "rgba(255, 255, 255, 0.18)",
    badgeBorder: "rgba(255, 255, 255, 0.3)",
    badgeColor: "#ffffff",
    shadow: "#552ead",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#ffb621",
    textColor: "#0a0a0c",
    descColor: "rgba(10, 10, 12, 0.78)",
    badgeBg: "rgba(10, 10, 12, 0.12)",
    badgeBorder: "rgba(10, 10, 12, 0.22)",
    badgeColor: "#0a0a0c",
    shadow: "#552ead",
    border: "1px solid rgba(10, 10, 12, 0.12)",
  },
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
          <div className={styles.eyebrow}>WHAT YOU BUILD</div>
          <h2 className={styles.title}>
            <span className={styles.highlightWord}>WORK</span>
            <span> THAT SHOWS WHAT YOU CAN DO.</span>
          </h2>
        </div>

        {/* 6 Career Roles Grid (3 per row) */}
        <div className={styles.grid}>
          {BUILD_ROLES.map((point, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            return (
              <article
                key={point.step}
                className={styles.card}
                style={{
                  backgroundColor: theme.bgColor,
                  border: theme.border,
                  ["--card-shadow" as any]: theme.shadow,
                }}
              >
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
                  <h3
                    className={styles.cardTitle}
                    style={{ color: theme.textColor }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className={styles.cardDescription}
                    style={{ color: theme.descColor }}
                  >
                    {point.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
