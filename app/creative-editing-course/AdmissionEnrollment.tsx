"use client";

import React, { useState } from "react";
import ScrollHighlight from "@/components/ui/ScrollHighlight";
import styles from "./AdmissionEnrollment.module.css";

export default function AdmissionEnrollment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "24-Week Creative Editing (EMI)",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", program: "24-Week Creative Editing (EMI)" });
    } catch (error: unknown) {
      console.error("Enrollment error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  const handleFullProgramApply = () => {
    window.dispatchEvent(new Event("open-home-form"));
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
          <div className={styles.tag}>FEES &amp; ENROLLMENT</div>
          <h2 className={styles.title}>
            <span className={styles.highlightWord}>INVEST IN A SKILLSET</span>
            <span> YOU CAN BUILD A CAREER AROUND.</span>
          </h2>
        </div>

        {/* 2 Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 01 — Book Your Seat (EMI) */}
          <div className={`${styles.card} ${styles.emiCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Book Your Seat (EMI)</h3>
              
              <div className={styles.emiHighlightRow}>
                <div className={styles.emiPill}>
                  <span className={styles.emiCount}>3 Easy EMI</span>
                </div>
                <div className={styles.emiAmountWrap}>
                  <span className={styles.currencySymbol}>₹</span>
                  <span className={styles.emiAmount}>15,000</span>
                  <span className={styles.emiPeriod}>/ each</span>
                </div>
              </div>
            </div>

            {/* Embedded Direct Application Form */}
            {status === "success" ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <h4 className={styles.successTitle}>Application Received</h4>
                <p className={styles.successDesc}>
                  Our admissions team will reach out to you shortly to guide you through the next steps.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setStatus("idle")}
                >
                  Apply Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.enrollForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="emi-name" className={styles.label}>Name</label>
                  <input
                    id="emi-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="emi-email" className={styles.label}>Email</label>
                  <input
                    id="emi-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="emi-phone" className={styles.label}>Phone Number</label>
                  <input
                    id="emi-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.input}
                    disabled={status === "loading"}
                  />
                </div>

                {errorMessage && (
                  <p className={styles.errorMsg}>{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={styles.submitBtn}
                >
                  <span>Apply Now</span>
                  <span className={styles.btnArrow} aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </div>

          {/* Card 02 — Full Program */}
          <div className={`${styles.card} ${styles.fullProgramCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeRow}>
                <span className={styles.tagPill}>LIMITED SEATS</span>
              </div>
              <h3 className={styles.cardTitle}>Full Program</h3>
              
              <div className={styles.pricingWrap}>
                <div className={styles.priceMain}>
                  <span className={styles.priceCurrency}>₹</span>
                  <span className={styles.priceFigure}>39,999</span>
                </div>
                <span className={styles.priceLabel}>Full Program Fee</span>
              </div>
            </div>

            {/* Feature Points Checkmarks */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.featureText}>Guaranteed Placement</span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.featureText}>No Hidden Cost</span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.featureText}>6 Months Offline Classes</span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className={styles.featureText}>Bangalore Studio Campus</span>
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
        </div>
      </div>
    </section>
  );
}
