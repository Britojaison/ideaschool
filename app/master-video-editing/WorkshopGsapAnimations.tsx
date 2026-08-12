"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function WorkshopGsapAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    const handleProgrammaticScroll = (event: Event) => {
      const scrollEvent = event as CustomEvent<number | string | HTMLElement>;
      event.preventDefault();
      lenis.scrollTo(scrollEvent.detail, { duration: 1.1 });
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("idea-scroll-to", handleProgrammaticScroll);

    const ctx = gsap.context(() => {
      gsap.set(
        gsap.utils.toArray([
          ".workshopHero .programEyebrowRow",
          ".workshopHero .workshopHeroVideoPanel",
          ".workshopHero h1",
          ".workshopHero .longCourseHeroCopy > p",
          ".workshopHero .workshopHeroMeta",
          ".workshopHero .workshopHeroMetaCards",
          ".workshopHero .longCourseHeroCtas",
          ".workshopHeroModel3D",
          ".workshopHero .longCourseStats",
        ]),
        { autoAlpha: 0 },
      );

      const initHeroAnimations = () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(gsap.utils.toArray(".workshopHero .siteHeader"), { y: -28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 })
          .fromTo(gsap.utils.toArray(".workshopHero .programEyebrowRow"), { x: -40 }, { x: 0, autoAlpha: 1, duration: 0.4 }, "-=0.2")
          .fromTo(gsap.utils.toArray(".workshopHero .workshopHeroVideoPanel"), { x: 58, filter: "blur(8px)" }, { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.6 }, "-=0.2")
          .fromTo(gsap.utils.toArray(".workshopHero h1"), { x: -58, filter: "blur(8px)" }, { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.6 }, "-=0.2")
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseHeroCopy > p"), { y: 28 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.3")
          .fromTo(gsap.utils.toArray([".workshopHero .workshopHeroMeta", ".workshopHero .workshopHeroMetaCards"]), { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.3")
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseHeroCtas"), { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.3")
          .fromTo(
            gsap.utils.toArray(".workshopHeroModel3D"),
            { autoAlpha: 0, filter: "blur(8px)" },
            { autoAlpha: 1, filter: "blur(0px)", duration: 0.5 },
            "-=0.4",
          )
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseStats"), { y: 30 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.3");
      };

      if (document.querySelector(".workshop-loading-bg")) {
        window.addEventListener("workshopLoaderFinished", initHeroAnimations, { once: true });
      } else {
        initHeroAnimations();
      }

      gsap.utils.toArray<HTMLElement>(".workshopGsapSection").forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>(
          ".longCourseIntro, .mentorSectionIntro, .portfolioPanel, .scheduleItem, .workshopProjectCard, .courseMentorTilt, .detailsPanel, .programFaqItem, .longCourseApplyInner",
        );

        if (targets.length) {
          gsap.fromTo(
            targets,
            { y: 54, autoAlpha: 0, filter: "blur(8px)" },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.45,
              ease: "power3.out",
              stagger: 0.04,
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                end: "bottom 35%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // Curriculum Intro specific animation (Pills)
      const curriculumIntroPills = document.querySelectorAll<HTMLElement>(".curriculumIntro h2, .curriculumIntro p");
      if (curriculumIntroPills.length) {
        gsap.fromTo(
          curriculumIntroPills,
          { scale: 0.6, y: 30, autoAlpha: 0, filter: "blur(10px)" },
          {
            scale: 1,
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.45,
            ease: "back.out(1.7)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".curriculumIntro",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Course Week Cards Animation - Stacking
      const courseWeeks = document.querySelectorAll<HTMLElement>(".courseWeek");
      if (courseWeeks.length) {
        const courseWeeksArray = Array.from(courseWeeks);
        courseWeeksArray.forEach((card, i) => {
          // Initial reveal animation
          gsap.fromTo(
            card,
            { y: 100, autoAlpha: 0, filter: "blur(8px)" },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Removed stacking and pinning animation to prevent overlap
        });
      }

      // What You'll Learn Background Text + Image Travel Animation
      const curriculumFlowSection = document.querySelector(".curriculumFlowSection");
      const curriculumFlowBgText = document.querySelector(".curriculumFlowBgText");
      const whatYouWillLearnHugeText = document.querySelector(".whatYouWillLearnHugeText");
      const curriculumRevealImage = document.querySelector<HTMLElement>(".curriculumFlowRevealImage");

      if (curriculumFlowSection && curriculumFlowBgText && whatYouWillLearnHugeText) {
        // Smooth background color fade from white to black
        gsap.fromTo(curriculumFlowSection,
          { backgroundColor: "#fefffe" },
          {
            backgroundColor: "#000000",
            ease: "none",
            scrollTrigger: {
              trigger: curriculumFlowSection,
              start: "top bottom",
              end: "top 30%",
              scrub: true,
            }
          }
        );

        // Pin the sticky container for the whole scroll duration
        ScrollTrigger.create({
          trigger: curriculumFlowSection,
          start: "top top",
          end: "bottom bottom",
          pin: curriculumFlowBgText,
          pinSpacing: false,
        });

        // Phase 1 (0% → 40%): Text travels LEFT quickly
        gsap.to(whatYouWillLearnHugeText, {
          x: () => -(whatYouWillLearnHugeText.scrollWidth),
          ease: "none",
          scrollTrigger: {
            trigger: curriculumFlowSection,
            start: "top top",
            end: "40% top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (curriculumRevealImage) {
          // Image starts fully off-screen to the right with a full clip
          // Image slides from 100vw → 0 (fully revealed by 40%)
          gsap.fromTo(curriculumRevealImage,
            {
              x: "100vw",
              clipPath: "inset(0 0 0 100%)",
            },
            {
              x: 0,
              clipPath: "inset(0 0 0 0%)",
              ease: "none",
              scrollTrigger: {
                trigger: curriculumFlowSection,
                start: "top top",
                end: "40% top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );

          // Text drops away as image reveals
          gsap.to(whatYouWillLearnHugeText, {
            y: "150vh",
            opacity: 0,
            ease: "power2.in",
            scrollTrigger: {
              trigger: curriculumFlowSection,
              start: "30% top",
              end: "40% top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 3: Auto-scroll after user has seen the full image
          ScrollTrigger.create({
            trigger: curriculumFlowSection,
            start: "90% top",
            onEnter: () => {
              const nextSection = curriculumFlowSection.nextElementSibling as HTMLElement;
              if (nextSection) {
                lenis.scrollTo(nextSection, { offset: 0, duration: 1.1 });
              }
            },
            once: true,
          });
        }
      }

      // Curriculum Flow Animation
      if (curriculumFlowSection) {
        const flowNodes = gsap.utils.toArray<HTMLElement>(".flowNode");
        const flowPaths = gsap.utils.toArray<SVGPathElement>(".flowLines path");
        const flowCircles = gsap.utils.toArray<SVGCircleElement>(".flowLines circle");

        const allElements = [...flowNodes, ...flowPaths, ...flowCircles];

        // Sort elements from left to right for sequential highlighting
        allElements.sort((a, b) => {
          const rectA = (a as Element).getBoundingClientRect();
          const rectB = (b as Element).getBoundingClientRect();
          return rectA.left - rectB.left;
        });

        // Set initial dimmed state
        gsap.set(allElements, {
          opacity: 0.15,
          filter: "grayscale(100%)",
          scale: (index, target) => target.classList?.contains("flowNode") ? 0.95 : 1
        });

        const flowContainer = document.querySelector(".flowContainer");
        const flowTl = gsap.timeline({
          scrollTrigger: {
            trigger: flowContainer,
            start: "top 70%",
            end: "bottom 85%",
            scrub: 1,
          }
        });

        // Sequentially highlight from left to right
        flowTl.to(allElements, {
          opacity: 1,
          filter: "grayscale(0%)",
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        });
      }

      // Attendees Section Animation
      const attendeesSection = document.querySelector(".workshopAttendeesSection");
      const attendeesStickyContainer = document.querySelector(".attendeesStickyContainer");
      const attendeesCards = gsap.utils.toArray<HTMLElement>(".attendeeCard");
      const attendeesTitle = document.querySelector(".attendeesTitle");
      const bgCircles = gsap.utils.toArray<HTMLElement>(".attendeesBgCircle");

      if (attendeesSection && attendeesStickyContainer && attendeesCards.length) {
        // Set initial states
        gsap.set(attendeesCards, {
          autoAlpha: 0,
          y: 60,
          rotationX: 15,
          scale: 0.95,
          transformOrigin: "center bottom",
        });
        
        gsap.set(bgCircles, { scale: 0.5, opacity: 0 });
        gsap.set(attendeesTitle, { autoAlpha: 0, y: -20, scale: 0.95 });

        const attendeesTl = gsap.timeline({
          scrollTrigger: {
            trigger: attendeesSection,
            start: "top 60%", 
            toggleActions: "play none none reverse",
          }
        });

        attendeesTl.to(bgCircles, {
          scale: 1,
          opacity: 0.5,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, 0);

        attendeesTl.to(attendeesTitle, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.5)",
        }, 0.2);

        attendeesCards.forEach((card, index) => {
          attendeesTl.to(card, {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
          }, 0.3 + index * 0.1);
        });
        
        // Add floating animation to circles regardless of scroll
        bgCircles.forEach((circle, i) => {
          gsap.to(circle, {
            y: "random(-60, 60)",
            x: "random(-60, 60)",
            duration: "random(5, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 1.5
          });
        });
      }

      // Stacking animation for Market Stats and Pricing Section removed
      // so that users can read the bottom cards without them being covered early by the next section.

      // FAQ stacking animation removed as it overlaps content.

      // Footer Stacking Animation
      const footer = document.querySelector(".workshopSiteFooter");
      if (footer) {
        gsap.fromTo(
          footer,
          { y: () => -window.innerHeight * 0.5 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: footer,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }

      ScrollTrigger.refresh();
    });

    return () => {
      gsap.ticker.remove(updateLenis);
      window.removeEventListener("idea-scroll-to", handleProgrammaticScroll);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return null;
}
