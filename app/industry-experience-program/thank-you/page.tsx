import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ShowreelSection, StudentTestimonialsSection } from "./ThankYouVideoTabs";
import "./page.css";

const whatsappCommunityUrl = "https://chat.whatsapp.com/KWbeQryPQBO3z2drK3gPdE";
const ideaSchoolUrl = "https://ideaschool.pro";
const agencyWebsiteUrl = "https://88gb.in";
const instagramUrl = "https://www.instagram.com/ideaschool.pro/";

export const metadata: Metadata = {
  title: "Application Received | 24-Week Industry Experience Program | Idea School",
  description:
    "Thank you for applying to the 24-Week Industry Experience Program. You are one step closer to becoming an industry-ready video editor.",
};

const nextSteps = [
  {
    step: "1",
    title: "Admissions Discovery Call",
    desc: "Our team will reach out via call/WhatsApp to understand your experience level, creative goals, and answer all questions.",
  },
  {
    step: "2",
    title: "Portfolio & Batch Allotment",
    desc: "We will review your profile, share the 24-week curriculum roadmap, and finalize your live project schedule.",
  },
  {
    step: "3",
    title: "Kickstart Real Brand Work",
    desc: "Gain hands-on experience on live brand briefs, mentor feedback cycles, and build an agency-grade portfolio.",
  },
];

export default function IndustryExperienceThankYouPage() {
  return (
    <main className="vslThankYouPage">
      <Script id="fb-track-lead" strategy="afterInteractive">
        {`fbq('track', 'Lead');`}
      </Script>

      {/* Header */}
      <header className="vslThankYouHeader">
        <Link className="vslThankYouLogo" href="/" aria-label="Idea School home">
          <Image
            src="/images/idea logo.webp"
            alt="Idea School"
            width={110}
            height={58}
            priority
          />
        </Link>
        <Link className="vslBackBtn" href="/industry-experience-program">
          <span>←</span> Back to Program
        </Link>
      </header>

      <div className="vslThankYouContainer">
        {/* Status Confirmation Hero */}
        <section className="vslStatusCard" aria-label="Application confirmation">
          <div className="vslStatusBadge">
            <span className="vslStatusBadgeDot" aria-hidden="true" />
            Application Received Successfully
          </div>

          <h1>
            You&apos;re One Step Closer to Becoming an<br />
            <span>Industry-Ready Video Editor.</span>
          </h1>

          <p className="vslStatusSubhead">
            We&apos;ve received your application successfully. Our admissions team will get in
            touch with you shortly to understand your goals, answer your questions, and guide you
            through the next steps.
          </p>

          <div className="vslNoticeBox">
            <div className="vslNoticeIcon" aria-hidden="true">📞</div>
            <div className="vslNoticeText">
              <strong>Please keep your phone handy</strong>
              <span>Our admissions team will call you to walk you through the program details and schedule.</span>
            </div>
          </div>

          <div className="vslQuickActions">
            <a
              className="vslWhatsappCta"
              href={whatsappCommunityUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/images/whatsapp.svg" alt="" width={20} height={20} />
              <span>Join WhatsApp Community for Updates</span>
            </a>
          </div>
        </section>

        {/* 1. See the Work Behind the Training */}
        <section className="vslSection" aria-labelledby="section-work-title">
          <div className="vslSectionHeader">
            <span className="vslSectionNumber">01 / Experience</span>
            <h2 id="section-work-title">See the Work Behind the Training</h2>
            <p>
              This course is built from real-world experience working on projects for brands.
              Explore some of the work we&apos;ve created for our brand clients.
            </p>
          </div>

          <ShowreelSection />
        </section>

        {/* 2. Hear Directly From Our Students */}
        <section className="vslSection" aria-labelledby="section-students-title">
          <div className="vslSectionHeader">
            <span className="vslSectionNumber">02 / Proof</span>
            <h2 id="section-students-title">Hear Directly From Our Students</h2>
            <p>See what students experienced during the program.</p>
          </div>

          <StudentTestimonialsSection />
        </section>

        {/* 3. What Happens Next? */}
        <section className="vslSection" aria-labelledby="section-next-title">
          <div className="vslSectionHeader">
            <span className="vslSectionNumber">03 / Roadmap</span>
            <h2 id="section-next-title">What Happens Next?</h2>
            <p>Here is how we guide you from application to live agency projects.</p>
          </div>

          <div className="vslStepsGrid">
            {nextSteps.map((s) => (
              <div key={s.step} className="vslStepCard">
                <div className="vslStepNumber">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Built By Industry Professionals */}
        <section className="vslSection" aria-labelledby="section-agency-title">
          <div className="vslAgencyCard">
            <span className="vslSectionNumber">04 / Backed By Agency</span>
            <h2 id="section-agency-title">Built By Industry Professionals</h2>
            <p>
              Ideas Creative School is backed by <strong>88GB</strong>, a creative agency actively
              working on real-world brand campaigns, commercials, and high-impact digital content.
            </p>

            <div className="vslAgencyLinksGrid">
              <a
                className="vslAgencyLinkBtn primary"
                href={ideaSchoolUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>🌐</span> Visit Idea School →
              </a>
              <a
                className="vslAgencyLinkBtn"
                href={agencyWebsiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>⚡</span> Visit 88GB Agency →
              </a>
              <a
                className="vslAgencyLinkBtn"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>📸</span> Follow on Instagram →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="vslThankYouFooter">
          <p>
            Results vary based on each student&apos;s effort, practice and participation. Idea School does
            not guarantee employment or income. This program is designed to provide practical learning,
            project experience and professional guidance.
          </p>
          <span>© {new Date().getFullYear()} Idea School. Backed by 88GB.</span>
          <nav className="vslThankYouFooterNav">
            <Link href="/">Home</Link>
            <Link href="/industry-experience-program">Program Details</Link>
            <a href="mailto:hello@ideaschool.in">Contact Support</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
