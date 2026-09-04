"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./IdeaPhilosophy.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    letter: "I",
    title: "Intelligence",
    description:
      "We nurture intelligent thinkers people who ask better questions, understand problems before solving them, and use technology thoughtfully. Intelligence is the foundation of every great creator, marketer, designer, entrepreneur, and leader.",
  },
  {
    letter: "D",
    title: "Design",
    description:
      "Design is not just aesthetics. It is a way of thinking: creating meaningful experiences, solving problems, and communicating ideas with clarity, purpose, and impact.",
  },
  {
    letter: "E",
    title: "Entrepreneurship",
    description:
      "We build people who think like owners who take initiative, identify opportunities, create value, lead projects, and embrace responsibility wherever they work.",
  },
  {
    letter: "A",
    title: "Artistry",
    description:
      "Artistry gives creativity meaning. It is the ability to tell stories that move people, shape culture, communicate emotion, and create experiences people remember.",
  },
];

export default function IdeaPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        "--philosophy-bg": "#0a0014",
        "--philosophy-ink": "#fbfaf2",
        "--philosophy-muted": "rgba(251, 250, 242, 0.72)",
        "--philosophy-border": "rgba(251, 250, 242, 0.28)",
      },
      {
        "--philosophy-bg": "#fbfaf2",
        "--philosophy-ink": "#0a0a0c",
        "--philosophy-muted": "#4f514e",
        "--philosophy-border": "rgba(10, 10, 12, 0.3)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          end: "top 28%",
          scrub: 1,
          onUpdate: () => window.dispatchEvent(new Event("header-theme-check")),
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="the-idea" ref={sectionRef} className={styles.section} aria-labelledby="idea-philosophy-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <h2 id="idea-philosophy-title">The IDEA<br />Philosophy</h2>
          </div>
          <p className={styles.intro}>Everything we build is rooted in four foundational pillars.</p>
        </div>
      </div>
      <div className={styles.pillars}>
        {pillars.map((pillar) => (
          <article className={styles.pillar} key={pillar.letter}>
            <div className={styles.visual}>
              <span className={styles.letter} aria-hidden="true">
                {pillar.letter}
              </span>
            </div>
            <div className={styles.copy}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
