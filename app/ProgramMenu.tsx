"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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
    badge: "Online Workshop",
    badgeClass: "isOnline",
    link: "/master-video-editing",
    image: "/images/video-editing.jpeg",
  },
];

interface ProgramMenuProps {
  isOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ProgramMenu({
  isOpen: controlledIsOpen,
  onMouseEnter: controlledOnMouseEnter,
  onMouseLeave: controlledOnMouseLeave,
}: ProgramMenuProps = {}) {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : localIsOpen;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (isControlled) {
      controlledOnMouseEnter?.();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setLocalIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isControlled) {
      controlledOnMouseLeave?.();
    } else {
      timeoutRef.current = setTimeout(() => {
        setLocalIsOpen(false);
      }, 150); // 150ms buffer to allow cursor to cross the gap
    }
  };

  const handleClose = () => {
    if (isControlled) {
      controlledOnMouseLeave?.();
    } else {
      setLocalIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const panel = document.querySelector(".programMenuPanel");
      const trigger = document.querySelector(".programMenuTrigger");
      const cta = document.querySelector(".headerCta");

      if (
        panel && !panel.contains(event.target as Node) &&
        trigger && !trigger.contains(event.target as Node) &&
        cta && !cta.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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

      {isOpen && mounted && createPortal(
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
              onClick={handleClose}
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
        </div>,
        document.body
      )}
    </div>
  );
}
