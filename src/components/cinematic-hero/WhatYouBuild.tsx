"use client";

import React from "react";
import Image from "next/image";
import TextAnimation from "@/components/ui/staggerText";
import styles from "./WhatYouBuild.module.css";

const BUILD_POINTS = [
  {
    step: "01",
    title: "Short-form and commercial editing",
    description: "Develop pacing, structure, captions, sound and platform-ready delivery.",
    image: "/images/DSC00048.webp"
  },
  {
    step: "02",
    title: "Motion graphics and visual effects",
    description: "Use typography, animation, compositing, tracking and visual treatments with purpose.",
    image: "/images/DSC00298.webp"
  },
  {
    step: "03",
    title: "Creative AI production",
    description: "Use AI for ideation, visual development and production without replacing creative judgment.",
    image: "/images/DSC00123.webp"
  },
  {
    step: "04",
    title: "Professional portfolio work",
    description: "Present finished work and explain the decisions behind it with confidence.",
    image: "/images/DSC00041.webp"
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

        {/* 4 Points Grid */}
        <div className={styles.grid}>
          {BUILD_POINTS.map((point) => (
            <article key={point.step} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
