import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import HeroDotField from "../../HeroDotField";

const whatsappUrl = "https://chat.whatsapp.com/KPOJNXzGGmXCdUh2BdF4En";

export const metadata: Metadata = {
  title: "Application Received | Idea School",
  description:
    "Thank you for applying to the Idea School Creative Editing & AI Pro Course.",
};

export default function CreativeEditingThankYouPage() {
  return (
    <main className="thankYouPage longCourseThankYouPage">
      <Script id="fb-track-lead" strategy="afterInteractive">
        {`if (typeof fbq === 'function') { fbq('track', 'Lead'); }`}
      </Script>
      <section className="thankYouHero" aria-label="Application confirmation">
        <div className="thankYouHeroMedia"><HeroDotField /></div>
        <div className="thankYouHeroShade" />

        <header className="siteHeader">
          <Link className="brand" href="/" aria-label="Idea School home">
            <Image
              src="/images/idea logo.webp"
              alt="Idea School"
              width={104}
              height={54}
              priority
              className="brandLogo"
            />
          </Link>
          <Link className="headerCta" href="/creative-editing-course">
            <span className="headerCtaText">Back to course</span>
          </Link>
        </header>

        <div className="thankYouInner">
          <div className="thankYouCard">
            <div className="longCourseThankYouIcon" aria-hidden="true">✓</div>
            <span className="thankYouPill">Application received</span>
            <h1>
              Thank You for
              <span> Applying!</span>
            </h1>
            <p>
              Your application has been received successfully. Our admissions team will
              contact you shortly to guide you through the course and answer your questions.
            </p>

            <div className="longCoursePhoneNotice">
              <span aria-hidden="true">☎</span>
              <div>
                <strong>Please keep your phone available.</strong>
                <small>Our admissions team will contact you shortly.</small>
              </div>
            </div>

            <div className="thankYouActions">
              <a
                className="primaryCta thankYouPrimaryCta"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt=""
                  width={21}
                  height={21}
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="primaryCtaText">Join Our WhatsApp Community</span>
              </a>
            </div>
            <small className="longCourseThankYouHelp">
              Tap the button to request access and receive important course updates.
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
