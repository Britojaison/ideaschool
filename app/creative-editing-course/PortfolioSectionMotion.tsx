"use client";

import { useEffect } from "react";

export default function PortfolioSectionMotion() {
  useEffect(() => {
    const section = document.getElementById("portfolio");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || reduceMotion.matches) {
      return undefined;
    }

    section.classList.add("has-portfolio-motion");

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("is-portfolio-visible", entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -16% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      section.classList.remove("has-portfolio-motion", "is-portfolio-visible");
    };
  }, []);

  return null;
}
