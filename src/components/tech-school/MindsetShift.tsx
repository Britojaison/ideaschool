"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { X, Check } from "lucide-react";

const COMPARISONS = [
  {
    bad: "Blindly copy-pasting AI output until it compiles",
    good: "Treating AI as an ultra-fast execution engine under strict architectural design",
  },
  {
    bad: "Fragile, single-file scripts with messy dependencies",
    good: "Scalable full-stack systems with Next.js, relational databases, and clean APIs",
  },
  {
    bad: "Relying on luck when AI hallucinates logic",
    good: "Mastering multi-file refactoring, context indexing, and agentic config files",
  },
  {
    bad: "Unstructured text completions",
    good: "Production-grade structured JSON outputs and RAG retrieval pipelines",
  },
  {
    bad: "Code that lives locally on your laptop",
    good: "Collaborative, Git-tracked, production-tested software deployed to the cloud",
  },
];

export default function MindsetShift() {
  return (
    <section className={styles.section} id="mindset-shift" data-header-theme="dark">
      <div className={styles.ambientGlowRight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 03 // The Mindset Shift
          </div>
          <h2 className={styles.sectionTitle}>
            Vibecoding <span className={styles.sectionTitleGradient}>vs. AI Engineering</span>
          </h2>
          <p className={styles.sectionDesc}>
            The gap between prompt hobbyists and production software architects is systematic. Here is how your approach permanently transforms:
          </p>
        </div>

        {/* Matrix comparison table */}
        <div className={styles.comparisonTableWrapper}>
          <div className={styles.comparisonTableHeader}>
            <div className={styles.colHeaderLeft}>
              <X size={18} color="#ff4a6e" />
              <span className={styles.colHeaderTitleBad}>Casual Vibecoding ❌</span>
            </div>
            <div className={styles.colHeaderRight}>
              <span className={styles.colHeaderTitleGood}>True AI Engineering (The IdeaSchool Way) ✅</span>
              <span className={styles.stickerTagYellow}>PRODUCTION PROOF</span>
            </div>
          </div>

          <div>
            {COMPARISONS.map((row, index) => (
              <div key={index} className={styles.comparisonRow}>
                {/* Left: Casual Vibecoding */}
                <div className={styles.cellBad}>
                  <div className={styles.crossIcon}>
                    <X size={18} />
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#ff5e7e", marginBottom: "4px", opacity: 0.8 }} className={styles.fontHighlight}>
                      Casual Trap #{index + 1}
                    </span>
                    {row.bad}
                  </div>
                </div>

                {/* Right: True AI Engineering */}
                <div className={styles.cellGood}>
                  <div className={styles.checkIcon}>
                    <Check size={14} />
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-gold)", marginBottom: "4px" }} className={styles.fontHighlight}>
                      IdeaSchool Standard #{index + 1}
                    </span>
                    {row.good}
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
