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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      section.classList.add("is-content-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          section.classList.remove("is-content-visible");
          return;
        }

        section.classList.add("is-content-visible");
      },
      { threshold: 0.34 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="longCourseStandOut" aria-label="Why this program stands out" ref={sectionRef}>
      <div className="longCourseSectionInner standOutGrid">
        <div className="standOutIntro">
          <span className="sectionPill">Why We Stand Out</span>
          <div className="standOutTitleWrap">
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

          <button
            type="button"
            className="primaryCta programCta standOutCta"
            onClick={() => window.dispatchEvent(new Event("open-home-form"))}
            suppressHydrationWarning
          >
            <span className="primaryCtaText">Apply Now</span>
          </button>
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
