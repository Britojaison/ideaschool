"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { AlertTriangle, ShieldAlert, FileCode2 } from "lucide-react";

export default function VibecodingTrap() {
  return (
    <section className={`${styles.section} ${styles.coreProblemSection}`} id="the-trap" data-header-theme="dark">
      <div className={styles.ambientGlowLeft} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 02 // The Core Problem
          </div>
          <h2 className={styles.sectionTitle}>
            The Brutal Truth About <span className={styles.sectionTitleGradient}>Casual AI Coding</span>
          </h2>
          <p className={styles.sectionDesc}>
            Right now, everyone is talking about &ldquo;vibe coding&rdquo;—throwing vague prompts at an LLM, copy-pasting snippets into an editor, and hoping things don&apos;t break. It feels fast until reality strikes:
          </p>
        </div>

        {/* 3 Trap Cards */}
        <div className={styles.trapCardsGrid}>
          
          {/* Card 1 */}
          <div className={styles.trapCard}>
            <div className={styles.trapCardHeader}>
              <span className={styles.trapStatusPill}>[ 01 // PRODUCTION COLLAPSE ]</span>
              <AlertTriangle size={20} color="#ff3b7a" />
            </div>
            <div className={styles.trapCodeMock}>
              <code>
                FATAL: pool exhausted<br />
                Query latency: 14,280ms (p99)<br />
                HTTP 504 Gateway Timeout
              </code>
            </div>
            <div className={styles.trapCardBody}>
              The system hits production load and collapses under unoptimized queries.
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.trapCard}>
            <div className={styles.trapCardHeader}>
              <span className={styles.trapStatusPill}>[ 02 // SILENT VULNERABILITY ]</span>
              <ShieldAlert size={20} color="#ff3b7a" />
            </div>
            <div className={styles.trapCodeMock}>
              <code>
                WARN: CVE-2024-EXPOSED_KEY<br />
                Insecure direct object ref<br />
                Prompt injection vector active
              </code>
            </div>
            <div className={styles.trapCardBody}>
              Hallucinated code introduces silent security holes and fragile dependencies.
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.trapCard}>
            <div className={styles.trapCardHeader}>
              <span className={styles.trapStatusPill}>[ 03 // ARCHITECTURAL DEAD-END ]</span>
              <FileCode2 size={20} color="#ff3b7a" />
            </div>
            <div className={styles.trapCodeMock}>
              <code>
                ERROR: Context window exceeded<br />
                Spaghetti dependencies (42 files)<br />
                AI refactor failed: recursion limit
              </code>
            </div>
            <div className={styles.trapCardBody}>
              Your codebase turns into technical debt that no one—not even your AI assistant—can debug or scale.
            </div>
          </div>

        </div>

        {/* Punchline Contrast Banner */}
        <div className={styles.punchlineBanner}>
          <div className={styles.punchlineSideLeft}>
            <span className={styles.punchlineLabelDim}>THE CASUAL TRAP</span>
            <p className={styles.punchlineTextDim}>
              Casual prompting makes you a spectator in your own terminal.
            </p>
          </div>

          <div className={styles.punchlineDivider} aria-hidden="true" />

          <div className={styles.punchlineSideRight}>
            <span className={styles.punchlineLabelHighlight}>THE ARCHITECT PARADIGM</span>
            <p className={styles.punchlineTextBright}>
              True AI engineering makes you a <span>high-leverage architect.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
