"use client";

import { useEffect } from "react";

const scrollDelays = [0, 80, 220, 500, 900, 1400];

function scrollToCurrentHash(behavior: ScrollBehavior = "auto") {
  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));

  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior, block: "start" });
}

export default function HashScrollFix() {
  useEffect(() => {
    let timers: number[] = [];

    const scheduleScroll = (behavior: ScrollBehavior = "auto") => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers = scrollDelays.map((delay) =>
        window.setTimeout(() => scrollToCurrentHash(behavior), delay)
      );
    };

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]'
      );

      if (!link) {
        return;
      }

      const url = new URL(link.href);

      if (url.pathname === window.location.pathname && url.hash) {
        window.setTimeout(() => scheduleScroll("smooth"), 0);
      }
    };

    const handleHashChange = () => scheduleScroll();

    scheduleScroll();
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleClick);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
