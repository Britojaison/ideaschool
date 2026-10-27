"use client";

import React, { useState } from "react";
import styles from "./BrochureModal.module.css";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
  pdfUrl?: string;
}

export default function BrochureModal({
  isOpen,
  onClose,
  programName = "Full Stack Video Editing Program",
  pdfUrl = "/pdf/Program%20Brochure.pdf",
}: BrochureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "IDEA_School_Program_Brochure.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Program name formatted as requested: with "(brochure)"
    const payload = {
      ...formData,
      program: `${programName} (brochure)`,
      city: formData.location,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      // Trigger brochure download immediately upon successful submission
      triggerDownload();
    } catch (error: unknown) {
      console.error("Brochure form error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again later."
      );
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after transition
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 300);
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={styles.modalBox}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-modal-title"
      >
        <button
          className={styles.modalCloseBtn}
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Brochure Downloading!</h3>
            <p className={styles.successDesc}>
              Thank you! Your brochure has started downloading. If it didn&apos;t start automatically,
              click the button below.
            </p>
            <div className={styles.successActionRow}>
              <button
                type="button"
                className={styles.downloadAgainBtn}
                onClick={triggerDownload}
              >
                Download Again ↓
              </button>
              <button
                type="button"
                className={styles.doneBtn}
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <span className={styles.modalBadge}>Curriculum & Blueprint</span>
              <h3 id="brochure-modal-title" className={styles.modalTitle}>
                Download Brochure
              </h3>
              <p className={styles.modalSubtitle}>
                Enter your details to instantly receive the complete syllabus, project frameworks, and agency portfolio roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formFields}>
              <div className={styles.inputGroup}>
                <label htmlFor="brochure-name" className={styles.label}>
                  Full Name *
                </label>
                <input
                  id="brochure-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  disabled={status === "loading"}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="brochure-email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  id="brochure-email"
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
                <label htmlFor="brochure-phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  id="brochure-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                  disabled={status === "loading"}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="brochure-age" className={styles.label}>
                    Age (Optional)
                  </label>
                  <input
                    id="brochure-age"
                    type="number"
                    placeholder="Age"
                    min="15"
                    max="80"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className={styles.input}
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="brochure-gender" className={styles.label}>
                    Gender (Optional)
                  </label>
                  <select
                    id="brochure-gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className={styles.input}
                    disabled={status === "loading"}
                    style={{
                      color: formData.gender ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <option value="" disabled hidden>
                      Select Gender
                    </option>
                    <option value="Male" style={{ color: "#ffffff", backgroundColor: "#141418" }}>
                      Male
                    </option>
                    <option value="Female" style={{ color: "#ffffff", backgroundColor: "#141418" }}>
                      Female
                    </option>
                    <option value="Other" style={{ color: "#ffffff", backgroundColor: "#141418" }}>
                      Other
                    </option>
                    <option
                      value="Prefer Not to say"
                      style={{ color: "#ffffff", backgroundColor: "#141418" }}
                    >
                      Prefer Not to say
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="brochure-location" className={styles.label}>
                  City / Location (Optional)
                </label>
                <input
                  id="brochure-location"
                  type="text"
                  placeholder="e.g. Bangalore, Karnataka"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={styles.input}
                  disabled={status === "loading"}
                />
              </div>

              {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className={styles.submitBtn}
              >
                <span>{status === "loading" ? "Submitting..." : "Download Brochure"}</span>
                <span className={styles.btnArrow} aria-hidden="true">
                  ↓
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
