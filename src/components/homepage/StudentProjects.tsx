"use client";

import React from "react";
import Image from "next/image";
import styles from "./StudentProjects.module.css";

export default function StudentProjects() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.subtitle}>STUDENT PROJECTS</h4>
            <h2 className={styles.title}>
              SEE IDEAS<br />DEVELOP INTO<br />FINISHED WORK.
            </h2>
          </div>
          <p className={styles.description}>
            Films, edits, design experiments and AI-<br />assisted visual projects developed across<br />Idea School programs.
          </p>
        </div>
        
        <div className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/DSC00024.webp" 
              alt="Students working on projects" 
              fill 
              sizes="(max-width: 900px) 100vw, 60vw" 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className={styles.textPanel}>
            <h4 className={styles.panelSubtitle}>STUDENT WORK</h4>
            <h3 className={styles.panelTitle}>
              EVERY<br />PROJECT<br />STARTS WITH<br />A DIRECTION.
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
