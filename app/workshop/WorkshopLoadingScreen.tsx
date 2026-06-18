"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function WorkshopLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const inTl = gsap.timeline();
    
    // Initial states
    gsap.set(".workshop-loading-bg", { yPercent: 100 });
    gsap.set(".workshop-loading-spinner", { opacity: 0, scale: 0.9, y: 10 });

    // Animate in
    inTl.to(".workshop-loading-bg", {
      yPercent: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
    inTl.to(".workshop-loading-spinner", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
    }, "-=0.2");

    const startLoadTime = Date.now();
    const minDisplayTime = 2500; // minimum time to show the loader

    const handleLoad = () => {
      const elapsed = Date.now() - startLoadTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = "";
            window.dispatchEvent(new Event("workshopLoaderFinished"));
          },
        });

        tl.to(".workshop-loading-spinner", {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.inOut",
        });

        tl.to(".workshop-loading-bg", {
          yPercent: -100,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.inOut",
        }, "-=0.2");
      }, remainingTime);
    };

    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
        document.body.style.overflow = "";
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
        display: "flex",
      }}
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="workshop-loading-bg"
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "#DAFD54",
          }}
        />
      ))}
      
      <div 
        className="workshop-loading-spinner"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Image
          src="/images/idea logo.webp"
          alt="Idea"
          width={104}
          height={54}
          priority
          style={{ objectFit: "contain", filter: "brightness(0)" }}
        />
        <span style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          color: "#000",
          fontFamily: "var(--font-sans, system-ui, sans-serif)",
          lineHeight: 1,
          marginTop: "4px"
        }}>
          SCHOOL
        </span>
      </div>
    </div>
  );
}
