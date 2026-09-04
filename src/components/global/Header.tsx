"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import navMark from "@public/assets/home/tumblr_c050d2fa4f5b9a2a88fa3f5196acd80f_1ccf7380_1280.webp";
import styles from "./Header.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Idea AI School home">
      <Image
        className={styles.logoImage}
        src={ideaLogo}
        alt="Idea AI School"
        priority
        width={104}
        height={32}
        style={{ width: "104px", height: "auto" }}
      />
    </Link>
  );
}

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

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



  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    let metaTheme = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.name = "theme-color";
      document.head.appendChild(metaTheme);
    }

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    metaTheme.setAttribute("content", "#0a0a0c");
    return () => {
      document.body.style.overflow = "";
      if (metaTheme) metaTheme.setAttribute("content", "#0a0a0c");
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setExpandedMobile(null);
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobile((prev) => (prev === section ? null : section));
  };

  return (
    <header
      className={`${styles.header} ${overlay ? styles.overlay : ""} ${
        isScrolled ? styles.headerScrolled : ""
      } ${isDark ? styles.headerDark : ""} ${menuOpen ? styles.headerOpen : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <nav className={styles.nav} aria-label="Main Navigation">
          <Image
            src={navMark}
            alt=""
            aria-hidden="true"
            className={styles.navMark}
            priority
          />
          <Link href="/about" className={styles.navLink} onClick={closeAll}>
            The Idea
          </Link>
          <Link href="/schools" className={styles.navLink} onClick={closeAll}>
            Schools
          </Link>
          <Link href="/how-it-works" className={styles.navLink} onClick={closeAll}>
            How It Works
          </Link>
          <Link href="/visual-school" className={styles.navLink} onClick={closeAll}>
            Visual School
          </Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.apply}
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-home-form"))}
          >
            Apply now
          </button>
          <button
            className={`${styles.menuToggle} ${
              menuOpen ? styles.menuToggleOpen : ""
            }`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Dotsandlines layout with Brand Green) */}
      {mounted &&
        createPortal(
          <div
            id="mobile-navigation"
            className={`${styles.mobileNav} ${
              menuOpen ? styles.mobileNavOpen : ""
            }`}
            aria-hidden={!menuOpen}
          >
            {/* Top Header inside Drawer */}
            <div className={styles.mobileNavHeader}>
              <Link href="/" className={styles.mobileLogo} onClick={closeAll} aria-label="Idea AI School home">
                <Image
                  className={styles.mobileLogoImg}
                  src={ideaLogo}
                  alt="Idea AI School"
                  width={92}
                  height={29}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>

              <div className={styles.mobileHeaderActions}>


                <button
                  className={styles.mobileCloseBtn}
                  type="button"
                  onClick={closeAll}
                  aria-label="Close menu"
                >
                  close
                </button>
              </div>
            </div>

            {/* Lower Main Content Area - Expandable Editorial Style (Option 2) */}
            <div className={styles.mobileNavContentArea}>
              <nav className={styles.mobileNavLinksBlock} aria-label="Mobile Navigation Links">
                {/* Schools Section */}
                <div className={styles.mobileNavItemWrapper}>
                  <button
                    type="button"
                    className={`${styles.mobileHeroBtn} ${expandedMobile === "schools" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleMobileSection("schools")}
                    aria-expanded={expandedMobile === "schools"}
                  >
                    <span>schools</span>
                    <span className={styles.mobileAccordionIcon}>{expandedMobile === "schools" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expandedMobile === "schools" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/visual-school" className={styles.mobileSubItem} onClick={closeAll}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>Visual School</span>
                          <span className={styles.mobileSubItemDesc}>Editing, motion design & AI cinema</span>
                        </div>
                        <span className={styles.mobileSubBadgeActive}>Active</span>
                      </Link>
                      <div className={`${styles.mobileSubItem} ${styles.mobileSubItemDisabled}`}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>Tech School</span>
                          <span className={styles.mobileSubItemDesc}>AI workflows & software</span>
                        </div>
                        <span className={styles.mobileSubBadgeSoon}>Soon</span>
                      </div>
                      <div className={`${styles.mobileSubItem} ${styles.mobileSubItemDisabled}`}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>Marketing School</span>
                          <span className={styles.mobileSubItemDesc}>Creative direction & growth</span>
                        </div>
                        <span className={styles.mobileSubBadgeSoon}>Soon</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Courses Section */}
                <div className={styles.mobileNavItemWrapper}>
                  <button
                    type="button"
                    className={`${styles.mobileHeroBtn} ${expandedMobile === "courses" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleMobileSection("courses")}
                    aria-expanded={expandedMobile === "courses"}
                  >
                    <span>courses</span>
                    <span className={styles.mobileAccordionIcon}>{expandedMobile === "courses" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expandedMobile === "courses" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/creative-editing-course" className={styles.mobileSubItem} onClick={closeAll}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>Creative Editing & AI Pro</span>
                          <span className={styles.mobileSubItemDesc}>24 Weeks · Career Flagship Course</span>
                        </div>
                        <span className={styles.mobileSubArrow}>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Workshops Section */}
                <div className={styles.mobileNavItemWrapper}>
                  <button
                    type="button"
                    className={`${styles.mobileHeroBtn} ${expandedMobile === "workshops" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleMobileSection("workshops")}
                    aria-expanded={expandedMobile === "workshops"}
                  >
                    <span>workshops</span>
                    <span className={styles.mobileAccordionIcon}>{expandedMobile === "workshops" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expandedMobile === "workshops" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/ad-film-making" className={styles.mobileSubItem} onClick={closeAll}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>AI Ad Film Making</span>
                          <span className={styles.mobileSubItemDesc}>Weekend · Offline Workshop</span>
                        </div>
                        <span className={styles.mobileSubArrow}>↗</span>
                      </Link>
                      <Link href="/video-editing" className={styles.mobileSubItem} onClick={closeAll}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>High-Paying Video Editing</span>
                          <span className={styles.mobileSubItemDesc}>1 Day · Offline Workshop</span>
                        </div>
                        <span className={styles.mobileSubArrow}>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* About Section - Direct Link */}
                <div className={styles.mobileNavItemWrapper}>
                  <Link
                    href="/about"
                    className={styles.mobileHeroLink}
                    onClick={closeAll}
                  >
                    about
                  </Link>
                </div>
              </nav>

              <div className={styles.mobileContactGroup}>

                <a
                  href="tel:+918850774428"
                  className={styles.mobilePhoneLink}
                >
                  +91 88507 74428
                </a>
              </div>
            </div>

            {/* Bottom Area - Screenshot 2 style */}
            <div className={styles.mobileFooterRow}>
              <div className={styles.mobileSocialLeft}>
                <span className={styles.mobileDot}>●</span>
                <a
                  href="https://www.instagram.com/ideaschool.pro/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mobileSocialLink}
                >
                  instagram
                </a>
                <span className={styles.mobileSocialSep}>_</span>
                <a
                  href="https://www.linkedin.com/company/88gb/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mobileSocialLink}
                >
                  linkedin
                </a>
              </div>

              <button
                type="button"
                className={styles.mobileLetsTalkBtn}
                onClick={() => {
                  closeAll();
                  window.dispatchEvent(new Event("open-home-form"));
                }}
              >
                <span>let&apos;s talk</span>
                <span className={styles.btnArrow}>↗</span>
              </button>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
