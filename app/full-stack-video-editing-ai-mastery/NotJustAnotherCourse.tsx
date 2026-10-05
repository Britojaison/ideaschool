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
          <h2 className={styles.title}>
            <span>A COURSE THAT </span>
            <span className={styles.highlightWord}>GOES FURTHER.</span>
          </h2>
        </div>

        {/* Comparison Board */}
        <div className={styles.boardWrapper}>
          <div className={styles.boardScrollContainer}>
            {/* Unified Comparison Header & First Row Group */}
            <div className={styles.tableHeaderRow}>
              <div className={styles.emptyBrandHeader} />
              <div className={styles.categoriesTrack}>
                {COMPARISON_DATA.map((cat, idx) => (
                  <div key={idx} className={styles.pillHeader}>
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 1: IdeaSchool (Featured Red Hero Banner Row attached directly below header pills) */}
            <div className={styles.ideaSchoolRow}>
              <div className={styles.ideaSchoolBrand}>
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
