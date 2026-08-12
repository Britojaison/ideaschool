import React, { type CSSProperties, useEffect, useRef } from "react";
import styles from "./ImageMarquee.module.css";
import gsap from "gsap";
import Image from "next/image";

import card1 from "@public/assets/home/card1.png";
import card2 from "@public/assets/home/card2.png";
import card3 from "@public/assets/home/card3.png";
import card4 from "@public/assets/home/card4.png";
import card5 from "@public/assets/home/card5.png";

const IMAGES = [card1, card2, card3, card4, card5];
// Duplicate to fill a full circle (15 images total) to leave gaps between images
const ALL_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];

export default function ImageMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: 360,
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className={styles.radialWrapper}>
      <div className={styles.radialCenter} ref={containerRef}>
        {ALL_IMAGES.map((src, i) => {
          const angle = (i / ALL_IMAGES.length) * 360;
          return (
            <div
              key={i}
              className={styles.radialItem}
              style={{ "--card-angle": `${angle}deg` } as CSSProperties}
            >
              <div className={styles.imageCard}>
                <Image src={src} alt="marquee-card" width={160} height={200} className={styles.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
