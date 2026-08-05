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
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">6+ Hours</strong>
            <span className="programNoticeBenefitText">of practical AI learning</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">Real AI Tools</strong>
            <span className="programNoticeBenefitText">hands-on training inside the workshop</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">Create Live</strong>
            <span className="programNoticeBenefitText">AI ads, visuals &amp; content during the session</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">₹1500+ Credits</strong>
            <span className="programNoticeBenefitText">AI tool usage included with your seat</span>
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
            August 1, 2026
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
        </span>
      </span>
    </a>
  );
}
