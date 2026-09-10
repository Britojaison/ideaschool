"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function VideoEditingGsapLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.75,
      infinite: false,
    });

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 3. Smooth anchor link scrolling (#enroll, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl as HTMLElement, {
          offset: -60,
          duration: 1.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 4. GSAP Context for scoped and cleanly tearable animations
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        return;
      }

      // --- HERO ENTRANCE TIMELINE ---
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Site Header
      heroTl.fromTo(
        ".applyPage .siteHeader",
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      // Eyebrow badges (Pill & Neon Tag)
      heroTl.fromTo(
        ".applyPage .programEyebrowRow > *",
        { y: 18, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 },
        "-=0.35"
      );

      // H1 Title with clean slide and focus
      heroTl.fromTo(
        ".applyPage .programHeroCopy h1",
        { y: 32, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.75 },
        "-=0.3"
      );

      // Hero CTA button & seats notice
      heroTl.fromTo(
        [".applyPage .programHeroCopy .primaryCta", ".applyPage .seatLimit"],
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 },
        "-=0.35"
      );

      // Hero Video Card Preview
      heroTl.fromTo(
        ".applyPage .programHeroCard",
        { x: 35, opacity: 0, scale: 0.97, filter: "blur(8px)" },
        { x: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8 },
        "-=0.5"
      );

      // Program Stats (Batch Date, Mode, Session, Location)
      heroTl.fromTo(
        ".applyPage .programStats > div",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 },
        "-=0.45"
      );

      // --- HERO SCROLL PARALLAX ---
      gsap.to(".applyPage .programHeroCopy", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".applyPage .programHero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".applyPage .programHeroCard", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: ".applyPage .programHero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // --- CURRICULUM SECTION ---
      gsap.fromTo(
        ".applyPage .curriculumIntro > *",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .curriculumIntro",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .curriculumItem",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .curriculumList",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- TOOLS YOU WILL MASTER ---
      gsap.fromTo(
        ".applyPage .toolsBlock h2",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .toolsBlock",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .toolsBlock > div > div",
        { y: 30, opacity: 0, scale: 0.88 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".applyPage .toolsBlock > div",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- WORKSHOP ATTENDEES SECTION ---
      gsap.fromTo(
        ".applyPage #attendees",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage #attendees",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- EARLY BIRD PASS / OFFER CARD ---
      gsap.fromTo(
        ".applyPage .programNotice",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .programOffer",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .programNoticeBenefit",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".applyPage .programNoticeBenefits",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- MEET THE INSTRUCTORS ---
      gsap.fromTo(
        ".applyPage .programInstructor h2",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .programInstructor",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .instructorCard",
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .instructorGrid",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- OUR WORK SECTION ---
      gsap.fromTo(
        ".applyPage .workshopWorkSection .mentorSectionIntro > *",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .workshopWorkSection",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- WHAT OUR STUDENTS HAVE TO SAY ---
      gsap.fromTo(
        ".applyPage .proofIntro > *",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .proofIntro",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .proofCard",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .proofRail",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .proofVideoFrame",
        { y: 35, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .proofVideoRail",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // --- FAQ SECTION ---
      gsap.fromTo(
        ".applyPage .programFaqInner h2",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".applyPage .programFaqInner",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".applyPage .programFaqItem",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".applyPage .programFaqList",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // 5. Hide floating CTA button when #enroll section is in view
    let enrollObserver: IntersectionObserver | null = null;
    const enrollEl = document.getElementById("enroll");
    const floatingCta = document.querySelector(".videoEditingFloatingButton");

    if (enrollEl && floatingCta) {
      enrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              floatingCta.classList.add("floatingCtaHidden");
            } else {
              floatingCta.classList.remove("floatingCtaHidden");
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      enrollObserver.observe(enrollEl);
    }

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      if (enrollObserver) {
        enrollObserver.disconnect();
      }
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return null;
}
