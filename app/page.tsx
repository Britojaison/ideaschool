import Image from "next/image";
import Link from "next/link";
import AlumniWorks from "./AlumniWorks";
import FeedbackTestimonials from "./FeedbackTestimonials";
import HeroDotField from "./HeroDotField";
import LearningTimeline from "./LearningTimeline";
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
    name: "JLL",
    image: "/images/jill.png",
    width: 86,
    height: 38,
  },
  {
    name: "Netflix",
    image: "/images/netflix.png",
    width: 130,
    height: 55,
  },
  {
    name: "Milky Mist",
    image: "/images/milky mist.png",
    width: 116,
    height: 50,
  },
  {
    name: "Finolex",
    image: "/images/finolex logo.png",
    width: 116,
    height: 25,
  },
  {
    name: "Xiaomi",
    text: "XIAOMI",
    width: 147,
    height: 41,
  },
];

const workshops = [
  {
    title: "Performance Marketing",
    description: "Learn how content drives growth and results.",
    image: "/images/359586b8b594b653726bbda2883862b8a820e37b.jpg",
    comingSoon: true,
  },
  {
    title: "Creative + AI Program",
    description: "Learn editing, content, and AI tools through real-world projects.",
    image: "/images/3690ba0056dc8b622457a2356266c582d8917011.jpg",
  },
  {
    title: "Advanced Content Systems",
    description: "Build scalable content workflows and strategies.",
    image: "/images/c988e78cfada134657e808cfb29a0523e125dde8.jpg",
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <main>
      <ScrollTextReveal />

      <section className="hero" id="hero" aria-label="Idea School hero">
        <div className="heroMedia">
          <HeroDotField />
        </div>

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
              projects and hands-on sessions designed for the
              <br />
              industry.
            </p>
            <Link className="primaryCta" href="/apply">
              <span className="primaryCtaText">Get early bird pass now</span>
            </Link>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <Image
              src="/images/Hero 6.png"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              className="heroVisualImage"
            />
          </div>

          <div className="heroActions">
            <LiquidBatchNotice />
            <LiquidVideoButton />
          </div>
        </div>
      </section>

      <LiquidQuickActions />

      <section className="brands" aria-label="Brand partners">
        <p>We have worked with 150+ Brands</p>
        <div className="brandLogos">
          {brands.map((brand) => (
            <span key={brand.name}>
              {"image" in brand ? (
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="brandPartnerLogo"
                />
              ) : (
                <span
                  className={
                    brand.name === "Xiaomi" ? "xiaomiText" : "milkyMistText"
                  }
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
              )}
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
        <Image
          src="/images/9a5c8f878495eaf39832722ea5fdd3819b80462d.jpg"
          alt=""
          fill
          sizes="100vw"
          className="videoPoster"
          aria-hidden="true"
        />
        <div className="videoSectionShade" aria-hidden="true" />
        <LiquidVideoControlButton />
      </section>

      <AlumniWorks />

      <section className="feedback" id="testimonials" aria-label="Student feedback">
        <div className="feedbackIntro">
          <h2>
            Real Feedback
            <br />
            From Our Students
          </h2>
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
              src="/images/arjun.jpg"
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
            <p>
              Idea School focuses on practical learning that goes beyond
              theory. Our programs are designed to help students understand real
              workflows, work on meaningful projects, and build skills that are
              actually used in the industry.
            </p>
            <p>
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
            the industry. Learn directly from people who build, create, and
            deliver real results.
          </p>
        </div>

        <MentorCarousel />
      </section>

      <section className="learningFaq" aria-label="How you will learn">
        <div className="learningInner">
          <h2>How you will learn</h2>

          <div className="learningContent">
            <div className="learningCopy">
              <p>
                We&apos;ve designed a structured and practical learning journey
                to help you build real-world creative skills. You&apos;ll
                progress through three key stages:{" "}
                <strong>Fundamentals, Real Projects, and Advanced Workflows.</strong>
              </p>
              <p>
                No confusion, no random learning. Everything is structured
                step-by-step from basics to advanced so you always know what to
                learn next and how to <strong>apply it.</strong>
              </p>
            </div>

            <LearningTimeline />

            <div className="learningImageLayer" aria-hidden="true">
              {[
                "/images/bg1.png",
                "/images/bg2.png",
                "/images/bg3.png",
                "/images/bg4.png",
                "/images/bg5.png",
                "/images/bg6.png",
              ].map((image, index) => (
                <div
                  className={`learningImageWrap image${Math.floor(index / 2)}-${index % 2}`}
                  key={image}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 980px) 50vw, 180px"
                    className="learningImage"
                  />
                </div>
              ))}
            </div>
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
                { question: "What will I learn in this program?", open: false },
                { question: "Is this program online or offline?", open: false },
                { question: "Will I work on real projects?", open: false },
                {
                  question: "Will I get a certificate after completion?",
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
            <button type="submit">Get early bird pass now</button>
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
