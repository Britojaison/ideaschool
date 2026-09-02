"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "@/components/ui/staggerText";
import styles from "./WhatYouBuild.module.css";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    step: "00",
    title: "Creative editing project output",
    description: "Build your portfolio as you learn. Every module should lead to work you can review, improve and present.",
    image: "/images/DSC00232.JPG"
  },
  {
    step: "01",
    title: "Short-form and commercial editing",
    description: "Develop pacing, structure, captions, sound and platform-ready delivery.",
    image: "/images/DSC00048.JPG"
  },
  {
    step: "02",
    title: "Motion graphics and visual effects",
    description: "Use typography, animation, compositing, tracking and visual treatments with purpose.",
    image: "/images/DSC00298.JPG"
  },
  {
    step: "03",
    title: "Creative AI production",
    description: "Use AI for ideation, visual development and production without replacing creative judgment.",
    image: "/images/DSC00123.JPG"
  },
  {
    step: "04",
    title: "Professional portfolio work",
    description: "Present finished work and explain the decisions behind it with confidence.",
    image: "/images/DSC00041.JPG"
  }
];

export default function WhatYouBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Only run complex pinned animation on desktop.
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      
      // 1. Animate the first image from full bleed to right-side
      if (spacerRef.current && imageRefs.current[0]) {
        ScrollTrigger.create({
          trigger: spacerRef.current,
          start: "top top",
          end: "bottom top", // takes exactly 100vh of scrolling
          scrub: true,
          animation: gsap.to(imageRefs.current[0], { 
            width: "50vw", 
            ease: "none" 
          })
        });
      }

      // 2. Animate subsequent images sliding up to overlap
      textRefs.current.forEach((textBlock, index) => {
        // We only want to animate the image for index >= 1 coming in.
        if (index > 0 && textBlock && imageRefs.current[index]) {
          
          // Initial state: image is below the view
          gsap.set(imageRefs.current[index], { yPercent: 100, zIndex: index + 1 });

          ScrollTrigger.create({
            trigger: textBlock,
            start: "top bottom", // Starts when text block's top enters viewport bottom
            end: "center center", // Ends when text block is vertically centered
            scrub: true,
            animation: gsap.to(imageRefs.current[index], { 
              yPercent: 0, 
              ease: "none" 
            })
          });
        }
      });

      // Refresh ScrollTrigger to ensure correct calculations
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(refreshTimeout);
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className={styles.wrapper} ref={containerRef}>
      {/* Sticky Right Side - Desktop Only */}
      <div className={`${styles.stickyContainer} ${styles.desktopOnly}`}>
        {SLIDES.map((slide, index) => (
          <div 
            key={`img-${index}`} 
            className={`${styles.imageWrapper} ${index === 0 ? styles.imageWrapperFirst : ""}`}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Scrolling Left Side - Desktop Only */}
      <div className={`${styles.scrollContent} ${styles.desktopOnly}`}>
        
        {/* Hold spacer keeps the image full bleed while the user scrolls down 100vh */}
        <div className={styles.holdSpacer}></div>

        {/* Shrink spacer triggers the animation from full bleed to 50vw */}
        <div className={styles.shrinkSpacer} ref={spacerRef}></div>

        {/* Text Blocks */}
        {SLIDES.map((slide, index) => (
          <div 
            key={`text-${index}`} 
            className={styles.textBlock}
            ref={(el) => {
              textRefs.current[index] = el;
            }}
          >
            {/* The first block contains the intro header too */}
            {index === 0 && (
              <div className={styles.introSection}>
                <h2 className={styles.introTitle}>WHAT YOU BUILD</h2>
                <h3 className={styles.introHeading}>
                  <TextAnimation divideBy="word" delay={0.1}>
                    WORK THAT SHOWS WHAT YOU CAN DO.
                  </TextAnimation>
                </h3>
                <p className={styles.introDesc}>
                  <TextAnimation divideBy="word" delay={0.2}>
                    Your portfolio develops throughout the program through practical assignments, mentor reviews and revision cycles.
                  </TextAnimation>
                </p>
              </div>
            )}
            
            <div className={styles.slideContent}>
              {slide.step !== "00" && <span className={styles.stepNumber}>{slide.step}</span>}
              <h4 className={styles.stepTitle}>
                <TextAnimation divideBy="word" delay={0.1}>
                  {slide.title}
                </TextAnimation>
              </h4>
              <p className={styles.stepDesc}>
                <TextAnimation divideBy="word" delay={0.2}>
                  {slide.description}
                </TextAnimation>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Section */}
      <div className={styles.mobileOnly}>
        {/* Intro for mobile */}
        <div className={styles.textBlock}>
          <div className={styles.introSection}>
            <h2 className={styles.introTitle}>WHAT YOU BUILD</h2>
            <h3 className={styles.introHeading}>
              <TextAnimation divideBy="word" delay={0.1}>
                WORK THAT SHOWS WHAT YOU CAN DO.
              </TextAnimation>
            </h3>
            <p className={styles.introDesc}>
              <TextAnimation divideBy="word" delay={0.2}>
                Your portfolio develops throughout the program through practical assignments, mentor reviews and revision cycles.
              </TextAnimation>
            </p>
          </div>
        </div>
        
        {SLIDES.map((slide, index) => (
          <div key={`mobile-slide-${index}`} className={styles.mobileSlide}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.textBlock}>
              {slide.step !== "00" && <span className={styles.stepNumber}>{slide.step}</span>}
              <h4 className={styles.stepTitle}>
                <TextAnimation divideBy="word" delay={0.1}>
                  {slide.title}
                </TextAnimation>
              </h4>
              <p className={styles.stepDesc}>
                <TextAnimation divideBy="word" delay={0.2}>
                  {slide.description}
                </TextAnimation>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
