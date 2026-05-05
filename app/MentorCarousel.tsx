"use client";

import Image from "next/image";
import { useState } from "react";

const mentors = [
  {
    image: "/images/pujeeth.png",
    name: "Pujeeth",
    role: "Mentor",
  },
  {
    image: "/images/vipin.png",
    name: "Vipin",
    role: "Mentor",
  },
  {
    image: "/images/parithi.png",
    name: "Parithi",
    role: "Mentor",
  },
  {
    image: "/images/arjunai.png",
    name: "Dhananjayan . S",
    role: "CEO ,88GB",
  },
  {
    image: "/images/parithi.png",
    name: "Parithi",
    role: "Mentor",
  },
  {
    image: "/images/vipin.png",
    name: "Vipin",
    role: "Mentor",
  },
  {
    image: "/images/pujeeth.png",
    name: "Pujeeth",
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
              sizes={isActive ? "486px" : "120px"}
              quality={100}
              priority={isActive}
              className="mentorImage"
            />
          </button>
        );
      })}
    </div>
  );
}
