"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import imageCreative from "@public/images/premium-editorial-campaign-poster-for-a-creative-v.png";
import imageConceptual from "@public/images/premium-editorial-campaign-poster-for-an-exclusive.png";
import imageCampaign from "@public/images/premium-editorial-campaign-poster-for-an-advanced-.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const workshops = [
  { title: "Creative Editing Course", href: "/creative-editing-copy", image: imageCreative, objectPosition: "center" },
  { title: "Video Editing", href: "/video-editing", image: imageConceptual },
  { title: "Master Video Editing", href: "/master-video-editing", image: imageCampaign },
];

export default function WorkshopsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section
      id="workshops"
      ref={sectionRef}
      className={styles.workshopSection}
      data-header-theme="light"
    >
      <div className={styles.fullContainer} style={{ position: "relative", zIndex: 1, width: "100%" }}>
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
              aria-label={w.title}
            >
              <Image
                src={w.image}
                alt={w.title}
                placeholder="blur"
                sizes="(max-width: 900px) 100vw, 33vw"
                className={styles.workshopImage}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
