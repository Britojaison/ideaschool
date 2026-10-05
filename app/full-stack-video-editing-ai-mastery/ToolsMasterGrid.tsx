"use client";

import React from "react";
import Image from "next/image";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./ToolsMasterGrid.module.css";

interface ToolItem {
  name: string;
  category: string;
  image: string;
}

const MASTER_TOOLS: ToolItem[] = [
  {
    name: "Adobe Premiere Pro",
    category: "Video Editing",
    image: "/images/adobepremierepro.svg",
  },
  {
    name: "Adobe After Effects",
    category: "Motion & VFX",
    image: "/images/Ae_logo.webp",
  },
  {
    name: "Adobe Photoshop",
    category: "Design & Compositing",
    image: "/images/ps-logo-transparent.webp",
  },
  {
    name: "Higgsfield AI",
    category: "Generative Video & Camera",
    image: "/images/higgsfield_ai.webp",
  },
  {
    name: "ElevenLabs",
    category: "Voice & AI Audio Design",
    image: "/images/elevenlabs-official-logo.svg",
  },
  {
    name: "HeyGen",
    category: "AI Video Production",
    image: "/images/heygen.webp",
  },
  {
    name: "Opus Clip",
    category: "Short-Form Repurposing",
    image: "/images/opus_clip.webp",
  },
  {
    name: "Canva",
    category: "Rapid Asset Prep",
    image: "/images/Canva_icon.webp",
  },
  {
    name: "Framer",
    category: "Interactive Portfolio",
    image: "/images/framer.webp",
  },
  {
    name: "AI Audio & VFX Suite",
    category: "Specialized AI Plugins",
    image: "/images/tool1.webp",
  },
  {
    name: "Midjourney & Generative Suite",
    category: "Concept & Asset Generation",
    image: "/images/tool2.webp",
  },
  {
    name: "Topaz Video AI",
    category: "Upscaling & Enhancement",
    image: "/images/topaz_logo.webp",
  },
];

export default function ToolsMasterGrid() {
  return (
    <section
      id="tools-master"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Tools You Will Master"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>TOOLS YOU WILL </span>
            <span className={styles.highlightWord}>MASTER.</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className={styles.grid}>
          {MASTER_TOOLS.map((tool, idx) => {
            return (
              <div
                key={idx}
                className={styles.card}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={56}
                    height={56}
                    className={styles.logoImage}
                  />
                </div>

                <div className={styles.toolInfo}>
                  <h3 className={styles.toolName}>
                    {tool.name}
                  </h3>
                  <span className={styles.toolCategory}>
                    {tool.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
