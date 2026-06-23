"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WorkshopStickyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a slight delay so it doesn't pop up immediately on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-8 bg-[#dafd55] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] p-3 md:px-6 md:py-4"
        >
          {/* Mobile Close Button (Absolute top right) */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 md:hidden text-black hover:opacity-60 transition-opacity p-1 z-10"
            aria-label="Close banner"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-12 w-full md:w-auto pr-8 md:pr-0">
            <h3 
              className="text-lg md:text-3xl lg:text-4xl font-bold leading-tight md:leading-none text-black m-0 p-0 tracking-tight"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Ready to learn video editing skills that pay?
            </h3>
            <p className="text-black text-sm md:text-base hidden md:block font-medium" style={{ maxWidth: "380px", lineHeight: 1.3 }}>
              Join the 2-day live workshop and start building the confidence needed for better projects.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-end mt-2 md:mt-0">
            <a 
              href="https://rzp.io/rzp/L5kyyQlg" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center border border-black rounded-full px-6 py-2 md:py-3 w-full md:w-auto text-black font-medium text-sm md:text-base hover:bg-black hover:text-white hover:!text-white transition-colors group"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="group-hover:text-white transition-colors">Register Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:stroke-white transition-colors stroke-black">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            {/* Desktop Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="hidden md:block text-black hover:opacity-60 transition-opacity p-1 -mr-2"
              aria-label="Close banner"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
