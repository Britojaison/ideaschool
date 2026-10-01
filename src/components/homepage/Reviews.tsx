"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";

export interface VideoTestimonial {
  id: string;
  src: string;
  poster: string;
  tag: string;
}

const videoReviews: VideoTestimonial[] = [
  {
    id: "testimony1",
    src: "/images/homepagnew/testimony1.mp4",
    poster: "/images/homepagnew/thumbnails/testimony1.jpg",
    tag: "Student Story",
  },
  {
    id: "video-36603",
    src: "/images/homepagnew/Video-36603.mp4",
    poster: "/images/homepagnew/thumbnails/video-36603.jpg",
    tag: "Experience",
  },
  {
    id: "video-61423",
    src: "/images/homepagnew/Video-61423.mp4",
    poster: "/images/homepagnew/thumbnails/video-61423.jpg",
    tag: "Student Story",
  },
  {
    id: "video-62900",
    src: "/images/homepagnew/Video-62900.mp4",
    poster: "/images/homepagnew/thumbnails/video-62900.jpg",
    tag: "Review",
  },
  {
    id: "video-90277",
    src: "/images/homepagnew/Video-90277.mp4",
    poster: "/images/homepagnew/thumbnails/video-90277.jpg",
    tag: "Experience",
  },
];

function VideoCard({
  item,
  onOpenModal,
}: {
  item: VideoTestimonial;
  onOpenModal: (item: VideoTestimonial) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={styles.videoCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(item);
        }
      }}
      aria-label={`Watch testimonial`}
    >
      <div className={styles.videoMediaWrapper}>
        <Image
          src={item.poster}
          alt="Student testimonial"
          fill
          sizes="(max-width: 768px) 240px, 300px"
          className={`${styles.videoPoster} ${
            isPlaying ? styles.posterHidden : ""
          }`}
        />
        <video
          ref={videoRef}
          src={item.src}
          loop
          muted
          playsInline
          preload="metadata"
          className={styles.videoPlayer}
        />
        <div className={styles.videoOverlayGradient} />

        <div className={`${styles.playButton} ${isHovered ? styles.playButtonHover : ""}`}>
          <Play className={styles.playIcon} />
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoTestimonial | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalVideo(null);
      }
    };
    if (activeModalVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalVideo]);

  const toggleModalPlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setIsModalPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setIsModalPlaying(false);
      }
    }
  };

  const toggleModalMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

  return (
    <section className={styles.reviewsSection} data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.reviewsHeader}>
          <h2>What people are saying</h2>
        </div>
      </div>

      <div className={styles.reviewsTrackWrapper}>
        <div className={styles.reviewsTrack}>
          <div className={styles.reviewsList}>
            {videoReviews.map((item, i) => (
              <VideoCard
                key={`first-${item.id}-${i}`}
                item={item}
                onOpenModal={(v) => {
                  setActiveModalVideo(v);
                  setIsModalPlaying(true);
                  setIsMuted(false);
                }}
              />
            ))}
          </div>
          <div className={styles.reviewsList} aria-hidden="true">
            {videoReviews.map((item, i) => (
              <VideoCard
                key={`second-${item.id}-${i}`}
                item={item}
                onOpenModal={(v) => {
                  setActiveModalVideo(v);
                  setIsModalPlaying(true);
                  setIsMuted(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {activeModalVideo && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModalVideo(null)}
              aria-label="Close video"
            >
              <X className={styles.closeIcon} />
            </button>

            <div className={styles.modalVideoWrapper} onClick={() => toggleModalPlay()}>
              <video
                ref={modalVideoRef}
                src={activeModalVideo.src}
                autoPlay
                playsInline
                loop
                className={styles.modalVideo}
                onPlay={() => setIsModalPlaying(true)}
                onPause={() => setIsModalPlaying(false)}
              />

              <div className={styles.modalControls} onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={toggleModalPlay}
                  aria-label={isModalPlaying ? "Pause" : "Play"}
                >
                  {isModalPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={toggleModalMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
