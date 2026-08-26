"use client";

import DiagonalCarousel from "@/components/ui/DiagonalCarousel";

const MENTORS = [
  { src: "/assets/images/mentor_ARJUN.webp", title: "Dhananjayan . S", subtitle: "CEO, 88GB" },
  { src: "/assets/images/mentor_PARITHI.webp", title: "Elamparithi", subtitle: "Head of Design, 88GB" },
  { src: "/assets/images/mentor_AJAY.webp", title: "Ajay Karthik", subtitle: "Video Editor, 88GB" },
  { src: "/assets/images/mentor_CHANDRU.webp", title: "Chandrasoodeshwar", subtitle: "Senior Creative Strategist, 88GB" },
];

export default function MentorsDiagonal() {
  return (
    <section className="cinematicMentorsDiagonal" id="mentor" aria-label="Mentors guiding the program" data-header-theme="light">
      <div className="mentorSectionHeading">
        <p>Guided By Experts</p>
        <h2>Mentors Guiding The Program</h2>
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
