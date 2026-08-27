"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FinalCourseCta.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCourseCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = () => {
    window.dispatchEvent(new Event("open-home-form"));
  };

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const camera = cameraRef.current;

    if (!section || !leftCol || !rightCol || !camera) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(camera, {
        scale: 2.3,
        transformOrigin: "center center",
        willChange: "transform"
      });
      gsap.set(leftCol, {
        x: -90,
        opacity: 0,
        willChange: "transform, opacity"
      });
      gsap.set(rightCol, {
        x: 90,
        opacity: 0,
        willChange: "transform, opacity"
      });

      // Scrub timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "top 15%",
          scrub: 1,
        }
      });

      tl.to(camera, {
        scale: 1,
        ease: "power2.out",
      }, 0)
      .to(leftCol, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
      }, 0)
      .to(rightCol, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
      }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="final-cta" ref={sectionRef} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Don&apos;t Just Learn How to Edit. Build the Capability to Create.
          </h2>
        </div>

        <div className={styles.editorialBlock}>
          <div className={styles.editorialCol} ref={leftColRef}>
            <p className={styles.paragraph}>
              The creative industry is changing quickly.
            </p>
            <p className={styles.paragraph}>
              The most valuable editors aren&apos;t defined by how many buttons they know inside a software.
            </p>
            <p className={styles.emphasis}>
              They&apos;re defined by how well they can understand a brief, make creative decisions, solve problems and deliver strong work.
            </p>
          </div>

          <div className={styles.editorialVisualCol}>
            <div className={styles.cameraWrapper} ref={cameraRef}>
              <Image
                src="/images/camlab-cam1.png"
                alt="Cinema Production Rig"
                width={320}
                height={320}
                className={styles.cameraImg}
                priority
              />
            </div>
          </div>

          <div className={styles.editorialCol} ref={rightColRef}>
            <p className={styles.paragraph}>
              Idea Creative School is built to help you develop that capability.
            </p>
            <p className={styles.tagline}>
              Build your skills. Build your portfolio. Build your career.
            </p>
          </div>
        </div>

        <div className={styles.programCard}>
          <div className={styles.programCardLeft}>
            <h3 className={styles.programTitle}>
              Full-Stack Video Editing &amp; Creative AI Mastery
            </h3>
            <p className={styles.programDesc}>
              24 weeks to build the creative skills, experience and confidence to step into the industry.
            </p>
          </div>

          <button
            type="button"
            onClick={handleApplyClick}
            className={styles.applyButton}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
