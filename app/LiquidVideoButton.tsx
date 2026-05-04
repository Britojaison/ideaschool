"use client";

import LiquidGlass from "liquid-glass-react";

export default function LiquidVideoButton() {
  const goToVideo = () => {
    window.location.hash = "video";
  };

  return (
    <button
      className="videoGlassShell"
      type="button"
      aria-label="Watch video"
      onClick={goToVideo}
    >
      <LiquidGlass
        className="videoGlass"
        displacementScale={72}
        blurAmount={0.08}
        saturation={165}
        aberrationIntensity={2}
        elasticity={0.22}
        cornerRadius={100}
        padding="0"
        mode="prominent"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "249px",
          height: "59px",
        }}
      >
        <span className="videoButtonContent">
          <span className="playIcon" />
          <span>Watch Video</span>
        </span>
      </LiquidGlass>
    </button>
  );
}
