"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionEnrollment() {
  const enrollmentDetails = [
    {
      label: "Mode",
      value: "Offline + Online Hybrid Learning Experience"
    },
    {
      label: "Ideal For",
      value: "Aspiring Video Editors, Creators, Designers, Students, Freelancers and Creative Professionals"
    },
    {
      label: "Cohort",
      value: "Limited seats for focused mentorship, feedback and practical learning."
    }
  ];

  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen w-full"
      style={{ backgroundColor: "#FBFAF2" }}
      data-header-theme="light"
    >
      {/* Left Side: Visual / Studio Showcase */}
      <div className="w-full lg:w-1/2 relative min-h-[60vh] lg:min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="relative w-full h-[480px] lg:h-[88%] rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 shadow-2xl group">
          <Image
            src="/images/full-optimized.webp"
            alt="Idea School Campus Lab"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="w-full max-w-[640px] flex flex-col justify-center">
          <div className="mb-8">
            <span
              className="inline-block border rounded-full px-4 py-1.5 text-xs uppercase tracking-wider mb-4"
              style={{
                borderColor: "rgba(17,17,17,0.14)",
                color: "#666666",
                fontFamily: 'var(--font-stara), "Stara", sans-serif'
              }}
            >
              Fees & Enrollment
            </span>
            <h2
              className="text-3xl md:text-5xl uppercase m-0 leading-tight"
              style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Fees and Enrollment
            </h2>
            <p
              className="mt-3 text-sm md:text-base uppercase tracking-wider m-0 font-medium"
              style={{ color: "#718000", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Invest in a skillset you can build a career around.
            </p>
          </div>

          {/* Full Program Highlight Card */}
          <div
            className="rounded-2xl p-6 md:p-8 mb-8 border transition-shadow duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#F1F0E8",
              borderColor: "rgba(17,17,17,0.14)"
            }}
          >
            {/* Card Header Tag & Cohort Status */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className="inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-bold"
                style={{
                  backgroundColor: "rgba(113, 128, 0, 0.12)",
                  color: "#606d00",
                  fontFamily: 'var(--font-stara), "Stara", sans-serif'
                }}
              >
                Full Program • 24 Weeks
              </span>
              <span
                className="text-[11px] uppercase tracking-wider font-semibold opacity-60"
                style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
              >
                Hybrid / Offline + Online
              </span>
            </div>

            {/* Program Title */}
            <h3
              className="text-xl md:text-2xl font-bold uppercase tracking-tight m-0 mb-5 leading-snug"
              style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              24-Week Full-Stack Video Editing & Creative AI Mastery
            </h3>

            {/* 2-Phase Structured Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div
                className="p-4 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: "#FBFAF2",
                  borderColor: "rgba(17,17,17,0.1)"
                }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#718000", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                  >
                    Phase 01 · 12 Weeks
                  </div>
                  <div
                    className="text-sm font-bold text-[#111111] mb-1"
                    style={{ fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                  >
                    Core Skill Development
                  </div>
                  <p className="text-xs text-[#666666] m-0 leading-relaxed">
                    Premiere Pro, DaVinci Resolve, narrative pacing & AI tool pipelines.
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: "#FBFAF2",
                  borderColor: "rgba(17,17,17,0.1)"
                }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#718000", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                  >
                    Phase 02 · 12 Weeks
                  </div>
                  <div
                    className="text-sm font-bold text-[#111111] mb-1"
                    style={{ fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                  >
                    Industry Experience
                  </div>
                  <p className="text-xs text-[#666666] m-0 leading-relaxed">
                    Live 88GB agency briefs, weekly 1:1 mentor feedback & client-ready portfolio.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button & Note Footer */}
            <div className="pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderColor: "rgba(17,17,17,0.1)" }}>
              <p
                className="m-0 text-xs text-[#666666] leading-relaxed max-w-xs"
                style={{ fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
              >
                ✦ Seats are strictly limited to maintain a mentor-led studio environment.
              </p>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                className="w-full sm:w-auto font-black uppercase px-6 py-3.5 rounded-full tracking-wider text-xs md:text-sm no-underline hover:scale-105 active:scale-95 transition-all duration-200 border-none cursor-pointer shrink-0 flex items-center justify-center gap-2 shadow-sm"
                style={{
                  backgroundColor: "#dafd55",
                  color: "#030405",
                  fontFamily: 'var(--font-stara), "Stara", sans-serif',
                }}
              >
                <span>Talk to Idea Creative School</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          {/* Details List */}
          <dl className="flex flex-col gap-5 m-0">
            {enrollmentDetails.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 ${index !== enrollmentDetails.length - 1 ? "pb-5 border-b" : ""}`}
                style={{ borderColor: "rgba(17,17,17,0.14)" }}
              >
                <dt
                  className="font-bold text-sm md:text-[0.95rem] uppercase tracking-wider"
                  style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  {item.label}
                </dt>
                <dd
                  className="m-0 leading-relaxed text-sm md:text-[0.92rem]"
                  style={{ color: "#555555", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
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
