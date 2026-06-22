"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const images = [
  // 1. Tall Left
  { src: "/images/work1.webp", alt: "Project 1", type: "image" },
  // 2. Top Center
  { src: "/images/work2.webp", alt: "Project 2", type: "image" },
  // 3. Tall Center
  { src: "/images/edit_1.mp4", alt: "Video editing project preview", type: "video" },
  // 4. Tall Right Top
  { src: "/images/WORK 2.webp", alt: "Project 4", type: "image" },
  // 5. Bottom Left 1
  { src: "/images/WORK heren.webp", alt: "Project 5", type: "image" },
  // 6. Tall Right Bottom
  { src: "/images/Offline Campaign V2.webp", alt: "Project 6", type: "image" },
  // 7. Bottom Left 2
  { src: "/images/Static 5.webp", alt: "Project 7", type: "image" },
  // 8. Bottom Center
  { src: "/images/Static 7.webp", alt: "Project 8", type: "image" },
];

export default function WorkshopGalleryFlip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bentoGallery">
        {images.map((img, i) => (
          <div
            className={`bentoItem bentoItem${i + 1}`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            {img.type === "video" ? (
              <video
                src={img.src}
                aria-label={img.alt}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={img.src} alt={img.alt} />
            )}
          </div>
        ))}
      </div>

      {activeIndex !== null && createPortal(
        <div className="flipGalleryModal flipGalleryModalOpen" onClick={() => setActiveIndex(null)}>
          <div className="flipGalleryOverlay" />
          {images[activeIndex].type === "video" ? (
            <video
              src={images[activeIndex].src}
              className="flipGalleryModalImg"
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={images[activeIndex].src}
              alt=""
              className="flipGalleryModalImg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>,
        document.body
      )}
    </>
  );
}
