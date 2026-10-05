"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./BrandGrid.module.css";
import TextAnimation from "@/components/ui/staggerText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRANDS = [
  { name: "Amazon", file: "AMAZON.webp", scale: 1 },
  { name: "Netflix", file: "NETFLIX-2.webp", scale: 1 },
  { name: "Ashok Leyland", file: "ASHOK LEYLAND.webp", scale: 1 },
  { name: "Finolex", file: "FINOLEX.webp", scale: 1 },
  { name: "Paytm", file: "paytm.webp", scale: 1 },
  { name: "Mi", file: "MI.webp", scale: 1.25 },
  { name: "Poco", file: "POCO.webp", scale: 1 },
  { name: "JLL", file: "JLL.webp", scale: 1 },
  { name: "Milky Mist", file: "MILKY MIST-2.webp", scale: 1 },
  { name: "Mapro", file: "mapro.webp", scale: 1 },
  { name: "Moj", file: "moj.webp", scale: 1 },
  { name: "Heritage", file: "heritage.webp", scale: 1 },
  { name: "TedX", file: "tedx.webp", scale: 1.1 },
  { name: "Cinco", file: "cinco.webp", scale: 1.6 },
  { name: "Saravana Stores", file: "saravana_store.webp", scale: 1.3 },
  { name: "SRM", file: "srm.webp", scale: 1 },
  { name: "Super Jewellery", file: "super_jewellery.webp", scale: 1 },
  { name: "Zenvista", file: "zenvista.webp", scale: 1.15 },
];

export default function BrandGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cells = gsap.utils.toArray<HTMLElement>(gridRef.current?.children || []);
      gsap.fromTo(
        cells,
        {
          opacity: 0,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="we-work-with"
      data-header-theme="light"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <TextAnimation divideBy="word">We work with</TextAnimation>
          </h2>
          <span className={styles.subtitle}>
            Brands, studios & industry partners
          </span>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {BRANDS.map((brand) => (
            <div key={brand.file} className={styles.brandCell}>
              <img
                src={`/assets/icons/${brand.file}`}
                alt={`${brand.name} logo`}
                className={styles.brandLogo}
                style={brand.scale !== 1 ? { transform: `scale(${brand.scale})` } : undefined}
                loading="lazy"
              />
              <span className={styles.cornerPlus} aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
