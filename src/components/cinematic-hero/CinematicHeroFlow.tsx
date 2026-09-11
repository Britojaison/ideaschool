"use client";

import React, { useRef, useState, useEffect } from "react";
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
  heroHeadline1 = "EDITING",
  heroHeadline2 = "START",
  heroSubtitle = "FULL STACK EDITING & CREATIVE AI",
  nextSectionId
}: CinematicHeroFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const editorialHeaderRef = useRef<HTMLDivElement>(null);
  const showcaseFrameRef = useRef<HTMLDivElement>(null);
  const frameControlsRef = useRef<HTMLDivElement>(null);
  const heroBottomShadeRef = useRef<HTMLDivElement>(null);

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

  // Ensure DOM video element stays synchronized with isMuted state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.muted !== isMuted) {
      video.muted = isMuted;
    }
    if (!isMuted && video.volume === 0) {
      video.volume = 1.0;
    }
  }, [isMuted]);

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
      video.play().catch(() => { });
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute toggle - directly controls DOM video element without cancelling gesture
  const toggleMute = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    const shouldUnmute = isMuted || video.muted || video.volume === 0;

    if (shouldUnmute) {
      video.muted = false;
      video.volume = 1.0;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Video play error:", err);
          });
        }
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


  // Setup GSAP ScrollTrigger Sequence
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 821px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            scrub: 1.0,
            anticipatePin: 1,
            refreshPriority: 10,
            onUpdate: (self) => {
              if (editorialHeaderRef.current) {
                editorialHeaderRef.current.style.pointerEvents = self.progress > 0.25 ? "none" : "auto";
                editorialHeaderRef.current.style.visibility = self.progress > 0.25 ? "hidden" : "visible";
              }
            }
          }
        });

        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        // Initial state setup: Editorial Header is visible
        gsap.set(editorialHeaderRef.current, { opacity: 1, y: 0, visibility: "visible", pointerEvents: "auto" });
        gsap.set(frameControlsRef.current, { opacity: 1, visibility: "visible", pointerEvents: "auto" });

        // 1. First scroll clears the masthead and leaves the viewer on the video.
        tl.to(editorialHeaderRef.current,
          {
            opacity: 0,
            y: -34,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0
        );

        // 2. Showcase frame expands to a clean full-video state.
        if (showcaseFrameRef.current) {
          tl.to(showcaseFrameRef.current,
            {
              top: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
            0
          );
        }

      });

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
        {/* SECTION 1: EDITORIAL HEADER (House of Honey Style) */}
        <div ref={editorialHeaderRef} className={styles.editorialHeader} data-header-theme="light">
          <h1 className={styles.editorialTitle}>
            <span className={styles.titleWord}>{heroHeadline1}</span>
            <span className={styles.titleScript}>is just the</span>
            <span className={styles.titleWord}>
              {heroHeadline2}
              <span className={styles.titleDot}>.</span>
            </span>
          </h1>

          <div className={styles.editorialMetaBar}>
            <div className={styles.editorialMetaLeft}>
              <span className={styles.metaEyebrow}>{heroSubtitle}</span>
              <span className={styles.metaSub}>Post-Production · Storytelling · Direction</span>
            </div>

            <div className={styles.editorialMetaRight}>
              <span className={styles.metaEyebrow}>24 WEEKS TOTAL</span>
              <span className={styles.metaSub}>Hybrid Learning · Mentor-Led Reviews</span>
            </div>
          </div>
        </div>

        {/* FRAMED SHOWCASE WINDOW (Cinema Frame) */}
        <div ref={showcaseFrameRef} className={styles.showcaseFrame}>
          <div ref={videoWrapperRef} className={styles.frameVideoContainer}>
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

            {/* Docked Controls Bar */}
            <div ref={frameControlsRef} className={styles.frameControlsBar}>
              <div className={styles.frameLeftControls}>
                <button
                  type="button"
                  className={styles.playControl}
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
                  <span className={styles.playIcon}>{isPlaying ? "❚❚" : "▶"}</span>
                  <span className={styles.timecode}>{currentTimeFormatted}</span>
                </button>

                {/* Scrubber */}
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
                        className={`${styles.tick} ${isTall ? styles.tallTick : ""} ${isActive ? styles.activeTick : ""}`}
                      />
                    );
                  })}
                  <div
                    className={styles.scrubberIndicator}
                    style={{ left: `${progressRatio * 100}%` }}
                  />
                </div>
              </div>

              <div className={styles.frameRightControls}>
                <div
                  className={styles.audioToggleButtonWrapper}
                  onClick={toggleMute}
                  role="button"
                  tabIndex={0}
                  aria-label={isMuted ? "Click to play sound" : "Mute sound"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMute();
                    }
                  }}
                >
                  <span className={styles.audioLabel}>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
                  <MusicToggleButton
                    isPlaying={!isMuted}
                    onToggle={toggleMute}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
