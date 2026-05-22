"use client";

type ProgramNoticeCardProps = {
  paymentLink: string;
};

export default function ProgramNoticeCard({ paymentLink }: ProgramNoticeCardProps) {
  return (
    <a
      className="programNotice"
      id="enroll"
      href={paymentLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book the Idea School AI workshop now"
    >
      <span className="programNoticeEyebrow">
        <span>Early Bird Offer</span>
        <span>Offline workshop</span>
      </span>

      <span className="programNoticeTitle">
        Reserve your AI AD Masterclass seat
      </span>

      <span className="programNoticeContent">
        <span className="programNoticeBenefits">
          <span>
            <strong>6+ Hours</strong>
            <small>of practical AI learning</small>
          </span>
          <span>
            <strong>Real AI Tools</strong>
            <small>hands-on training inside the workshop</small>
          </span>
          <span>
            <strong>Create Live</strong>
            <small>AI ads, visuals &amp; content during the session</small>
          </span>
          <span>
            <strong>₹1500+ Credits</strong>
            <small>AI tool usage included with your seat</small>
          </span>
        </span>
      </span>

      <span className="programNoticeCheckout">
        <span className="programNoticePrice">
          <strong>
            ₹1999
            <span className="programNoticeTax">(Incl. Taxes)</span>
          </strong>
          <del>₹5000</del>
        </span>
        <span className="programNoticeMeta">
          <span>
            <small>Date</small>
            23rd May 2026
          </span>
          <span>
            <small>Location</small>
            Bangalore, HSR layout
          </span>
        </span>
        <span className="programNoticeAction">
          <span className="programNoticeBook">
            <span>Book Now</span>
          </span>
          <span className="programNoticeSeats">Only 2 seats left</span>
        </span>
      </span>
    </a>
  );
}
