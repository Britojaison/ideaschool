"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import navMark from "@public/assets/home/tumblr_c050d2fa4f5b9a2a88fa3f5196acd80f_1ccf7380_1280.webp";
import MultiLevelDrawerMenu from "./MultiLevelDrawerMenu";
import styles from "./Header.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.brandLink} aria-label="IDEA AI School home">
      <Image
        src={navMark}
        alt=""
        aria-hidden="true"
        className={styles.navMark}
        priority
      />
      <Image
        className={styles.logoImage}
        src={ideaLogo}
        alt="IDEA AI School"
        priority
        width={104}
        height={32}
      />
    </Link>
  );
}

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(overlay);

  useEffect(() => {
    let rafId: number;

    const checkHeaderTheme = () => {
      setIsScrolled(window.scrollY > 20);

      // Find element behind the header
      const testX = window.innerWidth / 2;
      const testY = 38;

      const elements = document.elementsFromPoint(testX, testY);
      let detectedDark = false;

      for (const el of elements) {
        if (el.closest("header")) continue;

        // 1. Check explicit data-header-theme or data-theme
        const themedParent = (el as HTMLElement).closest?.("[data-header-theme], [data-theme]") as HTMLElement | null;
        if (themedParent) {
          const t = themedParent.getAttribute("data-header-theme") || themedParent.getAttribute("data-theme");
          if (t === "dark") {
            detectedDark = true;
            break;
          } else if (t === "light") {
            detectedDark = false;
            break;
          }
        }

        // 2. Check computed background color
        let currentEl: HTMLElement | null = el as HTMLElement;
        let foundBg = false;

        while (currentEl && currentEl !== document.body && currentEl !== document.documentElement) {
          const bg = window.getComputedStyle(currentEl).backgroundColor;
          if (bg && bg !== "transparent" && !bg.startsWith("rgba(0, 0, 0, 0)")) {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              detectedDark = luminance < 0.45;
              foundBg = true;
              break;
            }
          }
          currentEl = currentEl.parentElement;
        }

        if (foundBg) break;
      }

      setIsDark(detectedDark);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkHeaderTheme);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("header-theme-check", handleScroll);
    checkHeaderTheme();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("header-theme-check", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${overlay ? styles.overlay : ""} ${
        isScrolled ? styles.headerScrolled : ""
      } ${isDark ? styles.headerDark : ""}`}
    >
      <div className={styles.inner}>
        {/* Left side: Logo near GIF */}
        <Logo />

        {/* Actions: Apply Now + Multi-Level Drawer Menu Toggle */}
        <div className={styles.actions}>
          <button
            className={styles.apply}
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-home-form"))}
          >
            Apply now
          </button>

          <MultiLevelDrawerMenu isDark={isDark} isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}
