"use client";

import { motion } from "framer-motion";
import React from "react";

interface MusicToggleButtonProps {
  isPlaying?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
  className?: string;
}

export default function MusicToggleButton({
  isPlaying = false,
  onToggle,
  className = ""
}: MusicToggleButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle(e);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes barPulse1 {
          0% { height: 4px; }
          50% { height: 16px; }
          100% { height: 6px; }
        }
        @keyframes barPulse2 {
          0% { height: 5px; }
          50% { height: 18px; }
          100% { height: 10px; }
        }
        @keyframes barPulse3 {
          0% { height: 3px; }
          50% { height: 17px; }
          100% { height: 5px; }
        }
        @keyframes barPulse4 {
          0% { height: 6px; }
          50% { height: 15px; }
          100% { height: 4px; }
        }
        @keyframes barPulse5 {
          0% { height: 3px; }
          50% { height: 13px; }
          100% { height: 7px; }
        }
        .eqBar {
          width: 1.5px;
          border-radius: 9999px;
          transition: height 0.25s ease, background-color 0.25s ease, opacity 0.25s ease;
        }
        .eqBarPlaying {
          background-color: #FFFFFF;
          opacity: 1;
        }
        .eqBarPaused {
          height: 3px !important;
          background-color: rgba(255, 255, 255, 0.45);
          opacity: 0.5;
        }
        .bar1 { animation: ${isPlaying ? "barPulse1 0.65s ease-in-out infinite alternate" : "none"}; }
        .bar2 { animation: ${isPlaying ? "barPulse2 0.85s ease-in-out infinite alternate 0.15s" : "none"}; }
        .bar3 { animation: ${isPlaying ? "barPulse3 0.55s ease-in-out infinite alternate 0.3s" : "none"}; }
        .bar4 { animation: ${isPlaying ? "barPulse4 0.75s ease-in-out infinite alternate 0.1s" : "none"}; }
        .bar5 { animation: ${isPlaying ? "barPulse5 0.9s ease-in-out infinite alternate 0.25s" : "none"}; }
      `}</style>

      <motion.button
        type="button"
        onClick={handleClick}
        key="audio-toggle-btn"
        initial={{ padding: "14px 14px" }}
        whileHover={{ padding: "18px 22px", scale: 1.06 }}
        whileTap={{ padding: "18px 22px", scale: 0.95 }}
        transition={{ duration: 0.5, bounce: 0.5, type: "spring" }}
        aria-label={isPlaying ? "Mute video audio" : "Play video audio"}
        title={isPlaying ? "Click to mute" : "Click to play sound"}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "9999px",
          cursor: "pointer",
          outline: "none",
          color: "#FFFFFF",
          userSelect: "none",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7)",
          pointerEvents: "auto",
          zIndex: 60
        }}
      >
        <div
          style={{
            display: "flex",
            height: "18px",
            alignItems: "center",
            gap: "4px",
            pointerEvents: "none"
          }}
        >
          <span className={`eqBar bar1 ${isPlaying ? "eqBarPlaying" : "eqBarPaused"}`} />
          <span className={`eqBar bar2 ${isPlaying ? "eqBarPlaying" : "eqBarPaused"}`} />
          <span className={`eqBar bar3 ${isPlaying ? "eqBarPlaying" : "eqBarPaused"}`} />
          <span className={`eqBar bar4 ${isPlaying ? "eqBarPlaying" : "eqBarPaused"}`} />
          <span className={`eqBar bar5 ${isPlaying ? "eqBarPlaying" : "eqBarPaused"}`} />
        </div>
      </motion.button>
    </>
  );
}
