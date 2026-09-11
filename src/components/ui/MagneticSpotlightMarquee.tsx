"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import gsap from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MagneticSpotlightMarqueeProps {
  className?: string;
  images?: string[];
  title?: string[];
  subtitle?: string[];
  paragraphs?: string[][];
  navEmail?: string;
  navLinks?: string;
  footerText?: string;
}

const config = {
  marqueeScrollSpeed: 180, // Increased for a faster, dynamic feel
  stripFollowEase: 0.05,
  stripEdgeInset: 175,
  contentRiseRate: 0.85,
  risenTopGap: 100,
  liftHeadStart: 125,
  wakeStrength: 2.5,
  wakeReach: 125,
  lineSettleEase: 0.09,
};

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=800&auto=format&fit=crop",
];

const DEFAULT_TITLE = ["VengeanceUI"];
const DEFAULT_SUBTITLE = ["BUILD FASTER", "SHIP BETTER"];
const DEFAULT_PARAGRAPHS = [
  [
    "Vengeance UI is a premium component library",
    "specializing in smooth animations, interactive",
    "interfaces, and modern design.",
  ],
  [
    "We prioritize developer experience and aesthetics.",
    "Our components span across complex interactions,",
    "3D elements, and smooth animations built",
    "for React and modern frameworks. Our library is tailored",
    "to distinct challenges within modern web development."
  ]
];

export function MagneticSpotlightMarquee({
  className,
  images = DEFAULT_IMAGES,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  paragraphs = DEFAULT_PARAGRAPHS,
  navEmail = "hello@vengeance.ui",
  navLinks = "Documentation, Components, GitHub",
  footerText = "We navigate in no-nonsense environments pushing the boundaries of web design. Whether you're a startup or a global leader, building a new identity or interactive platform, Vengeance UI is your partner in innovation. Our premium components ensure that every project feels magical, collaborative, and smooth.",
}: MagneticSpotlightMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeStripRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  // State to hold cloned images to fill width
  const [clonedImages, setClonedImages] = useState<string[]>(images);

  useEffect(() => {
    if (!marqueeTrackRef.current || !marqueeStripRef.current || !containerRef.current || !contentWrapperRef.current) return;

    const marqueeTrack = marqueeTrackRef.current;

    // 1. Setup infinite horizontal marquee with GSAP
    // Calculate width statically to avoid issues with unloaded images
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const itemWidth = isMobile ? 180 : isTablet ? 200 : 240;
    const gap = 16; // 1rem gap
    const oneSetWidth = images.length * (itemWidth + gap);
    const setsNeeded = Math.ceil(window.innerWidth / oneSetWidth) + 1;
    
    const newImages = [];
    for (let i = 0; i < setsNeeded; i++) {
      newImages.push(...images);
    }
    setClonedImages(newImages);

    // Wait for React to render clones, then animate
    let marqueeTween: gsap.core.Tween | undefined;
    let isVisible = false;
    const ctx = gsap.context(() => {
      marqueeTween = gsap.to(marqueeTrack, {
           x: `-${oneSetWidth}px`,
           duration: oneSetWidth / 150, // Reduced speed for better performance and smoothness
           ease: "none",
           repeat: -1,
           paused: true,
           modifiers: {
             x: (x) => `${gsap.utils.wrap(-oneSetWidth, 0, parseFloat(x))}px`
           }
         });
    }, marqueeTrack);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) marqueeTween?.play();
      else marqueeTween?.pause();
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, [images]);

  return (
    <section
      ref={containerRef}
      data-header-theme="light"
      className={cn(
        "spotlight relative w-full py-12 md:py-16 overflow-hidden bg-white dark:bg-[#0f0f0f] text-[#111] font-sans flex flex-col items-center justify-center",
        className
      )}
      style={{ fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif' }}
    >
      {/* Main Content Layout */}
      <div 
        ref={contentWrapperRef}
        className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center mb-6 md:mb-8"
      >
        {/* Title */}
        <h1 
          className="text-[clamp(3.5rem,10.5vw,12rem)] font-normal leading-[0.88] tracking-tighter mb-6 md:mb-10 text-center flex flex-col items-center select-none"
          style={{ fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif' }}
        >
          {title.map((line, idx) => (
            <div key={idx} className="inline-block relative">
              {line}
            </div>
          ))}
        </h1>
        
        {/* Subtitle */}
        {subtitle && subtitle.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm font-semibold tracking-widest uppercase opacity-75">
            {subtitle.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </div>
        )}
      </div>

      {/* Marquee Strip — Positioned naturally below the title */}
      <div 
        ref={marqueeStripRef} 
        className="spotlight-marquee relative w-full h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden"
      >
        <div 
          ref={marqueeTrackRef} 
          className="spotlight-marquee-track flex gap-4 h-full items-center absolute top-0 left-0 will-change-transform"
        >
          {clonedImages.map((img, idx) => (
            <div key={idx} className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] shrink-0 rounded-[16px] md:rounded-[20px] overflow-hidden shadow-sm bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={img}
                alt="Marquee item"
                width={280}
                height={280}
                sizes="(max-width: 639px) 200px, (max-width: 1023px) 240px, 280px"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MagneticSpotlightMarquee;
