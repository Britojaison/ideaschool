"use client";

import React from "react";
import Image from "next/image";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./NotJustAnotherCourse.module.css";

interface ComparisonCategory {
  title: string;
  online: string;
  offline: string;
  ideaSchool: string;
}

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    title: "Learning Style",
    online: "Self-Paced",
    offline: "Classroom",
    ideaSchool: "Agency-Led",
  },
  {
    title: "Mentorship",
    online: "Limited Support",
    offline: "Generic Trainers",
    ideaSchool: "Industry Experts",
  },
  {
    title: "Curriculum",
    online: "Software-Focused",
    offline: "Basic Syllabus",
    ideaSchool: "Editing + AI",
  },
  {
    title: "Industry Access",
    online: "None",
    offline: "Limited",
    ideaSchool: "Real Clients",
  },
  {
    title: "Environment",
    online: "Learn Alone",
    offline: "Traditional Classroom",
    ideaSchool: "Creative Studio",
  },
  {
    title: "Career Support",
    online: "Career Resources",
    offline: "Placement Support",
    ideaSchool: "Portfolio Building",
  },
  {
    title: "Goal",
    online: "Learn Software",
    offline: "Get Certified",
    ideaSchool: "Industry Mastery",
  },
];

export default function NotJustAnotherCourse() {
  return (
    <section
      id="compare-options"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Not Just Another Course - Compare Your Options"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.tag}>WHY IDEA SCHOOL</div>
          <h2 className={styles.title}>
            <ScrollHighlight
              text="NOT JUST ANOTHER COURSE."
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
          </h2>
          <p className={styles.subtitle}>
            Compare how IDEA School's studio model stands apart from generic tutorials and traditional institutes.
          </p>
        </div>

        {/* Comparison Board */}
        <div className={styles.boardWrapper}>
          <div className={styles.boardScrollContainer}>
            {/* Column Headers (Top Row) */}
            <div className={styles.headerPillsRow}>
              <div className={styles.brandPillHeader}>
                <span className={styles.headerLabelMuted}>Category</span>
              </div>
              <div className={styles.categoriesTrack}>
                {COMPARISON_DATA.map((cat, idx) => (
                  <div key={idx} className={styles.pillHeader}>
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 1: IdeaSchool (Featured Red Hero Banner Row) */}
            <div className={styles.ideaSchoolRow}>
              <div className={styles.ideaSchoolBrand}>
                <div className={styles.brandBadgeWrap}>
                  <Image
                    src="/assets/logo/idea logo.webp"
                    alt="IDEA School"
                    width={48}
                    height={20}
                    className={styles.ideaLogoImg}
                  />
                </div>
                <div className={styles.ideaBrandText}>
                  <span className={styles.ideaBrandName}>IDEA School</span>
                  <span className={styles.ideaBrandSubtitle}>Agency Program</span>
                </div>
              </div>

              <div className={styles.valuesTrack}>
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className={styles.ideaSchoolValueCell}>
                    <span className={styles.mobileCategoryLabel}>{item.title}</span>
                    <span className={styles.ideaValueText}>{item.ideaSchool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Online Courses */}
            <div className={styles.standardRow}>
              <div className={styles.standardBrand}>
                <div className={styles.standardIconWrap}>
                  {/* Laptop / Online icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                </div>
                <div className={styles.standardBrandText}>
                  <span className={styles.standardBrandName}>Online Courses</span>
                  <span className={styles.standardBrandSubtitle}>Tutorials &amp; MOOCs</span>
                </div>
              </div>

              <div className={styles.valuesTrack}>
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className={styles.standardValueCell}>
                    <span className={styles.mobileCategoryLabel}>{item.title}</span>
                    <span className={styles.standardValueText}>{item.online}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Offline Schools */}
            <div className={styles.standardRow}>
              <div className={styles.standardBrand}>
                <div className={styles.standardIconWrap}>
                  {/* Building / Offline institute icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                    <path d="M9 9h1" />
                    <path d="M9 13h1" />
                    <path d="M9 17h1" />
                  </svg>
                </div>
                <div className={styles.standardBrandText}>
                  <span className={styles.standardBrandName}>Offline Schools</span>
                  <span className={styles.standardBrandSubtitle}>Traditional Institutes</span>
                </div>
              </div>

              <div className={styles.valuesTrack}>
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className={styles.standardValueCell}>
                    <span className={styles.mobileCategoryLabel}>{item.title}</span>
                    <span className={styles.standardValueText}>{item.offline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
