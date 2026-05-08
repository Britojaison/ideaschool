"use client";

import LiquidGlass from "liquid-glass-react";
import { useResettableLiquidMouse } from "./useResettableLiquidMouse";

export default function LiquidVideoButton() {
  const liquidMouse = useResettableLiquidMouse<HTMLDivElement>();

  const goToVideo = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "#video");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToVideo();
    }
  };

  return (
    <div
      className="videoButtonMount"
      role="button"
      tabIndex={0}
      aria-label="Watch video"
      onClick={goToVideo}
      onKeyDown={handleKeyDown}
      onMouseMove={liquidMouse.handleMouseMove}
      onMouseLeave={liquidMouse.handleMouseLeave}
    >
      <LiquidGlass
        className="videoGlass"
        globalMousePos={liquidMouse.globalMousePos}
        mouseOffset={liquidMouse.mouseOffset}
        displacementScale={64}
        blurAmount={0.0625}
        saturation={0}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={100}
        padding="0"
        mode="standard"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <span className="videoButtonContent">
          <span className="playIcon" />
          <span className="videoButtonLabel">Watch Video</span>
        </span>
      </LiquidGlass>
    </div>
  );
}
