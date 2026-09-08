"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandCommercialVideo({
  src,
  poster,
  title,
  isActive,
}: {
  src: string;
  poster: string;
  title: string;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!isActive) {
      video.pause();
      video.muted = true;
      setIsMuted(true);
      return;
    }

    video.muted = true;
    setIsMuted(true);
    void video.play();
  }, [isActive]);

  const toggleAudio = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted && video.volume === 0) {
      video.volume = 1;
    }
  };

  const playWhenReady = () => {
    if (isActive) {
      void videoRef.current?.play();
    }
  };

  return (
    <div className="brandCommercialPlayer">
      <video
        ref={videoRef}
        className="brandCommercialVideo"
        src={src}
        poster={poster}
        autoPlay={isActive}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onCanPlay={playWhenReady}
        controlsList="nodownload noremoteplayback"
        aria-label={`${title} brand commercial`}
      />
      <span className="brandCommercialOverlay" aria-hidden="true" />
      <button
        className="brandCommercialMute"
        type="button"
        aria-label={isMuted ? `Unmute ${title} brand commercial` : `Mute ${title} brand commercial`}
        aria-pressed={!isMuted}
        onClick={toggleAudio}
      >
        {isMuted ? (
          <svg
            className="brandCommercialMuteIcon"
            viewBox="0 0 32 32"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14 8.6 9.3 12.4H6.8c-.9 0-1.6.7-1.6 1.6v4c0 .9.7 1.6 1.6 1.6h2.5L14 23.4z"
              fill="currentColor"
              stroke="none"
            />
            <path d="m19.4 12.2 6.1 6.1" />
            <path d="m25.5 12.2-6.1 6.1" />
          </svg>
        ) : (
          <svg
            className="brandCommercialMuteIcon"
            viewBox="0 0 32 32"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14 8.6 9.3 12.4H6.8c-.9 0-1.6.7-1.6 1.6v4c0 .9.7 1.6 1.6 1.6h2.5L14 23.4z"
              fill="currentColor"
              stroke="none"
            />
            <path d="M19.4 10.6a7.3 7.3 0 0 1 0 10.8" />
            <path d="M22.6 7.5a11.8 11.8 0 0 1 0 17" />
          </svg>
        )}
      </button>
    </div>
  );
}
