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
      aria-label="Reserve your video editing sprint seat"
    >
      <span className="programNoticeEyebrow">
        <span>Early Bird Offer</span>
        <span>Offline workshop</span>
      </span>

      <span className="programNoticeTitle">
        Reserve your video editing sprint seat
      </span>

      <span className="programNoticeContent">
        <span className="programNoticeBenefits">
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">6+ Hours</strong>
            <span className="programNoticeBenefitText">of hands-on video editing training</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">Industry Workflows</strong>
            <span className="programNoticeBenefitText">learn directly from a global creative agency</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">Build Live</strong>
            <span className="programNoticeBenefitText">Edit your professional video during the workshop</span>
          </span>
          <span className="programNoticeBenefit">
            <strong className="programNoticeBenefitTitle">AI Workflows</strong>
            <span className="programNoticeBenefitText">Learn how AI can speed up your editing process</span>
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
