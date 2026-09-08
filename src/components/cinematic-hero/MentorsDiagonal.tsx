"use client";

import DiagonalCarousel from "@/components/ui/DiagonalCarousel";
import TextAnimation from "@/components/ui/staggerText";

const MENTORS = [
  { src: "/assets/images/mentor_ARJUN.webp", title: "Dhananjayan S.", subtitle: "CEO, 88GB" },
  { src: "/assets/images/wepparithi12.webp", title: "Elamparithi", subtitle: "Head of Design, 88GB" },
  { src: "/assets/images/mentor_AJAY.webp", title: "Ajay Karthik", subtitle: "Video Editor, 88GB" },
  { src: "/assets/images/mentor_CHANDRU.webp", title: "Chandrasoodeshwar", subtitle: "Senior Creative Strategist, 88GB" },
];

export default function MentorsDiagonal() {
  return (
    <section className="cinematicMentorsDiagonal" id="mentor" aria-label="Learn with people who work inside the industry" data-header-theme="light">
      <div className="mentorSectionHeading">
        <p>
          <TextAnimation divideBy="word">Mentors</TextAnimation>
        </p>
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
