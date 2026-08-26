"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DisableImageActions() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }
  }, []);

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
