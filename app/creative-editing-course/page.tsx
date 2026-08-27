import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import DecryptedText from "../DecryptedText";
import DetailsSectionMotion from "./DetailsSectionMotion";
import HeroDotField from "../HeroDotField";
import ProgramMenu from "../ProgramMenu";
import ScrollTextReveal from "../ScrollTextReveal";
import TiltedCard from "../TiltedCard";
import OutcomeCards from "./OutcomeCards";
import PortfolioSectionMotion from "./PortfolioSectionMotion";
import RogMonitorHero3D from "./RogMonitorHero3D";
import ScheduleSection from "./ScheduleSection";
import ContactForm from "../ContactForm";
import MobileMenu from "../MobileMenu";
import ClientBrandsGrid from "./ClientBrandsGrid";
import CourseGallery from "./CourseGallery";
import LiquidQuickActions from "../LiquidQuickActions";
const LazyCurriculumDotField = dynamic(() => import("./LazyCurriculumDotField"), {
  loading: () => null,
});

const StandOutSection = dynamic(() => import("./StandOutSection"), {
  loading: () => <section className="longCourseStandOut longCourseStandOutLoading" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Full Stack Video Editing and Creative AI Mastery | Idea School",
  description:
    "A 24-week video editing, motion graphics, AI content creation, portfolio, and Industry Experience Program from Idea School.",
};

const course = {
  eyebrow: "24-week career program",
  title: "Full Stack Video\u00a0Editing & Creative AI Mastery",
  accent: "Build editor-ready craft, AI speed,\nand a real portfolio.",
  description:
    "A studio-led program for students, creators, designers, and career switchers who want to learn Premiere Pro, Photoshop, After Effects, sound design, AI tools, portfolio creation, and brand-ready production workflows.",
  heroImage: "/images/Hero 6.webp",
  ctaLabel: "Apply for the next cohort",
};

const heroStats = [
  { label: "Duration", value: "24 Weeks" },
  { label: "Core Training", value: "12 Weeks" },
  { label: "Industry Experience Program", value: "12 Weeks" },
  { label: "Outcome", value: "Portfolio + Placement Eligibility" },
];

const outcomes = [
  "High-quality reels and promo cuts",
  "Motion graphics and integrated animation",
  "Visual effects, roto, tracking, and green matte keying",
  "Thumbnail, cover image, and portfolio design",
  "AI-assisted editing, voice, clipping, image, and video generation",
  "Industry Experience Program with live projects and brand workflows",
];

const curriculumBrochureHighlights = [
  {
    label: "Core training",
    value: "Premiere Pro, Photoshop, After Effects, sound design, and AI workflows",
  },
  {
    label: "Live practice",
    value: "Offline sessions, mentor reviews, assignments, and production tasks",
  },
  {
    label: "Industry experience",
    value: "Live projects, revision cycles, brand briefs, and portfolio outcomes",
  },
];

const weeklySchedule = [
  {
    day: "Friday",
    activity: "Pre-recorded foundation",
    objective: "Create a high-quality, well-paced reel and promo.",
  },
  {
    day: "Saturday",
    activity: "Offline session",
    objective: "Create a thumbnail and cover image with mentor guidance.",
  },
  {
    day: "Sunday",
    activity: "Query session",
    objective: "Clear blockers, review doubts, and prepare the production plan.",
  },
  {
    day: "Monday",
    activity: "Task day",
    objective: "Complete weekly to-dos and gather required assets.",
  },
  {
    day: "Tuesday",
    activity: "Submission of task",
    objective: "Submit website, campaign assets, or assigned creative output.",
  },
  {
    day: "Wednesday",
    activity: "1:1 feedback session",
    objective: "Review cohort brochure, edits, and portfolio progress.",
  },
  {
    day: "Thursday",
    activity: "Completion of task",
    objective: "Ship website, campaign assets, or assigned creative output.",
  },
];

const mentors = [
  {
    name: "Dhananjayan . S",
    role: "CEO, 88GB",
    image: "/images/mentor_ARJUN.webp",
    accent: "green",
  },
  {
    name: "Elamparithi",
    role: "Head of Design, 88GB",
    image: "/images/mentor_PARIDHI.webp",
    accent: "mint",
  },
  {
    name: "Ajay Karthik",
    role: "Video Editor, 88GB",
    image: "/images/mentor_AJAY.webp",
    accent: "lime",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Senior Creative Strategist, 88GB",
    image: "/images/mentor_CHANDRU.webp",
    accent: "violet",
  },
];

const industryExperiencePoints = [
  "12 Weeks of Industry Experience Program",
  "Work on live brand briefs",
  "Solve real client problems",
  "Weekly mentor reviews",
  "Multiple revision cycles",
  "Build an agency-level portfolio",
  "Present work like a professional editor & visual designer",
  "Experience certificate from the agency (3 Months)",
];

const tools = [
  { name: "Premiere Pro", logo: "/images/adobepremierepro.svg" },
  { name: "Photoshop", logo: "/images/ps-logo-transparent.png" },
  { name: "After Effects", logo: "/images/Ae_logo.webp" },
  { name: "Canva", logo: "/images/Canva_icon.png" },
  { name: "Captions.ai", logo: "/images/captionsai.avif" },
  { name: "OpusClip", logo: "/images/opus_clip.png" },
  { name: "ElevenLabs", logo: "/images/elevenlabs-official-logo.svg" },
  { name: "Framer", logo: "/images/framer.webp" },
  { name: "Higgsfield", logo: "/images/higgsfield_ai.webp" },
  { name: "Seedance 2.0", logo: "/images/seedance-2.png" },
  { name: "InVideo", logo: "/images/InVideo.webp" },
  { name: "HeyGen", logo: "/images/heygen.webp" },
];

const programHighlights = [
  "12 Week Intensive Program",
  "Creative Editing & Storytelling Training",
  "AI-Powered Editing Workflows",
  "Motion Graphics & Content Systems",
  "Reels, Podcast & Commercial Editing",
  "Practical Assignments & Real-World Projects",
  "Weekly Mentorship & Feedback Sessions",
  "Portfolio Development Support",
  "Community Access & Networking",
  "12 Week Industry Exposure Opportunities",
  "Certificate of Completion",
];

const enrollmentDetails = [
  { label: "Mode", value: "Offline + Online Hybrid Learning Experience" },
  {
    label: "Ideal For",
    value:
      "Creators, Editors, Designers, Content Professionals, Students, Freelancers & Aspiring Digital Creators",
  },
  { label: "Cohort Intake", value: "Focused mentorship with limited seats per batch." },
];




const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "It is built for students, creators, editors, designers, photographers, videographers, and career switchers who want a practical path into editing and AI-assisted content production.",
    open: true,
  },
  {
    question: "Is this beginner friendly?",
    answer:
      "Yes. The first weeks cover tool fundamentals before moving into advanced editing, motion graphics, visual effects, AI workflows, and the Industry Experience Program.",
  },
  {
    question: "What makes me eligible for placement assistance?",
    answer:
      "Your portfolio must be completed. The course is structured so every assignment builds toward a portfolio that can be reviewed for placement assistance eligibility.",
  },
  {
    question: "Will I work on real brand style projects?",
    answer:
      "Yes. Weeks 13-24 are designed as an Industry Experience Program where you work on live brand briefs, solve real client problems, go through revision cycles, and build an agency-level portfolio.",
  },
];

const careerRoles = [
  { role: "Video Editor", salary: "₹25,000 - ₹45,000/mo", type: "Agency" },
  { role: "Motion Graphics Editor", salary: "₹30,000 - ₹55,000/mo", type: "Agency" },
  { role: "Social Media Editor", salary: "₹20,000 - ₹40,000/mo", type: "Brand-side" },
  { role: "Content Creator Editor", salary: "₹25,000 - ₹50,000/mo", type: "Brand-side" },
  { role: "Freelance Editor", salary: "₹40,000 - ₹1,20,000/mo", type: "Freelance - Agency" },
  { role: "AI Video Producer", salary: "₹35,000 - ₹65,000/mo", type: "Optional" },
];

const freelanceRates = [
  { service: "Short-form Reel / Short (edited + captions)", rate: "₹2,000 - ₹5,000" },
  { service: "Podcast edit (45 min - highlight reel)", rate: "₹4,000 - ₹8,000" },
  { service: "Brand video with colour grade + audio", rate: "₹8,000 - ₹20,000" },
  { service: "AI B-roll integration into client video", rate: "₹5,000 - ₹12,000" },
  { service: "Monthly retainer (4 reels/week)", rate: "₹15,000 - ₹30,000/mo" },
];

export default function CreativeEditingCoursePage() {
  return (
    <main className="longCoursePage">
      <ScrollTextReveal />
      {/* <RogMonitorHero3D className="longCourseFloatingModel3D" scrollZigZag travelAcrossPage /> */}

      <section className="longCourseHero" aria-label={course.title}>
        <div className="longCourseHeroMedia">
          <HeroDotField />
        </div>
        <div className="longCourseHeroShade" />

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
          <nav className="desktopNav" aria-label="Course navigation">
            <a href="#curriculum">Curriculum</a>
            <ProgramMenu />
            <a href="#schedule">Schedule</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="headerCta" href="#apply">
            <span className="headerCtaText">Apply now</span>
          </a>
          <MobileMenu />
        </header>

        <div className="longCourseHeroInner">
          <div className="longCourseHeroCopy">
            <div className="programEyebrowRow">
              <span className="programPill">{course.eyebrow}</span>
              <span className="programTag">You will not be replaced by AI</span>
            </div>
            <h1>
              {course.title}
              <DecryptedText
                text={course.accent}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={24}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                parentClassName="longCourseHeroAccentDecrypt"
                className="longCourseHeroAccentRevealed"
                encryptedClassName="longCourseHeroAccentEncrypted"
              />
            </h1>
            <p>{course.description}</p>
            <div className="longCourseHeroCtas">
              <a className="primaryCta programCta" href="#apply">
                <span className="primaryCtaText">{course.ctaLabel}</span>
              </a>
              <a
                className="programCta brochureCta"
                href="/pdf/Program%20Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="primaryCtaText">View brochure</span>
              </a>
            </div>
            <div className="longCourseHeroMobileModel" aria-hidden="true">
              {/* <RogMonitorHero3D /> */}
            </div>
          </div>

          <aside className="longCourseHeroCard" aria-label="Course preview">
            <div className="longCourseHeroModelSpace" aria-hidden="true" />
          </aside>

          <dl className="programStats longCourseStats" aria-label="Program snapshot">
            <div className="statBlock statDuration">
              <dt>Total Duration</dt>
              <dd>24 Weeks</dd>
              <div className="phaseTimeline" aria-label="Breakdown: 1-12 weeks core training, 13-24 weeks industry experience">
                <div className="phaseBar" aria-hidden="true">
                  <div className="phaseSegment phaseCore" />
                  <div className="phaseSegment phaseExp" />
                </div>
                <div className="phaseLabels">
                  <div className="phaseItem">
                    <span className="phaseDot phaseDotCore" aria-hidden="true" />
                    <span className="phaseText">01-12 Weeks (Core Training)</span>
                  </div>
                  <div className="phaseItem">
                    <span className="phaseDot phaseDotExp" aria-hidden="true" />
                    <span className="phaseText">13-24 Weeks (Industry Experience)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="statBlock statOutcome">
              <dt>Outcome</dt>
              <dd>Portfolio + Placement Eligibility</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="longCourseOutcomes" aria-label="Course outcomes">
        <div className="longCourseSectionInner">
          <div className="outcomesArjunPortrait" aria-hidden="true">
            <Image
              src="/images/arjun-cutout.webp"
              alt=""
              fill
              loading="lazy"
              decoding="async"
              sizes="(max-width: 900px) 260px, 340px"
              className="outcomesArjunImage"
            />
          </div>
          <div className="longCourseIntro">
            <span className="sectionPill">
              <span className="sectionPillText">What You Build</span>
            </span>
            <h2>
              Graduate With Work That{" "}
              <span className="outcomesTitleAccent">Shows Your Range</span>
            </h2>
            <p>
              Every module ends with a practical output, so your final portfolio is not a
              last-minute task. It grows week by week.
            </p>
          </div>
          <OutcomeCards outcomes={outcomes} />
        </div>
      </section>

      <StandOutSection />

      <section className="longCourseCurriculum" id="curriculum" aria-label="Course curriculum">
        <LazyCurriculumDotField />
        <div className="longCourseSectionInner">
          <div className="curriculumIntro">
            <h2>Curriculum</h2>
            <p>24 weeks of guided training having Industry Experience Program + Live Projects.</p>
          </div>

          <div className="curriculumBrochureShell">
            <div className="curriculumBrochureCopy">
              <span className="sectionPill">Program Roadmap</span>
              <h3>Explore the full curriculum in the brochure</h3>
              <p>
                See the complete learning path, tools covered, project flow, mentor
                feedback structure, and industry experience details in one place.
              </p>
              <a
                className="primaryCta programCta curriculumBrochureCta"
                href="/pdf/Program%20Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="primaryCtaText">View brochure</span>
              </a>
            </div>

            <div className="curriculumBrochurePreview" aria-label="Brochure contents preview">
              <div className="curriculumBrochurePreviewHeader">
                <span>Full Stack Video Editing & Creative AI Mastery</span>
                <strong>24-week roadmap</strong>
              </div>
              <div className="curriculumBrochureRows">
                {curriculumBrochureHighlights.map((item) => (
                  <div className="curriculumBrochureRow" key={item.label}>
                    <span>{item.label}</span>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="curriculumBrochureFooter" aria-hidden="true">
                <span>Training</span>
                <span>Projects</span>
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScheduleSection items={weeklySchedule} />

      <section className="longCourseMentors" aria-label="Mentors guiding the program">
        <div className="longCourseSectionInner">
          <div className="mentorSectionIntro">
            <span className="sectionPill">Guided By Experts</span>
            <h2>Mentors Guiding The Program</h2>
            <p>
              Learn from working creative professionals who guide students through editing,
              design, motion, storytelling, and real delivery workflows.
            </p>
          </div>

          <div className="mentorCardGrid">
            {mentors.map((mentor) => (
              <TiltedCard
                key={mentor.name}
                containerHeight="auto"
                containerWidth="100%"
                imageHeight="auto"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip={false}
                className="courseMentorTilt"
                innerClassName="courseMentorTiltInner"
              >
                <article className={`courseMentorCard ${mentor.accent}`}>
                  <div className="courseMentorImageWrap">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 760px) 88vw, (max-width: 1180px) 42vw, 290px"
                      className="courseMentorImage"
                    />
                  </div>
                  <div className="courseMentorInfo">
                    <h3>{mentor.name}</h3>
                    <p className="courseMentorRole">
                      {mentor.role}
                    </p>
                  </div>
                </article>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="longCoursePortfolio" id="portfolio" aria-label="Portfolio and tools">
        <PortfolioSectionMotion />
        <div className="longCourseSectionInner portfolioGrid">
          <div className="portfolioPanel">
            <h2>Industry Experience Program + Live Projects</h2>
            <div className="portfolioMilestones">
              {industryExperiencePoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>

          <div className="portfolioPanel">
            <h2>Tools Covered</h2>
            <div className="toolPillGrid">
              {tools.map((tool) => (
                <div className="toolLogoCard" key={tool.name}>
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={160}
                    height={72}
                    sizes="(max-width: 520px) 38vw, (max-width: 900px) 22vw, 150px"
                    className={`toolLogo ${["Premiere Pro", "OpusClip", "ElevenLabs", "Framer", "InVideo"].includes(
                      tool.name,
                    )
                      ? "toolLogoLight"
                      : ""
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientBrandsGrid />

      <section className="longCourseDetails" aria-label="Program details and enrollment">
        <DetailsSectionMotion />
        <div className="longCourseSectionInner detailsGlanceGrid">
          <article className="detailsPanel programGlancePanel">
            <span className="sectionPill">Key Program Highlights</span>
            <h2>What The Program Includes</h2>
            <div className="highlightsChecklist">
              {programHighlights.map((highlight) => (
                <div className="highlightItem" key={highlight}>
                  <span className="checkIcon" aria-hidden="true">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="detailsPanel enrollmentPanel">
            <span className="sectionPill">Admission & Enrollment</span>
            <h2>Fees And Enrollment</h2>
            <div className="feeCallout">
              <span>Full Program Fee</span>
              <div className="priceContainerWrapper">
                <div className="priceContainer priceBlurred">
                  <strong className="strikethroughPrice">₹69,999</strong>
                  <strong>₹39,999</strong>
                </div>
                <Link
                  className="priceOverlayButton"
                  href="#apply"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#dafd55",
                    color: "#030405",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    boxShadow: "0 8px 24px rgba(218, 253, 85, 0.25)",
                    textDecoration: "none",
                    zIndex: 2,
                  }}
                >
                  Talk to Idea School
                </Link>
              </div>
              <p>Seats are limited so every learner gets attention, feedback, and room to practice.</p>
            </div>
            <dl className="programDetailTable">
              {enrollmentDetails.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>



      <section className="longCourseCareers" id="careers" aria-label="Career Outcomes">
        <div className="longCourseSectionInner">
          <div className="careersIntro">
            <span className="sectionPill">Where Idea School editors go</span>
            <h2>Build the exact skills the market pays a premium for right now.</h2>
          </div>

          <div className="careerStatsGrid">
            <div className="careerStat">
              <h3>₹25K-55K</h3>
              <p>Monthly salary range for video editors at agencies in Bangalore</p>
            </div>
            <div className="careerStat">
              <h3>₹3K-8K</h3>
              <p>Per video for freelance short-form editors with a strong reel</p>
            </div>
            <div className="careerStat">
              <h3>₹80K+</h3>
              <p>Monthly freelance potential with 10-12 retainer clients</p>
            </div>
            <div className="careerStat">
              <h3>12 weeks</h3>
              <p>Until you have a portfolio ready to show these numbers</p>
            </div>
          </div>

          <div className="jobRolesAndFreelance">
            <div className="jobRolesPanel">
              <h3>Job roles you&apos;ll be qualified for</h3>
              <ul className="jobRolesList">
                {careerRoles.map((role) => (
                  <li key={role.role}>
                    <div className="roleMeta">
                      <strong>{role.role}</strong>
                      <span>{role.type}</span>
                    </div>
                    <span className="roleSalary">{role.salary}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="freelancePanel">
              <h3>What you can charge as a freelancer (per project)</h3>
              <ul className="freelanceRatesList">
                {freelanceRates.map((item) => (
                  <li key={item.service}>
                    <span>{item.service}</span>
                    <strong>{item.rate}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="careersDisclaimer">
            Disclaimer: Salary figures are based on current market rates for video editors in Bangalore and major Indian metros. Freelance rates vary by client, niche, and portfolio quality. These are industry benchmarks, not guaranteed outcomes.
          </p>
        </div>
      </section>

      <CourseGallery />

      <section className="programFaqContact longCourseFaq" id="faq" aria-label="Course FAQ">
        <div className="programFaqInner">
          <h2>Frequently Asked Questions</h2>
          <div className="programFaqList">
            {faqs.map((item) => (
              <details className="programFaqItem" key={item.question} open={item.open}>
                <summary>
                  <span>?</span>
                  <strong>Q: {item.question}</strong>
                </summary>
                <p>A: {item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="apply" aria-label="Apply for course">
        <div className="contactInner">
          <div className="contactCopy">
            <h2>
              Ready To Build Your Editing Career?
            </h2>
            <p>
              Join the next Idea School cohort and move from software practice to portfolio
              work, feedback, and live project delivery.
            </p>
            <a className="contactPhone" href="tel:+918618894857">
              Contact us : 8618894857
            </a>
          </div>

          <ContactForm successRedirect="/creative-editing-course/thank-you" />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>
          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <a href="#curriculum">Curriculum</a>
              <a href="#schedule">Schedule</a>
              <a href="#apply">Apply</a>
            </div>
            <div>
              <h2>Company</h2>
              <Link href="/#about">About</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div>
              <h2>Socials</h2>
              <a href="https://www.instagram.com/ideaschool.pro/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/88gb/posts/?feedView=all" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
        <Link className="footerHeroLink" href="/#hero" aria-label="Back to hero">
          IDEA SCHOOL
        </Link>
      </footer>

      <div className="floatingRegisterWrapper">
        <Link href="#apply" className="floatingRegisterBtn" suppressHydrationWarning>
          <span className="floatingBtnText">Register Now</span>
        </Link>
      </div>

      <LiquidQuickActions />
    </main>
  );
}
