"use client";

import { useEffect, useRef } from "react";

const standOutAvoids = [
  "No preset dumping without creative judgment.",
  "No passive watching dressed up as training.",
  "No portfolio promises without weekly output.",
];

const standOutPrinciples = [
  {
    title: "Craft Before Shortcuts",
    description:
      "Students learn pacing, story, sound, design, and feedback discipline before leaning on plugins or AI tools.",
  },
  {
    title: "Practice Before Presentation",
    description:
      "Every week ends with something students can review, improve, and carry into a stronger body of work.",
  },
  {
    title: "Studio Habits Before Hype",
    description:
      "The program trains file discipline, client-style briefs, critique cycles, and delivery standards used in real creative teams.",
  },
];

export default function StandOutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollDirectionRef = useRef<"down" | "up">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      section.classList.add("is-stroke-drawn", "is-content-visible", "stroke-from-top");
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirectionRef.current = currentScrollY >= lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          section.classList.remove("is-stroke-drawn", "is-content-visible");
          return;
        }

        const directionClass = scrollDirectionRef.current === "up" ? "stroke-from-bottom" : "stroke-from-top";
        section.classList.remove("is-stroke-drawn", "is-content-visible", "stroke-from-top", "stroke-from-bottom");
        void section.offsetWidth;
        section.classList.add(directionClass, "is-stroke-drawn", "is-content-visible");
      },
      { threshold: 0.34 }
    );

    observer.observe(section);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="longCourseStandOut" aria-label="Why this program stands out" ref={sectionRef}>
      <div className="longCourseSectionInner standOutGrid">
        <div className="standOutIntro">
          <span className="sectionPill">Why We Stand Out</span>
          <div className="standOutTitleWrap">
            <div className="standOutBrushStrokes" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <span className="standOutBrushStroke" key={index} />
              ))}
            </div>
            <h2>Built For Editors Who Need More Than Software Lessons</h2>
          </div>

          <div className="standOutAvoidList">
            {standOutAvoids.map((item) => (
              <div className="standOutAvoidItem" key={item}>
                <span aria-hidden="true">×</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <a className="primaryCta programCta standOutCta" href="#apply">
            <span className="primaryCtaText">Apply Now</span>
          </a>
        </div>

        <div className="standOutPrinciples">
          <h3>This program is shaped by three studio principles:</h3>
          <div className="standOutPrincipleList">
            {standOutPrinciples.map((principle, index) => (
              <article className="standOutPrinciple" key={principle.title}>
                <h4>
                  {index + 1}. {principle.title}
                </h4>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
