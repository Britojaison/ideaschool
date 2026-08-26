"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Shell from "@/components/global/Shell";
import IconMarquee from "@/components/global/IconMarquee";
import styles from "./VisualSchoolPage.module.css";
import ideaLogo from "@public/assets/logo/idea logo.webp";

import c1 from "@public/images/Gemini_Generated_Image_e3vatne3vatne3va.png";
import c2 from "@public/images/Gemini_Generated_Image_n9gxwhn9gxwhn9gx.png";
import c3 from "@public/images/Gemini_Generated_Image_72xeoz72xeoz72xe.png";
import c4 from "@public/assets/images/c4.png";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const paths = [
  {
    index: "01",
    category: "flagship",
    title: "Creative Editing & AI Pro",
    tags: ["FLAGSHIP PROGRAM", "24 WEEKS"],
    image: c1,
    href: "/creative-editing-course",
    isFlagship: true,
  },
  {
    index: "02",
    category: "workshop",
    title: "Master Video Editing",
    tags: ["OFFLINE WORKSHOP", "2 DAYS"],
    image: c2,
    href: "/master-video-editing",
    isFlagship: false,
  },
  {
    index: "03",
    category: "workshop",
    title: "High-Paying Video Editing",
    tags: ["OFFLINE WORKSHOP", "1 DAY"],
    image: c3,
    href: "/video-editing",
    isFlagship: false,
  },
  {
    index: "04",
    category: "workshop",
    title: "AI Ad Film Making",
    tags: ["OFFLINE WORKSHOP", "WEEKEND"],
    image: c4,
    href: "/ad-film-making",
    isFlagship: false,
  },
];

export default function VisualSchoolPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const cardWideRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayVideoRef = useRef<HTMLDivElement>(null);
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const stackedVideo1Ref = useRef<HTMLDivElement>(null);
  const stackedVideo2Ref = useRef<HTMLDivElement>(null);
  const conceptSectionRef = useRef<HTMLElement>(null);
  const conceptWordRef = useRef<SVGGElement>(null);
  const conceptTextRef = useRef<SVGTextElement>(null);
  const curriculumWordRef = useRef<SVGGElement>(null);
  const curriculumTextRef = useRef<SVGTextElement>(null);
  const showcaseCardsRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

  // Curriculum Animation Refs
  const curriculumSectionRef = useRef<HTMLElement>(null);
  const nikeImageRef = useRef<HTMLDivElement>(null);
  const leftQuoteRef = useRef<HTMLDivElement>(null);
  const rightQuoteRef = useRef<HTMLDivElement>(null);
  const whoSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLElement>(null);
  const trainScrollRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPrograms = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.dispatchEvent(new Event("visual-scroll-to-programs"));
  };

  useEffect(() => {
    const goToPrograms = () => {
      const trigger = ScrollTrigger.getById("visual-programs");
      if (!trigger) return;

      const target = trigger.start + (trigger.end - trigger.start) * 0.4;
      window.dispatchEvent(new CustomEvent<number>("idea-scroll-to", { detail: target, cancelable: true }));
    };

    window.addEventListener("visual-scroll-to-programs", goToPrograms);
    const initialTimer = window.location.hash === "#programs"
      ? window.setTimeout(goToPrograms, 250)
      : undefined;

    return () => {
      window.removeEventListener("visual-scroll-to-programs", goToPrograms);
      if (initialTimer !== undefined) window.clearTimeout(initialTimer);
    };
  }, []);

  useGSAP(() => {
    const updateInitialPosition = () => {
      if (!cardWideRef.current || !overlayVideoRef.current || !heroRef.current) return;
      const cardRect = cardWideRef.current.getBoundingClientRect();
      const overlayRect = overlayRef.current?.getBoundingClientRect();
      if (!overlayRect) return;

      // Use offset dimensions to avoid skew bounding box distortion
      const width = cardWideRef.current.offsetWidth;
      const height = cardWideRef.current.offsetHeight;

      // Calculate center to ensure perfect placement regardless of CSS transforms like translateY
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const leftOffset = cardCenterX - overlayRect.left - width / 2;
      const topOffset = cardCenterY - overlayRect.top - height / 2;

      gsap.set(overlayVideoRef.current, {
        width: width,
        height: height,
        x: leftOffset,
        y: topOffset,
        skewY: 7,
        borderRadius: 30,
      });
    };

    updateInitialPosition();
    // Hook into ScrollTrigger refresh so invalidation works correctly
    ScrollTrigger.addEventListener("refreshInit", updateInitialPosition);

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "visual-programs",
        trigger: containerRef.current,
        start: "top top",
        end: "+=1100%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    const stackedScale = window.innerWidth <= 800 ? 1 : 0.95;

    // Make the overlay visible and fade out the original card
    tl.set(cardWideRef.current, { opacity: 0 }, 0);
    tl.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" }, 0);

    // Fade out elements in the hero
    tl.to('.heroFadeOut', { opacity: 0, y: -30, duration: 0.5 }, 0);

    // Enlarge the video to fill the hero container
    tl.to(overlayVideoRef.current, {
      width: "100%",
      height: "100%",
      x: 0,
      y: 0,
      skewY: 0,
      borderRadius: "32px",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Fade in the new content
    tl.fromTo(overlayContentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.5
    );

    // Subtle pause before next animation
    tl.to({}, { duration: 0.3 }, 1);

    // Bring in Stacked Video 1
    tl.to(overlayVideoRef.current, { scale: stackedScale, borderRadius: "32px", duration: 1 }, 1.3);
    tl.fromTo(stackedVideo1Ref.current,
      { y: "100vh", opacity: 1 },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      1.3
    );

    // Subtle pause
    tl.to({}, { duration: 0.3 }, 2.3);

    // Bring in Stacked Video 2
    tl.to(stackedVideo1Ref.current, { scale: stackedScale, borderRadius: "32px", duration: 1 }, 2.6);
    tl.fromTo(stackedVideo2Ref.current,
      { y: "100vh", opacity: 1 },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      2.6
    );

    // Subtle pause
    tl.to({}, { duration: 0.3 }, 3.6);

    // Bring in Concept Section (Stacks as a full section)
    tl.to(stackedVideo2Ref.current, { scale: 0.95, borderRadius: "32px", duration: 1 }, 3.9);
    tl.fromTo(conceptSectionRef.current,
      { y: "100vh", opacity: 1, pointerEvents: "auto" },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      3.9
    );
    tl.fromTo(showcaseCardsRef.current,
      { opacity: 0, pointerEvents: "none" },
      { opacity: 1, pointerEvents: "auto", duration: 0.6 },
      3.9
    );

    // Once the concept section fully covers the stacked showcase, remove the
    // underlying videos so they cannot leak into the following curriculum.
    tl.to(
      [overlayRef.current, stackedVideo1Ref.current, stackedVideo2Ref.current],
      { autoAlpha: 0, pointerEvents: "none", duration: 0.15 },
      4.9
    );

    // Concept Draw Animation (Continuous Snake Effect)
    if (conceptTextRef.current) {
      gsap.set(conceptTextRef.current, {
        strokeDasharray: "250 500", // Dash length 250, gap 500
        strokeDashoffset: 0,
      });

      // Infinite looping linear animation
      gsap.to(conceptTextRef.current, {
        strokeDashoffset: -750, // 250 + 500 (one full cycle)
        duration: 3,
        ease: "none", // linear speed for snake
        repeat: -1,
      });
    }

    // Curriculum Draw Animation (Continuous Snake Effect)
    if (curriculumTextRef.current) {
      gsap.set(curriculumTextRef.current, {
        strokeDasharray: "250 500",
        strokeDashoffset: 0,
      });

      gsap.to(curriculumTextRef.current, {
        strokeDashoffset: -750,
        duration: 3,
        ease: "none",
        repeat: -1,
      });
    }

    // Animate the showcase track horizontally over the concept section
    tl.fromTo(cardsTrackRef.current,
      { x: "50vw" },
      {
        x: () => {
          if (!cardsTrackRef.current) return 0;
          const trackWidth = cardsTrackRef.current.scrollWidth;
          return -(trackWidth - window.innerWidth * 0.2); // Leave some padding
        },
        duration: 8.5,
        ease: "none"
      },
      4.4
    );

    // Morph Concept to Curriculum after cards pass
    tl.to(conceptWordRef.current, { opacity: 0, scale: 1.1, duration: 1, transformOrigin: "center center" }, 12.9);
    tl.fromTo(curriculumWordRef.current,
      { opacity: 0, scale: 0.9, transformOrigin: "center center" },
      { opacity: 1, scale: 1, duration: 1 },
      12.9
    );

    return () => ScrollTrigger.removeEventListener("refreshInit", updateInitialPosition);
  }, { scope: containerRef });

  useGSAP(() => {
    if (!curriculumSectionRef.current || !nikeImageRef.current || !leftQuoteRef.current || !rightQuoteRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: curriculumSectionRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(nikeImageRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(leftQuoteRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.6"
      )
      .fromTo(rightQuoteRef.current,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.8"
      );
  }, { scope: curriculumSectionRef });

  useEffect(() => {
    const updateGridOffsets = () => {
      const sections = [heroRef, conceptSectionRef, curriculumSectionRef, whoSectionRef, faqSectionRef];
      sections.forEach(ref => {
        if (ref.current) {
          ref.current.style.setProperty('--section-offset-y', `${ref.current.offsetTop}px`);
        }
      });
    };

    // Run on mount and resize
    updateGridOffsets();
    window.addEventListener('resize', updateGridOffsets);
    return () => window.removeEventListener('resize', updateGridOffsets);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const trainWrapper = trainScrollRef.current;
    if (!trainWrapper) return;

    let scrollAmount = 0;
    let isHovering = false;
    let direction = 1;

    const autoScroll = () => {
      if (!isHovering && trainWrapper) {
        scrollAmount += 1 * direction;
        trainWrapper.scrollLeft = scrollAmount;

        // Reverse scroll if hitting ends
        if (trainWrapper.scrollLeft + trainWrapper.clientWidth >= trainWrapper.scrollWidth - 2) {
          direction = -1;
        } else if (trainWrapper.scrollLeft <= 0) {
          direction = 1;
          scrollAmount = 0; // Prevent negative values
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    trainWrapper.addEventListener('mouseenter', () => (isHovering = true));
    trainWrapper.addEventListener('mouseleave', () => (isHovering = false));
    trainWrapper.addEventListener('touchstart', () => (isHovering = true));
    trainWrapper.addEventListener('touchend', () => (isHovering = false));

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useGSAP(() => {
    if (!whoSectionRef.current) return;

    gsap.to(`.${styles.page}`, {
      backgroundColor: "#0a0a0b",
      color: "#FBFAF2",
      scrollTrigger: {
        trigger: whoSectionRef.current,
        start: "top 65%",
        end: "top 35%",
        scrub: true,
      }
    });

    // Alternating top/bottom card entrance animation
    const cards = whoSectionRef.current.querySelectorAll(`.${styles.whoCard}`);
    cards.forEach((card, i) => {
      const fromY = i % 2 === 0 ? -120 : 120; // odd from top, even from bottom
      gsap.fromTo(card,
        { y: fromY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.12,
        }
      );
    });
  });

  return (
    <Shell headerOverlay>
      <div className={styles.page}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.gridColumns} aria-hidden="true" />
        <div className={styles.gridRows} aria-hidden="true" />
        <div ref={containerRef} style={{ position: "relative" }}>
          <section className={styles.hero} ref={heroRef}>
            <div className={`${styles.heroShape} heroFadeOut`} aria-hidden="true" />
            <div className={`container ${styles.heroInner}`}>
              <div className={`${styles.heroCopy} heroFadeOut`}>
                <p className={styles.kicker}>Visual School</p>
                <h1>Visual stories that<br />move people.</h1>
                <p className={styles.heroIntro}>For editors, filmmakers and visual storytellers ready to turn their taste into industry ready work with an AI native workflow.</p>
                <IconMarquee />
                <Link href="#programs" onClick={scrollToPrograms} className={styles.heroCta}>Explore our programs <b>↘</b></Link>
              </div>
              <div className={styles.collage} aria-label="A collage of visual storytelling work">
                <div className={`${styles.shape} heroFadeOut`} aria-hidden="true" />
                <div className={`${styles.visualCard} ${styles.cardBack} heroFadeOut`}>
                  <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback controlsList="nodownload noremoteplayback" preload="auto" aria-label="Zaman case study reel">
                    <source src="/assets/videos/zaman_case_study.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className={`${styles.visualCard} ${styles.cardWide}`} ref={cardWideRef}>
                  <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback controlsList="nodownload noremoteplayback" preload="auto" aria-label="Creative school showcase reel">
                    <source src="/assets/videos/home-page-video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className={`${styles.visualCard} ${styles.cardFront} heroFadeOut`}>
                  <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback controlsList="nodownload noremoteplayback" preload="auto" aria-label="Luis creative reel">
                    <source src="/assets/videos/luis_reel.mp4" type="video/mp4" />
                  </video>
                </div>
                <span className={`${styles.pixelTag} heroFadeOut`}>SHOWCASE</span>
                <span className={`${styles.sparkOne} heroFadeOut`}>✣</span>
                <span className={`${styles.sparkTwo} heroFadeOut`}>✣</span>
                <Link href="#programs" onClick={scrollToPrograms} className={`${styles.collageCta} heroFadeOut`}>What&apos;s new <b>↘</b></Link>
                <Link href="#programs" onClick={scrollToPrograms} className={`${styles.collageCtaExplore} heroFadeOut`}>Explore <b>↘</b></Link>
              </div>
            </div>
          </section>

          {/* Absolute Overlay for Second Section Animation */}
          <div className={styles.absoluteOverlay} ref={overlayRef}>
            <div className={styles.overlayVideo} ref={overlayVideoRef}>
              <video autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/home-page-video.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent} ref={overlayContentRef}>
                <Image src={ideaLogo} alt="Idea AI School" className={styles.overlayIdeaLogo} style={{ width: "90px", height: "auto" }} />
                <p className={styles.overlayLabel}>24-WEEK FLAGSHIP PROGRAM</p>
                <h2>Creative Editing &amp; AI Pro</h2>
                <p className={styles.overlayDesc}>Build professional editing, motion design, and AI-native production skills through one complete career-focused course.</p>
                <div className={styles.overlayTags}>
                  <span>AI Editing</span>
                  <span>Motion Design</span>
                  <span>Storytelling</span>
                </div>
                <div className={styles.overlayActions}>
                  <Link href="/creative-editing-course" className={styles.btnPrimary}>Explore Full Course</Link>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                  >
                    Apply Now <b>→</b>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.stackedVideoWrapper}>
            {/* Stacked Video 1 */}
            <div className={styles.stackedVideo} ref={stackedVideo1Ref}>
              <video autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/zaman_case_study.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent}>
                <Image src={ideaLogo} alt="Idea AI School" className={styles.overlayIdeaLogo} style={{ width: "90px", height: "auto" }} />
                <p className={styles.overlayLabel}>COMPLETE COURSE CURRICULUM</p>
                <h2>From Story to Final Cut</h2>
                <p className={styles.overlayDesc}>Learn visual storytelling, professional editing, motion graphics, and AI workflows through structured, hands-on modules.</p>
                <div className={styles.overlayTags}>
                  <span>Storytelling</span>
                  <span>Premiere Pro</span>
                  <span>After Effects</span>
                </div>
                <div className={styles.overlayActions}>
                  <Link href="/creative-editing-course" className={styles.btnPrimary}>Explore Full Course</Link>
                </div>
              </div>
            </div>

            {/* Stacked Video 2 */}
            <div className={styles.stackedVideo} ref={stackedVideo2Ref}>
              <video autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/luis_reel.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent}>
                <Image src={ideaLogo} alt="Idea AI School" className={styles.overlayIdeaLogo} style={{ width: "90px", height: "auto" }} />
                <p className={styles.overlayLabel}>CAREER-READY OUTCOMES</p>
                <h2>Build an Industry-Ready Portfolio</h2>
                <p className={styles.overlayDesc}>Graduate with polished portfolio projects, practical production experience, and the skills to work with real creative teams.</p>
                <div className={styles.overlayTags}>
                  <span>Portfolio</span>
                  <span>Mentorship</span>
                  <span>Career Track</span>
                </div>
                <div className={styles.overlayActions}>
                  <Link href="/creative-editing-course" className={styles.btnPrimary}>Explore Full Course</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Concept Drawing Section (Stacked) */}
          <section className={styles.conceptSection} ref={conceptSectionRef}>
            {/* Grid Background */}
            <div className={styles.heroGrid} aria-hidden="true" />
            <div className={styles.gridColumns} aria-hidden="true" />
            <div className={styles.gridRows} aria-hidden="true" />

            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <svg viewBox="0 0 1000 300" className={styles.conceptSvg}>
                {/* Concept text group */}
                <g ref={conceptWordRef} style={{ transformOrigin: "center center" }}>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" textLength="860" lengthAdjust="spacingAndGlyphs" className={styles.conceptTextBase}>concept</text>
                  <text ref={conceptTextRef} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" textLength="860" lengthAdjust="spacingAndGlyphs" className={styles.conceptText}>concept</text>
                </g>

                {/* Curriculum text group (starts hidden) */}
                <g ref={curriculumWordRef} style={{ opacity: 0, transformOrigin: "center center" }}>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" textLength="860" lengthAdjust="spacingAndGlyphs" className={styles.curriculumTextBase}>curriculum</text>
                  <text ref={curriculumTextRef} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" textLength="860" lengthAdjust="spacingAndGlyphs" className={styles.curriculumText}>curriculum</text>
                </g>
              </svg>
            </div>
          </section>

          {/* Course Showcase Cards over Concept */}
          <div className={styles.showcaseCardsContainer} id="programs" ref={showcaseCardsRef}>
            <div className={styles.cardsTrack} ref={cardsTrackRef}>
              
              {/* Flagship Program Card */}
              <Link
                href="/creative-editing-course"
                className={`${styles.showcaseCard} ${styles.flagshipCard}`}
              >
                <div className={styles.cardHeaderBadge}>
                  <span className={styles.flagshipHeaderPill}>
                    <span className={styles.goldStar}>★</span> FLAGSHIP CAREER PROGRAM
                  </span>
                  <span className={styles.durationPillDark}>24 WEEKS</span>
                </div>

                <div className={`${styles.showcaseImage} ${styles.flagshipImage}`}>
                  <Image
                    src={c1}
                    alt="Creative Editing & AI Pro"
                    fill
                    sizes="(max-width: 800px) 100vw, 460px"
                    priority
                  />
                </div>

                <div className={styles.cardTitleRow}>
                  <h3>Creative Editing & AI Pro</h3>
                  <span className={styles.cardArrow}>↗</span>
                </div>

                <div className={styles.showcaseTags}>
                  <span className={styles.flagshipTag}>FLAGSHIP PROGRAM</span>
                  <span className={styles.flagshipTag}>24 WEEKS</span>
                  <span className={styles.careerTag}>CAREER TRACK</span>
                </div>
              </Link>

              {/* In-Track Minimalist Workshop Transition Divider */}
              <div className={styles.trackDivider}>
                <div className={styles.trackDividerLine} />
                <div className={styles.trackDividerContent}>
                  <span className={styles.dividerSparkle}>✣</span>
                  <span className={styles.dividerLabel}>OFFLINE WORKSHOPS</span>
                  <small className={styles.dividerSub}>1–2 Day Masterclasses</small>
                </div>
                <div className={styles.trackDividerLine} />
              </div>

              {/* Offline Workshop Cards */}
              {paths.filter((p) => !p.isFlagship).map((path) => (
                <Link
                  href={path.href}
                  className={`${styles.showcaseCard} ${styles.workshopCard}`}
                  key={path.index}
                >
                  <div className={styles.cardHeaderBadge}>
                    <span className={styles.workshopHeaderPill}>
                      <span className={styles.studioDot} /> OFFLINE WORKSHOP
                    </span>
                    <span className={styles.durationPillLight}>{path.tags[1]}</span>
                  </div>

                  <div className={styles.showcaseImage}>
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 400px"
                    />
                  </div>

                  <div className={styles.cardTitleRow}>
                    <h3>{path.title}</h3>
                    <span className={styles.cardArrow}>↗</span>
                  </div>

                  <div className={styles.showcaseTags}>
                    {path.tags.map((tag) => (
                      <span key={tag} className={styles.workshopTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <section className={styles.curriculumSection} ref={curriculumSectionRef}>
          <div className={`container ${styles.nikeLayoutContainer}`}>
            <div className={styles.nikeLeft}>
              <div className={styles.nikeScatteredContainer}>
                <div className={`${styles.nikeScattered} ${styles.scatter1}`}>
                  <div className={styles.nikeModule}>
                    <span>Foundation <b className={styles.nikeModuleArrow}>↗</b></span>
                    <p>Master the basics of visual storytelling, scripting, and narrative pacing.</p>
                  </div>
                </div>
                <div className={`${styles.nikeScattered} ${styles.scatter2}`}>
                  <div className={styles.nikeModule}>
                    <span>Motion <b className={styles.nikeModuleArrow}>↗</b></span>
                    <p>Dive deep into Premiere Pro and After Effects for dynamic cuts and motion graphics.</p>
                  </div>
                </div>
                <div className={`${styles.nikeScattered} ${styles.scatter3}`}>
                  <div className={styles.nikeModule}>
                    <span>AI Gen <b className={styles.nikeModuleArrow}>↗</b></span>
                    <p>Utilize Midjourney, Runway, and Stable Diffusion to generate custom assets.</p>
                  </div>
                </div>
                <div className={`${styles.nikeScattered} ${styles.scatter4}`}>
                  <div className={styles.nikeModule}>
                    <span>Polish <b className={styles.nikeModuleArrow}>↗</b></span>
                    <p>Bring it all together into an industry-ready portfolio piece and professional color grading.</p>
                  </div>
                </div>
              </div>

              <div className={styles.nikeLogoGraphic}>
                <h2>Curriculum</h2>
                <div className={styles.nikeBtnWrapper}>
                  <a href="/assets/pdf/Program%20Brochure.pdf" target="_blank" rel="noopener noreferrer" className={styles.nikeButton}>Download Brochures <b>↓</b></a>
                </div>
              </div>
            </div>

            <div className={styles.nikeRight}>
              <div className={styles.nikeImageContainer}>
                <div className={styles.nikeQuoteLeft} ref={leftQuoteRef}>“</div>
                <div className={styles.nikeImageWrapper} ref={nikeImageRef}>
                  <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback>
                    <source src="/assets/videos/zaman_case_study.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className={styles.nikeQuoteRight} ref={rightQuoteRef}>”</div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className={`${styles.whoSection} ${styles.lightGridMode}`} ref={whoSectionRef}>
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className={styles.whoHeader}>
              <span className={styles.sectionLabel}>Who is this for?</span>
              <h2>Get on board.</h2>
            </div>
          </div>

          <div className={styles.whoGrid}>

            {/* Card 1 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>Freelancers</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <path d="M55 10 L25 55 L50 55 L45 90 L80 40 L50 40 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Freelancers who want to offer video editing services and increase their income.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>College Students</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <path d="M20 80 L30 85 L85 30 C90 25 90 20 85 15 L80 10 C75 5 70 5 65 10 L10 65 L15 75 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                    <path d="M20 80 L10 90 L20 80 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                    <path d="M65 10 L85 30" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>College Students seeking a high-demand skill with freelancing and career opportunities.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>Video Editors</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <circle cx="30" cy="70" r="15" stroke="currentColor" strokeWidth="8" />
                    <circle cx="70" cy="70" r="15" stroke="currentColor" strokeWidth="8" />
                    <line x1="38" y1="58" x2="80" y2="15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    <line x1="62" y1="58" x2="20" y2="15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </div>
                <p>Video Editors with basic skills who want to level up, increase their earning potential, and work on higher-value projects.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>Content Creators</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <path d="M50 10 L60 35 L90 35 L65 55 L75 85 L50 65 L25 85 L35 55 L10 35 L40 35 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Content Creators who want to produce professional-quality content and grow faster on social media.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>Agency Owners</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <path d="M15 80 L85 80 L95 30 L70 50 L50 20 L30 50 L5 30 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Agency Owners who want to build an in-house video editing capability and reduce outsourcing costs.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className={styles.whoCard}>
              <div className={styles.cardContent}>
                <h3>Creative Pros</h3>
                <div className={styles.cardDoodle}>
                  <svg viewBox="0 0 100 100">
                    <path d="M10 50 Q50 10 90 50 Q50 90 10 50 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="8" />
                  </svg>
                </div>
                <p>Aspiring Creative Professionals who want to build a long-term career in the creator economy.</p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className={`${styles.faqSection} ${styles.lightGridMode}`} ref={faqSectionRef}>
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className={styles.faqHeader}>
              <h2>Frequently Asked Questions</h2>
            </div>

            {/* Center Image */}
            <div className={styles.faqImageWrapper}>
              <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback className={styles.faqImage}>
                <source src="/assets/videos/home-page-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Two-column layout: FAQ left, Contact right */}
            <div className={styles.faqLayout}>
              <div className={styles.faqList}>
                {[
                  {
                    q: "Do I need prior experience?",
                    a: "No. This program is designed for everyone — from complete beginners to experienced editors looking to upgrade their skills and learn modern editing workflows."
                  },
                  {
                    q: "What software do I need?",
                    a: "You will need Premiere Pro, After Effects, and access to AI tools like Midjourney and Runway."
                  },
                  {
                    q: "Will the sessions be live?",
                    a: "We offer both self-paced modules for independent learning and live cohort-based workshops where you can get direct mentor feedback."
                  },
                  {
                    q: "How long is the program?",
                    a: "The core program runs for 12 weeks, with lifetime access to all materials and future updates."
                  },
                  {
                    q: "Can I ask questions during sessions?",
                    a: "Absolutely. Every live session includes dedicated Q&A time, and you'll have access to our community for ongoing support."
                  },
                  {
                    q: "What makes this different from YouTube tutorials?",
                    a: "Unlike scattered tutorials, this is a structured, mentor-led program with real-world projects, industry feedback, and a clear career pathway."
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ""}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className={styles.faqQuestion}>
                      <h4>{faq.q}</h4>
                      <span className={styles.faqIcon}>{openFaq === index ? "˄" : "˅"}</span>
                    </div>
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.faqContact}>
                <h3>Didn&apos;t find the answer you were looking for?</h3>
                <a href="mailto:hello@ideaschool.pro" className={styles.faqMailLink}>Send us an mail</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <span>Applications are open</span>
            <h2>Your best work<br />is still ahead.</h2>
            <button onClick={() => window.dispatchEvent(new Event('open-home-form'))}>Start your application <b>↗</b></button>
          </div>
        </section>
      </div>
    </Shell>
  );
}
