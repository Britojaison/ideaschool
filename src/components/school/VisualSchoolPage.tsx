"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import Shell from "@/components/global/Shell";
import IconMarquee from "@/components/global/IconMarquee";
import Accordion from "@/components/ui/Accordion";
import CurtainSlider from "@/components/ui/curtain-slider/CurtainSlider";
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

const visualSchoolWorkImages = [
  {
    src: "/images/DSC00024.webp",
    alt: "Students working in editing lab",
    title: "Edit",
    label: "Lab 01",
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
    label: "Lab 03",
  },
  {
    src: "/images/DSC00057.webp",
    alt: "Visual School workshop and mentoring",
    title: "Process",
    label: "Lab 04",
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
        end: isMobile ? "+=300%" : "+=380%",
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

    // Pause on Card 2 so user can view/read it
    tl.to({}, { duration: 0.3 }, 3.6);

    // Slide in "What is Visual School?" smoothly directly over the cards
    tl.fromTo(visualSchoolIntroRef.current,
      { y: "100vh" },
      { y: "0%", duration: 1.2, ease: "power2.inOut" },
      3.9
    );

    // Settle on Visual School Intro before pin ends
    tl.to({}, { duration: 0.3 }, 5.1);

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
      const sections = [heroRef, visualSchoolIntroRef, disciplinesSectionRef, curriculumSectionRef, whoSectionRef, workSectionRef, practitionersSectionRef, faqSectionRef];
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
      backgroundColor: "#0a0a0b",
      color: "#FBFAF2",
      scrollTrigger: {
        trigger: whoSectionRef.current,
        start: "top 65%",
        end: "top 35%",
        scrub: true,
      }
    });

    // Staggered card entrance animation
    const cards = whoSectionRef.current.querySelectorAll(`.${styles.whoCard}`);
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.15,
        }
      );
    });
  });

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
      <div className={styles.page}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.gridColumns} aria-hidden="true" />
        <div className={styles.gridRows} aria-hidden="true" />
        <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
          <section className={styles.hero} ref={heroRef}>
            <div className={`${styles.heroShape} heroFadeOut`} aria-hidden="true" />
            <div className={`container ${styles.heroInner}`}>
              <div className={`${styles.heroCopy} heroFadeOut`}>
                <p className={styles.kicker}>Visual School</p>
                <h1>Visual stories that<br />move people.</h1>
                <p className={styles.heroIntro}>For people who want to tell stronger stories through editing, filmmaking, design and Creative AI.</p>
                <button type="button" onClick={scrollToPrograms} className={styles.heroCta}>See the disciplines <b>↘</b></button>
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
              </div>
            </div>
          </section>

          {/* Absolute Overlay for Second Section Animation */}
          <div className={styles.absoluteOverlay} ref={overlayRef}>
            <div className={styles.overlayVideo} ref={overlayVideoRef}>
              <video ref={overlayVideoElRef} autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/assets/videos/home-page-video.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent} ref={overlayContentRef}>
                <Image src={ideaLogo} alt="Idea AI School" className={styles.overlayIdeaLogo} style={{ width: "90px", height: "auto" }} />
                <p className={styles.overlayLabel}>24 WEEK FLAGSHIP PROGRAM</p>
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
              {renderAudioButton("curriculum")}
            </div>

            {/* Stacked Video 2 */}
            <div className={styles.stackedVideo} ref={stackedVideo2Ref}>
              <video ref={stackedVideo2ElRef} autoPlay muted loop playsInline disablePictureInPicture>
                <source src="/images/vsl-ideaschool-aug11.mp4" type="video/mp4" />
              </video>
              <div className={styles.overlayContent}>
                <Image src={ideaLogo} alt="Idea AI School" className={styles.overlayIdeaLogo} style={{ width: "90px", height: "auto" }} />
                <p className={styles.overlayLabel}>CAREER-READY OUTCOMES</p>
                <h2>Build an Industry Ready Portfolio</h2>
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
              {renderAudioButton("portfolio")}
            </div>
          </div>

          <section
            className={styles.visualSchoolIntro}
            ref={visualSchoolIntroRef}
            data-header-theme="light"
          >
            <div className={styles.heroGrid} aria-hidden="true" />
            <div className={styles.gridColumns} aria-hidden="true" />
            <div className={styles.gridRows} aria-hidden="true" />
            <div className={`container ${styles.visualSchoolIntroInner}`}>
              <div className={styles.visualSchoolIntroTop}>
                <p className={styles.visualSchoolIntroEyebrow}>What is Visual School?</p>
                <h2 className={styles.visualSchoolIntroHeading}>
                  A place to develop visual craft.
                </h2>
              </div>

              <div className={styles.visualSchoolIntroBottom}>
                <p className={styles.visualSchoolIntroDesc}>
                  Visual School connects story, image, sound and motion. You develop the craft, technical ability and judgment to take an idea from its first reference to the final output.
                </p>

                <div className={styles.foundationCard}>
                  <p className={styles.foundationTitle}>Built on the IDEA foundation</p>
                  <div className={styles.foundationPillars}>
                    <span className={styles.foundationPillar}>
                      <span className={styles.pillarLetter}>I</span>ntelligence
                    </span>
                    <span className={styles.foundationPillar}>
                      <span className={styles.pillarLetter}>D</span>esign
                    </span>
                    <span className={styles.foundationPillar}>
                      <span className={styles.pillarLetter}>E</span>ntrepreneurship
                    </span>
                    <span className={styles.foundationPillar}>
                      <span className={styles.pillarLetter}>A</span>rtistry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.disciplinesSection} id="programs" ref={disciplinesSectionRef}>
          <div className={`container ${styles.disciplinesInner}`}>
            <div className={styles.disciplinesHeader}>
              <div>
                <p className={styles.sectionEyebrow}>The Visual Disciplines</p>
                <h2>Story can take more than one form.</h2>
              </div>
            </div>
            <div className={styles.disciplineGrid}>
              {disciplines.map((discipline) => (
                <article className={styles.disciplineCard} key={discipline.index}>
                  <div>
                    <h3>{discipline.title}</h3>
                    <p>{discipline.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                    <p>Bring it all together into an industry ready portfolio piece and professional color grading.</p>
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

        {/* Who Visual School Is For Section */}
        <section className={`${styles.whoSection} ${styles.lightGridMode}`} ref={whoSectionRef} data-header-theme="dark">
          {/* Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className={styles.whoHeader}>
              <p className={styles.sectionEyebrow}>Who Visual School Is For</p>
              <h2>Different starting points. One shared interest in visual work.</h2>
            </div>

            <div className={styles.whoGrid}>
              <div className={styles.whoCard}>
                <h3>Starting out</h3>
                <p>You want structure, guidance and a practical introduction to visual work.</p>
              </div>

              <div className={styles.whoCard}>
                <h3>Building on experience</h3>
                <p>You already work with visuals and want to broaden your craft or improve your process.</p>
              </div>

              <div className={styles.whoCard}>
                <h3>Creating for your own work</h3>
                <p>You are a creator, freelancer or team member who wants stronger production skills.</p>
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
                <span className={styles.workEyebrow}>WORK FROM VISUAL SCHOOL</span>
                <h2>
                  See the process in<br />the final frame.
                </h2>
              </div>
              <div className={styles.workIntroCol}>
                <p>
                  Films, edits, design experiments and AI-assisted visual projects developed across Visual School programs and workshops.
                </p>
              </div>
            </div>

            <div className={styles.workContentWrapper}>
              <div className={styles.workImageWrapper}>
                <CurtainSlider
                  auto={3}
                  duration={1.2}
                  images={visualSchoolWorkImages}
                  onChange={() => {}}
                />
              </div>
              <div className={styles.workTextPanel}>
                <span className={styles.workPanelSubtitle}>STUDENT WORK</span>
                <h3 className={styles.workPanelTitle}>
                  EVERY PROJECT<br />STARTS WITH<br />A DIRECTION.
                </h3>
                <p className={styles.workPanelDesc}>
                  The work improves through practice, feedback and revision.
                </p>
              </div>
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
                <span className={styles.practitionersEyebrow}>PEOPLE YOU LEARN WITH</span>
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
              {practitioners.map((person) => (
                <div className={styles.practitionerCard} key={person.name}>
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
              ))}
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
            <span>Applications are open</span>
            <h2>Your best work<br />is still ahead.</h2>
            <button onClick={() => window.dispatchEvent(new Event('open-home-form'))}>Start your application <b>↗</b></button>
          </div>
        </section>
      </div>
    </Shell>
  );
}
