"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

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

      // Gallery Flip Animation
      let flipCtx: gsap.Context | undefined;
      const galleryElement = document.querySelector("#gallery-8");

      const createGalleryTween = () => {
        if (!galleryElement) return;
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
      const whatYouWillLearnHugeText = document.querySelector<HTMLElement>(".whatYouWillLearnHugeText");

      if (curriculumFlowSection && curriculumFlowBgText && whatYouWillLearnHugeText) {
        const isMobileLearn = window.matchMedia("(max-width: 1024px)").matches;
        const learnChars = gsap.utils.toArray<HTMLElement>(".learnHugeLetter, .learnHugeSpace");
        const learnLetters = gsap.utils.toArray<HTMLElement>(".learnHugeLetter");

        ScrollTrigger.create({
          trigger: curriculumFlowSection,
          start: "top top",
          end: "bottom bottom",
          pin: curriculumFlowBgText,
          pinSpacing: false,
        });

        gsap.set(whatYouWillLearnHugeText, {
          x: 0,
          y: 0,
        });

        gsap.set(learnChars, {
          x: 0,
        });

        gsap.set(learnLetters, {
          y: () => window.innerHeight * (isMobileLearn ? 0.82 : 0.62),
          opacity: 0,
          scale: 0.92,
          rotate: (index) => (isMobileLearn ? [-9, 5, -4, 7, -6, 4][index % 6] : 0),
        });

        const learnTimeline = gsap.timeline({
          ease: "none",
          scrollTrigger: {
            trigger: curriculumFlowSection,
            start: "top top",
            end: isMobileLearn ? "56% bottom" : "bottom top",
            scrub: isMobileLearn ? 0.45 : 0.8,
            invalidateOnRefresh: true,
          }
        });

        if (isMobileLearn) {
          const getVisibleWordShift = (activeIndex: number) => {
            const firstChar = learnChars[0];
            const activeChar = learnChars[activeIndex];

            if (!firstChar || !activeChar) {
              return 0;
            }

            const containerLeft = whatYouWillLearnHugeText.getBoundingClientRect().left;
            const visibleLeft = containerLeft + firstChar.offsetLeft;
            const visibleRight = containerLeft + activeChar.offsetLeft + activeChar.offsetWidth;
            const visibleCenter = (visibleLeft + visibleRight) / 2;

            return window.innerWidth / 2 - visibleCenter;
          };

          learnChars.forEach((char, index) => {
            const visibleChars = learnChars.slice(0, index + 1);
            const isSpace = char.classList.contains("learnHugeSpace");

            learnTimeline.to(visibleChars, {
              x: () => getVisibleWordShift(index),
              duration: isSpace ? 0.14 : 0.26,
              ease: "power2.out",
            });

            if (!isSpace) {
              learnTimeline.to(char, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                duration: 0.34,
                ease: "power3.out",
              }, "<");
            }
          });
        } else {
          learnTimeline.to(learnLetters, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.82,
            ease: "power3.out",
            stagger: {
              each: 0.065,
              from: "start",
            },
          });
        }

        learnTimeline.to(whatYouWillLearnHugeText, {
          x: () => {
            if (!isMobileLearn) {
              return -whatYouWillLearnHugeText.scrollWidth;
            }

            return -Math.max(
              whatYouWillLearnHugeText.scrollWidth - window.innerWidth + window.innerWidth * 0.08,
              0,
            );
          },
          duration: 1.15,
          ease: "none",
        });

        if (isMobileLearn) {
          learnTimeline.to(whatYouWillLearnHugeText, {
            autoAlpha: 0,
            duration: 0.18,
            ease: "none",
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

        const flowContainer = document.querySelector(".flowContainer");
        const isMobileFlow = window.matchMedia("(max-width: 1024px)").matches;

        if (isMobileFlow) {
          gsap.set(flowNodes, {
            autoAlpha: 1,
            y: 56,
            scale: 0.98,
            filter: "none",
          });

          flowNodes.forEach((node, index) => {
            gsap.to(node, {
              y: 0,
              scale: 1,
              filter: "none",
              ease: "power3.out",
              scrollTrigger: {
                trigger: node,
                start: "top 78%",
                end: "top 44%",
                scrub: 0.8,
              },
              delay: index * 0.02,
            });
          });
        } else {
          // Set initial dimmed state
          gsap.set(allElements, {
            opacity: 0.15,
            filter: "grayscale(100%)",
            scale: (index, target) => target.classList?.contains("flowNode") ? 0.95 : 1
          });

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
