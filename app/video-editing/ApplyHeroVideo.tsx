"use client";

import { useState } from "react";
import LiquidVideoMuteButton from "../LiquidVideoMuteButton";

export default function ApplyHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="programHeroImageWrap programHeroVideoTall">
      <video
        id="apply-hero-video"
        className={`programHeroVideo${isReady ? " isReady" : ""}`}
        src="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback"
        preload="auto"
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => setIsReady(true)}
        aria-label="Video editing workshop preview"
      />
      <LiquidVideoMuteButton
        targetId="apply-hero-video"
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
    </div>
  );
}
