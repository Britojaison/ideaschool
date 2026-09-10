"use client";

import Image from "next/image";

type ProgramNoticeCardProps = {
  paymentLink: string;
};

const highlights = [
  {
    title: "Full Day Offline Pass",
    subtitle: "6+ hours of hands-on video editing training at 88GB HQ",
  },
  {
    title: "Agency Workflows & AI",
    subtitle: "Hook engineering, retention pacing & generative AI toolkits",
  },
  {
    title: "1-on-1 Mentor Guidance",
    subtitle: "Direct project feedback & career roadmap from agency leads",
  },
];

const features = [
  "6+ Hours Live Training",
  "Industry Agency Workflows",
  "Live Portfolio Edit",
  "AI Video Tools Stack",
  "1-on-1 Mentor Review",
  "Certificate of Completion",
];

export default function ProgramNoticeCard({ paymentLink }: ProgramNoticeCardProps) {
  return (
    <div id="enroll" className="sprintOfferSection">
      {/* Outer Card Container with Web Page Color Gradient */}
      <div className="sprintOfferCard">
        {/* Left Column: Information & Workshop Highlights */}
        <div className="sprintOfferLeft">
          {/* Eyebrow Pills */}
          <div className="sprintOfferBadgeRow">
            <span className="sprintOfferBadgePrimary">
              Early Bird Offer
            </span>
            <span className="sprintOfferBadgeSecondary">
              Offline Workshop
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="sprintOfferHeading">
              Reserve Your{" "}
              <span className="sprintOfferHeadingAccent">
                Sprint Seat
              </span>
            </h2>
            <p className="sprintOfferSubtitle">
              Agency-level hands-on training with industry mentors. Master retention editing,
              AI workflows, and viral pacing in 1 intensive day.
            </p>
          </div>

          {/* Workshop Highlight Cards (All Included) */}
          <div className="sprintOfferHighlights">
            {highlights.map((item) => (
              <div key={item.title} className="sprintOfferHighlightItem">
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span className="sprintOfferHighlightTitle">
                    {item.title}
                  </span>
                  <span className="sprintOfferHighlightText">
                    {item.subtitle}
                  </span>
                </div>

                {/* Checkmark Circle */}
                <div className="sprintOfferHighlightIcon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Workshop Pass Details Card */}
        <div className="sprintOfferRight">
          {/* Top Banner Image */}
          <div className="sprintOfferBanner">
            <Image
              src="/images/hero.webp"
              alt="Video Editing Sprint Workshop"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Pass Name with Icon */}
          <div className="sprintOfferPassTitle">
            <span style={{ fontSize: "15px", color: "#dafd55" }}>⚡</span>
            <span>Full Day Workshop Pass</span>
          </div>

          {/* Pricing Row */}
          <div className="sprintOfferPriceRow">
            <span className="sprintOfferPriceMain">
              ₹499
            </span>
            <span className="sprintOfferPricePeriod">
              /one-time
            </span>
            <del className="sprintOfferPriceDel">
              ₹1,999
            </del>
            <span className="sprintOfferPriceTax">
              Incl. Taxes
            </span>
          </div>

          {/* Primary CTA Button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your video editing workshop seat with Razorpay"
              className="sprintOfferCtaButton"
            >
              Buy Now
            </a>
            <span className="sprintOfferCtaCaption">
              Only 2 seats left • Limited to 25 seats only
            </span>
          </div>

          {/* Divider */}
          <div className="sprintOfferDivider" />

          {/* Features Checklist */}
          <div>
            <span className="sprintOfferFeaturesLabel">
              Features:
            </span>
            <div className="sprintOfferFeaturesGrid">
              {features.map((feature) => (
                <div key={feature} className="sprintOfferFeatureItem">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dafd55"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout Notice */}
          <div className="sprintOfferNotice">
            <span style={{ fontSize: "14px", flexShrink: 0, color: "#dafd55" }}>ⓘ</span>
            <span>Batch Date: September 19 • 88GB HQ, HSR Layout, Bengaluru</span>
          </div>
        </div>
      </div>
    </div>
  );
}
