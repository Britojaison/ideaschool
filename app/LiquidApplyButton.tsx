"use client";

import Link from "next/link";
import LiquidGlass from "liquid-glass-react";
import { useResettableLiquidMouse } from "./useResettableLiquidMouse";

export default function LiquidApplyButton() {
  const liquidMouse = useResettableLiquidMouse<HTMLAnchorElement>();

  return (
    <Link
      className="liquidApplyMount"
      href="/workshop"
      onMouseMove={liquidMouse.handleMouseMove}
      onMouseLeave={liquidMouse.handleMouseLeave}
    >
      <LiquidGlass
        className="liquidApplyGlass"
        globalMousePos={liquidMouse.globalMousePos}
        mouseOffset={liquidMouse.mouseOffset}
        displacementScale={56}
        blurAmount={0.08}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={8}
        padding="0"
        mode="prominent"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        {null}
      </LiquidGlass>
      <span className="liquidApplyText">Apply Now</span>
    </Link>
  );
}
