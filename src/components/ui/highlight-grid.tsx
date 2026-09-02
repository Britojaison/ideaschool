"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HighlightItem {
  label: string;
  color?: string;
}

export interface HighlightGridProps {
  rows?: HighlightItem[][];
  colors?: string[];
  transitionDuration?: number;
  highlightFirst?: boolean;
  className?: string;
}

const DEFAULT_COLORS = [
  "#E24E1B",
  "#4381C1",
  "#F79824",
  "#04A777",
  "#5B8C5A",
  "#2176FF",
  "#818D92",
  "#22AAA1",
];

const DEFAULT_ROWS: HighlightItem[][] = [
  [{ label: "html" }, { label: "css" }, { label: "javascript" }],
  [{ label: "react" }, { label: "next.js" }, { label: "three.js" }],
];

export function HighlightGrid({
  rows = DEFAULT_ROWS,
  colors = DEFAULT_COLORS,
  transitionDuration = 250,
  highlightFirst = true,
  className,
}: HighlightGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const activeRef = useRef<{ index: number; color: string } | null>(null);
  const [active, setActive] = useState<number | null>(highlightFirst ? 0 : null);

  const gridRows = useMemo(() => {
    let index = 0;
    const palette = colors.length > 0 ? colors : DEFAULT_COLORS;

    return rows.map((row) =>
      row.map((item) => {
        const cellIndex = index++;
        return {
          label: item.label,
          color: item.color ?? palette[cellIndex % palette.length],
          index: cellIndex,
        };
      }),
    );
  }, [rows, colors]);

  const moveTo = useCallback((index: number, color: string) => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    const cell = cellRefs.current.get(index);
    if (!grid || !highlight || !cell) return;

    const cellRect = cell.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    highlight.style.transform = `translate(${cellRect.left - gridRect.left}px, ${cellRect.top - gridRect.top}px)`;
    highlight.style.width = `${cellRect.width}px`;
    highlight.style.height = `${cellRect.height}px`;
    highlight.style.backgroundColor = color;
    activeRef.current = { index, color };
  }, []);

  useEffect(() => {
    if (highlightFirst && gridRows[0]?.[0]) {
      const first = gridRows[0][0];
      const highlight = highlightRef.current;
      if (highlight) {
        highlight.style.transitionDuration = "0s";
        moveTo(first.index, first.color);
        requestAnimationFrame(() => {
          if (highlight) {
            highlight.style.transitionDuration = `${transitionDuration}ms`;
          }
        });
      }
    }

    const alignHighlight = () => {
      if (activeRef.current) {
        moveTo(activeRef.current.index, activeRef.current.color);
      }
    };
    const grid = gridRef.current;
    const resizeObserver = grid ? new ResizeObserver(alignHighlight) : null;
    resizeObserver?.observe(grid as Element);
    window.addEventListener("resize", alignHighlight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", alignHighlight);
    };
  }, [gridRows, highlightFirst, moveTo, transitionDuration]);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div
        ref={gridRef}
        className="relative mx-auto flex h-[60%] w-[90%] flex-col border border-black/15 dark:border-white/20"
      >
        <div
          ref={highlightRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.28), rgba(255,255,255,0) 52%), linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(0,0,0,0.22))",
            transitionProperty: "transform, width, height, background-color",
            transitionDuration: `${transitionDuration}ms`,
            transitionTimingFunction: "ease",
          }}
        />

        {gridRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "flex flex-1",
              rowIndex < gridRows.length - 1 &&
                "border-b border-black/15 dark:border-white/20",
            )}
          >
            {row.map((cell, cellIndex) => {
              const isActive = active === cell.index;

              return (
                <div
                  key={cell.index}
                  ref={(element) => {
                    if (element) cellRefs.current.set(cell.index, element);
                    else cellRefs.current.delete(cell.index);
                  }}
                  onPointerEnter={() => {
                    setActive(cell.index);
                    moveTo(cell.index, cell.color);
                  }}
                  className={cn(
                    "flex h-full flex-1 items-center justify-center",
                    cellIndex < row.length - 1 &&
                      "border-r border-black/15 dark:border-white/20",
                  )}
                >
                  <p
                    className={cn(
                      "relative z-[2] font-mono text-[13px] font-medium uppercase transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-neutral-600 dark:text-white/70",
                    )}
                  >
                    ( {cell.label} )
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightGrid;
