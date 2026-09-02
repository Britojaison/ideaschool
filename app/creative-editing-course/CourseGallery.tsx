"use client";

import React from "react";
import MagneticSpotlightMarquee from "@/components/ui/MagneticSpotlightMarquee";

const GALLERY_IMAGES = [
  "/images/DSC00024.webp",
  "/images/DSC00033.webp",
  "/images/DSC00041.webp",
  "/images/DSC00048.webp",
  "/images/DSC00057.webp",
  "/images/DSC00093.webp",
  "/images/DSC00123.webp",
  "/images/DSC00232.webp",
  "/images/DSC00298.webp",
  "/images/DSC00334.webp",
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
      className="!bg-[#FBFAF2]"
      images={GALLERY_IMAGES}
      title={["IdeaSchool", "Gallery"]}
      subtitle={["STUDENT WORK", "CREATIVE EXCELLENCE"]}
      paragraphs={[
        [
          "Explore commercial editing, visual storytelling, and high-end VFX produced by our students.",
          "Every project showcases rigorous craft, creative voice, and industry-standard training."
        ]
      ]}
      navEmail=""
      navLinks=""
      footerText=""
    />
  );
}
