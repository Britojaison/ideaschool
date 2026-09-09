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
          className="fixed bottom-0 left-0 right-0 z-[9999] flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12 lg:gap-24 bg-transparent md:bg-[#dafd55] shadow-none md:shadow-[0_-10px_40px_rgba(0,0,0,0.15)] p-4 md:px-6 md:py-4 pointer-events-none md:pointer-events-auto"
        >
          <div className="hidden md:flex flex-none flex-row items-center gap-6 lg:gap-12 w-full md:w-auto">
            <h3 
              className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-black m-0 p-0 tracking-tight"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Ready to learn video editing skills that pay?
            </h3>
            <p className="text-black text-sm md:text-base font-medium" style={{ maxWidth: "380px", lineHeight: 1.3 }}>
              Join the 2-day live workshop and start building the confidence needed for better projects.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
            <a 
              href="https://rzp.io/rzp/L5kyyQlg" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center border border-black bg-[#dafd55] rounded-full px-6 py-2 w-max text-black font-medium text-sm md:text-base hover:bg-black hover:text-white hover:!text-white transition-colors group pointer-events-auto shadow-[0_4px_14px_rgba(0,0,0,0.1)] md:shadow-none"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="group-hover:text-white transition-colors">Register Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:stroke-white transition-colors stroke-black">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
