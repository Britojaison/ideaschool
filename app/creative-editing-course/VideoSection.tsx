"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./VideoSection.module.css";
import MusicToggleButton from "@/components/ui/MusicToggleButton";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState("00:00");
  const [progressRatio, setProgressRatio] = useState(0);

  const TOTAL_TICKS = 50;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

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

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 60;
    setCurrentTimeFormatted(formatTime(current));
    setProgressRatio(Math.min(current / duration, 1));
  };

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

  const toggleMute = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const shouldUnmute = isMuted || video.muted || video.volume === 0;
    if (shouldUnmute) {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch(() => {});
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const duration = videoRef.current.duration || 60;
    videoRef.current.currentTime = ratio * duration;
  };

  return (
    <section
      id="course-video"
      className={styles.videoSection}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Course Overview Video"
    >
      <div className={styles.videoContainer}>
        {/* The Video */}
        <video
          ref={videoRef}
          className={styles.videoElement}
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
          <source src="/images/vsl-ideaschool-aug11.mp4" type="video/mp4" />
        </video>

        {/* Subtle Vignette Overlay */}
        <div className={styles.videoOverlay} />

        {/* Floating Controls Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.leftControls}>
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

            {/* Scrubber Ticker */}
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

          <div className={styles.rightControls}>
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
              <span className={styles.audioLabel}>
                {isMuted ? "SOUND OFF" : "SOUND ON"}
              </span>
              <MusicToggleButton
                isPlaying={!isMuted}
                onToggle={toggleMute}
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
