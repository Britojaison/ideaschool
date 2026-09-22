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
          <div className={styles.tag}>CLIENT ECOSYSTEM</div>
          <h2 className={styles.title}>
            <ScrollHighlight
              text="BRANDS OUR MENTORS & STUDENTS WORK WITH."
              font={{
                fontSize: "inherit",
                fontWeight: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                textAlign: "left",
              }}
              splitBy="words"
              scrollStart="top bottom"
              scrollEnd="center center"
            />
          </h2>
          <p className={styles.subtitle}>
            Work on commercial-grade briefs and deliverables modeled after real campaigns for top national and global brands.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track (Dark Seamless Look) */}
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {tickerItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className={styles.brandCard}
              aria-hidden={idx >= BRANDS.length ? "true" : undefined}
            >
              {brand.image ? (
                <div className={styles.logoWrap}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className={`${styles.brandLogoImage} ${
                      brand.name === "Mapro" ? styles.maproLogo : ""
                    }`}
                  />
                </div>
              ) : (
                <span className={styles.brandTextLogo}>{brand.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
