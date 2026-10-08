"use client";

import React, { useState } from "react";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./AdmissionEnrollment.module.css";

export default function AdmissionEnrollment() {
  // Modal State for "Enroll in Full Program"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Full-Stack Video Editing & AI Mastery (Full Program)",
    age: "",
    gender: "",
    location: "",
  });
  const [modalStatus, setModalStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [modalErrorMessage, setModalErrorMessage] = useState("");

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus("loading");
    setModalErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modalFormData),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit. Please try again.");
      }

      setModalStatus("success");
      setModalFormData({
        name: "",
        email: "",
        phone: "",
        program: "Full-Stack Video Editing & AI Mastery (Full Program)",
        age: "",
        gender: "",
        location: "",
      });
    } catch (error: unknown) {
      console.error("Modal enrollment error:", error);
      setModalStatus("error");
      setModalErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  const handleFullProgramApply = () => {
    setIsModalOpen(true);
    setModalStatus("idle");
    setModalErrorMessage("");
  };

  return (
    <section
      id="program"
      className={styles.section}
      data-header-theme="dark"
      data-theme="dark"
      aria-label="Fees and Enrollment"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlightWord}>INVEST IN A SKILLSET</span>
            <span> YOU CAN BUILD A CAREER AROUND.</span>
          </h2>
        </div>

        {/* Program Card Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 01 — Full Program */}
          <div className={`${styles.card} ${styles.fullProgramCard}`}>
            {/* Left Column: Details, Blurred Price & Action */}
            <div className={styles.cardLeftCol}>
              <div className={styles.cardHeader}>
                <div className={styles.metaRow}>
                  <span className={styles.cohortBadge}>COHORT ADMISSION</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaText}>6 MONTHS OFFLINE</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaText}>BANGALORE STUDIO</span>
                </div>

                <div className={styles.titleRow}>
                  <h3 className={styles.cardTitle}>Full Program</h3>
                  <span className={styles.tagPill}>LIMITED SEATS</span>
                </div>

                <p className={styles.cardDesc}>
                  Master commercial video editing, storytelling, motion design, and generative AI workflows inside a live creative studio.
                </p>

                <div className={styles.fullProgramPriceRow}>
                  <div className={styles.priceMain}>
                    <span className={styles.priceCurrency}>₹</span>
                    <span className={styles.priceFigureBlurred}>39,999</span>
                  </div>
                  <div className={styles.priceMeta}>
                    <span className={styles.priceLabel}>Full Program Fee</span>
                    <span className={styles.priceSublabel}>Installments & EMI available</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className={styles.fullProgramFooter}>
                <button
                  type="button"
                  onClick={handleFullProgramApply}
                  className={styles.fullProgramBtn}
                >
                  <span>Enroll in Full Program</span>
                  <span className={styles.btnArrow} aria-hidden="true">↗</span>
                </button>
                <p className={styles.guaranteeNote}>
                  ✦ Includes all live studio projects, mentor reviews, and production tool access.
                </p>
              </div>
            </div>

            {/* Right Column: Inclusions & Features */}
            <div className={styles.cardRightCol}>
              <div className={styles.inclusionsHeader}>
                <span className={styles.inclusionsTitle}>WHAT'S INCLUDED</span>
                <span className={styles.inclusionsCount}>4 CORE PILLARS</span>
              </div>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className={styles.featureContent}>
                    <span className={styles.featureText}>Guaranteed Placement</span>
                    <span className={styles.featureSubtext}>Direct agency introductions, 1-on-1 portfolio pitches & hiring support.</span>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className={styles.featureContent}>
                    <span className={styles.featureText}>No Hidden Cost</span>
                    <span className={styles.featureSubtext}>Complete workstation setup, software licenses & studio gear access.</span>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className={styles.featureContent}>
                    <span className={styles.featureText}>6 Months Offline Classes</span>
                    <span className={styles.featureSubtext}>Intensive in-person learning, daily feedback rounds & live briefs.</span>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div className={styles.featureContent}>
                    <span className={styles.featureText}>Bangalore Studio Campus</span>
                    <span className={styles.featureSubtext}>Work alongside active commercial editors, sound designers & directors.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Program Application Modal Popup */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalBox}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalBadge}>FULL PROGRAM ENROLLMENT</span>
              <h3 className={styles.modalTitle}>Join IDEA School</h3>
              <p className={styles.modalSubtitle}>
                Complete your details below to reserve your seat in the upcoming cohort.
              </p>
            </div>

            {modalStatus === "success" ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <h4 className={styles.successTitle}>Application Received</h4>
                <p className={styles.successDesc}>
                  Our admissions team will contact you shortly to confirm your enrollment in the Full Program.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setIsModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className={styles.enrollForm}>
                <div className={styles.formFields}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-name" className={styles.label}>Full Name</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={modalFormData.name}
                      onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                      className={styles.input}
                      disabled={modalStatus === "loading"}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-email" className={styles.label}>Email Address</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={modalFormData.email}
                      onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                      className={styles.input}
                      disabled={modalStatus === "loading"}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-phone" className={styles.label}>Phone Number</label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={modalFormData.phone}
                      onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                      className={styles.input}
                      disabled={modalStatus === "loading"}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="modal-age" className={styles.label}>Age (Optional)</label>
                      <input
                        id="modal-age"
                        type="number"
                        min="1"
                        max="120"
                        placeholder="Age"
                        value={modalFormData.age}
                        onChange={(e) => setModalFormData({ ...modalFormData, age: e.target.value })}
                        className={styles.input}
                        disabled={modalStatus === "loading"}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="modal-gender" className={styles.label}>Gender (Optional)</label>
                      <select
                        id="modal-gender"
                        value={modalFormData.gender}
                        onChange={(e) => setModalFormData({ ...modalFormData, gender: e.target.value })}
                        className={styles.input}
                        disabled={modalStatus === "loading"}
                        style={{ color: modalFormData.gender ? '#ffffff' : 'rgba(255, 255, 255, 0.3)' }}
                      >
                        <option value="" disabled hidden>Select Gender (Optional)</option>
                        <option value="Male" style={{ color: '#ffffff' }}>Male</option>
                        <option value="Female" style={{ color: '#ffffff' }}>Female</option>
                        <option value="Other" style={{ color: '#ffffff' }}>Other</option>
                        <option value="Prefer Not to say" style={{ color: '#ffffff' }}>Prefer Not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-location" className={styles.label}>Location (City / State) (Optional)</label>
                    <input
                      id="modal-location"
                      type="text"
                      placeholder="e.g. Bangalore, Karnataka"
                      value={modalFormData.location}
                      onChange={(e) => setModalFormData({ ...modalFormData, location: e.target.value })}
                      className={styles.input}
                      disabled={modalStatus === "loading"}
                    />
                  </div>

                  {modalErrorMessage && (
                    <p className={styles.errorMsg}>{modalErrorMessage}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={modalStatus === "loading"}
                  className={styles.submitBtn}
                >
                  <span>{modalStatus === "loading" ? "Submitting..." : "Submit Application"}</span>
                  <span className={styles.btnArrow} aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
