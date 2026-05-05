"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Shreya Nair",
    role: "Student, Creative + AI Program",
    image: "/images/img1.jpg",
    quote:
      "This program completely changed how I approach content creation. The practical sessions and real projects helped me understand industry workflows and build confidence in my work.",
    note:
      "The hands-on learning and guidance from mentors made a huge difference in my growth.",
  },
  {
    name: "Aarav Menon",
    role: "Student, Editing Workshop",
    image: "/images/img3.jpg",
    quote:
      "I finally understood how to turn ideas into strong videos. Every session pushed me to make, review, and improve instead of only watching tutorials.",
    note:
      "The feedback loops and project practice made the learning feel real.",
  },
  {
    name: "Maya Joseph",
    role: "Student, Content Systems",
    image: "/images/img4.jpg",
    quote:
      "The program helped me build confidence with planning, shooting, editing, and presenting my work. I left with a clearer process and a stronger portfolio.",
    note:
      "Working on actual briefs made the biggest difference.",
  },
  {
    name: "Dev Kumar",
    role: "Student, AI Creative Tools",
    image: "/images/img5.jpg",
    quote:
      "Learning AI tools through practical creative tasks helped me understand where they fit in a real workflow without losing my own creative direction.",
    note:
      "The mentors kept everything practical and easy to apply.",
  },
];

export default function FeedbackTestimonials() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef<number | undefined>(undefined);
  const selectedTestimonial = testimonials[selectedIndex];
  const visibleTestimonials = [-1, 0, 1].map((offset) => {
    const index = (selectedIndex + offset + testimonials.length) % testimonials.length;

    return {
      index,
      testimonial: testimonials[index],
      isActive: offset === 0,
    };
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      setSelectedIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const selectTestimonial = (index: number) => {
    isPausedRef.current = true;
    window.clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 9000);
    setSelectedIndex(index);
  };

  return (
    <div className="testimonialShell">
      <div className="testimonialAvatars" aria-label="Featured students">
        {visibleTestimonials.map(({ testimonial, index, isActive }) => (
          <button
            className={`testimonialAvatar${isActive ? " active" : ""}`}
            type="button"
            key={`${testimonial.name}-${index}`}
            aria-label={`Show student feedback ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => selectTestimonial(index)}
          >
            <Image
              src={testimonial.image}
              alt=""
              fill
              sizes={isActive ? "156px" : "156px"}
              className="testimonialAvatarImage"
            />
          </button>
        ))}
      </div>

      <article className="testimonialCard">
        <div className="testimonialCopy">
          <Image
            src="/images/quote.svg"
            alt=""
            width={136}
            height={100}
            className="quoteMark"
            aria-hidden="true"
          />
          <blockquote>{selectedTestimonial.quote}</blockquote>
          <p>{selectedTestimonial.note}</p>
          <footer>
            <strong>{selectedTestimonial.name}</strong>
            <span>{selectedTestimonial.role}</span>
          </footer>
          <div className="testimonialRule" aria-hidden="true" />
          <span className="testimonialStars" aria-label="5 out of 5 stars">
            *****
          </span>
        </div>

        <div className="testimonialImageWrap">
          <Image
            key={selectedTestimonial.image}
            src={selectedTestimonial.image}
            alt="Idea School students and mentors"
            fill
            sizes="(max-width: 980px) 100vw, 350px"
            className="testimonialImage"
          />
        </div>
      </article>
    </div>
  );
}
