"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Image
            className={styles.artImage}
            src="/images/DSC00298.webp"
            alt="Master the craft of video editing"
            fill
            sizes="(max-width: 900px) 230px, 300px"
            priority
          />
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <span className={styles.spark}>✦</span>
          <span className={styles.artCaption}>CUT BETTER<br />STORIES</span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>LIVE WORKSHOP</span>
          <h2>Full Course</h2>
          <Link
            className={styles.cta}
            href="/full-stack-video-editing-ai-mastery"
            aria-label="Explore Full Course"
          >
            Explore Full Course <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
