"use client";

import React, { useState, useEffect, cloneElement, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressImageProps {
  children: ReactElement<any>;
  className?: string;
  containerClassName?: string;
}

export const ProgressImage = ({
  children,
  className,
  containerClassName,
}: ProgressImageProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    // Small delay before showing loader to avoid flashing on cached images
    const timer = setTimeout(() => {
      setHasStartedLoading(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded || !hasStartedLoading) return;

    // Fake progress up to 99%
    const interval = setInterval(() => {
      setProgress((prev) => {
        const jump = Math.random() * 12; // random jump up to 12%
        if (prev + jump >= 99) {
          clearInterval(interval);
          return 99;
        }
        return prev + jump;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isLoaded, hasStartedLoading]);

  const handleLoad = (e: React.SyntheticEvent) => {
    setProgress(100);
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Call original onLoad if it exists
    if (children.props.onLoad) {
      children.props.onLoad(e);
    }
  };

  const modifiedChild = cloneElement(children, {
    onLoad: handleLoad,
    className: cn(children.props.className, className),
  });

  return (
    <div className={cn("relative overflow-hidden w-full h-full", containerClassName)}>
      {modifiedChild}

      <AnimatePresence>
        {!isLoaded && hasStartedLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center text-white drop-shadow-lg">
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter tabular-nums">
                {Math.floor(progress)}%
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 mt-1 font-medium">
                Loading
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
