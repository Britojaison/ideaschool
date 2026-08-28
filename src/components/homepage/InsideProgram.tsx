"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './InsideProgram.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  {
    text: "The world changed. Education didn't keep pace. Most institutions still teach tools the industry is looking for people who can think, adapt, and create meaningful impact.",
    weight: 500
  },
  {
    text: "So we build professionals, not just portfolios. Alongside the tools, you develop what AI can't replace: creativity, critical thinking, storytelling, and the ability to solve real problems.",
    weight: 400
  },
  {
    text: "You won't sit through boring lectures. You'll work alongside industry mentors on real briefs, build a portfolio from scratch, and gain the experience that top studios actually look for.",
    weight: 400
  },
  {
    text: "This is where ambition meets execution. It's time to stop consuming tutorials and start creating work that demands attention. If you're ready to build a real career, you belong here.",
    weight: 400
  }
];

const InsideProgram = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray('.gsap-prog-word');
    const galleryElement = document.getElementById("gallery-section");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Increased scroll distance to make the animation feel slower
        pin: true,
        scrub: 1,
      }
    });

    // 1. Text opacity highlight animation
    tl.to(words, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      duration: 1
    }, 0);

    // 2. Background and text color transition (starts halfway through)
    const transitionStart = 0.5;
    const transitionDuration = 0.5;

    tl.to(containerRef.current, { 
      backgroundColor: "#0a0a0c", 
      color: "#FBFAF2",
      duration: transitionDuration,
      onUpdate: () => {
        window.dispatchEvent(new Event("header-theme-check"));
      }
    }, transitionStart);

    if (galleryElement) {
      tl.to(galleryElement, { 
        backgroundColor: "#0a0a0c", 
        color: "#FBFAF2",
        duration: transitionDuration 
      }, transitionStart);
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section} id="inside-program">
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <h2 className={`${styles.title} gsap-prog-text`}>WHY IDEA SCHOOL?</h2>
        </div>
        <div className={styles.rightCol} ref={textRef}>
          {paragraphs.map((p, pIndex) => (
            <p key={pIndex} className={styles.paragraph} style={{ fontWeight: p.weight }}>
              {p.text.split(' ').map((word, wIndex) => (
                <span key={`${pIndex}-${wIndex}`} className={`gsap-prog-word ${styles.word}`}>
                  {word}{' '}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideProgram;
