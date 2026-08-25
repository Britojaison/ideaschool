"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./CourseGallery.module.css";

interface ProjectData {
  id: number;
  title: string;
  client: string;
  category: string;
  tag: string;
  image: string;
  video?: string;
  logImage?: string;
  mentor: string;
  timecode: string;
  aspectRatio: string;
  fps: string;
  duration: string;
  tools: string[];
  metrics: string;
  description: string;
  learningOutcome: string;
}

const GALLERY_ITEMS: ProjectData[] = [
  {
    id: 1,
    title: "Milky Mist & Milton TVC Campaign",
    client: "Milky Mist & Milton",
    category: "Commercial Fast-Cut",
    tag: "LIVE BRAND BRIEF",
    image: "/images/gallery1.webp",
    video: "/assets/videos/HOME PAGE VIDEO.mp4",
    mentor: "Ajay Karthik (Lead Editor)",
    timecode: "00:00:15:18",
    aspectRatio: "16:9",
    fps: "24.00 FPS",
    duration: "00:30",
    tools: ["Premiere Pro", "DaVinci Resolve", "Sound Staging"],
    metrics: "4.2M Reach • TV Broadcast",
    description: "National TV campaign structured with high-velocity match cuts, sub-frame sound staging, and multi-cam pacing delivered to broadcast standards.",
    learningOutcome: "Mastering commercial rhythm, multi-cam pacing, and delivery standards for high-tier brand campaigns."
  },
  {
    id: 2,
    title: "Celine Paris — Haute Couture Editorial",
    client: "Celine Paris Spec",
    category: "Fashion Editorial",
    tag: "STUDIO CRAFT",
    image: "/images/gallery2.webp",
    video: "/images/Celine Paris.mp4",
    mentor: "Arjun (Creative Director)",
    timecode: "00:00:24:06",
    aspectRatio: "2.39:1",
    fps: "23.976 FPS",
    duration: "00:45",
    tools: ["DaVinci Resolve", "35mm Film Grain", "Halation Lab"],
    metrics: "Agency Showcase",
    description: "Atmospheric fashion film deconstructing filmic halation, custom 35mm grain curves, and seamless rhythmic match cuts.",
    learningOutcome: "Color science, negative film emulation, and hypnotic pacing without dialogue."
  },
  {
    id: 3,
    title: "Finolex Pipes — National Campaign Spot",
    client: "Finolex Industries",
    category: "Brand Commercial",
    tag: "LIVE BRAND BRIEF",
    image: "/images/gallery4.webp",
    video: "/images/edit_1.mp4",
    mentor: "Ajay Karthik",
    timecode: "00:00:42:12",
    aspectRatio: "16:9",
    fps: "25.00 FPS",
    duration: "00:45",
    tools: ["Premiere Pro", "After Effects", "Sound Foley"],
    metrics: "National Broadcast",
    description: "Deconstructed commercial storytelling engineered around customer retention hooks and product reveal pacing.",
    learningOutcome: "Structuring 3-act brand commercial arcs that hook viewers in the first 3 seconds."
  },
  {
    id: 4,
    title: "Ranjit Watch — Luxury Macro Craft",
    client: "Horology Spec",
    category: "Luxury Macro",
    tag: "STUDIO PRACTICE",
    image: "/images/gallery7.webp",
    video: "/images/Ranjit watch.mp4",
    mentor: "Chandru (Motion Lead)",
    timecode: "00:00:18:22",
    aspectRatio: "16:9",
    fps: "50.00 FPS (Speed Ramped)",
    duration: "00:20",
    tools: ["DaVinci Resolve", "Optical Flow", "Sub-Frame Audio"],
    metrics: "Featured Spec",
    description: "Precision macro-cut commercial highlighting intricate gear movement, light blooms, and elegant time-dilation ramps.",
    learningOutcome: "Speed ramping curves, sub-frame foley sync, and lighting caustics enhancement."
  },
  {
    id: 5,
    title: "Aurora Kinetic 3D Title Sequence",
    client: "Concept Title Lab",
    category: "3D & Motion",
    tag: "MENTOR CRITIQUE",
    image: "/images/gallery3.webp",
    mentor: "Chandru",
    timecode: "00:00:10:04",
    aspectRatio: "2.35:1",
    fps: "24.00 FPS",
    duration: "00:15",
    tools: ["Cinema 4D", "After Effects", "Illustrator"],
    metrics: "Motion Design Award",
    description: "Hybrid 3D title design integrating custom typography animation, particle dispersion, and dynamic camera projection.",
    learningOutcome: "Motion typography hierarchy, 3D space tracking, and kinetic kinetic easing."
  },
  {
    id: 6,
    title: "Neo Cyberpunk Spec & Compositing",
    client: "VFX Production Lab",
    category: "VFX & Compositing",
    tag: "ADVANCED LAB",
    image: "/images/gallery5.webp",
    mentor: "Paridhi (VFX Director)",
    timecode: "00:00:33:14",
    aspectRatio: "16:9",
    fps: "24.00 FPS",
    duration: "00:35",
    tools: ["Nuke", "After Effects", "Blender"],
    metrics: "Master Grade",
    description: "Multi-pass CGI composite combining green screen plates, realistic ambient reflections, volumetric haze, and holographic UI.",
    learningOutcome: "Seamless plate integration, lighting match, and edge feathering for commercial cinema."
  },
  {
    id: 7,
    title: "Drift Kinetics Automotive Spot",
    client: "Apex Racing Spec",
    category: "Automotive",
    tag: "STUDIO SPEC",
    image: "/images/gallery8.webp",
    mentor: "Ajay Karthik",
    timecode: "00:00:28:19",
    aspectRatio: "16:9",
    fps: "60.00 FPS",
    duration: "00:30",
    tools: ["Premiere Pro", "Speed Ramps", "Sound FX"],
    metrics: "3.8M Social Views",
    description: "High-adrenaline track montage utilizing directional sound pans, whip-pan transitions, and velocity-mapped speed ramps.",
    learningOutcome: "Sound panning in stereo field and cutting on directional action vectors."
  },
  {
    id: 8,
    title: "Echoes of the Coast — Doc Short",
    client: "DocuLab Studio",
    category: "Documentary",
    tag: "MENTOR REVIEW",
    image: "/images/gallery9.webp",
    mentor: "Documentary Mentor",
    timecode: "00:02:15:00",
    aspectRatio: "2.39:1",
    fps: "23.98 FPS",
    duration: "03:30",
    tools: ["Premiere Pro", "DaVinci Color", "iZotope RX"],
    metrics: "Festival Selection",
    description: "Long-form narrative pacing focusing on naturalistic ambient silence, archival integration, and authentic emotional arcs.",
    learningOutcome: "Interview rhythm sculpting, emotional pause staging, and archival clean-up."
  }
];

export default function CourseGallery() {
  const [activeTab, setActiveTab] = useState<"deck" | "grade" | "timeline">("deck");
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [gradeSplit, setGradeSplit] = useState<number>(50);
  const [activeAudioTrack, setActiveAudioTrack] = useState<"all" | "dialogue" | "foley" | "music">("all");
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectData | null>(null);

  const activeProject = GALLERY_ITEMS[activeIdx];
  const videoRef = useRef<HTMLVideoElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const isDraggingSplit = useRef<boolean>(false);

  // Auto-pause video on slide change
  useEffect(() => {
    setIsPlayingVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeIdx]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlayingVideo) {
      videoRef.current.pause();
      setIsPlayingVideo(false);
    } else {
      videoRef.current.play();
      setIsPlayingVideo(true);
    }
  };

  // Grade Split Drag handlers
  const handleSplitMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingSplit.current = true;
    updateSplitPos(e);
  };

  const updateSplitPos = (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if (!splitRef.current) return;
    const rect = splitRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const offset = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (offset / rect.width) * 100));
    setGradeSplit(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingSplit.current) updateSplitPos(e);
    };
    const handleMouseUp = () => {
      isDraggingSplit.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className={styles.gallerySection} aria-label="Interactive Studio Deck & Editing Lab">
      {/* Background Cinematic Atmosphere */}
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowRight} />

      <div className={styles.container}>
        {/* Header Area */}
        <div className={styles.header}>
          <div className={styles.pillBadge}>
            <span className={styles.pillDot} />
            <span>[ 06 // INTERACTIVE EDITING LAB ]</span>
          </div>

          <h2 className={styles.headline}>
            Impactful creative work is rooted in{" "}
            <span className={styles.gradientText}>real experience.</span>
          </h2>

          <p className={styles.subheadline}>
            Explore student-cut commercial projects, test color grading transformations, and inspect multi-track timeline architectures in our interactive studio console.
          </p>

          {/* Mode Switcher */}
          <div className={styles.modeTabs}>
            <button
              type="button"
              onClick={() => setActiveTab("deck")}
              className={`${styles.modeBtn} ${activeTab === "deck" ? styles.modeBtnActive : ""}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M10 4v16" />
                <path d="M4 10h16" />
              </svg>
              <span>STUDIO FILM DECK</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("grade")}
              className={`${styles.modeBtn} ${activeTab === "grade" ? styles.modeBtnActive : ""}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 0 20Z" fill="currentColor" opacity="0.4" />
              </svg>
              <span>COLOR GRADE SPLIT WIPE</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("timeline")}
              className={`${styles.modeBtn} ${activeTab === "timeline" ? styles.modeBtnActive : ""}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="14" y2="12" />
                <line x1="4" y1="18" x2="18" y2="18" />
              </svg>
              <span>TIMELINE ANATOMY</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STUDIO FILM DECK (Cinematic Interactive 3D Reel Player) */}
        {activeTab === "deck" && (
          <div className={styles.deckContainer}>
            {/* Main Stage */}
            <div className={styles.stageFrame}>
              {/* Top HUD Bar */}
              <div className={styles.stageHudTop}>
                <div className={styles.hudLeft}>
                  <span className={styles.recDot} />
                  <span className={styles.hudMono}>PLAYBACK // {activeProject.timecode}</span>
                </div>
                <div className={styles.hudRight}>
                  <span className={styles.hudPill}>{activeProject.aspectRatio}</span>
                  <span className={styles.hudPill}>{activeProject.fps}</span>
                  <span className={styles.hudPill}>{activeProject.metrics}</span>
                </div>
              </div>

              {/* Media Viewport */}
              <div className={styles.mediaViewport}>
                {activeProject.video ? (
                  <div className={styles.videoWrapper}>
                    <video
                      ref={videoRef}
                      src={activeProject.video}
                      poster={activeProject.image}
                      playsInline
                      loop
                      muted
                      className={styles.stageVideo}
                    />
                    {!isPlayingVideo && (
                      <div className={styles.videoOverlayPlay} onClick={toggleVideo}>
                        <div className={styles.playBigCircle}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="6 4 20 12 6 20 6 4" />
                          </svg>
                        </div>
                        <span className={styles.playText}>CLICK TO PLAY TIMELINE REEL</span>
                      </div>
                    )}
                    {isPlayingVideo && (
                      <button
                        type="button"
                        className={styles.pauseFloatBtn}
                        onClick={toggleVideo}
                        aria-label="Pause Video"
                      >
                        ❚❚
                      </button>
                    )}
                  </div>
                ) : (
                  <div className={styles.imageStaticWrapper}>
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      className={styles.stageImage}
                      priority
                    />
                    <div className={styles.staticImageOverlay}>
                      <span className={styles.staticTag}>{activeProject.tag}</span>
                    </div>
                  </div>
                )}

                {/* Bottom Media Bar */}
                <div className={styles.mediaBottomBar}>
                  <div className={styles.projectIdentity}>
                    <span className={styles.categoryBadge}>{activeProject.category}</span>
                    <h3 className={styles.stageTitle}>{activeProject.title}</h3>
                    <p className={styles.stageDesc}>{activeProject.description}</p>
                  </div>

                  <div className={styles.actionButtons}>
                    <button
                      type="button"
                      className={styles.breakdownBtn}
                      onClick={() => setSelectedModalProject(activeProject)}
                    >
                      <span>INSPECT BLUEPRINT</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Scrubber & Nav Bar */}
              <div className={styles.stageControls}>
                <div className={styles.navArrows}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={styles.arrowBtn}
                    aria-label="Previous project"
                  >
                    ←
                  </button>
                  <span className={styles.projectCounter}>
                    0{activeIdx + 1} <span className={styles.slash}>/</span> 0{GALLERY_ITEMS.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.arrowBtn}
                    aria-label="Next project"
                  >
                    →
                  </button>
                </div>

                {/* Thumbnails strip */}
                <div className={styles.thumbStrip}>
                  {GALLERY_ITEMS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`${styles.thumbBtn} ${idx === activeIdx ? styles.thumbBtnActive : ""}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={34}
                        className={styles.thumbImg}
                      />
                      <span className={styles.thumbIndex}>{idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COLOR GRADE SPLIT WIPE (Interactive Before/After Slider) */}
        {activeTab === "grade" && (
          <div className={styles.gradeContainer}>
            <div className={styles.gradePrompt}>
              <span className={styles.gradePill}>INTERACTIVE WIPE</span>
              <p>Drag the slider to compare uncompressed <strong>RAW Camera Log</strong> vs <strong>Master Film Emulation Grade</strong>.</p>
            </div>

            <div
              ref={splitRef}
              className={styles.splitViewport}
              onMouseDown={handleSplitMouseDown}
              onTouchStart={handleSplitMouseDown}
            >
              {/* After / Graded Image (Underneath) */}
              <div className={styles.splitAfter}>
                <Image
                  src={activeProject.image}
                  alt="Graded Commercial Master"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className={styles.splitImage}
                  priority
                />
                <div className={styles.splitLabelAfter}>
                  <span className={styles.gradeStatusDot} />
                  <span>MASTER COLOR GRADE [ 35MM FILM LUT ]</span>
                </div>
              </div>

              {/* Before / Raw Log Image (Clipped) */}
              <div
                className={styles.splitBefore}
                style={{ width: `${gradeSplit}%` }}
              >
                <div className={styles.rawFilterLayer}>
                  <Image
                    src={activeProject.image}
                    alt="RAW Flat Log"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    className={styles.splitImageRaw}
                    priority
                  />
                </div>
                <div className={styles.splitLabelBefore}>
                  <span>FLAT CAMERA LOG [ UNGRADED ]</span>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className={styles.splitHandle}
                style={{ left: `${gradeSplit}%` }}
              >
                <div className={styles.handleLine} />
                <div className={styles.handleKnob}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="8 16 4 12 8 8" />
                    <polyline points="16 16 20 12 16 8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Color Pipeline Metadata */}
            <div className={styles.gradeMetaGrid}>
              <div className={styles.gradeMetaCard}>
                <span className={styles.gradeMetaTitle}>COLOR PIPELINE</span>
                <span className={styles.gradeMetaVal}>DaVinci Resolve Studio 19 + ACEScc Color Space</span>
              </div>
              <div className={styles.gradeMetaCard}>
                <span className={styles.gradeMetaTitle}>TEXTURE & GRAIN</span>
                <span className={styles.gradeMetaVal}>Kodak 5207 Vision3 250D Optical Film Scan</span>
              </div>
              <div className={styles.gradeMetaCard}>
                <span className={styles.gradeMetaTitle}>LOOK HIGHLIGHT</span>
                <span className={styles.gradeMetaVal}>Split toning, skin isolation & custom halation curves</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TIMELINE ANATOMY (Interactive Multi-Track Sound & Cut Stacker) */}
        {activeTab === "timeline" && (
          <div className={styles.timelineContainer}>
            <div className={styles.timelineHeader}>
              <div className={styles.timelineTitleGroup}>
                <span className={styles.timelinePill}>NLE TIMELINE ARCHITECTURE</span>
                <h3>{activeProject.title} — Multi-Track Breakdown</h3>
              </div>
              <div className={styles.audioFilters}>
                <span className={styles.audioLabel}>ISOLATE AUDIO STEMS:</span>
                {(["all", "dialogue", "foley", "music"] as const).map((stem) => (
                  <button
                    key={stem}
                    type="button"
                    onClick={() => setActiveAudioTrack(stem)}
                    className={`${styles.stemBtn} ${activeAudioTrack === stem ? styles.stemBtnActive : ""}`}
                  >
                    {stem.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mock Professional NLE Timeline Track Visualizer */}
            <div className={styles.nleViewport}>
              {/* Ruler */}
              <div className={styles.nleRuler}>
                <span>00:00:00:00</span>
                <span>00:00:05:00</span>
                <span>00:00:10:00</span>
                <span>00:00:15:00</span>
                <span>00:00:20:00</span>
                <span>00:00:25:00</span>
                <span>00:00:30:00</span>
              </div>

              {/* Video Tracks */}
              <div className={styles.trackRow}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>V3</span>
                  <span className={styles.trackType}>TITLES / VFX</span>
                </div>
                <div className={styles.trackLane}>
                  <div className={styles.clipBlockVfx} style={{ left: "10%", width: "25%" }}>Kinetic Intro Text</div>
                  <div className={styles.clipBlockVfx} style={{ left: "65%", width: "30%" }}>Brand Logo Lockup</div>
                </div>
              </div>

              <div className={styles.trackRow}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>V2</span>
                  <span className={styles.trackType}>OVERLAYS</span>
                </div>
                <div className={styles.trackLane}>
                  <div className={styles.clipBlockOverlay} style={{ left: "0%", width: "100%" }}>35mm Film Grain + Halation LUT</div>
                </div>
              </div>

              <div className={styles.trackRow}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>V1</span>
                  <span className={styles.trackType}>PRIMARY CUT</span>
                </div>
                <div className={styles.trackLane}>
                  <div className={styles.clipBlockVideo} style={{ left: "0%", width: "18%" }}>Shot 01 (Hook)</div>
                  <div className={styles.clipBlockVideo} style={{ left: "19%", width: "22%" }}>Shot 02 (Speed Ramp)</div>
                  <div className={styles.clipBlockVideo} style={{ left: "42%", width: "15%" }}>Shot 03 (Macro)</div>
                  <div className={styles.clipBlockVideo} style={{ left: "58%", width: "24%" }}>Shot 04 (Climax)</div>
                  <div className={styles.clipBlockVideo} style={{ left: "83%", width: "17%" }}>Shot 05 (Outro)</div>
                </div>
              </div>

              {/* Divider */}
              <div className={styles.trackSeparator}>
                <span>AUDIO BUS CHANNELS</span>
              </div>

              {/* Audio Tracks */}
              <div className={`${styles.trackRow} ${activeAudioTrack !== "all" && activeAudioTrack !== "dialogue" ? styles.trackDimmed : ""}`}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>A1</span>
                  <span className={styles.trackType}>DIALOGUE & VO</span>
                </div>
                <div className={styles.trackLaneAudio}>
                  <div className={styles.clipBlockAudioA1} style={{ left: "5%", width: "35%" }}>Master VO - Cleaned (iZotope)</div>
                  <div className={styles.clipBlockAudioA1} style={{ left: "55%", width: "40%" }}>Punchline VO Track</div>
                </div>
              </div>

              <div className={`${styles.trackRow} ${activeAudioTrack !== "all" && activeAudioTrack !== "foley" ? styles.trackDimmed : ""}`}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>A2</span>
                  <span className={styles.trackType}>SUB-FRAME FOLEY</span>
                </div>
                <div className={styles.trackLaneAudio}>
                  <div className={styles.clipBlockAudioA2} style={{ left: "0%", width: "10%" }}>Whoosh Hit</div>
                  <div className={styles.clipBlockAudioA2} style={{ left: "18%", width: "8%" }}>Impact Bass</div>
                  <div className={styles.clipBlockAudioA2} style={{ left: "41%", width: "12%" }}>Mechanical Click</div>
                  <div className={styles.clipBlockAudioA2} style={{ left: "57%", width: "15%" }}>Riser FX</div>
                  <div className={styles.clipBlockAudioA2} style={{ left: "82%", width: "18%" }}>Heartbeat Sub Drop</div>
                </div>
              </div>

              <div className={`${styles.trackRow} ${activeAudioTrack !== "all" && activeAudioTrack !== "music" ? styles.trackDimmed : ""}`}>
                <div className={styles.trackHeader}>
                  <span className={styles.trackName}>A3</span>
                  <span className={styles.trackType}>MUSIC SCORE</span>
                </div>
                <div className={styles.trackLaneAudio}>
                  <div className={styles.clipBlockAudioA3} style={{ left: "0%", width: "100%" }}>Commercial Score (Ducked under VO)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Trust & Outcomes Strip */}
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>150+</span>
            <span className={styles.statLabel}>Commercial Timelines Cut</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>18+</span>
            <span className={styles.statLabel}>Agency-Grade Case Studies</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Live Brand Brief Practice</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>1-on-1</span>
            <span className={styles.statLabel}>Lead Editor Critiques</span>
          </div>
        </div>
      </div>

      {/* Blueprint Inspect Modal */}
      {selectedModalProject && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedModalProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setSelectedModalProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedModalProject.image}
                alt={selectedModalProject.title}
                fill
                sizes="(max-width: 768px) 95vw, 760px"
                className={styles.modalImage}
              />
              <div className={styles.modalBadgeRow}>
                <span className={styles.modalBadge}>{selectedModalProject.tag}</span>
                <span className={styles.modalMetricBadge}>{selectedModalProject.metrics}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalCategoryRow}>
                <span className={styles.modalCategory}>{selectedModalProject.category}</span>
                <span className={styles.modalTimecode}>TIMECODE: {selectedModalProject.timecode}</span>
              </div>

              <h3 className={styles.modalTitle}>{selectedModalProject.title}</h3>
              <p className={styles.modalDesc}>{selectedModalProject.description}</p>

              <div className={styles.modalDetailsGrid}>
                <div className={styles.modalDetailBlock}>
                  <span className={styles.detailTitle}>LEAD MENTOR CRITIQUE</span>
                  <span className={styles.detailVal}>{selectedModalProject.mentor}</span>
                </div>
                <div className={styles.modalDetailBlock}>
                  <span className={styles.detailTitle}>SOFTWARE PIPELINE</span>
                  <span className={styles.detailVal}>{selectedModalProject.tools.join(", ")}</span>
                </div>
                <div className={styles.modalDetailBlock}>
                  <span className={styles.detailTitle}>CORE CRAFT OUTCOME</span>
                  <span className={styles.detailVal}>{selectedModalProject.learningOutcome}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
