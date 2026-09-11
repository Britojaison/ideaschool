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

          <div className={styles.principlesList}>
            {/* Principle 1 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Craft before shortcuts</h3>
              <p className={styles.principleDesc}>Build pacing, story, sound and design judgment before leaning on plugins or AI.</p>
            </div>

            {/* Principle 2 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Practice before presentation</h3>
              <p className={styles.principleDesc}>Create work every week, review it honestly and improve it before adding it to a portfolio.</p>
            </div>

            {/* Principle 3 */}
            <div className={styles.principleRow}>
              <h3 className={styles.principleTitle}>Studio habits before hype</h3>
              <p className={styles.principleDesc}>Learn briefs, file discipline, critique, revision and delivery—the habits creative teams rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
