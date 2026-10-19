"use client";

import React, { useState } from "react";
import styles from "./TechSchool.module.css";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Laptop } from "lucide-react";

export default function FinalCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleOpenGlobalModal = () => {
    window.dispatchEvent(new CustomEvent("open-home-form"));
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus("error");
      setMessage("Please fill in your name, email, and phone number.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          program: "Tech School: 1-Day AI Engineering Build Workshop",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to reserve your seat. Please try again or contact us directly.");
      }

      setStatus("success");
      setMessage("Seat reservation request received! Check your email for instant setup guides and cohort details.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.finalCtaSection} id="reservation-form" data-header-theme="dark">
      <div className={styles.ambientGlowTop} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.finalCtaBox}>
          
          <div className={styles.heroBadge} style={{ marginBottom: "20px" }}>
            <span className={styles.liveIndicatorPulse} aria-hidden="true" />
            <span>ENROLLMENT OPEN // LIMITED COHORT</span>
          </div>

          <h2 className={styles.finalCtaTitle}>
            Ready to Build <span className={styles.sectionTitleGradient}>Real Software?</span>
          </h2>

          <p className={styles.finalCtaBody}>
            The industry doesn&apos;t need more people who can chat with a bot. It needs builders who know how to command AI to architect robust systems. Join us for this 1-day sprint, build your first live SaaS tool, and upgrade your developer career.
          </p>

          <button
            type="button"
            onClick={handleOpenGlobalModal}
            className={styles.primaryCtaBtn}
            id="final-claim-btn"
            aria-label="Claim Your Seat in the Workshop"
          >
            <span>Claim Your Seat in the Workshop</span>
            <ArrowRight size={18} />
          </button>

          <div className={styles.finalCtaSubtext}>
            <Sparkles size={16} color="var(--accent-gold)" />
            <span>Instant access to setup guides and pre-workshop materials upon registration.</span>
          </div>

          {/* Direct Quick Registration Panel */}
          <div className={styles.registrationQuickCard}>
            <div className={styles.quickCardHeader}>
              <div>
                <h3 className={styles.quickCardTitle}>Fast-Track Cohort Application</h3>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                  Reserve your slot in seconds. 1-on-1 sprint desk guaranteed.
                </p>
              </div>
              <div className={styles.cohortStatusBadge}>
                ⚡ 4 SEATS REMAINING
              </div>
            </div>

            {status === "success" ? (
              <div style={{
                background: "rgba(205, 12, 65, 0.15)",
                border: "1px solid rgba(205, 12, 65, 0.4)",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#ffffff"
              }}>
                <CheckCircle2 size={24} color="#f2bf49" />
                <div>
                  <strong style={{ display: "block", color: "var(--accent-gold)", marginBottom: 4 }}>Reservation Requested!</strong>
                  <span>{message}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit}>
                <div className={styles.quickFormRow}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className={styles.quickInput}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work / Dev Email"
                    className={styles.quickInput}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp"
                    className={styles.quickInput}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={styles.quickSubmitBtn}
                  >
                    {status === "loading" ? "Securing..." : "Claim Seat ↗"}
                  </button>
                </div>

                {status === "error" && (
                  <p style={{ color: "#ff4d82", fontSize: "13px", marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <ShieldAlert size={14} /> {message}
                  </p>
                )}
              </form>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px", fontSize: "12px", color: "var(--text-dim)", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Laptop size={14} color="var(--accent-gold)" /> BYOL: Bring Your Own Laptop
              </span>
              <span>•</span>
              <span>All stack repos, agentic configs & API credits included</span>
              <span>•</span>
              <span>Certificate of AI System Architecture upon completion</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
