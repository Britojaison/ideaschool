"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhoItIsFor.module.css";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "You want more structure and guidance than random online tutorials provide.",
  "You are willing to practise, receive feedback and revise your work.",
  "You want to build a portfolio that demonstrates practical capability.",
  "You want to understand how professional creative work is briefed, reviewed and delivered.",
  "You can commit to the 24-week learning and industry-experience process.",
];

const exclusions = [
  "You only want prerecorded lessons to watch casually.",
  "You are looking for shortcuts, presets or AI prompts without learning the craft.",
  "You are unwilling to practise or revise your work after feedback.",
];

export default function WhoItIsFor() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.utils.toArray<HTMLElement>("[data-parallax-frame]").forEach((frame, index) => {
        const image = frame.querySelector<HTMLElement>("[data-parallax-image]");
        if (!image) return;

        gsap.fromTo(
          image,
          { yPercent: index % 2 === 0 ? -9 : -6 },
          {
            yPercent: index % 2 === 0 ? 9 : 7,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.section} data-header-theme="light">
      <div className={styles.introGrid}>
        <div className={styles.eyebrow}>WHO IT IS FOR</div>
        <h2 className={styles.title}>SERIOUS ABOUT BUILDING A CREATIVE CAREER?</h2>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.visualColumn}>
          <div className={`${styles.imageFrame} ${styles.imageMain}`} data-parallax-frame>
            <Image
              src="/images/full-optimized.webp"
              alt="Creative professionals reviewing work together at Idea School"
              fill
              className={styles.parallaxImage}
              data-parallax-image
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className={styles.imageRow}>
            <div className={`${styles.imageFrame} ${styles.imageSmall}`} data-parallax-frame>
              <Image src="/images/DSC00041.JPG" alt="Student practising video production" fill className={styles.parallaxImage} data-parallax-image sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
            <div className={`${styles.imageFrame} ${styles.imageSmall}`} data-parallax-frame>
              <Image src="/images/DSC00123.JPG" alt="Hands-on creative mentoring session" fill className={styles.parallaxImage} data-parallax-image sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
          </div>
        </div>

        <ol className={styles.reasons}>
          {reasons.map((reason, index) => (
            <li className={styles.reason} key={reason}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.notForYou}>
        <div>
          <span className={styles.notLabel}>A QUICK REALITY CHECK</span>
          <h3>This may not be for you if</h3>
        </div>
        <ul>
          {exclusions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
