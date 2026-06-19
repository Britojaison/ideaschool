"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

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
        smooth: 2.0, // Luxurious smoothing length
        effects: true,
        normalizeScroll: true, // Use GSAP's native normalization for touch & mobile
      });

      let targetY = smoother.scrollTop();

      // Custom constant-velocity wheel logic to guarantee slow, elegant scroll regardless of wheel spin speed
      const clampWheel = (e: WheelEvent) => {
        // Prevent GSAP's normalizeScroll from seeing the fast wheel event directly
        e.stopPropagation();
        e.preventDefault();
        
        const currentY = smoother ? smoother.scrollTop() : window.scrollY;
        
        // Sync if external scroll (scrollbar drag, touch) occurred
        if (Math.abs(targetY - currentY) > 500) {
           targetY = currentY;
        }
        
        targetY += e.deltaY;
        targetY = gsap.utils.clamp(0, document.documentElement.scrollHeight - window.innerHeight, targetY);
        
        // STRICT SPEED LIMIT: Cap the maximum distance the target can be ahead of the current scroll
        const maxDistance = 400; 
        if (targetY > currentY + maxDistance) targetY = currentY + maxDistance;
        if (targetY < currentY - maxDistance) targetY = currentY - maxDistance;
        
        // Feed the carefully clamped target directly to ScrollSmoother for buttery rendering
        if (smoother) {
          smoother.scrollTo(targetY, true);
        }
      };

      // Use capture: true so we intercept the event BEFORE GSAP does
      window.addEventListener("wheel", clampWheel, { passive: false, capture: true });

      gsap.set(
        gsap.utils.toArray([
          ".workshopHero .programEyebrowRow",
          ".workshopHero h1",
          ".workshopHero .longCourseHeroCopy > p",
          ".workshopHero .workshopHeroMeta",
          ".workshopHero .longCourseHeroCtas",
          ".workshopHeroModel3D",
          ".workshopHero .longCourseStats",
        ]),
        { autoAlpha: 0 },
      );

      const initHeroAnimations = () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(gsap.utils.toArray(".workshopHero .siteHeader"), { y: -28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75 })
          .fromTo(gsap.utils.toArray(".workshopHero .programEyebrowRow"), { x: -40 }, { x: 0, autoAlpha: 1, duration: 0.72 }, "-=0.28")
          .fromTo(gsap.utils.toArray(".workshopHero h1"), { x: -58, filter: "blur(8px)" }, { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1 }, "-=0.34")
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseHeroCopy > p"), { y: 28 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.46")
          .fromTo(gsap.utils.toArray(".workshopHero .workshopHeroMeta"), { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.66 }, "-=0.5")
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseHeroCtas"), { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.48")
          .fromTo(
            gsap.utils.toArray(".workshopHeroModel3D"),
            { autoAlpha: 0, filter: "blur(8px)" },
            { autoAlpha: 1, filter: "blur(0px)", duration: 0.9 },
            "-=0.76",
          )
          .fromTo(gsap.utils.toArray(".workshopHero .longCourseStats"), { y: 30 }, { y: 0, autoAlpha: 1, duration: 0.72 }, "-=0.5");
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

          // Removed stacking and pinning animation to prevent overlap
        });
      }

      // Gallery Flip Animation — desktop only (pinning causes blank gap on mobile)
      let flipCtx: gsap.Context | undefined;
      const galleryElement = document.querySelector("#gallery-8");

      const createGalleryTween = () => {
        if (!galleryElement) return;
        // Skip on mobile — the pin creates a large empty gap
        if (window.innerWidth < 1024) return;

        const galleryItems = galleryElement.querySelectorAll(".gallery__item");

        if (flipCtx) {
          flipCtx.revert();
        }

        galleryElement.classList.remove("gallery--final");

        flipCtx = gsap.context(() => {
          galleryElement.classList.add("gallery--final");
          const flipState = Flip.getState(galleryItems);
          galleryElement.classList.remove("gallery--final");

          const flip = Flip.to(flipState, {
            simple: true,
            ease: "expoScale(1, 5)",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: galleryElement,
              start: "center center",
              end: "+=100%",
              scrub: true,
              pin: galleryElement.parentNode as HTMLElement,
            },
          });
          tl.add(flip);
          return () => gsap.set(galleryItems, { clearProps: "all" });
        }, galleryElement);
      };

      createGalleryTween();

      const handleResize = () => createGalleryTween();
      window.addEventListener("resize", handleResize);
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

      if (servicesSection) {
        const servicesTl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });


        gsap.set(".servicesKicker, .servicesHeading, .servicesCopy p", { autoAlpha: 0, y: 34 });
        gsap.set(".servicesSkillItem", { autoAlpha: 0, x: 42, scale: 0.98 });
        gsap.set(".servicesFocus", { autoAlpha: 0, scale: 0.9, rotation: -10 });

        servicesTl
          .to(".servicesKicker, .servicesHeading, .servicesCopy p", {
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.045,
            duration: 0.24,
          }, 0)
          .to(".servicesFocus", {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            ease: "power2.out",
            duration: 0.24,
          }, 0.04)
          .to(".servicesSkillItem", {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            ease: "power2.out",
            stagger: 0.025,
            duration: 0.2,
          }, 0.12);

        servicesTl.to(".servicesFocus", {
          rotation: 24,
          ease: "none",
          duration: 1,
        }, 0);

        ScrollTrigger.create({
          trigger: servicesSection,
          start: "top top",
          end: "bottom bottom",
          pin: ".servicesStickyContainer",
          pinSpacing: false,
        });
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
      // What You'll Learn Background Text + Image Travel Animation
      const curriculumFlowSection = document.querySelector(".curriculumFlowSection");
      const curriculumFlowBgText = document.querySelector(".curriculumFlowBgText");
      const whatYouWillLearnHugeText = document.querySelector(".whatYouWillLearnHugeText");
      const curriculumRevealImage = document.querySelector<HTMLElement>(".curriculumFlowRevealImage");

      if (curriculumFlowSection && curriculumFlowBgText && whatYouWillLearnHugeText) {
        // Pin the sticky container for the whole scroll duration
        ScrollTrigger.create({
          trigger: curriculumFlowSection,
          start: "top top",
          end: "bottom bottom",
          pin: curriculumFlowBgText,
          pinSpacing: false,
        });

        // Phase 1 (0% → 70%): Text + image travel LEFT together
        gsap.to(whatYouWillLearnHugeText, {
          x: () => -(whatYouWillLearnHugeText.scrollWidth),
          ease: "none",
          scrollTrigger: {
            trigger: curriculumFlowSection,
            start: "top top",
            end: "70% top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (curriculumRevealImage) {
          // Image starts fully off-screen to the right with a full clip
          // Phase 1 (0% → 70%): Image slides from 100vw → 0 (arrives when text exits)
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
                end: "80% top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );

          // Text drops away as image reveals in Phase 2
          gsap.to(whatYouWillLearnHugeText, {
            y: "150vh",
            opacity: 0,
            ease: "power2.in",
            scrollTrigger: {
              trigger: curriculumFlowSection,
              start: "65% top",
              end: "80% top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 3 (85% → bottom): Auto-scroll to next section once image is fully revealed
          ScrollTrigger.create({
            trigger: curriculumFlowSection,
            start: "85% top",
            onEnter: () => {
              const nextSection = curriculumFlowSection.nextElementSibling as HTMLElement;
              if (nextSection && smoother) {
                smoother.scrollTo(nextSection, true, "top top");
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
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out"
        }, 0);

        attendeesTl.to(attendeesTitle, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        }, 0.2);

        attendeesCards.forEach((card, index) => {
          attendeesTl.to(card, {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          }, 0.4 + index * 0.15);
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

      smoother.refresh();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("wheel", clampWheel, { capture: true } as EventListenerOptions);
        if (flipCtx) flipCtx.revert();
      };
    });

    return () => {
      smoother?.kill();
      ctx.revert();
    };
  }, []);

  return null;
}
