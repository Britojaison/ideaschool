"use client";

import { useState } from "react";
import LiquidVideoMuteButton from "../LiquidVideoMuteButton";

export default function ApplyHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

  return (
    <div 
      className="programHeroImageWrap programHeroVideoTall"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      <meta itemProp="name" content="Agency-Level Video Editing Workshop Preview" />
      <meta itemProp="description" content="Preview of the 1-day offline intensive video editing workshop by Idea School in Bengaluru." />
      <meta itemProp="thumbnailUrl" content="https://www.ideaschool.pro/images/edit_1_poster.webp" />
      <meta itemProp="uploadDate" content="2024-05-01T00:00:00+05:30" />
      <meta itemProp="contentUrl" content="https://www.ideaschool.pro/images/video_edit1.mp4" />
      <meta itemProp="duration" content="PT54S" />

      <video
        id="apply-hero-video"
        className={`programHeroVideo${isReady ? " isReady" : ""}`}
        src="/images/video_edit1.mp4"
        poster="/images/edit_1_poster.webp"
        title="Agency-Level Video Editing Workshop Preview"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback"
        preload="metadata"
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
