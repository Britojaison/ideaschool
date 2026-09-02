"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CinematicHeroFlow.module.css";

import MusicToggleButton from "@/components/ui/MusicToggleButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CinematicHeroFlowProps {
  videoSrc?: string;
  mobileVideoSrc?: string;
  heroHeadline1?: React.ReactNode;
  heroHeadline2?: React.ReactNode;
  heroSubtitle?: string;
  studioName?: string;
  tags?: string[];
  leftGiantTop?: React.ReactNode;
  leftGiantBottom?: React.ReactNode;
  rightGiantTop?: React.ReactNode;
  rightGiantBottom?: React.ReactNode;
  editorialParagraphs?: (string | React.ReactNode)[];
  nextSectionId?: string;
}

export default function CinematicHeroFlow({
  videoSrc = "/assets/videos/HOME PAGE VIDEO.mp4",
  mobileVideoSrc,
  heroHeadline1 = "EDITING DEFINES.",
  heroHeadline2 = "CRAFT SELLS.",
  heroSubtitle = "[  Full Stack Video Editing & Creative AI Mastery  ]",
  studioName = "Idea School",
  tags = ["[ 24 WEEK PROGRAM ]", "[ INDUSTRY EXPERIENCE ]", "[ MENTOR LED ]", "[ HYBRID LEARNING ]"],
  leftGiantTop = "INDUSTRY",
  leftGiantBottom = "LED.",
  rightGiantTop = "CRAFT",
  rightGiantBottom = "BUILT.",
  editorialParagraphs = [
    "Most editing courses only teach timeline shortcuts and buttons. But software alone doesn't build a career.",
    "Top agencies and studios hire for pacing, emotional rhythm, and commercial judgment. Idea School is an industry led program built by working commercial filmmakers and lead editors.",
    "We transform ambitious creators, editors, and designers into high tier commercial talent through live brand projects and 1 on 1 mentor critiques.",
    "We teach the craft that builds high performing creative careers."
  ],
  nextSectionId
}: CinematicHeroFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroLayerRef = useRef<HTMLDivElement>(null);
  const heroBottomShadeRef = useRef<HTMLDivElement>(null);
  const directorLayerRef = useRef<HTMLDivElement>(null);
  const directorBlackFadeRef = useRef<HTMLDivElement>(null);
  const fullBlackOverlayRef = useRef<HTMLDivElement>(null);

  // Staggered child refs for second section
  const giantLeftRef = useRef<HTMLHeadingElement>(null);
  const topRightTagsRef = useRef<HTMLDivElement>(null);
  const giantRightRef = useRef<HTMLHeadingElement>(null);
  const editorialBlockRef = useRef<HTMLDivElement>(null);

  // Player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState("00:00");
  const [progressRatio, setProgressRatio] = useState(0);

  // Total ticks in scrubber
  const TOTAL_TICKS = 60;

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Initialize video volume & mute state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncAudioState = () => {
      setIsMuted(video.muted || video.volume === 0);
      setIsPlaying(!video.paused);
    };

    video.muted = true;
    video.volume = 1.0;
    syncAudioState();

    video.addEventListener("volumechange", syncAudioState);
    video.addEventListener("play", syncAudioState);
    video.addEventListener("pause", syncAudioState);

    return () => {
      video.removeEventListener("volumechange", syncAudioState);
      video.removeEventListener("play", syncAudioState);
      video.removeEventListener("pause", syncAudioState);
    };
  }, []);

  // Video timeupdate handler
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 60;
    setCurrentTimeFormatted(formatTime(current));
    setProgressRatio(Math.min(current / duration, 1));
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute toggle - directly controls DOM video element
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    const shouldUnmute = video.muted || video.volume === 0;

    if (shouldUnmute) {
      video.muted = false;
      video.volume = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video play error:", err);
        });
      }
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  // Scrub to position in video
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const duration = videoRef.current.duration || 60;
    videoRef.current.currentTime = ratio * duration;
  };

  // Smooth scroll handler
  const handleScrollToExplore = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // Scroll into the pinned sequence to reveal the Director section
    const targetY = scrollTop + rect.height * 0.48;

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("idea-scroll-to", { detail: targetY })
      );
    }
  }, []);

  // Setup GSAP ScrollTrigger Sequence
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          pinSpacing: true,
          scrub: 1.0,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.25) {
              if (directorLayerRef.current) directorLayerRef.current.style.pointerEvents = "auto";
              if (heroLayerRef.current) heroLayerRef.current.style.pointerEvents = "none";
            } else {
              if (directorLayerRef.current) directorLayerRef.current.style.pointerEvents = "none";
              if (heroLayerRef.current) heroLayerRef.current.style.pointerEvents = "auto";
            }
          }
        }
      });

      // Initial state setup
      gsap.set(heroLayerRef.current, { opacity: 1, y: 0, pointerEvents: "auto" });
      gsap.set(directorLayerRef.current, { opacity: 1, visibility: "visible", pointerEvents: "none" });
      gsap.set(directorBlackFadeRef.current, { opacity: 0 });
      gsap.set(fullBlackOverlayRef.current, { opacity: 0 });

      // Second section initial offsets (deep initial translate for graceful upward drift)
      gsap.set(giantLeftRef.current, { opacity: 0, y: 100 });
      gsap.set(topRightTagsRef.current, { opacity: 0, y: 50 });
      gsap.set(giantRightRef.current, { opacity: 0, y: 120 });
      gsap.set(editorialBlockRef.current, { opacity: 0, y: 70 });

      // =========================================================================
      // CONTINUOUS BLENDED FLOW SEQUENCE (Identical on all viewports)
      // =========================================================================

      // 1. Hero Content fades out & floats up gently (0.00 -> 0.35)
      tl.fromTo(heroLayerRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -80,
          duration: 0.35,
          ease: "power1.inOut",
        },
        0
      );

      // Hero bottom shade dissolves away
      if (heroBottomShadeRef.current) {
        tl.fromTo(heroBottomShadeRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut"
          },
          0
        );
      }

      // Parallax smooth video drift (0.00 -> 1.00)
      tl.to(videoWrapperRef.current, {
        y: "-12%",
        duration: 1.0,
        ease: "none"
      }, 0);

      // 2. Black gradient curtain rises smoothly from bottom (0.08 -> 0.55)
      tl.fromTo(directorBlackFadeRef.current,
        { opacity: 0, y: "30vh" },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "sine.inOut"
        },
        0.08
      );

      // 3. FIRST WAVE (Left & Right Giant Titles visibly rise UP: 0.16 -> 0.65)
      tl.fromTo(giantLeftRef.current,
        { opacity: 0, y: "60vh" },
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power2.out"
        },
        0.16
      );

      tl.to(topRightTagsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.42,
        ease: "power1.out"
      }, 0.22);

      tl.fromTo(giantRightRef.current,
        { opacity: 0, y: "75vh" },
        {
          opacity: 1,
          y: 0,
          duration: 0.50,
          ease: "power2.out"
        },
        0.18
      );

      // 4. SECOND WAVE (Center Editorial text visibly rises UP: 0.52 -> 0.90)
      tl.fromTo(editorialBlockRef.current,
        { opacity: 0, y: "45vh" },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: "power2.out"
        },
        0.52
      );

      // 5. Final solid black immersion (0.78 -> 1.00)
      tl.fromTo(fullBlackOverlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.22,
          ease: "sine.inOut"
        },
        0.78
      );

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        clearTimeout(refreshTimeout);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      data-header-theme="dark"
      data-theme="dark"
    >
      <div ref={pinRef} className={styles.pinContainer}>
        {/* Background Video Canvas */}
        <div ref={videoWrapperRef} className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.bgVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            suppressHydrationWarning
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            {mobileVideoSrc && <source src={mobileVideoSrc} media="(max-width: 767px)" type="video/mp4" />}
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          <div ref={heroBottomShadeRef} className={styles.heroBottomShade} />
        </div>

        {/* 
            Heavy Black Fade Layer:
            Guarantees the bottom 60% is 100% solid pitch black (#000000)
            Top 35% retains video with feathered transition
        */}
        <div ref={directorBlackFadeRef} className={styles.directorBlackFade} />

        {/* Full Solid Black Overlay */}
        <div ref={fullBlackOverlayRef} className={styles.fullBlackOverlay} />

        {/* SECTION 1: HERO LAYER */}
        <div ref={heroLayerRef} className={styles.heroLayer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagBadge}>24-WEEK VIDEO EDITING & CREATIVE AI PROGRAM</div>
            <h1 className={styles.heroTitleFull}>EDITING IS JUST THE START.</h1>
            <p className={styles.heroDescription}>
              Build practical skills across editing, storytelling, motion design and Creative AI—then apply them through briefs, mentor feedback and portfolio projects.
            </p>
            <div className={styles.heroCtaGroup}>
              <a href="#enrol" className={styles.primaryBtn}>APPLY NOW</a>
              <a href="#program" className={styles.secondaryBtn}>EXPLORE THE PROGRAM</a>
            </div>

            <div className={styles.heroStatsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24 weeks</span>
                <span className={styles.statLabel}>TOTAL PROGRAM</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12 + 12</span>
                <span className={styles.statLabel}>TRAINING + EXPERIENCE</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Hybrid</span>
                <span className={styles.statLabel}>OFFLINE + GUIDED LEARNING</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Mentor-led</span>
                <span className={styles.statLabel}>PRACTICE, REVIEW, REVISE</span>
              </div>
            </div>
          </div>

          {/* Bottom Center Music / Sound Toggle Button */}
          <div className={styles.bottomCenterMusic}>
            {isMuted && (
              <div className={styles.musicPromptWrapper}>
                <span className={styles.musicPromptText}>CLICK TO PLAY<br />THE SOUND</span>
                <span className={styles.musicPromptLine} />
              </div>
            )}
            <MusicToggleButton
              isPlaying={!isMuted}
              onToggle={toggleMute}
            />
          </div>

          {/* Bottom Timeline Controller Bar */}
          <div className={styles.timelineBar}>
            <button
              type="button"
              className={styles.playControl}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <span>{isPlaying ? "PLAY" : "PAUSE"}</span>
              <span className={styles.playIcon}>{isPlaying ? "▶" : "❚❚"}</span>
              <span className={styles.timecode}>{currentTimeFormatted}</span>
            </button>

            {/* Visual Tick Track */}
            <div
              className={styles.tickerTrack}
              onClick={handleScrub}
              title="Click to scrub video"
              role="slider"
              aria-valuenow={Math.round(progressRatio * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Video timeline scrubber"
            >
              {Array.from({ length: TOTAL_TICKS }).map((_, i) => {
                const tickRatio = i / TOTAL_TICKS;
                const isActive = tickRatio <= progressRatio;
                const isTall = i % 5 === 0;
                return (
                  <span
                    key={i}
                    className={`${styles.tick} ${isTall ? styles.tallTick : ""} ${
                      isActive ? styles.activeTick : ""
                    }`}
                  />
                );
              })}
              <div
                className={styles.scrubberIndicator}
                style={{ left: `${progressRatio * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: DIRECTOR LED / STUDIO BUILT LAYER */}
        <div ref={directorLayerRef} className={styles.directorLayer}>
          {/* Top Right Studio Metadata (Wave 1) */}
          <div ref={topRightTagsRef} className={styles.directorTopRight}>
            <div className={styles.studioName}>{studioName}</div>
            <div className={styles.disciplineTags}>
              {tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Left Giant Typography (INDUSTRY LED. / DIRECTOR LED. - Wave 1) */}
          <h2 ref={giantLeftRef} className={styles.giantTextLeft}>
            <div>{leftGiantTop}</div>
            <div className={styles.giantAccent}>{leftGiantBottom}</div>
          </h2>

          {/* Center-Left Editorial Narrative Block (Wave 2 - Staggered AFTER Left & Right) */}
          <div ref={editorialBlockRef} className={styles.editorialBlock}>
            {editorialParagraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>

          {/* Right Giant Typography (CRAFT BUILT. / STUDIO BUILT. - Wave 1) */}
          <h2 ref={giantRightRef} className={styles.giantTextRight}>
            <div className={styles.giantAccent}>{rightGiantTop}</div>
            <div>{rightGiantBottom}</div>
          </h2>
        </div>
      </div>
    </div>
  );
}
