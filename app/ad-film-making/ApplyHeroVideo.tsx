"use client";

import { useState } from "react";
import LiquidVideoMuteButton from "@/components/ui/LiquidVideoMuteButton";
import { ProgressVideo } from "@/components/ui/ProgressVideo";

export default function ApplyHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="programHeroImageWrap" style={{ position: "relative" }}>
      <ProgressVideo containerClassName="w-full h-full">
        <video
          id="apply-hero-video"
          className="programHeroVideo"
          src="/images/advideo1-optimized.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback"
          preload="auto"
          poster="/images/advideo1-poster.jpg"
          aria-label="AI ad filmmaking workshop preview"
        />
      </ProgressVideo>
      <LiquidVideoMuteButton
        targetId="apply-hero-video"
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
    </div>
  );
}
