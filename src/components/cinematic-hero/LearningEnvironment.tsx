"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./LearningEnvironment.module.css";
import ScrollHighlight from "../ui/ScrollHighlight";

const comparisonData = [
  {
    num: "01",
    category: "LEARNING",
    online: "Watch recorded lessons independently.",
    ideaSchoolPrefix: "Combine online learning with ",
    ideaSchoolHighlight: "guided studio sessions.",
  },
  {
    num: "02",
    category: "PRACTICE",
    online: "Follow tutorials and exercises.",
    ideaSchoolPrefix: "Work through assignments and ",
    ideaSchoolHighlight: "professional-style briefs.",
  },
  {
    num: "03",
    category: "FEEDBACK",
    online: "Review your own work or rely on automated feedback.",
    ideaSchoolPrefix: "Receive direct mentor reviews and ",
    ideaSchoolHighlight: "clear revision guidance.",
  },
  {
    num: "04",
    category: "ENVIRONMENT",
    online: "Learn largely on your own.",
    ideaSchoolPrefix: "Learn alongside peers and ",
    ideaSchoolHighlight: "working creative professionals.",
  },
  {
    num: "05",
    category: "OUTCOME",
    online: "Become familiar with the software.",
    ideaSchoolPrefix: "Build a stronger process, professional habits and ",
    ideaSchoolHighlight: "portfolio-ready work.",
  },
];

const corePrinciples = [
  {
    id: "craft",
    title: "Craft before shortcuts",
    rotate: "-2deg",
    glowColor: "rgba(218, 253, 85, 0.07)",
    borderColor: "rgba(218, 253, 85, 0.22)",
    icon: (
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="52" width="64" height="20" rx="4" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" fill="rgba(255, 255, 255, 0.03)" />
        <line x1="40" y1="52" x2="40" y2="72" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M56 58L60 62L56 66L52 62Z" fill="#DAFD55" />
        <circle cx="28" cy="24" r="7" stroke="#DAFD55" strokeWidth="2.5" fill="none" />
        <circle cx="44" cy="22" r="7" stroke="#8B7AFE" strokeWidth="2.5" fill="none" />
        <path d="M33 29L58 54" stroke="#DAFD55" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M49 27L26 50" stroke="#8B7AFE" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="41" cy="38" r="2.5" fill="#FFFFFF" />
        <path d="M58 26V36M64 20V42M70 28V34M76 24V38" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    desc: "Build pacing, story, sound and design judgment before leaning on plugins or AI.",
  },
  {
    id: "practice",
    title: "Practice before presentation",
    rotate: "0.5deg",
    glowColor: "rgba(139, 122, 254, 0.08)",
    borderColor: "rgba(139, 122, 254, 0.25)",
    icon: (
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="44" cy="44" r="32" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M44 12C61.6731 12 76 26.3269 76 44C76 54.2 71.2 63.2 63.8 69" stroke="#8B7AFE" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M67 71L62 69L65 63" stroke="#8B7AFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="25" y="26" width="38" height="28" rx="3" stroke="#FFFFFF" strokeWidth="2" fill="rgba(139, 122, 254, 0.06)" />
        <path d="M40 36L48 40L40 44V36Z" fill="#DAFD55" />
        <path d="M38 54V60H50V54" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 60H56" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="65" cy="23" r="8" fill="#DAFD55" />
        <path d="M61.5 23L64 25.5L68.5 20.5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: "Create work every week, review it honestly and improve it before adding it to a portfolio.",
  },
  {
    id: "habits",
    title: "Studio habits before hype",
    rotate: "2deg",
    glowColor: "rgba(218, 253, 85, 0.07)",
    borderColor: "rgba(218, 253, 85, 0.22)",
    icon: (
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="22" width="44" height="50" rx="4" stroke="#FFFFFF" strokeWidth="2" fill="rgba(218, 253, 85, 0.03)" />
        <path d="M34 22V18C34 16 36 14 38 14H50C52 14 54 16 54 18V22" stroke="#DAFD55" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="44" cy="18" r="2" fill="#DAFD55" />
        <path d="M30 34L33 37L38 31" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="42" y1="34" x2="58" y2="34" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 46L33 49L38 43" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="42" y1="46" x2="56" y2="46" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 58L33 61L38 55" stroke="#8B7AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="42" y1="58" x2="52" y2="58" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" />
        <rect x="52" y="58" width="18" height="12" rx="2" fill="#8B7AFE" />
        <text x="61" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PRO</text>
      </svg>
    ),
    desc: "Learn briefs, file discipline, critique, revision and delivery—the habits creative teams rely on.",
  },
];

export default function LearningEnvironment() {
  const tableRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const activeRef = useRef(0);
  const [activeRow, setActiveRow] = useState(0);

  const moveHighlight = useCallback((index: number, animate = true) => {
    const table = tableRef.current;
    const highlight = highlightRef.current;
    const cell = cellRefs.current.get(index);
    if (!table || !highlight || !cell) return;

    const tableRect = table.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    highlight.style.transitionDuration = animate ? "250ms" : "0ms";
    highlight.style.transform = `translate3d(${cellRect.left - tableRect.left}px, ${cellRect.top - tableRect.top}px, 0)`;
    highlight.style.width = `${cellRect.width}px`;
    highlight.style.height = `${cellRect.height}px`;
    highlight.style.opacity = "1";
    activeRef.current = index;
  }, []);

  useEffect(() => {
    moveHighlight(activeRef.current, false);
    const timer = setTimeout(() => {
      moveHighlight(activeRef.current, false);
    }, 50);

    const alignHighlight = () => moveHighlight(activeRef.current, false);
    const observer = new ResizeObserver(alignHighlight);
    if (tableRef.current) observer.observe(tableRef.current);
    window.addEventListener("resize", alignHighlight);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", alignHighlight);
    };
  }, [moveHighlight]);

  return (
    <section className={styles.section} id="learning-environment" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tag}>INSIDE IDEA SCHOOL</div>
            <div className={styles.title}>
              <ScrollHighlight
                text="BUILT AROUND PRACTICE, FEEDBACK AND BETTER WORK."
                font={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                splitBy="words"
                scrollStart="top bottom"
                scrollEnd="center center"
              />
            </div>
          </div>
        </div>

        <div className={styles.comparisonTable} ref={tableRef}>
          <div ref={highlightRef} className={styles.gridHighlight} aria-hidden="true" />

          {/* Header Row */}
          <div className={styles.comparisonHeaderRow}>
            <div className={styles.headerColLeft}>
              <div className={styles.headerSubtitle}>TYPICAL SELF-PACED COURSE</div>
              <h3 className={styles.headerTitleLeft}>WATCH AND FOLLOW</h3>
            </div>
            <div className={styles.headerColRight}>
              <div className={styles.headerSubtitleRight}>LEARN AND APPLY</div>
              <h3 className={styles.headerTitleRight}>
                <span className={styles.greenBar} aria-hidden="true" />
                <span>IDEA SCHOOL</span>
              </h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, rowIdx) => (
            <div
              key={row.category}
              className={styles.comparisonRow}
              onPointerEnter={() => {
                setActiveRow(rowIdx);
                moveHighlight(rowIdx);
              }}
            >
              <div className={styles.cellLeft}>
                <div className={styles.cellMetaLeft}>
                  <span className={styles.cellNum}>{row.num}</span>
                  <span className={styles.cellCategory}>{row.category}</span>
                </div>
                <p className={styles.cellTextLeft}>{row.online}</p>
              </div>

              <div
                ref={(element) => {
                  if (element) cellRefs.current.set(rowIdx, element);
                  else cellRefs.current.delete(rowIdx);
                }}
                className={`${styles.cellRight}${activeRow === rowIdx ? ` ${styles.cellActive}` : ""}`}
                onPointerEnter={() => {
                  setActiveRow(rowIdx);
                  moveHighlight(rowIdx);
                }}
              >
                <div className={styles.cellMetaRight}>
                  <span className={styles.cellNum}>{row.num}</span>
                  <span className={styles.cellCategory}>{row.category}</span>
                </div>
                <p className={styles.cellTextRight}>
                  <span>{row.ideaSchoolPrefix}</span>
                  <span className={styles.highlightText}>{row.ideaSchoolHighlight}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sectionGroup}>
          <div className={styles.sectionTitle}>
            CORE PRINCIPLES
          </div>

          <div className={styles.principlesGrid}>
            {corePrinciples.map((item) => (
              <div
                key={item.id}
                className={styles.principleCard}
                style={{
                  ["--card-rotate" as any]: item.rotate,
                  ["--card-border" as any]: item.borderColor,
                  ["--card-glow" as any]: item.glowColor,
                }}
              >
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardIconWrapper}>{item.icon}</div>
                <p className={styles.cardDescription}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
