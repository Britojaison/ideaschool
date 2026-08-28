"use client";

import React, { useState, useEffect, cloneElement, ReactElement, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressVideoProps {
  children: ReactElement<any>;
  className?: string;
  containerClassName?: string;
}

export const ProgressVideo = ({
  children,
  className,
  containerClassName,
}: ProgressVideoProps) => {
  const [progress, setProgress] = useState(0);
  const [isBuffering, setIsBuffering] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration > 0 && video.buffered.length > 0) {
        // Find the buffered range that the current time is in
        let bufferedEnd = 0;
        for (let i = 0; i < video.buffered.length; i++) {
          if (video.currentTime >= video.buffered.start(i) && video.currentTime <= video.buffered.end(i)) {
            bufferedEnd = video.buffered.end(i);
            break;
          }
        }
        
        // If we didn't find the exact range, just use the last one (fallback)
        if (bufferedEnd === 0) {
           bufferedEnd = video.buffered.end(video.buffered.length - 1);
        }

        const percentage = (bufferedEnd / video.duration) * 100;
        setProgress(Math.min(100, Math.max(0, percentage)));
      }
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
      setProgress(100);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
      setProgress(100);
    };

    const handleLoadStart = () => {
      setIsBuffering(true);
      setProgress(0);
    };
    
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA
      setIsBuffering(false);
      setProgress(100);
    }

    video.addEventListener('progress', updateProgress);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);

    return () => {
      video.removeEventListener('progress', updateProgress);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  const modifiedChild = cloneElement(children, {
    ref: videoRef,
    className: cn(children.props.className, className),
  });

  return (
    <div 
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
      slot={children.props.slot}
    >
      {modifiedChild}

      <AnimatePresence>
        {isBuffering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-md pointer-events-none"
          >
            <div className="flex flex-col items-center justify-center text-white drop-shadow-lg">
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter tabular-nums">
                {Math.floor(progress)}%
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 mt-1 font-medium">
                Buffering
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
