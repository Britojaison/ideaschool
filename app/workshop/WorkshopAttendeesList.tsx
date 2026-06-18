"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const attendeesData = [
  {
    num: "S / 01",
    title: "FREELANCERS",
    text: "Freelancers who want to offer video editing services and increase their income.",
    image: "/images/whoContent Creators.webp",
    services: "Video Editing / Motion Graphics"
  },
  {
    num: "S / 02",
    title: "STUDENTS",
    text: "College students seeking a high-demand skill with freelancing and career opportunities.",
    image: "/images/whoStudents & Career Switchers.webp",
    services: "Skill Building / Freelance"
  },
  {
    num: "S / 03",
    title: "VIDEO EDITORS",
    text: "Video editors with basic skills who want to level up, increase earning potential, and work on higher-value projects.",
    image: "/images/whoPhotographers & Videographers.webp",
    services: "Advanced Workflow / High-Paying Projects"
  }
];

export default function WorkshopAttendeesList() {
  return (
    <div className="attendeesListContainer" style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 4vw" }}>
      
      {/* Main Section Header */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "#000", marginBottom: "30px" }}
      />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "80px" }}>
         <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, color: "#000", fontFamily: "var(--font-heading)", margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
           (WHO SHOULD ATTEND)
         </h2>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
           <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16M19 13l-7 7-7-7" />
           </svg>
         </div>
      </div>

      {attendeesData.map((attendee, index) => (
        <div key={index} style={{ width: "100%", marginBottom: "60px" }}>
          
          {/* Animated Horizontal Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "1px", background: "#000", marginBottom: "40px" }}
          />

          {/* Row Content */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "60px" }}>
            
            {/* Left Column (Text) */}
            <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "14px", fontWeight: "bold", color: "#000", marginBottom: "30px", letterSpacing: "1px" }}>
                <span style={{ marginRight: "8px" }}>•</span>{attendee.num}
              </div>
              
              <h3 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#000", margin: "0 0 24px 0", display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-heading)" }}>
                <div style={{ width: "16px", height: "16px", background: "#000", borderRadius: "50%", flexShrink: 0 }} />
                {attendee.title}
              </h3>
              
              <p style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", color: "#000", lineHeight: 1.6, margin: 0, maxWidth: "80%" }}>
                {attendee.text}
              </p>

              <button style={{ 
                marginTop: "30px",
                padding: "10px 24px", 
                background: "#e0e0e0", 
                border: "none", 
                borderRadius: "20px", 
                fontWeight: "bold", 
                fontSize: "12px", 
                width: "fit-content",
                cursor: "pointer",
                color: "#000"
              }}>
                LEARN MORE
              </button>
              
              <div style={{ marginTop: "auto", paddingTop: "40px" }}>
                <div style={{ fontWeight: 800, fontSize: "14px", color: "#000", marginBottom: "4px" }}>SERVICES</div>
                <div style={{ fontSize: "14px", color: "#000" }}>{attendee.services}</div>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div style={{ flex: "1 1 500px", position: "relative", minHeight: "500px", borderRadius: "8px", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
              <Image
                src={attendee.image}
                alt={attendee.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      ))}
      
      {/* Final line at the bottom */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "#000", marginTop: "40px" }}
      />
    </div>
  );
}
