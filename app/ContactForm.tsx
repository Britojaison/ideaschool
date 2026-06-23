"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
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
      
      {status === "success" && (
        <p style={{ color: "#dafd55", marginTop: "1rem", fontWeight: "bold" }}>
          Application submitted successfully! We'll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#ff4444", marginTop: "1rem", fontWeight: "bold" }}>
          Something went wrong. Please try again.
        </p>
      )}
      
      <p style={{ marginTop: status === "idle" || status === "submitting" ? "1rem" : "0.5rem" }}>
        Limited seats available for the upcoming batch.
      </p>
    </form>
  );
}
