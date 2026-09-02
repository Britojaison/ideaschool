"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger if not already registered elsewhere, just to be safe
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisScroller({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Keep wheel scrolling responsive. A long easing duration makes pinned,
    // scroll-driven sections appear to advance after the user has stopped.
    const lenis = new Lenis({
      duration: 0.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    const handleProgrammaticScroll = (event: Event) => {
      const scrollEvent = event as CustomEvent<number | string | HTMLElement>;
      event.preventDefault();
      lenis.scrollTo(scrollEvent.detail, { duration: 1.0 });
    };
    window.addEventListener("idea-scroll-to", handleProgrammaticScroll);

    // Sync Lenis with GSAP's ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(500, 33);

    // Ensure all ScrollTriggers are properly sorted and aligned with Lenis
    requestAnimationFrame(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("idea-scroll-to", handleProgrammaticScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
