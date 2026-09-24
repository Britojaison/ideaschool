"use client";

import React from "react";
import Image from "next/image";
import styles from "./StudentTestimonials.module.css";
import ScrollHighlight from "@/components/ui/ScrollHighlight";

const testimonials = [
  {
    name: "Manjunath Hegde",
    role: "Video Editor & Motion Designer",
    image: "/images/videofullcourse/MANJUNATH HEGDE - PROFILE.webp",
    quote:
      "Working on real agency briefs completely changed how I approach storytelling and pacing. The mentor feedback and studio deadlines gave me the confidence to handle commercial client projects seamlessly.",
    tag: "Commercial Editor",
    highlight: "Agency-Ready Output",
  },
  {
    name: "Heren",
    role: "Creative AI & Video Specialist",
    image: "/images/videofullcourse/PROFILE heren.webp",
    quote:
      "Learning both core editing discipline and cutting-edge Gen AI workflows gave me an unfair advantage. I went from editing standard videos to directing complex, visual-heavy campaigns.",
    tag: "AI Direction",
    highlight: "Next-Gen Workflows",
  },
  {
    name: "Alok",
    role: "Post-Production Specialist",
    image: "/images/videofullcourse/PROFILE.webp",
    quote:
      "The hands-on environment and direct critique from industry professionals were invaluable. By week 12, my showreel was stronger than what I had managed to build in two years on my own.",
    tag: "Showreel & Craft",
    highlight: "Studio Discipline",
  },
];

export default function StudentTestimonials() {
  return (
    <section
      id="student-testimonials"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Hear from our students"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>HEAR FROM OUR </span>
            <span className={styles.highlightWord}>STUDENTS.</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.studentImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.quoteWrap}>
                  <span className={styles.quoteMark} aria-hidden="true">“</span>
                  <p className={styles.quoteText}>{t.quote}</p>
                </div>

                <div className={styles.authorFooter}>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{t.name}</h3>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
