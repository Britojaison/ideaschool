"use client";

import { useEffect, useRef, useState } from "react";

export default function ProofVideoCard({
  src,
  poster,
  index,
}: {
  src: string;
  poster: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const syncPlayState = () => setIsPlaying(!video.paused);
    const syncMuteState = () => setIsMuted(video.muted || video.volume === 0);

    syncPlayState();
    syncMuteState();
    video.addEventListener("play", syncPlayState);
    video.addEventListener("pause", syncPlayState);
    video.addEventListener("ended", syncPlayState);
    video.addEventListener("volumechange", syncMuteState);

    return () => {
      video.removeEventListener("play", syncPlayState);
      video.removeEventListener("pause", syncPlayState);
      video.removeEventListener("ended", syncPlayState);
      video.removeEventListener("volumechange", syncMuteState);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      document.querySelectorAll<HTMLVideoElement>(".proofVideoNative").forEach((item) => {
        if (item !== video) {
          item.pause();
        }
      });
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;

    if (!video.muted && video.volume === 0) {
      video.volume = 1;
    }
  };

  return (
    <div className="proofVideoPlayer">
      <video
        ref={videoRef}
        className="proofVideoNative"
        src={src}
        poster={poster}
        preload="metadata"
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback"
        aria-label={`Student video feedback ${index + 1}`}
      />
      <span className="proofVideoOverlay" aria-hidden="true" />
      <button
        className="proofVideoAction"
        type="button"
        aria-label={isPlaying ? "Pause student video feedback" : "Play student video feedback"}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <span className="proofVideoPause" aria-hidden="true">
            <span />
            <span />
          </span>
        ) : (
          <span className="proofVideoPlay" aria-hidden="true" />
        )}
      </button>
      <button
        className="proofVideoMute"
        type="button"
        aria-label={isMuted ? "Unmute student video feedback" : "Mute student video feedback"}
        aria-pressed={!isMuted}
        onClick={toggleMute}
      >
        {isMuted ? (
          <svg
            className="proofVideoMuteIcon"
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
            className="proofVideoMuteIcon"
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
      </button>
    </div>
  );
}
