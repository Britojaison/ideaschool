"use client";

import Image from "next/image";
import { useState } from "react";

const mentors = [
  {
    image: "/images/zAMAN 2.png",
    name: "ZAMAN",
    role: "Head ofGrowth",
  },
  {
    image: "/images/VIPIN-3.png",
    name: "VIPIN",
    role: "Senior Visualiser",
  },
  {
    image: "/images/pATRTHI.png",
    name: "PARIDHI",
    role: "Head of Design",
  },
  {
    image: "/images/aRJUN 2.png",
    name: "ARJUN",
    role: "CEO",
  },
  {
    image: "/images/CHANDRU.png",
    name: "CHANDRU",
    role: "Senior Creative Stratagist",
  },
  {
    image: "/images/aJAY 2.png",
    name: "AJAY",
    role: "Video Editor",
  },
  {
    image: "/images/ANUSHYA.png",
    name: "ANUSHYA",
    role: "Design Lead",
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
            <span className="mentorInfo">
              <span>{mentor.role}</span>
              <strong>{mentor.name}</strong>
            </span>
            <Image
              src={mentor.image}
              alt={mentor.name}
              fill
              sizes={
                isActive
                  ? "(max-width: 640px) calc(100vw - 36px), (max-width: 980px) calc(100vw - 36px), 486px"
                  : "(max-width: 640px) calc(100vw - 36px), 240px"
              }
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
