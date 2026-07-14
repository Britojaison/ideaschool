import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const whatsappCommunityUrl = "https://chat.whatsapp.com/Iz3mpN9HQ6KGDEUbedsUBW";

export const metadata: Metadata = {
  title: "Registration Successful | Video Editing Workshop",
  description:
    "Thank you for registering for the Idea School Video Editing Workshop.",
};

export default function WorkshopThankYouPage() {
  return (
    <main className="thankYouPage workshopThankYouPage">
      <section className="thankYouHero" aria-label="Workshop registration confirmation">
        <div className="thankYouHeroMedia" />
        <div className="thankYouHeroShade" />

        <header className="siteHeader">
          <Link className="brand" href="/" aria-label="Idea School home">
            <Image
              src="/images/idea logo.webp"
              alt="Idea"
              width={104}
              height={54}
              priority
              className="brandLogo"
            />
          </Link>

          <Link className="headerCta" href="/master-video-editing">
            <span className="headerCtaText">Back to workshop</span>
          </Link>
        </header>

        <div className="thankYouInner">
          <div className="thankYouCard">
            <span className="thankYouPill">Registration successful</span>
            <h1>
              Registration
              <span> Successful!</span>
            </h1>
            <p>
              Thank you for registering for the Video Editing Workshop. Get ready
              to learn industry-demanded video editing skills, professional
              workflows, and real-world techniques.
            </p>

            <div className="thankYouMeta" aria-label="What happens next">
              <span>
                <strong>Community access</strong>
                <small>Join the WhatsApp community for workshop updates and next steps.</small>
              </span>
              <span>
                <strong>See you inside</strong>
                <small>We are excited to meet you inside the workshop.</small>
              </span>
            </div>

            <div className="thankYouActions">
              <a
                className="primaryCta thankYouPrimaryCta"
                href={whatsappCommunityUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="primaryCtaText">Join WhatsApp Community</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
