"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <aside className={styles.wrapper} aria-label="Master Video Editing workshop advertisement">
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
          <span className={styles.artLabel}>EDIT</span>
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <span className={styles.spark}>✦</span>
          <span className={styles.artCaption}>CUT BETTER<br />STORIES</span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Live workshop · August 16–17</span>
          <h2>Master the craft<br />of video editing.</h2>
          <Link
            className={styles.cta}
            href="/master-video-editing"
            aria-label="Explore the Master Video Editing workshop"
          >
            Explore workshop <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
