import Image from "next/image";
import AlumniWorks from "./AlumniWorks";
import LiquidVideoButton from "./LiquidVideoButton";

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
    text: "MilkyMist",
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
    text: "xiaomi",
    width: 147,
    height: 41,
  },
];

const workshops = [
  {
    title: "Performance Marketing",
    description: "Learn how content drives growth and results.",
    image: "/images/359586b8b594b653726bbda2883862b8a820e37b.jpg",
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
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="Idea School hero">
        <div className="heroMedia">
          <Image
            src="/images/hero img.jpg"
            alt="Idea School team"
            fill
            priority
            sizes="100vw"
            className="heroImage"
          />
        </div>

        <div className="heroShade" />

        <header className="siteHeader">
          <a className="brand" href="#" aria-label="Idea School home">
            <Image
              src="/images/idea logo.png"
              alt="Idea"
              width={104}
              height={54}
              priority
              className="brandLogo"
            />
          </a>
          <nav className="desktopNav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#training">Training</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="headerCta" href="#apply">
            <span className="headerCtaText">Apply Now</span>
          </a>
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
            <a className="primaryCta" href="#apply">
              <span className="primaryCtaText">Apply Now</span>
            </a>
          </div>

          <div className="heroActions">
            <LiquidVideoButton />
            <p className="batchNotice">
              <span className="noticeIcon" aria-hidden="true" />
              <span className="batchNoticeText">
                Next Batch starts on 11th May 2026
              </span>
            </p>
          </div>
        </div>

        <div className="quickActions" aria-label="Quick contact actions">
          <a className="quickAction whatsapp" href="#whatsapp" aria-label="WhatsApp" />
          <a className="quickAction phone" href="#call" aria-label="Call" />
        </div>
      </section>

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
                  {brand.text}
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      <section className="workshops" id="training" aria-label="Our workshops">
        <div className="workshopGrid" aria-hidden="true" />
        <div className="workshopDivider" aria-hidden="true" />
        <div className="workshopInner">
          <h2>Our Workshops</h2>
          <div className="workshopCards">
            {workshops.map((workshop, index) => (
              <article className="workshopCard" key={workshop.title}>
                {index === 1 ? (
                  <span className="availability">
                    <span className="availabilityText">Available</span>
                  </span>
                ) : null}
                <Image
                  src={workshop.image}
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                  className="workshopCardImage"
                />
                <div className="workshopCardCopy">
                  <h3>{workshop.title}</h3>
                  <p>{workshop.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="videoSection" aria-label="Idea School video">
        <Image
          src="/images/hero img.jpg"
          alt=""
          fill
          sizes="100vw"
          className="videoPoster"
          aria-hidden="true"
        />
        <div className="videoSectionShade" aria-hidden="true" />
        <button className="videoPlayButton" type="button" aria-label="Play Idea School video">
          <span className="videoPlayIcon" aria-hidden="true" />
        </button>
      </section>

      <AlumniWorks />

      <section className="feedback" id="testimonials" aria-label="Student feedback">
        <div>
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
      </section>
    </main>
  );
}
