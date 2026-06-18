"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";

const attendeesData = [
  {
    text: "Freelancers who want to offer video editing services and increase their income",
    image: "/images/whoContent Creators.webp"
  },
  {
    text: "College students seeking a high-demand skill with freelancing and career opportunities",
    image: "/images/whoStudents & Career Switchers.webp"
  },
  {
    text: "Video editors with basic skills who want to level up, increase earning potential, and work on higher-value projects",
    image: "/images/whoPhotographers & Videographers.webp"
  }
];

export default function WorkshopAttendeesList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth following
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate position relative to container center
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div 
      className="attendeesList" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{ position: "relative" }}
    >
      {attendeesData.map((attendee, index) => (
        <div 
          className="attendeeCard" 
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <div className="attendeeCardInner">
            <p>{attendee.text}</p>
          </div>
        </div>
      ))}

      {/* Floating Image */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          x: smoothX,
          y: smoothY,
          width: "300px",
          height: "200px",
          marginTop: "-100px", // half height to center
          marginLeft: "-150px", // half width to center
          pointerEvents: "none",
          zIndex: 10,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
          rotate: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? 3 : -3) : 0,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.4, type: "spring" }, rotate: { duration: 0.4 } }}
      >
        {attendeesData.map((attendee, index) => (
          <Image
            key={index}
            src={attendee.image}
            alt="Attendee"
            fill
            style={{
              objectFit: "cover",
              opacity: hoveredIndex === index ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
