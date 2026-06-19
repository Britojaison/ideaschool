"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Mentor {
  name: string;
  role: string;
  image: string;
  accent: string;
}

export default function WorkshopInstructorImage({ mentor }: { mentor: Mentor }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-[calc(100%-2rem)] aspect-square lg:flex-1 lg:w-auto lg:aspect-auto lg:min-h-[100vh] mx-4 mb-8 lg:mx-0 lg:mb-0 rounded-2xl lg:rounded-none overflow-hidden">
      <div ref={imageRef} style={{ position: "absolute", top: "-20%", left: 0, right: 0, bottom: "-20%" }}>
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
      
      {/* Nameplate */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-12 lg:left-12 lg:right-auto lg:min-w-[280px] w-auto bg-gradient-to-br from-[#ffffff] to-[#eef2f6] p-4 lg:px-6 lg:py-5 rounded-xl lg:rounded-2xl z-20 shadow-xl border border-white/50 backdrop-blur-sm">
        <h3 className="text-lg lg:text-2xl font-bold text-black m-0 mb-1">{mentor.name}</h3>
        <p className="text-slate-600 m-0 text-sm lg:text-base">{mentor.role}</p>
      </div>
    </div>
  );
}
