"use client";

import { useEffect } from "react";

export default function DisableImageActions() {
  useEffect(() => {
    const isImageTarget = (target: EventTarget | null) =>
      target instanceof HTMLElement && Boolean(target.closest("img"));

    const preventImageAction = (event: Event) => {
      if (isImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventImageAction);
    document.addEventListener("dragstart", preventImageAction);

    return () => {
      document.removeEventListener("contextmenu", preventImageAction);
      document.removeEventListener("dragstart", preventImageAction);
    };
  }, []);

  return null;
}
