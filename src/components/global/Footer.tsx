"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import ImageMarquee from "./ImageMarquee";
import creativeIndustryMark from "@public/assets/home/tumblr_c050d2fa4f5b9a2a88fa3f5196acd80f_1ccf7380_1280.webp";

const workshopPaymentUrl = "https://rzp.io/rzp/L5kyyQlg";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We handle the stacking animation in WorkshopGsapAnimations.tsx 
    // Keep the marquee on the shared GSAP ticker so it remains in sync with page motion.
    // However, we can handle the marquee animation here.
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 45,
        repeat: -1,
      });
    }
  }, []);

  const scrollToTop = () => {
    const event = new CustomEvent<number>("idea-scroll-to", { detail: 0, cancelable: true });
    if (!window.dispatchEvent(event)) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.workshopSiteFooter} ref={footerRef}>
      <div className={styles.footerMarqueeContainer}>
        <div className={styles.footerMarquee} ref={marqueeRef} style={{ display: "flex", width: "max-content", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>IDEA CREATIVE SCHOOL</span>
            <span className={styles.marqueeAsterisk}>✱</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>IDEA CREATIVE SCHOOL</span>
            <span className={styles.marqueeAsterisk}>✱</span>
          </div>
        </div>
      </div>

      <div className={styles.footerMainContent}>
        <div className={styles.footerLeft}>
          <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            IDEA School is where you build real skills for the creative industry.
            <Image
              src={creativeIndustryMark}
              alt=""
              aria-hidden="true"
              className={styles.footerHeadlineImage}
            />
          </h2>
          <a href={workshopPaymentUrl} className={styles.footerExploreLink} target="_blank" rel="noreferrer">
            Explore Courses →
          </a>
        </div>

        <div className={styles.footerRight}>
          <nav className={styles.footerLinksGrid} aria-label="Footer navigation">
            <div className={styles.footerLinkCol}>
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/ideaschool.pro/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/88gb/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </nav>

          <button className={styles.backToTopTextLink} onClick={scrollToTop} aria-label="Back to top">
            Back to Top ↑
          </button>
        </div>
      </div>

      <div className={styles.footerLegal}>
        <div className={styles.legalLeft}>Idea School</div>
        <div className={styles.legalCenter}>All rights reserved by Idea School, 2026</div>
        <div className={styles.legalRight}>Powered by 88GB</div>
      </div>

      <ImageMarquee />
    </footer>
  );
}
