"use client";

import React from "react";
import styles from "./TechSchool.module.css";
import { GraduationCap, Briefcase, Code2, AlertCircle } from "lucide-react";

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: "CS & Tech Students",
    tag: "PORTFOLIO & CAREER",
    desc: "Who want to stand out from thousands of peers relying on standard ChatGPT completions. Graduate with deployed production systems, not generic school assignments.",
  },
  {
    icon: Briefcase,
    title: "Aspiring Founders",
    tag: "SOLO SHIP MVP",
    desc: "Looking to build, validate, and ship functional MVPs without hiring an expensive dev agency. Turn your product idea into a working SaaS with real auth, DB, and billing.",
  },
  {
    icon: Code2,
    title: "Junior Developers",
    tag: "LEVEL UP ARCHITECTURE",
    desc: "Ready to transition from raw syntax writers to AI-augmented full-stack engineers. Learn how to direct agentic systems to do the heavy lifting while you command the architecture.",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className={styles.section} id="who-this-is-for" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 06 // Target Profiles
          </div>
          <h2 className={styles.sectionTitle}>
            Who This Workshop <span className={styles.sectionTitleGradient}>Is For</span>
          </h2>
          <p className={styles.sectionDesc}>
            Tailored specifically for ambitious builders ready to cross the boundary into production engineering.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className={styles.whoIsThisForGrid}>
          {AUDIENCE.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className={styles.targetCard}>
                <div className={styles.targetCardIconBadge}>
                  <Icon size={22} color="#f2bf49" />
                </div>
                <div style={{
                  fontSize: "11px",
                  fontFamily: '"Sopar", "Monument Extended", sans-serif',
                  letterSpacing: "0.12em",
                  color: "var(--accent-gold)",
                  marginBottom: "8px",
                  textTransform: "uppercase"
                }}>
                  {card.tag}
                </div>
                <h3 className={styles.targetCardTitle}>{card.title}</h3>
                <p className={styles.targetCardDesc}>{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Prerequisite Box */}
        <div className={styles.prerequisiteBox}>
          <AlertCircle className={styles.prerequisiteIcon} size={24} />
          <div className={styles.prerequisiteText}>
            <strong>Prerequisite:</strong> Basic understanding of programming concepts (JavaScript/Python basics). No prior AI or machine learning experience required.
          </div>
        </div>

      </div>
    </section>
  );
}
