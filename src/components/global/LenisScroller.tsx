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
    // Initialize a tuned Lenis instance for ultra-responsive smooth scrolling
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
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

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("idea-scroll-to", handleProgrammaticScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
