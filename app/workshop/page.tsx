import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import DetailsSectionMotion from "../creative-editing-course/DetailsSectionMotion";
import OutcomeCards from "../creative-editing-course/OutcomeCards";
import ScrollTextReveal from "../ScrollTextReveal";
import TiltedCard from "../TiltedCard";
import WorkshopGsapAnimations from "./WorkshopGsapAnimations";
import WorkshopHeroModel3D from "./WorkshopHeroModel3D";
import WorkshopDrawSvg from "./WorkshopDrawSvg";
import WorkshopCurriculumFlow from "./WorkshopCurriculumFlow";
import WorkshopToolsInteractive from "./WorkshopToolsInteractive";
import WorkshopLoadingScreen from "./WorkshopLoadingScreen";
import WorkshopAttendeesList from "./WorkshopAttendeesList";
import WorkshopFooter from "./WorkshopFooter";
import WorkshopInstructorImage from "./WorkshopInstructorImage";
import WorkshopFaqImage from "./WorkshopFaqImage";
import WorkshopGalleryFlip from "./WorkshopGalleryFlip";

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
  ctaLabel: "Register Now",
};

const workshopPaymentUrl = "https://rzp.io/rzp/L5kyyQlg";

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
      <Script id="workshop-meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '918701714590381');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=918701714590381&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <WorkshopLoadingScreen />
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
          <a className="headerCta" href={workshopPaymentUrl} target="_blank" rel="noreferrer">
            <span className="headerCtaText">Register Now</span>
          </a>
        </header>

        <div className="longCourseHeroInner">
          <h1 className="workshopHeroDisplay">
            <span>Master</span>
            <span className="workshopHeroDisplayAccent">High-Paying</span>
            <span>Video Editing</span>
            <span>in 2 Days</span>
          </h1>

          <div className="longCourseHeroCopy">
            <p>
              Learn in-demand editing skills for brands, creators, agencies, and AI-powered video
              creation with Higgsfield AI.
            </p>
            <dl className="workshopHeroMeta" aria-label="Workshop details">
              <div>
                <dt>Date</dt>
                <dd>19th-20th-21st June 2026</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>06:30 PM - 9 PM</dd>
              </div>
              <div>
                <dt>Live</dt>
                <dd>On Zoom</dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>English</dd>
              </div>
            </dl>
            
            <div className="longCourseHeroCtas">
              <div className="hidden lg:block">
                <WorkshopDrawSvg />
              </div>
            </div>

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
              <article className="courseWeek" key={day.week}>
                <div className="courseWeekMeta">
                  <span>{day.week}</span>
                  <h3>{day.module}</h3>
                </div>
                <div className="courseWeekGrid">
                  {day.sections.map((section, idx) => (
                    <div key={idx}>
                      <strong>{section.title}</strong>
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
              With over a decade of experience in video editing, motion graphics, and visual storytelling, Elamparidhi has collaborated with top-tier brands, creators, and agencies to produce high-performing content that drives results.
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-20 lg:mb-32 max-w-5xl leading-tight text-black tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
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
                    <p className="text-xl md:text-2xl font-medium leading-snug text-black max-w-md pr-6" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {testimonial.quote}
                    </p>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                      <path d="M10 8V12C10 14.2091 8.20914 16 6 16H5V14H6C7.10457 14 8 13.1046 8 12V11H4V5H10V8ZM20 8V12C20 14.2091 18.2091 16 16 16H15V14H16C17.1045 14 18 13.1046 18 12V11H14V5H20V8Z" fill="black"/>
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
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#dafd55] mb-6 block">Career Potential</span>
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
              { stat: "₹25K–55K", label: "Monthly salary range for video editors at agencies in Bangalore" },
              { stat: "₹3K–8K", label: "Per video for freelance short-form editors with a strong reel" },
              { stat: "₹80K+", label: "Monthly freelance potential with 10–12 retainer clients" },
              { stat: "12 weeks", label: "Until you have a portfolio ready to show these numbers" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#dafd55] mb-4" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>{item.stat}</div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Job Roles Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-4xl font-medium mb-10 text-center uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>Job roles you&apos;ll be qualified for</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: "Video Editor", salary: "₹25,000 – ₹45,000/mo", type: "Agency" },
                { role: "Motion Graphics Editor", salary: "₹30,000 – ₹55,000/mo", type: "Agency" },
                { role: "Social Media Editor", salary: "₹20,000 – ₹40,000/mo", type: "Brand-side" },
                { role: "Content Creator Editor", salary: "₹25,000 – ₹50,000/mo", type: "Brand-side" },
                { role: "Freelance Editor", salary: "₹40,000 – ₹1,20,000/mo", type: "Freelance - Agency" },
                { role: "AI Video Producer", salary: "₹35,000 – ₹65,000/mo", type: "Freelance / Agency" },
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
      <section className="pricingCtaSection flex flex-col justify-center items-center px-6 md:px-12 bg-[#dafd55] text-black relative z-10 min-h-[100vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]" aria-label="Register Now">
        <div className="max-w-[800px] mx-auto text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] tracking-tight font-medium mb-4 uppercase" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
            Register Now
          </h2>
          <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none mb-6" style={{ fontFamily: "'Bebas Neue', var(--font-heading)" }}>
            ₹99
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
                <details className="group border-t border-black/20 [&:last-child]:border-b" key={item.question} open={item.open}>
                  <summary className="flex justify-between items-center py-6 md:py-8 cursor-pointer list-none outline-none [&::-webkit-details-marker]:hidden">
                    <div className="text-lg md:text-xl font-medium text-black pr-8" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {item.question}
                    </div>
                    <div className="text-black transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <a href="#contact" className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                SEND US AN EMAIL
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

      <WorkshopFooter />
        </div>
      </div>
    </main>
  );
}
