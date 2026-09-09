"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

const restingMouse = {
  globalMousePos: { x: 0, y: 0 },
  mouseOffset: { x: 0, y: 0 },
};

export function useResettableLiquidMouse<T extends HTMLElement>() {
  const [mouse, setMouse] = useState(restingMouse);

  const handleMouseMove = (event: MouseEvent<T>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setMouse({
      globalMousePos: {
        x: event.clientX,
        y: event.clientY,
      },
      mouseOffset: {
        x: ((event.clientX - centerX) / rect.width) * 100,
        y: ((event.clientY - centerY) / rect.height) * 100,
      },
    });
  };

  const handleMouseLeave = () => {
    setMouse(restingMouse);
  };

  return {
    ...mouse,
    handleMouseMove,
    handleMouseLeave,
  };
}
