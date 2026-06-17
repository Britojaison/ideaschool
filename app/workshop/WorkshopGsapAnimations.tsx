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

      gsap.utils.toArray<HTMLElement>(".workshopGsapSection").forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>(
          ".longCourseIntro, .curriculumIntro, .mentorSectionIntro, .portfolioPanel, .courseWeek, .scheduleItem, .workshopProjectCard, .courseMentorTilt, .detailsPanel, .programFaqItem, .longCourseApplyInner",
        );

        if (!targets.length) {
          return;
        }

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
      });

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
      const servicesSection = document.querySelector(".workshopServicesSection");
      const heroModel = document.querySelector<HTMLElement>(".workshopHeroModel3D");
      const modelTarget = document.querySelector<HTMLElement>(".servicesModelTarget");

      if (servicesSection) {
        gsap.to(".servicesHeadingTop", {
          y: () => -window.innerHeight * 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        gsap.to(".servicesHeadingBottom", {
          y: () => -window.innerHeight * 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        gsap.to(".servicesCircleWrapper", {
          rotation: 90,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        
        gsap.to(".servicesLabel", {
          rotation: -90,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

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

      smoother.refresh();
    });

    return () => {
      smoother?.kill();
      ctx.revert();
    };
  }, []);

  return null;
}
