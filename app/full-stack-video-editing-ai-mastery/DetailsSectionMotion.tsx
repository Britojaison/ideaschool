"use client";

import { useEffect } from "react";

export default function DetailsSectionMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".longCourseDetails");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || reduceMotion.matches) {
      return undefined;
    }

    section.classList.add("has-details-motion");

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("is-details-visible", entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      section.classList.remove("has-details-motion", "is-details-visible");
    };
  }, []);

  return null;
}
