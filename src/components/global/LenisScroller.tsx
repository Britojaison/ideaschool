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
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    const handleProgrammaticScroll = (event: Event) => {
      const scrollEvent = event as CustomEvent<number | string | HTMLElement>;
      event.preventDefault();
      lenis.scrollTo(scrollEvent.detail, { duration: 1.2 });
    };
    window.addEventListener("idea-scroll-to", handleProgrammaticScroll);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    const update = (time: number) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    };
    
    gsap.ticker.add(update);

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("idea-scroll-to", handleProgrammaticScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
