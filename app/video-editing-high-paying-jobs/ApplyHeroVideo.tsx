"use client";

import { useState, useRef, useEffect } from "react";
import LiquidVideoMuteButton from "@/components/ui/LiquidVideoMuteButton";

export default function ApplyHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsReady(true);
    }
  }, []);

  return (
    <div className="programHeroImageWrap programHeroVideoTall">
      <video
        ref={videoRef}
        id="apply-hero-video"
        className={`programHeroVideo${isReady ? " isReady" : ""}`}
        src="/images/ideaschool-88gb-low-bitrate.mp4"
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
