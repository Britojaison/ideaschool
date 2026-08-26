"use client";

import styles from "@/styles/Flagship.module.css";
import Link from "next/link";
import Image from "next/image";
import curlyArrowImg from "@public/images/curly_arrow.png";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";

const VideoPopOver = dynamic(
  () => import("@/components/ui/VideoPlayer").then((mod) => mod.VideoPopOver),
  { ssr: false }
);

export default function FlagshipSpotlight() {
  const [showVideoPopOver, setShowVideoPopOver] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SPRING = {
    mass: 0.1,
    stiffness: 160,
    damping: 18,
  };

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <section className={`section ${styles.spotlight}`}>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.titleMain}>Creative Editing</span>
            <span className={styles.accent}>& AI Pro</span>
          </div>
          <p className={styles.lede}>
            Twenty four weeks to turn raw ideas into finished films and turn your portfolio into proof.
          </p>
          <div className={styles.actions}>
            <Link href="/creative-editing-course" className={styles.customBtn}>
              Explore the program
            </Link>
          </div>
        </div>

        <div className={styles.centerArrow} aria-hidden="true">
          <Image
            src={curlyArrowImg}
            alt=""
            width={140}
            height={115}
            priority
          />
        </div>

        <div className={styles.statsPanel}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>24</span>
              <span className={styles.statLabel}>
                Weeks of<br />practice
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>3</span>
              <span className={styles.statLabel}>
                Learning<br />phases
              </span>
            </div>
          </div>

          <div
            className={styles.showreelCard}
            onMouseMove={handlePointerMove}
            onMouseLeave={() => {
              opacity.set(0);
            }}
            onClick={() => setShowVideoPopOver(true)}
          >
            <motion.div
              style={{ x, y, opacity }}
              className="pointer-events-none absolute z-30 flex -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <Play className="size-3.5 fill-white text-white" />
              <span>Watch Reel</span>
            </motion.div>

            <video
              src="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={styles.showreelImg}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className={styles.showreelLabel}>
              <span>STUDENT SHOWREEL</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#fff" }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {mounted && (
        <AnimatePresence>
          {showVideoPopOver && (
            <VideoPopOver
              videoSrc="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
              title="Student Showreel — Creative Editing & AI Pro"
              setShowVideoPopOver={setShowVideoPopOver}
            />
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
