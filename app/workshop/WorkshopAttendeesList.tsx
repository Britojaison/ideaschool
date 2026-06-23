"use client";

import React from "react";
import { motion } from "motion/react";

const attendeesData = [
  {
    num: "01",
    title: "FREELANCERS",
    text: "Freelancers who want to offer video editing services and increase their income.",
  },
  {
    num: "02",
    title: "COLLEGE STUDENTS",
    text: "College Students seeking a high-demand skill with freelancing and career opportunities.",
  },
  {
    num: "03",
    title: "VIDEO EDITORS",
    text: "Video Editors with Basic Skills who want to level up, increase their earning potential, and work on higher-value projects.",
  },
  {
    num: "04",
    title: "CONTENT CREATORS",
    text: "Content Creators who want to produce professional-quality content and grow faster on social media.",
  },
  {
    num: "05",
    title: "AGENCY OWNERS",
    text: "Agency Owners who want to build an in-house video editing capability and reduce outsourcing costs.",
  },
  {
    num: "06",
    title: "CREATIVE PROFESSIONALS",
    text: "Aspiring Creative Professionals who want to build a long-term career in the creator economy.",
  }
];

function AttendeeItem({ attendee, index }: { attendee: typeof attendeesData[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white border-2 border-black rounded-2xl p-8 shadow-[6px_6px_0_0_#151515] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-200 flex flex-col h-full"
    >
      <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#dafd55] border-2 border-black rounded-full text-sm font-black text-black mb-6 w-fit font-mono">
        {attendee.num}
      </div>
      <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 900, color: "#000", margin: "0 0 16px 0", fontFamily: "'Bebas Neue', var(--font-heading)", letterSpacing: "0.5px" }}>
        {attendee.title}
      </h3>
      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: 1.6, margin: 0, flex: 1, fontWeight: 500 }}>
        {attendee.text}
      </p>
    </motion.div>
  );
}

export default function WorkshopAttendeesList() {
  return (
    <div className="attendeesListContainer" style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>

      {/* Main Section Header */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "#000", marginBottom: "40px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", gap: "20px" }}>
        <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, color: "#000", fontFamily: "var(--font-heading)", margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1 }}>
          (WHO SHOULD ATTEND)
        </h2>
        <div style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)", fontWeight: 500, color: "#555", maxWidth: "500px", lineHeight: 1.4 }}>
          Discover if this workshop is the right fit for your career goals.
        </div>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "24px",
        marginBottom: "80px"
      }}>
        {attendeesData.map((attendee, index) => (
          <AttendeeItem key={index} attendee={attendee} index={index} />
        ))}
      </div>

      {/* Final line at the bottom */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "#000", marginTop: "40px", marginBottom: "25px" }}
      />
    </div>
  );
}
