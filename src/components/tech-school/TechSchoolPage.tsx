"use client";

import React from "react";
import Shell from "@/components/global/Shell";
import TechHero from "./TechHero";
import TechHeroTicker from "./TechHeroTicker";
import VibecodingTrap from "./VibecodingTrap";
import MindsetShift from "./MindsetShift";
import WhatYouWalkAwayWith from "./WhatYouWalkAwayWith";
import TwoXMultiplier from "./TwoXMultiplier";
import WhoIsThisFor from "./WhoIsThisFor";
import FinalCta from "./FinalCta";
import TechMentors from "./TechMentors";
import styles from "./TechSchool.module.css";

export default function TechSchoolPage() {
  const handleOpenReservation = () => {
    const el = document.getElementById("reservation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.dispatchEvent(new CustomEvent("open-home-form"));
    }
  };

  return (
    <Shell headerOverlay={true} showAnnouncement={false}>
      <div className={styles.techPageRoot} data-header-theme="dark">
        {/* Section 1: Hero (Above the Fold) */}
        <TechHero onReserveClick={handleOpenReservation} />

        {/* Transition Ticker Marquee */}
        <TechHeroTicker />

        {/* Section 2: The Core Problem (The "Vibecoding" Trap) */}
        <VibecodingTrap />

        {/* Section 3: The Mindset Shift (Vibecoding vs. AI Engineering) */}
        <MindsetShift />

        {/* Section 4: What You Walk Away With */}
        <WhatYouWalkAwayWith />

        {/* Section 5: The 2x Multiplier (Why Attend?) */}
        <TwoXMultiplier />

        {/* Section 6: Who This Workshop Is For */}
        <WhoIsThisFor />

        {/* Section 7: Final Call to Action */}
        <FinalCta />

        {/* Section 8: Mentors */}
        <TechMentors />
      </div>
    </Shell>
  );
}
