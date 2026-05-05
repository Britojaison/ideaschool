"use client";

import Image from "next/image";
import LiquidGlass from "liquid-glass-react";
import { useResettableLiquidMouse } from "./useResettableLiquidMouse";

const actions = [
  {
    href: "#whatsapp",
    label: "WhatsApp",
    className: "whatsapp",
    icon: "/images/whatsapp.svg",
  },
  {
    href: "#call",
    label: "Call",
    className: "phone",
    icon: "/images/phone.svg",
  },
];

export default function LiquidQuickActions() {
  return (
    <div className="quickActions" aria-label="Quick contact actions">
      {actions.map((action) => (
        <QuickAction action={action} key={action.label} />
      ))}
    </div>
  );
}

function QuickAction({ action }: { action: (typeof actions)[number] }) {
  const liquidMouse = useResettableLiquidMouse<HTMLAnchorElement>();

  return (
    <a
      className={`quickActionMount ${action.className}`}
      href={action.href}
      aria-label={action.label}
      onMouseMove={liquidMouse.handleMouseMove}
      onMouseLeave={liquidMouse.handleMouseLeave}
    >
      <LiquidGlass
        className="quickActionGlass"
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
        <span className="quickActionIcon">
          <Image
            src={action.icon}
            alt=""
            width={64}
            height={64}
            aria-hidden="true"
          />
        </span>
      </LiquidGlass>
    </a>
  );
}
