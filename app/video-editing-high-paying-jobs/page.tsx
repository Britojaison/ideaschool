import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DotField from "../DotField";
import HeroDotField from "../HeroDotField";
import VideoEditingGsapLenis from "./VideoEditingGsapLenis";
import ProgramNoticeCard from "./ProgramNoticeCard";
import ProofVideoCard from "./ProofVideoCard";
import ApplyHeroVideo from "./ApplyHeroVideo";
import WorkshopGalleryFlip from "../master-video-editing/WorkshopGalleryFlip";
import WorkshopAttendeesList from "../master-video-editing/WorkshopAttendeesList";

const cutPhaseCards = [
  {
    badge: "HOOK",
    title: "Hook Engineering",
    time: "00:00 - 00:03",
    description:
      "Cut dead frames before speech starts. Start in motion. Engineer visual intrigue in the first 90 frames so the viewer never swipes away.",
  },
  {
    badge: "PACE",
    title: "Retention Rhythm",
    time: "00:03 - 00:18",
    description:
      "Pacing isn't just fast cutting. It is rhythm, contrast, breath, and knowing when to let an emotional or visual beat land with weight.",
  },
  {
    badge: "RESET",
    title: "Attention Resets",
    time: "00:18 - 00:35",
    description:
      "Attention decays every 4 to 6 seconds. Insert micro-resets, focal shifts, sound drops, and unexpected angles to restore focus.",
  },
  {
    badge: "PAYOFF",
    title: "The Closing Payoff",
    time: "00:35 - 00:50",
    description:
      "Deliver the emotional or commercial conclusion cleanly. An edit that doesn't stick the landing wastes the entire retention curve.",
  },
];

const toolLogos = [
  {
    name: "Adobe Premiere Pro",
    image: "/images/adobepremierepro.webp",
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
    image: "/images/ps-logo-transparent.webp",
    width: 288,
    height: 288,
    className: "photoshop",
  },
  {
    name: "Captions.ai",
    image: "/images/captions_bright.webp",
    width: 800,
    height: 800,
    className: "captions",
  },
  {
    name: "OpusClip",
    image: "/images/opus_clip_bright.webp",
    width: 800,
    height: 800,
    className: "opus",
  },
  {
    name: "Higgsfield AI",
    image: "/images/higgsfield.webp",
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
    image: "/images/seedance-2.webp",
    width: 200,
    height: 200,
    className: "seedance",
  },
  {
    name: "InVideo AI",
    image: "/images/invideo_bright.webp",
    width: 800,
    height: 800,
    className: "invideo",
  },
  {
    name: "Audio Enhancement",
    image: "/images/Adobe_Audition_CC_icon_(2020).svg.webp",
    width: 800,
    height: 800,
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
    image: "/images/Parithi IdeaSchool (2).png",
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

const agencyPedigreeStats = [
  {
    value: "30+ YEARS",
    label: "Combined global agency experience",
  },
  {
    value: "WORKING CREATIVES",
    label: "Commercial practitioners",
  },
  {
    value: "HANDS-ON",
    label: "You edit during the session",
  },
  {
    value: "DIRECT REVIEW",
    label: "Mentor feedback on your work",
  },
];

const agencyPedigreeMentors = [
  {
    name: "Ajay",
    role: "Post Lead",
    image: "/images/mentor_AJAY.webp",
  },
  {
    name: "Arjun",
    role: "Creative Director",
    image: "/images/mentor_ARJUN.webp",
  },
  {
    name: "Chandru",
    role: "Color & Motion",
    image: "/images/mentor_CHANDRU.webp",
  },
  {
    name: "Paridhi",
    role: "Commercial Editor",
    image: "/images/mentor_PARIDHI.webp",
  },
];

const agencyBrandLogos = [
  {
    name: "Paytm",
    image: "/images/paytm.webp",
  },
  {
    name: "Moj",
    image: "/images/moj.webp",
  },
  {
    name: "Milky Mist",
    image: "/images/milky mist.webp",
  },
  {
    name: "JLL",
    image: "/images/JLL.webp",
  },
  {
    name: "Heritage",
    image: "/images/heritage.webp",
  },
  {
    name: "Finolex Pipes",
    image: "/images/finolex logo.webp",
  },
  {
    name: "Amazon",
    image: "/images/AMAZON.webp",
  },
  {
    name: "Netflix",
    image: "/images/netflix.webp",
  },
  {
    name: "POCO",
    image: "/images/POCO.webp",
  },
  {
    name: "Xiaomi",
    image: "/images/xioami.webp",
  },
  {
    name: "Paytm",
    image: "/images/paytm.webp",
  },
];

const workshopTimeline = [
  {
    time: "11:00 AM",
    duration: "15 min",
    mode: "Onboarding",
    title: "Get Set Up",
    description: "Welcome, workstation setup, raw footage ingest, and project brief unpacking.",
  },
  {
    time: "11:15 AM",
    duration: "60 min",
    mode: "Analysis",
    title: "Hook Engineering",
    description: "Analyzing visual hooks, drop-off curves, and first 3-second retention mechanics.",
  },
  {
    time: "12:15 PM",
    duration: "60 min",
    mode: "Hands-on",
    title: "Retention Editing",
    description: "Cutting for rhythm, micro-resets, narrative tension, and momentum management.",
  },
  {
    time: "1:15 PM",
    duration: "45 min",
    mode: "Reset",
    title: "Break",
    description: "Pause, reset, lunch, and discussions with the 88GB creative team.",
  },
  {
    time: "2:00 PM",
    duration: "45 min",
    mode: "Craft",
    title: "Design + Sound",
    description: "Layering sound effects, audio ducking, kinetic graphics, and visual hierarchy.",
  },
  {
    time: "2:45 PM",
    duration: "45 min",
    mode: "Framework",
    title: "Viral Edit Framework",
    description: "Dissecting high-performing commercial edits and organic viral timelines.",
  },
  {
    time: "3:30 PM",
    duration: "45 min",
    mode: "AI Workflow",
    title: "AI-Integrated Workflow",
    description: "Speeding up transcript cuts, motion tracking, cleanup, and ideation using AI tools.",
  },
  {
    time: "4:15 PM",
    duration: "45 min",
    mode: "Review",
    title: "Live Edit + Mentor Review",
    description: "Hands-on edit session followed by direct over-the-shoulder feedback from mentors.",
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
    role: "Entrepreneur",
    subRole: "Agency Founder · Digital Crew",
    name: "Gokul",
    description:
      "Runs a digital marketing agency handling content & campaigns for 15+ cafes in HSR Layout. Mastered retention editing frameworks to deliver scroll-stopping reels for clients.",
  },
  {
    src: "/images/proof-videos/student-feedback-3.mp4",
    poster: "/images/proof-videos/student-feedback-3.webp",
    role: "AI & Tech Creator",
    subRole: "Growth Marketer",
    name: "Manjunath",
    description:
      "Product marketer exploring generative video & AI workflows. Joined to bridge the gap between theoretical online courses and live, hands-on studio execution.",
  },
  {
    src: "/images/proof-videos/student-feedback-4.mp4",
    poster: "/images/proof-videos/student-feedback-4.webp",
    role: "Video Editor",
    subRole: "Freelance Creative Editor",
    name: "Balaji",
    description:
      "Independent video editor scaling his commercial client base. Upgraded his cutting rhythm, hook engineering, and editorial judgment through direct 1-on-1 mentor critiques.",
  },
  {
    src: "/images/proof-videos/student-feedback-5.mp4",
    poster: "/images/proof-videos/student-feedback-5.webp",
    role: "Content Creator",
    subRole: "Visual & Motion Designer",
    name: "Pooja",
    description:
      "Creator transitioning from basic graphic design to agency-grade Premiere Pro timelines and AI tools, creating high-converting short-form commercial videos.",
  },
  {
    src: "/images/proof-videos/student-feedback-6.mp4",
    poster: "/images/proof-videos/student-feedback-6.webp",
    role: "Photographer",
    subRole: "Lead · Candid Tales",
    name: "Kiran",
    description:
      "Professional wedding & commercial photographer expanding into cinematic short-form video, learning commercial pacing, audio layering, and motion direction.",
  },
  {
    src: "/images/proof-videos/student-feedback-7.mp4",
    poster: "/images/proof-videos/student-feedback-7.webp",
    role: "Entrepreneur",
    subRole: "Business Owner",
    name: "Hiren Mehta",
    description:
      "Modernizing a traditional family business into a digital-first brand, applying high-retention commercial frameworks to create viral video campaigns in-house.",
  },
];

const recognitionHighlights = [
  {
    title: "Exchange4Media",
    description: "Industry press coverage",
  },
  {
    title: "Commercial Brands",
    description: "Campaign recognition",
  },
];

const brandCommercials = [
  {
    id: "promo",
    title: "Podcast Editing Promo",
    src: "/images/edit_1.mp4",
    poster: "/images/edit_1_poster.webp",
    aspectRatio: "16/9",
    maxWidth: "900px",
    description: "Zoho Director Rajendran Dandapani on Leadership, AI, Education & Building for the Future.",
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
          <Link href="/" className="brandLink" aria-label="IDEA School home">
            <Image
              src="/assets/home/tumblr_c050d2fa4f5b9a2a88fa3f5196acd80f_1ccf7380_1280.webp"
              alt=""
              aria-hidden="true"
              width={34}
              height={34}
              className="navMark"
              priority
            />
            <Image
              src="/images/idea logo.webp"
              alt="Idea School"
              width={104}
              height={32}
              priority
              className="brandLogo"
            />
          </Link>
        </header>

        <div className="programHeroInner">
          <div className="programHeroCopy">
            <div className="programEyebrowRow">
              <span className="programBadgeNeon">
                <span className="programBadgeNeonDot" aria-hidden="true" />
                <span>OFFLINE WORKSHOP // HSR LAYOUT, BENGALURU</span>
              </span>
            </div>

            <h1>
              BUILD AN<br />
              <span className="programHeroTitleAccent">AGENCY STYLE</span><br />
              EDIT IN <span className="programHeroTitleDay">ONE DAY</span>
            </h1>
            <p>
              A 6-hour intensive workshop where you sit in the 88GB edit suite,
              unpack real client footage, cut high-retention commercial edits,
              and receive live 1-on-1 timeline critique.
            </p>

            <dl className="programStats">
              <div>
                <dt>Date &amp; Time</dt>
                <dd>
                  19 September 2026
                  <span className="statSub">11AM–5PM IST</span>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>
                  88GB HQ
                  <span className="statSub">HSR Layout, Bengaluru</span>
                </dd>
              </div>
              <div>
                <dt>Workshop Fee</dt>
                <dd className="statFee">₹499</dd>
              </div>
              <div>
                <dt>Seats</dt>
                <dd className="statSeats">25 seats per batch · 10 seats left</dd>
              </div>
            </dl>

            <div className="workshopCtaRow">
              <a className="primaryCta programCta" href="#enroll">
                <span className="primaryCtaText">BOOK MY SEAT — ₹499 →</span>
              </a>
              <span className="seatLimit">Strict 25-seat limit for 1-on-1 feedback</span>
            </div>
          </div>

          <aside className="programHeroCard" aria-label="Workshop preview">
            <ApplyHeroVideo />
            <p className="workshopVideoCaption">
              Watch: Why we&apos;re opening our commercial editing workflow to learners.
            </p>
          </aside>
        </div>

      </section>

      <section className="agencyPedigree" aria-label="Agency pedigree and direct access">
        <div className="agencyPedigreeInner">
          <div className="agencyPedigreeIntro">
            <p className="agencyPedigreeEyebrow">AGENCY PEDIGREE // DIRECT ACCESS</p>
            <h2>LEARN WITH PEOPLE WHO DO THIS FOR A LIVING</h2>
            <p>
              Not course creators reading slides. Active commercial directors,
              colorists, and post leads opening their actual production process.
            </p>
          </div>

          <div className="agencyPedigreeStats" aria-label="Workshop credibility highlights">
            {agencyPedigreeStats.map((stat) => (
              <article className="agencyPedigreeStat" key={stat.value}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="agencyMentorStrip" aria-label="Mentors in the room">
            <p>IN THE ROOM WITH YOU //</p>
            <div className="agencyMentorList">
              {agencyPedigreeMentors.map((mentor) => (
                <article className="agencyMentor" key={mentor.name}>
                  <div className="agencyMentorAvatar">
                    <Image
                      src={mentor.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="agencyMentorImage"
                    />
                  </div>
                  <div>
                    <h3>{mentor.name}</h3>
                    <p>{mentor.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="agencyBrands" aria-label="Brands shaping Indian culture">
            <p>TRUSTED BY BRANDS SHAPING INDIAN CULTURE</p>
            <div className="agencyBrandMarquee" aria-label="Trusted brand logos">
              <div className="agencyBrandTrack">
                <div className="agencyBrandGroup">
                  {agencyBrandLogos.map((brand, index) => (
                    <span className="agencyBrandLogo" key={`agency-brand-a-${brand.name}-${index}`}>
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        width={110}
                        height={44}
                        className="agencyBrandImage"
                      />
                    </span>
                  ))}
                </div>
                <div className="agencyBrandGroup" aria-hidden="true">
                  {agencyBrandLogos.map((brand, index) => (
                    <span className="agencyBrandLogo" key={`agency-brand-b-${brand.name}-${index}`}>
                      <Image
                        src={brand.image}
                        alt=""
                        width={110}
                        height={44}
                        className="agencyBrandImage"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="videoSection" aria-label="Idea School video" itemScope itemType="https://schema.org/VideoObject">
        <meta itemProp="name" content="Idea School Classroom and Studio Experience" />
        <meta itemProp="description" content="Inside the real offline studio sessions, hands-on guidance, and high-income editing workflows at Idea School." />
        <meta itemProp="thumbnailUrl" content="https://www.ideaschool.pro/images/hero.webp" />
        <meta itemProp="uploadDate" content="2024-05-01T00:00:00+05:30" />
        <meta itemProp="contentUrl" content="https://www.ideaschool.pro/images/HOME%20PAGE%20VIDEO.mp4" />
        <meta itemProp="duration" content="PT27S" />
        <div className="workshopImmersionInner">
          <div className="workshopImmersionIntro">
            <p className="workshopImmersionEyebrow">IN-PERSON IMMERSION // 88GB STUDIO</p>
            <h2>See what an Idea School workshop actually feels like</h2>
            <p>
              Not another tab open on your laptop. A room full of people watching,
              editing, questioning and getting better.
            </p>
          </div>
          <div className="workshopImmersionVideoFrame">
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
          </div>
          <div className="workshopImmersionFeatures">
            <div className="workshopImmersionFeature">
              <strong>Real Room</strong>
              <p>Physical creative studio, high-energy environment</p>
            </div>
            <div className="workshopImmersionFeature">
              <strong>Real Edits</strong>
              <p>Working on actual commercial campaign footage</p>
            </div>
            <div className="workshopImmersionFeature">
              <strong>Real Feedback</strong>
              <p>Live over-the-shoulder timeline critique</p>
            </div>
          </div>
        </div>
        <div className="videoSectionShade" aria-hidden="true" />
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
          <div className="curriculumIntro editingJudgementIntro">
            <p className="editingJudgementEyebrow">STRATEGIC EDITING JUDGEMENT // THE 4 CUT PHASES</p>
            <h2>
              KNOWING THE SOFTWARE
              <br />
              ISN&apos;T THE HARD PART
            </h2>
            <div className="editingJudgementPills" aria-label="Editing judgement topics">
              <span>Where to cut.</span>
              <span>What to remove.</span>
              <span>How to hold attention.</span>
              <span>Why an edit feels slow.</span>
            </div>
            <p className="editingJudgementStatement">THAT&apos;S THE LAYER THIS WORKSHOP TEACHES.</p>
          </div>

          <div className="editingTimelinePanel" aria-label="Commercial master timeline example">
            <div className="editingTimelineHeader">
              <span className="editingWindowDots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <p>88GB_COMMERCIAL_MASTER_v04.prproj</p>
              <time>00:00:18:14</time>
            </div>

            <div className="editingTimelineScale" aria-hidden="true">
              <span>00:00</span>
              <span>00:10</span>
              <span>00:20</span>
              <span>00:30</span>
              <span>00:40</span>
              <span>00:50</span>
            </div>

            <div className="editingTimelineTracks">
              <div className="editingTrackLabel">V2</div>
              <div className="editingTrack">
                <span className="editingClip clipHook">HOOK_OVERLAY</span>
                <span className="editingClip clipReset">MICRO_RESET_BROLL</span>
                <span className="editingClip clipPayoff">TITLE_PAYOFF</span>
              </div>
              <div className="editingTrackLabel">V1</div>
              <div className="editingTrack">
                <span className="editingClip clipCamera clipCamOne">A_CAM_01</span>
                <span className="editingClip clipCamera clipCamTwo">A_CAM_02</span>
                <span className="editingClip clipCamera clipCamThree">A_CAM_03</span>
                <span className="editingClip clipCamera clipCamFour">A_CAM_04</span>
              </div>
              <div className="editingTrackLabel">A1</div>
              <div className="editingTrack">
                <span className="editingClip clipDialogue">SYNC_DIALOGUE_MASTER (NOISE CLEANED)</span>
              </div>
              <div className="editingTrackLabel">A2</div>
              <div className="editingTrack">
                <span className="editingClip clipWhoosh">WHOOSH_HIT</span>
                <span className="editingClip clipRiser">RISER_DROP</span>
                <span className="editingClip clipBoom">SUB_BOOM_OUTRO</span>
              </div>
              <span className="editingPlayhead" aria-hidden="true" />
            </div>
          </div>

          <div className="editingPhaseGrid" aria-label="Four cut phases">
            {cutPhaseCards.map((phase) => (
              <article className="editingPhaseCard" key={phase.badge}>
                <div className="editingPhaseTopline">
                  <strong>{phase.badge}</strong>
                </div>
                <h3>{phase.title}</h3>
                <time>{phase.time}</time>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>

          <div className="editingJudgementCallout">
            <h3>SOFTWARE KNOWLEDGE ≠ EDITING JUDGEMENT.</h3>
            <p>Anyone can memorize keyboard shortcuts. What makes an editor hireable is knowing why to make the cut.</p>
          </div>
        </div>
      </section>

      <section className="workshopTimelineSection" aria-label="Workshop timeline from 11 AM to 5 PM">
        <div className="workshopTimelineInner">
          <div className="workshopTimelineIntro">
            <p className="workshopTimelineEyebrow">WORKSHOP TIMELINE // 11 AM - 5 PM</p>
            <h2>What happens inside the workshop</h2>
            <p>
              A focused studio day that moves from edit setup to live mentor review.
            </p>
          </div>

          <div className="workshopTimelineList">
            {workshopTimeline.map((item) => (
              <article className="workshopTimelineItem" key={`${item.time}-${item.title}`}>
                <div className="workshopTimelineCardTop">
                  <time>{item.time}</time>
                </div>
                <div className="workshopTimelineMeta">
                  <span className="workshopTimelineMode">{item.mode}</span>
                  <span className="workshopTimelineDuration">{item.duration}</span>
                </div>
                <div className="workshopTimelineCopy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="programAudience" aria-label="Who should attend">
        <div className="programAudienceInner">
          <div className="toolsBlock">
            <h2>Tools You Will Master</h2>
            <div className="toolsMarqueeRail" aria-label="Tools marquee">
              <div className="toolsMarqueeTrack">
                <div className="toolsMarqueeGroup">
                  {[...toolLogos, ...toolLogos].map((tool, index) => (
                    <div className="toolsMarqueeItem" key={`tool-g1-${tool.name}-${index}`}>
                      <span className={`toolLogo ${tool.className}`}>
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          width={tool.width}
                          height={tool.height}
                          className="toolLogoImage"
                        />
                      </span>
                      <span className="toolsMarqueeName">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="toolsMarqueeGroup" aria-hidden="true">
                  {[...toolLogos, ...toolLogos].map((tool, index) => (
                    <div className="toolsMarqueeItem" key={`tool-g2-${tool.name}-${index}`}>
                      <span className={`toolLogo ${tool.className}`}>
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          width={tool.width}
                          height={tool.height}
                          className="toolLogoImage"
                        />
                      </span>
                      <span className="toolsMarqueeName">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workshopAttendeesSection" id="attendees" aria-label="Who Should Attend" style={{ paddingTop: "clamp(36px, 5vw, 56px)", paddingBottom: "clamp(36px, 5vw, 56px)", paddingLeft: "60px", paddingRight: "60px", minHeight: "auto", display: "block", backgroundColor: "transparent" }}>
        <WorkshopAttendeesList theme="dark" hideDividers />
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

      <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work" style={{ paddingTop: "clamp(36px, 5vw, 56px)", paddingBottom: "clamp(36px, 5vw, 56px)", paddingLeft: "60px", paddingRight: "60px", backgroundColor: "var(--ink, #0a0a0c)", color: "var(--frost, #fbfaf2)" }}>
        <div className="longCourseSectionInner" style={{ marginBottom: "clamp(24px, 4vw, 36px)", display: "flex", justifyContent: "center" }}>
          <div className="mentorSectionIntro" style={{ marginBottom: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span className="sectionPill" style={{ background: "#DAFD55", color: "#000000", padding: "8px 20px", borderRadius: "99px", fontWeight: "800", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-stara), 'Stara', sans-serif", boxShadow: "none", border: "none" }}>Our Work</span>
            <h2 style={{ color: "var(--frost, #fbfaf2)", fontFamily: "var(--font-stara), 'Stara', sans-serif", fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)", textTransform: "uppercase", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Recent Projects</h2>
            <p style={{ color: "#a0aab2", maxWidth: "600px", fontSize: "17px", lineHeight: "1.55", fontFamily: "var(--font-stara), 'Stara', sans-serif" }}>Take a look at the caliber of high-performing video content you will learn to produce during this intensive workshop.</p>
          </div>
        </div>

        <WorkshopGalleryFlip videos={brandCommercials} />
      </section>

      <section className="workshopComparisonSection" aria-label="Workshop comparison">
        <div className="workshopComparisonInner">
          <h2 className="workshopComparisonHeading">That&apos;s what live feedback changes.</h2>
          <div className="workshopComparisonTableWrap">
            <table className="workshopComparisonTable">
              <thead>
                <tr>
                  <th className="workshopCompColFactor">Decision Factor</th>
                  <th className="workshopCompColHighlight">Idea School workshop</th>
                  <th className="workshopCompColAlt">Tutorials</th>
                  <th className="workshopCompColAlt">Typical course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="workshopCompFactor">Feedback on your own edit</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> Live, 1-on-1 mentor review on your actual timeline</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> None — you edit completely in isolation</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Automated quizzes or community thread</td>
                </tr>
                <tr>
                  <td className="workshopCompFactor">Working agency editors</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> Active commercial directors, colorists, and post leads</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> Solo YouTubers with varying commercial standards</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Career course creators</td>
                </tr>
                <tr>
                  <td className="workshopCompFactor">Agency workflow</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> Real multi-track project structures and client briefs</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> Fragmented 5-minute software tricks</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Artificial classroom exercises</td>
                </tr>
                <tr>
                  <td className="workshopCompFactor">Live questions</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> Ask anything in real time as you run into friction</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> Unanswered comment section</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Slow forum replies or Discord channels</td>
                </tr>
                <tr>
                  <td className="workshopCompFactor">Finish an edit</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> You complete and polish an agency-level cut by 5 PM</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> Endless unfinished practice files</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Weeks of half-watched video modules</td>
                </tr>
                <tr>
                  <td className="workshopCompFactor">In-person review</td>
                  <td className="workshopCompHighlight"><span className="workshopCompCheck">✔</span> Real room, real monitors, over-the-shoulder feedback</td>
                  <td className="workshopCompAlt"><span className="workshopCompX">✕</span> Zero in-person connection</td>
                  <td className="workshopCompAlt"><span className="workshopCompDash">—</span> Zero in-person connection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="programProof" aria-label="Client feedback">
        <div className="programProofInner">
          <div className="proofIntro">
            <h2>HEAR IT FROM PEOPLE WHO&apos;VE BEEN IN THE ROOM</h2>
            <p>
              Unrehearsed feedback from editors and creators who attended
              previous Idea School sessions.
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
              <article className="proofVideoItem" key={video.src}>
                <div className="proofVideoFrame">
                  <ProofVideoCard
                    src={video.src}
                    poster={video.poster}
                    index={index}
                    name={video.name}
                    role={video.role}
                    description={video.description}
                  />
                </div>
                <div className="proofVideoMeta">
                  <div className="proofVideoTagRow">
                    <span className="proofVideoRoleBadge">{video.role}</span>
                    {video.subRole && (
                      <span className="proofVideoSubRole">{video.subRole}</span>
                    )}
                  </div>
                  <h3 className="proofVideoStudentName">{video.name}</h3>
                  <p className="proofVideoStudentBio">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workshopReadyCta" aria-label="Reserve your workshop seat">
        <div className="workshopReadyCtaDots" aria-hidden="true">
          <span className="workshopReadyCtaDot workshopReadyCtaDotActive" />
          <span className="workshopReadyCtaDot" />
          <span className="workshopReadyCtaDot" />
          <span className="workshopReadyCtaDot" />
          <span className="workshopReadyCtaDot" />
        </div>
        <div className="workshopReadyCtaInner">
          <div className="workshopReadyCtaCopy">
            <strong>READY TO EDIT AT THIS LEVEL?</strong>
            <p>Build your own agency-grade commercial edit with direct mentor critique this Saturday.</p>
          </div>
          <a
            className="workshopReadyCtaBtn"
            href={razorpayPaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reserve your video editing workshop seat with Razorpay"
          >
            Reserve your workshop seat — ₹499 →
          </a>
        </div>
      </section>

      <section className="industryRecognition" aria-label="Industry recognition, press and awards">
        <div className="industryRecognitionInner">
          <div className="industryRecognitionIntro">
            <p className="industryRecognitionEyebrow">INDUSTRY RECOGNITION // PRESS &amp; AWARDS</p>
            <h2>THE WORK HAS BEEN RECOGNISED TOO.</h2>
            <p>Press coverage, commercial campaigns, and creative industry recognition.</p>
          </div>

          <div className="industryRecognitionPanel">
            <div className="recognitionImageFrame">
              <Image
                src="/images/IMG_7839.jpg"
                alt="88GB team with Exchange4Media Indian Marketing Awards trophies"
                fill
                sizes="(max-width: 1100px) 100vw, 680px"
                className="recognitionImage"
              />
            </div>

            <div className="recognitionContent">
              <span className="recognitionPill">Industry Recognition</span>
              <h3>88GB Commercial Creative Recognition</h3>
              <p>
                Our work has been featured across creative industry publications including
                Exchange4Media, with commercial campaigns recognized for creative storytelling
                and visual craft.
              </p>
              <div className="recognitionHighlights">
                {recognitionHighlights.map((item) => (
                  <div className="recognitionHighlight" key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="qualificationSection" aria-label="Who should attend">
        <div className="qualificationInner">
          <div className="qualificationHeader">
            <p className="qualificationEyebrow">HONEST QUALIFICATION // ACTIVE EDITORS ONLY</p>
            <h2>BOOK A SEAT IF • SKIP THIS IF</h2>
            <p className="qualificationSubhead">This workshop is intentionally designed for active editors who want direct feedback, not casual passive viewers.</p>
          </div>
          
          <div className="qualificationGrid">
            <div className="qualificationCard qualificationRecommended">
              <div className="qualificationCardHeader">
                <span className="qualificationPill qualificationPillRecommended"><span className="qualificationPillIcon">✔</span> RECOMMENDED</span>
                <h3>BOOK A SEAT IF:</h3>
              </div>
              <ul className="qualificationList">
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> Tutorials haven&apos;t improved your edits enough and you feel stuck on the timeline.</li>
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> You understand the basics but struggle to finish edits confidently and decisively.</li>
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> You want stronger freelance, creator, or agency editing skills that clients pay for.</li>
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> You want to build stronger portfolio pieces that stand out from generic template cuts.</li>
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> You learn significantly faster by doing with live mentors beside you.</li>
                <li><span className="qualificationIcon qualificationIconCheck">✔</span> You want direct, honest feedback on your editing choices before releasing work.</li>
              </ul>
            </div>

            <div className="qualificationCard qualificationNotFit">
              <div className="qualificationCardHeader">
                <span className="qualificationPill qualificationPillNotFit"><span className="qualificationPillIcon">✕</span> NOT A FIT</span>
                <h3>SKIP THIS IF:</h3>
              </div>
              <ul className="qualificationList">
                <li><span className="qualificationIcon qualificationIconX">✕</span> You want passive recorded content that sits in your bookmark folder.</li>
                <li><span className="qualificationIcon qualificationIconX">✕</span> You don&apos;t want to open software and edit during the session.</li>
                <li><span className="qualificationIcon qualificationIconX">✕</span> You cannot attend in person at 88GB HQ in HSR Layout, Bengaluru.</li>
                <li><span className="qualificationIcon qualificationIconX">✕</span> You are only looking for keyboard shortcuts rather than editorial thinking.</li>
                <li><span className="qualificationIcon qualificationIconX">✕</span> You expect a single day to make you an expert without continuous practice.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="thunderVaultSection" aria-label="The Thunder Vault">
        <div className="thunderVaultInner">
          <div className="thunderVaultHeader">
            <div className="thunderVaultEyebrowRow">
              <span className="thunderVaultPill">Bonus Inclusion //</span>
              <span className="thunderVaultPillAlt">Lifetime Access</span>
              <span className="thunderVaultPillAlt">₹5,000+ value</span>
            </div>
            <h2>THE THUNDER VAULT</h2>
            <p className="thunderVaultSubhead">A preview of the resources and workflows that support the workshop. Build high-value editing skills used in paid freelance and agency work. Take home the exact swipe files, case studies, project templates, and AI workflows used inside 88GB.</p>
          </div>

          <div className="vaultModulesHeader">
            <p>6 CORE VAULT MODULES INCLUDED // ZERO EXTRA COST</p>
          </div>
          
          <div className="vaultModulesGrid">
            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">01</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>Brief Breakdowns</h3>
              <p>Real agency client briefs with director notes, target pacing goals, and footage breakdown guides.</p>
            </div>

            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">02</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>Edit Decision Case Studies</h3>
              <p>Frame-by-frame dissection of why cuts were made, what was discarded, and how pacing was tuned.</p>
            </div>

            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">03</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>Live Edit Workflow Pack</h3>
              <p>Standardized agency bin structures, keyboard shortcut mappings, and timeline organization templates.</p>
            </div>

            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">04</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>Hook + Retention Swipe File</h3>
              <p>Proven retention hook structures categorized by genre, tone, and campaign objective.</p>
            </div>

            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">05</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>AI Workflow Kit</h3>
              <p>Curated AI tool stacks and prompting workflows for fast transcription, rotoscoping, and b-roll ideation.</p>
            </div>

            <div className="vaultModuleCard">
              <div className="vaultModuleCardTop">
                <span className="vaultModuleNumber">06</span>
                <span className="vaultModuleAccess">INSTANT ACCESS</span>
              </div>
              <h3>Templates + Editing Resources</h3>
              <p>Handcrafted color LUTs, sound design SFX beds, title graphics presets, and timeline review checklists.</p>
            </div>
          </div>

          <div className="vaultBanner">
            <div className="vaultBannerLeft">
              <span className="vaultBannerLabel">INCLUDED FREE WITH REGISTRATION</span>
              <p>You receive immediate access after attending the workshop.</p>
            </div>
            <div className="vaultBannerRight">
              <span className="vaultBannerValue">WORTH ₹5,000+</span>
              <span className="vaultBannerCta">FREE FOR ATTENDEES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="freeAssetsSection" aria-label="Free assets kit worth ₹5000">
        <div className="freeAssetsInner">
          <div className="freeAssetsHeader">
            <div className="freeAssetsEyebrowRow">
              <span className="freeAssetsPill">Bonus Inclusion</span>
              <span className="freeAssetsPillAlt">Free With Registration</span>
              <span className="freeAssetsPillAlt">₹5,000+ Value</span>
            </div>
            <h2 className="freeAssetsHeading">Free Assets Kit</h2>
            <p className="freeAssetsSubhead">Every attendee walks out with a production-ready asset pack — the exact tools working editors use on paid campaigns.</p>
          </div>

          <div className="freeAssetsGrid">
            <div className="freeAssetCard">
              <span className="freeAssetIcon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </span>
              <div className="freeAssetCardBody">
                <strong>Sound Effects Pack</strong>
                <p>Studio-grade SFX beds and transitions for commercial edits</p>
              </div>
              <span className="freeAssetBadge">Instant Access</span>
            </div>
            <div className="freeAssetCard">
              <span className="freeAssetIcon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              </span>
              <div className="freeAssetCardBody">
                <strong>Motion Presets</strong>
                <p>Pre-built animation presets for titles, kinetics and product reveals</p>
              </div>
              <span className="freeAssetBadge">Instant Access</span>
            </div>
            <div className="freeAssetCard">
              <span className="freeAssetIcon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <div className="freeAssetCardBody">
                <strong>Transitions Pack</strong>
                <p>Agency-grade cut transitions used in real brand commercial work</p>
              </div>
              <span className="freeAssetBadge">Instant Access</span>
            </div>
            <div className="freeAssetCard">
              <span className="freeAssetIcon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7" />
                  <line x1="9" y1="20" x2="15" y2="20" />
                  <line x1="12" y1="4" x2="12" y2="20" />
                </svg>
              </span>
              <div className="freeAssetCardBody">
                <strong>Fonts &amp; Font Pairs</strong>
                <p>Curated type pairings for social, broadcast and digital campaigns</p>
              </div>
              <span className="freeAssetBadge">Instant Access</span>
            </div>
            <div className="freeAssetCard freeAssetCardFeatured">
              <span className="freeAssetIcon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <div className="freeAssetCardBody">
                <strong>VFX Bundle</strong>
                <p>Light leaks, glitch overlays, flares and impact elements for high-energy cuts</p>
              </div>
              <span className="freeAssetBadge">Instant Access</span>
            </div>
          </div>

          <div className="freeAssetsBanner">
            <div className="freeAssetsBannerLeft">
              <span className="freeAssetsBannerLabel">Included free with registration</span>
              <p>You receive immediate access after attending the workshop.</p>
            </div>
            <div className="freeAssetsBannerRight">
              <span className="freeAssetsBannerValue">Worth ₹5,000+</span>
              <span className="freeAssetsBannerCta">Free for attendees</span>
            </div>
          </div>
        </div>
      </section>

      <section className="workshopVenueSection" id="venue" aria-label="Workshop venue and location">
        <div className="workshopVenueInner">
          <div className="workshopVenueHeader">
            <p className="workshopVenueEyebrow">WORKSHOP VENUE // IN-PERSON EDIT STUDIO</p>
            <h2>WHERE THE WORK HAPPENS</h2>
            <p className="workshopVenueSubhead">
              Physical, hands-on workshop held inside IDEA School at 88GB Creative Agency HQ in HSR Layout, Bengaluru. Bring your laptop and your edit drive—everything else is set up for you.
            </p>
          </div>

          <div className="workshopVenueGrid">
            {/* Left Column: Studio Card */}
            <div className="workshopVenueCard">
              <div className="workshopVenueCardHeader">
                <span className="workshopVenueBadge">STUDIO HQ</span>
                <h3 className="workshopVenueTitle">88GB HQ · IDEA SCHOOL</h3>
                <p className="workshopVenueAddress">HSR Layout, Bengaluru, Karnataka</p>
              </div>

              <div className="workshopVenueDivider" />

              <div className="workshopVenueDetails">
                <div className="workshopVenueDetailItem">
                  <span className="workshopVenueDetailLabel">DATE &amp; TIME //</span>
                  <p className="workshopVenueDetailValue">Saturday, 19 September 2026 · 11 AM – 5 PM IST</p>
                </div>

                <div className="workshopVenueDetailItem">
                  <span className="workshopVenueDetailLabel">VENUE TYPE //</span>
                  <p className="workshopVenueDetailValue">Working agency edit bays &amp; interactive workshop floor</p>
                </div>

                <div className="workshopVenueDetailItem">
                  <span className="workshopVenueDetailLabel">TRANSIT &amp; ACCESS //</span>
                  <p className="workshopVenueDetailValue">
                    Easy cab/auto drop-off via 27th Main HSR &amp; Outer Ring Road. On-premise parking available.
                  </p>
                </div>
              </div>

              <div className="workshopVenuePerks">
                <div className="workshopVenuePerk">
                  <span className="workshopVenuePerkIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#DAFD55">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                  <span>Dedicated Power at Every Seat</span>
                </div>
                <div className="workshopVenuePerk">
                  <span className="workshopVenuePerkIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <circle cx="12" cy="20" r="1" fill="#DAFD55" />
                    </svg>
                  </span>
                  <span>High-Speed Gigabit Fiber</span>
                </div>
                <div className="workshopVenuePerk">
                  <span className="workshopVenuePerkIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span>Live 1-on-1 Mentor Access</span>
                </div>
                <div className="workshopVenuePerk">
                  <span className="workshopVenuePerkIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DAFD55" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  </span>
                  <span>Beverages &amp; Snacks Included</span>
                </div>
              </div>

              <div className="workshopVenueActions">
                <a
                  href="https://maps.google.com/?q=IDEA+School,+1658,+27th+Main+Rd,+Sector+2,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workshopVenueMapsBtn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Open in Google Maps ↗</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=IDEA+School,+1658,+27th+Main+Rd,+Sector+2,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workshopVenueDirectionsBtn"
                >
                  <span>Get Directions →</span>
                </a>
              </div>
            </div>

            {/* Right Column: Live Map Card */}
            <div className="workshopVenueMapCard">
              <div className="workshopVenueMapTop">
                <div className="workshopVenueMapLive">
                  <span className="workshopVenueMapDot" />
                  <span>LIVE MAP // HSR LAYOUT, BENGALURU</span>
                </div>
                <a
                  href="https://maps.google.com/?q=IDEA+School,+1658,+27th+Main+Rd,+Sector+2,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workshopVenueMapLargerLink"
                >
                  View Larger Map ↗
                </a>
              </div>
              <div className="workshopVenueMapContainer">
                <iframe
                  title="IDEA School 88GB HQ Location Map"
                  src="https://maps.google.com/maps?q=IDEA%20School%2C%201658%2C%2027th%20Main%20Rd%2C%20Parangi%20Palaya%2C%20Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
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
        BOOK MY SEAT — ₹499 →
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
