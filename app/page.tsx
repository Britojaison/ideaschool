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
    name: "Xiamo",
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
        className="brandPartnerLogo"
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
    title: "Performance Marketing",
    description: "Learn how content drives growth and results.",
    image: "/images/359586b8b594b653726bbda2883862b8a820e37b.jpg",
    comingSoon: true,
  },
  {
    title: "AI AD FILM MAKING MASTERCLASS",
    description: "Learn editing, content, and AI tools through real-world projects.",
    image: "/images/3690ba0056dc8b622457a2356266c582d8917011 copy.jpg",
    href: "/apply",
  },
  {
    title: "Advanced Content Systems",
    description: "Build scalable content workflows and strategies.",
    image: "/images/c988e78cfada134657e808cfb29a0523e125dde8.jpg",
    comingSoon: true,
  },
];

const notCourseFeatures = [
  {
    title: "Studio-Led Training",
    description:
      "Learn through guided sessions, creator breakdowns, feedback loops, and practical assignments that mirror real content work.",
    image: "/images/DSC01109.JPG",
    accent: "violet",
  },
  {
    title: "Real Brand Practice",
    description:
      "Move from classroom tasks into portfolio-ready briefs, shoots, edits, and campaigns shaped by real market expectations.",
    image: "/images/DSC01035.JPG",
    accent: "blue",
  },
];

const notCoursePillars = [
  {
    title: "Pulse",
    description:
      "Stay current with culture, trends, platforms, and brand moments so your ideas feel relevant in the real world.",
  },
  {
    title: "Creator Mindset",
    description:
      "Build the habit of observing, scripting, testing, improving, and presenting your work with clarity.",
  },
  {
    title: "Production Fitness",
    description:
      "Practice the daily discipline of shooting, editing, planning, and managing timelines without losing creative quality.",
  },
  {
    title: "Case Room",
    description:
      "Decode campaigns, creator pages, brand decisions, and content systems to understand why some work performs.",
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
            <span className="headerCtaText">Book your class</span>
          </Link>
          <div className="mobileHeaderActions" aria-label="Quick contact actions">
            <a
              className="mobileHeaderAction whatsapp"
              href="#whatsapp"
              aria-label="WhatsApp"
            >
              <Image src="/images/whatsapp.svg" alt="" width={26} height={26} />
            </a>
            <a className="mobileHeaderAction phone" href="#call" aria-label="Call">
              <Image src="/images/phone.svg" alt="" width={25} height={25} />
            </a>
            <a className="mobileMenuLink" href="#training" aria-label="Training">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="heroContent">
          <div className="heroCopy">
            <h1>
              Build Creative Skills That
              <br />
              Actually Matter
            </h1>
            <p>
              Learn editing, content creation, and AI tools through real
              projects and hands-on sessions designed for the industry.
            </p>
            <Link className="primaryCta" href="/apply">
              <span className="primaryCtaText">Apply Now</span>
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
          We have worked with 150+ Brands
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
              key={`${brand.name}-duplicate`}
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
          <h2>Real Feedback From Our Students</h2>
          <p>
            Honest feedback from learners who experienced our training and built
            real skills through hands-on projects.
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
              We build creators
              <br />
              ready for the real world
            </h2>
            <p className="whyIdeaDescription">
              Idea School focuses on practical learning that goes beyond
              theory. Our programs are designed to help students understand real
              workflows, work on meaningful projects, and build skills that are
              actually used in the industry.
              <br />
              From editing and content creation to AI tools and digital systems,
              we guide students through a structured learning process that
              prepares them for real opportunities.
            </p>
            <p>For collaborations or queries, reach out to us directly.</p>

            <dl className="whyStats">
              <div>
                <dt>Projects Completed</dt>
                <dd>100+</dd>
              </div>
              <div>
                <dt>Brands collabed</dt>
                <dd>100+</dd>
              </div>
              <div>
                <dt>Tools &amp; Skills Covered</dt>
                <dd>20+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mentors" aria-label="Idea School mentors">
        <div className="mentorsIntro">
          <h2>Learn from People Who Do It for Real</h2>
          <p>
            Our mentors are active creators, editors, and strategists working in
            the industry.
            <br />
            Learn directly from people who build, create, and
            deliver real results.
          </p>
        </div>

        <MentorCarousel />
      </section>

      <section className="notCourseSection" aria-label="Not just a course">
        <div className="notCourseInner">
          <div className="notCourseHeader">
            <h2>
              Not Just a <em>Course</em>
            </h2>
            <p>
              Idea School is built around growth beyond lessons. You learn the
              craft, practice it in real situations, and build the habits needed
              to show up like a working creator.
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
                Find answers to common questions about the program. Still
                unsure? Feel free to contact us.
              </p>
            </div>

            <div className="faqList">
              {[
                {
                  question: "Do I need prior experience to join?",
                  answer:
                    "No, the program is designed for beginners as well as those with basic knowledge. We start from the fundamentals and gradually move to advanced concepts.",
                  open: false,
                },
                {
                  question: "What will I learn in this program?",
                  answer:
                    "You will learn content planning, shooting basics, editing workflows, creative thinking, AI tools, and how to build content that works for brands, businesses, and your own portfolio.",
                  open: false,
                },
                {
                  question: "Is this program online or offline?",
                  answer:
                    "The program is conducted offline with hands-on sessions, mentor guidance, and practical activities so you can learn by doing and get direct feedback.",
                  open: false,
                },
                {
                  question: "Will I work on real projects?",
                  answer:
                    "Yes. You will work on practical briefs and real-world style projects throughout the program, helping you build confidence, process, and portfolio-ready work.",
                  open: false,
                },
                {
                  question: "Will I get a certificate after completion?",
                  answer:
                    "Yes, you will receive a certificate after successfully completing the program and participating in the required practical sessions and project work.",
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
              Ready to start your creative journey?
              <br />
              Contact us.
            </h2>
            <p>
              Join Idea School and start learning editing, content creation, and
              AI tools through real projects and hands-on sessions.
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
            <p>Limited seats available for the upcoming batch.</p>
          </form>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <p>Idea School is where you build real skills for the creative industry.</p>

          <nav className="footerLinks" aria-label="Footer navigation">
            <div>
              <h2>Program</h2>
              <a href="#training">Training</a>
              <a href="#training">Workshops</a>
              <Link href="/apply">Get early bird pass now</Link>
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
