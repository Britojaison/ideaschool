"use client";

import React from "react";
import MagneticSpotlightMarquee from "@/components/ui/MagneticSpotlightMarquee";

const GALLERY_IMAGES = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
  "/images/gallery10.webp",
  "/images/gallery11.webp",
  "/images/gallery12.webp",
  "/images/gallery13.webp",
  "/images/gallery14.webp",
  "/images/gallery15.webp",
  "/images/gallery16.webp",
  "/images/gallery17.webp",
  "/images/gallery18.webp",
];

export default function CourseGallery() {
  return (
    <MagneticSpotlightMarquee
      images={GALLERY_IMAGES}
      title={["IdeaSchool", "Gallery"]}
      subtitle={["STUDENT WORK", "CREATIVE EXCELLENCE"]}
      paragraphs={[
        [
          "Explore the incredible work produced by our students.",
          "From cinematic editing to high-end VFX, our gallery",
          "showcases the diverse talent and creativity",
          "fostered at IdeaSchool.",
        ],
        [
          "We push boundaries in visual storytelling.",
          "Every project is a testament to the rigorous",
          "training and industry-standard tools our",
          "students master during their time with us."
        ]
      ]}
      navEmail=""
      navLinks="Courses, Workshops, Community"
      footerText="Empowering the next generation of visual artists and storytellers. IdeaSchool is your partner in creative excellence."
    />
  );
}
