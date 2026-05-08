"use client";

import type { PointerEvent } from "react";

type ProgramNoticeCardProps = {
  paymentLink: string;
};

export default function ProgramNoticeCard({ paymentLink }: ProgramNoticeCardProps) {
  const updateCursor = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--book-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--book-y", `${event.clientY - rect.top}px`);
  };

  return (
    <a
      className="programNotice"
      id="enroll"
      href={paymentLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book the Idea School AI workshop now"
      onPointerEnter={updateCursor}
      onPointerMove={updateCursor}
    >
      <span className="programNoticeVisual">
        <span className="programNoticeGlass">
          <span>6+ Hours of practical AI learning</span>
          <span>Hands-on training with real AI tools</span>
          <span>Create AI ads, visuals &amp; content live</span>
          <span>₹1500+ worth AI tool credits usage included</span>
        </span>
      </span>
      <span className="programNoticeFooter">
        <span className="programNoticePrice">
          <span className="programNoticeBadge">Early Bird Offer</span>
          <strong>
            ₹1999 <span className="programNoticeTax">(Incl. Taxes)</span> <del>₹5000</del>
          </strong>
        </span>
        <span className="programNoticeMeta">
          <span>16th May 2026</span>
          <span>Bangalore, HSR layout</span>
        </span>
      </span>
      <span className="programNoticeBook">Book Now</span>
    </a>
  );
}
