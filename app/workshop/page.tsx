import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import DetailsSectionMotion from "../creative-editing-course/DetailsSectionMotion";
import OutcomeCards from "../creative-editing-course/OutcomeCards";
import ScrollTextReveal from "../ScrollTextReveal";
import TiltedCard from "../TiltedCard";
import WorkshopGsapAnimations from "./WorkshopGsapAnimations";
import WorkshopHeroModel3D from "./WorkshopHeroModel3D";

const LazyCurriculumDotField = dynamic(
  () => import("../creative-editing-course/LazyCurriculumDotField"),
  { loading: () => null },
);

const ScrollFadeArrow = dynamic(
  () => import("../creative-editing-course/ScrollFadeArrow"),
  { loading: () => null },
);

export const metadata: Metadata = {
  title: "2-Day Video Editing Workshop | Idea School",
  description:
    "A live 2-day workshop to learn high-income video editing skills, Premiere Pro, After Effects, CapCut, audio tools, and AI-powered video creation with Higgsfield AI.",
};

const workshop = {
  eyebrow: "2-day live workshop",
  title: "High-Income Video Editing Workshop",
  accent: "Master the skills top video editors use\nto land high-paying projects.",
  description:
    "Learn high-income video editing skills that are in demand by brands, creators, agencies and businesses, and master AI-powered video creation with Higgsfield AI.",
  ctaLabel: "Reserve your workshop seat",
};

const outcomes = [
  "High-income editing skills used by brands, creators, agencies, and businesses",
  "Practical video editing workflow for better-paying freelance projects",
  "AI-powered video creation with Higgsfield AI",
  "Faster editing workflows using Premiere Pro, After Effects, CapCut, and AI tools",
  "Audio enhancement, polishing, and delivery techniques",
  "A clear roadmap to start or level up your video editing journey",
];

const curriculumDays = [
  {
    week: "Day 1",
    module: "Session Topics",
    recorded: "Editing foundations, project setup, timeline flow, and the mindset of premium edits",
    live: "Hands-on Premiere Pro workflow, cuts, pacing, audio cleanup, and client-ready polish",
    assignment: "Create a clean short-form edit using the workshop footage and editing framework",
  },
  {
    week: "Day 2",
    module: "Session Topics",
    recorded: "Motion enhancement, AI-assisted planning, and faster creative production systems",
    live: "After Effects basics, CapCut workflow, Higgsfield AI, and AI tools for faster video editing",
    assignment: "Build a premium sample edit and map your first freelance video editing offer",
  },
];

const schedule = [
  {
    label: "Workshop Format",
    title: "Live Online Sessions",
    description: "Both days are conducted live online with practical exercises and trainer guidance.",
  },
  {
    label: "Practice",
    title: "Hands-On Editing",
    description: "You will follow the workflow step by step instead of only watching tool demos.",
  },
  {
    label: "Resources",
    title: "Recordings Provided",
    description: "Workshop recordings will be provided so you can revise the sessions after class.",
  },
];

const mentors = [
  {
    name: "Ajay Karthik",
    role: "Video Editor, 88GB",
    image: "/images/mentor_AJAY.webp",
    accent: "lime",
  },
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
];

const tools = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Audio Enhancement Tools",
  "CapCut Mobile & Desktop",
  "AI Tools For Faster Video Editing",
  "Higgsfield AI",
];

const attendees = [
  "Freelancers who want to offer video editing services and increase their income",
  "College students seeking a high-demand skill with freelancing and career opportunities",
  "Video editors with basic skills who want to level up, increase earning potential, and work on higher-value projects",
];

const projects = [
  {
    title: "Brand Commercial",
    src: "/images/Brand Commercial/SunscreenAD_May22 V2.mp4",
    poster: "/images/Brand Commercial/SunscreenAD_May22 V2.webp",
  },
  {
    title: "AI Campaign Film",
    src: "/images/Brand Commercial/CampaAD_Seedance_May22.mp4",
    poster: "/images/Brand Commercial/CampaAD_Seedance_May22.webp",
  },
  {
    title: "Recent Student Work",
    src: "/images/Aadi Sale (1).mp4",
    poster: "/images/alumni-posters/Aadi Sale (1).mp4.webp",
  },
];

const programHighlights = [
  "2 days of intensive live training",
  "Beginner-friendly practical sessions",
  "High-income video editing skill roadmap",
  "Premiere Pro editing workflow",
  "After Effects enhancement workflow",
  "CapCut mobile and desktop workflow",
  "Audio enhancement tools",
  "AI-powered video creation with Higgsfield AI",
  "Workshop recordings provided",
  "Practical exercises across both days",
];

const testimonials = [
  {
    quote:
      "I only knew basic editing before this workshop. The practical training and AI tools helped me improve my skills and start attracting better-paying freelance projects.",
    name: "Student",
  },
  {
    quote:
      "As a college student, I wanted a skill that could help me earn. This workshop gave me the confidence and roadmap to start my video editing journey.",
    name: "College Student",
  },
  {
    quote:
      "I was stuck doing basic edits for low-paying clients. After learning advanced editing techniques and AI workflows, I was able to create premium-quality videos and increase my earning potential.",
    name: "Video Editor",
  },
];

const faqs = [
  {
    question: "Do I need prior experience?",
    answer: "No. This workshop is designed for complete beginners.",
    open: true,
  },
  {
    question: "Will the sessions be live?",
    answer: "Yes, both days will be conducted live online.",
  },
  {
    question: "Will I get recordings?",
    answer: "Yes, workshop recordings will be provided.",
  },
  {
    question: "How long is the workshop?",
    answer: "2 days of intensive live training with practical exercises.",
  },
];

export default function WorkshopPage() {
  return (
    <main className="longCoursePage workshopCoursePage">
      <WorkshopGsapAnimations />
      <div id="smooth-wrapper" className="workshopSmoothWrapper">
        <div id="smooth-content" className="workshopSmoothContent">
          <ScrollTextReveal />

      <section className="longCourseHero workshopHero" aria-label={workshop.title}>
        <div className="longCourseHeroMedia">
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
          <a className="headerCta" href="#apply">
            <span className="headerCtaText">Register now</span>
          </a>
        </header>

        <div className="longCourseHeroInner">
          <div className="longCourseHeroCopy">
            <div className="longCourseHeroCtas">
              <a className="primaryCta programCta" href="#apply">
                <span className="primaryCtaText">{workshop.ctaLabel}</span>
              </a>
            </div>
          </div>

          <h1 className="workshopHeroDisplay">
            Your Edits{" "}
            <span>Deserve More</span>{" "}
            Than Pretty Transitions.
          </h1>

          <WorkshopHeroModel3D />
        </div>
      </section>

      <section className="longCourseOutcomes workshopGsapSection" aria-label="What you will learn">
        <div className="longCourseSectionInner">
          <ScrollFadeArrow />
          <div className="longCourseIntro">
            <span className="sectionPill">What You&apos;ll Learn</span>
            <h2>Skills You Can Use For Paid Editing Projects</h2>
            <p>
              This workshop is built around the content you shared: practical editing,
              AI-powered creation, better workflows, and a path to higher-value projects.
            </p>
          </div>
          <OutcomeCards outcomes={outcomes} />
        </div>
      </section>

      <section className="longCourseCurriculum workshopGsapSection" id="curriculum" aria-label="Workshop curriculum">
        <LazyCurriculumDotField />
        <div className="longCourseSectionInner">
          <div className="curriculumIntro">
            <h2>2-Day Session Plan</h2>
            <p>Day 1 and Day 2 are ready for your final topic details when you add more content.</p>
          </div>

          <div className="courseWeekList">
            {curriculumDays.map((day) => (
              <article className="courseWeek" key={day.week}>
                <div className="courseWeekMeta">
                  <span>{day.week}</span>
                  <h3>{day.module}</h3>
                </div>
                <div className="courseWeekGrid">
                  <div>
                    <strong>Session focus</strong>
                    <p>{day.recorded}</p>
                  </div>
                  <div>
                    <strong>Live training</strong>
                    <p>{day.live}</p>
                  </div>
                  <div>
                    <strong>Practical exercise</strong>
                    <p>{day.assignment}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="longCourseSchedule workshopSchedule workshopGsapSection" aria-label="Workshop schedule">
        <div className="longCourseSectionInner splitSection">
          <div className="longCourseIntro">
            <span className="sectionPill">Workshop Flow</span>
            <h2>Live Training, Practical Exercises, Recordings</h2>
            <p>
              The format is simple: join live, practice during the workshop, and revise later
              with the provided recordings.
            </p>
          </div>

          <div className="scheduleList">
            {schedule.map((item) => (
              <article className="scheduleItem" key={item.label}>
                <span>{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="longCoursePortfolio workshopGsapSection" id="tools" aria-label="Tools and attendees">
        <div className="longCourseSectionInner portfolioGrid">
          <div className="portfolioPanel">
            <h2>Tools You&apos;ll Learn</h2>
            <div className="toolPillGrid">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="portfolioPanel">
            <h2>Who Should Attend?</h2>
            <div className="portfolioMilestones">
              {attendees.map((attendee) => (
                <span key={attendee}>{attendee}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work">
        <DetailsSectionMotion />
        <div className="longCourseSectionInner">
          <div className="mentorSectionIntro">
            <span className="sectionPill">Our Work</span>
            <h2>Watch Some Of Our Recent Projects</h2>
            <p>Current local project videos are placed here. You can upload the final showcase videos later.</p>
          </div>

          <div className="workshopProjectGrid">
            {projects.map((project) => (
              <article className="workshopProjectCard" data-speed={project.title === "AI Campaign Film" ? "clamp(0.92)" : "clamp(1.08)"} key={project.title}>
                <video muted loop playsInline preload="metadata" poster={project.poster} aria-label={project.title}>
                  <source src={project.src} type="video/mp4" />
                </video>
                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="longCourseMentors workshopGsapSection" aria-label="About the instructor">
        <div className="longCourseSectionInner">
          <div className="mentorSectionIntro">
            <span className="sectionPill">About The Instructor</span>
            <h2>Learn From Working Creative Professionals</h2>
            <p>
              Instructor biography content can go here once you share it. For now, this follows the
              same mentor-card layout as the creative page and uses existing local photos.
            </p>
          </div>

          <div className="mentorCardGrid workshopMentorGrid">
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
                  <div className="courseMentorImageWrap" data-speed="clamp(0.94)">
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
                  <div className="workshopMentorCopy">
                    <h3>{mentor.name}</h3>
                    <p>{mentor.role}</p>
                  </div>
                </article>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="longCourseDetails workshopProofSection workshopGsapSection" aria-label="Student testimonials">
        <DetailsSectionMotion />
        <div className="longCourseSectionInner detailsGlanceGrid">
          <article className="detailsPanel programGlancePanel">
            <span className="sectionPill">What Our Students Say</span>
            <h2>Workshop Proof</h2>
            <div className="workshopTestimonialList">
              {testimonials.map((testimonial) => (
                <figure className="workshopTestimonial" key={testimonial.quote}>
                  <div aria-label="5 star rating">★★★★★</div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>{testimonial.name}</figcaption>
                </figure>
              ))}
            </div>
          </article>

          <article className="detailsPanel enrollmentPanel">
            <span className="sectionPill">What This Includes</span>
            <h2>Program Highlights</h2>
            <div className="highlightsChecklist">
              {programHighlights.map((highlight) => (
                <div className="highlightItem" key={highlight}>
                  <span className="checkIcon" aria-hidden="true">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="programFaqContact longCourseFaq workshopGsapSection" id="faq" aria-label="Workshop FAQ">
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

      <section className="longCourseApply workshopGsapSection" id="apply" aria-label="Register for workshop">
        <div className="longCourseApplyInner">
          <h2>Ready To Learn Video Editing Skills That Can Pay?</h2>
          <p>
            Join the 2-day live workshop and start building the practical editing and AI workflow
            confidence needed for better projects.
          </p>
          <a className="primaryCta programCta" href="https://rzp.io/rzp/NwcRrEel" target="_blank" rel="noreferrer">
            <span className="primaryCtaText">Register for the workshop</span>
          </a>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>
          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Workshop</h2>
              <a href="#curriculum">Curriculum</a>
              <a href="#tools">Tools</a>
              <a href="#apply">Register</a>
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
        <Link className="footerHeroLink" href="/#hero" aria-label="Back to home hero">
          IDEA SCHOOL
        </Link>
      </footer>
        </div>
      </div>
    </main>
  );
}
