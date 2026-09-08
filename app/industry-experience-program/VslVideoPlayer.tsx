"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface VslVideoPlayerProps {
  src?: string;
  poster?: string;
}

export default function VslVideoPlayer({
  src = "/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4",
  poster,
}: VslVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolume = () => setIsMuted(video.muted || video.volume === 0);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("volumechange", handleVolume);

    video.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("volumechange", handleVolume);
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted && video.volume === 0) {
      video.volume = 1;
    }
    setIsMuted(nextMuted);

    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div className="vslVideoContainer" onClick={togglePlay}>
      <video
        ref={videoRef}
        className="vslVideo"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Industry Experience Program video"
      />

      {!isPlaying && (
        <div className="vslPlayOverlay" aria-hidden="true">
          <div className="vslPlayButton">
            <Play size={28} className="vslPlayIcon" fill="currentColor" />
          </div>
        </div>
      )}

      <button
        className="vslAudioButton"
        type="button"
        aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
        aria-pressed={!isMuted}
        onClick={toggleAudio}
      >
        {isMuted ? (
          <VolumeX size={20} strokeWidth={2.4} />
        ) : (
          <Volume2 size={20} strokeWidth={2.4} />
        )}
      </button>
    </div>
  );
}
