"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ideaLogo from "@public/assets/logo/idea logo.webp";
import navMark from "@public/assets/home/tumblr_c050d2fa4f5b9a2a88fa3f5196acd80f_1ccf7380_1280.webp";
import styles from "./MultiLevelDrawerMenu.module.css";

// ─── Constants ─────────────────────────────────────────────────────────────
const HOVER_DUR         = 0.35;
const HOVER_EASE        = "back.out";
const DOT_GAP_PRIMARY   = 14;
const DOT_GAP_SUB       = 12;
const ICON_BURGER_OFFSET = 3;
const PANEL_RADIUS      = 12;
const CLOSE_PANEL2_DELAY = 220;
const CLIP_HIDDEN  = `inset(0% 100% 0% 0% round ${PANEL_RADIUS}px)`;
const CLIP_VISIBLE = `inset(0% 0% 0% 0% round ${PANEL_RADIUS}px)`;

interface SublinkItem {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  disabled?: boolean;
}

interface PrimaryItem {
  id: string;
  label: string;
}

const PRIMARIES: PrimaryItem[] = [
  { id: "schools",   label: "Schools" },
  { id: "programs",  label: "Programs" },
  { id: "workshops", label: "Workshops" },
  { id: "idea",      label: "The IDEA" },
  { id: "about",     label: "About Us" },
];

const SUBLISTS: Record<string, SublinkItem[]> = {
  schools: [
    {
      label: "Visual School",
      href: "/visual-school",
      desc: "Editing, motion design & AI cinema",
    },
    {
      label: "Tech School",
      href: "#",
      desc: "AI workflows & software engineering",
      badge: "Soon",
      disabled: true,
    },
    {
      label: "Marketing School",
      href: "#",
      desc: "Creative direction & brand growth",
      badge: "Soon",
      disabled: true,
    },
  ],
  programs: [
    {
      label: "Creative Editing & AI Pro",
      href: "/creative-editing-course",
      desc: "24 Weeks · Career Flagship Course",
      badge: "Flagship",
    },
  ],
  workshops: [
    {
      label: "Master Video Editing",
      href: "/master-video-editing",
      desc: "2 Days · Intensive Offline Workshop",
      badge: "Workshop",
    },
    {
      label: "High-Paying Video Editing",
      href: "/video-editing",
      desc: "1 Day · Hands-on Offline Workshop",
      badge: "Workshop",
    },
    {
      label: "AI Ad Film Making",
      href: "/ad-film-making",
      desc: "Weekend · Commercial Production",
      badge: "Workshop",
    },
  ],
  idea: [
    {
      label: "Why IDEA School",
      href: "/#the-idea",
      desc: "Real mentors, real studio work & zero fluff",
    },
  ],
  about: [
    {
      label: "About IDEA School",
      href: "/about",
      desc: "Our story, mentors & state-of-the-art campus",
    },
  ],
};

const CARDS = [
  {
    src: "/images/DSC00024.webp",
    tag: "Flagship 24W",
    label: "Creative Editing & AI Pro",
    href: "/creative-editing-course",
  },
  {
    src: "/images/DSC00093.webp",
    tag: "Offline Workshop",
    label: "AI Ad Film Making",
    href: "/ad-film-making",
  },
];

interface MultiLevelDrawerMenuProps {
  isDark?: boolean;
  isScrolled?: boolean;
  panelBg?: string;
  buttonClassName?: string;
}

export default function MultiLevelDrawerMenu({
  isDark = false,
  isScrolled = false,
  panelBg = "#ececec",
  buttonClassName,
}: MultiLevelDrawerMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activePrimaryId, setActivePrimaryId] = useState<string | null>(null);

  // ─── Refs ─────────────────────────────────────────────────────────────────
  const overlayRef     = useRef<HTMLDivElement | null>(null);
  const scrimRef       = useRef<HTMLButtonElement | null>(null);
  const panel1Ref      = useRef<HTMLElement | null>(null);
  const panel2Ref      = useRef<HTMLElement | null>(null);
  const primaryNavRef  = useRef<HTMLElement | null>(null);
  const toggleRef      = useRef<HTMLButtonElement | null>(null);
  const labelTrackRef  = useRef<HTMLSpanElement | null>(null);
  const iconTopRef     = useRef<HTMLSpanElement | null>(null);
  const iconBottomRef  = useRef<HTMLSpanElement | null>(null);
  const backBtnRef     = useRef<HTMLButtonElement | null>(null);

  // Primary item refs
  const primaryBtnRefs  = useRef<(HTMLButtonElement | null)[]>([]);
  const primaryDotRefs  = useRef<(HTMLSpanElement | null)[]>([]);
  const primaryLblRefs  = useRef<(HTMLSpanElement | null)[]>([]);

  // Sublist refs
  const sublistRefs       = useRef<Record<string, HTMLDivElement | null>>({});
  const sublistLabelRefs  = useRef<Record<string, (HTMLSpanElement | null)[]>>({});
  const sublinkDotRefs    = useRef<Record<string, (HTMLSpanElement | null)[]>>({});

  // Extras
  const brandRowRef     = useRef<HTMLDivElement | null>(null);
  const exploreRef      = useRef<HTMLAnchorElement | null>(null);
  const cardRefs        = useRef<(HTMLAnchorElement | null)[]>([]);
  const footerRef       = useRef<HTMLElement | null>(null);

  // Mutable state refs
  const isOpenRef        = useRef(false);
  const panel2OpenRef    = useRef(false);
  const activeSubIdRef   = useRef<string | null>(null);
  const closeTimerRef    = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    if (iconTopRef.current) gsap.set(iconTopRef.current, { y: -ICON_BURGER_OFFSET, rotation: 0 });
    if (iconBottomRef.current) gsap.set(iconBottomRef.current, { y: ICON_BURGER_OFFSET, rotation: 0 });
  }, []);

  // ─── isMobile helper ──────────────────────────────────────────────────────
  const isMobile = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  }, []);

  // ─── setPanel2InitialState ────────────────────────────────────────────────
  const setPanel2InitialState = useCallback(() => {
    const panel2 = panel2Ref.current;
    if (!panel2) return;
    if (isMobile()) {
      gsap.set(panel2, { clipPath: CLIP_VISIBLE, xPercent: 0, x: "100vw" });
    } else {
      gsap.set(panel2, { clipPath: CLIP_HIDDEN, xPercent: 0, x: 0 });
    }
  }, [isMobile]);

  // ─── Sublist active state ─────────────────────────────────────────────────
  const setActiveSublist = useCallback((id: string) => {
    PRIMARIES.forEach((p) => {
      const sl = sublistRefs.current[p.id];
      if (!sl) return;
      const isMatch = p.id === id;
      sl.classList.toggle(styles.sublistActive, isMatch);
      sl.setAttribute("aria-hidden", String(!isMatch));
      sl.style.visibility    = isMatch ? "visible" : "hidden";
      sl.style.pointerEvents = isMatch ? "auto"    : "none";
    });
    activeSubIdRef.current = id;
    setActivePrimaryId(id);
    primaryBtnRefs.current.forEach((btn, i) => {
      if (!btn) return;
      btn.setAttribute("aria-expanded", String(PRIMARIES[i]?.id === id));
    });
  }, []);

  const resetSubLinkVisuals = useCallback((id: string) => {
    const lbls = sublistLabelRefs.current[id] || [];
    const dots = sublinkDotRefs.current[id]   || [];
    lbls.forEach((lbl) => { if (lbl) gsap.set(lbl, { x: 0, opacity: 0 }); });
    dots.forEach((dot) => { if (dot) gsap.set(dot, { scale: 0 }); });
  }, []);

  // ─── Panel-2 close timer ──────────────────────────────────────────────────
  const cancelPanel2CloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  // ─── Panel 2: Close ───────────────────────────────────────────────────────
  const closePanel2 = useCallback(() => {
    cancelPanel2CloseTimer();
    if (!panel2OpenRef.current) return;
    panel2OpenRef.current = false;
    activeSubIdRef.current = null;
    setActivePrimaryId(null);
    const panel2 = panel2Ref.current;
    if (!panel2) return;
    if (isMobile()) {
      gsap.to(panel2, { x: "100vw", duration: 0.4, ease: "expo.out", force3D: true, overwrite: "auto" });
    } else {
      gsap.to(panel2, { clipPath: CLIP_HIDDEN, duration: 0.4, ease: "expo.out", force3D: true, overwrite: "auto" });
    }
  }, [cancelPanel2CloseTimer, isMobile]);

  // ─── Panel 2: Swap Content ────────────────────────────────────────────────
  const swapSublistContent = useCallback((newId: string) => {
    const oldId = activeSubIdRef.current;
    const oldLbls = (oldId ? sublistLabelRefs.current[oldId] : []) || [];
    const newLbls = sublistLabelRefs.current[newId] || [];

    function showNew() {
      setActiveSublist(newId);
      resetSubLinkVisuals(newId);
      if (newLbls.length) {
        gsap.fromTo(
          newLbls,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.4, ease: "expo.out", stagger: 0.05, force3D: true, overwrite: "auto" }
        );
      }
    }

    if (oldLbls.length) {
      gsap.to(oldLbls, {
        opacity: 0, x: -8, duration: 0.16, ease: "expo.out", stagger: 0.02,
        overwrite: "auto", onComplete: showNew,
      });
    } else {
      showNew();
    }
  }, [setActiveSublist, resetSubLinkVisuals]);

  // ─── Panel 2: Open ────────────────────────────────────────────────────────
  const openPanel2 = useCallback((targetId: string) => {
    cancelPanel2CloseTimer();
    const hasSublist = !!(SUBLISTS[targetId] && SUBLISTS[targetId].length);
    if (!hasSublist) { closePanel2(); return; }

    if (panel2OpenRef.current && activeSubIdRef.current === targetId) return;

    if (panel2OpenRef.current && activeSubIdRef.current !== targetId) {
      swapSublistContent(targetId);
      return;
    }

    panel2OpenRef.current = true;
    setActiveSublist(targetId);
    resetSubLinkVisuals(targetId);

    const panel2 = panel2Ref.current;
    if (!panel2) return;

    if (isMobile()) {
      gsap.to(panel2, { x: 0, duration: 0.5, ease: "expo.out", force3D: true, overwrite: "auto" });
    } else {
      gsap.to(panel2, { clipPath: CLIP_VISIBLE, duration: 0.55, ease: "expo.out", force3D: true, overwrite: "auto" });
    }

    const lbls = sublistLabelRefs.current[targetId] || [];
    if (lbls.length) {
      gsap.fromTo(
        lbls,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.05, ease: "expo.out", force3D: true, overwrite: "auto", delay: 0.08 }
      );
    }
  }, [cancelPanel2CloseTimer, closePanel2, swapSublistContent, setActiveSublist, resetSubLinkVisuals, isMobile]);

  // ─── Panel 2 close schedule ───────────────────────────────────────────────
  const schedulePanel2Close = useCallback(() => {
    cancelPanel2CloseTimer();
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      closePanel2();
    }, CLOSE_PANEL2_DELAY);
  }, [cancelPanel2CloseTimer, closePanel2]);

  // ─── Open / Close Drawer ──────────────────────────────────────────────────
  const openMenu = useCallback((initialCategory?: string) => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;
    setIsOpen(true);
    panel2OpenRef.current = false;
    activeSubIdRef.current = null;
    setActivePrimaryId(null);
    setPanel2InitialState();

    const panel1     = panel1Ref.current;
    const overlay    = overlayRef.current;
    const scrim      = scrimRef.current;
    const labelTrack = labelTrackRef.current;
    const iconTop    = iconTopRef.current;
    const iconBottom = iconBottomRef.current;

    if (!panel1 || !overlay) return;

    overlay.removeAttribute("inert");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const primaryLabels = primaryLblRefs.current.filter(Boolean);
    const p1Extras: HTMLElement[] = [];
    if (brandRowRef.current) p1Extras.push(brandRowRef.current);
    if (exploreRef.current)  p1Extras.push(exploreRef.current);
    cardRefs.current.forEach((c) => { if (c) p1Extras.push(c); });
    if (footerRef.current)   p1Extras.push(footerRef.current);
    const navAll = [...primaryLabels, ...p1Extras];

    gsap.set(panel1, { clipPath: CLIP_HIDDEN });
    gsap.set(scrim,  { opacity: 0 });
    gsap.set(navAll, { opacity: 0, x: -16 });

    gsap.to(scrim,      { opacity: 1, duration: 0.6, ease: "power2.out" });
    gsap.to(panel1,     { clipPath: CLIP_VISIBLE, duration: 0.8, ease: "expo.out" });
    if (labelTrack)  gsap.to(labelTrack, { y: -18, duration: 0.5, ease: "expo.out" });
    if (iconTop)     gsap.to(iconTop,    { y: 0, rotation: 45,  duration: 0.5, ease: "expo.out" });
    if (iconBottom)  gsap.to(iconBottom, { y: 0, rotation: -45, duration: 0.5, ease: "expo.out" });
    gsap.to(primaryLabels, { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "expo.out", delay: 0.2 });
    if (p1Extras.length) {
      gsap.to(p1Extras, { opacity: 1, x: 0, duration: 0.5, stagger: 0.04, ease: "expo.out", delay: 0.28 });
    }

    if (initialCategory) {
      setTimeout(() => openPanel2(initialCategory), 250);
    }
  }, [setPanel2InitialState, openPanel2]);

  const closeMenu = useCallback(() => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setIsOpen(false);
    closePanel2();

    const panel1     = panel1Ref.current;
    const overlay    = overlayRef.current;
    const scrim      = scrimRef.current;
    const labelTrack = labelTrackRef.current;
    const iconTop    = iconTopRef.current;
    const iconBottom = iconBottomRef.current;

    const primaryLabels = primaryLblRefs.current.filter(Boolean);
    const p1Extras: HTMLElement[] = [];
    if (brandRowRef.current) p1Extras.push(brandRowRef.current);
    if (exploreRef.current)  p1Extras.push(exploreRef.current);
    cardRefs.current.forEach((c) => { if (c) p1Extras.push(c); });
    if (footerRef.current)   p1Extras.push(footerRef.current);
    const navAll = [...primaryLabels, ...p1Extras];

    gsap.to(navAll, { opacity: 0, duration: 0.15, ease: "power2.in" });
    if (panel1)  gsap.to(panel1, { clipPath: CLIP_HIDDEN, duration: 0.45, ease: "expo.out", delay: 0.05 });
    if (scrim)   gsap.to(scrim,  { opacity: 0, duration: 0.4, ease: "power2.inOut", delay: 0.08 });
    if (labelTrack) gsap.to(labelTrack, { y: 0, duration: 0.45, ease: "expo.out" });
    if (iconTop)    gsap.to(iconTop,    { y: -ICON_BURGER_OFFSET, rotation: 0, duration: 0.45, ease: "expo.out" });
    if (iconBottom) gsap.to(iconBottom, { y:  ICON_BURGER_OFFSET, rotation: 0, duration: 0.45, ease: "expo.out" });

    setTimeout(() => {
      if (overlay) {
        overlay.setAttribute("inert", "");
        overlay.setAttribute("aria-hidden", "true");
      }
      document.body.style.overflow = "";
    }, 450);
  }, [closePanel2]);

  const handleToggle = useCallback(() => {
    isOpenRef.current ? closeMenu() : openMenu();
  }, [openMenu, closeMenu]);

  // ─── Primary hover / click handlers ───────────────────────────────────────
  const handlePrimaryMouseEnter = useCallback((index: number) => {
    if (!isOpenRef.current || isMobile()) return;
    cancelPanel2CloseTimer();
    const targetId = PRIMARIES[index]?.id;
    if (targetId && SUBLISTS[targetId]?.length) {
      openPanel2(targetId);
    } else {
      schedulePanel2Close();
    }

    const dot = primaryDotRefs.current[index];
    const lbl = primaryLblRefs.current[index];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 1, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
    gsap.to(lbl, { x: DOT_GAP_PRIMARY, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
  }, [isMobile, cancelPanel2CloseTimer, openPanel2, schedulePanel2Close]);

  const handlePrimaryMouseLeave = useCallback((index: number) => {
    const dot = primaryDotRefs.current[index];
    const lbl = primaryLblRefs.current[index];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
    gsap.to(lbl, { x: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
  }, []);

  const handlePrimaryClick = useCallback((index: number) => {
    if (!isOpenRef.current) return;
    cancelPanel2CloseTimer();
    const targetId = PRIMARIES[index]?.id;
    if (targetId && SUBLISTS[targetId]?.length) {
      if (panel2OpenRef.current && activeSubIdRef.current === targetId && isMobile()) {
        closePanel2();
      } else {
        openPanel2(targetId);
      }
    } else {
      closePanel2();
    }
  }, [cancelPanel2CloseTimer, isMobile, closePanel2, openPanel2]);

  const handlePrimaryNavMouseLeave = useCallback((e: React.MouseEvent) => {
    if (!isOpenRef.current || isMobile()) return;
    const panel2 = panel2Ref.current;
    if (panel2 && panel2.contains(e.relatedTarget as Node)) return;
    schedulePanel2Close();
  }, [isMobile, schedulePanel2Close]);

  const handlePanel2MouseEnter = useCallback(() => {
    if (isMobile()) return;
    cancelPanel2CloseTimer();
  }, [isMobile, cancelPanel2CloseTimer]);

  const handlePanel2MouseLeave = useCallback((e: React.MouseEvent) => {
    if (!isOpenRef.current || isMobile()) return;
    const primaryNav = primaryNavRef.current;
    if (primaryNav && primaryNav.contains(e.relatedTarget as Node)) return;
    schedulePanel2Close();
  }, [isMobile, schedulePanel2Close]);

  // Sublink hover
  const handleSubLinkEnter = useCallback((primaryId: string, itemIndex: number) => {
    const dot = (sublinkDotRefs.current[primaryId] || [])[itemIndex];
    const lbl = (sublistLabelRefs.current[primaryId] || [])[itemIndex];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 1, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
    gsap.to(lbl, { x: DOT_GAP_SUB, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
  }, []);

  const handleSubLinkLeave = useCallback((primaryId: string, itemIndex: number) => {
    const dot = (sublinkDotRefs.current[primaryId] || [])[itemIndex];
    const lbl = (sublistLabelRefs.current[primaryId] || [])[itemIndex];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
    gsap.to(lbl, { x: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto" });
  }, []);

  // ─── Keyboard + resize + custom event ─────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenRef.current) closeMenu();
    };

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: string }>;
      openMenu(customEvent.detail?.category);
    };

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setPanel2InitialState();
      }, 150);
    };

    document.addEventListener("keydown", handleKey);
    window.addEventListener("open-drawer-menu", handleCustomOpen);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("open-drawer-menu", handleCustomOpen);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      cancelPanel2CloseTimer();
    };
  }, [closeMenu, openMenu, setPanel2InitialState, cancelPanel2CloseTimer]);

  // Initial panel setup once mounted
  useEffect(() => {
    if (!mounted) return;
    const panel1 = panel1Ref.current;
    const panel2 = panel2Ref.current;
    const overlay = overlayRef.current;

    if (panel1) {
      panel1.style.backgroundColor = panelBg;
      gsap.set(panel1, { clipPath: CLIP_HIDDEN });
    }
    if (panel2) {
      panel2.style.backgroundColor = panelBg;
    }
    setPanel2InitialState();
    if (overlay) {
      overlay.setAttribute("inert", "");
      overlay.setAttribute("aria-hidden", "true");
    }
  }, [mounted, panelBg, setPanel2InitialState]);

  return (
    <>
      {/* Menu Toggle Button rendered in header */}
      <button
        ref={toggleRef}
        className={`${styles.toggle} ${
          isDark ? styles.toggleDark : styles.toggleLight
        } ${isScrolled ? styles.toggleScrolled : ""} ${
          isOpen ? styles.toggleOpen : ""
        } ${buttonClassName || ""}`}
        aria-expanded={isOpen}
        aria-controls="mldm_overlay"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={handleToggle}
        type="button"
      >
        <span className={styles.toggleLabelWrap}>
          <span ref={labelTrackRef} className={styles.toggleLabelTrack}>
            <span className={styles.toggleLabel}>Menu</span>
            <span className={styles.toggleLabel}>Close</span>
          </span>
        </span>
        <span className={styles.toggleIcon} aria-hidden="true">
          <span ref={iconTopRef} className={styles.toggleLine} />
          <span ref={iconBottomRef} className={styles.toggleLine} />
        </span>
      </button>

      {/* Overlay Drawer Portaled into Body */}
      {mounted &&
        createPortal(
          <div
            ref={overlayRef}
            className={styles.overlay}
            id="mldm_overlay"
            role="dialog"
            aria-modal="true"
            aria-label="IDEA School Navigation"
            aria-hidden={!isOpen}
            inert={!isOpen}
          >
            {/* Scrim */}
            <button
              ref={scrimRef}
              className={styles.scrim}
              aria-label="Close menu"
              tabIndex={-1}
              onClick={closeMenu}
              type="button"
            />

            {/* Panel 1 — Primary categories */}
            <aside
              ref={panel1Ref}
              className={`${styles.panel} ${styles.panelPrimary}`}
              aria-label="Primary navigation"
            >
              <div className={styles.panelInner}>
                {/* Brand header inside drawer */}
                <div ref={brandRowRef} className={styles.drawerBrandRow}>
                  <Link href="/" className={styles.drawerBrand} onClick={closeMenu} aria-label="IDEA School home">
                    <Image
                      src={navMark}
                      alt=""
                      aria-hidden="true"
                      className={styles.drawerNavMark}
                      priority
                    />
                    <Image
                      src={ideaLogo}
                      alt="IDEA AI School"
                      className={styles.drawerLogoImg}
                      width={80}
                      height={24}
                    />
                  </Link>
                  <button
                    type="button"
                    className={styles.drawerCloseBtn}
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    Close ✕
                  </button>
                </div>

                {/* Primary Nav Links */}
                <nav
                  ref={primaryNavRef}
                  className={styles.primaryNav}
                  aria-label="Primary categories"
                  onMouseLeave={handlePrimaryNavMouseLeave}
                >
                  <ul className={styles.list}>
                    {PRIMARIES.map((primary, i) => (
                      <li key={primary.id}>
                        <button
                          ref={(el) => { primaryBtnRefs.current[i] = el; }}
                          className={`${styles.primaryBtn} ${
                            activePrimaryId === primary.id ? styles.primaryBtnActive : ""
                          }`}
                          aria-expanded="false"
                          onMouseEnter={() => handlePrimaryMouseEnter(i)}
                          onMouseLeave={() => handlePrimaryMouseLeave(i)}
                          onClick={() => handlePrimaryClick(i)}
                          type="button"
                        >
                          <span
                            ref={(el) => { primaryDotRefs.current[i] = el; }}
                            className={styles.primaryDot}
                            aria-hidden="true"
                          />
                          <span
                            ref={(el) => { primaryLblRefs.current[i] = el; }}
                            className={styles.primaryLabel}
                          >
                            {primary.label}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Link
                    ref={exploreRef}
                    href="/visual-school"
                    className={styles.exploreLink}
                    onClick={closeMenu}
                  >
                    Explore all programs →
                  </Link>
                </nav>

                {/* Preview Cards */}
                <div className={styles.cards}>
                  {CARDS.map((card, i) => (
                    <Link
                      key={card.label}
                      ref={(el) => { cardRefs.current[i] = el; }}
                      className={styles.card}
                      href={card.href}
                      onClick={closeMenu}
                    >
                      <span className={styles.cardMedia}>
                        <Image
                          className={styles.cardImg}
                          src={card.src}
                          alt=""
                          width={200}
                          height={125}
                        />
                      </span>
                      <span className={styles.cardTag}>{card.tag}</span>
                      <span className={styles.cardLabel}>{card.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Footer nav */}
                <nav ref={footerRef} className={styles.footerNav} aria-label="Secondary links">
                  <div className={styles.footerLeft}>
                    <div className={styles.footerSocials}>
                      <a
                        href="https://www.instagram.com/ideaschool.pro/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.footerLink}
                      >
                        Instagram
                      </a>
                      <span className={styles.footerSep}>·</span>
                      <a
                        href="https://www.linkedin.com/company/88gb/posts/?feedView=all"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.footerLink}
                      >
                        LinkedIn
                      </a>
                    </div>
                    <a href="tel:+918850774428" className={styles.footerPhoneLink}>
                      +91 88507 74428
                    </a>
                  </div>

                  <button
                    type="button"
                    className={styles.footerApplyBtn}
                    onClick={() => {
                      closeMenu();
                      window.dispatchEvent(new Event("open-home-form"));
                    }}
                  >
                    Apply Now ↗
                  </button>
                </nav>
              </div>
            </aside>

            {/* Panel 2 — Subcategories */}
            <aside
              ref={panel2Ref}
              className={`${styles.panel} ${styles.panelSecondary}`}
              aria-label="Subcategories"
              onMouseEnter={handlePanel2MouseEnter}
              onMouseLeave={handlePanel2MouseLeave}
            >
              <div className={styles.panelInner}>
                <button
                  ref={backBtnRef}
                  className={styles.backBtn}
                  aria-label="Back to primary categories"
                  onClick={closePanel2}
                  type="button"
                >
                  <span className={styles.backIcon} aria-hidden="true" />
                  <span className={styles.backLabel}>Back</span>
                </button>

                <div className={styles.sublistStack}>
                  {PRIMARIES.map((primary) => {
                    const items = SUBLISTS[primary.id] || [];
                    if (!sublistLabelRefs.current[primary.id]) sublistLabelRefs.current[primary.id] = [];
                    if (!sublinkDotRefs.current[primary.id])   sublinkDotRefs.current[primary.id]   = [];

                    return (
                      <div
                        key={primary.id}
                        ref={(el) => { sublistRefs.current[primary.id] = el; }}
                        className={`${styles.sublist} ${
                          primary.id === PRIMARIES[0]?.id ? styles.sublistActive : ""
                        }`}
                        aria-hidden={primary.id !== PRIMARIES[0]?.id}
                      >
                        <ul className={styles.list}>
                          {items.map((item, j) => {
                            const isClickable = !item.disabled;

                            return (
                              <li key={item.label}>
                                {isClickable ? (
                                  <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={styles.sublink}
                                    onMouseEnter={() => handleSubLinkEnter(primary.id, j)}
                                    onMouseLeave={() => handleSubLinkLeave(primary.id, j)}
                                  >
                                    <span
                                      ref={(el) => {
                                        if (!sublinkDotRefs.current[primary.id]) {
                                          sublinkDotRefs.current[primary.id] = [];
                                        }
                                        sublinkDotRefs.current[primary.id][j] = el;
                                      }}
                                      className={styles.sublinkDot}
                                      aria-hidden="true"
                                    />
                                    <div className={styles.sublinkTopRow}>
                                      <span
                                        ref={(el) => {
                                          if (!sublistLabelRefs.current[primary.id]) {
                                            sublistLabelRefs.current[primary.id] = [];
                                          }
                                          sublistLabelRefs.current[primary.id][j] = el;
                                        }}
                                        className={styles.sublinkLabel}
                                      >
                                        {item.label}
                                      </span>
                                      {item.badge && (
                                        <span
                                          className={`${styles.sublinkBadge} ${
                                            item.badge === "Active" || item.badge === "Flagship"
                                              ? styles.sublinkBadgeActive
                                              : ""
                                          }`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    {item.desc && (
                                      <span className={styles.sublinkDesc}>{item.desc}</span>
                                    )}
                                  </Link>
                                ) : (
                                  <div
                                    className={`${styles.sublink} ${styles.sublinkDisabled}`}
                                  >
                                    <div className={styles.sublinkTopRow}>
                                      <span className={styles.sublinkLabel}>
                                        {item.label}
                                      </span>
                                      {item.badge && (
                                        <span className={styles.sublinkBadge}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    {item.desc && (
                                      <span className={styles.sublinkDesc}>{item.desc}</span>
                                    )}
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
