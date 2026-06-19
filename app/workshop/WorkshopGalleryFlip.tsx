"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const images = [
  { className: "one", src: "https://assets.codepen.io/16327/portrait-image-14.jpg" },
  { className: "two", src: "https://assets.codepen.io/16327/portrait-image-1.jpg" },
  { className: "three", src: "https://assets.codepen.io/16327/portrait-image-12.jpg" },
  { className: "four", src: "https://assets.codepen.io/16327/portrait-image-2.jpg" },
  { className: "five", src: "https://assets.codepen.io/16327/portrait-image-4.jpg" },
  { className: "six", src: "https://assets.codepen.io/16327/portrait-image-8.jpg" },
];

export default function WorkshopGalleryFlip() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const boxIndexRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const modal = modalRef.current;
    if (!wrapper || !modal) return;

    const modalContent = modal.querySelector(".flipGalleryModalContent") as HTMLElement;
    const modalOverlay = modal.querySelector(".flipGalleryOverlay") as HTMLElement;
    const boxes = gsap.utils.toArray<HTMLElement>(".flipGalleryBoxesContainer .flipGalleryBox");
    const boxesContent = gsap.utils.toArray<HTMLElement>(".flipGalleryBoxContent");

    const handlers: Array<() => void> = [];

    boxesContent.forEach((box, i) => {
      const handler = () => {
        if (boxIndexRef.current !== undefined) {
          // Close modal
          const state = Flip.getState(box);
          boxes[boxIndexRef.current].appendChild(box);
          boxIndexRef.current = undefined;

          gsap.to([modal, modalOverlay], {
            autoAlpha: 0,
            ease: "power1.inOut",
            duration: 0.35,
          });

          Flip.from(state, {
            duration: 0.7,
            ease: "power1.inOut",
            absolute: true,
            onComplete: () => gsap.set(box, { zIndex: "auto" }),
          });
          gsap.set(box, { zIndex: 1002 });
        } else {
          // Open modal
          const state = Flip.getState(box);
          modalContent.appendChild(box);
          boxIndexRef.current = i;

          gsap.set(modal, { autoAlpha: 1 });
          Flip.from(state, {
            duration: 0.7,
            ease: "power1.inOut",
          });
          gsap.to(modalOverlay, { autoAlpha: 0.65, duration: 0.35 });
        }
      };

      box.addEventListener("click", handler);
      handlers.push(handler);
    });

    // Close on overlay click
    const overlayHandler = () => {
      if (boxIndexRef.current !== undefined) {
        const box = boxesContent[boxIndexRef.current];
        const state = Flip.getState(box);
        boxes[boxIndexRef.current].appendChild(box);
        boxIndexRef.current = undefined;

        gsap.to([modal, modalOverlay], {
          autoAlpha: 0,
          ease: "power1.inOut",
          duration: 0.35,
        });

        Flip.from(state, {
          duration: 0.7,
          ease: "power1.inOut",
          absolute: true,
          onComplete: () => gsap.set(box, { zIndex: "auto" }),
        });
        gsap.set(box, { zIndex: 1002 });
      }
    };
    modalOverlay.addEventListener("click", overlayHandler);

    return () => {
      boxesContent.forEach((box, i) => {
        box.removeEventListener("click", handlers[i]);
      });
      modalOverlay.removeEventListener("click", overlayHandler);
    };
  }, []);

  return (
    <>
      <div className="flipGalleryWrapper" ref={wrapperRef}>
        <div className="flipGalleryBoxesContainer">
          {images.map((img, i) => (
            <div className="flipGalleryBox" key={i}>
              <div
                className={`flipGalleryBoxContent ${img.className}`}
                style={{ backgroundImage: `url("${img.src}")` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flipGalleryModal" ref={modalRef}>
        <div className="flipGalleryOverlay" />
        <div className="flipGalleryModalContent" />
      </div>
    </>
  );
}
