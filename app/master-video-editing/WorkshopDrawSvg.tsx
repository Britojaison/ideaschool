"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WorkshopDrawSvg() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up the dash array and offset
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap
      .timeline({
        repeat: -1,
        defaults: { duration: 3, ease: "power1.inOut" },
      })
      .set(svgRef.current, { opacity: 1 })
      .to(path, { strokeDashoffset: 0 })
      .to(path, { strokeDashoffset: -length }); // This simulates drawSVG: "100% 100%" by pushing it off the other end

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="workshopSvgContainer">
      <svg
        ref={svgRef}
        className="workshopSvgStage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 103 103"
        fill="none"
        strokeWidth="2.2"
        opacity="0"
      >
        <defs>
          <linearGradient id="grad-green" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--course-green)" />
            <stop offset="1" stopColor="#8eb80c" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          stroke="url(#grad-green)"
          d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z"
        />
      </svg>
    </div>
  );
}
