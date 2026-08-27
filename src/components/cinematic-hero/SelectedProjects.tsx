"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SelectedProjects.module.css";

interface MentorInfo {
  name: string;
  role: string;
  agency: string;
  action: string;
}

interface ProjectItem {
  id: string;
  index: string;
  metricValue: string;
  metricLabel: string;
  bracketName: string;
  title: string;
  category: string;
  videoSrc: string;
  mentor: MentorInfo;
  learnOutcome: string;
  description: React.ReactNode;
  thumbnails: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    index: "[ 01",
    metricValue: "4.2M",
    metricLabel: "campaign reach",
    bracketName: "[ Commercial Campaign • Milky Mist & Milton ]",
    title: "MILKY MIST & MILTON",
    category: "Commercial Fast-Cut & Sound Design",
    videoSrc: "/assets/videos/HOME PAGE VIDEO.mp4",
    mentor: {
      name: "Ajay Karthik",
      role: "Lead Commercial Editor",
      agency: "88GB Agency",
      action: "Edited by your mentor"
    },
    learnOutcome: "Creative decision-making — Understand why certain edits, visuals and treatments work better than others. Professional workflows — See how projects are organised, developed, reviewed and delivered.",
    description: (
      <>
        A high-energy national commercial campaign delivered for TV & OTT. You will learn directly from the editor who cut this project—dissecting his real-world pacing frameworks, sound staging, and delivery standards that generated <strong className={styles.highlightMetric}>4.2M+ impressions.</strong>
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
    metricValue: "100K+",
    metricLabel: "cohort viewers",
    bracketName: "[ Generative AI • Luxury Fashion Direction ]",
    title: "CELINE & LUXURY AI",
    category: "Generative AI & Cinema Direction",
    videoSrc: "/assets/videos/TAPO.mp4",
    mentor: {
      name: "Elamparithi",
      role: "Head of Design",
      agency: "88GB Agency",
      action: "Directed by your mentor"
    },
    learnOutcome: "Speed & efficiency — Discover practical workflows, templates, assets, AI tools and production techniques that make professional editors faster.",
    description: (
      <>
        A luxury generative film exploring photoreal digital talent and cinematic depth. Your mentor breaks down how he combines cutting-edge AI engines (Flux, Seedance, Midjourney) with commercial art direction to build broadcast-ready visuals.
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
    metricValue: "88GB",
    metricLabel: "agency pipeline",
    bracketName: "[ Automotive Motion • VFX & Color ]",
    title: "AUTOMOTIVE SPEED REEL",
    category: "VFX Tracking & DaVinci Color Grading",
    videoSrc: "/assets/videos/111.mp4",
    mentor: {
      name: "Dhananjayan S.",
      role: "Founder & Creative Director",
      agency: "88GB Agency",
      action: "Supervised by your mentor"
    },
    learnOutcome: "Feedback & refinement — Learn how to take critique, identify problems and improve your work instead of simply completing an assignment.",
    description: (
      <>
        Precision motion graphics, dynamic speed ramping, and DaVinci Resolve color science. Learn the high-end commercial post-production standards, client critique cycles, and finishing techniques applied every day at 88GB.
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

interface ViewfinderCanvasProps {
  project: ProjectItem;
  currentThumbIdx: number;
}

function ViewfinderCanvas({ project, currentThumbIdx }: ViewfinderCanvasProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const posterSrc = project.thumbnails[currentThumbIdx] || project.thumbnails[0];

  return (
    <div
      className={styles.centerCol}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={() => setIsPlaying((prev) => !prev)}
      style={{ cursor: "pointer" }}
    >


      {/* Center Crosshair Marker */}
      <span className={styles.reticleCenter}>+</span>

      {/* Top Glass HUD Bar - Fades out on hover/play */}
      <div
        className={styles.hudHeader}
        style={{
          opacity: isPlaying ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: isPlaying ? "none" : "auto",
        }}
      >
        <div className={styles.metricBlock}>
          <span className={styles.metricValue}>{project.metricValue}</span>
          <span className={styles.metricLabel}>{project.metricLabel}</span>
        </div>
        <div className={styles.hudTagBlock}>
          <div className={styles.hudBracketTitle}>{project.bracketName}</div>
          <div className={styles.hudSubtitle}>{project.category}</div>
        </div>
      </div>

      {/* High-res Frame Still (Instant Zero-Lag Display while scrolling) */}
      <Image
        src={posterSrc}
        alt={project.title}
        fill
        className={styles.thumbImg}
        sizes="(max-width: 900px) 100vw, 750px"
        priority={project.id === "01"}
        style={{
          opacity: isPlaying ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
          objectFit: "cover"
        }}
      />

      {/* Video Loop (Only decodes & streams when hovered or clicked) */}
      {isPlaying && (
        <video
          className={styles.mainVideo}
          src={project.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: 2 }}
        />
      )}

      {/* Interactive Badge */}
      <div className={styles.playPromptBadge}>
        {isPlaying ? "● PLAYING REEL" : "▶ HOVER TO PREVIEW"}
      </div>
    </div>
  );
}

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
        <h2 className={styles.sectionTitle}>LEARN THE PROCESS BEHIND PROFESSIONAL CREATIVE WORK.</h2>
        <p className={styles.sectionSubtitle}>
          The fastest way to understand how the industry works is to learn from people who work in it. At Idea Creative School, you&apos;ll learn through the 88GB creative ecosystem, where professional teams work across campaigns, brands, content and visual communication.
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
                      className={`${styles.thumbnailBtn} ${idx === currentThumbIdx ? styles.activeThumbnail : ""
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

              {/* Center Column: Zero-Lag Interactive Viewfinder */}
              <ViewfinderCanvas
                project={project}
                currentThumbIdx={currentThumbIdx}
              />

              {/* Right Column: Title, Subtitle, Mentor Card, and Narrative */}
              <div className={styles.rightCol}>
                <div className={styles.rightTop}>
                  <div className={styles.projectCategoryBadge}>{project.category}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  {/* Mentor Attribution Card */}
                  <div className={styles.mentorBadge}>
                    <div className={styles.mentorMeta}>
                      <span className={styles.mentorLabel}>{project.mentor.action.toUpperCase()}:</span>
                      <strong className={styles.mentorName}>{project.mentor.name}</strong>
                      <span className={styles.mentorRole}>{project.mentor.role} • {project.mentor.agency}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.rightDescription}>
                  {project.description}
                </div>

                <div className={styles.takeawayBox}>
                  <span className={styles.takeawayLabel}>WHAT YOU&apos;LL LEARN FROM THE WORK:</span>
                  <p className={styles.takeawayText}>{project.learnOutcome}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
