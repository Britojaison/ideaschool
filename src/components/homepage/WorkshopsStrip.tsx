"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import teamImage from "@public/images/video_ed.png";
import miniImage from "@public/assets/home/ai_flow.png";
import masterImage from "@public/images/master1.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const workshops = [
  { title: "Creative Editing Course", href: "/creative-editing-copy", image: masterImage, objectPosition: "center" },
  { title: "Video Editing", href: "/video-editing", image: teamImage },
  { title: "Master Video Editing", href: "/master-video-editing", image: miniImage },
];

export default function WorkshopsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
        end: "center center",
        scrub: 1,
      }
    });

    tl.to(".bg-overlay", { opacity: 1 }, 0)
      .to(sectionRef.current, { color: "#0a0a0c" }, 0);
      
    gsap.fromTo(
      gsap.utils.toArray(cardsRef.current?.children || []),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.utils.toArray(cardsRef.current?.children || []).forEach((card: any) => {
      const img = card.querySelector(`.${styles.cardImageWrapper} img`);
      if (img) {
        gsap.fromTo(img, 
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="workshops" ref={sectionRef} className="section" style={{ position: "relative", backgroundColor: "transparent", color: "#f2f6fc" }}>
      <div className="bg-overlay" style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, transparent 0%, #FBFAF2 25%, #FBFAF2 100%)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none"
      }} />
      <div className={styles.fullContainer} style={{ position: "relative", zIndex: 1 }}>
        <div className="sectionHead">
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <h2 className="title">UPCOMING WORKSHOPS</h2>
            <div style={{
              fontFamily: "var(--font-helvetica), sans-serif",
              fontStyle: "italic",
              fontWeight: 700,
              color: "inherit",
              fontSize: "clamp(16px, 1.6vw, 22px)",
              transform: "rotate(-3deg)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              opacity: 0.9
            }}>
              <svg width="45" height="30" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M90 25 Q 50 5 10 25" />
                <path d="M25 10 L 10 25 L 25 40" />
              </svg>
              <span>Limited seats!</span>
            </div>
          </div>
        </div>
        
        <div className={styles.workshopGrid} ref={cardsRef}>
          {workshops.map((w, index) => (
            <Link 
              href={w.href} 
              key={w.title} 
              className={styles.workshopCard}
            >
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={w.image} 
                  alt={w.title} 
                  placeholder="blur"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: (w as any).objectPosition || 'center'
                  }} 
                />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{w.title}</h3>
              </div>
              
              <div className={styles.cardArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
