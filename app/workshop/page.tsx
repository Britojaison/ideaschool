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
import WorkshopDrawSvg from "./WorkshopDrawSvg";
import WorkshopCurriculumFlow from "./WorkshopCurriculumFlow";
import WorkshopToolsInteractive from "./WorkshopToolsInteractive";
import WorkshopLoadingScreen from "./WorkshopLoadingScreen";
import WorkshopAttendeesList from "./WorkshopAttendeesList";
import WorkshopFooter from "./WorkshopFooter";

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
      <WorkshopLoadingScreen />
      <WorkshopGsapAnimations />
      <WorkshopHeroModel3D />
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
            <p>
              Learn in-demand editing skills for brands, creators, agencies, and AI-powered video
              creation with Higgsfield AI.
            </p>
            <div className="longCourseHeroCtas">
              <a className="primaryCta programCta" href="#apply">
                <span className="primaryCtaText">{workshop.ctaLabel}</span>
              </a>
              <WorkshopDrawSvg />
            </div>
          </div>

          <h1 className="workshopHeroDisplay">
            <span>Master</span>
            <span className="workshopHeroDisplayAccent">High-Paying</span>
            <span>Video Editing</span>
            <span>in 2 Days</span>
          </h1>

        </div>
      </section>

      <section className="workshopServicesSection workshopGsapSection" id="services" aria-label="Our Services">
        <div className="servicesStickyContainer">
          <div className="servicesTextWrapper">
            <h2 className="servicesHeading servicesHeadingTop">
              WE ARE <span className="textGreen">GOOD</span> AT
            </h2>

          </div>

          <div className="servicesCenter">
            <div className="servicesCircleWrapper">
              <div className="servicesCircleTicks"></div>
              <span className="servicesLabel top">DEVELOPMENT</span>
              <span className="servicesLabel right">AI EDITING</span>
              <span className="servicesLabel bottom">MOTION GRAPHICS</span>
              <span className="servicesLabel left">DESIGN</span>
            </div>
          </div>

          <div className="servicesHexPattern">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
              <path d="M100 10 L180 50 L180 150 L100 190 L20 150 L20 50 Z" stroke="#dafd55" strokeWidth="2" strokeOpacity="0.3"/>
              <path d="M100 10 L180 50 L180 150 L100 190 L20 150 L20 50 Z" fill="#dafd55" fillOpacity="0.1" transform="scale(0.8) translate(25, 25)"/>
              <path d="M100 10 L180 50 L180 150 L100 190 L20 150 L20 50 Z" stroke="#dafd55" strokeWidth="2" strokeOpacity="0.1" transform="scale(0.6) translate(66.6, 66.6)"/>
            </svg>
          </div>

          <div className="servicesModelTarget" aria-hidden="true" />
        </div>
      </section>

      <section className="workshopVideoScrollSection workshopGsapSection" id="video-scroll" aria-label="Video Showcase">
        <div className="videoScrollStickyContainer">
          <div className="videoScrollCenter">
            <h2 className="videoScrollHeading">
              <span className="videoScrollHighlight">We create</span>{" "}
              <span className="videoScrollMediaContainer">
                <video 
                  src="/images/Brand Commercial/SunscreenAD_May22 V2.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="videoScrollVideo"
                />
              </span>
              videos for people, brands & digital products.
            </h2>
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
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1,
                width: "fit-content"
              }}
            >
              2-Day Session Plan
            </h2>
            <p 
              style={{ 
                background: "#dafd55", 
                color: "#000", 
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                padding: "10px 28px",
                margin: 0,
                fontWeight: 600,
                width: "fit-content",
                textAlign: "center"
              }}
            >
              Day 1 and Day 2 are ready for your final topic details when you add more content.
            </p>
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



      <WorkshopToolsInteractive />

      <section className="workshopAttendeesSection" id="attendees" aria-label="Who Should Attend" style={{ paddingTop: "120px", paddingBottom: "0", paddingLeft: "4vw", paddingRight: "4vw", minHeight: "auto", display: "block", backgroundColor: "#E6E6E6" }}>
        <WorkshopAttendeesList />
      </section>

      <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work" style={{ paddingTop: "80px" }}>
        <DetailsSectionMotion />
        <div className="longCourseSectionInner" style={{ marginBottom: "80px" }}>
          <div className="mentorSectionIntro" style={{ marginBottom: 0 }}>
            <span className="sectionPill">Our Work</span>
            <h2>Watch Some Of Our Recent Projects</h2>
            <p>Current local project videos are placed here. You can upload the final showcase videos later.</p>
          </div>
        </div>

        <div className="gallery-wrap">
          <div className="gallery gallery--bento gallery--switch" id="gallery-8">
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-pattern-1.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-image-12.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-image-8.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-pattern-2.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-image-4.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-image-3.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-pattern-3.jpg" alt="" />
            </div>
            <div className="gallery__item">
              <img src="https://assets.codepen.io/16327/portrait-image-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="workshopGsapSection flex flex-col lg:flex-row justify-center min-h-[100vh] relative p-0 overflow-hidden bg-white" aria-label="About the instructor">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full px-8 md:px-12 lg:pl-[max(4rem,calc(50vw-720px))] lg:pr-16 py-20 z-10" style={{ textAlign: "left" }}>
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
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1a1a1a] mb-6 uppercase leading-tight font-display max-w-2xl">
            Learn From a Working Creative Professional
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl">
            Instructor biography content can go here once you share it. For now, this follows the
            same mentor-card layout as the creative page and uses existing local photos.
          </p>
        </div>

        {/* Right Side: Full Bleed Image */}
        <div className="flex-1 relative w-full h-[60vh] lg:h-auto min-h-[100vh] m-0">
          {mentors.length > 0 && (
            <>
              <Image
                src={mentors[0].image}
                alt={mentors[0].name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Nameplate */}
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:min-w-[360px] bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-2xl z-10 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-black m-0 mb-2">{mentors[0].name}</h3>
                <p className="text-gray-600 m-0 text-base md:text-lg">{mentors[0].role}</p>
              </div>
            </>
          )}
        </div>
        
      </section>

      <section className="workshopTestimonialSection bg-[#F7F5F4] py-24 md:py-32 px-6 md:px-12" aria-label="Student testimonials">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-20 md:mb-32 max-w-5xl leading-tight text-black tracking-tight">
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
                    <p className="text-xl md:text-2xl font-medium leading-snug text-black max-w-md pr-6">
                      {testimonial.quote}
                    </p>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                      <path d="M10 8V12C10 14.2091 8.20914 16 6 16H5V14H6C7.10457 14 8 13.1046 8 12V11H4V5H10V8ZM20 8V12C20 14.2091 18.2091 16 16 16H15V14H16C17.1045 14 18 13.1046 18 12V11H14V5H20V8Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-16 md:mt-24">
                  <p className="font-bold text-black text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm mt-1">Workshop Attendee</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workshopGsapSection flex flex-col bg-[#F7F5F4] min-h-[100vh] py-24 md:py-32" id="faq" aria-label="Workshop FAQ">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex flex-col h-full justify-center">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-6 block">
              FAQS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-black tracking-tight font-medium">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="w-full aspect-[21/9] md:aspect-[24/9] relative rounded-2xl md:rounded-[32px] overflow-hidden mb-16 md:mb-24 shadow-sm border border-black/5">
            <Image
              src="/images/DSC01035.webp"
              alt="Workshop FAQ"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 max-w-[1200px] mx-auto w-full">
            {/* FAQ Accordion - Left Side */}
            <div className="flex-1">
              {faqs.map((item, index) => (
                <details className="group border-t border-black/20 [&:last-child]:border-b" key={item.question} open={item.open}>
                  <summary className="flex justify-between items-center py-6 md:py-8 cursor-pointer list-none outline-none [&::-webkit-details-marker]:hidden">
                    <div className="text-lg md:text-xl font-medium font-serif text-black pr-8">
                      {item.question}
                    </div>
                    <div className="text-black transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-8 text-black/70 text-sm md:text-base leading-relaxed pr-8 max-w-3xl">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Contact - Right Side */}
            <div className="lg:w-[320px] xl:w-[380px] flex-shrink-0 pt-6">
              <h3 className="text-3xl md:text-4xl font-medium font-serif text-black mb-8 leading-tight">
                Didn't find the answer you were looking for?
              </h3>
              <a href="#contact" className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                SEND US AN EMAIL
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="longCourseApply workshopGsapSection relative z-10 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]" id="apply" aria-label="Register for workshop">
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

      <WorkshopFooter />
        </div>
      </div>
    </main>
  );
}
