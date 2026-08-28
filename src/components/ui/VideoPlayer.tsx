"use client";

import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import type { ComponentProps } from "react";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { ProgressVideo } from "./ProgressVideo";

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MediaController
      style={{
        ...style,
      }}
      {...props}
    />
  );
};

export type VideoPlayerControlBarProps = ComponentProps<typeof MediaControlBar>;

export const VideoPlayerControlBar = (props: VideoPlayerControlBarProps) => (
  <MediaControlBar {...props} />
);

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({
  className,
  ...props
}: VideoPlayerTimeRangeProps) => (
  <MediaTimeRange
    className={cn(
      "[--media-range-thumb-opacity:0] [--media-range-track-height:2px]",
      className
    )}
    {...props}
  />
);

export type VideoPlayerTimeDisplayProps = ComponentProps<
  typeof MediaTimeDisplay
>;

export const VideoPlayerTimeDisplay = ({
  className,
  ...props
}: VideoPlayerTimeDisplayProps) => (
  <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerVolumeRangeProps = ComponentProps<
  typeof MediaVolumeRange
>;

export const VideoPlayerVolumeRange = ({
  className,
  ...props
}: VideoPlayerVolumeRangeProps) => (
  <MediaVolumeRange className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({
  className,
  ...props
}: VideoPlayerPlayButtonProps) => (
  <MediaPlayButton className={cn("", className)} {...props} />
);

export type VideoPlayerSeekBackwardButtonProps = ComponentProps<
  typeof MediaSeekBackwardButton
>;

export const VideoPlayerSeekBackwardButton = ({
  className,
  ...props
}: VideoPlayerSeekBackwardButtonProps) => (
  <MediaSeekBackwardButton className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerSeekForwardButtonProps = ComponentProps<
  typeof MediaSeekForwardButton
>;

export const VideoPlayerSeekForwardButton = ({
  className,
  ...props
}: VideoPlayerSeekForwardButtonProps) => (
  <MediaSeekForwardButton className={cn("p-2.5", className)} {...props} />
);

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({
  className,
  ...props
}: VideoPlayerMuteButtonProps) => (
  <MediaMuteButton className={cn("", className)} {...props} />
);

export type VideoPlayerContentProps = ComponentProps<"video">;

export const VideoPlayerContent = ({
  className,
  ...props
}: VideoPlayerContentProps) => (
  <video className={cn("mb-0 mt-0", className)} {...props} />
);

export interface VideoPopOverProps {
  setShowVideoPopOver: (showVideoPopOver: boolean) => void;
  videoSrc?: string;
  poster?: string;
  title?: string;
}

export const VideoPopOver = ({
  setShowVideoPopOver,
  videoSrc = "/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4",
  poster,
  title,
}: VideoPopOverProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowVideoPopOver(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setShowVideoPopOver]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center p-3 sm:p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-black/85 fixed inset-0 h-full w-full backdrop-blur-xl"
        onClick={() => setShowVideoPopOver(false)}
      />
      <motion.div
        initial={{ clipPath: "inset(43.5% 43.5% 33.5% 43.5%)", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        exit={{
          clipPath: "inset(43.5% 43.5% 33.5% 43.5%)",
          opacity: 0,
          transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.2, delay: 0.4 },
          },
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="relative z-10 aspect-video w-full max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }}>
          <ProgressVideo containerClassName="w-full h-full">
            <VideoPlayerContent
              src={videoSrc}
              poster={poster}
              autoPlay
              playsInline
              slot="media"
              className="w-full h-full object-contain"
              style={{ width: "100%", height: "100%" }}
            />
          </ProgressVideo>

          {title && (
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <span className="text-white/90 font-medium text-xs sm:text-sm tracking-wider uppercase drop-shadow">
                {title}
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowVideoPopOver(false)}
            aria-label="Close Video"
            className="absolute right-3 top-3 z-30 cursor-pointer rounded-full p-2 bg-black/60 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
          >
            <Plus className="size-5 rotate-45 text-white" />
          </button>

          <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-6xl -translate-x-1/2 items-center justify-center px-4 sm:px-8 py-3 sm:py-5 mix-blend-exclusion z-20">
            <VideoPlayerPlayButton className="h-5 w-5 bg-transparent cursor-pointer" />
            <VideoPlayerTimeRange className="bg-transparent flex-1 mx-3 cursor-pointer" />
            <VideoPlayerTimeDisplay className="p-1 text-xs" />
            <VideoPlayerMuteButton className="size-5 bg-transparent cursor-pointer" />
            <VideoPlayerVolumeRange className="w-20 hidden sm:inline-block bg-transparent cursor-pointer" />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </motion.div>
    </div>
  );
};
