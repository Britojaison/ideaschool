"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import styles from "./Header.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setExpanded(null);
  };

  const toggleSection = (section: string) => {
    setExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* Main header hamburger menu button */}
      <button
        className={`mobileMenuLink ${isOpen ? "isOpen" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && mounted && createPortal(
          <div
            id="mobile-navigation"
            className={`${styles.mobileNav} ${
              isOpen ? styles.mobileNavOpen : ""
            }`}
            aria-hidden={!isOpen}
          >
            {/* Top Header inside Drawer */}
            <div className={styles.mobileNavHeader}>
              <Link href="/" className={styles.mobileLogo} onClick={closeMenu} aria-label="Idea AI School home">
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
                  onClick={closeMenu}
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
                    className={`${styles.mobileHeroBtn} ${expanded === "schools" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleSection("schools")}
                    aria-expanded={expanded === "schools"}
                  >
                    <span>schools</span>
                    <span className={styles.mobileAccordionIcon}>{expanded === "schools" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expanded === "schools" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/visual-school" className={styles.mobileSubItem} onClick={closeMenu}>
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
                    className={`${styles.mobileHeroBtn} ${expanded === "courses" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleSection("courses")}
                    aria-expanded={expanded === "courses"}
                  >
                    <span>courses</span>
                    <span className={styles.mobileAccordionIcon}>{expanded === "courses" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expanded === "courses" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/creative-editing-course" className={styles.mobileSubItem} onClick={closeMenu}>
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
                    className={`${styles.mobileHeroBtn} ${expanded === "workshops" ? styles.mobileHeroBtnActive : ""}`}
                    onClick={() => toggleSection("workshops")}
                    aria-expanded={expanded === "workshops"}
                  >
                    <span>workshops</span>
                    <span className={styles.mobileAccordionIcon}>{expanded === "workshops" ? "−" : "+"}</span>
                  </button>
                  <div className={`${styles.mobileSubLinksDrawer} ${expanded === "workshops" ? styles.mobileSubLinksDrawerOpen : ""}`}>
                    <div className={styles.mobileSubLinksInner}>
                      <Link href="/ad-film-making" className={styles.mobileSubItem} onClick={closeMenu}>
                        <div className={styles.mobileSubItemInfo}>
                          <span className={styles.mobileSubItemTitle}>AI Ad Film Making</span>
                          <span className={styles.mobileSubItemDesc}>Weekend · Offline Workshop</span>
                        </div>
                        <span className={styles.mobileSubArrow}>↗</span>
                      </Link>
                      <Link href="/video-editing" className={styles.mobileSubItem} onClick={closeMenu}>
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
                    onClick={closeMenu}
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
                  closeMenu();
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
    </>
  );
}
