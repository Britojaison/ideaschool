"use client";

import React from "react";
import styles from "./ProgramBrochure.module.css";

interface BrochureHighlight {
  index: string;
  text: string;
}

const BROCHURE_HIGHLIGHTS: BrochureHighlight[] = [
  {
    index: "[01]",
    text: "Week-by-week technical roadmap across Premiere Pro, After Effects, and DaVinci Resolve."
  },
  {
    index: "[02]",
    text: "Full generative AI curriculum breakdown: Flux, Seedance, Runway & Midjourney pipelines."
  },
  {
    index: "[03]",
    text: "12-Week Industry Experience Program (IEP) structure with live 88GB agency briefs."
  },
  {
    index: "[04]",
    text: "Weekly production schedule: offline labs, 1:1 mentor critiques, and project deadlines."
  },
  {
    index: "[05]",
    text: "Placement assistance criteria, freelance rate cards, and agency portfolio standards."
  }
];

export default function ProgramBrochure() {
  const brochurePdfUrl = "/pdf/Program%20Brochure.pdf";

  return (
    <section className={styles.section} id="curriculum" data-header-theme="dark">
      <div className={styles.container}>
        {/* Left Column: Headline, Narrative & Highlights */}
        <div className={styles.leftCol}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.eyebrowDot} />
            <span>OFFICIAL PROGRAM BLUEPRINT • 24-WEEK SYLLABUS</span>
          </div>

          <h2 className={styles.title}>
            EXPLORE THE FULL CURRICULUM BLUEPRINT
          </h2>

          <p className={styles.subtitle}>
            Get the complete week-by-week syllabus, software tool breakdowns, live agency project briefs, 1-on-1 mentorship timeline, and placement portfolio milestones in one definitive guide.
          </p>

          {/* Checklist Highlights */}
          <div className={styles.featureList}>
            {BROCHURE_HIGHLIGHTS.map((item) => (
              <div key={item.index} className={styles.featureItem}>
                <span className={styles.featureIndex}>{item.index}</span>
                <span className={styles.featureText}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <a
              href={brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
              aria-label="Download Full Program Brochure PDF"
            >
              <span>DOWNLOAD BROCHURE (PDF)</span>
              <span className={styles.downloadIconBox}>↓</span>
            </a>

            <a
              href="#apply"
              className={styles.secondaryCta}
              aria-label="Apply for next cohort"
            >
              <span>APPLY FOR COHORT</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Technical Dossier Preview Card */}
        <div className={styles.rightCol}>
          <a
            href={brochurePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dossierCard}
            aria-label="Open Program Brochure PDF Preview"
          >
            {/* 4 Viewfinder Corner Reticles */}
            <span className={styles.cornerTL} />
            <span className={styles.cornerTR} />
            <span className={styles.cornerBL} />
            <span className={styles.cornerBR} />

            {/* Card Header */}
            <div className={styles.cardHeader}>
              <span className={styles.cardOrgLabel}>IDEA SCHOOL // SYLLABUS DOSSIER</span>
              <span className={styles.cardStatusPill}>2026 ROADMAP</span>
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>
                Full Stack Video Editing & Creative AI Mastery
              </h3>
              <p className={styles.cardSubtitle}>
                A 24-week intensive studio-led program engineered to build commercial-grade editing craft, AI speed, and an agency-level portfolio.
              </p>

              {/* Timeline Breakdown Preview */}
              <div className={styles.timelineRows}>
                <div className={styles.timelineRow}>
                  <span className={styles.timelinePhase}>
                    <span className={styles.phaseBullet}>▪</span> Weeks 01–12: Core Craft & Creative AI
                  </span>
                  <span className={styles.timelineDuration}>Core Training</span>
                </div>
                <div className={styles.timelineRow}>
                  <span className={styles.timelinePhase}>
                    <span className={styles.phaseBullet}>▪</span> Weeks 13–24: 88GB Agency Live Briefs
                  </span>
                  <span className={styles.timelineDuration}>Industry Experience</span>
                </div>
                <div className={styles.timelineRow}>
                  <span className={styles.timelinePhase}>
                    <span className={styles.phaseBullet}>▪</span> 1:1 Weekly Direct Mentor Feedback
                  </span>
                  <span className={styles.timelineDuration}>Weekly Reviews</span>
                </div>
                <div className={styles.timelineRow}>
                  <span className={styles.timelinePhase}>
                    <span className={styles.phaseBullet}>▪</span> Commercial Portfolio & Placement
                  </span>
                  <span className={styles.timelineDuration}>Final Outcome</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
              <span className={styles.pdfTag}>📄 50+ PAGES • PDF FORMAT</span>
              <span className={styles.openPreviewText}>
                <span>VIEW BROCHURE</span>
                <span>↗</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
