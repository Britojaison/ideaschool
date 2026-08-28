"use client";

import { useEffect, useState } from "react";

export default function CustomAnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to avoid flash on mobile

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    // We inject a global style to force cursor: none ONLY on clickable elements
    // so the normal cursor shows everywhere else
    const style = document.createElement("style");
    style.innerHTML = `
      a, button, [role="button"], input[type="submit"], input[type="button"], label[for], select, summary,
      a *, button *, [role="button"] * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      // Hide cursor when leaving the window
      if (e.relatedTarget === null) {
        setIsVisible(false);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if we are hovering over an interactive element
      const isClickable = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], label[for], select, summary'
      );
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mouseover", onMouseOver);
      document.head.removeChild(style);
    };
  }, [isTouchDevice, isVisible]);

  // Only render the custom cursor if we are visibly hovering over a pointer element
  if (isTouchDevice || !isVisible || !isPointer) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        // Offset adjustments based on the tip of the T-Rex
        marginLeft: "-6px",
        marginTop: "-2px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/cursor/chrome-trex/pointer-32.png"
        alt=""
        width={32}
        height={32}
        draggable={false}
      />
    </div>
  );
}
