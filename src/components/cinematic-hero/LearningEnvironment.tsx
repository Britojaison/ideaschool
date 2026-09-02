"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./LearningEnvironment.module.css";
import ScrollHighlight from "../ui/ScrollHighlight";

const differenceCards = [
  {
    badge: "LEARNING",
    title: "Combine structured online foundations with guided physical sessions.",
    color: "#DAFD55",
  },
  {
    badge: "PRACTICE",
    title: "Work through assignments and professional-style briefs.",
    color: "#DAFD55",
  },
  {
    badge: "FEEDBACK",
    title: "Receive mentor reviews and clear revision direction.",
    color: "#DAFD55",
  },
  {
    badge: "ENVIRONMENT",
    title: "Learn alongside peers and working creative professionals.",
    color: "#DAFD55",
  },
  {
    badge: "OUTCOME",
    title: "Build stronger work, professional habits and portfolio confidence.",
    color: "#DAFD55",
    wide: true,
  },
];

export default function LearningEnvironment() {
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const activeRef = useRef(0);
  const [activeCard, setActiveCard] = useState(0);

  const moveHighlight = useCallback((index: number, animate = true) => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    const card = cardRefs.current.get(index);
    if (!grid || !highlight || !card) return;

    const gridRect = grid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    highlight.style.transitionDuration = animate ? "250ms" : "0ms";
    highlight.style.transform = `translate3d(${cardRect.left - gridRect.left}px, ${cardRect.top - gridRect.top}px, 0)`;
    highlight.style.width = `${cardRect.width}px`;
    highlight.style.height = `${cardRect.height}px`;
    highlight.style.backgroundColor = differenceCards[index].color;
    activeRef.current = index;
  }, []);

  useEffect(() => {
    moveHighlight(0, false);
    const alignHighlight = () => moveHighlight(activeRef.current, false);
    const observer = new ResizeObserver(alignHighlight);
    if (gridRef.current) observer.observe(gridRef.current);
    window.addEventListener("resize", alignHighlight);

    return () => {
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

        <div className={styles.sectionGroup}>
          <div className={styles.sectionTitle}>
            THE DIFFERENCE
          </div>
          
          <div className={styles.featuresGrid} ref={gridRef}>
            <div ref={highlightRef} className={styles.gridHighlight} aria-hidden="true" />
            {differenceCards.map((card, index) => (
              <div
                key={card.badge}
                ref={(element) => {
                  if (element) cardRefs.current.set(index, element);
                  else cardRefs.current.delete(index);
                }}
                className={`${styles.gridCard}${card.wide ? ` ${styles.gridCardWide}` : ""}${activeCard === index ? ` ${styles.gridCardActive}` : ""}`}
                onPointerEnter={() => {
                  setActiveCard(index);
                  moveHighlight(index);
                }}
              >
                <div className={styles.cardBadge}>{card.badge}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            ))}
          </div>
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
