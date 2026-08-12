"use client";

import { useRef } from "react";
import styles from "@/styles/Home.module.css";
import Reveal from "@/components/ui/Reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CheckIcon = () => (
  <svg className={styles.checkIconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#444" />
    <path d="M8 12.5L10.5 15L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className={styles.arrowIconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#fff" />
    <path d="M10 8L15 12L10 16" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 12H8" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // Trigger when the top of ValueProp hits 70%
        end: "top 30%",   // End when the top of ValueProp hits 30%
        scrub: 1,
      }
    });

    const galleryElement = document.getElementById("gallery-section");

    tl.to(sectionRef.current, { backgroundColor: "#0a0a0c" }, 0)
      .to(`.${styles.valueTitle}`, { color: "#f2f6fc" }, 0)
      .to(`.${styles.valueEyebrow}`, { color: "#bdc5cb" }, 0)
      .to(`.${styles.valueBtn}`, { backgroundColor: "#f2f6fc", color: "#0a0a0c" }, 0)
      .to(`.${styles.arrowIconSvg} circle`, { fill: "#0a0a0c" }, 0)
      .to(`.${styles.arrowIconSvg} path`, { stroke: "#f2f6fc" }, 0);

    if (galleryElement) {
      tl.to(galleryElement, { backgroundColor: "#0a0a0c", color: "#f2f6fc" }, 0);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.valueSection}>
      <div className={styles.valueContainer}>
        <Reveal>
          <div className={styles.valueLeft}>
            <span className={styles.valueEyebrow}>LEARN BY DOING REAL WORK.</span>
            <h2 className={styles.valueTitle}>We Make Building Your Creative Career Insanely Simple.</h2>
            <button className={styles.valueBtn}>
              EXPLORE OUR SCHOOLS
              <ArrowRightIcon />
            </button>
          </div>
        </Reveal>
        
        <Reveal>
          <div className={styles.valueGrid}>
            <div className={`${styles.valueCard} ${styles.bgGreen}`}>
              <CheckIcon />
              <p>Industry-expert mentors and peers</p>
            </div>
            <div className={`${styles.valueCard} ${styles.bgGrey}`}>
              <CheckIcon />
              <p>Real-world projects and portfolios</p>
            </div>
            <div className={`${styles.valueCard} ${styles.bgGreen}`}>
              <CheckIcon />
              <p>Structured learning paths for every skill</p>
            </div>
            <div className={`${styles.valueCard} ${styles.bgGrey}`}>
              <CheckIcon />
              <p>Hands-on workshops and live sessions</p>
            </div>
            <div className={`${styles.valueCard} ${styles.bgGreen}`}>
              <CheckIcon />
              <p>One simple, affordable membership fee</p>
            </div>
            <div className={`${styles.valueCard} ${styles.bgBlack}`}>
              <p className={styles.projectOneLogo}>
                Idea <span className={styles.oneBox}>School</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
