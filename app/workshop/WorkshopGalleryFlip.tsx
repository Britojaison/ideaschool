"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const images = [
  // 1. Tall Left
  { src: "/images/work1.webp", alt: "Project 1" },
  // 2. Top Center
  { src: "/images/work2.webp", alt: "Project 2" },
  // 3. Tall Center
  { src: "/images/WORK.webp", alt: "Project 3" },
  // 4. Tall Right Top
  { src: "/images/WORK 2.webp", alt: "Project 4" },
  // 5. Bottom Left 1
  { src: "/images/WORK heren.webp", alt: "Project 5" },
  // 6. Tall Right Bottom
  { src: "/images/Offline Campaign V2.webp", alt: "Project 6" },
  // 7. Bottom Left 2
  { src: "/images/Static 5.webp", alt: "Project 7" },
  // 8. Bottom Center
  { src: "/images/Static 7.webp", alt: "Project 8" },
];

export default function WorkshopGalleryFlip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="bentoGallery">
        {images.map((img, i) => (
          <div
            className={`bentoItem bentoItem${i + 1}`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {mounted && activeIndex !== null && createPortal(
        <div className="flipGalleryModal flipGalleryModalOpen" onClick={() => setActiveIndex(null)}>
          <div className="flipGalleryOverlay" />
          <img
            src={images[activeIndex].src}
            alt=""
            className="flipGalleryModalImg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
