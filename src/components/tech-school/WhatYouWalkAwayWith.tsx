"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { ShieldCheck, Terminal, Layers, Database, Sparkles } from "lucide-react";

const DELIVERABLES = [
  {
    index: "01",
    build: "Live AI SaaS App",
    stack: "Next.js, Backend APIs, Cloud DB, LLM APIs",
    outcome: "A live, deployed tool you can showcase on your portfolio.",
    icon: Layers,
  },
  {
    index: "02",
    build: "Agentic IDE Setup",
    stack: "Cursor / Windsurf, Custom Configs, Code Indexing",
    outcome: "Cut dev time in half using automated multi-file refactoring.",
    icon: Terminal,
  },
  {
    index: "03",
    build: "Production AI Pipeline",
    stack: "Structured JSON, Direct API Calls, Basic RAG",
    outcome: "Real software integration, not casual chat prompts.",
    icon: Sparkles,
  },
  {
    index: "04",
    build: "Enterprise Workflow",
    stack: "Git, GitHub, CLI, Postman, MCP",
    outcome: "Clean, hireable code that handles real production loads.",
    icon: Database,
  },
];

export default function WhatYouWalkAwayWith() {
  return (
    <section className={styles.section} id="what-you-walk-away-with" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 04 // What You Walk Away With
          </div>
          <h2 className={styles.sectionTitle}>
            Stop Studying. <span className={styles.sectionTitleGradient}>Start Shipping.</span>
          </h2>
          <p className={styles.sectionDesc}>
            No theoretical slides or passive tutorials. In 24 hours, you build, architect, test, and ship full-stack code that lives in production.
          </p>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className={styles.walkAwayGrid}>
          {DELIVERABLES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.index} className={styles.walkAwayCard}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className={styles.walkAwayCardIndex}>MODULE // {item.index}</span>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--grad-crimson-pill)",
                    border: "1px solid rgba(205, 12, 65, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Icon size={18} color="#f2bf49" />
                  </div>
                </div>

                <h3 className={styles.walkAwayCardTitle}>{item.build}</h3>

                <div className={styles.walkAwayStackBox}>
                  <span className={styles.walkAwayStackLabel}>THE TECH STACK</span>
                  <span className={styles.walkAwayStackTokens}>{item.stack}</span>
                </div>

                <div className={styles.walkAwayOutcomeBox}>
                  <span className={styles.outcomeBadge}>REAL-WORLD OUTCOME</span>
                  <p className={styles.outcomeText}>{item.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 1-Day Guarantee */}
        <div className={styles.guaranteeCard}>
          <div className={styles.guaranteeBadgeGraphic} aria-hidden="true">
            <ShieldCheck size={32} color="#ffffff" />
          </div>
          <div className={styles.guaranteeContent}>
            <div className={styles.guaranteeTitle}>THE 1-DAY GUARANTEE</div>
            <div className={styles.guaranteeText}>
              Walk in with your laptop, walk out with a live, production-grade AI SaaS deployed to the internet.
            </div>
          </div>
          <div className={styles.stickerTagYellow} style={{ transform: "rotate(2deg)" }}>
            ZERO TO PROD ↗
          </div>
        </div>

      </div>
    </section>
  );
}
