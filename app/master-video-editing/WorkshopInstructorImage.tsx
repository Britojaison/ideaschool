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
      <div ref={containerRef} className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[10px_10px_0_0_#151515] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-300">
        <div ref={imageRef} style={{ position: "absolute", top: "-10%", left: 0, right: 0, bottom: "-10%" }}>
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
        
        {/* Brutalist Pop Nameplate */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white border-[3px] border-black p-5 rounded-2xl z-20 shadow-[6px_6px_0_0_#151515] transition-transform hover:-translate-y-1 duration-300 group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-black m-0 mb-1 uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)", letterSpacing: "1px" }}>{mentor.name}</h3>
              <p className="text-black font-bold m-0 tracking-wider uppercase text-xs lg:text-sm">{mentor.role}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#dafd55] border-2 border-black shadow-[2px_2px_0_0_#151515] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d2bbf4] transition-colors duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
