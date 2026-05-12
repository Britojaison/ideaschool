"use client";

import Image from "next/image";
import { useState } from "react";

const mentors = [
  {
    image: "/images/zAMAN 2.png",
    name: "ZAMAN",
    role: "Mentor",
  },
  {
    image: "/images/VIPIN-3.png",
    name: "VIPIN",
    role: "Mentor",
  },
  {
    image: "/images/pATRTHI.png",
    name: "PARIDHI",
    role: "Mentor",
  },
  {
    image: "/images/aRJUN 2.png",
    name: "ARJUN",
    role: "Mentor",
  },
  {
    image: "/images/CHANDRU.png",
    name: "CHANDRU",
    role: "Mentor",
  },
  {
    image: "/images/aJAY 2.png",
    name: "AJAY",
    role: "Mentor",
  },
  {
    image: "/images/ANUSHYA.png",
    name: "ANUSHYA",
    role: "Mentor",
  },
];

export default function MentorCarousel() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div className="mentorCarousel" aria-label="Featured mentor">
      {mentors.map((mentor, index) => {
        const isActive = index === activeIndex;
        const distance = Math.abs(index - activeIndex);
        const variant = isActive
          ? "active"
          : distance >= 3
            ? "edge"
            : distance === 2
              ? "near"
              : "mid";

        return (
          <button
            className={`mentorCard ${variant}`}
            key={`${mentor.name}-${index}`}
            type="button"
            aria-current={isActive ? "true" : undefined}
            aria-label={`Show ${mentor.name}`}
            onClick={() => setActiveIndex(index)}
          >
            {isActive ? (
              <span className="mentorInfo">
                <span>{mentor.role}</span>
                <strong>{mentor.name}</strong>
              </span>
            ) : null}
            <Image
              src={mentor.image}
              alt={isActive ? mentor.name : ""}
              fill
              sizes={isActive ? "486px" : "240px"}
              quality={100}
              priority
              className="mentorImage"
            />
          </button>
        );
      })}
    </div>
  );
}
