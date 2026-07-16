"use client";

import { useState, useEffect } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbymEzItkhHgnVO8JTZjQrjzX9QD-BcEFL39U5U5zt8rLFpllp4SvbKYBGUuYZAdrltxDA/exec";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("success");
      setShowThankYou(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="applyFormWrapper" style={{ position: "relative", minHeight: "450px", display: "flex", flexDirection: "column", marginTop: "5rem" }}>
      {showThankYou ? (
        <div style={{ 
          margin: "4rem auto auto auto",
          padding: "4rem 2rem", 
          textAlign: "center", 
          animation: "slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          width: "100%",
        }}>
          <style>{`
            @keyframes slideUpFade {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <h3 style={{ color: "#ffffff", fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem", letterSpacing: "1px" }}>
            Thank you!
          </h3>
          <p style={{ color: "#dafd55", fontSize: "1.2rem", fontWeight: "600" }}>
            You will be contacted shortly.
          </p>
        </div>
      ) : (
        <form className="applyForm" id="apply" onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              <span>First Name</span>
              <input type="text" name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" name="lastName" autoComplete="family-name" required />
            </label>
          </div>
          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            <span>Phone</span>
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label>
            <span>Message (optional)</span>
            <textarea name="message" rows={4} />
          </label>
          <button type="submit" disabled={status === "submitting"} style={{ opacity: status === "submitting" ? 0.7 : 1 }}>
            {status === "submitting" ? "Submitting..." : "Apply now"}
          </button>
          
          {status === "error" && (
            <p style={{ color: "#ff4444", marginTop: "1rem", fontWeight: "bold" }}>
              Something went wrong. Please try again.
            </p>
          )}
          
          <p style={{ marginTop: status === "idle" || status === "submitting" ? "1rem" : "0.5rem" }}>
            Limited seats available for the upcoming batch.
          </p>
        </form>
      )}
    </div>
  );
}
