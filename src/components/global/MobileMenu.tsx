"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Set mounted state to true once client-side execution starts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable background scrolling when the menu drawer is active
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

  const getLinks = () => {
    if (pathname === "/") {
      return [
        { label: "Visual School", href: "/visual-school" },
        { label: "About", href: "/about" },
      ];
    }
    if (pathname === "/creative-editing-course") {
      return [
        { label: "Curriculum", href: "#curriculum" },
        { label: "Schedule", href: "#schedule" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "FAQ", href: "#faq" },
      ];
    }
    if (pathname === "/master-video-editing" || pathname === "/ad-film-making" || pathname === "/video-editing") {
      return [
        { label: "Overview", href: "#overview" },
        { label: "Curriculum", href: "#curriculum" },
        { label: "Mentor", href: "#mentor" },
        { label: "FAQ", href: "#faq" },
      ];
    }
    // Default fallback link options
    return [
      { label: "Visual School", href: "/visual-school" },
      { label: "About", href: "/about" },
    ];
  };

  const links = getLinks();

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
          {/* Close button inside the portal overlay */}
          <button
            className="mobileMenuLink isOpen"
            onClick={() => setIsOpen(false)}
            aria-expanded="true"
            aria-label="Close navigation menu"
            style={{ position: "absolute", top: "19px", right: "var(--page-gutter)" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="mobileNavLinks">
            {links.map((link) => {
              const isHash = link.href.startsWith("#") || link.href.startsWith("/#");
              if (isHash) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="mobileNavLink"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mobileNavLink"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mobileNavSection">
              <h3>Flagship Program</h3>
              <Link
                href="/creative-editing-course"
                onClick={() => setIsOpen(false)}
              >
                Creative Editing & AI Pro (24 Wks)
              </Link>
            </div>

            <div className="mobileNavSection">
              <h3>Live Workshops</h3>
              <Link href="/master-video-editing" onClick={() => setIsOpen(false)}>
                Master Video Editing (2 Days)
              </Link>
              <Link href="/ad-film-making" onClick={() => setIsOpen(false)}>
                AI Ad Filmmaking (Weekend)
              </Link>
              <Link href="/video-editing" onClick={() => setIsOpen(false)}>
                High-Paying Video Editing (1 Day)
              </Link>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
