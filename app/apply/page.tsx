import Image from "next/image";
import Link from "next/link";
import CurriculumAccordion from "./CurriculumAccordion";
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
    name: "Nano Banana",
    image: "/images/nano transparent.png",
    width: 388,
    height: 106,
    className: "nano",
  },
  {
    name: "FLUX.1 Kontext",
    image: "/images/flux transparent.png",
    width: 1024,
    height: 1024,
    className: "flux",
  },
  {
    name: "Cinema Studio",
    image: "/images/cinema studio transparent.png",
    width: 1920,
    height: 1080,
    className: "cinema",
  },
  {
    name: "Seedance 2",
    image: "/images/seedance transparent.png",
    width: 275,
    height: 183,
    className: "seedance",
  },
  {
    name: "Veo 3.1",
    image: "/images/veo transparent.png",
    width: 1500,
    height: 1263,
    className: "veo",
  },
];

const attendees = [
  {
    title: "Photographers & Videographers",
    description:
      "Expand your offer with AI-generated visuals and cinematic AD films - without a full production crew.",
    image: "/images/Photographers & Videographers.png",
  },
  {
    title: "Graphic Designers & Artists",
    description:
      "Turn your creative instincts into high-value, motion-ready AD content for brands and agencies.",
    image: "/images/Graphic Designers & Artists.png",
  },
  {
    title: "Content Creators",
    description:
      "Level up from reels to professional-grade AD films that attract paid brand collaborations.",
    image: "/images/Content Creators.png",
  },
  {
    title: "Marketing Professionals",
    description:
      "Produce stunning campaign visuals in-house and drastically cut production budgets without cutting quality.",
    image: "/images/Marketing Professionals.png",
  },
  {
    title: "Entrepreneurs & Brand Owners",
    description:
      "Create agency-quality AD content for your own brand at a fraction of traditional production cost.",
    image: "/images/Entrepreneurs & Brand Owners.png",
  },
  {
    title: "Students & Career Switchers",
    description:
      "Build a portfolio of AI filmmaking work and position yourself for one of the most in-demand creative roles.",
    image: "/images/Students & Career Switchers.png",
  },
];

const instructors = [
  { name: "Dhananjayan . S", role: "CEO, 88GB", image: "/images/vipin.png" },
  { name: "Dhananjayan . S", role: "CEO, 88GB", image: "/images/parithi.png" },
  { name: "Dhananjayan . S", role: "CEO, 88GB", image: "/images/pujeeth.png" },
  { name: "Dhananjayan . S", role: "CEO, 88GB", image: "/images/arjunai.png" },
];

const clientStories = [
  {
    name: "Arjun Nair",
    quote:
      "This program completely changed how I approach content creation and editing.",
    image: "/images/card1.png",
  },
  {
    name: "Megha S",
    quote:
      "I finally understand real editing workflows and how to apply them in projects.",
    image: "/images/card2.png",
  },
  {
    name: "Rahul K",
    quote:
      "From ideas to execution, this helped me build real campaign-ready skills.",
    image: "/images/card3.png",
  },
];

const applyFaqs = [
  {
    question: "Do I need any prior AI or design experience?",
    answer:
      "No experience required. The workshop is designed to take you from zero to producing professional-quality AI AD films in a single day.",
    open: true,
  },
  { question: "What do I need to bring?" },
  { question: "Is this workshop only for filmmakers?" },
  { question: "Is there a refund policy?" },
  { question: "Will there be a recording?" },
  { question: "How many seats are available?" },
];

export default function ApplyPage() {
  return (
    <main className="applyPage">
      <section className="programHero" aria-label="AI-powered ad film workshop">
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
          <nav className="desktopNav" aria-label="Primary navigation">
            <Link href="/#about">About</Link>
            <Link href="/#training">Training</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <a className="headerCta" href="#enroll">
            <span className="headerCtaText">Apply Now</span>
          </a>
        </header>

        <div className="programHeroInner">
          <div className="programHeroCopy">
            <div className="programEyebrowRow">
              <span className="programPill">Offline workshop</span>
              <span className="programTag">Create AD Films That Pay You</span>
            </div>

            <h1>Master AI-Powered AD Film Making In 1Day</h1>
            <p>
              Master ultra-realistic AI visuals &middot; Cinematic storytelling &middot;
              Commercial-grade AD production
            </p>
            <a className="primaryCta programCta" href="#enroll">
              <span className="primaryCtaText">Apply Now</span>
            </a>

            <dl className="programStats">
              <div>
                <dt>Batch Date</dt>
                <dd>May 14</dd>
              </div>
              <div>
                <dt>Learning Mode</dt>
                <dd>Offline (In-Person)</dd>
              </div>
              <div>
                <dt>Full Day Session</dt>
                <dd>Hands-on</dd>
              </div>
              <div>
                <dt>Limited Seats</dt>
                <dd>Applications Open</dd>
              </div>
            </dl>
          </div>

          <aside className="programHeroCard" aria-label="Workshop preview">
            <ProgramCountdown targetDate="2026-05-14T00:00:00+05:30" />
            <div className="programHeroImageWrap" style={{ position: "relative" }}>
              <Image
                src="/images/hero.jpg"
                alt="Students learning AI ad filmmaking at Idea School"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 380px"
                className="programHeroImage"
              />
            </div>
            <span>
              Learn to produce studio-quality AD films using AI{" "}
              <strong>and turn your ideas into campaigns.</strong>
            </span>
          </aside>
        </div>

        <p className="programNotice" id="enroll">
          Applications Open &mdash; Creative + AI Program
        </p>
      </section>

      <section className="programCurriculum" aria-label="What you will learn">
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
            {attendees.map((attendee, index) => (
              <article
                className={`audienceItem${index === 2 || index === 3 ? " reverse" : ""}`}
                key={attendee.title}
              >
                <div className="audienceImageWrap" style={{ position: "relative" }}>
                  <Image
                    src={attendee.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 42vw, 235px"
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

      <section className="programInstructor" aria-label="Instructor and client feedback">
        <div className="programInstructorInner">
          <h2>Meet the Instructor</h2>
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
            <h2>What our clients Have to Say?</h2>
            <p>
              We&apos;ve already transformed hundreds of creators. Here&apos;s a
              glimpse of what past participants built.
            </p>
          </div>

          <div className="proofRail" aria-label="Testimonials">
            {clientStories.map((story) => (
              <article className="proofCard" key={story.name}>
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
              <button type="submit">Apply Now</button>
              <p>Limited seats available for the upcoming batch.</p>
            </form>
          </div>
        </section>

      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>

          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <Link href="/#training">Training</Link>
              <Link href="/#training">Workshops</Link>
              <a href="#apply-form">Apply</a>
            </div>
            <div>
              <h2>Company</h2>
              <Link href="/#about">About</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div>
              <h2>Socials</h2>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </nav>
        </div>
        <strong aria-hidden="true">IDEA SCHOOL</strong>
      </footer>
    </main>
  );
}
