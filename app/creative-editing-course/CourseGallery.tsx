"use client";

import React from "react";
import MagneticSpotlightMarquee from "@/components/ui/MagneticSpotlightMarquee";

const GALLERY_IMAGES = [
  "/images/DSC00024.JPG",
  "/images/DSC00033.JPG",
  "/images/DSC00041.JPG",
  "/images/DSC00048.JPG",
  "/images/DSC00057.JPG",
  "/images/DSC00093.JPG",
  "/images/DSC00123.JPG",
  "/images/DSC00232.JPG",
  "/images/DSC00298.JPG",
  "/images/DSC00334.JPG",
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
      navLinks=""
      footerText=""
    />
  );
}
