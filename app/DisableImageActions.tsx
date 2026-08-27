"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DisableImageActions() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const resetToHero = () => {
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }

      window.scrollTo(0, 0);
    };

    const resetWithRetries = () => {
      resetToHero();
      requestAnimationFrame(resetToHero);
      window.setTimeout(resetToHero, 80);
      window.setTimeout(resetToHero, 250);
      window.setTimeout(resetToHero, 700);
    };

    resetToHero();
    window.addEventListener("pageshow", resetWithRetries);
    window.addEventListener("load", resetWithRetries);

    return () => {
      window.removeEventListener("pageshow", resetWithRetries);
      window.removeEventListener("load", resetWithRetries);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/" || window.location.hash) {
      return;
    }

    const resetToTop = () => window.scrollTo(0, 0);

    resetToTop();
    requestAnimationFrame(resetToTop);
    window.setTimeout(resetToTop, 80);
    window.setTimeout(resetToTop, 250);
  }, [pathname]);

  useEffect(() => {
    const isImageTarget = (target: EventTarget | null) =>
      target instanceof HTMLElement && Boolean(target.closest("img"));

    const preventImageAction = (event: Event) => {
      if (isImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventImageAction);
    document.addEventListener("dragstart", preventImageAction);

    return () => {
      document.removeEventListener("contextmenu", preventImageAction);
      document.removeEventListener("dragstart", preventImageAction);
    };
  }, []);

  return null;
}
