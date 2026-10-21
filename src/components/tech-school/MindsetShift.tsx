"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { X, Check, ArrowRight } from "lucide-react";

const COMPARISONS = [
  {
    index: "01",
    badCategory: "Execution Method",
    bad: "Blindly copy-pasting AI output until code accidentally compiles",
    goodCategory: "Architectural Protocol",
    good: "Treating AI as a high-speed execution engine governed by strict system specifications",
  },
  {
    index: "02",
    badCategory: "Code Base Structure",
    bad: "Fragile, sprawling single-file scripts plagued by circular dependencies",
    goodCategory: "Production Scale",
    good: "Scalable full-stack architecture built with Next.js, relational schemas, and typed API contracts",
  },
  {
    index: "03",
    badCategory: "Bug Resolution",
    bad: "Relying on prompt luck when an LLM hallucinates logic or breaks imports",
    goodCategory: "Agentic Indexing",
    good: "Mastering multi-file refactoring, local context indexing, and deterministic agentic config rules",
  },
  {
    index: "04",
    badCategory: "Output Reliability",
    bad: "Unstructured conversational text completions that fail in automated pipelines",
    goodCategory: "Structured Systems",
    good: "Production-grade structured JSON schemas, Zod validation, and high-recall RAG pipelines",
  },
  {
    index: "05",
    badCategory: "Deployment Scope",
    bad: "Toy prototypes that run on your localhost and break under real traffic",
    goodCategory: "Live Cloud Delivery",
    good: "Collaborative, Git-tracked, battle-tested software built and deployed to production cloud in 1 day",
  },
];

export default function MindsetShift() {
  return (
    <section className={`${styles.section} ${styles.mindsetSection}`} id="mindset-shift" data-header-theme="dark">
      <div className={styles.ambientGlowRight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.mindsetHeaderGroup}>
          <h2 className={styles.mindsetStatement}>
            The gap between casual prompt hobbyists and production software architects is systematic. Here is how your engineering approach permanently transforms:
          </h2>
        </div>

        {/* Matrix comparison table */}
        <div className={styles.comparisonTableWrapper}>
          {/* Table Headers */}
          <div className={styles.comparisonTableHeader}>
            <div className={styles.colHeaderLeft}>
              <div className={styles.colHeaderTitleGroup}>
                <span className={styles.colHeaderPillBad}>CASUAL VIBECODING</span>
                <span className={styles.colHeaderSubBad}>The Fragile Hobbyist Trap</span>
              </div>
            </div>

            <div className={styles.colHeaderRight}>
              <div className={styles.colHeaderTitleGroup}>
                <span className={styles.colHeaderPillGood}>TRUE AI ENGINEERING</span>
                <span className={styles.colHeaderSubGood}>The IdeaSchool Architecture Standard</span>
              </div>
              <span className={styles.productionProofBadge}>PRODUCTION PROOF</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className={styles.comparisonRowsContainer}>
            {COMPARISONS.map((row) => (
              <div key={row.index} className={styles.comparisonRow}>
                {/* Left: Casual Vibecoding */}
                <div className={styles.cellBad}>
                  <div className={styles.cellIconWrapBad}>
                    <X size={16} strokeWidth={2.5} />
                  </div>
                  <div className={styles.cellContent}>
                    <div className={styles.cellMetaRow}>
                      <span className={styles.cellIndexBadgeBad}>[ {row.index} ]</span>
                      <span className={styles.cellCategoryBad}>{row.badCategory}</span>
                    </div>
                    <p className={styles.cellTextBad}>{row.bad}</p>
                  </div>
                </div>

                {/* Center Transition Indicator (Desktop) */}
                <div className={styles.rowTransitionArrow} aria-hidden="true">
                  <ArrowRight size={14} />
                </div>

                {/* Right: True AI Engineering */}
                <div className={styles.cellGood}>
                  <div className={styles.cellIconWrapGood}>
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div className={styles.cellContent}>
                    <div className={styles.cellMetaRow}>
                      <span className={styles.cellIndexBadgeGood}>[ {row.index} ]</span>
                      <span className={styles.cellCategoryGood}>{row.goodCategory}</span>
                    </div>
                    <p className={styles.cellTextGood}>{row.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
