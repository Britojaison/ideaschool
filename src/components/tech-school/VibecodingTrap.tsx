"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./TechSchool.module.css";
import whyCardIcon1 from "@public/images/visualpage/why-card-icon-1.png";
import whyCardIcon2 from "@public/images/visualpage/why-card-icon-2.png";
import whyCardIcon3 from "@public/images/visualpage/why-card-icon-3.png";
import whyCardIcon4 from "@public/images/visualpage/why-card-icon-4.png";
import iconGrid from "@public/images/visualpage/icon-grid.png";

const trapPoints = [
  {
    index: "01",
    title: "Everything breaks when real users show up",
    icon: whyCardIcon1,
  },
  {
    index: "02",
    title: "A generic AI interface that nobody trusts",
    icon: iconGrid,
  },
  {
    index: "03",
    title: "Security holes slip in without you noticing",
    icon: whyCardIcon2,
  },
  {
    index: "04",
    title: "One tiny change breaks the whole app",
    icon: whyCardIcon3,
  },
  {
    index: "05",
    title: "Hours lost asking AI to fix its own bugs",
    icon: whyCardIcon4,
  },
];

export default function VibecodingTrap() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.trapCardVisible);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.section} ${styles.coreProblemSection}`}
      id="the-trap"
      data-header-theme="dark"
    >
      {/* Background Cyber Grid (Fixed & motionless across section) */}
      <div className={styles.coreProblemGridBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* Split 2-Column Layout */}
        <div className={styles.coreProblemLayout}>

          {/* Left Column with Sticky Content */}
          <div className={styles.coreProblemLeftCol}>
            <div className={styles.coreProblemStickyCol}>
              <h2 className={styles.coreProblemBigTitle}>
                <span className={styles.coreProblemLine}>THE BRUTAL TRUTH</span>
                <span className={`${styles.coreProblemLine} ${styles.coreProblemTitleRowHighlight}`}>
                  <span>ABOUT</span>
                  <span className={styles.coreProblemHighlightBox}>CASUAL</span>
                  <span>AI</span>
                </span>
                <span className={styles.coreProblemLine}>CODING THAT NOBODY</span>
                <span className={styles.coreProblemLine}>TALKS ABOUT</span>
              </h2>
            </div>
          </div>

          {/* Right Column: 5 Solid Neo-Brutalist Cards */}
          <div className={styles.coreProblemCardsCol}>
            {trapPoints.map((item, index) => {
              const cardColorClass =
                index % 2 === 0 ? styles.trapCardBlack : styles.trapCardYellow;

              return (
                <div
                  key={item.index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={styles.trapCardItemWrap}
                >
                  <article className={`${styles.trapSolidCard} ${cardColorClass}`}>
                    <span className={styles.trapCardIndexBadge}>{item.index}</span>

                    <div className={styles.trapCardContentRow}>
                      <div className={styles.trapBrandIconWrap}>
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          width={68}
                          height={68}
                          className={styles.trapBrandIcon}
                        />
                      </div>

                      <h3 className={styles.trapCardMainTitle}>{item.title}</h3>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
