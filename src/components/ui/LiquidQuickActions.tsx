"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LiquidGlass from "liquid-glass-react";
import { useResettableLiquidMouse } from "@/hooks/useResettableLiquidMouse";

const actions = [
  {
    href: "https://wa.me/918850774428",
    label: "WhatsApp",
    className: "whatsapp",
    icon: "/images/whatsapp.svg",
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
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const showLabelTemporarily = () => {
    setIsVisible(true);

    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      hideTimerRef.current = null;
    }, 1400);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isVisible) {
      event.preventDefault();
      showLabelTemporarily();
    }
  };

  return (
    <a
      className={`quickActionMount ${action.className}${isVisible ? " isVisible" : ""}`}
      href={action.href}
      aria-label={action.label}
      onClick={handleClick}
      onMouseMove={liquidMouse.handleMouseMove}
      onMouseLeave={liquidMouse.handleMouseLeave}
      suppressHydrationWarning
    >
      <span className="quickActionLabel">8618894857</span>
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
