"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const images = [
  // 1. Tall Left
  { src: "https://assets.codepen.io/16327/portrait-image-1.jpg", alt: "Project 1" }, // Pink clouds
  // 2. Top Center
  { src: "https://assets.codepen.io/16327/portrait-image-12.jpg", alt: "Project 2" }, // Face
  // 3. Tall Center
  { src: "https://assets.codepen.io/16327/portrait-image-2.jpg", alt: "Project 3" }, // Shoe
  // 4. Tall Right Top
  { src: "https://assets.codepen.io/16327/portrait-image-8.jpg", alt: "Project 4" }, // Green pattern
  // 5. Bottom Left 1
  { src: "https://assets.codepen.io/16327/portrait-image-4.jpg", alt: "Project 5" }, // Keys
  // 6. Tall Right Bottom
  { src: "https://assets.codepen.io/16327/portrait-pattern-1.jpg", alt: "Project 6" }, // Pink lightning
  // 7. Bottom Left 2
  { src: "https://assets.codepen.io/16327/portrait-image-14.jpg", alt: "Project 7" }, // Black cat
  // 8. Bottom Center
  { src: "https://assets.codepen.io/16327/portrait-pattern-3.jpg", alt: "Project 8" }, // Orange pattern
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
