import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import DetailsSectionMotion from "../creative-editing-course/DetailsSectionMotion";
import LiquidVideoMuteButton from "@/components/ui/LiquidVideoMuteButton";
import OutcomeCards from "../creative-editing-course/OutcomeCards";
import ScrollTextReveal from "@/components/ui/ScrollTextReveal";
import TiltedCard from "@/components/ui/TiltedCard";
import WorkshopGsapAnimations from "./WorkshopGsapAnimations";
import WorkshopHeroModel3D from "./WorkshopHeroModel3D";
import MobileMenu from "@/components/global/MobileMenu";

import WorkshopCurriculumFlow from "./WorkshopCurriculumFlow";
import WorkshopToolsInteractive from "./WorkshopToolsInteractive";
import WorkshopLoadingScreen from "./WorkshopLoadingScreen";
import WorkshopAttendeesList from "./WorkshopAttendeesList";
import Footer from "@/components/global/Footer";
import WorkshopInstructorImage from "./WorkshopInstructorImage";
import WorkshopFaqImage from "./WorkshopFaqImage";
import WorkshopGalleryFlip from "./WorkshopGalleryFlip";
import WorkshopStickyBanner from "./WorkshopStickyBanner";

const LazyCurriculumDotField = dynamic(
  () => import("../creative-editing-course/LazyCurriculumDotField"),
  { loading: () => null },
);

const ScrollFadeArrow = dynamic(
  () => import("../creative-editing-course/ScrollFadeArrow"),
  { loading: () => null },
);

export const metadata: Metadata = {
  title: "master VIDEO EDITING | Idea School",
  description:
    "A live 2-day workshop to learn high-income video editing skills, Premiere Pro, After Effects, CapCut, audio tools, and AI-powered video creation with Higgsfield AI.",
};

const workshop = {
  eyebrow: "2-day live workshop",
  title: "master VIDEO EDITING",
  accent: "Master the skills top video editors use\nto land high-paying projects.",
  description:
    "Learn high-income video editing skills that are in demand by brands, creators, agencies and businesses, and master AI-powered video creation with Higgsfield AI.",
  ctaLabel: "Register Now",
};

const workshopPaymentUrl = "https://rzp.io/rzp/L5kyyQlg";
const workshopHeroVideoSrc = "/images/Ideaschool_workshop.mp4";

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
    module: "High-Retention Editing",
    sections: [
      {
        title: "Hook Engineering",
        items: [
          "Create attention-grabbing hooks in the first 3 seconds",
          "Hook frameworks used by top creators",
          "Curiosity and retention strategies",
        ],
      },
      {
        title: "Retention Editing",
        items: [
          "Keep viewers engaged till the end",
          "Pacing, cuts, visual storytelling & motion graphics",
          "Retention techniques behind viral content",
        ],
      },
      {
        title: "Bonus",
        items: [
          "AI-Powered Editing Workflow with Higgsfield AI",
        ],
      },
    ],
  },
  {
    week: "Day 2",
    module: "Viral Content Editing",
    sections: [
      {
        title: "Typography & Sound Design",
        items: [
          "Animated captions and engaging typography",
          "Sound effects, music, and audio transitions",
          "Using audio to enhance viewer experience",
        ],
      },
      {
        title: "Viral Edit Framework",
        items: [
          "Structure videos for maximum watch time",
          "Breakdown of successful viral edits",
          "Create content optimized for Reels, Shorts & Social Media",
        ],
      },
      {
        title: "Bonus",
        items: [
          "Access to Stock Videos & Assets",
        ],
      },
    ],
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
    name: "Elamparithi",
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
    answer: "No. This workshop is designed for everyone—from complete beginners to experienced editors looking to upgrade their skills and learn modern editing workflows.",
    open: true,
  },
  {
    question: "Will the sessions be live?",
    answer: "Yes, both days will be conducted live online.",
  },

  {
    question: "How long is the workshop?",
    answer: "2 days of intensive live training with practical exercises.",
  },
  {
    question: "Can I ask questions during the workshop?",
    answer: "Yes. There will be dedicated Q&A sessions where you can interact directly with the instructor.",
  },
  {
    question: "What makes this workshop different from YouTube tutorials?",
    answer: "Instead of random tutorials, you'll learn a structured editing system focused on retention, storytelling, and professional workflows.",
  },
];

export default function WorkshopPage() {
  return (
    <main className="longCoursePage workshopCoursePage">
      <WorkshopLoadingScreen />
      <WorkshopGsapAnimations />
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
              <a className="headerCta" href={workshopPaymentUrl} target="_blank" rel="noreferrer">
                <span className="headerCtaText">Register Now</span>
              </a>
              <MobileMenu />
            </header>

            <div className="longCourseHeroInner">
              <div className="workshopHeroVideoPanel" aria-label="Workshop preview video">
                <video
                  id="workshop-hero-video"
                  className="workshopHeroVideo"
                  src={workshopHeroVideoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  preload="auto"
                />
                <LiquidVideoMuteButton targetId="workshop-hero-video" />
              </div>

              <div className="longCourseHeroCopy">
                <h1>MASTER <span style={{ whiteSpace: "nowrap", display: "inline", fontSize: "inherit", color: "inherit", margin: 0 }}>HIGH-PAYING</span> <span style={{ whiteSpace: "nowrap", display: "inline", fontSize: "inherit", color: "inherit", margin: 0 }}>VIDEO EDITING</span> <span style={{ whiteSpace: "nowrap", display: "inline", fontSize: "inherit", color: "inherit", margin: 0 }}>IN 2-DAYS</span></h1>
                <dl className="workshopHeroMetaCards grid grid-cols-2 gap-4 md:gap-6 mt-10 w-full max-w-[520px]" aria-label="Workshop details">
                  {/* Date Card */}
                  <div className="group bg-white border-2 border-black rounded-xl p-4 md:p-5 shadow-[4px_4px_0_0_#151515] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 cursor-default flex flex-col justify-center relative overflow-hidden">
                    <dt className="text-[0.7rem] font-black tracking-widest text-black/60 uppercase mb-1.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      Date
                    </dt>
                    <dd className="text-3xl md:text-4xl text-black leading-none mt-1" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>July 25, 26</dd>
                  </div>

                  {/* Time Card */}
                  <div className="group bg-[#dafd55] border-2 border-black rounded-xl p-4 md:p-5 shadow-[4px_4px_0_0_#151515] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 cursor-default flex flex-col justify-center relative overflow-hidden">
                    <dt className="text-[0.7rem] font-black tracking-widest text-black/60 uppercase mb-1.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Time
                    </dt>
                    <dd className="text-3xl md:text-4xl text-black leading-none mt-1" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>6 PM - 8 PM</dd>
                  </div>

                  {/* Live Card */}
                  <div className="group bg-[#dafd55] border-2 border-black rounded-xl p-4 md:p-5 shadow-[4px_4px_0_0_#151515] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 cursor-default flex flex-col justify-center relative overflow-hidden">
                    <dt className="text-[0.7rem] font-black tracking-widest text-black/60 uppercase mb-1.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                      Live
                    </dt>
                    <dd className="text-3xl md:text-4xl text-black leading-none mt-1" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>On Zoom</dd>
                  </div>

                  {/* Language Card */}
                  <div className="group bg-white border-2 border-black rounded-xl p-4 md:p-5 shadow-[4px_4px_0_0_#151515] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 cursor-default flex flex-col justify-center relative overflow-hidden">
                    <dt className="text-[0.7rem] font-black tracking-widest text-black/60 uppercase mb-1.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      Language
                    </dt>
                    <dd className="text-3xl md:text-4xl text-black leading-none mt-1" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>English</dd>
                  </div>
                </dl>



              </div>

            </div>
          </section>



          <WorkshopCurriculumFlow />

          <section className="longCourseCurriculum workshopGsapSection" id="curriculum" aria-label="Workshop curriculum">
            <LazyCurriculumDotField />
            <div className="longCourseSectionInner">
              <div className="curriculumIntro" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
                <h2
                  style={{
                    background: "#d2bbf4",
                    color: "#000",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    padding: "14px 36px",
                    margin: 0,
                    textTransform: "uppercase",
                    fontFamily: "\"Bebas Neue\", var(--font-heading)",
                    fontWeight: 900,
                    lineHeight: 1,
                    width: "fit-content"
                  }}
                >
                  2-Day Session Plan
                </h2>
              </div>

              <div className="courseWeekList">
                {curriculumDays.map((day) => (
                  <article className="courseWeek bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0_0_#151515] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-200" style={{ borderColor: "#000" }} key={day.week}>
                    <div className="courseWeekMeta">
                      <span className="inline-flex items-center justify-center px-4 py-1 bg-[#dafd55] border-2 border-black rounded-full text-sm font-black text-black font-mono w-fit" style={{ background: "#dafd55", color: "#000" }}>{day.week}</span>
                      <h3>{day.module}</h3>
                    </div>
                    <div className="courseWeekGrid">
                      {day.sections.map((section, idx) => (
                        <div key={idx} className="border-2 !border-black rounded-xl shadow-[4px_4px_0_0_#151515] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200" style={{ borderColor: "#000" }}>
                          <strong className="inline-flex px-3 py-1 bg-[#d2bbf4] border-2 border-black rounded-full text-black text-xs font-black uppercase mb-4 shadow-[2px_2px_0_0_#151515] w-fit tracking-wider" style={{ color: "#000" }}>{section.title}</strong>
                          <ul style={{ paddingLeft: "16px", listStyleType: "disc" }}>
                            {section.items.map((item, i) => (
                              <li key={i} style={{ paddingBottom: "6px" }}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>



          <WorkshopToolsInteractive />

          <section className="workshopAttendeesSection" id="attendees" aria-label="Who Should Attend" style={{ paddingTop: "clamp(56px, 8vw, 84px)", paddingBottom: "0", paddingLeft: "4vw", paddingRight: "4vw", minHeight: "auto", display: "block", backgroundColor: "#E6E6E6" }}>
            <WorkshopAttendeesList />
          </section>

          <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work" style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#000000", color: "#ffffff" }}>
            <DetailsSectionMotion />
            <div className="longCourseSectionInner" style={{ marginBottom: "40px" }}>
              <div className="mentorSectionIntro" style={{ marginBottom: 0 }}>
                <span className="sectionPill">Our Work</span>
                <h2 style={{ color: "#ffffff", fontFamily: "'Bebas Neue', var(--font-heading)" }}>Watch Some Of Our Recent Projects</h2>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Take a look at the caliber of high-performing video content you will learn to produce during this intensive workshop.</p>
              </div>
            </div>

            <WorkshopGalleryFlip />
          </section>

          <section className="workshopGsapSection flex flex-col justify-center lg:min-h-[100vh] relative p-0 overflow-hidden bg-white" aria-label="About the instructor">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
              {/* Left Side: Text Content */}
              <div className="flex-1 flex flex-col justify-center items-start w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 lg:py-24 z-10" style={{ textAlign: "left" }}>
                <span
                  className="inline-block mb-6"
                  style={{
                    background: "#dafd55",
                    color: "#000",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    padding: "10px 24px",
                    border: "none",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    boxShadow: "0 4px 14px rgba(218, 253, 85, 0.4)",
                    borderRadius: "999px"
                  }}
                >
                  About The Instructor
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 uppercase leading-tight font-display max-w-2xl" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                  Learn From a Working Creative Professional
                </h2>
                <p className="text-gray-600 text-lg md:text-xl font-light max-w-xl mb-8 leading-relaxed">
                  With over a decade of experience in video editing, motion graphics, and visual storytelling, Elamparithi has collaborated with top-tier brands, creators, and agencies to produce high-performing content that drives results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl border-t border-gray-200 pt-8">
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">Real-World Experience</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Head of Design at 88GB, leading high-stakes commercial projects and viral digital campaigns.</p>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">Practical Approach</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Zero fluff. Learn the exact timelines, tools, and techniques used in professional studios today.</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Full Bleed Image */}
              {mentors.length > 0 ? (
                <WorkshopInstructorImage mentor={mentors[0]} />
              ) : (
                <div className="flex-1 relative w-full h-[60vh] lg:h-auto min-h-[100vh] m-0"></div>
              )}
            </div>
          </section>

          <section className="workshopTestimonialSection bg-[#F7F5F4] py-12 md:py-24 lg:py-32 px-6 md:px-12" aria-label="Student testimonials">
            <div className="max-w-[1440px] mx-auto">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 md:mb-20 lg:mb-32 max-w-5xl leading-[1.1] text-black tracking-wide uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                We believe in the best practical training, because we know it helps our students land high-paying projects.
              </h2>

              <div className="flex flex-col md:flex-row border-t md:border-t-0 border-black/20 pt-10 md:pt-0">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-between flex-1 ${index !== testimonials.length - 1 ? 'md:border-r border-black/20 pb-12 md:pb-0 mb-12 md:mb-0 border-b md:border-b-0' : ''} ${index !== 0 ? 'md:pl-10 lg:pl-16' : 'pl-0'} ${index !== testimonials.length - 1 ? 'md:pr-10 lg:pr-16' : 'pr-0'}`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <p className="text-xl md:text-2xl font-normal leading-snug text-black max-w-md pr-6" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                          {testimonial.quote}
                        </p>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                          <path d="M10 8V12C10 14.2091 8.20914 16 6 16H5V14H6C7.10457 14 8 13.1046 8 12V11H4V5H10V8ZM20 8V12C20 14.2091 18.2091 16 16 16H15V14H16C17.1045 14 18 13.1046 18 12V11H14V5H20V8Z" fill="black" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-8 md:mt-16 lg:mt-24">
                      <p className="font-bold text-black text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm mt-1">Workshop Attendee</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Stats Section */}
          <section className="marketStatsSection py-20 md:py-32 px-6 md:px-12 bg-[#0a0a0a] text-white min-h-[100vh] flex flex-col justify-center relative z-0" aria-label="Market Opportunities">
            <div className="max-w-[1440px] mx-auto w-full">
              <div className="text-center mb-16 md:mb-24">
                <span
                  className="inline-block mb-6"
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    background: "#dafd55",
                    color: "#000",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    padding: "10px 24px",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    boxShadow: "0 4px 14px rgba(218, 253, 85, 0.4)",
                    borderRadius: "999px"
                  }}
                >
                  Career Potential
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-[5rem] tracking-tight font-medium mb-6 uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                  Where Idea School Editors Go
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                  The skills you build here are what the market is actively hiring for and paying a premium on - right now.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {[
                  { stat: "₹25K-55K", label: "Monthly salary range for video editors at agencies in Bangalore" },
                  { stat: "₹3K-8K", label: "Per video for freelance short-form editors with a strong reel" },
                  { stat: "₹80K+", label: "Monthly freelance potential with 10-12 retainer clients" },
                  { stat: "12 weeks", label: "Until you have a portfolio ready to show these numbers" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#dafd55] mb-4 whitespace-nowrap" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>{item.stat}</div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Job Roles Grid */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-4xl font-medium mb-10 text-center uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>Job roles you&apos;ll be qualified for</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { role: "Video Editor", salary: "₹25,000 - ₹45,000/mo", type: "Agency" },
                    { role: "Motion Graphics Editor", salary: "₹30,000 - ₹55,000/mo", type: "Agency" },
                    { role: "Social Media Editor", salary: "₹20,000 - ₹40,000/mo", type: "Brand-side" },
                    { role: "Content Creator Editor", salary: "₹25,000 - ₹50,000/mo", type: "Brand-side" },
                    { role: "Freelance Editor", salary: "₹40,000 - ₹1,20,000/mo", type: "Freelance - Agency" },
                    { role: "AI Video Producer", salary: "₹35,000 - ₹65,000/mo", type: "Freelance / Agency" },
                  ].map((job, idx) => (
                    <div key={idx} className="flex flex-col justify-between p-6 bg-white/5 rounded-xl border border-white/5 hover:border-[#dafd55]/30 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-white">{job.role}</h4>
                        <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded-md text-gray-300">{job.type}</span>
                      </div>
                      <div className="text-[#dafd55] font-medium">{job.salary}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing / CTA Section */}
          <section className="hidden pricingCtaSection flex-col justify-center items-center px-6 md:px-12 bg-[#dafd55] text-black relative z-10 min-h-[100vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]" aria-label="Register Now">
            <div className="max-w-[800px] mx-auto text-center relative z-10 w-full">
              <h2 className="text-4xl md:text-6xl lg:text-[5rem] tracking-tight font-medium mb-4 uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                Register Now
              </h2>
              <div className="mb-6" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none line-through decoration-[0.08em] decoration-black/80 opacity-70 mb-3">
                  ₹1299
                </div>
                <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none">
                  ₹99
                </div>
              </div>
              <p className="text-lg md:text-2xl font-medium mb-12" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Access the complete live workshop experience.
              </p>
              <a
                href={workshopPaymentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-black !text-white px-10 py-5 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                style={{ color: "#ffffff" }}
              >
                Register Now
              </a>
            </div>
          </section>

          <section className="workshopGsapSection flex flex-col bg-[#F7F5F4] min-h-[100vh] py-12 md:py-24 lg:py-32 relative z-10 shadow-2xl" id="faq" aria-label="Workshop FAQ">
            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex flex-col h-full justify-center">

              <div className="text-center mb-12">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-6 block">
                  FAQS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-black tracking-tight font-medium" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                  Frequently Asked Questions
                </h2>
              </div>

              <WorkshopFaqImage />

              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 max-w-[1200px] mx-auto w-full">
                {/* FAQ Accordion - Left Side */}
                <div className="flex-1">
                  {faqs.map((item, index) => (
                    <details className="group border-t border-black/20 [&:last-child]:border-b" key={item.question} open={item.open} name="workshop-faq">
                      <summary className="flex justify-between items-center py-6 md:py-8 cursor-pointer list-none outline-none [&::-webkit-details-marker]:hidden">
                        <div className="text-lg md:text-xl font-medium text-black pr-8" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                          {item.question}
                        </div>
                        <div className="text-black transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-8 text-black/70 text-sm md:text-base leading-relaxed pr-8 max-w-3xl" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Contact - Right Side */}
                <div className="lg:w-[320px] xl:w-[380px] flex-shrink-0 pt-6">
                  <h3 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
                    Didn&apos;t find the answer you were looking for?
                  </h3>
                  <a href="mailto:admin@88gb.in" className="inline-block text-[11px] font-bold tracking-[0.15em] text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                    SEND US AN MAIL
                  </a>
                </div>
              </div>

            </div>
          </section>

          <section className="longCourseApply workshopGsapSection relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]" id="apply" aria-label="Register for workshop">
            <div className="longCourseApplyInner">
              <h2 style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>Ready To Learn Video Editing Skills That Can Pay?</h2>
              <p>
                Join the 2-day live workshop and start building the practical editing and AI workflow
                confidence needed for better projects.
              </p>
              <a className="primaryCta programCta" href={workshopPaymentUrl} target="_blank" rel="noreferrer">
                <span className="primaryCtaText">Register Now</span>
              </a>
            </div>
          </section>

      <div className="newSite"><Footer /></div>
      <WorkshopStickyBanner />
    </main>
  );
}
