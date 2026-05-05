"use client";

import LiquidGlass from "liquid-glass-react";
import { useResettableLiquidMouse } from "./useResettableLiquidMouse";

export default function LiquidBatchNotice() {
  const liquidMouse = useResettableLiquidMouse<HTMLDivElement>();

  return (
    <div
      className="batchNoticeMount"
      aria-label="Next batch starts on 11th May 2026"
      onMouseMove={liquidMouse.handleMouseMove}
      onMouseLeave={liquidMouse.handleMouseLeave}
    >
      <LiquidGlass
        className="batchNoticeGlass"
        globalMousePos={liquidMouse.globalMousePos}
        mouseOffset={liquidMouse.mouseOffset}
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={10}
        padding="0"
        mode="prominent"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <span className="batchNoticeContent">
          <span className="noticeIcon" aria-hidden="true" />
          <span className="batchNoticeText">
            Next Batch starts on 11th May 2026
          </span>
        </span>
      </LiquidGlass>
    </div>
  );
}
