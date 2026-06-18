"use client";

import Link from "next/link";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function WorkshopFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We handle the stacking animation in WorkshopGsapAnimations.tsx 
    // to ensure it plays well with ScrollSmoother which is initialized there.
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
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="siteFooter workshopSiteFooter" ref={footerRef}>
      <div className="footerMarqueeContainer">
        <div className="footerMarquee" ref={marqueeRef} style={{ display: "flex", width: "max-content", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>IDEASCHOOLOF88GB</span>
            <span className="marqueeAsterisk">✱</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>IDEASCHOOLOF88GB</span>
            <span className="marqueeAsterisk">✱</span>
          </div>
        </div>
      </div>

      <div className="footerMainContent">
        <div className="footerLeft">
          <h2>
            Idea School is where you build real skills for the creative industry.
          </h2>
          <a href="#apply" className="footerExploreLink">
            Explore Courses →
          </a>
        </div>

        <div className="footerRight">
          <nav className="footerLinksGrid" aria-label="Footer navigation">
            <div className="footerLinkCol">
              <h3>Workshop</h3>
              <a href="#curriculum">Curriculum</a>
              <a href="#tools">Tools</a>
              <a href="#apply">Register</a>
            </div>
            <div className="footerLinkCol">
              <h3>Company</h3>
              <Link href="/#about">About</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div className="footerLinkCol">
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/ideaschool.pro/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/88gb/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </nav>

          <button className="backToTopTextLink" onClick={scrollToTop} aria-label="Back to top">
            Back to Top ↑
          </button>
        </div>
      </div>

      <div className="footerLegal">
        <div className="legalLeft">Idea School</div>
        <div className="legalCenter">All rights reserved by Idea School, 2026</div>
        <div className="legalRight">Powered by 88GB</div>
      </div>
    </footer>
  );
}
