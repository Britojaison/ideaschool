"use client";

import React from "react";
import styles from "./StudentProjects.module.css";
import CurtainSlider from "@/components/ui/curtain-slider/CurtainSlider";
import TextAnimation from "@/components/ui/staggerText";

export default function StudentProjects() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.subtitle}>
              <TextAnimation divideBy="word">STUDENT PROJECTS</TextAnimation>
            </h4>
            <h2 className={styles.title}>
              <span className={styles.titleLine}>
                <TextAnimation divideBy="word" delay={0.06}>
                  SEE IDEAS
                </TextAnimation>
              </span>
              <span className={styles.titleMutedLine}>
                <TextAnimation divideBy="word" delay={0.18}>
                  DEVELOP INTO
                </TextAnimation>
              </span>
              <span className={styles.titleLine}>
                <TextAnimation divideBy="word" delay={0.3}>
                  FINISHED WORK.
                </TextAnimation>
              </span>
            </h2>
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
            <h4 className={styles.panelSubtitle}>
              <TextAnimation divideBy="word">STUDENT WORK</TextAnimation>
            </h4>
            <h3 className={styles.panelTitle}>
              <span style={{ display: "block" }}>
                <TextAnimation divideBy="word" delay={0.08}>
                  EVERY PROJECT
                </TextAnimation>
              </span>
              <span style={{ display: "block" }}>
                <TextAnimation divideBy="word" delay={0.2}>
                  STARTS WITH
                </TextAnimation>
              </span>
              <span style={{ display: "block" }}>
                <TextAnimation divideBy="word" delay={0.32}>
                  A DIRECTION.
                </TextAnimation>
              </span>
            </h3>
            <p className={styles.panelDesc}>
              <TextAnimation divideBy="word" delay={0.4}>
                The work improves through practice, feedback and revision.
              </TextAnimation>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
