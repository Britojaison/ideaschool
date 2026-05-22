import Image from "next/image";
import Link from "next/link";
import AlumniWorks from "./AlumniWorks";
import FeedbackTestimonials from "./FeedbackTestimonials";
import LiquidBatchNotice from "./LiquidBatchNotice";
import LiquidQuickActions from "./LiquidQuickActions";
import LiquidVideoControlButton from "./LiquidVideoControlButton";
import LiquidVideoButton from "./LiquidVideoButton";
import MentorCarousel from "./MentorCarousel";
import ScrollTextReveal from "./ScrollTextReveal";
import StarBorder from "./StarBorder";
import WorkshopCarousel from "./WorkshopCarousel";

type Brand =
  | {
    name: string;
    image: string;
    width: number;
    height: number;
  }
  | {
    name: string;
    text: string;
    width: number;
    height: number;
  };

const brands: Brand[] = [
  {
    name: "Ashok Leyland",
    image: "/images/ASHOK LEYLAND.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Finolex",
    image: "/images/FINOLEX.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Heritage",
    image: "/images/heritage.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "JLL",
    image: "/images/JLL.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Milky Mist",
    image: "/images/MILKY MIST-2.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Mapro",
    image: "/images/mapro.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Moj",
    image: "/images/moj.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Netflix",
    image: "/images/NETFLIX-2.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Paytm",
    image: "/images/paytm.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Amazon",
    image: "/images/AMAZON.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Poco",
    image: "/images/POCO.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "SIG",
    image: "/images/SIG.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Xiaomi",
    image: "/images/XIAMO.png",
    width: 1254,
    height: 1254,
  },
];

function BrandLogo({ brand }: { brand: Brand }) {
  if ("image" in brand) {
    return (
      <Image
        src={brand.image}
        alt={brand.name}
        width={brand.width}
        height={brand.height}
        className={`brandPartnerLogo${brand.name === "Mapro" ? " maproLogo" : ""}`}
      />
    );
  }

  return (
    <span
      className={brand.name === "Xiaomi" ? "xiaomiText" : "milkyMistText"}
      aria-label={brand.name}
    >
      {brand.name === "Xiaomi" ? (
        <>
          x<span className="dotlessI">ı</span>aom
          <span className="dotlessI">ı</span>
        </>
      ) : (
        brand.text
      )}
    </span>
  );
}

const workshops = [
  {
    title: "Performance Marketing Lab",
    description: "Understand how strategy, content, and numbers work together to turn attention into measurable growth.",
    image: "/images/359586b8b594b653726bbda2883862b8a820e37b.jpg",
    comingSoon: true,
  },
  {
    title: "AI AD FILM MAKING MASTERCLASS",
    description: "Create campaign-ready ad films with editing, storytelling, AI workflows, and mentor feedback built into every step.",
    image: "/images/3690ba0056dc8b622457a2356266c582d8917011 copy.jpg",
    href: "/apply",
  },
  {
    title: "Advanced Content Systems",
    description: "Build repeatable content systems for brands, creators, and businesses that need consistency, speed, and quality.",
    image: "/images/c988e78cfada134657e808cfb29a0523e125dde8.jpg",
    comingSoon: true,
  },
];

const notCourseFeatures = [
  {
    title: "Studio-Led Learning",
    description:
      "Every session is shaped around how creative work actually happens: briefs, references, execution, revisions, feedback, and final delivery.",
    image: "/images/DSC01109.JPG",
    accent: "violet",
  },
  {
    title: "Portfolio-Focused Practice",
    description:
      "You do not leave with only notes. You build work, sharpen your taste, and develop pieces that show what you can actually do.",
    image: "/images/DSC01035.JPG",
    accent: "blue",
  },
];

const notCoursePillars = [
  {
    title: "Market Pulse",
    description:
      "Learn to read trends, platforms, brand behavior, and audience signals so your ideas feel current instead of copied.",
  },
  {
    title: "Creative Decision-Making",
    description:
      "Develop the habit of choosing stronger hooks, clearer edits, sharper visuals, and better story flow with intention.",
  },
  {
    title: "Production Confidence",
    description:
      "Practice planning, shooting, editing, and delivering work within real constraints without losing creative quality.",
  },
  {
    title: "Brand Thinking",
    description:
      "Decode campaigns, creator pages, and brand choices so you understand why some content earns attention and trust.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollTextReveal />

      <section className="hero" id="hero" aria-label="Idea School hero">
        <div className="heroMedia" />

        <div className="heroShade" />

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
            <a href="#about">About</a>
            <a href="#training">Training</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <Link className="headerCta" href="/apply">
            <span className="headerCtaText">Book a seat</span>
          </Link>
        </header>

        <div className="heroContent">
          <div className="heroCopy">
            <h1>
              Become <span>Industry Ready</span>
              <br />
              <strong>Creator</strong>
            </h1>
            <p>
              <span>Learn editing, ad filmmaking, content strategy, and AI tools</span> through guided projects{" "}
              <br />
              designed to help you think, create, and present like a working professional.
            </p>
            <Link className="primaryCta" href="/apply">
              <span className="primaryCtaText">Start building</span>
            </Link>
            <div className="heroInlineActions">
              <LiquidBatchNotice />
              <LiquidVideoButton />
            </div>
          </div>
        </div>
      </section>

      <LiquidQuickActions />

      <section className="brands" aria-labelledby="brand-partners-title">
        <h2 className="brandsTitle" id="brand-partners-title">
          Learn from a team shaped by real brand work
        </h2>
        <div className="brandLogos">
          {brands.map((brand) => (
            <span key={brand.name}>
              <BrandLogo brand={brand} />
            </span>
          ))}
          {brands.map((brand) => (
            <span
              className="brandLogoDuplicate"
              key={`${brand.name}-duplicate-1`}
              aria-hidden="true"
            >
              <BrandLogo brand={brand} />
            </span>
          ))}
          {brands.map((brand) => (
            <span
              className="brandLogoDuplicate"
              key={`${brand.name}-duplicate-2`}
              aria-hidden="true"
            >
              <BrandLogo brand={brand} />
            </span>
          ))}
        </div>
      </section>

      <section className="workshops" id="training" aria-label="Our workshops">
        <div className="workshopGrid" aria-hidden="true" />
        <div className="workshopInner">
          <StarBorder
            as="div"
            role="heading"
            aria-level={2}
            className="workshopTitle"
            color="#af52df"
            speed="5s"
            thickness={2}
          >
            Our Workshops
          </StarBorder>
          <WorkshopCarousel workshops={workshops} />
        </div>
      </section>

      <section className="videoSection" id="video" aria-label="Idea School video">
        <video
          id="homePageVideo"
          className="videoPoster"
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
        <LiquidVideoControlButton targetId="homePageVideo" />
      </section>

      <AlumniWorks />

      <section className="feedback" id="testimonials" aria-label="Student feedback">
        <div className="feedbackIntro">
          <h2>Proof From People Who Chose To Build</h2>
          <p>
            Students come in with curiosity, half-finished ideas, or no clear direction.
            They leave with sharper skills, stronger confidence, and work they can talk about.
          </p>
        </div>

        <FeedbackTestimonials />
      </section>

      <section className="whyIdea" id="about" aria-label="Why Idea School">
        <div className="whyIdeaInner">
          <div className="whyIdeaMedia">
            <Image
              src="/images/ARJUN - MAIN PAGE (ABOUT SECTION).png"
              alt="Idea School training session"
              fill
              sizes="(max-width: 980px) 100vw, 420px"
              className="whyIdeaImage"
            />
          </div>

          <div className="whyIdeaCopy">
            <span className="sectionPill">Why Idea School</span>
            <h2>
              Built for people who
              <br />
              want real creative skill
            </h2>
            <p className="whyIdeaDescription">
              Idea School is for learners who do not want another passive class.
              The program is built around doing the work: understanding briefs,
              creating content, editing with purpose, using AI practically, and
              improving through feedback.
              <br /><br />
              What makes it different is the environment. You learn inside a
              studio-style process, see how professionals make decisions, and
              build the kind of creative judgement that helps you stand out in a
              crowded market.
            </p>
            <p>For batch details, collaborations, or queries, reach out to us directly.</p>

            <div className="whyStats" role="list" aria-label="Idea School results">
              <div>
                <p className="whyStatLabel">Creative Projects</p>
                <p className="whyStatValue">100+</p>
              </div>
              <div>
                <p className="whyStatLabel">Brand Collaborations</p>
                <p className="whyStatValue">100+</p>
              </div>
              <div>
                <p className="whyStatLabel">Tools, Systems &amp; Skills</p>
                <p className="whyStatValue">20+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mentors" aria-label="Idea School mentors">
        <div className="mentorsIntro">
          <h2>Learn From People Who Work In The Field</h2>
          <p>
            Our mentors are active creators, editors, and strategists who understand
            what clients, audiences, and platforms expect.
            <br />
            You learn the craft, the thinking, and the decisions behind professional work.
          </p>
        </div>

        <MentorCarousel />
      </section>

      <section className="notCourseSection" aria-label="Not just a course">
        <div className="notCourseInner">
          <div className="notCourseHeader">
            <h2>
              More Than a <em>Course</em>
            </h2>
            <p>
              The goal is not to simply finish a syllabus. The goal is to help
              you become someone who can take an idea, shape it, execute it,
              improve it, and explain it with confidence.
            </p>
          </div>

          <div className="notCourseFeatureGrid">
            {notCourseFeatures.map((feature) => (
              <article
                className={`notCourseFeature ${feature.accent}`}
                key={feature.title}
              >
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  className="notCourseFeatureImage"
                />
                <div className="notCourseFeatureShade" />
                <div className="notCourseFeatureCopy">
                  <span aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="notCoursePillarGrid">
            {notCoursePillars.map((pillar, index) => (
              <article className="notCoursePillar" key={pillar.title}>
                <span
                  className={`notCoursePillarLine line${index}`}
                  aria-hidden="true"
                />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="faq">
            <div className="faqIntro">
              <h2>Frequently Asked Questions</h2>
              <p>
                A few things worth knowing before you decide whether this is the
                right creative environment for you.
              </p>
            </div>

            <div className="faqList">
              {[
                {
                  question: "Do I need prior experience to join?",
                  answer:
                    "No. The program is designed for serious beginners as well as people with basic creative experience. We start with fundamentals, then move into projects, feedback, and more advanced workflows.",
                  open: false,
                },
                {
                  question: "What makes this different from watching tutorials?",
                  answer:
                    "Tutorials can show steps. This program gives you structure, deadlines, guided practice, feedback, peer energy, and a studio-style process so you learn how to make better creative decisions.",
                  open: false,
                },
                {
                  question: "Is this program online or offline?",
                  answer:
                    "The program is conducted offline with hands-on sessions, mentor guidance, and practical activities so you can learn by doing, ask questions, and get direct feedback.",
                  open: false,
                },
                {
                  question: "Will I work on real projects?",
                  answer:
                    "Yes. You will work on practical briefs and real-world style projects throughout the program, helping you build confidence, process, and portfolio-ready work.",
                  open: false,
                },
                {
                  question: "What should I expect to leave with?",
                  answer:
                    "You should leave with stronger fundamentals, practical AI and editing workflows, clearer creative thinking, mentor feedback, and work you can use to show your capability.",
                  open: false,
                },
              ].map((item) => (
                <details className="faqItem" key={item.question} open={item.open}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faqIcon" aria-hidden="true" />
                  </summary>
                  {item.answer ? <p>{item.answer}</p> : null}
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact" aria-label="Contact Idea School">
        <div className="contactInner">
          <div className="contactCopy">
            <h2>
              Ready to take your creative work seriously?
              <br />
              Talk to us.
            </h2>
            <p>
              Tell us where you are starting from. We will help you understand
              the batch, the learning path, and whether the program fits your goals.
            </p>
          </div>

          <form className="applyForm" id="apply">
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
            <button type="submit">Apply now</button>
            <p>Seats are limited so every learner gets attention, feedback, and room to practice.</p>
          </form>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where creative learners become sharper, more confident, and more industry-ready.</p>

          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <a href="#training">Training</a>
              <a href="#training">Workshops</a>
              <Link href="/apply">Check batch availability</Link>
            </div>
            <div>
              <h2>Company</h2>
              <a href="#about">About</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h2>Socials</h2>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
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
