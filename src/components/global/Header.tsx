"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import styles from "./Header.module.css";

export function Logo() {
  return <Link href="/" className={styles.logo} aria-label="Idea AI School home"><Image className={styles.logoImage} src={ideaLogo} alt="Idea AI School" priority /></Link>;
}

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${overlay ? styles.overlay : ""} ${menuOpen ? styles.headerOpen : ""}`}>
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.nav}>
          <Link href="/visual-school">Visual School</Link>
          <Link href="/tech-school">Tech School</Link>
          <Link href="/marketing-school">Marketing School</Link>
          <Link href="/workshops">Workshops</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className={styles.actions}>
          <Link className={styles.contact} href="/success-stories">Stories</Link>
          <button
            className={styles.apply}
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-home-form"))}
          >
            Apply now
          </button>
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`} aria-hidden={!menuOpen}>
        <div className={styles.socialPills}>
          <a href="https://www.instagram.com/ideaschool.pro/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/88gb/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className={styles.mainLinks}>
          <Link href="/visual-school" onClick={() => setMenuOpen(false)}>Visual School</Link>
          <Link href="/tech-school" onClick={() => setMenuOpen(false)}>Tech School</Link>
          <Link href="/marketing-school" onClick={() => setMenuOpen(false)}>Marketing School</Link>
          <Link href="/workshops" onClick={() => setMenuOpen(false)}>Workshops</Link>
          <Link href="/success-stories" onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
        <div className={styles.menuFooter}>
          <p>IDEA School is where you build real skills for the creative industry.</p>
        </div>
      </nav>
    </header>
  );
}
