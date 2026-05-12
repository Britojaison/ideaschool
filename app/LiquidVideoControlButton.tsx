"use client";

import LiquidGlass from "liquid-glass-react";
import { useEffect, useState } from "react";

export default function LiquidVideoControlButton({ targetId }: { targetId: string }) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById(targetId);

    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    const syncVideoState = () => {
      setIsPlaying(!video.paused);
    };

    syncVideoState();
    video.addEventListener("play", syncVideoState);
    video.addEventListener("pause", syncVideoState);

    return () => {
      video.removeEventListener("play", syncVideoState);
      video.removeEventListener("pause", syncVideoState);
    };
  }, [targetId]);

  const toggleVideo = () => {
    const video = document.getElementById(targetId);

    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <button
      className="videoControlMount"
      type="button"
      aria-label={isPlaying ? "Pause Idea School video" : "Play Idea School video"}
      onClick={toggleVideo}
    >
      <LiquidGlass
        className="videoControlGlass"
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={100}
        padding="0"
        mode="prominent"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        {isPlaying ? (
          <span className="videoPauseIcon" aria-hidden="true">
            <span />
            <span />
          </span>
        ) : (
          <span className="videoPlayIcon" aria-hidden="true" />
        )}
      </LiquidGlass>
    </button>
  );
}
