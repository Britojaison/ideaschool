"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkshopFaqImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
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
    <div ref={containerRef} className="w-full aspect-[21/9] md:aspect-[24/9] relative rounded-2xl md:rounded-[32px] overflow-hidden mb-16 md:mb-24 shadow-sm border border-black/5">
      <div ref={imageRef} style={{ position: "absolute", top: "-30%", left: 0, right: 0, bottom: "-30%" }}>
        <Image
          src="/images/DSC01035.webp"
          alt="Workshop FAQ"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
