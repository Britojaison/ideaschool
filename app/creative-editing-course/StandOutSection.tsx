"use client";

import Image from "next/image";
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
  const scrollPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 980) return;

      const panel = scrollPanelRef.current;
      if (!panel || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const sectionRect = section.getBoundingClientRect();
      const isPinnedView = sectionRect.top <= 2 && sectionRect.bottom >= window.innerHeight - 2;
      if (!isPinnedView) return;

      const maxScroll = panel.scrollHeight - panel.clientHeight;
      if (maxScroll <= 1) return;

      const isScrollingDown = event.deltaY > 0;
      const canScrollDown = panel.scrollTop < maxScroll - 1;
      const canScrollUp = panel.scrollTop > 1;

      if ((isScrollingDown && canScrollDown) || (!isScrollingDown && canScrollUp)) {
        event.preventDefault();
        if (Math.abs(sectionRect.top) > 1) {
          window.scrollBy({ top: sectionRect.top, behavior: "auto" });
        }
        panel.scrollTop += event.deltaY;
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="longCourseStandOut" aria-label="Why this program stands out" ref={sectionRef}>
      <div className="longCourseSectionInner standOutGrid">
        <div className="standOutIntro">
          <span className="sectionPill">Why We Stand Out</span>
          <h2>Built For Editors Who Need More Than Software Lessons</h2>

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

        <div className="standOutPrinciples" ref={scrollPanelRef}>
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

          <div className="standOutImageWrap">
            <Image
              src="/images/DSC01109.JPG"
              alt="Idea School mentor guiding a creative training session"
              fill
              loading="lazy"
              decoding="async"
              sizes="(max-width: 980px) 100vw, 620px"
              className="standOutImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
