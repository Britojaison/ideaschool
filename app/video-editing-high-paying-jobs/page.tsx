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

      <section className="workshopAttendeesSection" id="attendees" aria-label="Who Should Attend" style={{ paddingTop: "clamp(36px, 5vw, 56px)", paddingBottom: "clamp(36px, 5vw, 56px)", paddingLeft: "4vw", paddingRight: "4vw", minHeight: "auto", display: "block", backgroundColor: "transparent" }}>
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

      <section className="longCourseDetails workshopWorkSection workshopGsapSection" id="work" aria-label="Our work" style={{ paddingTop: "clamp(36px, 5vw, 56px)", paddingBottom: "clamp(36px, 5vw, 56px)", backgroundColor: "var(--ink, #0a0a0c)", color: "var(--frost, #fbfaf2)" }}>
        <div className="longCourseSectionInner" style={{ marginBottom: "clamp(24px, 4vw, 36px)", display: "flex", justifyContent: "center" }}>
          <div className="mentorSectionIntro" style={{ marginBottom: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span className="sectionPill" style={{ background: "#DAFD55", color: "#000000", padding: "8px 20px", borderRadius: "99px", fontWeight: "800", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-stara), 'Stara', sans-serif", boxShadow: "none", border: "none" }}>Our Work</span>
            <h2 style={{ color: "var(--frost, #fbfaf2)", fontFamily: "var(--font-stara), 'Stara', sans-serif", fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)", textTransform: "uppercase", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Our Recent Projects</h2>
            <p style={{ color: "#a0aab2", maxWidth: "600px", fontSize: "17px", lineHeight: "1.55", fontFamily: "var(--font-stara), 'Stara', sans-serif" }}>Take a look at the caliber of high-performing video content you will learn to produce during this intensive workshop.</p>
          </div>
        </div>

        <WorkshopGalleryFlip videos={brandCommercials} />
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
