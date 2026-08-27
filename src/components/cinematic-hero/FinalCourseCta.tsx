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
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const programCardRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = () => {
    window.dispatchEvent(new Event("open-home-form"));
  };

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const header = headerRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const camera = cameraRef.current;
    const divider = dividerRef.current;
    const programCard = programCardRef.current;

    if (!section || !container || !header || !leftCol || !rightCol || !camera || !programCard || !divider) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial states for desktop/tablet: huge camera in center, all other elements hidden
      gsap.set(camera, {
        scale: 3.6,
        transformOrigin: "center center",
        zIndex: 10,
        willChange: "transform"
      });
      gsap.set(header, {
        y: -100,
        opacity: 0,
        willChange: "transform, opacity"
      });
      gsap.set(leftCol, {
        x: -180,
        opacity: 0,
        willChange: "transform, opacity"
      });
      gsap.set(rightCol, {
        x: 180,
        opacity: 0,
        willChange: "transform, opacity"
      });
      gsap.set(divider, {
        opacity: 0,
        scaleX: 0.6,
        willChange: "transform, opacity"
      });
      gsap.set(programCard, {
        y: 140,
        opacity: 0,
        willChange: "transform, opacity"
      });

      // Pinned scrubbed timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      tl.to(camera, {
        scale: 1,
        ease: "power2.inOut",
        duration: 1
      }, 0)
      .to(header, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8
      }, 0.2)
      .to(leftCol, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8
      }, 0.25)
      .to(rightCol, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8
      }, 0.25)
      .to(divider, {
        opacity: 1,
        scaleX: 1,
        ease: "power2.out",
        duration: 0.8
      }, 0.28)
      .to(programCard, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8
      }, 0.3);
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile version: graceful scroll entrance without heavy pinning
      gsap.set(camera, {
        scale: 1.8,
        willChange: "transform"
      });
      gsap.set(header, { opacity: 0, y: -40 });
      gsap.set(leftCol, { opacity: 0, x: -50 });
      gsap.set(rightCol, { opacity: 0, x: 50 });
      gsap.set(divider, { opacity: 0 });
      gsap.set(programCard, { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        }
      });

      tl.to(camera, { scale: 1, ease: "power2.out" }, 0)
        .to(header, { opacity: 1, y: 0, ease: "power2.out" }, 0)
        .to(leftCol, { opacity: 1, x: 0, ease: "power2.out" }, 0.1)
        .to(rightCol, { opacity: 1, x: 0, ease: "power2.out" }, 0.1)
        .to(divider, { opacity: 1, ease: "power2.out" }, 0.15)
        .to(programCard, { opacity: 1, y: 0, ease: "power2.out" }, 0.2);
    });

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.section} id="final-cta" ref={sectionRef} data-header-theme="light">
      <div className={styles.inner} ref={containerRef}>
        <div className={styles.header} ref={headerRef}>
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
                width={420}
                height={420}
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

        {/* Animated Divider */}
        <div className={styles.divider} ref={dividerRef} />

        <div className={styles.programCard} ref={programCardRef}>
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
