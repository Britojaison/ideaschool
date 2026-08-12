"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import x30Arrow from "@public/assets/svg/x-30.svg";
import styles from "./AnnouncementCard.module.css";

export default function AnnouncementCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [showFunnyMessage, setShowFunnyMessage] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setShowFunnyMessage(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <aside className={styles.wrapper} aria-label="Admissions announcement">
      {showFunnyMessage && (
        <span className={styles.funnyMessage}>
          close for socials <Image src={x30Arrow} alt="arrow" width={24} height={24} className={styles.arrowIcon} />
        </span>
      )}
      <div className={styles.card}>
        <button
          className={styles.close}
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => setIsVisible(false)}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.art} aria-hidden="true">
          <span className={styles.artLabel}>IDEA</span>
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <span className={styles.spark}>✦</span>
          <span className={styles.artCaption}>MAKE AI<br />YOUR CRAFT</span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Admissions open · 2026</span>
          <h2>Build a career<br />made for the AI era.</h2>
          <button
            className={styles.cta}
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-home-form"))}
          >
            Apply now <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
