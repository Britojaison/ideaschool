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
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <Image
          src="/images/full-optimized.webp"
          alt="Idea School Campus Lab"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
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
            className="rounded-2xl p-6 md:p-8 mb-8 border"
            style={{
              backgroundColor: "#F1F0E8",
              borderColor: "rgba(17,17,17,0.14)"
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5">
              <div>
                <span
                  className="block text-xs uppercase tracking-widest font-bold mb-2"
                  style={{ color: "#718000", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  Full Program
                </span>
                <h3
                  className="text-lg md:text-xl font-bold uppercase tracking-tight m-0 mb-3"
                  style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  24-Week Full-Stack Video Editing & Creative AI Mastery
                </h3>
                <div
                  className="flex flex-col gap-1.5 text-sm"
                  style={{ color: "#444444", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    <span>12 Weeks Core Skill Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    <span>12 Weeks Industry Experience</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                className="self-start font-black uppercase px-6 py-3.5 rounded-full tracking-wider text-xs md:text-sm no-underline hover:scale-105 transition-transform duration-200 border-none cursor-pointer shrink-0"
                style={{
                  backgroundColor: "#dafd55",
                  color: "#030405",
                  fontFamily: 'var(--font-stara), "Stara", sans-serif',
                }}
              >
                Talk to Idea Creative School
              </button>
            </div>

            <p
              className="m-0 pt-4 border-t text-xs md:text-sm leading-relaxed"
              style={{
                color: "#666666",
                borderColor: "rgba(17,17,17,0.1)",
                fontFamily: 'var(--font-stara), "Stara", sans-serif'
              }}
            >
              Seats are limited to maintain a practical, mentor-led learning environment.
            </p>
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
