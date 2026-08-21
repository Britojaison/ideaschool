"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const closeAll = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
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

          {/* Schools Dropdown */}
          <div
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("schools")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/visual-school"
              className={`${styles.navLink} ${
                activeDropdown === "schools" ? styles.navLinkActive : ""
              }`}
            >
              <span>Schools</span>
              <svg
                className={`${styles.chevron} ${
                  activeDropdown === "schools" ? styles.chevronOpen : ""
                }`}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
              >
                <path
                  d="M1 1L4 4L7 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div
              className={`${styles.dropdown} ${
                activeDropdown === "schools" ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.dropdownInner}>
                <div className={styles.dropdownHeader}>
                  <span>ACADEMIC SCHOOLS</span>
                </div>
                <div className={styles.schoolList}>
                  <Link
                    href="/visual-school"
                    className={styles.schoolItem}
                    onClick={closeAll}
                  >
                    <div className={styles.schoolItemInfo}>
                      <span className={styles.schoolItemTitle}>
                        Visual School
                      </span>
                      <span className={styles.schoolItemDesc}>
                        Editing, motion design & AI cinema
                      </span>
                    </div>
                    <span className={styles.activeBadge}>Active</span>
                  </Link>

                  <div className={`${styles.schoolItem} ${styles.disabledItem}`}>
                    <div className={styles.schoolItemInfo}>
                      <span className={styles.schoolItemTitle}>Tech School</span>
                      <span className={styles.schoolItemDesc}>
                        AI systems, agentic workflows & software
                      </span>
                    </div>
                    <span className={styles.soonBadge}>Coming Soon</span>
                  </div>

                  <div className={`${styles.schoolItem} ${styles.disabledItem}`}>
                    <div className={styles.schoolItemInfo}>
                      <span className={styles.schoolItemTitle}>
                        Marketing School
                      </span>
                      <span className={styles.schoolItemDesc}>
                        Creative direction, branding & growth
                      </span>
                    </div>
                    <span className={styles.soonBadge}>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Course Dropdown */}
          <div
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.navButton} ${
                activeDropdown === "courses" ? styles.navLinkActive : ""
              }`}
              onClick={() =>
                setActiveDropdown(activeDropdown === "courses" ? null : "courses")
              }
            >
              <span>Full Course</span>
              <svg
                className={`${styles.chevron} ${
                  activeDropdown === "courses" ? styles.chevronOpen : ""
                }`}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
              >
                <path
                  d="M1 1L4 4L7 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`${styles.dropdown} ${styles.courseDropdown} ${
                activeDropdown === "courses" ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.dropdownHeader}>
                <span>FULL-TIME CAREER COURSE · 24 WEEKS</span>
              </div>
              <Link
                href="/creative-editing-copy"
                className={styles.flagshipCard}
                onClick={closeAll}
              >
                <div className={styles.flagshipTop}>
                  <span className={styles.flagshipBadge}>Visual School</span>
                  <span className={styles.flagshipArrow}>↗</span>
                </div>
                <h4 className={styles.flagshipTitle}>Creative Editing & AI Pro</h4>
                <p className={styles.flagshipDesc}>
                  Complete career course in editing, motion design, storytelling,
                  and AI filmmaking.
                </p>
              </Link>
            </div>
          </div>

          {/* Short Workshops Dropdown */}
          <div
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("workshops")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.navButton} ${
                activeDropdown === "workshops" ? styles.navLinkActive : ""
              }`}
              onClick={() =>
                setActiveDropdown(activeDropdown === "workshops" ? null : "workshops")
              }
            >
              <span>Workshops</span>
              <svg
                className={`${styles.chevron} ${
                  activeDropdown === "workshops" ? styles.chevronOpen : ""
                }`}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
              >
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`${styles.dropdown} ${styles.workshopsDropdown} ${
              activeDropdown === "workshops" ? styles.dropdownOpen : ""
            }`}>
              <div className={styles.dropdownHeader}>
                <span>FOCUSED, HANDS-ON CLASSES · 1–2 DAYS</span>
              </div>
              <div className={styles.workshopList}>
                <Link href="/master-video-editing" className={styles.workshopItem} onClick={closeAll}>
                  <div className={styles.workshopInfo}>
                    <span className={styles.workshopTitle}>Master Video Editing</span>
                    <span className={styles.workshopSub}>2 Days · Offline Workshop</span>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </Link>

                <Link href="/ad-film-making" className={styles.workshopItem} onClick={closeAll}>
                  <div className={styles.workshopInfo}>
                    <span className={styles.workshopTitle}>AI Ad Film Making</span>
                    <span className={styles.workshopSub}>Weekend · Offline Workshop</span>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </Link>

                <Link href="/video-editing" className={styles.workshopItem} onClick={closeAll}>
                  <div className={styles.workshopInfo}>
                    <span className={styles.workshopTitle}>High-Paying Video Editing</span>
                    <span className={styles.workshopSub}>1 Day · Offline Workshop</span>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Community */}
          <a
            href="https://www.instagram.com/ideaschool.pro/"
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
          >
            Community
          </a>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/about" className={styles.actionLink} onClick={closeAll}>
            About
          </Link>
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

      {/* Mobile Drawer */}
      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${
          menuOpen ? styles.mobileNavOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.socialPills}>
          <a
            href="https://www.instagram.com/ideaschool.pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/88gb/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.mobileSections}>
          {/* Schools Section */}
          <div className={styles.mobileSectionGroup}>
            <span className={styles.mobileSectionLabel}>SCHOOLS</span>
            <div className={styles.mobileLinkList}>
              <Link
                href="/visual-school"
                className={styles.mobileMainLink}
                onClick={closeAll}
              >
                <span>Visual School</span>
                <span className={styles.mobileActiveBadge}>Active</span>
              </Link>
              <div className={`${styles.mobileMainLink} ${styles.mobileDisabled}`}>
                <span>Tech School</span>
                <span className={styles.mobileSoonBadge}>Soon</span>
              </div>
              <div className={`${styles.mobileMainLink} ${styles.mobileDisabled}`}>
                <span>Marketing School</span>
                <span className={styles.mobileSoonBadge}>Soon</span>
              </div>
            </div>
          </div>

          {/* Full Course */}
          <div className={styles.mobileSectionGroup}>
            <span className={styles.mobileSectionLabel}>FULL COURSE · 24 WEEKS</span>
            <div className={styles.mobileLinkList}>
              <Link
                href="/creative-editing-copy"
                className={styles.mobileSubLink}
                onClick={closeAll}
              >
                <div className={styles.mobileSubText}>
                  <strong>Creative Editing & AI Pro</strong>
                  <small>Visual School · Career Course</small>
                </div>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Short Workshops */}
          <div className={styles.mobileSectionGroup}>
            <span className={styles.mobileSectionLabel}>WORKSHOPS · 1–2 DAYS</span>
            <div className={styles.mobileLinkList}>
              <Link
                href="/master-video-editing"
                className={styles.mobileSubLink}
                onClick={closeAll}
              >
                <div className={styles.mobileSubText}>
                  <strong>Master Video Editing</strong>
                  <small>2-Day Offline Masterclass</small>
                </div>
                <span>↗</span>
              </Link>

              <Link
                href="/ad-film-making"
                className={styles.mobileSubLink}
                onClick={closeAll}
              >
                <div className={styles.mobileSubText}>
                  <strong>AI Ad Film Making</strong>
                  <small>Weekend Offline Workshop</small>
                </div>
                <span>↗</span>
              </Link>

              <Link
                href="/video-editing"
                className={styles.mobileSubLink}
                onClick={closeAll}
              >
                <div className={styles.mobileSubText}>
                  <strong>High-Paying Video Editing</strong>
                  <small>1-Day Offline Workshop</small>
                </div>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className={styles.mobileSectionGroup}>
            <span className={styles.mobileSectionLabel}>INSTITUTION</span>
            <div className={styles.mobileLinkList}>
              <Link
                href="/about"
                className={styles.mobileMainLink}
                onClick={closeAll}
              >
                <span>About IDEA School</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.mobileCtaWrapper}>
          <button
            className={styles.mobileApplyBtn}
            type="button"
            onClick={() => {
              closeAll();
              window.dispatchEvent(new Event("open-home-form"));
            }}
          >
            Apply Now
          </button>
        </div>

        <div className={styles.menuFooter}>
          <p>IDEA School is where you build real skills for the creative industry.</p>
        </div>
      </nav>
    </header>
  );
}
