"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./AnnouncementCard.module.css";

export default function AnnouncementCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiddenByScroll, setIsHiddenByScroll] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('footer, [data-section="faq"]'));
    if (!elements.length) return;

    const visibleElements = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        let changed = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleElements.add(entry.target);
          } else {
            visibleElements.delete(entry.target);
          }
          changed = true;
        });

        if (changed) {
          setIsHiddenByScroll(visibleElements.size > 0);
        }
      },
      { threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!isVisible || isHiddenByScroll) return null;

  return (
    <aside className={styles.wrapper} aria-label="Master Video Editing workshop advertisement">
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
            href="/video-editing"
            aria-label="Explore the Video Editing workshop"
          >
            Explore workshop <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
