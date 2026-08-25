"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionEnrollment() {
  const enrollmentDetails = [
    { label: "Mode", value: "Offline + Online Hybrid Learning Experience" },
    { label: "Ideal For", value: "Creators, Editors, Designers, Content Professionals, Students, Freelancers & Aspiring Digital Creators" },
    { label: "Cohort Intake", value: "Focused mentorship with limited seats per batch." }
  ];

  return (
    <section 
      className="flex justify-center items-center py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "#050505" }}
    >
      <div 
        className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-10 lg:gap-16 p-6 md:p-10 lg:p-12"
        style={{
          backgroundColor: "#0a0a0c",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
        }}
      >
        {/* Left Side: Image */}
        <div className="w-full lg:w-[45%] flex items-center justify-center relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full border" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <Image 
            src="/images/camlab-cam2.png" 
            alt="Idea School Campus Lab" 
            fill
            className="object-contain scale-[1.3] md:scale-[1.4]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <div className="mb-10">
            <span 
              className="inline-block border rounded-full px-4 py-1.5 text-xs uppercase tracking-wider mb-4"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "#a0a0a0",
                fontFamily: 'var(--font-stara), "Stara", sans-serif'
              }}
            >
              Admission & Enrollment
            </span>
            <h2 
              className="text-3xl md:text-5xl uppercase m-0 text-white"
              style={{ fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Fees And Enrollment
            </h2>
          </div>

          <div 
            className="rounded-2xl p-6 md:p-8 mb-10 border"
            style={{
              backgroundColor: "#121215",
              borderColor: "rgba(255,255,255,0.03)"
            }}
          >
            <div className="flex justify-between items-center flex-wrap gap-5 mb-5">
              <div>
                <span 
                  className="block text-sm uppercase tracking-wider mb-2"
                  style={{ color: "#a0a0a0", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  Full Program Fee
                </span>
              </div>
              
              <Link
                href="https://www.ideaschool.pro/creative-editing-course#apply"
                target="_blank"
                className="font-black uppercase px-8 py-4 rounded-full tracking-wider text-sm no-underline hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: "#dafd55",
                  color: "#030405",
                  fontFamily: 'var(--font-stara), "Stara", sans-serif',
                }}
              >
                Talk to Idea School
              </Link>
            </div>
            <p 
              className="m-0 text-sm leading-relaxed"
              style={{ color: "#888", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Seats are limited so every learner gets attention, feedback, and room to practice.
            </p>
          </div>

          <dl className="flex flex-col gap-6 m-0">
            {enrollmentDetails.map((item, index) => (
              <div 
                key={item.label}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-2 sm:gap-5 ${index !== enrollmentDetails.length - 1 ? "pb-6 border-b" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <dt 
                  className="font-semibold text-[1.05rem] text-white"
                  style={{ fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  {item.label}
                </dt>
                <dd 
                  className="m-0 leading-relaxed text-[0.95rem]"
                  style={{ color: "#a0a0a0", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
