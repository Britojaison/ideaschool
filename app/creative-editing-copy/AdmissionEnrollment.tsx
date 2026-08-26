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
      className="flex flex-col lg:flex-row min-h-screen w-full"
      style={{ backgroundColor: "#FBFAF2" }}
      data-header-theme="light"
    >
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <Image
          src="/images/full.jpg"
          alt="Idea School Campus Lab"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-[640px] flex flex-col justify-center">
          <div className="mb-10">
            <span
              className="inline-block border rounded-full px-4 py-1.5 text-xs uppercase tracking-wider mb-4"
              style={{
                borderColor: "rgba(17,17,17,0.14)",
                color: "#666666",
                fontFamily: 'var(--font-stara), "Stara", sans-serif'
              }}
            >
              Admission & Enrollment
            </span>
            <h2
              className="text-3xl md:text-5xl uppercase m-0"
              style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Fees And Enrollment
            </h2>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 mb-10 border"
            style={{
              backgroundColor: "#F1F0E8",
              borderColor: "rgba(17,17,17,0.14)"
            }}
          >
            <div className="flex justify-between items-center flex-wrap gap-5 mb-5">
              <div>
                <span
                  className="block text-sm uppercase tracking-wider mb-2"
                  style={{ color: "#666666", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  Full Program Fee
                </span>
              </div>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-home-form"))}
                className="font-black uppercase px-8 py-4 rounded-full tracking-wider text-sm no-underline hover:scale-105 transition-transform duration-200 border-none cursor-pointer"
                style={{
                  backgroundColor: "#dafd55",
                  color: "#030405",
                  fontFamily: 'var(--font-stara), "Stara", sans-serif',
                }}
              >
                Talk to Idea School
              </button>
            </div>
            <p
              className="m-0 text-sm leading-relaxed"
              style={{ color: "#666666", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
            >
              Seats are limited so every learner gets attention, feedback, and room to practice.
            </p>
          </div>

          <dl className="flex flex-col gap-6 m-0">
            {enrollmentDetails.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-2 sm:gap-5 ${index !== enrollmentDetails.length - 1 ? "pb-6 border-b" : ""}`}
                style={{ borderColor: "rgba(17,17,17,0.14)" }}
              >
                <dt
                  className="font-semibold text-[1.05rem]"
                  style={{ color: "#111111", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
                >
                  {item.label}
                </dt>
                <dd
                  className="m-0 leading-relaxed text-[0.95rem]"
                  style={{ color: "#666666", fontFamily: 'var(--font-stara), "Stara", sans-serif' }}
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
