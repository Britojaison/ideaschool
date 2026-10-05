"use client";

import { useEffect, useRef } from "react";

type ScheduleItem = {
  day: string;
  activity: string;
  objective: string;
};

type ScheduleSectionProps = {
  items: ScheduleItem[];
};

export default function ScheduleSection({ items }: ScheduleSectionProps) {
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
    <section className="longCourseSchedule" id="schedule" aria-label="Weekly schedule" ref={sectionRef}>
      <div className="longCourseSectionInner splitSection">
        <div className="longCourseIntro">
          <span className="sectionPill">Weekly Rhythm</span>
          <div className="scheduleTitleWrap">
            <h2>Structured Practice, Feedback, And Delivery</h2>
          </div>
          <p>
            The week is designed around learning, doing, review, and completion so students
            stay consistent instead of waiting until the deadline.
          </p>
        </div>

        <div className="scheduleList">
          {items.map((item) => (
            <article className="scheduleItem" key={item.day}>
              <span>{item.day}</span>
              <div>
                <h3>{item.activity}</h3>
                <p>{item.objective}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
