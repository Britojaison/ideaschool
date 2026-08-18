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
    text: "The traditional education system is broken. It teaches outdated theory and software shortcuts, leaving you unprepared for the actual industry. Idea School was built to fix this by focusing entirely on real-world execution.",
    weight: 500
  },
  {
    text: "We don't do boring lectures. Instead, you learn by doing. You'll work alongside industry-expert mentors on actual briefs, build a stunning portfolio from scratch, and gain the hands-on experience that top agencies and studios actually look for.",
    weight: 400
  },
  {
    text: "Our goal isn't to just teach you tools—it's to wire your brain to think like a top-tier creative. We make building your creative career insanely simple through structured paths, live workshops, and a community that pushes you to turn every idea into reality.",
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
          <h2 className={`${styles.title} gsap-prog-text`}>Why Idea School?</h2>
          <p className={`${styles.subtitle} gsap-prog-text`}>Not a Course. A Build Experience.</p>
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
