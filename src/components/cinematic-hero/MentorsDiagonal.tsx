"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DiagonalCarousel from "@/components/ui/DiagonalCarousel";
import TextAnimation from "@/components/ui/staggerText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MENTORS = [
  { src: "/assets/images/mentor_ARJUN.webp", title: "Dhananjayan S.", subtitle: "CEO, 88GB" },
  { src: "/assets/images/wepparithi12.webp", title: "Elamparithi", subtitle: "Head of Design, 88GB" },
  { src: "/assets/images/mentor_AJAY.webp", title: "Ajay Karthik", subtitle: "Video Editor, 88GB" },
  { src: "/assets/images/mentor_CHANDRU.webp", title: "Chandrasoodeshwar", subtitle: "Senior Creative Strategist, 88GB" },
];

export default function MentorsDiagonal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Smoothly transition background from dark (#080808) to warm cream/white (#FBFAF2)
      gsap.fromTo(
        section,
        {
          backgroundColor: "#080808",
        },
        {
          backgroundColor: "#FBFAF2",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.8,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="cinematicMentorsDiagonal" 
      id="mentor" 
      aria-label="Learn with people who work inside the industry" 
      data-header-theme="light"
    >
      <div className="mentorSectionHeading">
        <h2>
          <TextAnimation divideBy="word" delay={0.1}>Learn With People Who Work Inside The Industry.</TextAnimation>
        </h2>
      </div>
      <div className="mentorDiagonalCarousel">
        <DiagonalCarousel
          items={MENTORS}
          defaultActiveIndex={0}
          loop
          className="mentorCarouselRoot"
          viewportClassName="mentorCarouselViewport"
          slideSize={390}
          rotationStep={27}
          verticalStep={132}
          inactiveScale={0.68}
          labelClassName="mentorCarouselLabel"
          imageClassName="mentorCarouselImage"
          controlsClassName="mentorCarouselControls"
        />
      </div>
    </section>
  );
}
