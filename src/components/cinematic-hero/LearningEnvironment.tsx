"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./LearningEnvironment.module.css";
import ScrollHighlight from "../ui/ScrollHighlight";

const comparisonData = [
  {
    category: "LEARNING",
    online: "Watch lessons independently.",
    ideaSchool: "Combine structured online foundations with guided physical sessions.",
  },
  {
    category: "PRACTICE",
    online: "Follow tutorials and isolated exercises.",
    ideaSchool: "Work through assignments and professional-style briefs.",
  },
  {
    category: "FEEDBACK",
    online: "Limited, delayed or automated.",
    ideaSchool: "Receive mentor reviews and clear revision direction.",
  },
  {
    category: "ENVIRONMENT",
    online: "Learn largely on your own.",
    ideaSchool: "Learn alongside peers and working creative professionals.",
  },
  {
    category: "OUTCOME",
    online: "Understand the software.",
    ideaSchool: "Build stronger work, professional habits and portfolio confidence.",
  },
];

export default function LearningEnvironment() {
  const tableRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const activeRef = useRef(5); // Default to FEEDBACK on Idea School side
  const [activeCell, setActiveCell] = useState(5);

  const moveHighlight = useCallback((index: number, animate = true) => {
    const table = tableRef.current;
    const highlight = highlightRef.current;
    const cell = cellRefs.current.get(index);
    if (!table || !highlight || !cell) return;

    const isLeft = index % 2 === 0;

    const tableRect = table.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    highlight.style.transitionDuration = animate ? "250ms" : "0ms";
    highlight.style.transform = `translate3d(${cellRect.left - tableRect.left}px, ${cellRect.top - tableRect.top}px, 0)`;
    highlight.style.width = `${cellRect.width}px`;
    highlight.style.height = `${cellRect.height}px`;
    highlight.style.backgroundColor = isLeft ? "#552EAD" : "#DAFD55";
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

          <div className={styles.headerRight}>
            <div className={styles.description}>
              <ScrollHighlight 
                text="Show the environment as it is: students creating, mentors reviewing, assignments progressing and work improving through revision."
                font={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                splitBy="words"
                dimColor="#475569"
                highlightColor="#A0AAB2"
                scrollStart="bottom bottom"
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
              <h3 className={styles.headerTitleLeft}>Self-paced online course</h3>
            </div>
            <div className={styles.headerColRight}>
              <h3 className={styles.headerTitleRight}>Idea School</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, rowIdx) => {
            const leftIndex = rowIdx * 2;
            const rightIndex = rowIdx * 2 + 1;

            return (
              <div key={row.category} className={styles.comparisonRow}>
                <div
                  ref={(element) => {
                    if (element) cellRefs.current.set(leftIndex, element);
                    else cellRefs.current.delete(leftIndex);
                  }}
                  className={`${styles.cellLeft}${activeCell === leftIndex ? ` ${styles.cellActive}` : ""}`}
                  onPointerEnter={() => {
                    setActiveCell(leftIndex);
                    moveHighlight(leftIndex);
                  }}
                >
                  <div className={styles.cellLabel}>{row.category}</div>
                  <p className={styles.cellText}>{row.online}</p>
                </div>

                <div
                  ref={(element) => {
                    if (element) cellRefs.current.set(rightIndex, element);
                    else cellRefs.current.delete(rightIndex);
                  }}
                  className={`${styles.cellRight}${activeCell === rightIndex ? ` ${styles.cellActive}` : ""}`}
                  onPointerEnter={() => {
                    setActiveCell(rightIndex);
                    moveHighlight(rightIndex);
                  }}
                >
                  <div className={styles.cellLabel}>{row.category}</div>
                  <p className={styles.cellText}>{row.ideaSchool}</p>
                </div>
              </div>
            );
          })}
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
