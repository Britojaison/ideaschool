"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Testimonials.module.css";

import card1 from "@public/assets/home/card1.png";
import card2 from "@public/assets/home/card2.png";
import card3 from "@public/assets/home/card3.png";
import card4 from "@public/assets/home/card4.png";
import card5 from "@public/assets/home/card5.png";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    title: "Tear Down",
    description: "Unlearn your bad habits and strip your editing back to the raw fundamentals.",
    image: card1,
  },
  {
    title: "Rebuild",
    description: "Master the true art of storytelling, pacing, and the psychology of the cut.",
    image: card2,
  },
  {
    title: "Review",
    description: "Survive brutal feedback loops from industry pros who tear down your cuts line-by-line.",
    image: card3,
  },
  {
    title: "Polish",
    description: "Craft a lethal showreel using massive, real-world project files that ignores the competition.",
    image: card4,
  },
  {
    title: "Dominate",
    description: "Step into the industry, leverage our network, and start charging exactly what you're worth.",
    image: card5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(max-width: 640px) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-pipeline-card]");

      items.slice(0, -1).forEach((item, index) => {
        gsap.to(item, {
          scale: 0.94,
          y: -8,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: items[index + 1],
            start: "top 88%",
            end: "top 14%",
            scrub: true,
          },
        });
      });
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} data-header-theme="dark">
      <div className={styles.grid}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.mainTitle}>
            <span>The Pipeline</span>
          </h2>
          <div style={{
            fontFamily: "var(--font-insomnia-night), cursive",
            color: "var(--ash)",
            fontSize: "clamp(18px, 2vw, 24px)",
            transform: "rotate(-3deg)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: 0.9,
            marginTop: "30px"
          }}>
            <span>From opening software to signing clients...</span>
            <svg width="40" height="30" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(20deg) translateY(5px)" }}>
              <path d="M10 25 Q 50 15 90 25" />
              <path d="M75 10 L 90 25 L 75 40" />
            </svg>
          </div>
        </div>
        {roadmapSteps.map((item, i) => (
          <div
            key={i}
            className={styles.gridItem}
            data-pipeline-card
            style={{ zIndex: i + 1 }}
          >
            <div className={styles.card}>
              {item.image && (
                <Image src={item.image} alt={item.title} fill className={styles.bgImage} />
              )}
              <div className={styles.circle}></div>
            </div>
            <h3 style={{ color: "var(--snow)", fontSize: "20px", fontWeight: "600", margin: "10px 0 5px 0" }}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
