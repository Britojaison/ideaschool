"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "Creative Editing",
    subtitle: "Art & systems of editing",
    badge: "6 Months Program",
    badgeClass: "isOffline",
    link: "/creative-editing-course",
    image: "/images/DSC01109.webp",
    imageClass: "programMenuImageCreative",
  },
  {
    title: "AI Ad Filmmaking",
    subtitle: "Cinematic ads using AI",
    badge: "Offline Workshop",
    badgeClass: "isOffline",
    link: "/ad-film-making",
    image: "/images/3690ba0056dc8b622457a2356266c582d8917011 copy.webp",
  },
  {
    title: "Master Video Editing",
    subtitle: "Higgsfield, Premiere & AE",
    badge: "Online Course",
    badgeClass: "isOnline",
    link: "/master-video-editing",
    image: "/images/video-editing.jpeg",
  },
];

export default function ProgramMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms buffer to allow cursor to cross the gap
  };

  return (
    <div
      className="programMenu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="programMenuTrigger"
        aria-expanded={isOpen}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        style={{ outline: "none" }}
      >
        Courses
      </button>

      {isOpen && (
        <div
          className="programMenuPanel"
          role="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {courses.map((course) => (
            <Link
              key={course.link}
              href={course.link}
              className="programMenuBanner"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 980px) 100vw, 300px"
                className={`programMenuImage ${course.imageClass || ""}`}
              />
              <div className="programMenuScrim" />
              {course.badge && (
                <span className={`programMenuBadge ${course.badgeClass || ""}`}>{course.badge}</span>
              )}
              <div className="programMenuCopy">
                <strong>{course.title}</strong>
                <em>{course.subtitle}</em>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
