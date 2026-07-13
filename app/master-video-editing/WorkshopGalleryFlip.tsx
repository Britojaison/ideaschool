"use client";

import { useState } from "react";

const videos = [
  {
    id: "promo",
    title: "Editing Promo",
    src: "/images/edit_1.mp4",
    aspectRatio: "16/9",
    maxWidth: "900px",
    description: "High-retention promo displaying storytelling, dynamic pacing, and visual effects."
  },
  {
    id: "zaman",
    title: "Case Study",
    src: "/images/workshop/zaman_case_study.mp4",
    aspectRatio: "9/16",
    maxWidth: "380px",
    description: "Vertical ad campaign project showcasing engaging hooks and retention edits."
  },
  {
    id: "luis",
    title: "Creative Reel",
    src: "/images/workshop/luis_reel.mp4",
    aspectRatio: "9/16",
    maxWidth: "380px",
    description: "Vertical creative edit demonstrating advanced motion graphics and sound design."
  }
];

export default function WorkshopGalleryFlip() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentVideo = videos[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="workshopWorkGalleryContainer" 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
        padding: "0 clamp(16px, 4vw, 32px)",
      }}
    >
      {/* Video Player Frame Wrapper */}
      <div 
        className="workshopVideoPlayerFrame"
        style={{
          width: "100%",
          maxWidth: currentVideo.maxWidth,
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          border: "2px solid #262626",
          backgroundColor: "#151515",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
          transition: "max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          marginBottom: "20px"
        }}
      >
        {/* Active Video Player */}
        <video
          key={currentVideo.src}
          src={currentVideo.src}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            aspectRatio: currentVideo.aspectRatio,
            objectFit: "cover"
          }}
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
          aria-label={currentVideo.description}
        />

        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#dafd55";
            e.currentTarget.style.borderColor = "#dafd55";
            e.currentTarget.style.color = "#000000";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next Project"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#dafd55";
            e.currentTarget.style.borderColor = "#dafd55";
            e.currentTarget.style.color = "#000000";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Pagination / Indicators */}
      <div 
        className="workshopCarouselDots"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          margin: "8px 0 16px"
        }}
      >
        {videos.map((vid, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={vid.id}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Slide to ${vid.title}`}
              style={{
                width: isActive ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                backgroundColor: isActive ? "#dafd55" : "rgba(255, 255, 255, 0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          );
        })}
      </div>

      {/* Video Title */}
      <h3
        style={{
          color: "#ffffff",
          fontFamily: "'Bebas Neue', var(--font-heading)",
          fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
          fontWeight: 700,
          margin: "0 0 4px",
          letterSpacing: "1px",
          textTransform: "uppercase"
        }}
      >
        {currentVideo.title}
      </h3>

      {/* Video Description */}
      <p 
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
          textAlign: "center",
          maxWidth: "600px",
          margin: "4px 0 0",
          lineHeight: 1.5
        }}
      >
        {currentVideo.description}
      </p>
    </div>
  );
}
