"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type TravelStartVars = {
  x: number;
  y: number;
  scale: number;
};

export default function WorkshopGsapAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    let smoother: ScrollSmoother | undefined;

    const ctx = gsap.context(() => {
      ScrollSmoother.get()?.kill();
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.6,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.12,
      });

      gsap.set(
        [
          ".workshopHero .programEyebrowRow",
          ".workshopHero h1",
          ".workshopHero .longCourseHeroCopy > p",
          ".workshopHero .longCourseHeroCtas",
          ".workshopHeroModel3D",
          ".workshopHero .longCourseStats",
        ],
        { autoAlpha: 0 },
      );

      const initHeroAnimations = () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(".workshopHero .siteHeader", { y: -28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75 })
          .fromTo(".workshopHero .programEyebrowRow", { x: -40 }, { x: 0, autoAlpha: 1, duration: 0.72 }, "-=0.28")
          .fromTo(".workshopHero h1", { x: -58, filter: "blur(8px)" }, { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1 }, "-=0.34")
          .fromTo(".workshopHero .longCourseHeroCopy > p", { y: 28 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.46")
          .fromTo(".workshopHero .longCourseHeroCtas", { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.48")
          .fromTo(
            ".workshopHeroModel3D",
            { autoAlpha: 0, filter: "blur(8px)" },
            { autoAlpha: 1, filter: "blur(0px)", duration: 0.9 },
            "-=0.76",
          )
          .fromTo(".workshopHero .longCourseStats", { y: 30 }, { y: 0, autoAlpha: 1, duration: 0.72 }, "-=0.5");
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
              duration: 0.84,
              ease: "power3.out",
              stagger: 0.08,
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
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
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
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Stacking pin
          ScrollTrigger.create({
            trigger: card,
            start: `top ${15 + i * 2}%`,
            endTrigger: ".courseWeekList",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });

          // Scale and dim effect as it gets stacked
          if (i !== courseWeeksArray.length - 1) {
            gsap.to(card, {
              y: -60 * (courseWeeksArray.length - 1 - i),
              scale: 0.92 - (courseWeeksArray.length - 1 - i) * 0.03,
              opacity: 0.5,
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: `top ${15 + i * 2}%`,
                endTrigger: ".courseWeekList",
                end: "bottom bottom",
                scrub: true,
              }
            });
          }
        });
      }

      gsap.utils.toArray<HTMLElement>(".workshopProjectCard").forEach((card) => {
        const video = card.querySelector("video");

        gsap.fromTo(
          video,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // New Services Section Animation
      // Pin Hero Section so Services scrolls over it
      const workshopHero = document.querySelector(".workshopHero");
      const servicesSection = document.querySelector(".workshopServicesSection");

      if (workshopHero && servicesSection) {
        ScrollTrigger.create({
          trigger: workshopHero,
          start: "top top",
          endTrigger: servicesSection,
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }

      const heroModel = document.querySelector<HTMLElement>(".workshopHeroModel3D");
      const modelTarget = document.querySelector<HTMLElement>(".servicesModelTarget");

      if (servicesSection) {
        const servicesTl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });


        // Phase 1: Circle rotates, Top text moves up
        servicesTl.to(".servicesHeadingTop", {
          y: () => -window.innerHeight * 1.5,
          ease: "none",
          duration: 1
        }, 0);

        servicesTl.to(".servicesCircleWrapper", {
          rotation: 90,
          ease: "none",
          duration: 1
        }, 0);
        
        servicesTl.to(".servicesLabel", {
          rotation: -90,
          ease: "none",
          duration: 1
        }, 0);

        ScrollTrigger.create({
          trigger: servicesSection,
          start: "top top",
          end: "bottom bottom",
          pin: ".servicesStickyContainer",
          pinSpacing: false,
        });

        if (heroModel && modelTarget) {
          gsap.set(heroModel, {
            x: 0,
            y: 0,
            scale: 1,
          });

          const getServiceTargetOffset = (): TravelStartVars => {
            const modelRect = heroModel.getBoundingClientRect();
            const targetWidth = (modelTarget.offsetWidth || modelRect.width) * 0.76;
            const scale = Math.max(1, Math.min(2.4, targetWidth / (modelRect.width || 1)));

            return {
              x: window.innerWidth / 2 - (modelRect.left + modelRect.width / 2),
              y: window.innerHeight * 0.5 - (modelRect.top + modelRect.height / 2),
              scale,
            };
          };

          const travelTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: servicesSection,
              start: "top bottom",
              end: "top top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          travelTimeline.fromTo(
            heroModel,
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              autoAlpha: 1,
              x: () => getServiceTargetOffset().x,
              y: () => getServiceTargetOffset().y,
              scale: () => getServiceTargetOffset().scale,
              ease: "none",
            },
          );
        }
      }

      // Video Scroll Animation
      const videoScrollSection = document.querySelector(".workshopVideoScrollSection");
      const videoMediaContainer = document.querySelector(".videoScrollMediaContainer");

      if (videoScrollSection && videoMediaContainer) {
        ScrollTrigger.create({
          trigger: videoScrollSection,
          start: "top top",
          end: "bottom bottom",
          pin: ".videoScrollStickyContainer",
          pinSpacing: false,
        });

        const curriculumFlowSection = document.querySelector(".curriculumFlowSection");
        if (curriculumFlowSection) {
          ScrollTrigger.create({
            trigger: videoScrollSection,
            start: "bottom bottom",
            endTrigger: curriculumFlowSection,
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        gsap.to(videoMediaContainer, {
          width: "15vw",
          height: "8vw",
          borderRadius: "5vw",
          margin: "0 1.5vw",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: videoScrollSection,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          }
        });
      }
      // What You'll Learn Background Text Animation
      const curriculumFlowSection = document.querySelector(".curriculumFlowSection");
      const curriculumFlowBgText = document.querySelector(".curriculumFlowBgText");
      const whatYouWillLearnHugeText = document.querySelector(".whatYouWillLearnHugeText");

      if (curriculumFlowSection && curriculumFlowBgText && whatYouWillLearnHugeText) {
        ScrollTrigger.create({
          trigger: curriculumFlowSection,
          start: "top top",
          end: "bottom bottom",
          pin: curriculumFlowBgText,
          pinSpacing: false,
        });

        gsap.to(whatYouWillLearnHugeText, {
          x: () => -(whatYouWillLearnHugeText.scrollWidth),
          ease: "none",
          scrollTrigger: {
            trigger: curriculumFlowSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
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
          duration: 1,
          stagger: 0.15,
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
        ScrollTrigger.create({
          trigger: attendeesSection,
          start: "top top",
          end: "bottom bottom",
          pin: attendeesStickyContainer,
          pinSpacing: false,
        });

        // Set initial states
        gsap.set(attendeesCards, {
          autoAlpha: 0,
          y: 100,
          rotationX: 30,
          scale: 0.9,
          transformOrigin: "center bottom",
        });
        
        gsap.set(bgCircles, { scale: 0.5, opacity: 0 });
        gsap.set(attendeesTitle, { autoAlpha: 0, y: -40, scale: 0.95 });

        const attendeesTl = gsap.timeline({
          scrollTrigger: {
            trigger: attendeesSection,
            start: "top top", 
            end: "bottom bottom",
            scrub: 1.5,
          }
        });

        attendeesTl.to(bgCircles, {
          scale: 1,
          opacity: 0.5,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out"
        }, 0);

        attendeesTl.to(attendeesTitle, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.5)",
        }, 0.2);

        attendeesCards.forEach((card, index) => {
          attendeesTl.to(card, {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out"
          }, 0.5 + index * 0.4);
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

      smoother.refresh();
    });

    return () => {
      smoother?.kill();
      ctx.revert();
    };
  }, []);

  return null;
}
