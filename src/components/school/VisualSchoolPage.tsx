"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Shell from "@/components/global/Shell";
import IconMarquee from "@/components/global/IconMarquee";
import Accordion from "@/components/ui/Accordion";
import CurtainSlider from "@/components/ui/curtain-slider/CurtainSlider";
import styles from "./VisualSchoolPage.module.css";
import TextAnimation from "@/components/ui/staggerText";

import c1 from "@public/images/Gemini_Generated_Image_e3vatne3vatne3va.png";
import c2 from "@public/images/Gemini_Generated_Image_n9gxwhn9gxwhn9gx.png";
import c3 from "@public/images/Gemini_Generated_Image_72xeoz72xeoz72xe.png";
import c4 from "@public/assets/images/c4.png";
import iconHourglass from "@public/images/visualpage/icon-hourglass.png";
import iconStar from "@public/images/visualpage/icon-star.png";
import iconGrid from "@public/images/visualpage/icon-grid.png";
import iconSemicircles from "@public/images/visualpage/icon-semicircles.png";
import whyCardIcon1 from "@public/images/visualpage/why-card-icon-1.png";
import whyCardIcon2 from "@public/images/visualpage/why-card-icon-2.png";
import whyCardIcon3 from "@public/images/visualpage/why-card-icon-3.png";
import whyCardIcon4 from "@public/images/visualpage/why-card-icon-4.png";


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
    title: "Full Stack Video Editing & AI Mastery",
    tags: ["FLAGSHIP PROGRAM", "24 WEEKS"],
    image: c1,
    href: "/full-stack-video-editing-ai-mastery",
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
    title: "High Paying Video Editing",
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

const agencyAdvantages = [
  {
    index: "01",
    tag: "DIRECT MENTORSHIP",
    title: "Agency Mentorship, Not Course Instructors",
    description: "You learn directly from senior editors and art directors who manage client deliverables and commercial campaigns daily.",
    highlight: "Senior Editors & Art Directors",
    icon: whyCardIcon1,
  },
  {
    index: "02",
    tag: "LIVE STAKES",
    title: "Real Client\nExposure",
    description: "No hypothetical case studies. Work on raw footage, strict brand guidelines, tight turnaround deadlines, and actual stakeholder feedback.",
    highlight: "Raw Commercial Footage",
    icon: whyCardIcon2,
  },
  {
    index: "03",
    tag: "MARKET PROOF",
    title: "Commercial-Grade Portfolio",
    description: "Graduate with work you can immediately send to creative agencies, production houses, or freelance clients.",
    highlight: "Pitch-Ready Client Work",
    icon: whyCardIcon3,
  },
  {
    index: "04",
    tag: "CREATIVE CADENCE",
    title: "Fast-Paced Creative Pipeline",
    description: "Understand the business of visuals—brief decomposition, client revisions, storytelling rhythm, and output optimization.",
    highlight: "Brief to Delivery Pipeline",
    icon: whyCardIcon4,
  },
];

type HeroVideoId = "overview" | "curriculum" | "portfolio";

const disciplines = [
  {
    index: "01",
    title: "Editing",
    copy: "Shape pace, emotion, structure and attention.",
  },
  {
    index: "02",
    title: "Filmmaking",
    copy: "Develop ideas through scripting, direction and production.",
  },
  {
    index: "03",
    title: "Motion & Design",
    copy: "Use typography, composition and movement with purpose.",
  },
  {
    index: "04",
    title: "Creative AI",
    copy: "Explore new production possibilities while keeping human direction at the centre.",
  },
];

const whoIsItFor = [
  {
    id: "track-1",
    title: "VISUAL EDITING FOUNDATIONS",
    topics: [
      "Premiere Pro & Timeline Mastery",
      "Short-Form Retention & Cutting Rhythm",
      "Raw Commercial Rushes & First Portfolio Reel",
      "Direct Agency Mentorship & Timeline Reviews",
    ],
    image: "/images/whoStudents & Career Switchers.webp",
    imagePosition: "center 15%",
    bgColor: "#552ead",
    textColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.9)",
    accentColor: "#d9fa2f",
    sharpShadowColor: "#d9fa2f",
  },
  {
    id: "track-2",
    title: "COMMERCIAL RHYTHM & SOUND",
    topics: [
      "Advanced Story Rhythm & Pacing Optimization",
      "Colour Grading & Commercial Sound Design",
      "Deconstructing Brand Briefs & Director Feedback",
      "Fast-Turnaround Agency Pipeline Integration",
    ],
    image: "/images/whoContent Creators.webp",
    imagePosition: "center 10%",
    bgColor: "#efeeea",
    textColor: "#0a0a0c",
    secondaryTextColor: "rgba(10, 10, 12, 0.85)",
    accentColor: "#0a0a0c",
    sharpShadowColor: "#cd0c41",
  },
  {
    id: "track-3",
    title: "CREATING FOR YOUR OWN WORK",
    topics: [
      "End-to-End Campaign Direction & Creative Control",
      "Creative AI Toolchains for High-Velocity Output",
      "Direct-Response Visuals & Brand Storytelling",
      "Full Commercial Master Delivery from Concept to Screen",
    ],
    image: "/images/whoEntrepreneurs & Brand Owners.webp",
    imagePosition: "center 5%",
    bgColor: "#cd0c41",
    textColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.9)",
    accentColor: "#ffb621",
    sharpShadowColor: "#ffb621",
  },
];

const visualSchoolWorkImages = [
  {
    src: "/images/DSC00024.webp",
    alt: "Students working in editing lab",
    title: "Edit",
    // label: "Lab 01",
  },
  {
    src: "/images/DSC00033.webp",
    alt: "Directing and visual storytelling",
    title: "Direct",
    label: "Lab 02",
  },
  {
    src: "/images/gallery10.webp",
    alt: "Classroom studio production",
    title: "Shoot",
    // label: "Lab 03",
  },
  {
    src: "/images/DSC00057.webp",
    alt: "Visual School workshop and mentoring",
    title: "Process",
    // label: "Lab 04",
  },
];

const practitioners = [
  {
    name: "Dhananjayan S.",
    role: "CEO, 88GB",
    image: "/assets/images/mentor_ARJUN.webp",
  },
  {
    name: "Elamparithi",
    role: "Head of Design, 88GB",
    image: "/assets/images/wepparithi12.webp",
  },
  {
    name: "Ajay Karthik",
    role: "Video Editor, 88GB",
    image: "/assets/images/mentor_AJAY.webp",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Senior Creative Strategist, 88GB",
    image: "/assets/images/mentor_CHANDRU.webp",
  },
];


export default function VisualSchoolPage() {
  const [audibleVideo, setAudibleVideo] = useState<HeroVideoId | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const cardWideRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayVideoRef = useRef<HTMLDivElement>(null);
  const overlayVideoElRef = useRef<HTMLVideoElement>(null);
  const overlayContentRef = useRef<HTMLDivElement>(null);
  const stackedVideo1Ref = useRef<HTMLDivElement>(null);
  const stackedVideo1ElRef = useRef<HTMLVideoElement>(null);
  const stackedVideo2Ref = useRef<HTMLDivElement>(null);
  const stackedVideo2ElRef = useRef<HTMLVideoElement>(null);
  const visualSchoolIntroRef = useRef<HTMLElement>(null);
  const disciplinesSectionRef = useRef<HTMLElement>(null);

  // Curriculum Animation Refs
  const curriculumSectionRef = useRef<HTMLElement>(null);
  const nikeImageRef = useRef<HTMLDivElement>(null);
  const leftQuoteRef = useRef<HTMLDivElement>(null);
  const rightQuoteRef = useRef<HTMLDivElement>(null);
  const whoSectionRef = useRef<HTMLElement>(null);
  const whoCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const workSectionRef = useRef<HTMLElement>(null);
  const practitionersSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLElement>(null);
  const trainScrollRef = useRef<HTMLDivElement>(null);

  const toggleHeroVideoAudio = (videoId: HeroVideoId) => {
    const videos: Record<HeroVideoId, HTMLVideoElement | null> = {
      overview: overlayVideoElRef.current,
      curriculum: stackedVideo1ElRef.current,
      portfolio: stackedVideo2ElRef.current,
    };

    const nextAudibleVideo = audibleVideo === videoId ? null : videoId;

    Object.entries(videos).forEach(([id, video]) => {
      if (!video) return;
      const shouldPlayAudio = id === nextAudibleVideo;
      video.muted = !shouldPlayAudio;
      video.volume = shouldPlayAudio ? 1 : 0;
      if (shouldPlayAudio) void video.play();
    });

    setAudibleVideo(nextAudibleVideo);
  };

  const renderAudioButton = (videoId: HeroVideoId) => {
    const isAudible = audibleVideo === videoId;

    return (
      <button
        type="button"
        className={styles.audioToggle}
        aria-label={isAudible ? "Mute video audio" : "Enable video audio"}
        aria-pressed={isAudible}
        onClick={() => toggleHeroVideoAudio(videoId)}
      >
        {isAudible ? <Volume2 size={18} strokeWidth={2.4} /> : <VolumeX size={18} strokeWidth={2.4} />}
      </button>
    );
  };

  const scrollToPrograms = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    window.dispatchEvent(new Event("visual-scroll-to-programs"));
  };

  useEffect(() => {
    const goToPrograms = () => {
      if (!disciplinesSectionRef.current) return;
      const headerOffset = 120;
      const target = window.scrollY + disciplinesSectionRef.current.getBoundingClientRect().top - headerOffset;
      const handledBySmoothScroll = !window.dispatchEvent(new CustomEvent<number>("idea-scroll-to", { detail: target, cancelable: true }));
      if (!handledBySmoothScroll) window.scrollTo({ top: target, behavior: "smooth" });
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
      if (!cardWideRef.current || !overlayVideoRef.current || !overlayRef.current) return;
      const cardRect = cardWideRef.current.getBoundingClientRect();
      const overlayRect = overlayRef.current.getBoundingClientRect();

      // Use offset dimensions to avoid skew bounding box distortion
      const width = cardWideRef.current.offsetWidth;
      const height = cardWideRef.current.offsetHeight;

      // Calculate center to ensure perfect placement regardless of CSS transforms
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
        borderRadius: window.innerWidth <= 800 ? 18 : 30,
      });
    };

    updateInitialPosition();
    const initTimer = setTimeout(updateInitialPosition, 60);

    // Hook into ScrollTrigger refresh so invalidation works correctly
    ScrollTrigger.addEventListener("refreshInit", updateInitialPosition);

    const isMobile = window.innerWidth <= 800;

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "visual-video-stack",
        trigger: containerRef.current,
        start: "top top",
        end: isMobile ? "+=220%" : "+=270%",
        scrub: isMobile ? 0.35 : true,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

    const stackedScale = isMobile ? 1 : 0.95;
    const stackedScaleBack = isMobile ? 1 : 0.91;

    // Make the overlay visible and fade out the original card
    tl.set(cardWideRef.current, { opacity: 0 }, 0);
    tl.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" }, 0);

    // Fade out elements in the hero
    tl.to('.heroFadeOut', { autoAlpha: 0, y: -20, duration: 0.5 }, 0);

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

    // Pause on Card 0 so user can view/read it
    tl.to({}, { duration: 0.3 }, 1.0);

    // Bring in Stacked Video 1 (Curriculum)
    tl.to(overlayVideoRef.current, { scale: stackedScale, borderRadius: "32px", duration: 1 }, 1.3);
    tl.fromTo(stackedVideo1Ref.current,
      { y: "100vh", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
      1.3
    );

    // Pause on Card 1
    tl.to({}, { duration: 0.3 }, 2.3);

    // Bring in Stacked Video 2 (Outcomes / Portfolio)
    tl.to(overlayVideoRef.current, { scale: stackedScaleBack, duration: 1 }, 2.6);
    tl.to(stackedVideo1Ref.current, { scale: stackedScale, borderRadius: "32px", duration: 1 }, 2.6);
    tl.fromTo(stackedVideo2Ref.current,
      { y: "100vh", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
      2.6
    );

    // Pause on Card 2 before pin concludes
    tl.to({}, { duration: 0.4 }, 3.6);

    return () => ScrollTrigger.removeEventListener("refreshInit", updateInitialPosition);
  }, { scope: containerRef });

  useGSAP(() => {
    if (!visualSchoolIntroRef.current) return;

    gsap.fromTo(
      visualSchoolIntroRef.current.querySelectorAll(`.${styles.advantageCard}`),
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: visualSchoolIntroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: visualSchoolIntroRef });


  useEffect(() => {
    const updateGridOffsets = () => {
      const sections = [heroRef, visualSchoolIntroRef, disciplinesSectionRef, whoSectionRef, workSectionRef, practitionersSectionRef, faqSectionRef];
      sections.forEach(ref => {
        if (ref.current) {
          ref.current.style.setProperty('--section-offset-y', `${ref.current.offsetTop}px`);
        }
      });
    };

    // Run on mount, resize, and ScrollTrigger refresh
    updateGridOffsets();
    window.addEventListener('resize', updateGridOffsets);
    ScrollTrigger.addEventListener('refresh', updateGridOffsets);
    return () => {
      window.removeEventListener('resize', updateGridOffsets);
      ScrollTrigger.removeEventListener('refresh', updateGridOffsets);
    };
  }, []);

  useGSAP(() => {
    if (!whoSectionRef.current) return;

    gsap.to(`.${styles.page}`, {
      backgroundColor: "#0B0B0A",
      color: "#FBFAF2",
      scrollTrigger: {
        trigger: whoSectionRef.current,
        start: "top 65%",
        end: "top 35%",
        scrub: true,
      }
    });

    // Stacking card animation using ScrollTrigger
    const cards = whoCardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
      const topOffset = 110;
      card.style.top = `${topOffset}px`;

      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];

        ScrollTrigger.create({
          trigger: nextCard,
          start: `top ${topOffset + 80}px`,
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const scale = 1 - self.progress * 0.05;
            const brightness = 1 - self.progress * 0.35;
            gsap.to(card, {
              scale,
              filter: `brightness(${brightness})`,
              duration: 0.1,
              overwrite: "auto",
            });
          },
        });
      }
    });
  }, { scope: whoSectionRef });

  useGSAP(() => {
    if (!workSectionRef.current) return;

    gsap.fromTo(
      workSectionRef.current.querySelectorAll(`.${styles.workContentWrapper}`),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: workSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: workSectionRef });

  useGSAP(() => {
    if (!practitionersSectionRef.current) return;

    gsap.fromTo(
      practitionersSectionRef.current.querySelectorAll(`.${styles.practitionerCard}`),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: practitionersSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: practitionersSectionRef });

  return (
    <Shell headerOverlay>
      <div className={styles.page} data-header-theme="dark">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.gridColumns} aria-hidden="true" />
        <div className={styles.gridRows} aria-hidden="true" />
        <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
          <section className={styles.hero} ref={heroRef} data-header-theme="dark">
            <div className={`${styles.heroShape} heroFadeOut`} aria-hidden="true" />
            <div className={`container ${styles.heroInner}`}>
              <div className={`${styles.heroCopy} heroFadeOut`}>
                <h1>
                  <span className={styles.headlineTop}>Master Visual Storytelling</span>{" "}
                  <span className={styles.headlineAccent}>on Real Client Briefs.</span>
                </h1>
                <p className={styles.heroIntro}>
                  <TextAnimation divideBy="word" delay={0.35}>
                    For people who want to tell stronger stories through editing, filmmaking, design and Creative AI.
                  </TextAnimation>
                </p>
                <div className={styles.heroMarquee}>
                  <IconMarquee />
                </div>
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
                    <source src="/images/vsl-ideaschool-aug11.mp4" type="video/mp4" />
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
              </div>
            </div>
          </section>

          {/* Absolute Overlay for Second Section Animation */}
          <div className={styles.absoluteOverlay} ref={overlayRef}>
            <div className={styles.overlayVideo} ref={overlayVideoRef}>
              <video ref={overlayVideoElRef} autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/images/vsl-ideaschool-aug11.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent} ref={overlayContentRef}>
                <p className={styles.overlayLabel}>24 WEEK FLAGSHIP PROGRAM</p>
                <h2>Full Stack Video Editing &amp; AI Mastery</h2>
                <div className={styles.overlayActions}>
                  <Link href="/full-stack-video-editing-ai-mastery" className={styles.btnPrimary}>Explore Full Course</Link>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                  >
                    Apply Now <b>→</b>
                  </button>
                </div>
              </div>
              {renderAudioButton("overview")}
            </div>
          </div>

          <div className={styles.stackedVideoWrapper}>
            {/* Stacked Video 1 */}
            <div className={styles.stackedVideo} ref={stackedVideo1Ref}>
              <video ref={stackedVideo1ElRef} autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/zaman_case_study.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent}>
                <p className={styles.overlayLabel}>COMPLETE COURSE CURRICULUM</p>
                <h2>From Story to Final Cut</h2>
                <div className={styles.overlayActions}>
                  <Link href="/full-stack-video-editing-ai-mastery" className={styles.btnPrimary}>Explore Full Course</Link>
                </div>
              </div>
              {renderAudioButton("curriculum")}
            </div>

            {/* Stacked Video 2 */}
            <div className={styles.stackedVideo} ref={stackedVideo2Ref}>
              <video ref={stackedVideo2ElRef} autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/luis_reel.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent}>
                <p className={styles.overlayLabel}>CAREER-READY OUTCOMES</p>
                <h2>Build an Industry Ready Portfolio</h2>
                <div className={styles.overlayActions}>
                  <Link href="/full-stack-video-editing-ai-mastery" className={styles.btnPrimary}>Explore Full Course</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className={styles.visualSchoolIntro}
          ref={visualSchoolIntroRef}
          data-header-theme="light"
          aria-label="Why Visual School - The Agency-Led Advantage"
        >
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />
          <div className={`container ${styles.visualSchoolIntroInner}`}>
            <div className={styles.visualSchoolIntroTop}>
              {/* <div className={styles.introEyebrowWrapper}>
                <span className={styles.sectionLabelBadge}>
                  <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                  WHY VISUAL SCHOOL?
                </span>
              </div> */}
              <h2 className={styles.visualSchoolIntroHeading}>
                <TextAnimation divideBy="word" delay={0.08}>
                  Work on real client briefs, Not hypothetical exercises.
                </TextAnimation>
              </h2>
            </div>

            <div className={styles.advantageGrid}>
              {agencyAdvantages.map((item, index) => {
                const cardColorClass =
                  index % 2 === 0 ? styles.cardPurple : styles.cardBlack;

                return (
                  <article className={`${styles.advantageCard} ${cardColorClass} agencyCardItem`} key={item.index}>
                    <div className={styles.advantageCardHeader}>
                      <span className={styles.advantageTag}>{item.tag}</span>
                    </div>

                    <div className={styles.advantageCardBody}>
                      <h3 className={styles.advantageCardTitle}>{item.title}</h3>
                      <p className={styles.advantageCardDesc}>{item.description}</p>
                    </div>

                    <div className={styles.advantageCardFooter}>
                      <span className={styles.advantagePillBadge}>
                        {item.highlight}
                      </span>
                      {item.icon && (
                        <div className={styles.advantageBrandIconWrap}>
                          <Image
                            src={item.icon}
                            alt={`${item.tag} icon`}
                            width={40}
                            height={40}
                            className={styles.advantageBrandIcon}
                          />
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.introBottomBar}>
              <div className={styles.introFoundationNote}>
                <span className={styles.foundationLabel}>Built on the IDEA Foundation</span>
                <span className={styles.foundationPillarsMini}>
                  <span><strong className={styles.pillarLetter}>I</strong>ntelligence</span>
                  <span className={styles.pillarSep}>·</span>
                  <span><strong className={styles.pillarLetter}>D</strong>esign</span>
                  <span className={styles.pillarSep}>·</span>
                  <span><strong className={styles.pillarLetter}>E</strong>ntrepreneurship</span>
                  <span className={styles.pillarSep}>·</span>
                  <span><strong className={styles.pillarLetter}>A</strong>rtistry</span>
                </span>
              </div>
              <div className={styles.introPipelineCallout}>
                <span>Senior Mentors &bull; Commercial Briefs &bull; Guaranteed Portfolios</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.disciplinesSection} id="programs" ref={disciplinesSectionRef}>
          <div className={`container ${styles.disciplinesInner}`}>
            {/* <div className={styles.disciplinesEyebrowWrapper}>
              <span className={styles.sectionLabelBadge}>
                <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                THE VISUAL DISCIPLINES
              </span>
            </div> */}

            <div className={styles.disciplinesLockup}>
              <h2 className={styles.disciplinesHeadline}>
                <span className={styles.lockupLine}>
                  <span className={styles.disciplineWord}>Editing</span>
                  <span className={styles.shapeWrapper} aria-hidden="true">
                    <Image
                      src={iconHourglass}
                      alt="IdeaSchool icon"
                      className={styles.brandIcon}
                      width={120}
                      height={120}
                    />
                  </span>
                  <span className={styles.disciplineWord}>Filmmaking</span>
                  <span className={styles.shapeWrapper} aria-hidden="true">
                    <Image
                      src={iconStar}
                      alt="IdeaSchool icon"
                      className={styles.brandIcon}
                      width={120}
                      height={120}
                    />
                  </span>
                  <span className={styles.disciplineWord}>Motion &amp; Design</span>
                  <span className={styles.shapeWrapper} aria-hidden="true">
                    <Image
                      src={iconGrid}
                      alt="IdeaSchool icon"
                      className={styles.brandIcon}
                      width={120}
                      height={120}
                    />
                  </span>
                  <span className={styles.disciplineWord}>Creative AI.</span>
                </span>

                <span className={styles.lockupLine}>
                  <span>Many forms of story.</span>
                  <span className={styles.shapeWrapper} aria-hidden="true">
                    <Image
                      src={iconSemicircles}
                      alt="IdeaSchool icon"
                      className={styles.brandIcon}
                      width={120}
                      height={120}
                    />
                  </span>
                </span>
              </h2>

              <div className={styles.disciplinesCtaRow}>
                <button
                  type="button"
                  className={styles.zonePillBtn}
                  onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                >
                  Explore Programs
                </button>
                <button
                  type="button"
                  className={styles.zoneArrowBtn}
                  aria-label="Explore Programs"
                  onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                >
                  <ArrowRight size={20} strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Who Visual School Is For Section */}
        <section className={`${styles.whoSection} ${styles.lightGridMode}`} ref={whoSectionRef} data-header-theme="dark">
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className={styles.whoHeader}>
              {/* <div className={styles.whoEyebrowWrapper}>
                <span className={`${styles.sectionLabelBadge} ${styles.sectionLabelBadgeDark}`}>
                  <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                  WHO VISUAL SCHOOL IS FOR
                </span>
              </div> */}
              <h2 className={styles.whoHeading}>
                <span className={styles.whoHeadingWhite}>DIFFERENT STARTING POINTS.</span>{" "}
                <span className={styles.whoHeadingGradient}>ONE SHARED CRAFT.</span>
              </h2>
            </div>

            <div className={styles.whoCardsStackWrapper}>
              {whoIsItFor.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    whoCardsRef.current[i] = el;
                  }}
                  className={styles.whoStackCard}
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.textColor,
                    boxShadow: `-12px 14px 0px 0px ${item.sharpShadowColor}`,
                    border: "none",
                  }}
                >
                  {/* Left Content */}
                  <div className={styles.whoCardContent}>
                    <h3
                      className={styles.whoModuleTitle}
                      style={{ color: item.textColor }}
                    >
                      {item.title}
                    </h3>

                    {/* Topics Bullet List with checkmarks */}
                    <ul className={styles.whoTopicList}>
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx} className={styles.whoTopicItem}>
                          <span
                            className={styles.whoCheckIconWrap}
                            style={{ color: item.accentColor }}
                            aria-hidden="true"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.707a1 1 0 00-1.414-1.414L10 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6z"
                              />
                            </svg>
                          </span>
                          <span
                            className={styles.whoTopicText}
                            style={{ color: item.secondaryTextColor }}
                          >
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Media Preview */}
                    <div className={styles.whoCardMedia}>
                      <div className={styles.whoImageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 550px"
                          className={styles.whoModuleImage}
                          style={{ objectPosition: item.imagePosition || "center top" }}
                        />
                        <div className={styles.whoImageOverlay} />
                      </div>
                    </div>
                </div>
              ))}
            </div>

            <div className={styles.whoBottomStrip}>
              <div className={styles.whoPillarsGroup}>
                <span className={styles.whoPillarItem}>Senior Mentors</span>
                <span className={styles.whoPillarSep}>·</span>
                <span className={styles.whoPillarItem}>Raw Commercial Footage</span>
                <span className={styles.whoPillarSep}>·</span>
                <span className={styles.whoPillarItem}>Iterative Creative Reviews</span>
                <span className={styles.whoPillarSep}>·</span>
                <span className={styles.whoPillarItem}>No Academic Fluff</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work From Visual School Section */}
        <section className={styles.workSection} ref={workSectionRef}>
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className={styles.workHeader}>
              <div className={styles.workTitleCol}>
                {/* <span className={styles.sectionLabelBadge}>
                  <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                  WORK FROM VISUAL SCHOOL
                </span> */}
                <h2>
                  <TextAnimation divideBy="word" delay={0.1}>See the process in</TextAnimation>
                  <br />
                  <TextAnimation divideBy="word" delay={0.25}>the final frame.</TextAnimation>
                </h2>
              </div>
              <div className={styles.workIntroCol}>
                <p>
                  <TextAnimation divideBy="word" delay={0.4}>
                    Films, edits, design experiments and AI-assisted visual projects developed across Visual School programs and workshops.
                  </TextAnimation>
                </p>
              </div>
            </div>

            <div className={styles.workContentWrapper}>
              {/* Production Monitor HUD Frame Overlay */}
              <div className={styles.monitorHudOverlay} aria-hidden="true">
                <div className={styles.monitorTopBar}>
                  <div className={styles.monitorRecGroup}>
                    <span className={styles.monitorRecDot} />
                    <span className={styles.monitorRecText}>REC</span>
                    <span className={styles.monitorFpsBadge}>24 FPS</span>
                    <span className={styles.monitorResBadge}>4K UHD</span>
                  </div>
                  <div className={styles.monitorMetaGroup}>
                    <span className={styles.monitorTimecode}>TC 00:04:18:12</span>
                    <span className={styles.monitorFeedTag}>LIVE STUDIO FEED</span>
                  </div>
                </div>

                {/* Camera Viewfinder Crop Marks */}
                <span className={`${styles.cornerCrop} ${styles.cornerTopLeft}`} />
                <span className={`${styles.cornerCrop} ${styles.cornerTopRight}`} />
                <span className={`${styles.cornerCrop} ${styles.cornerBottomLeft}`} />
                <span className={`${styles.cornerCrop} ${styles.cornerBottomRight}`} />

                {/* Viewfinder Center Reticle */}
                <div className={styles.centerReticle}>
                  <span className={styles.reticleCross} />
                </div>
              </div>

              <div className={styles.workImageWrapper}>
                <CurtainSlider
                  auto={3}
                  duration={1.2}
                  images={visualSchoolWorkImages}
                  onChange={() => { }}
                />
              </div>
              {/* <div className={styles.workTextPanel}>
                <span className={styles.workPanelSubtitle}>STUDENT WORK</span>
                <h3 className={styles.workPanelTitle}>
                  EVERY PROJECT<br />STARTS WITH<br />A DIRECTION.
                </h3>
                <p className={styles.workPanelDesc}>
                  The work improves through practice, feedback and revision.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Practitioners in the Room Section */}
        <section className={styles.practitionersSection} ref={practitionersSectionRef}>
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className={styles.practitionersHeader}>
              <div className={styles.practitionersTitleCol}>
                {/* <span className={styles.sectionLabelBadge}>
                  <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                  PEOPLE YOU LEARN WITH
                </span> */}
                <h2>
                  Practitioners in<br />the room.
                </h2>
              </div>
              <div className={styles.practitionersIntroCol}>
                <p>
                  Learn with people who work across creative direction, design, editing and production.
                </p>
              </div>
            </div>

            <div className={styles.practitionersGrid}>
              {practitioners.map((person, index) => {
                const cardColorClass =
                  index % 2 === 0 ? styles.practitionerPurple : styles.practitionerBlack;

                return (
                  <div
                    className={`${styles.practitionerCard} ${cardColorClass}`}
                    key={person.name}
                  >
                    <div className={styles.practitionerImageWrapper}>
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className={styles.practitionerImage}
                        sizes="(max-width: 800px) 260px, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className={styles.practitionerMeta}>
                      <h3>{person.name}</h3>
                      <p>{person.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`${styles.faqSection} ${styles.lightGridMode}`} ref={faqSectionRef} data-section="faq">
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className={styles.faqHeader}>
              {/* <span className={`${styles.sectionLabelBadge} ${styles.sectionLabelBadgeDark}`}>
                <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
                COMMON QUESTIONS
              </span> */}
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
              <div className={styles.faqListWrapper}>
                <Accordion items={[
                  {
                    q: "Do I need prior experience?",
                    a: "No. This program is designed for everyone from complete beginners to experienced editors looking to upgrade their skills and learn modern editing workflows."
                  },
                  {
                    q: "What software do I need?",
                    a: "You will need Premiere Pro, After Effects, and access to AI tools like Midjourney and Runway."
                  },
                  {
                    q: "Will the sessions be live?",
                    a: "We offer both self paced modules for independent learning and live cohort based workshops where you can get direct mentor feedback."
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
                    a: "Unlike scattered tutorials, this is a structured, mentor led program with real world projects, industry feedback, and a clear career pathway."
                  }
                ]} />
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
            {/* <span className={`${styles.sectionLabelBadge} ${styles.sectionLabelBadgeDark}`}>
              <span className={styles.sectionLabelSpark} aria-hidden="true">✦</span>
              APPLICATIONS OPEN
            </span> */}
            <h2>
              <TextAnimation divideBy="word" delay={0.1}>Your best work</TextAnimation>
              <br />
              <TextAnimation divideBy="word" delay={0.25}>is still ahead.</TextAnimation>
            </h2>
            <button onClick={() => window.dispatchEvent(new Event('open-home-form'))}>Start your application <b>↗</b></button>
          </div>
        </section>
      </div>
    </Shell>
  );
}
