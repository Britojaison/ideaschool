"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ByTheNumbers.module.css";

interface StatItem {
  id: string;
  tag: string;
  number: string;
  label: string;
  imageSrc: string;
  colClass: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "a",
    tag: "a ]",
    number: "100+",
    label: "STUDENTS & CREATORS TRAINED",
    imageSrc: "/images/gallery10.webp",
    colClass: styles.colA
  },
  {
    id: "b",
    tag: "b ]",
    number: "24",
    label: "WEEKS INTENSIVE PRODUCTION WORKFLOW",
    imageSrc: "/images/gallery16.webp",
    colClass: styles.colB
  },
  {
    id: "c",
    tag: "c ]",
    number: "20+",
    label: "INDUSTRY MENTORS & COMMERCIAL DIRECTORS",
    imageSrc: "/images/gallery13.webp",
    colClass: styles.colC
  },
  {
    id: "d",
    tag: "d ]",
    number: "50+",
    label: "LIVE BRAND BRIEFS & COMMERCIAL CUTS",
    imageSrc: "/images/gallery18.webp",
    colClass: styles.colD
  }
];

export default function ByTheNumbers({
  title = "BY THE NUMBERS",
  stats = STATS_DATA
}: {
  title?: string;
  stats?: StatItem[];
}) {
  const [hoveredCol, setHoveredCol] = useState<string | null>("b"); // Default to column b (matching screenshot)

  return (
    <section className={styles.section} id="by-the-numbers" data-header-theme="dark">
      {/* Section Title */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* 4-Column Staggered Stat Grid */}
      <div className={styles.grid}>
        {stats.map((item) => {
          const isHovered = hoveredCol === item.id;

          return (
            <div
              key={item.id}
              className={`${styles.column} ${item.colClass} ${
                isHovered ? styles.hoverActive : ""
              }`}
              onMouseEnter={() => setHoveredCol(item.id)}
              onMouseLeave={() => setHoveredCol(null)}
              onClick={() => setHoveredCol(item.id)}
              role="button"
              tabIndex={0}
              aria-label={`${item.number} ${item.label}`}
            >
              {/* Column Letter Tag */}
              <span className={styles.letterTag}>{item.tag}</span>

              {/* Hover Production Still Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={item.label}
                  fill
                  className={styles.hoverImg}
                  sizes="300px"
                />
              </div>

              {/* Stat Content */}
              <div className={styles.statContent}>
                <div className={styles.statNumber}>{item.number}</div>
                <p className={styles.statLabel}>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
