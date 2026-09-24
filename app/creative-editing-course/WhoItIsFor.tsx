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
  "You want more guidance than random online tutorials.",
  "You are ready to practise, get feedback and improve.",
  "You want to build a strong portfolio with real work.",
  "You want to learn how professional creative projects work.",
  "You can commit to the full 24-week program.",
];

export default function WhoItIsFor() {
  const contentGridRef = useRef<HTMLDivElement>(null);
  const stickyColumnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
