"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechSchool.module.css";
import { ArrowUpRight } from "lucide-react";

const MENTORS = [
  {
    name: "Arjun Dhananjayan",
    role: "Lead Systems Architect // 88GB",
    bio: "Pioneering agentic workflows, LLM orchestration, and high-performance cloud applications across commercial agency products.",
    image: "/images/mentor_ARJUN.webp",
    tag: "AGENTIC ARCHITECTURE",
  },
  {
    name: "Elamparithi",
    role: "Head of Product Engineering",
    bio: "Designs robust UI systems and agentic developer tooling. Bridges the gap between complex backend APIs and zero-latency user interfaces.",
    image: "/images/parithi12.webp",
    tag: "FULL-STACK NEXT.JS",
  },
  {
    name: "Ajay Karthik",
    role: "AI Workflow Specialist",
    bio: "Focuses on automated multi-file refactoring, retrieval systems (RAG), and structuring deterministic outputs from LLMs.",
    image: "/images/mentor_AJAY.webp",
    tag: "RAG & VECTOR DBS",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Product Strategy & Cloud Lead",
    bio: "Mentors builders on enterprise production readiness, API contracts, deployment pipelines, and shipping real MVPs to users.",
    image: "/images/mentor_CHANDRU.webp",
    tag: "CLOUD DEPLOYMENT",
  },
];

export default function TechMentors() {
  return (
    <section className={`${styles.section} ${styles.mentorsSection}`} id="mentors" data-header-theme="dark">
      <div className={styles.container}>
        
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            Section 08 // Mentorship & Direction
          </div>
          <h2 className={styles.sectionTitle}>
            Built By Engineers Who <span className={styles.sectionTitleGradient}>Ship Daily</span>
          </h2>
          <p className={styles.sectionDesc}>
            Learn alongside senior software architects and founders who run real production workloads, design scalable systems, and ship commercial applications.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className={styles.mentorsGrid}>
          {MENTORS.map((m, idx) => (
            <div key={idx} className={styles.mentorCard}>
              <div className={styles.mentorImageWrapper}>
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={styles.mentorImage}
                />
                <div style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  zIndex: 2,
                }}>
                  <span className={styles.stickerTagYellow} style={{ fontSize: "10px", padding: "3px 8px" }}>
                    {m.tag}
                  </span>
                </div>
              </div>

              <div className={styles.mentorInfo}>
                <h3 className={styles.mentorName}>{m.name}</h3>
                <div className={styles.mentorRole}>{m.role}</div>
                <p className={styles.mentorBio}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Culture & Hands-on Moodboard Strip */}
        <div className={styles.cultureStrip}>
          <div className={styles.culturePhotoGrid}>
            <div className={styles.culturePhoto}>
              <Image
                src="/images/DSC00041.webp"
                alt="IdeaSchool Hands-on 1-on-1 sprint"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className={styles.culturePhoto}>
              <Image
                src="/images/DSC00048.webp"
                alt="IdeaSchool cohort coding environment"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className={styles.culturePhoto}>
              <Image
                src="/images/DSC00232.webp"
                alt="Students building live SaaS apps"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className={styles.culturePhoto}>
              <Image
                src="/images/DSC00334.webp"
                alt="IdeaSchool Demo day and certificate ceremony"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          <div className={styles.cultureTextContent}>
            <div className={styles.stickerTagCrimson} style={{ marginBottom: "16px" }}>
              THE IDEASCHOOL WAY
            </div>
            <h3>
              AI is changing the work.<br />
              <span>Learn to shape it.</span>
            </h3>
            <p>
              Don&apos;t just spectate behind chat windows. Walk into our studio, plug into our high-speed development environment, and master the exact architectural frameworks used to ship modern AI products.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <span className={styles.stickerTagYellow}>THINK. CODE. CREATE.</span>
              <span className={styles.stickerTagCrimson}>DON&apos;T JUST PROMPT BUILD ↗</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
