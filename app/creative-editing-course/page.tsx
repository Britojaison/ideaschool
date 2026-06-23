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
import BeforeAfterSplit from "./BeforeAfterSplit";
import CountdownTimer from "./CountdownTimer";
import ContactForm from "../ContactForm";

const LazyCurriculumDotField = dynamic(() => import("./LazyCurriculumDotField"), {
  loading: () => null,
});

const ScrollFadeArrow = dynamic(() => import("./ScrollFadeArrow"), {
  loading: () => null,
});
const StandOutSection = dynamic(() => import("./StandOutSection"), {
  loading: () => <section className="longCourseStandOut longCourseStandOutLoading" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Creative Editing & AI Pro Course | Idea School",
  description:
    "A 24-week video editing, motion graphics, AI content creation, portfolio, and internship program from Idea School.",
};

const course = {
  eyebrow: "24-week career program",
  title: "Creative Editing & AI Pro Course",
  accent: "Build editor-ready craft, AI speed,\nand a real portfolio.",
  description:
    "A studio-led program for students, creators, designers, and career switchers who want to learn Premiere Pro, Photoshop, After Effects, sound design, AI tools, portfolio creation, and brand-ready production workflows.",
  heroImage: "/images/Hero 6.webp",
  ctaLabel: "Apply for the next cohort",
};

const heroStats = [
  { label: "Duration", value: "24 Weeks" },
  { label: "Core Training", value: "12 Weeks" },
  { label: "Internship", value: "12 Weeks" },
  { label: "Outcome", value: "Portfolio + Placement Eligibility" },
];

const outcomes = [
  "High-quality reels and promo cuts",
  "Motion graphics and integrated animation",
  "Visual effects, roto, tracking, and green matte keying",
  "Thumbnail, cover image, and portfolio design",
  "AI-assisted editing, voice, clipping, image, and video generation",
  "Industrial internship experience with global brand workflows",
];

const curriculumWeeks = [
  {
    week: "Week 1",
    module: "Premiere Pro Basics",
    recorded: "Premiere Pro interface",
    live: "Simple cut, importing, exporting, and proxies",
    assignment: "Paced cut of the given footage",
  },
  {
    week: "Week 2",
    module: "Premiere Pro Advanced",
    recorded: "Types of cuts and applying effects",
    live: "Captions, creative supers, roto, and must-have plugins",
    assignment: "Add B-rolls, transitions, effects, and Premiere object selection",
  },
  {
    week: "Week 3",
    module: "Photoshop Basics",
    recorded: "Photoshop layout and basic tools",
    live: "Lumetri colors, LUTs, and replicating a movie look",
    assignment: "Color grade based on the mood and tone being set",
  },
  {
    week: "Week 4",
    module: "After Effects Beginner",
    recorded: "Layout of After Effects",
    live: "Linking with AE, seamless workflow, and motion graphics",
    assignment: "Motion graphics integrated animation in video",
  },
  {
    week: "Week 5",
    module: "After Effects Intermediate",
    recorded: "Principles of animation, ease in, ease out, and fluid animation",
    live: "Advanced motion graphics and plugins for AE",
    assignment: "Make seamless animation and storytelling in animation",
  },
  {
    week: "Week 6",
    module: "After Effects Advanced",
    recorded: "Visual effects principles, interaction, and factors",
    live: "Explosions, rotoscopy, green matte keying, and lighting",
    assignment: "Visual effects with 3D tracking and 2D tracking",
  },
  {
    week: "Week 7",
    module: "After Effects Advanced",
    recorded: "3D workflow, depth of field, and camera",
    live: "3D in After Effects, camera, and tracking",
    assignment: "Add a 3D object into the video",
  },
  {
    week: "Week 8",
    module: "Sound Mixing",
    recorded: "Music, sound effects, and ambience explained",
    live: "BGM selection, sound effects, mixing, and additional effects",
    assignment: "Add BGM and sound design",
  },
  {
    week: "Week 9",
    module: "AI Gen Basics",
    recorded: "Creating a custom lower third",
    live: "Captions.ai, OpusClip, and ElevenLabs voice cloning",
    assignment: "Create a 90-second promo cut with the help of AI",
  },
  {
    week: "Week 10",
    module: "Art of Creating Thumbnails",
    recorded: "Principles of graphic design",
    live: "Thumbnail creation, AI image generation, Canva, best models, and usage",
    assignment: "Create a cover image and thumbnail for your videos",
  },
  {
    week: "Week 11",
    module: "Portfolio",
    recorded: "Portfolio fundamentals",
    live: "Portfolio creation with Framer or Figma",
    assignment: "Build your personal portfolio",
  },
  {
    week: "Week 12",
    module: "AI Gen Advanced",
    recorded: "Types of video generation, available models, and tool limits",
    live: "AI tool exploration, video generation, InVideo, HeyGen, and next workshop pitch",
    assignment: "Complete your portfolio",
  },
  {
    week: "Weeks 13-24",
    module: "Industrial Internship",
    recorded: "Brand workflow preparation",
    live: "Work with global brand style briefs and studio review systems",
    assignment: "Internship delivery, portfolio refinement, and placement readiness",
  },
];

const visibleCurriculumWeeks = curriculumWeeks.slice(0, 4);
const additionalCurriculumWeeks = curriculumWeeks.slice(4);

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
    activity: "Completion of task",
    objective: "Ship website, campaign assets, or assigned creative output.",
  },
  {
    day: "Wednesday",
    activity: "1:1 feedback session",
    objective: "Review cohort brochure, edits, and portfolio progress.",
  },
  {
    day: "Thursday",
    activity: "1:1 feedback session",
    objective: "Shoot two sets of videos: one for class practice and one for assignment.",
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
    name: "Elamparidhi",
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

const portfolioMilestones = [
  "Website or portfolio page",
  "Brochure of the cohort",
  "Two edited shoot sets",
  "Consolidation of free source tools for video making",
  "Completed portfolio for placement assistance eligibility",
];

const tools = [
  "Premiere Pro",
  "Photoshop",
  "After Effects",
  "Canva",
  "Captions.ai",
  "OpusClip",
  "ElevenLabs",
  "Framer",
  "Figma",
  "InVideo",
  "HeyGen",
];

const programHighlights = [
  "24 Week Intensive Program (12 + 12 Weeks)",
  "Creative Editing & Storytelling Training",
  "AI-Powered Editing Workflows",
  "Motion Graphics & Content Systems",
  "Reels, Podcast & Commercial Editing",
  "Practical Assignments & Real-World Projects",
  "Weekly Mentorship & Feedback Sessions",
  "Portfolio Development Support",
  "Community Access & Networking",
  "Industry Exposure Opportunities",
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
      "Yes. The first weeks cover tool fundamentals before moving into advanced editing, motion graphics, visual effects, AI workflows, and internship delivery.",
  },
  {
    question: "What makes me eligible for placement assistance?",
    answer:
      "Your portfolio must be completed. The course is structured so every assignment builds toward a portfolio that can be reviewed for placement assistance eligibility.",
  },
  {
    question: "Will I work on real brand style projects?",
    answer:
      "Yes. The final 12 weeks are designed around industrial internship work, brand style briefs, feedback, delivery discipline, and portfolio refinement.",
  },
];

const careerRoles = [
  { role: "Video Editor", salary: "₹25,000 – ₹45,000/mo", type: "Agency" },
  { role: "Motion Graphics Editor", salary: "₹30,000 – ₹55,000/mo", type: "Agency" },
  { role: "Social Media Editor", salary: "₹20,000 – ₹40,000/mo", type: "Brand-side" },
  { role: "Content Creator Editor", salary: "₹25,000 – ₹50,000/mo", type: "Brand-side" },
  { role: "Freelance Editor", salary: "₹40,000 – ₹1,20,000/mo", type: "Freelance - Agency" },
  { role: "AI Video Producer", salary: "₹35,000 – ₹65,000/mo", type: "Optional" },
];

const freelanceRates = [
  { service: "Short-form Reel / Short (edited + captions)", rate: "₹2,000 – ₹5,000" },
  { service: "Podcast edit (45 min - highlight reel)", rate: "₹4,000 – ₹8,000" },
  { service: "Brand video with colour grade + audio", rate: "₹8,000 – ₹20,000" },
  { service: "AI B-roll integration into client video", rate: "₹5,000 – ₹12,000" },
  { service: "Monthly retainer (4 reels/week)", rate: "₹15,000 – ₹30,000/mo" },
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
        </header>

        <div className="longCourseHeroInner">
          <div className="longCourseHeroCopy">
            <div className="programEyebrowRow">
              <span className="programPill">{course.eyebrow}</span>
              <span className="programTag">
                <span>Editing</span>
                <span>Motion</span>
                <span>AI</span>
              </span>
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

          <dl className="programStats longCourseStats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="longCourseOutcomes" aria-label="Course outcomes">
        <div className="longCourseSectionInner">
          <ScrollFadeArrow />
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
            <span className="sectionPill">What You Build</span>
            <h2>Graduate With Work That Shows Your Range</h2>
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
            <p>12 weeks of guided training followed by 12 weeks of industrial internship.</p>
          </div>

          <div className="courseWeekList">
            {visibleCurriculumWeeks.map((week) => (
              <article className="courseWeek" key={`${week.week}-${week.module}`}>
                <div className="courseWeekMeta">
                  <span>{week.week}</span>
                  <h3>{week.module}</h3>
                </div>
                <div className="courseWeekGrid">
                  <div>
                    <strong>Recorded session</strong>
                    <p>{week.recorded}</p>
                  </div>
                  <div>
                    <strong>Offline / online session</strong>
                    <p>{week.live}</p>
                  </div>
                  <div>
                    <strong>Assignment</strong>
                    <p>{week.assignment}</p>
                  </div>
                </div>
              </article>
            ))}

            <details className="courseWeekDropdown">
              <summary>
                <span>View full curriculum</span>
                <strong>{additionalCurriculumWeeks.length} more modules</strong>
              </summary>

              <div className="courseWeekDropdownList">
                {additionalCurriculumWeeks.map((week) => (
                  <article className="courseWeek" key={`${week.week}-${week.module}`}>
                    <div className="courseWeekMeta">
                      <span>{week.week}</span>
                      <h3>{week.module}</h3>
                    </div>
                    <div className="courseWeekGrid">
                      <div>
                        <strong>Recorded session</strong>
                        <p>{week.recorded}</p>
                      </div>
                      <div>
                        <strong>Offline / online session</strong>
                        <p>{week.live}</p>
                      </div>
                      <div>
                        <strong>Assignment</strong>
                        <p>{week.assignment}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </details>
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
                captionText={`${mentor.name} - ${mentor.role}`}
                containerHeight="auto"
                containerWidth="100%"
                imageHeight="auto"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip
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
            <h2>Portfolio Milestones</h2>
            <div className="portfolioMilestones">
              {portfolioMilestones.map((milestone) => (
                <span key={milestone}>{milestone}</span>
              ))}
            </div>
          </div>

          <div className="portfolioPanel">
            <h2>Tools Covered</h2>
            <div className="toolPillGrid">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              <div className="priceContainer">
                <strong className="strikethroughPrice">₹69,999</strong>
                <strong>₹39,999</strong>
              </div>
              <p>Seats are limited so every learner gets attention, feedback, and room to practice.</p>
            </div>
            <CountdownTimer targetDate="2026-06-30T23:59:59" className="courseUrgencyTimer" />
            <dl className="programDetailTable">
              {enrollmentDetails.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <Link className="primaryCta programCta enrollmentCta" href="/#contact">
              <span className="primaryCtaText">Talk to Idea School</span>
            </Link>
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
              <h3>₹25K–55K</h3>
              <p>Monthly salary range for video editors at agencies in Bangalore</p>
            </div>
            <div className="careerStat">
              <h3>₹3K–8K</h3>
              <p>Per video for freelance short-form editors with a strong reel</p>
            </div>
            <div className="careerStat">
              <h3>₹80K+</h3>
              <p>Monthly freelance potential with 10–12 retainer clients</p>
            </div>
            <div className="careerStat">
              <h3>12 weeks</h3>
              <p>Until you have a portfolio ready to show these numbers</p>
            </div>
          </div>

          <div className="jobRolesAndFreelance">
            <div className="jobRolesPanel">
              <h3>Job roles you'll be qualified for</h3>
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
              <h3>What you can charge as a freelancer — per project</h3>
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
              work, feedback, and internship delivery.
            </p>
            <a className="contactPhone" href="tel:+918618894857">
              Contact us : 8618894857
            </a>
          </div>

          <ContactForm />
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
        <Link href="#apply" className="floatingRegisterBtn">
          <span className="floatingBtnText">Register Now</span>
          <CountdownTimer targetDate="2026-06-30T23:59:59" className="floatingTimer" />
        </Link>
      </div>
    </main>
  );
}
