"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SelectedProjects.module.css";

interface ProjectItem {
  id: string;
  index: string;
  metricValue: string;
  metricLabel: string;
  bracketName: string;
  title: string;
  category: string;
  videoSrc: string;
  description: React.ReactNode;
  thumbnails: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    index: "[ 01",
    metricValue: "3.5M",
    metricLabel: "views",
    bracketName: "[ Mercedes-Benz Places ]",
    title: "MERCEDES-BENZ PLACES",
    category: "Promotional campaign film",
    videoSrc: "/assets/videos/HOME PAGE VIDEO.mp4",
    description: (
      <>
        [ Mercedes-Benz Places is a cinematic luxury real estate campaign where
        architectural visualization becomes positioning, atmosphere, and desire.{" "}
        <strong className={styles.highlightMetric}>3.5M views.</strong> ]
      </>
    ),
    thumbnails: [
      "/images/gallery1.webp",
      "/images/gallery2.webp",
      "/images/gallery3.webp",
      "/images/gallery4.webp",
      "/images/gallery5.webp"
    ]
  },
  {
    id: "02",
    index: "[ 02",
    metricValue: "12K",
    metricLabel: "live attendees",
    bracketName: "[ AquaRise ]",
    title: "AQUARISE",
    category: "Promotional campaign film",
    videoSrc: "/assets/videos/TAPO.mp4",
    description: (
      <>
        [ AquaRise was conceived as a large-scale cinematic reveal for a landmark
        Dubai development, combining full physical staging with hyper-realistic CGI. ]
      </>
    ),
    thumbnails: [
      "/images/gallery6.webp",
      "/images/gallery7.webp",
      "/images/gallery8.webp",
      "/images/gallery9.webp",
      "/images/gallery10.webp"
    ]
  },
  {
    id: "03",
    index: "[ 03",
    metricValue: "CGA",
    metricLabel: "archviz award",
    bracketName: "[ SkyRise ]",
    title: "SKYRISE",
    category: "Promotional campaign film",
    videoSrc: "/assets/videos/111.mp4",
    description: (
      <>
        [ SkyRise architectural film showcasing next-generation CGI urban living
        and lighting choreography for international luxury markets. ]
      </>
    ),
    thumbnails: [
      "/images/gallery11.webp",
      "/images/gallery12.webp",
      "/images/gallery13.webp",
      "/images/gallery14.webp",
      "/images/gallery15.webp"
    ]
  }
];

export default function SelectedProjects() {
  const [activeThumbs, setActiveThumbs] = useState<{ [key: string]: number }>({
    "01": 0,
    "02": 0,
    "03": 0
  });

  const handleThumbClick = (projId: string, idx: number) => {
    setActiveThumbs((prev) => ({
      ...prev,
      [projId]: idx
    }));
  };

  return (
    <section className={styles.section} id="selected-projects" data-header-theme="dark">
      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>SELECTED PROJECTS</h2>
        <p className={styles.sectionSubtitle}>
          Scale and performance directed in collaboration with leading 3D studios.
        </p>
      </div>

      {/* Project Rows */}
      <div className={styles.projectList}>
        {PROJECTS_DATA.map((project) => {
          const currentThumbIdx = activeThumbs[project.id] ?? 0;

          return (
            <div key={project.id} className={styles.projectRow}>
              {/* Left Column: Index & Vertical Filmstrip Thumbnails */}
              <div className={styles.leftCol}>
                <span className={styles.projectIndex}>{project.index}</span>
                <div className={styles.filmstrip}>
                  {project.thumbnails.map((thumb, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`${styles.thumbnailBtn} ${
                        idx === currentThumbIdx ? styles.activeThumbnail : ""
                      }`}
                      onClick={() => handleThumbClick(project.id, idx)}
                      aria-label={`Select frame ${idx + 1} for ${project.title}`}
                    >
                      <Image
                        src={thumb}
                        alt={`${project.title} frame ${idx + 1}`}
                        fill
                        className={styles.thumbImg}
                        sizes="120px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Column: Viewfinder Video Canvas with HUD Overlay */}
              <div className={styles.centerCol}>
                {/* 4 Viewfinder Corner Crop Marks */}
                <span className={styles.cornerTL} />
                <span className={styles.cornerTR} />
                <span className={styles.cornerBL} />
                <span className={styles.cornerBR} />

                {/* Center Crosshair Marker */}
                <span className={styles.reticleCenter}>+</span>

                {/* Top Glass HUD Bar */}
                <div className={styles.hudHeader}>
                  <div className={styles.metricBlock}>
                    <span className={styles.metricValue}>{project.metricValue}</span>
                    <span className={styles.metricLabel}>{project.metricLabel}</span>
                  </div>
                  <div className={styles.hudTagBlock}>
                    <div className={styles.hudBracketTitle}>{project.bracketName}</div>
                    <div className={styles.hudSubtitle}>{project.category}</div>
                  </div>
                </div>

                {/* Main Video Loop */}
                <video
                  className={styles.mainVideo}
                  src={project.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Floating View Case Study CTA Button */}
                <a
                  href="#contact"
                  className={styles.caseStudyBtn}
                  aria-label={`View Case Study for ${project.title}`}
                >
                  <span>VIEW CASE STUDY</span>
                  <span className={styles.arrowIconBox}>↗</span>
                </a>
              </div>

              {/* Right Column: Title, Subtitle, and Narrative Paragraph */}
              <div className={styles.rightCol}>
                <div className={styles.rightTop}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <div className={styles.rightDescription}>{project.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore More Projects Footer Bar */}
      <div className={styles.exploreFooter}>
        <span className={styles.exploreLabel}>Explore More Projects</span>
        <a href="#all-projects" className={styles.viewAllBtn}>
          <span>VIEW ALL CASE STUDIES</span>
          <span className={styles.arrowIconBox}>↗</span>
        </a>
      </div>
    </section>
  );
}
