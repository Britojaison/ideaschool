"use client";

import LiquidGlass from "liquid-glass-react";

export default function LiquidVideoControlButton() {
  return (
    <div className="videoControlMount">
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
        onClick={() => undefined}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <span className="videoPauseIcon" aria-label="Pause Idea School video">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </LiquidGlass>
    </div>
  );
}
