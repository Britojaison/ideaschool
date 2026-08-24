"use client";

import DiagonalCarousel from "@/components/ui/DiagonalCarousel";

const MENTORS = [
  { src: "/images/mentor_ARJUN.webp", title: "Dhananjayan . S", subtitle: "CEO, 88GB" },
  { src: "/images/mentor_PARIDHI.webp", title: "Elamparithi", subtitle: "Head of Design, 88GB" },
  { src: "/images/mentor_AJAY.webp", title: "Ajay Karthik", subtitle: "Video Editor, 88GB" },
  { src: "/images/mentor_CHANDRU.webp", title: "Chandrasoodeshwar", subtitle: "Senior Creative Strategist, 88GB" },
];

export default function MentorsDiagonal() {
  return (
    <section className="cinematicMentorsDiagonal" id="mentor" aria-label="Mentors guiding the program" data-header-theme="dark">
      <div className="mentorDiagonalCarousel">
        <DiagonalCarousel
          items={MENTORS}
          defaultActiveIndex={1}
          loop
          slideSize={320}
          rotationStep={27}
          verticalStep={116}
          inactiveScale={0.62}
          labelClassName="mentorCarouselLabel"
          imageClassName="mentorCarouselImage"
          controlsClassName="mentorCarouselControls"
        />
      </div>
    </section>
  );
}
