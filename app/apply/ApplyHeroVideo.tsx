"use client";

import { useState } from "react";
import LiquidVideoMuteButton from "../LiquidVideoMuteButton";

export default function ApplyHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="programHeroImageWrap" style={{ position: "relative" }}>
      <video
        id="apply-hero-video"
        className="programHeroVideo"
        src="/images/prajesh-optimized.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback"
        preload="auto"
        poster="/images/prajesh-poster.webp"
        aria-label="AI ad filmmaking workshop preview"
      />
      <LiquidVideoMuteButton
        targetId="apply-hero-video"
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
    </div>
  );
}
