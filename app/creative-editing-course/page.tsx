import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DecryptedText from "../DecryptedText";
import ProofVideoCard from "../apply/ProofVideoCard";
import HeroDotField from "../HeroDotField";
import ScrollTextReveal from "../ScrollTextReveal";
import LazyCurriculumDotField from "./LazyCurriculumDotField";
import RogMonitorHero3D from "./RogMonitorHero3D";
import ScrollFadeArrow from "./ScrollFadeArrow";
import StandOutSection from "./StandOutSection";

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
  heroImage: "/images/Hero 6.png",
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
    image: "/images/mentor_ARJUN.png",
    accent: "green",
  },
  {
    name: "Elamparidhi",
    role: "Head of Design, 88GB",
    image: "/images/mentor_PARIDHI.png",
    accent: "mint",
  },
  {
    name: "Ajay Karthik",
    role: "Video Editor, 88GB",
    image: "/images/mentor_AJAY.png",
    accent: "lime",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Senior Creative Strategist, 88GB",
    image: "/images/mentor_CHANDRU.png",
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

const programDetails = [
  { label: "Duration", value: "24 Weeks" },
  { label: "Core Training", value: "12 Weeks" },
  { label: "Internship", value: "12 Weeks" },
  { label: "Mode", value: "Studio-led practical program" },
  { label: "Schedule", value: "Weekly recorded, offline, query, task, and feedback rhythm" },
  { label: "Outcome", value: "Portfolio + placement assistance eligibility" },
  { label: "Portfolio", value: "Website, cohort brochure, edited shoot sets, and campaign assets" },
  { label: "Tools", value: "Premiere Pro, Photoshop, After Effects, AI tools, Framer, and Figma" },
];

const enrollmentBenefits = [
  "Talk to the team and check whether the program fits your goals",
  "Understand batch availability, fee structure, and admission steps",
  "Reserve a seat only after your program fit is clear",
];

const studentVoiceVideos = [
  {
    src: "/images/proof-videos/student-feedback-1.mp4",
    poster: "/images/proof-videos/student-feedback-1.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-2.mp4",
    poster: "/images/proof-videos/student-feedback-2.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-3.mp4",
    poster: "/images/proof-videos/student-feedback-3.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-4.mp4",
    poster: "/images/proof-videos/student-feedback-4.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-5.mp4",
    poster: "/images/proof-videos/student-feedback-5.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-6.mp4",
    poster: "/images/proof-videos/student-feedback-6.jpg",
  },
  {
    src: "/images/proof-videos/student-feedback-7.mp4",
    poster: "/images/proof-videos/student-feedback-7.jpg",
  },
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

export default function CreativeEditingCoursePage() {
  return (
    <main className="longCoursePage">
      <ScrollTextReveal />
      <RogMonitorHero3D className="longCourseFloatingModel3D" scrollZigZag travelAcrossPage />

      <section className="longCourseHero" aria-label={course.title}>
        <div className="longCourseHeroMedia">
          <HeroDotField />
        </div>
        <div className="longCourseHeroShade" />

        <header className="siteHeader">
          <Link className="brand" href="/" aria-label="Idea School home">
            <Image
              src="/images/idea logo.png"
              alt="Idea"
              width={104}
              height={54}
              priority
              className="brandLogo"
            />
          </Link>
          <nav className="desktopNav" aria-label="Course navigation">
            <a href="#curriculum">Curriculum</a>
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
            <a className="primaryCta programCta" href="#apply">
              <span className="primaryCtaText">{course.ctaLabel}</span>
            </a>
            <div className="longCourseHeroMobileModel" aria-hidden="true">
              <RogMonitorHero3D />
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
              src="/images/arjun-cutout.png"
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
          <div className="outcomeGrid">
            {outcomes.map((outcome, index) => (
              <article className="outcomeCard" key={outcome}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
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

      <section className="longCourseSchedule" id="schedule" aria-label="Weekly schedule">
        <div className="longCourseSectionInner splitSection">
          <div className="longCourseIntro">
            <span className="sectionPill">Weekly Rhythm</span>
            <h2>Structured Practice, Feedback, And Delivery</h2>
            <p>
              The week is designed around learning, doing, review, and completion so students
              stay consistent instead of waiting until the deadline.
            </p>
          </div>

          <div className="scheduleList">
            {weeklySchedule.map((item) => (
              <article className="scheduleItem" key={item.day}>
                <span>{item.day}</span>
                <div>
                  <h3>{item.activity}</h3>
                  <p>{item.objective}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              <article className={`courseMentorCard ${mentor.accent}`} key={mentor.name}>
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
                <div className="courseMentorCopy">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="longCoursePortfolio" id="portfolio" aria-label="Portfolio and tools">
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
        <div className="longCourseSectionInner detailsGlanceGrid">
          <article className="detailsPanel programGlancePanel">
            <span className="sectionPill">Key Program Highlights</span>
            <h2>Program Details At A Glance</h2>
            <dl className="programDetailTable">
              {programDetails.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="detailsPanel enrollmentPanel">
            <span className="sectionPill">Admission & Enrollment</span>
            <h2>Fees And Enrollment</h2>
            <div className="feeCallout">
              <span>Program fee</span>
              <strong>Shared after counseling</strong>
              <p>Seats are limited so every learner gets attention, feedback, and room to practice.</p>
            </div>
            <div className="enrollmentChecklist">
              {enrollmentBenefits.map((benefit) => (
                <p key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </p>
              ))}
            </div>
            <Link className="primaryCta programCta enrollmentCta" href="/#contact">
              <span className="primaryCtaText">Talk to Idea School</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="longCourseVoices" aria-label="Student video testimonials">
        <div className="longCourseSectionInner">
          <div className="voicesIntro">
            <span className="sectionPill">Student Voices</span>
            <h2>What Students Say After The Program</h2>
            <p>
              Real student feedback from hands-on sessions, practical guidance, and the
              confidence that comes from building with mentors.
            </p>
          </div>

          <div className="courseVoiceGrid">
            {studentVoiceVideos.map((video, index) => (
              <div className="proofVideoFrame courseVoiceFrame" key={video.src}>
                <ProofVideoCard src={video.src} poster={video.poster} index={index} />
              </div>
            ))}
          </div>
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

      <section className="longCourseApply" id="apply" aria-label="Apply for course">
        <div className="longCourseApplyInner">
          <h2>Ready To Build Your Editing Career?</h2>
          <p>
            Join the next Idea School cohort and move from software practice to portfolio
            work, feedback, and internship delivery.
          </p>
          <Link className="primaryCta programCta" href="/#contact">
            <span className="primaryCtaText">Talk to Idea School</span>
          </Link>
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
        <strong aria-hidden="true">IDEA SCHOOL</strong>
      </footer>
    </main>
  );
}
