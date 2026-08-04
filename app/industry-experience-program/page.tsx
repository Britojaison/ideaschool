import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ApplyButton from "../ApplyButton";
import "./page.css";

export const metadata: Metadata = {
  title: "24-Week Industry Experience Program | Idea School",
  description:
    "Learn professional video editing through live brand briefs, real client problems, mentor reviews, revision cycles, and portfolio-ready work.",
};

const proofPoints = [
  { icon: "🎬", text: "Live brand briefs" },
  { icon: "👨‍🏫", text: "Weekly mentor reviews" },
  { icon: "🏆", text: "Agency experience certificate" },
];

const experiencePoints = [
  "Real client problems",
  "Multiple revision cycles",
  "Agency-level portfolio",
  "Professional presentation skills",
];

export default function IndustryExperienceProgramPage() {
  return (
    <main className="vslPage">
      <section className="vslFunnel">
        <Link className="vslLogo" href="/" aria-label="Idea School home">
          <Image src="/images/idea logo.webp" alt="Idea School" width={110} height={58} priority />
        </Link>

        <p className="vslAttention">
          Attention: Aspiring Video Editors, Creators &amp; Creative Professionals...
        </p>

        <h1>
          Don&apos;t Just Learn <span>Video Editing.</span><br />
          Get <span>24 Weeks of Real<br className="vslDesktopBreak" /> Industry Experience.</span>
        </h1>

        <p className="vslSubhead">
          Learn professional video editing by working on live brand briefs, real client problems
          and multiple revision cycles — with weekly guidance from industry mentors.
        </p>

        <div className="vslVideoWrap" id="watch">
          <video
            className="vslVideo"
            controls
            preload="metadata"
            playsInline
            poster="/images/Hero 6.webp"
            aria-label="Industry Experience Program video"
          >
            <source src="/images/edit_1.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>

        <div className="vslJourney" aria-label="Program journey">
          <span>Learn</span><i>→</i><span>Work on Live Projects</span><i>→</i>
          <span>Build Your Portfolio</span><i>→</i><span>Become Industry-Ready</span>
        </div>

        <p className="vslPrompt">Apply below to start your 24-week industry experience.</p>

        <ApplyButton className="vslCta" programName="Industry Experience Program">
          Apply for the program <span>→</span>
        </ApplyButton>

        <div className="vslProof">
          {proofPoints.map((item) => (
            <div key={item.text}><span aria-hidden="true">{item.icon}</span><strong>{item.text}</strong></div>
          ))}
        </div>

        <div className="vslExperienceLine">
          <strong>24-Week Industry Experience Program</strong>
          <div>
            {experiencePoints.map((point) => <span key={point}>✓ {point}</span>)}
          </div>
        </div>

        <section className="vslClosing">
          <h2>Don&apos;t Graduate With Just a Certificate.</h2>
          <p>Graduate With Experience, Projects &amp; a Portfolio.</p>
          <ApplyButton className="vslCta" programName="Industry Experience Program">
            Apply now <span>→</span>
          </ApplyButton>
        </section>
      </section>

      <footer className="vslFooter">
        <p>
          Results vary based on each student&apos;s effort, practice and participation. Idea School does
          not guarantee employment or income. This program is designed to provide practical learning,
          project experience and professional guidance.
        </p>
        <Image src="/images/idea logo.webp" alt="Idea School" width={76} height={42} />
        <span>© {new Date().getFullYear()} Idea School</span>
        <nav><Link href="/">Home</Link><a href="mailto:hello@ideaschool.in">Contact</a></nav>
      </footer>
    </main>
  );
}
