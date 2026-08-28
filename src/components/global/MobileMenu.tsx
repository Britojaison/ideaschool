"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import ideaLogo from "@public/assets/logo/idea logo.webp";

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
        <div className="mobileMenuDrawer">
          {/* Top Header inside Portal */}
          <div className="mobileMenuTop">
            <Link href="/" onClick={closeMenu} className="mobileMenuLogo" aria-label="Idea AI School home">
              <Image
                src={ideaLogo}
                alt="Idea AI School"
                width={88}
                height={28}
                priority
                className="mobileMenuLogoImg"
              />
            </Link>

            <div className="mobileMenuHeaderActions">
              <a
                href="mailto:hello@ideaschool.pro"
                className="mobileMenuMailBtn"
                aria-label="Send email"
              >
                <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="m22 5-10 7L2 5" />
                </svg>
              </a>

              <button
                className="mobileMenuCloseTextBtn"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                close
              </button>
            </div>
          </div>

          {/* Lower Content Area - Option 2 Expandable */}
          <div className="mobileMenuContentArea">
            <nav className="mobileNavLinksBlock" aria-label="Mobile Navigation">
              {/* Schools */}
              <div className="mobileNavItemWrapper">
                <button
                  type="button"
                  className={`mobileHeroBtn ${expanded === "schools" ? "mobileHeroBtnActive" : ""}`}
                  onClick={() => toggleSection("schools")}
                  aria-expanded={expanded === "schools"}
                >
                  <span>schools</span>
                  <span className="mobileAccordionIcon">{expanded === "schools" ? "−" : "+"}</span>
                </button>
                <div className={`mobileSubLinksDrawer ${expanded === "schools" ? "mobileSubLinksDrawerOpen" : ""}`}>
                  <div className="mobileSubLinksInner">
                    <Link href="/visual-school" className="mobileSubItem" onClick={closeMenu}>
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">Visual School</span>
                        <span className="mobileSubItemDesc">Editing, motion design & AI cinema</span>
                      </div>
                      <span className="mobileSubBadgeActive">Active</span>
                    </Link>
                    <div className="mobileSubItem mobileSubItemDisabled">
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">Tech School</span>
                        <span className="mobileSubItemDesc">AI workflows & software</span>
                      </div>
                      <span className="mobileSubBadgeSoon">Soon</span>
                    </div>
                    <div className="mobileSubItem mobileSubItemDisabled">
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">Marketing School</span>
                        <span className="mobileSubItemDesc">Creative direction & growth</span>
                      </div>
                      <span className="mobileSubBadgeSoon">Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses */}
              <div className="mobileNavItemWrapper">
                <button
                  type="button"
                  className={`mobileHeroBtn ${expanded === "courses" ? "mobileHeroBtnActive" : ""}`}
                  onClick={() => toggleSection("courses")}
                  aria-expanded={expanded === "courses"}
                >
                  <span>courses</span>
                  <span className="mobileAccordionIcon">{expanded === "courses" ? "−" : "+"}</span>
                </button>
                <div className={`mobileSubLinksDrawer ${expanded === "courses" ? "mobileSubLinksDrawerOpen" : ""}`}>
                  <div className="mobileSubLinksInner">
                    <Link href="/creative-editing-course" className="mobileSubItem" onClick={closeMenu}>
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">Creative Editing & AI Pro</span>
                        <span className="mobileSubItemDesc">24 Weeks · Career Flagship Course</span>
                      </div>
                      <span className="mobileSubArrow">↗</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Workshops */}
              <div className="mobileNavItemWrapper">
                <button
                  type="button"
                  className={`mobileHeroBtn ${expanded === "workshops" ? "mobileHeroBtnActive" : ""}`}
                  onClick={() => toggleSection("workshops")}
                  aria-expanded={expanded === "workshops"}
                >
                  <span>workshops</span>
                  <span className="mobileAccordionIcon">{expanded === "workshops" ? "−" : "+"}</span>
                </button>
                <div className={`mobileSubLinksDrawer ${expanded === "workshops" ? "mobileSubLinksDrawerOpen" : ""}`}>
                  <div className="mobileSubLinksInner">
                    <Link href="/master-video-editing" className="mobileSubItem" onClick={closeMenu}>
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">Master Video Editing</span>
                        <span className="mobileSubItemDesc">2 Days · Offline Masterclass</span>
                      </div>
                      <span className="mobileSubArrow">↗</span>
                    </Link>
                    <Link href="/ad-film-making" className="mobileSubItem" onClick={closeMenu}>
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">AI Ad Film Making</span>
                        <span className="mobileSubItemDesc">Weekend · Offline Workshop</span>
                      </div>
                      <span className="mobileSubArrow">↗</span>
                    </Link>
                    <Link href="/video-editing" className="mobileSubItem" onClick={closeMenu}>
                      <div className="mobileSubItemInfo">
                        <span className="mobileSubItemTitle">High-Paying Video Editing</span>
                        <span className="mobileSubItemDesc">1 Day · Offline Workshop</span>
                      </div>
                      <span className="mobileSubArrow">↗</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mobileNavItemWrapper">
                <Link
                  href="/about"
                  className="mobileHeroNavLink"
                  onClick={closeMenu}
                >
                  about
                </Link>
              </div>
            </nav>

            <div className="mobileMenuContactList">
              <a href="mailto:hello@ideaschool.pro" className="mobileMenuUnderlineLink">
                hello@ideaschool.pro
              </a>
              <a href="tel:+918850774428" className="mobileMenuUnderlineLink">
                +91 88507 74428
              </a>
            </div>
          </div>

          {/* Bottom Area */}
          <div className="mobileMenuFooterRow">
            <div className="mobileMenuSocialTag">
              <span className="mobileMenuDot">●</span>
              <a
                href="https://www.instagram.com/ideaschool.pro/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
              <span className="mobileMenuSep">_</span>
              <a
                href="https://www.linkedin.com/company/88gb/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>

            <button
              type="button"
              className="mobileMenuPillBtn"
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new Event("open-home-form"));
              }}
            >
              <span>let&apos;s talk</span>
              <span className="pillArrow">↗</span>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
