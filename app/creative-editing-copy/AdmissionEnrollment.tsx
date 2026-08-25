"use client";

import React from "react";
import Link from "next/link";

export default function AdmissionEnrollment() {
  const enrollmentDetails = [
    { label: "Mode", value: "Offline + Online Hybrid Learning Experience" },
    { label: "Ideal For", value: "Creators, Editors, Designers, Content Professionals, Students, Freelancers & Aspiring Digital Creators" },
    { label: "Cohort Intake", value: "Focused mentorship with limited seats per batch." }
  ];

  return (
    <section 
      style={{
        backgroundColor: "#050505",
        padding: "100px 4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div 
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#0a0a0c",
          borderRadius: "24px",
          padding: "48px",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <span 
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
              color: "#a0a0a0",
              fontFamily: 'var(--font-stara), "Stara", sans-serif'
            }}
          >
            Admission & Enrollment
          </span>
          <h2 
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: 'var(--font-stara), "Stara", sans-serif',
              textTransform: "uppercase",
              margin: 0,
              color: "#ffffff"
            }}
          >
            Fees And Enrollment
          </h2>
        </div>

        <div 
          style={{
            backgroundColor: "#121215",
            borderRadius: "16px",
            padding: "32px",
            marginBottom: "40px",
            border: "1px solid rgba(255,255,255,0.03)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
            <div>
              <span style={{ color: "#a0a0a0", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}>
                Full Program Fee
              </span>
            </div>
            
            <Link
              href="https://www.ideaschool.pro/creative-editing-course#apply"
              target="_blank"
              style={{
                backgroundColor: "#dafd55",
                color: "#030405",
                fontWeight: 900,
                textTransform: "uppercase",
                padding: "16px 32px",
                borderRadius: "999px",
                letterSpacing: "1px",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: 'var(--font-stara), "Stara", sans-serif',
                transition: "transform 0.2s ease, filter 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(1)"; }}
            >
              Talk to Idea School
            </Link>
          </div>
          <p style={{ color: "#888", fontSize: "0.9rem", margin: 0, lineHeight: 1.5, fontFamily: 'var(--font-stara), "Stara", sans-serif' }}>
            Seats are limited so every learner gets attention, feedback, and room to practice.
          </p>
        </div>

        <dl style={{ display: "flex", flexDirection: "column", gap: "24px", margin: 0 }}>
          {enrollmentDetails.map((item, index) => (
            <div 
              key={item.label}
              style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 2fr", 
                gap: "20px",
                paddingBottom: index !== enrollmentDetails.length - 1 ? "24px" : "0",
                borderBottom: index !== enrollmentDetails.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
              }}
            >
              <dt style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.1rem", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}>{item.label}</dt>
              <dd style={{ color: "#a0a0a0", margin: 0, lineHeight: 1.6, fontFamily: 'var(--font-stara), "Stara", sans-serif' }}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
