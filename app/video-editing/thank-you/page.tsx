import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroDotField from "@/components/ui/HeroDotField";
import ProgramMenu from "@/components/global/ProgramMenu";
import MetaPixel from "@/components/shared/MetaPixel";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Enrollment Confirmed | Idea School",
  description: "Thank you for enrolling in the Idea School workshop.",
};

export default function ApplyThankYouPage() {
  return (
    <main className="thankYouPage">
      <MetaPixel />
      <section className="thankYouHero" aria-label="Enrollment confirmation">
        <div className="thankYouHeroMedia">
          <HeroDotField />
        </div>
        <div className="thankYouHeroShade" />

        <header className="siteHeader">
          <div className="brand" aria-label="Idea School" style={{ cursor: "default" }}>
            <Image
              src="/images/idea logo.webp"
              alt="Idea"
              width={104}
              height={54}
              priority
              className="brandLogo"
            />
          </div>
          <nav className="desktopNav" aria-label="Program navigation">
            <ProgramMenu />
          </nav>

          <Link className="headerCta" href="/video-editing">
            <span className="headerCtaText">Back to program</span>
          </Link>
        </header>

        <div className="thankYouInner">
          <div className="thankYouCard">
            <span className="thankYouPill">Enrollment confirmed</span>
            <h1>
              Thank you for your
              <span> transaction.</span>
            </h1>
            <p>
              Your seat request has been received successfully. We&apos;ll share the
              workshop details and next steps with you shortly.
            </p>

            <div className="thankYouMeta" aria-label="What happens next">
              <span>
                <strong>Workshop details</strong>
                <small>Date, venue, and reporting details will be shared directly.</small>
              </span>
              <span>
                <strong>Need help?</strong>
                <small>Reach us anytime if you want faster assistance.</small>
              </span>
            </div>

            <div className="thankYouActions">
              <a
                className="primaryCta thankYouPrimaryCta"
                href="https://chat.whatsapp.com/CtF02jA8GAvFOc052tRZlb"
                target="_blank"
                rel="noreferrer"
              >
                <span className="primaryCtaText">Join Whatsapp Community</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="newSite"><Footer /></div>
    </main>
  );
}
