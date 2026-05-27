"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  profileImage: string;
  workImage: string;
  quote: string;
  note?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "HIREN METHA",
    role: "Workshop participant",
    profileImage: "/images/PROFILE heren.webp",
    workImage: "/images/WORK heren.webp",
    quote:
      "The workshop gave me the tools to turn my traditional family business into a modern brand.",
  },
  {
    name: "MANJUNATH HEGDE",
    role: "Workshop participant",
    profileImage: "/images/MANJUNATH HEGDE - PROFILE.webp",
    workImage: "/images/WORK 2.webp",
    quote:
      "This workshop filled the market gap for hands-on AI training perfectly. Loved the interactive vibe.",
  },
  {
    name: "IDEA SCHOOL STUDENT",
    role: "Workshop participant",
    profileImage: "/images/PROFILE.webp",
    workImage: "/images/WORK.webp",
    quote:
      "Skipping my travel plans for this offline training was worth it. The creative guidance was excellent.",
  },
];

export default function FeedbackTestimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
              src={testimonial.profileImage}
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
          <span className="testimonialStars" aria-label="5 out of 5 stars">
            *****
          </span>
          <blockquote>{selectedTestimonial.quote}</blockquote>
          {selectedTestimonial.note ? <p>{selectedTestimonial.note}</p> : null}
          <footer>
            <strong>{selectedTestimonial.name}</strong>
            <span>{selectedTestimonial.role}</span>
          </footer>
          <div className="testimonialRule" aria-hidden="true" />
        </div>

        <div className="testimonialImageWrap">
          <Image
            key={selectedTestimonial.workImage}
            src={selectedTestimonial.workImage}
            alt={`${selectedTestimonial.name} workshop work`}
            fill
            sizes="(max-width: 980px) 100vw, 350px"
            className="testimonialImage"
          />
        </div>
      </article>
    </div>
  );
}
