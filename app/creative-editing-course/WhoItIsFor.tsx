"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhoItIsFor.module.css";
import TextAnimation from "@/components/ui/staggerText";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "You want more structure and guidance than random online tutorials provide.",
  "You are willing to practise, receive feedback and revise your work.",
  "You want to build a portfolio that demonstrates practical capability.",
  "You want to understand how professional creative work is briefed, reviewed and delivered.",
  "You can commit to the 24-week learning and industry-experience process.",
];

export default function WhoItIsFor() {
  const artworkRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);
  const stickyColumnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const artwork = artworkRef.current;
    const image = imageRef.current;
    if (artwork && image && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(
        image,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: artwork,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    }

    const contentGrid = contentGridRef.current;
    const stickyCol = stickyColumnRef.current;
    if (contentGrid && stickyCol) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px)", () => {
        ScrollTrigger.create({
          trigger: contentGrid,
          start: "top 84px",
          end: "bottom bottom",
          pin: stickyCol,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });
      return () => mm.revert();
    }
  }, []);

  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.fullBleedArtwork} ref={artworkRef}>
        <Image
          ref={imageRef}
          src="/images/pn_copy.webp"
          alt="IDEA School creative community"
          width={2048}
          height={508}
          className={styles.fullBleedImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.contentGrid} ref={contentGridRef}>
        <div className={styles.stickyColumn} ref={stickyColumnRef}>
          <div className={styles.stickyInner}>
            <h2 className={styles.stickyTitle}>
              WHO IS THIS FOR?
            </h2>
          </div>
        </div>

        <div className={styles.reasonsColumn}>
          <ol className={styles.reasons}>
            {reasons.map((reason, index) => (
              <li className={styles.reason} key={reason}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <p>{reason}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
