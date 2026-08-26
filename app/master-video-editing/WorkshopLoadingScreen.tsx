"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const scrollKeys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]);

export default function WorkshopLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (!isLoading) {
      return;
    }

    const lockScroll = (event: Event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };

    const lockKeyScroll = (event: KeyboardEvent) => {
      if (scrollKeys.has(event.key)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    document.documentElement.classList.add("workshop-loader-lock");
    document.body.classList.add("workshop-loader-lock");
    window.addEventListener("wheel", lockScroll, { passive: false, capture: true });
    window.addEventListener("touchmove", lockScroll, { passive: false, capture: true });
    window.addEventListener("keydown", lockKeyScroll, { capture: true });

    return () => {
      window.removeEventListener("wheel", lockScroll, { capture: true });
      window.removeEventListener("touchmove", lockScroll, { capture: true });
      window.removeEventListener("keydown", lockKeyScroll, { capture: true });
      document.documentElement.classList.remove("workshop-loader-lock");
      document.body.classList.remove("workshop-loader-lock");
    };
  }, [isLoading]);

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

    let timeoutId: NodeJS.Timeout;
    let tl: gsap.core.Timeline;

    const startLoadTime = Date.now();
    const minDisplayTime = 500; // minimum time to show the loader

    const handleLoad = () => {
      const elapsed = Date.now() - startLoadTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      timeoutId = setTimeout(() => {
        tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            window.dispatchEvent(new Event("workshopLoaderFinished"));
          },
        });

        tl.to(gsap.utils.toArray(".workshop-loading-spinner"), {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.inOut",
        });

        tl.to(gsap.utils.toArray(".workshop-loading-bg"), {
          yPercent: -100,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.inOut",
        }, "-=0.2");
      }, remainingTime);
    };

    let fallback: NodeJS.Timeout;
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      fallback = setTimeout(handleLoad, 5000);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
      clearTimeout(timeoutId);
      if (tl) tl.kill();
      document.documentElement.classList.remove("workshop-loader-lock");
      document.body.classList.remove("workshop-loader-lock");
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "auto",
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
          width: "max-content",
          whiteSpace: "nowrap",
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
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          lineHeight: 1,
          marginTop: "4px"
        }}>
          SCHOOL
        </span>
      </div>
    </div>
  );
}
