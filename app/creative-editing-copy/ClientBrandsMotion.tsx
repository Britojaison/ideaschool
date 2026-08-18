"use client";

import { useEffect } from "react";

export default function ClientBrandsMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".clientBrandsSection");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || reduceMotion.matches) {
      return undefined;
    }

    section.classList.add("has-brands-motion");

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("is-brands-visible", entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      section.classList.remove("has-brands-motion", "is-brands-visible");
    };
  }, []);

  return null;
}
