"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import Shell from "@/components/global/Shell";
import IconMarquee from "@/components/global/IconMarquee";
import Accordion from "@/components/ui/Accordion";
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
        end: isMobile ? "+=240%" : "+=300%",
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
      { y: "100vh", opacity: 1 },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      1.3
    );

    // Pause on Card 1
    tl.to({}, { duration: 0.3 }, 2.3);

    // Bring in Stacked Video 2 (Outcomes / Portfolio)
    tl.to(overlayVideoRef.current, { scale: stackedScaleBack, duration: 1 }, 2.6);
    tl.to(stackedVideo1Ref.current, { scale: stackedScale, borderRadius: "32px", duration: 1 }, 2.6);
    tl.fromTo(stackedVideo2Ref.current,
      { y: "100vh", opacity: 1 },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      2.6
    );

    // Pause on Card 2 so user can view/read it before unpinning cleanly into the next section
    tl.to({}, { duration: 0.4 }, 3.6);

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
      const sections = [heroRef, visualSchoolIntroRef, disciplinesSectionRef, curriculumSectionRef, whoSectionRef, faqSectionRef];
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

        </div>

        <section className={styles.visualSchoolIntro} ref={visualSchoolIntroRef}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.gridColumns} aria-hidden="true" />
          <div className={styles.gridRows} aria-hidden="true" />
          <div className={`container ${styles.visualSchoolIntroInner}`}>
            <p className={styles.visualSchoolIntroEyebrow}>What is Visual School?</p>
            <h2>A place to develop visual craft.</h2>
            <p>
              Visual School connects story, image, sound and motion. You develop the craft, technical ability and judgment to take an idea from its first reference to the final output.
            </p>
            <p className={styles.foundationNote}>
              <strong>Built on the IDEA foundation:</strong> Intelligence, Design, Entrepreneurship and Artistry.
            </p>
          </div>
        </section>

        <section className={styles.disciplinesSection} id="programs" ref={disciplinesSectionRef}>
          <div className={`container ${styles.disciplinesInner}`}>
            <div className={styles.disciplinesHeader}>
              <div>
                <p className={styles.sectionEyebrow}>The Visual Disciplines</p>
                <h2>Story can take more than one form.</h2>
              </div>
              <p>Visual School connects the disciplines that shape the work people watch, remember and share.</p>
            </div>
            <div className={styles.disciplineGrid}>
              {disciplines.map((discipline) => (
                <article className={styles.disciplineCard} key={discipline.index}>
                  <span>{discipline.index}</span>
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
                <p>College Students seeking a high demand skill with freelancing and career opportunities.</p>
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
                <p>Video Editors with basic skills who want to level up, increase their earning potential, and work on higher value projects.</p>
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
                <p>Content Creators who want to produce professional quality content and grow faster on social media.</p>
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
                <p>Agency Owners who want to build an in house video editing capability and reduce outsourcing costs.</p>
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
                <p>Aspiring Creative Professionals who want to build a long term career in the creator economy.</p>
              </div>
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
