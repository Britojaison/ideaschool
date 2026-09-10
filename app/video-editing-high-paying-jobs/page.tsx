import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DotField from "../DotField";
import HeroDotField from "../HeroDotField";
import VideoEditingGsapLenis from "./VideoEditingGsapLenis";
import MobileMenu from "../MobileMenu";
import CurriculumAccordion from "./CurriculumAccordion";
import ProgramNoticeCard from "./ProgramNoticeCard";
import ProofVideoCard from "./ProofVideoCard";
import ApplyHeroVideo from "./ApplyHeroVideo";
import WorkshopGalleryFlip from "../master-video-editing/WorkshopGalleryFlip";
import WorkshopAttendeesList from "../master-video-editing/WorkshopAttendeesList";

const curriculum = [
  {
    title: "[01] Hook Engineering",
    tools: "Retention Editing",
    description:
      "Create attention-grabbing hooks in the first 3 seconds. Master the hook frameworks used by top creators and implement powerful curiosity and retention strategies.",
    images: ["/images/work1.webp", "/images/work2.webp"],
  },
  {
    title: "[02] Retention Editing",
    tools: "Pacing & Storytelling",
    description:
      "Keep viewers engaged till the end. Master pacing, cuts, visual storytelling, and motion graphics. Learn retention techniques behind viral content and AI-powered workflows with Higgsfield AI.",
    images: ["/images/arjun.webp", "/images/359586b8b594b653726bbda2883862b8a820e37b.webp"],
  },
  {
    title: "[03] Typography & Sound Design",
    tools: "Audio Enhancement",
    description:
      "Enhance viewer experience with animated captions and engaging typography. Master sound effects, music, and seamless audio transitions.",
    images: ["/images/automotive.webp", "/images/ce04d496a79858c7cfcdeeb68c3992c3b57447a2.webp"],
  },
  {
    title: "[04] Viral Edit Framework",
    tools: "Premiere Pro, After Effects",
    description:
      "Structure videos for maximum watch time. Breakdown successful viral edits and create content optimized for Reels, Shorts & Social Media.",
    images: ["/images/bf2b72489ff720a0100b6ab10c6e86a70fbc6c43.webp", "/images/c988e78cfada134657e808cfb29a0523e125dde8.webp"],
  }
];

const toolLogos = [
  {
    name: "Adobe Premiere Pro",
    image: "/images/adobepremierepro.svg",
    width: 800,
    height: 800,
    className: "adobe",
  },
  {
    name: "Adobe After Effects",
    image: "/images/Ae_logo.webp",
    width: 960,
    height: 936,
    className: "adobe",
  },
  {
    name: "Adobe Photoshop",
    image: "/images/ps-logo-transparent.png",
    width: 288,
    height: 288,
    className: "photoshop",
  },
  {
    name: "Captions.ai",
    image: "/images/captions_bright.png",
    width: 800,
    height: 800,
    className: "captions",
  },
  {
    name: "OpusClip",
    image: "/images/opus_clip_bright.png",
    width: 800,
    height: 800,
    className: "opus",
  },
  {
    name: "Higgsfield AI",
    image: "/images/higgsfield.png",
    width: 600,
    height: 600,
    className: "higgsfield",
  },
  {
    name: "HeyGen",
    image: "/images/heygen.webp",
    width: 240,
    height: 240,
    className: "heygen",
  },
  {
    name: "Seedance 2.0",
    image: "/images/seedance-2.png",
    width: 200,
    height: 200,
    className: "seedance",
  },
  {
    name: "InVideo AI",
    image: "/images/invideo_bright.png",
    width: 800,
    height: 800,
    className: "invideo",
  },
  {
    name: "Audio Enhancement",
    image: "/images/image 1.svg",
    width: 1254,
    height: 1254,
    className: "audio",
  },
];

const razorpayPaymentLink =
  process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK ?? "https://rzp.io/rzp/XiQ2PDi";

const instructors = [
  {
    name: "Dhananjayan . S",
    role: "CEO, 88GB",
    experience: "12+ Yrs Exp",
    bio: "Built 88GB from the ground up, directing high-scale visual productions and viral brand campaigns.",
    image: "/images/mentor_ARJUN.webp",
  },
  {
    name: "Parithi",
    role: "Head of Design & Motion Graphics, 88GB",
    experience: "9+ Yrs Exp",
    bio: "Specialised in Video, Motion, CGI & AI Creative Workflows, blending storytelling, visual craft and technology.",
    image: "/images/mentor_PARIDHI.webp",
  },
  {
    name: "Ajay Karthik",
    role: "Video Editor, 88GB",
    experience: "5+ Yrs Exp",
    bio: "Visual storyteller behind fast-paced reels, podcast trailers, and scroll-stopping motion graphics.",
    image: "/images/mentor_AJAY.webp",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Senior Creative Strategist, 88GB",
    experience: "5+ Yrs Exp",
    bio: "Creative strategist behind viral narrative frameworks and high-converting commercial storytelling.",
    image: "/images/mentor_CHANDRU.webp",
  },
];

const clientStories = [
  {
    name: "Balaji",
    quote:
      "The offline guidance was incredible, solving every doubt personally. Much better than any online program",
    image: "/images/B1_BALAJI.webp",
  },
  {
    name: "Manjunath",
    quote:
      "This workshop filled the market gap for hands-on AI training perfectly. Loved the interactive vibe.",
    image: "/images/B1_MANJUNATH.webp",
  },
  {
    name: "Hiren Metha",
    quote:
      "The workshop gave me the tools to turn my traditional family business into a modern brand.",
    image: "/images/B1_metha.webp",
  },
  {
    name: " ",
    quote:
      "Exploring tools I never knew existed. This workshop was worth my entire day.",
    image: "/images/B1_QUOTE4.webp",
  },
  {
    name: "",
    quote:
      "Skipping my travel plans for this offline training was worth it !. Excellent creative guidance ideas.",
    image: "/images/B1_QUOTE5.webp",
  },
  {
    name: "",
    quote:
      "Valuable hands-on experience you cannot get online. My first offline marketing event was simply great",
    image: "/images/B1_QUOTE6.webp",
  },
];

const proofVideos = [
  {
    src: "/images/proof-videos/student-feedback-2.mp4",
    poster: "/images/proof-videos/student-feedback-2.webp",
  },
  {
    src: "/images/proof-videos/student-feedback-3.mp4",
    poster: "/images/proof-videos/student-feedback-3.webp",
  },
  {
    src: "/images/proof-videos/student-feedback-4.mp4",
    poster: "/images/proof-videos/student-feedback-4.webp",
  },
  {
    src: "/images/proof-videos/student-feedback-5.mp4",
    poster: "/images/proof-videos/student-feedback-5.webp",
  },
  {
    src: "/images/proof-videos/student-feedback-6.mp4",
    poster: "/images/proof-videos/student-feedback-6.webp",
  },
  {
    src: "/images/proof-videos/student-feedback-7.mp4",
    poster: "/images/proof-videos/student-feedback-7.webp",
  },
];

const brandCommercials = [
  {
    id: "promo",
    title: "Editing Promo",
    src: "/images/edit_1.mp4",
    poster: "/images/edit_1_poster.webp",
    aspectRatio: "16/9",
    maxWidth: "900px",
    description: "High-retention promo displaying storytelling, dynamic pacing, and visual effects.",
    duration: "PT1M44S",
    uploadDate: "2024-05-01T00:00:00+05:30",
  },
  {
    id: "zaman",
    title: "Case Study",
    src: "/images/workshop/zaman_case_study.mp4",
    poster: "/images/workshop/zaman_case_study_poster.webp",
    aspectRatio: "9/16",
    maxWidth: "380px",
    description: "Vertical ad campaign project showcasing engaging hooks and retention edits.",
    duration: "PT56S",
    uploadDate: "2024-05-01T00:00:00+05:30",
  },
  {
    id: "luis",
    title: "Creative Reel",
    src: "/images/workshop/luis_reel.mp4",
    poster: "/images/workshop/luis_reel_poster.webp",
    aspectRatio: "9/16",
    maxWidth: "380px",
    description: "Vertical creative edit demonstrating advanced motion graphics and sound design.",
    duration: "PT36S",
    uploadDate: "2024-05-01T00:00:00+05:30",
  },
  {
    id: "sunscreen",
    title: "Sunscreen",
    src: "/images/Brand Commercial/SunscreenAD_May22 V2.mp4",
    poster: "/images/Brand Commercial/SunscreenAD_May22 V2.webp",
    aspectRatio: "16/9",
    maxWidth: "900px",
    description: "Cinematic brand commercial ad film showcasing product storytelling, color grading, and commercial pacing.",
    duration: "PT40S",
    uploadDate: "2024-05-22T00:00:00+05:30",
  },
  {
    id: "campa",
    title: "Campa",
    src: "/images/Brand Commercial/CampaAD_Seedance_May22.mp4",
    poster: "/images/Brand Commercial/CampaAD_Seedance_May22.webp",
    aspectRatio: "16/9",
    maxWidth: "900px",
    description: "100% Made with AI commercial showcasing next-generation visual production and generative workflows.",
    duration: "PT33S",
    uploadDate: "2024-05-22T00:00:00+05:30",
  },
];

const applyFaqs = [
  {
    question: "Do I need prior experience?",
    answer:
      "No prior experience is needed. Idea School mentors designed this workshop for everyone—from complete beginners to experienced creators looking to upgrade their skills and master high-paying, agency-grade editing workflows.",
    open: true,
  },
  {
    question: "What do I need to bring?",
    answer:
      "Just bring your laptop, charger, and a notebook if you like taking notes. Idea School provides all project footage, AI toolkits, presets, and asset packs. Don't have a laptop? No worries—Idea School will provide a dedicated workstation for you at our studio.",
  },
  {
    question: "Will there be a recording?",
    answer:
      "This is an immersive, hands-on offline studio experience where the full value comes from live practice and real-time mentor feedback. Idea School will provide all post-session recap materials, project templates, and reference toolkits to every registered participant.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Upon completing the workshop, Idea School will award you an official Certificate of Completion recognized across top creator agencies and media studios.",
  },
  {
    question: "Why should I join the Idea School workshop instead of learning from YouTube?",
    answer:
      "YouTube only gives you scattered, passive tutorials without guidance. At Idea School, you learn directly from active agency directors with 1-on-1 feedback, live client project edits, high-retention storytelling formulas, and real-world commercial workflows.",
  },
  {
    question: "How many seats are available?",
    answer:
      "Idea School strictly caps each offline batch at 25 seats to ensure our mentors can provide dedicated 1-on-1 guidance and personalized project reviews for every student.",
  },
];

export const metadata: Metadata = {
  title: "Master High-Paying Video Editing | Idea School",
  description:
    "Master High-Paying Video Editing In 1 Day. Learn High-Income Video Editing Skills That Are in Demand.",
  alternates: {
    canonical: "https://www.ideaschool.pro/video-editing-high-paying-jobs",
  },
  openGraph: {
    title: "Master High-Paying Video Editing | Idea School",
    description:
      "Master High-Paying Video Editing In 1 Day. Learn High-Income Video Editing Skills That Are in Demand.",
    url: "https://www.ideaschool.pro/video-editing-high-paying-jobs",
    siteName: "Idea School",
    images: [
      {
        url: "https://www.ideaschool.pro/images/idea%20logo.webp",
        width: 1200,
        height: 630,
        alt: "Idea School - Master High-Paying Video Editing",
      },
    ],
    videos: [
      {
        url: "https://www.ideaschool.pro/images/edit_1.mp4",
        secureUrl: "https://www.ideaschool.pro/images/edit_1.mp4",
        type: "video/mp4",
        width: 1920,
        height: 1080,
      },
      {
        url: "https://www.ideaschool.pro/images/Brand%20Commercial/SunscreenAD_May22%20V2.mp4",
        secureUrl: "https://www.ideaschool.pro/images/Brand%20Commercial/SunscreenAD_May22%20V2.mp4",
        type: "video/mp4",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master High-Paying Video Editing | Idea School",
    description:
      "Master High-Paying Video Editing In 1 Day. Learn High-Income Video Editing Skills That Are in Demand.",
    images: ["https://www.ideaschool.pro/images/idea%20logo.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.ideaschool.pro/video-editing-high-paying-jobs/#article",
      "headline": "Video Editing High Paying Jobs",
      "description":
        "Master High-Paying Video Editing In 1 Day. Learn High-Income Video Editing Skills That Are in Demand.",
      "author": {
        "@type": "Organization",
        "name": "Idea School",
        "url": "https://www.ideaschool.pro"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Idea School",
        "url": "https://www.ideaschool.pro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ideaschool.pro/images/idea%20logo.webp"
        }
      },
      "mainEntityOfPage": "https://www.ideaschool.pro/video-editing-high-paying-jobs",
      "datePublished": "2026-09-08T00:00:00+05:30",
      "dateModified": "2026-09-09T00:00:00+05:30",
      "image": "https://www.ideaschool.pro/images/idea%20logo.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.ideaschool.pro/video-editing-high-paying-jobs/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ideaschool.pro"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Video Editing High Paying Jobs",
          "item": "https://www.ideaschool.pro/video-editing-high-paying-jobs"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ideaschool.pro/video-editing-high-paying-jobs/#faq",
      "mainEntity": applyFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.ideaschool.pro/video-editing-high-paying-jobs/#video-hero-preview",
      "name": "Agency-Level Video Editing Workshop Preview",
      "description": "Preview of the 1-day offline intensive video editing workshop by Idea School in Bengaluru.",
      "thumbnailUrl": [
        "https://www.ideaschool.pro/images/edit_1_poster.webp"
      ],
      "uploadDate": "2024-05-01T00:00:00+05:30",
      "duration": "PT54S",
      "contentUrl": "https://www.ideaschool.pro/images/video_edit1.mp4",
      "embedUrl": "https://www.ideaschool.pro/video-editing-high-paying-jobs"
    },
    ...brandCommercials.map((video) => ({
      "@type": "VideoObject",
      "@id": `https://www.ideaschool.pro/video-editing-high-paying-jobs/#video-${video.id}`,
      "name": `${video.title} - Video Editing Project Showcase`,
      "description": video.description,
      "thumbnailUrl": [
        `https://www.ideaschool.pro${video.poster}`
      ],
      "uploadDate": video.uploadDate,
      "duration": video.duration,
      "contentUrl": `https://www.ideaschool.pro${encodeURI(video.src)}`,
      "embedUrl": "https://www.ideaschool.pro/video-editing-high-paying-jobs",
      "publisher": {
        "@type": "Organization",
        "name": "Idea School",
        "url": "https://www.ideaschool.pro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ideaschool.pro/images/idea%20logo.webp"
        }
      }
    })),
    {
      "@type": "VideoObject",
      "@id": "https://www.ideaschool.pro/video-editing-high-paying-jobs/#video-classroom-experience",
      "name": "Idea School Classroom and Studio Experience",
      "description": "Inside the real offline studio sessions, hands-on guidance, and high-income editing workflows at Idea School.",
      "thumbnailUrl": [
        "https://www.ideaschool.pro/images/hero.webp"
      ],
      "uploadDate": "2024-05-01T00:00:00+05:30",
      "duration": "PT27S",
      "contentUrl": "https://www.ideaschool.pro/images/HOME%20PAGE%20VIDEO.mp4",
      "embedUrl": "https://www.ideaschool.pro/video-editing-high-paying-jobs"
    }
  ]
};

export default function ApplyPage() {
  return (
    <main className="applyPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />
      <VideoEditingGsapLenis />
      <section className="programHero" aria-label="AI-powered ad film workshop">
        <div className="programHeroMedia">
          <HeroDotField />
        </div>
        <div className="programHeroShade" />

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
          <a className="headerCta" href="#enroll">
            <span className="headerCtaText">Book your class</span>
          </a>
          <MobileMenu />
        </header>

        <div className="programHeroInner">
          <div className="programHeroCopy">
            <div className="programEyebrowRow">
              <span className="programPill">Offline workshop</span>
              <span className="programBadgeNeon">
                <span className="programBadgeNeonDot" aria-hidden="true" />
                <span>Agency-Level Video Editing Training Led By Industry Experts</span>
              </span>
            </div>

            <h1>
              Master <span className="programHeroTitleAccent">High-Paying</span><br />
              <span className="programHeroTitleAccent">Video Editing</span> In <span className="programHeroTitleDay">1 Day</span>
            </h1>

            <a className="primaryCta programCta" href="#enroll">
              <span className="primaryCtaText">Get early bird pass now</span>
            </a>
            <span className="seatLimit">Limited to 25 seats Only</span>
          </div>

          <aside className="programHeroCard" aria-label="Workshop preview">
            <ApplyHeroVideo />

          </aside>

          <dl className="programStats">
            <div>
              <dt>Batch Date</dt>
              <dd>September 19</dd>
            </div>
            <div>
              <dt>Learning Mode</dt>
              <dd>Offline </dd>
            </div>
            <div>
              <dt>Full Day Session</dt>
              <dd>Hands-on</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>88GB HQ, HSR Layout, Bengaluru</dd>
            </div>
          </dl>
        </div>

      </section>

      <section className="programCurriculum" aria-label="What you will learn">
        <div className="programCurriculumDots">
          <DotField
            dotRadius={2.8}
            dotSpacing={16}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(168, 85, 247, 0.52)"
            gradientTo="rgba(180, 151, 207, 0.38)"
            glowColor="rgba(168, 85, 247, 0.18)"
          />
        </div>
        <div className="programCurriculumInner">
          <div className="curriculumIntro">
            <h2>What You Will Learn</h2>
            <p>A structured, hands-on journey from creative strategy to cinematic AI output.</p>
          </div>

          <CurriculumAccordion items={curriculum} />
        </div>
      </section>

      <section className="videoSection" aria-label="Idea School video" itemScope itemType="https://schema.org/VideoObject">
        <meta itemProp="name" content="Idea School Classroom and Studio Experience" />
        <meta itemProp="description" content="Inside the real offline studio sessions, hands-on guidance, and high-income editing workflows at Idea School." />
        <meta itemProp="thumbnailUrl" content="https://www.ideaschool.pro/images/hero.webp" />
        <meta itemProp="uploadDate" content="2024-05-01T00:00:00+05:30" />
        <meta itemProp="contentUrl" content="https://www.ideaschool.pro/images/HOME%20PAGE%20VIDEO.mp4" />
        <meta itemProp="duration" content="PT27S" />
        <video
          id="applyHomePageVideo"
          className="videoPoster"
          title="Idea School Classroom and Studio Experience"
          poster="/images/hero.webp"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback"
          preload="metadata"
          aria-label="Idea School classroom video"
        >
          <source src="/images/HOME PAGE VIDEO.mp4" type="video/mp4" />
        </video>
        <div className="videoSectionShade" aria-hidden="true" />
      </section>

      <section className="programAudience" aria-label="Who should attend">
        <div className="programAudienceInner">
          <div className="toolsBlock">
            <h2>Tools You Will Master</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'clamp(28px, 3.5vw, 44px) clamp(16px, 2.5vw, 36px)', maxWidth: '980px', margin: '0 auto' }}>
              {toolLogos.map((tool) => (
                <div key={tool.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'clamp(84px, 10vw, 115px)', flexShrink: 0 }}>
                  <span className={`toolLogo ${tool.className}`} style={{ width: '100%', marginBottom: '12px' }}>
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={tool.width}
                      height={tool.height}
                      className="toolLogoImage"
                    />
                  </span>
                  <span style={{ color: '#fff', fontSize: 'clamp(12px, 1.2vw, 16px)', textAlign: 'center', fontWeight: '600', lineHeight: 1.3 }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="workshopAttendeesSection" id="attendees" aria-label="Who Should Attend" style={{ paddingTop: "clamp(56px, 8vw, 84px)", paddingBottom: "0", paddingLeft: "4vw", paddingRight: "4vw", minHeight: "auto", display: "block", backgroundColor: "transparent" }}>
        <WorkshopAttendeesList theme="dark" />
      </section>

      <section className="programOffer" aria-label="Early bird workshop offer">
        <ProgramNoticeCard paymentLink={razorpayPaymentLink} />
      </section>

      <section className="programInstructor" aria-label="Instructor and client feedback">
        <div className="programInstructorInner">
          <h2>Meet the Instructors</h2>
          <div className="instructorGrid">
            {instructors.map((instructor, index) => (
              <article className="instructorCard" key={`${instructor.name}-${index}`}>
                <div className="instructorImageWrap" style={{ position: "relative" }}>
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 900px) 44vw, 234px"
                    className="instructorImage"
                  />
                </div>
                <div className="instructorContent">
                  <span className="instructorRole">{instructor.role}</span>
                  <div className="instructorNameRow">
                    <h3 className="instructorName">{instructor.name}</h3>
                    <span className="instructorExpBadge">{instructor.experience}</span>
                  </div>
                  <p className="instructorBio">{instructor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work" style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#000000", color: "#ffffff" }}>
        <div className="longCourseSectionInner" style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
          <div className="mentorSectionIntro" style={{ marginBottom: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span className="sectionPill" style={{ background: "#dafd55", color: "#000", padding: "8px 16px", borderRadius: "99px", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", marginBottom: "16px" }}>Our Work</span>
            <h2 style={{ color: "#ffffff", fontFamily: "'Bebas Neue', var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase", margin: "0 0 16px" }}>Our Recent Projects</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", fontSize: "18px", lineHeight: "1.5" }}>Take a look at the caliber of high-performing video content you will learn to produce during this intensive workshop.</p>
          </div>
        </div>

        <WorkshopGalleryFlip videos={brandCommercials} />
      </section>

      <section className="programProof" aria-label="Client feedback">
        <div className="programProofInner">
          <div className="proofIntro">
            <h2>What Our Students Have to Say?</h2>
            <p>
              We&apos;ve already transformed hundreds of creators. Here&apos;s a
              glimpse of what past participants built.
            </p>
          </div>

          <div className="proofRail" aria-label="Testimonials">
            <div className="proofTrack">
              {[...clientStories, ...clientStories].map((story, index) => (
                <article
                  className="proofCard"
                  key={`${story.name}-${index}`}
                  aria-hidden={index >= clientStories.length}
                >
                  <div className="proofPerson" style={{ position: "relative" }}>
                    <Image
                      src={story.image}
                      alt=""
                      fill
                      sizes="150px"
                      className="proofPersonImage"
                    />
                  </div>
                  <div className="proofQuote">
                    <span aria-hidden="true">&ldquo;</span>
                    <p>{story.quote}</p>
                    <strong>{story.name}</strong>
                    <small>Student</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="proofVideoRail" aria-label="Student video feedback">
            {proofVideos.map((video, index) => (
              <div className="proofVideoFrame" key={video.src}>
                <ProofVideoCard src={video.src} poster={video.poster} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programFaqContact" aria-label="FAQ and application form">
        <div className="programFaqInner">
          <h2>Frequently Asked Questions</h2>
          <div className="programFaqList">
            {applyFaqs.map((item) => (
              <details className="programFaqItem" key={item.question} open={item.open}>
                <summary>
                  <span>?</span>
                  <strong>Q: {item.question}</strong>
                </summary>
                {item.answer ? <p>A: {item.answer}</p> : null}
              </details>
            ))}
          </div>
        </div>
        {/* 
        <section className="contactSection" id="contact" aria-label="Contact Idea School">
          <div className="contactInner">
            <div className="contactCopy">
              <h2>
                Ready to start your 
                <br />
                creative journey?
                <br />
                Contact us.
              </h2>
              <p>
                Join Idea School and start learning editing, content creation, and
                AI tools through real projects and hands-on sessions.
              </p>
            </div>

            <form className="applyForm" id="apply-form">
              <div className="formRow">
                <label>
                  <span>First Name</span>
                  <input type="text" name="firstName" autoComplete="given-name" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" name="lastName" autoComplete="family-name" />
                </label>
              </div>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
              <label>
                <span>Message (optional)</span>
                <textarea name="message" rows={4} />
              </label>
              <button type="submit">Get early bird pass now</button>
              <p>Limited seats available for the upcoming batch.</p>
            </form>
          </div>
        </section> */}

      </section>

      <a
        className="videoEditingFloatingButton"
        href={razorpayPaymentLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book your video editing workshop seat with Razorpay"
      >
        Book seat now
      </a>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>

          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <Link href="/#program">Program</Link>
              <Link href="/creative-editing-course">Creative Editing Program</Link>
              <a href="#apply-form">Get early bird pass now</a>
            </div>
            <div>
              <h2>Company</h2>
              <Link href="/#about">About</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact : 8850774428</Link>
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
    </main>
  );
}
