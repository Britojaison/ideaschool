"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./ByTheNumbers.module.css";

interface StatItem {
  id: string;
  tag: string;
  number: string;
  label: string;
  imageSrc: string;
  colClass: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "a",
    tag: "a ]",
    number: "24",
    label: "WEEKS OF STRUCTURED LEARNING & INDUSTRY EXPERIENCE",
    imageSrc: "/images/gallery10.webp",
    colClass: styles.colA
  },
  {
    id: "b",
    tag: "b ]",
    number: "12 + 12",
    label: "WEEKS OF CORE TRAINING + INDUSTRY EXPERIENCE",
    imageSrc: "/images/gallery16.webp",
    colClass: styles.colB
  },
  {
    id: "c",
    tag: "c ]",
    number: "2",
    label: "PRACTICAL ASSIGNMENTS EVERY WEEK DURING CORE TRAINING",
    imageSrc: "/images/gallery13.webp",
    colClass: styles.colC
  },
  {
    id: "d",
    tag: "d ]",
    number: "5 / WEEK",
    label: "POTENTIAL WEEKLY ASSIGNMENTS THROUGH THE DEDICATED INDUSTRY EXPERIENCE PATH",
    imageSrc: "/images/gallery18.webp",
    colClass: styles.colD
  },
  {
    id: "e",
    tag: "e ]",
    number: "60+",
    label: "POTENTIAL VIDEO ASSIGNMENTS ACROSS 12 WEEKS OF DEDICATED INDUSTRY EXPERIENCE",
    imageSrc: "/images/gallery10.webp",
    colClass: styles.colE
  }
];

/** Lower = smoother/lazier trail */
const LERP_EASE = 0.08;

export default function ByTheNumbers({
  title = "NUMBERS",
  subtitle = "BUILT FOR DEPTH. DESIGNED FOR REAL PRACTICE.",
  stats = STATS_DATA
}: {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}) {
  const [hoveredCol, setHoveredCol] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<string, HTMLElement>>(new Map());
  const activeRef = useRef<string | null>(null);

  // Lerp state
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const imgSize = useRef({ w: 0, h: 0 });
  const rafId = useRef<number>(0);
  const isAnimating = useRef(false);
  const lastMouseClient = useRef<{ x: number; y: number } | null>(null);

  // ── Sliding highlight ──
  const moveHighlight = useCallback((id: string) => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    const el = cellRefs.current.get(id);
    if (!grid || !highlight || !el) return;

    const rect = el.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    highlight.style.opacity = "1";
    highlight.style.transform = `translate(${rect.left - gridRect.left}px, ${rect.top - gridRect.top}px)`;
    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
  }, []);

  // ── Lerp animation loop ──
  const animate = useCallback(() => {
    const img = floatingRef.current;
    if (!img || !activeRef.current) {
      isAnimating.current = false;
      return;
    }

    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * LERP_EASE;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * LERP_EASE;

    const cx = currentPos.current.x - imgSize.current.w / 2;
    const cy = currentPos.current.y - imgSize.current.h / 2;

    img.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  const startAnimation = useCallback(() => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      rafId.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  // Cache floating image size
  useEffect(() => {
    const el = floatingRef.current;
    if (el) {
      // Defer to let CSS apply
      requestAnimationFrame(() => {
        imgSize.current.w = el.offsetWidth;
        imgSize.current.h = el.offsetHeight;
      });
    }
  }, []);

  // ── Mouse handlers ──
  const handleGridMouseMove = useCallback((e: React.MouseEvent) => {
    lastMouseClient.current = { x: e.clientX, y: e.clientY };
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;

    // Re-cache size if needed
    const el = floatingRef.current;
    if (el && imgSize.current.w === 0) {
      imgSize.current.w = el.offsetWidth;
      imgSize.current.h = el.offsetHeight;
    }
  }, []);

  const handleColEnter = useCallback((e: React.MouseEvent, colId: string) => {
    lastMouseClient.current = { x: e.clientX, y: e.clientY };
    setHoveredCol(colId);
    activeRef.current = colId;
    moveHighlight(colId);

    const grid = gridRef.current;
    if (grid) {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetPos.current = { x, y };

      // On first enter, snap position to cursor (no lerp-in from a corner)
      if (!isAnimating.current) {
        currentPos.current = { x, y };
        const el = floatingRef.current;
        if (el) {
          imgSize.current.w = el.offsetWidth;
          imgSize.current.h = el.offsetHeight;
          el.style.transform = `translate3d(${x - el.offsetWidth / 2}px, ${y - el.offsetHeight / 2}px, 0)`;
        }
      }
    }

    startAnimation();
  }, [moveHighlight, startAnimation]);

  const handleGridLeave = useCallback(() => {
    setHoveredCol(null);
    activeRef.current = null;
    isAnimating.current = false;
    cancelAnimationFrame(rafId.current);

    const highlight = highlightRef.current;
    if (highlight) highlight.style.opacity = "0";
  }, []);

  // Cleanup
  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // Scroll and global mouse tracking to update floating image while scrolling
  useEffect(() => {
    const updateFromMouse = () => {
      if (!lastMouseClient.current) return;
      const { x, y } = lastMouseClient.current;
      const grid = gridRef.current;
      if (!grid) return;
      const rect = grid.getBoundingClientRect();

      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

      if (isInside) {
        targetPos.current.x = x - rect.left;
        targetPos.current.y = y - rect.top;

        // Find which column the cursor is currently over
        let foundCol: string | null = null;
        for (const [id, cellEl] of cellRefs.current.entries()) {
          const cellRect = cellEl.getBoundingClientRect();
          if (
            x >= cellRect.left &&
            x <= cellRect.right &&
            y >= cellRect.top &&
            y <= cellRect.bottom
          ) {
            foundCol = id;
            break;
          }
        }

        if (foundCol) {
          setHoveredCol(foundCol);
          activeRef.current = foundCol;
          moveHighlight(foundCol);
          startAnimation();
        }
      } else if (activeRef.current !== null) {
        handleGridLeave();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      lastMouseClient.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      updateFromMouse();
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [moveHighlight, startAnimation, handleGridLeave]);

  // Resize
  useEffect(() => {
    let resizeRaf: number;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (activeRef.current) moveHighlight(activeRef.current);
        const el = floatingRef.current;
        if (el) {
          imgSize.current.w = el.offsetWidth;
          imgSize.current.h = el.offsetHeight;
        }
      });
    };

    const grid = gridRef.current;
    const ro = grid ? new ResizeObserver(onResize) : null;
    if (grid && ro) ro.observe(grid);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(resizeRaf);
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [moveHighlight]);

  return (
    <section className={styles.section} id="by-the-numbers" data-header-theme="light">
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div
        className={styles.grid}
        ref={gridRef}
        onMouseMove={handleGridMouseMove}
        onMouseLeave={handleGridLeave}
      >
        {/* Sliding highlight */}
        <div ref={highlightRef} aria-hidden className={styles.highlight} />

        {/* Single floating image — trails cursor across the entire grid */}
        <div
          ref={floatingRef}
          className={`${styles.floatingImage} ${hoveredCol ? styles.floatingVisible : ""}`}
        >
          {stats.map((item) => (
            <Image
              key={item.id}
              src={item.imageSrc}
              alt={item.label}
              fill
              className={styles.floatingImgLayer}
              style={{ opacity: hoveredCol === item.id ? 1 : 0 }}
              sizes="300px"
            />
          ))}
        </div>

        {/* Columns */}
        {stats.map((item) => {
          const isHovered = hoveredCol === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cellRefs.current.set(item.id, el);
                else cellRefs.current.delete(item.id);
              }}
              className={`${styles.column} ${item.colClass} ${
                isHovered ? styles.hoverActive : ""
              }`}
              onMouseEnter={(e) => handleColEnter(e, item.id)}
              role="button"
              tabIndex={0}
              aria-label={`${item.number} ${item.label}`}
            >
              <span className={styles.letterTag}>{item.tag}</span>

              <div className={styles.statContent}>
                <div className={styles.statNumber}>{item.number}</div>
                <p className={styles.statLabel}>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
