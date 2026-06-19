"use client";

import { useState } from "react";

const images = [
  { src: "https://assets.codepen.io/16327/portrait-pattern-1.jpg", alt: "Project 1" },
  { src: "https://assets.codepen.io/16327/portrait-image-12.jpg", alt: "Project 2" },
  { src: "https://assets.codepen.io/16327/portrait-pattern-3.jpg", alt: "Project 3" },
  { src: "https://assets.codepen.io/16327/portrait-image-8.jpg", alt: "Project 4" },
  { src: "https://assets.codepen.io/16327/portrait-image-2.jpg", alt: "Project 5" },
  { src: "https://assets.codepen.io/16327/portrait-image-1.jpg", alt: "Project 6" },
  { src: "https://assets.codepen.io/16327/portrait-image-4.jpg", alt: "Project 7" },
  { src: "https://assets.codepen.io/16327/portrait-image-14.jpg", alt: "Project 8" },
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
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="flipGalleryModal flipGalleryModalOpen" onClick={() => setActiveIndex(null)}>
          <div className="flipGalleryOverlay" />
          <img
            src={images[activeIndex].src}
            alt=""
            className="flipGalleryModalImg"
          />
        </div>
      )}
    </>
  );
}
