"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CourseGallery.module.css";

const projects = Array.from({ length: 18 }, (_, index) => ({
  image: `/images/gallery${index + 1}.webp`,
  label: ["LIVE BRAND BRIEF", "MENTOR REVIEW", "STUDIO PRACTICE"][index % 3],
  title: ["CREATIVE EDITING", "THE EDIT ROOM", "BRAND STORYTELLING"][index % 3],
}));

/*
 * Horizontal-cylinder gallery – inspired by schemeengine.com
 *
 * Images sit on the rim of a HORIZONTAL circle (like a turntable seen from above).
 * As the user scrolls the circle rotates, sweeping cards from right → front → left.
 * Front cards are large and centred; side/back cards are smaller, pushed to edges,
 * and fade out. All cards sit on roughly the same vertical baseline.
 */

export default function CourseGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-trail-card]");
      const captions = gsap.utils.toArray<HTMLElement>("[data-trail-caption]");
      const intro = root.querySelector<HTMLElement>("[data-trail-intro]");
      const scene = root.querySelector<HTMLElement>("[data-trail-scene]");

      gsap.set(scene, { autoAlpha: 0 });
      gsap.set(cards, {
        width: () => Math.max(92, Math.min(window.innerWidth * 0.085, 150)),
      });

      const N = cards.length;
      const angleStep = (2 * Math.PI) / N; // evenly space cards around the circle
      const cylinder = { rotation: 0 };

      const placeCards = () => {
        const W = window.innerWidth;
        const H = window.innerHeight;
        const cx = W * 0.5;
        const cy = H * 0.55;

        // Horizontal radius — how far cards spread left/right from centre
        const radiusX = W * 0.48;

        cards.forEach((card, i) => {
          const angle = i * angleStep + cylinder.rotation;
          const sinA = Math.sin(angle);
          const cosA = Math.cos(angle);

          // depth: 0 = back, 1 = front
          const depth = (cosA + 1) / 2;
          const front = Math.pow(depth, 2.2);

          // ── X: horizontal spread along circle rim ──
          const x = cx + sinA * radiusX;

          // ── Y: SAME for every card — single horizontal line ──
          const y = cy;

          // ── Scale: moderate range so front cards don't fill viewport ──
          const scale = 0.4 + front * 2.0;

          // ── Fully hide the back half of the circle ──
          const vis = cosA < -0.15 ? 0 : Math.max(0, 0.1 + depth * 0.9);

          gsap.set(card, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            scale,
            autoAlpha: vis,
            zIndex: Math.round(depth * 100),
            rotationY: -sinA * 30,
          });

          gsap.set(captions[i], { autoAlpha: depth > 0.9 ? 1 : 0 });
        });
      };

      placeCards();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=900%",
          pin: stage,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(intro, { autoAlpha: 0, y: -70, duration: 0.7 })
        .to(scene, { autoAlpha: 1, duration: 0.35 }, "<0.25")
        .to(cylinder, {
          rotation: Math.PI * 7.2,
          duration: 12,
          ease: "none",
          onUpdate: placeCards,
        });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="A glimpse into the program">
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.intro} data-trail-intro>
          <p>Impactful creative work is rooted in real experience.</p>
          <p>We build it through live briefs, thoughtful feedback,<br />and a commitment to craft that lasts.</p>
        </div>

        <div className={styles.scene} data-trail-scene>
          <h2><span>LIVE BRAND</span><span>PROJECTS</span></h2>
          <div className={styles.cards}>
            {projects.map((project, index) => (
              <div className={styles.card} data-trail-card key={project.image}>
                <div className={styles.media}>
                  <Image src={project.image} alt="" fill sizes="(max-width:760px) 82vw, 48vw" className={styles.image} />
                </div>
                <div className={styles.caption} data-trail-caption>
                  <strong>{project.label}</strong><span>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
          <span className={styles.counter}>01 — 10</span>
        </div>
      </div>
    </section>
  );
}
