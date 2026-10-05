"use client";

import React from "react";
import Image from "next/image";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./ClientLogosSection.module.css";

interface Brand {
  name: string;
  image?: string;
  text?: string;
}

const BRANDS: Brand[] = [
  { name: "Netflix", image: "/images/NETFLIX-2.webp" },
  { name: "Ashok Leyland", image: "/images/ASHOK LEYLAND.webp" },
  { name: "Finolex", image: "/images/FINOLEX.webp" },
  { name: "Heritage", image: "/images/heritage.webp" },
  { name: "JLL", image: "/images/JLL.webp" },
  { name: "Mapro", image: "/images/mapro.webp" },
  { name: "Moj", image: "/images/moj.webp" },
  { name: "Poco", image: "/images/POCO.webp" },
  { name: "Saravana Store", image: "/images/saravana_store.webp" },
  { name: "SRM", image: "/images/srm.webp" },
  { name: "Super Jewellery", image: "/images/super_jewellery.webp" },
  { name: "TEDx", image: "/images/tedx.webp" },
  { name: "Xiaomi", text: "Xiaomi" },
  { name: "Milky Mist", image: "/images/MILKY MIST-2.webp" },
  { name: "SIG", image: "/images/SIG.webp" },
  { name: "Zenvista", image: "/images/zenvista.webp" },
];

const CARD_THEMES = [
  {
    bgColor: "#d9fa2f",
    textColor: "#0a0a0c",
    filter: "brightness(0)",
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  {
    bgColor: "#552ead",
    textColor: "#ffffff",
    filter: "brightness(0) invert(1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#efeeea",
    textColor: "#0a0a0c",
    filter: "brightness(0)",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  {
    bgColor: "#cd0c41",
    textColor: "#ffffff",
    filter: "brightness(0) invert(1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#ff5c2f",
    textColor: "#ffffff",
    filter: "brightness(0) invert(1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  {
    bgColor: "#ffb621",
    textColor: "#0a0a0c",
    filter: "brightness(0)",
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
];

export default function ClientLogosSection() {
  // Triple items for continuous smooth infinite scrolling
  const tickerItems = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      id="client-brands"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Client Brands"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlightWord}>BRANDS</span>
            <span> OUR MENTORS & STUDENTS WORK WITH.</span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Track (White Cards) */}
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {tickerItems.map((brand, idx) => {
            return (
              <div
                key={`${brand.name}-${idx}`}
                className={styles.brandCard}
                aria-hidden={idx >= BRANDS.length ? "true" : undefined}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#0a0a0c",
                }}
              >
                {brand.image ? (
                  <div className={styles.logoWrap}>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={220}
                      height={90}
                      className={`${styles.brandLogoImage} ${
                        brand.name === "Mapro" ? styles.maproLogo : ""
                      } ${brand.name === "Milky Mist" ? styles.milkyMistLogo : ""} ${
                        brand.name === "SIG" ? styles.sigLogo : ""
                      } ${brand.name === "Zenvista" ? styles.zenvistaLogo : ""} ${
                        brand.name === "Netflix" ? styles.netflixLogo : ""
                      } ${brand.name === "TEDx" ? styles.tedxLogo : ""} ${
                        brand.name === "SRM" ? styles.srmLogo : ""
                      } ${brand.name === "Super Jewellery" ? styles.superJewelleryLogo : ""}`}
                      style={{
                        filter: "brightness(0)",
                      }}
                    />
                  </div>
                ) : (
                  <span
                    className={styles.brandTextLogo}
                    style={{ color: "#0a0a0c" }}
                  >
                    {brand.text}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
