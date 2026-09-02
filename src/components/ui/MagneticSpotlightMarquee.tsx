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

  // Wake effect logic
  useEffect(() => {
    if (!containerRef.current || !marqueeStripRef.current || !contentWrapperRef.current) return;

    const spotlightSection = containerRef.current;
    const marqueeStrip = marqueeStripRef.current;

    let stripBaseTop = 0;
    let stripHeight = 0;
    let sectionHeight = 0;
    let stripRestCenterY = 0;
    let contentTopAtRest = 0;

    let stripTargetY = 0;
    let stripCurrentY = 0;
    let stripPrevY = 0;
    let hasPointerMoved = false;
    let lastClientY = 0;
    let sectionAbsoluteTop = 0;

    let targets: { el: HTMLElement; restCenterY: number; currentY: number }[] = [];

    const measureGeometry = () => {
      const rect = spotlightSection.getBoundingClientRect();
      sectionHeight = rect.height;
      sectionAbsoluteTop = rect.top + window.scrollY;
      stripBaseTop = marqueeStrip.offsetTop;
      stripHeight = marqueeStrip.offsetHeight;
      
      stripRestCenterY = config.stripEdgeInset;
      
      const elements = Array.from(spotlightSection.querySelectorAll('.wake-target')) as HTMLElement[];
      
      let blockTop = Infinity;
      targets = elements.map(el => {
        let y = 0;
        let node: HTMLElement | null = el;
        while (node && node !== spotlightSection) {
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement;
        }
        const restCenterY = y + el.offsetHeight / 2;
        blockTop = Math.min(blockTop, restCenterY - el.offsetHeight / 2);
        
        return {
          el,
          restCenterY,
          currentY: 0
        };
      });

      contentTopAtRest = isFinite(blockTop) ? blockTop : sectionHeight * 0.4;
      
      if (!hasPointerMoved) {
        const restY = config.stripEdgeInset - stripHeight / 2;
        stripTargetY = restY;
        stripCurrentY = restY;
        stripPrevY = restY;
        gsap.set(marqueeStrip, { y: stripCurrentY });
      }
    };

    const measureTimer = window.setTimeout(measureGeometry, 100);
    window.addEventListener('resize', measureGeometry);

    const handlePointerMove = (e: MouseEvent) => {
      hasPointerMoved = true;
      lastClientY = e.clientY;
    };

    const handlePointerLeave = () => {
      hasPointerMoved = false;
      stripTargetY = config.stripEdgeInset - stripHeight / 2;
    };

    spotlightSection.addEventListener('mousemove', handlePointerMove);
    spotlightSection.addEventListener('mouseleave', handlePointerLeave);

    const render = () => {
      if (hasPointerMoved) {
        const currentRectTop = sectionAbsoluteTop - window.scrollY;
        const pointerY = lastClientY - currentRectTop;
        stripTargetY = pointerY - stripHeight / 2;
      }

      stripCurrentY += (stripTargetY - stripCurrentY) * config.stripFollowEase;
      gsap.set(marqueeStrip, { y: stripCurrentY });

      const stripCenterY = stripBaseTop + stripCurrentY + stripHeight / 2;
      const stripVelocityY = stripCurrentY - stripPrevY;
      stripPrevY = stripCurrentY;

      const descentBelowRest = Math.max(0, stripCenterY - stripRestCenterY);
      const maxRise = Math.max(0, contentTopAtRest - config.risenTopGap);
      const contentRise = -Math.min(
        descentBelowRest * config.contentRiseRate,
        maxRise
      );

      targets.forEach(line => {
        const gapToStrip = line.restCenterY - stripCenterY;
        const reachedLine = stripCenterY + config.liftHeadStart >= line.restCenterY;
        
        const wakeInfluence = Math.exp(
          -(gapToStrip * gapToStrip) / (2 * config.wakeReach * config.wakeReach)
        );
        const wakeOffset = stripVelocityY * wakeInfluence * config.wakeStrength;
        
        const lineTarget = (reachedLine ? contentRise : 0) + wakeOffset;
        
        line.currentY += (lineTarget - line.currentY) * config.lineSettleEase;
        gsap.set(line.el, { y: line.currentY });
      });
    };
    let tickerActive = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !tickerActive) {
        gsap.ticker.add(render);
        tickerActive = true;
      } else if (!entry.isIntersecting && tickerActive) {
        gsap.ticker.remove(render);
        tickerActive = false;
      }
    });
    observer.observe(spotlightSection);

    return () => {
      window.clearTimeout(measureTimer);
      observer.disconnect();
      window.removeEventListener('resize', measureGeometry);
      spotlightSection.removeEventListener('mousemove', handlePointerMove);
      spotlightSection.removeEventListener('mouseleave', handlePointerLeave);
      if (tickerActive) gsap.ticker.remove(render);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      data-header-theme="light"
      className={cn(
        "spotlight relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-white dark:bg-[#0f0f0f] text-white font-sans",
        className
      )}
      style={{ fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif' }}
    >
      {/* Top Nav - Centered layout as seen in screenshot */}
      <div className="absolute top-0 left-0 w-full p-6 flex flex-col items-center justify-center z-50 text-[10px] md:text-xs font-medium tracking-wide opacity-90 text-[#111] pointer-events-none">
        <div>{navEmail}</div>
        <div>{navLinks}</div>
      </div>

      {/* Marquee Strip */}
      <div 
        ref={marqueeStripRef} 
        className="spotlight-marquee absolute left-0 w-full z-20 h-[200px] md:h-[220px] lg:h-[260px] pointer-events-none will-change-transform"
        style={{ top: 0 }} 
      >
        <div 
          ref={marqueeTrackRef} 
          className="spotlight-marquee-track flex gap-4 h-full items-center absolute top-0 left-0 will-change-transform"
        >
          {clonedImages.map((img, idx) => (
            <div key={idx} className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] shrink-0 rounded-[16px] md:rounded-[20px] overflow-hidden shadow-sm bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={img}
                alt="Marquee item"
                width={240}
                height={240}
                sizes="(max-width: 639px) 180px, (max-width: 1023px) 200px, 240px"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div 
        ref={contentWrapperRef}
        className="spotlight-content-wrapper relative w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 z-30 pointer-events-none text-[#111]"
      >
        {/* Title */}
        <h1 
          className="text-[clamp(3.5rem,10.5vw,12rem)] font-normal leading-[0.88] tracking-tighter mb-8 md:mb-12 lg:mb-16 text-center flex flex-col items-center select-none"
          style={{ fontFamily: 'var(--font-stara), "Stara", Arial, sans-serif' }}
        >
          {title.map((line, idx) => (
            <div key={idx} className="wake-target inline-block relative will-change-transform">
              {line}
              {/* Optional playful dot for 'Studio' to mimic the screenshot */}
              {line === "Studio" && (
                <span className="absolute right-[0.45em] top-[0.1em] w-[0.25em] h-[0.25em] bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </h1>
        
        {/* Subtitle & Paragraphs row */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mt-4 md:mt-6 lg:mt-8 px-2 md:px-6 gap-6 md:gap-8 lg:gap-12">
          
          {/* Subtitle / Header (Left side) */}
          <div className="flex-1 md:max-w-[240px] lg:max-w-[280px] text-left md:text-right mt-1">
            <h3 className="text-lg md:text-xl lg:text-3xl uppercase tracking-tight font-medium leading-[1.1]">
              {subtitle.map((line, idx) => (
                <div key={idx} className="wake-target will-change-transform">{line}</div>
              ))}
            </h3>
          </div>

          {/* Paragraphs (Right side) */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-12 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.55] text-black/85">
            {paragraphs.map((para, pIdx) => (
              <div key={pIdx} className="flex-1 flex flex-col">
                {para.map((line, lIdx) => (
                  <div key={lIdx} className="wake-target whitespace-normal will-change-transform">
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-40 flex justify-center pointer-events-none">
        <p className="text-[8px] md:text-[10px] text-black/70 max-w-2xl text-center leading-[1.6]">
          {footerText}
        </p>
      </div>
    </section>
  );
}

export default MagneticSpotlightMarquee;
