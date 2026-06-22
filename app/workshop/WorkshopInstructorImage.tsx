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
    <div className="flex-1 w-full flex items-center justify-center p-6 md:p-12 lg:p-16 bg-white lg:bg-transparent">
      <div ref={containerRef} className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
        <div ref={imageRef} style={{ position: "absolute", top: "-10%", left: 0, right: 0, bottom: "-10%" }}>
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
        
        {/* Sleek Glass Nameplate */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl z-20 shadow-2xl transition-transform hover:-translate-y-1 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl lg:text-3xl font-bold text-white m-0 mb-1 drop-shadow-md">{mentor.name}</h3>
              <p className="text-[#dafd55] font-semibold m-0 tracking-wide uppercase text-xs lg:text-sm">{mentor.role}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#dafd55] flex items-center justify-center shadow-[0_0_15px_rgba(218,253,85,0.5)] flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
