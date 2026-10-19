"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { Zap, Gauge, Users } from "lucide-react";

const MULTIPLIERS = [
  {
    metric: "2x",
    label: "2x Speed",
    sub: "WEEKS TO HOURS",
    desc: "Collapse development sprints from weeks to hours by replacing repetitive manual tasks with automated agent workflows.",
    icon: Zap,
  },
  {
    metric: "2x",
    label: "2x Productivity",
    sub: "ZERO BOILERPLATE",
    desc: "Eliminate boilerplate writing, test scaffolding, and manual setup to spend your mental bandwidth on core business logic.",
    icon: Gauge,
  },
  {
    metric: "2x",
    label: "2x Capability",
    sub: "SOLO FULL-STACK",
    desc: "Stop waiting for a team. Gain the end-to-end capability to handle schema design, backend logic, frontends, and cloud deployment alone.",
    icon: Users,
  },
];

export default function TwoXMultiplier() {
  return (
    <section className={styles.section} id="the-2x-multiplier" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 05 // The 2x Multiplier
          </div>
          <h2 className={styles.sectionTitle}>
            How High-Leverage Engineers <span className={styles.sectionTitleGradient}>Outpace the Rest</span>
          </h2>
          <p className={styles.sectionDesc}>
            AI doesn&apos;t replace engineers. Engineers who master agentic architecture replace those who merely prompt. Here is how your leverage doubles across every dimension:
          </p>
        </div>

        <div className={styles.multiplierGrid}>
          {MULTIPLIERS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className={styles.multiplierCard}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div className={styles.multiplierMetric}>{m.metric}</div>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--grad-crimson-pill)",
                    border: "1px solid rgba(205, 12, 65, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Icon size={20} color="#f2bf49" />
                  </div>
                </div>

                <div style={{
                  fontSize: "11px",
                  fontFamily: '"Sopar", "Monument Extended", sans-serif',
                  letterSpacing: "0.12em",
                  color: "var(--accent-gold)",
                  marginBottom: "8px",
                  textTransform: "uppercase"
                }}>
                  {m.sub}
                </div>

                <h3 className={styles.multiplierLabel}>{m.label}</h3>

                <p className={styles.multiplierDesc}>{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
