import Image from "next/image";
import Link from "next/link";
import DotField from "../DotField";
import HeroDotField from "../HeroDotField";
import ScrollTextReveal from "../ScrollTextReveal";
import LiquidVideoMuteButton from "../LiquidVideoMuteButton";
import CurriculumAccordion from "./CurriculumAccordion";
import ProgramNoticeCard from "./ProgramNoticeCard";
import ProgramCountdown from "./ProgramCountdown";

const curriculum = [
  {
    title: "[01] Introduction & Creative Direction",
    tools: "Overview, Strategy",
    description:
      "Understand AI-powered filmmaking fundamentals. Develop your own distinctive visual voice and learn why creative direction is the most valuable skill in the AI era.",
    images: ["/images/work1.png", "/images/work2.png"],
  },
  {
    title: "[02] Model Photography with AI",
    tools: "Flux Kontext",
    description:
      "Generate ultra-realistic model visuals for AD campaigns. Learn consistent character creation, lighting control, and brand-fit styling.",
    images: ["/images/arjun.jpg", "/images/359586b8b594b653726bbda2883862b8a820e37b.jpg"],
  },
  {
    title: "[03] Studio Photography",
    tools: "Nano Banana",
    description:
      "Recreate professional studio environments entirely with AI. Control product lighting, shadow, and backgrounds to produce polished commercial-grade imagery.",
    images: ["/images/automotive.jpg", "/images/ce04d496a79858c7cfcdeeb68c3992c3b57447a2.jpg"],
  },
  {
    title: "[04] Cinematic Visuals",
    tools: "Cinema Studio, Seedance",
    description:
      "Elevate stills into motion-ready frames. Master cinematic color grading, depth of field, lens effects, and scene composition.",
    images: ["/images/bf2b72489ff720a0100b6ab10c6e86a70fbc6c43.jpg", "/images/c988e78cfada134657e808cfb29a0523e125dde8.jpg"],
  },
  {
    title: "[05] Prompt & Cinematic Control",
    tools: "Cinema Studio, Prompt Craft",
    description:
      "Decode advanced prompt engineering frameworks that unlock cinematic control. Learn the exact sentence structures that separate amateur AI output from agency-level work.",
    images: ["/images/hero.jpg", "/images/3d74c9843424c9aa30c3f33fc28bd08f861c5aec.jpg"],
  },
  {
    title: "[06] Seedance + Final Act Showdown",
    tools: "Seedance, Google Veo",
    description:
      "Produce your mini AD film, then watch the live showdown of the best AI creative work from the group - your debut as an AI filmmaker.",
    images: ["/images/9bf47fe908af3a71635ab3e3d95e681fc3b09fe4.jpg", "/images/2556835a1b7b46f9e856961edea7b9f43a023941.jpg"],
  },
];

const toolLogos = [
  {
    name: "Adobe cloud",
    image: "/images/tool1.png",
    width: 1254,
    height: 1254,
    className: "adobe",
  },
  {
    name: "Cinema Studio",
    image: "/images/tool2.png",
    width: 1254,
    height: 1254,
    className: "Cinema Studio",
  },
  {
    name: "Kontext",
    image: "/images/tool3.png",
    width: 1254,
    height: 1254,
    className: "kontext",
  },
  {
    name: "veo 3",
    image: "/images/tool4.png",
    width: 1254,
    height: 1254,
    className: "veo 3",
  },
  {
    name: "nano banana",
    image: "/images/tool5.png",
    width: 1254,
    height: 1254,
    className: "nano banana",
  },
  {
    name: "higgsfield",
    image: "/images/tool6.png",
    width: 1254,
    height: 1254,
    className: "higgsfield",
  },

];

const attendeeImage = (fileName: string) => `/images/${fileName}`;
const razorpayPaymentLink =
  process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK ?? "https://rzp.io/rzp/NwcRrEel";

const attendees = [
  {
    title: "Entrepreneurs & Brand Owners",
    description:
      "Create agency-quality AD content for your own brand at a fraction of traditional production cost.",
    image: attendeeImage("whoEntrepreneurs & Brand Owners.png"),
  },
  {
    title: "Marketing Professionals",
    description:
      "Produce stunning campaign visuals in-house and drastically cut production budgets without cutting quality.",
    image: attendeeImage("whoMarketing Professionals.png"),
  },
  {
    title: "Students & Career Switchers",
    description:
      "Build a portfolio of AI filmmaking work and position yourself for one of the most in-demand creative roles.",
    image: attendeeImage("whoStudents & Career Switchers.png"),
  },
  {
    title: "Photographers & Videographers",
    description:
      "Expand your offer with AI-generated visuals and cinematic AD films - without a full production crew.",
    image: attendeeImage("whoPhotographers & Videographers.png"),
  },
  {
    title: "Graphic Designers & Artists",
    description:
      "Turn your creative instincts into high-value, motion-ready AD content for brands and agencies.",
    image: attendeeImage("whoGraphic Designers & Artists.png"),
  },
  {
    title: "Content Creators",
    description:
      "Level up from reels to professional-grade AD films that attract paid brand collaborations.",
    image: attendeeImage("whoContent Creators.png"),
  },

];

const instructors = [
  { name: "Dhananjayan . S", role: "CEO, 88GB", image: "/images/mentor_ARJUN.png" },
  { name: "Elamparidhi", role: "Head of Design, 88GB", image: "/images/mentor_PARIDHI.png" },
  { name: "Ajay Karthik", role: "Video Editor, 88GB", image: "/images/mentor_AJAY.png" },
  { name: "Chandrasoodeshwar", role: "Senior Creative Strategist, 88GB", image: "/images/mentor_CHANDRU.png" },
];

const clientStories = [
  {
    name: "Balaji",
    quote:
      "The offline guidance was incredible, solving every doubt personally. Much better than any online program",
    image: "/images/B1_BALAJI.png",
  },
  {
    name: "Manjunath",
    quote:
      "This workshop filled the market gap for hands-on AI training perfectly. Loved the interactive vibe.",
    image: "/images/B1_MANJUNATH.png",
  },
  {
    name: "Hiren Metha",
    quote:
      "The workshop gave me the tools to turn my traditional family business into a modern brand.",
    image: "/images/B1_metha.png",
  },
  {
    name: " ",
    quote:
      "Exploring tools I never knew existed. This workshop was worth my entire day.",
    image: "/images/B1_QUOTE4.png",
  },
  {
    name: "",
    quote:
      "Skipping my travel plans for this offline training was worth it !. Excellent creative guidance ideas.",
    image: "/images/B1_QUOTE5.png",
  },
  {
    name: "",
    quote:
      "Valuable hands-on experience you cannot get online. My first offline marketing event was simply great",
    image: "/images/B1_QUOTE6.png",
  },
];

const proofVideos = [
  "1C_pNZX6H0VqsNgEKLIeJ3mS5TMMKn5nY",
  "18wmbXnEyi3KrOVZtPN5NeT5BB6fpNE47",
  "183j_z6tVKFkZEuOuanpgOrBhC4hw6snS",
  "18x8d4xKYCut7ZJKfmvOaUu8FUel40a6z",
  "1rtT_rTPyuLeS9Aa4iArGyNsDD7w9SfPa",
  "1O0-xtjtqIx07OMwinc6IABldk4b6SS84",
  "1rjiIPU1G5RIK7dOS02ydymeGBoHDChGB",
];

const applyFaqs = [
  {
    question: "Do I need any prior AI or design experience?",
    answer:
      "No experience required. The workshop is designed to take you from zero to producing professional-quality AI AD films in a single day.",
    open: true,
  },
  {
    question: "What do I need to bring?",
    answer:
      "Bring your laptop, charger, and a notebook if you like taking notes. We will guide you through the tools, prompts, assets, and workflow during the session.",
  },
  {
    question: "Is this workshop only for filmmakers?",
    answer:
      "No. It is useful for designers, editors, marketers, creators, entrepreneurs, students, and anyone who wants to create premium AI-powered ad content.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Seats are limited, so confirmed registrations are non-refundable. If you are unable to attend, please contact us before the workshop, and we will help you with the best available option.",
  },
  {
    question: "Will there be a recording?",
    answer:
      "This workshop is designed to be a live, hands-on experience, and the full value comes from participating in person. Post-session resources and recap materials will be shared with all registered participants.",
  },
  {
    question: "How many seats are available?",
    answer:
      "Only 30 seats are available for this batch to keep the session practical, focused, and easy for participants to get individual guidance.",
  },
];

export default function ApplyPage() {
  return (
    <main className="applyPage">
      <ScrollTextReveal />
      <section className="programHero" aria-label="AI-powered ad film workshop">
        <div className="programHeroMedia">
          <HeroDotField />
        </div>
        <div className="programHeroShade" />

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

          <a className="headerCta" href="#enroll">
            <span className="headerCtaText">Book your class</span>
          </a>
        </header>

        <div className="programHeroInner">
          <div className="programHeroCopy">
            <div className="programEyebrowRow">
              <span className="programPill">Offline workshop</span>
              <span className="programTag">Agency-Level Ad Film Training Led By Industry Experts</span>
            </div>

            <h1>
              Master{" "}
              <span className="programHeroTitleAccent">
                AI-Powered AD Film Making
              </span>{" "}
              In <span className="programHeroTitleDay">1 Day</span>
            </h1>
            <p>
              Master ultra-realistic AI visuals &middot; Cinematic storytelling &middot;
              Commercial grade AD production
            </p>
            <a className="primaryCta programCta" href="#enroll">
              <span className="primaryCtaText">Get early bird pass now</span>
            </a>
            <span className="seatLimit">Limited to 25 seats Only</span>
          </div>

          <aside className="programHeroCard" aria-label="Workshop preview">
            <ProgramCountdown targetDate="2026-05-23T00:00:00+05:30" />
            <div className="programHeroImageWrap" style={{ position: "relative" }}>
              <video
                id="apply-hero-video"
                className="programHeroVideo"
                src="/images/prajesh-optimized.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/prajesh-poster.jpg"
                aria-label="AI ad filmmaking workshop preview"
              />
              <LiquidVideoMuteButton targetId="apply-hero-video" />
            </div>

          </aside>

          <dl className="programStats">
            <div>
              <dt>Batch Date</dt>
              <dd>May 23</dd>
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

      <section className="programAudience" aria-label="Who should attend">
        <div className="programAudienceInner">
          <div className="toolsBlock">
            <h2>Tools You Will Master</h2>
            <div className="toolsRow">
              {toolLogos.map((tool) => (
                <span className={`toolLogo ${tool.className}`} key={tool.name}>
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={tool.width}
                    height={tool.height}
                    className="toolLogoImage"
                  />
                </span>
              ))}
            </div>
          </div>

          <h2 className="audienceTitle">Who Should Attend</h2>

          <div className="audienceGrid">
            {attendees.map((attendee) => (
              <article className="audienceItem" key={attendee.title}>
                <div className="audienceImageWrap" style={{ position: "relative" }}>
                  <Image
                    src={attendee.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1180px) 30vw, 355px"
                    className="audienceImage"
                  />
                </div>
                <div className="audienceCopy">
                  <h3>{attendee.title}</h3>
                  <p>{attendee.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
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
                <p>{instructor.role}</p>
                <h3>{instructor.name}</h3>
              </article>
            ))}
          </div>
        </div>
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
            {proofVideos.map((videoId, index) => (
              <div className="proofVideoFrame" key={videoId}>
                <iframe
                  className="proofVideo"
                  src={`https://drive.google.com/file/d/${videoId}/preview`}
                  title={`Student video feedback ${index + 1}`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
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

      <div className="programBatchStrip" aria-label="Workshop batch announcement">
        <span className="programBatchBadge">New Batch</span>
        <p>AI-POWERED AD FILM MAKING</p>
        <a className="programBatchCta" href="#enroll">
          Book seat now
        </a>
      </div>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>

          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <Link href="/#training">Training</Link>
              <Link href="/#training">Workshops</Link>
              <a href="#apply-form">Get early bird pass now</a>
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
