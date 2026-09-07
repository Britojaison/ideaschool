"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./StudentProjects.module.css";
import CurtainSlider from "@/components/ui/curtain-slider/CurtainSlider";

export default function StudentProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500); // Slight delay to ensure layout is ready
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.subtitle}>STUDENT PROJECTS</h4>
            <h2 className={styles.title}>
              SEE IDEAS
              <span>DEVELOP INTO</span>
              FINISHED WORK.
            </h2>
          </div>
          <div className={styles.descWrapper}>
            <p className={styles.description}>
              Films, edits, design experiments and AI-assisted visual projects developed across Idea School programs.
            </p>
          </div>
        </div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <CurtainSlider
              auto={2}
              duration={1.2}
              images={[
                {
                  src: '/images/DSC00024.webp',
                  alt: 'Students working',
                  title: 'Edit',
                  label: 'Lab 01',
                },
                {
                  src: '/images/DSC00033.webp',
                  alt: 'Directing',
                  title: 'Direct',
                  label: 'Lab 02',
                },
                {
                  src: '/images/gallery10.webp',
                  alt: 'Classroom',
                  title: 'Shoot',
                  label: 'Lab 03',
                }
              ]}
            />
          </div>
          <div className={styles.textPanel}>
            <h4 className={styles.panelSubtitle}>STUDENT WORK</h4>
            <h3 className={styles.panelTitle}>
              EVERY PROJECT<br />STARTS WITH<br />A DIRECTION.
            </h3>
            <p className={styles.panelDesc}>
              The work improves through practice, feedback and revision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
