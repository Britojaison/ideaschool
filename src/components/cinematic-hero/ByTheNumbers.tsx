"use client";

import React, { useRef } from "react";
import styles from "./ByTheNumbers.module.css";

interface StatItem {
  id: string;
  tag: string;
  number: string;
  label: string;
  colClass: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "a",
    tag: "a ]",
    number: "500+",
    label: "STUDENTS & CREATORS TRAINED",
    colClass: styles.colA
  },
  {
    id: "b",
    tag: "b ]",
    number: "24",
    label: "WEEKS INTENSIVE PRODUCTION WORKFLOW",
    colClass: styles.colB
  },
  {
    id: "c",
    tag: "c ]",
    number: "20+",
    label: "INDUSTRY MENTORS & COMMERCIAL DIRECTORS",
    colClass: styles.colC
  },
  {
    id: "d",
    tag: "d ]",
    number: "50+",
    label: "LIVE BRAND BRIEFS & COMMERCIAL CUTS",
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
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.section} id="by-the-numbers" data-header-theme="dark">
      {/* Section Title */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* 4-Column Staggered Stat Grid */}
      <div className={styles.grid}>
        {stats.map((item) => (
          <div key={item.id} className={`${styles.column} ${item.colClass}`}>
            <span className={styles.letterTag}>{item.tag}</span>
            <div className={styles.statNumber}>{item.number}</div>
            <p className={styles.statLabel}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
