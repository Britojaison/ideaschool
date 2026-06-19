import React from "react";

export default function WorkshopCurriculumFlow() {
  return (
    <section className="curriculumFlowSection workshopGsapSection" aria-label="Workshop Curriculum" style={{ minHeight: "150vh" }}>
      <div className="curriculumFlowBgText">
        <div className="whatYouWillLearnHugeText">WHAT YOU&apos;LL LEARN</div>
        {/* Full-screen image that travels with the text then reveals */}
        <div className="curriculumFlowRevealImage">
          <img
            src="/images/DSC01035.webp"
            alt="Idea School workshop in action"
            className="curriculumFlowRevealImg"
          />
        </div>
      </div>
    </section>
  );
}
