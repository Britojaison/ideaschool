"use client";

import { useEffect, useState } from "react";

export default function LiquidVideoMuteButton({ targetId }: { targetId: string }) {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = document.getElementById(targetId);

    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    const syncMuteState = () => {
      setIsMuted(video.muted || video.volume === 0);
    };

    syncMuteState();
    video.addEventListener("volumechange", syncMuteState);

    return () => {
      video.removeEventListener("volumechange", syncMuteState);
    };
  }, [targetId]);

  const toggleMute = () => {
    const video = document.getElementById(targetId);

    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    video.muted = !video.muted;

    if (!video.muted && video.volume === 0) {
      video.volume = 1;
    }

    void video.play();
  };

  return (
    <button
      className="videoMuteButton"
      type="button"
      aria-label={isMuted ? "Unmute workshop preview video" : "Mute workshop preview video"}
      aria-pressed={!isMuted}
      onClick={toggleMute}
    >
      <span className="videoMuteGlass">
        {isMuted ? (
          <svg
            className="videoMuteIcon"
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
            className="videoMuteIcon"
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
            <path d="M19.2 12.2a4.6 4.6 0 0 1 0 7.6" />
            <path d="M21.8 9.8a8.1 8.1 0 0 1 0 12.4" />
          </svg>
        )}
      </span>
    </button>
  );
}
