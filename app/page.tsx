"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Shell from "@/components/global/Shell";
import BrandGrid from "@/components/homepage/BrandGrid";
import IdeaPhilosophy from "@/components/homepage/IdeaPhilosophy";
import WorkshopsStrip from "@/components/homepage/WorkshopsStrip";
import InsideProgram from "@/components/homepage/InsideProgram";
import HowLearningWorks from "@/components/homepage/HowLearningWorks";
import StudentProjects from "@/components/homepage/StudentProjects";
import BuiltByAmbitious from "@/components/homepage/BuiltByAmbitious";
import Gallery from "@/components/homepage/Gallery";
import Reviews from "@/components/homepage/Reviews";
import BeforeYouApply from "@/components/homepage/BeforeYouApply";
import HomeFAQ from "@/components/homepage/HomeFAQ";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import fullBleedImage from "@public/assets/home/gallery10.webp";
import AmbientDots from "@/components/ui/AmbientDots";
import VisualSchoolCTA from "@/components/homepage/VisualSchoolCTA";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const fullBleedRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (fullBleedRef.current) {
      gsap.to(fullBleedRef.current, {
        scrollTrigger: {
          trigger: fullBleedRef.current,
          start: "top 85%",
          end: "center center",
          scrub: 1,
        },
        width: "100vw",
        borderRadius: "0px",
        ease: "none",
      });
    }
  });

  useGSAP(
    () => {
      gsap.from(".gsap-hero-pretitle", {
        y: -15,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".gsap-hero-line-1", {
        y: 20,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.25,
      });
      gsap.from(".gsap-hero-line-2", {
        y: 25,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.45,
      });
      gsap.from(".gsap-hero-desc", {
        y: 20,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.65,
      });
      gsap.from(".gsap-hero-cta", {
        y: 15,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".gsap-card-1, .gsap-note-1", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      });
      gsap.from(".gsap-card-2, .gsap-note-2", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.1,
      });
      gsap.from(".gsap-card-3, .gsap-note-3", {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.1,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

        gsap.to(".gsap-card-1", {
          x: x * 30,
          y: y * 30,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(".gsap-note-1", {
          x: x * 15,
          y: y * 15,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(".gsap-card-2", {
          x: x * -25,
          y: y * -25,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(".gsap-note-2", {
          x: x * -12,
          y: y * -12,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(".gsap-card-3", {
          x: x * 40,
          y: y * 40,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(".gsap-note-3", {
          x: x * 20,
          y: y * 20,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: heroRef }
  );

  return (
    <Shell headerOverlay>
      <div className={styles.topFlow}>
        <div className={styles.gradientFlow}>
          <section className={styles.hero} ref={heroRef} data-header-theme="dark">
          <AmbientDots />
          <div className={styles.floatOne} aria-hidden="true" />
          <div className={styles.floatTwo} aria-hidden="true" />
          <div className={styles.heroCards}>
            <figure
              className={`${styles.heroCard} ${styles.heroCardOne} gsap-card-1`}
            >
              <Image
                src="/images/DSC00103.JPG"
                alt="Creative storytelling at IDEA School"
                width={400}
                height={380}
                sizes="(max-width: 640px) 40vw, 18vw"
                priority
              />
              <figcaption>CREATIVE</figcaption>
            </figure>
            <div
              className={`${styles.handwrittenNote} ${styles.noteVisual} gsap-note-1`}
            >
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 50 Q 30 20 10 20"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M22 12 L 10 20 L 22 28"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span>
                Tell Stories<br />That Move People.
              </span>
            </div>
            <figure
              className={`${styles.heroCard} ${styles.heroCardTwo} gsap-card-2`}
            >
              <Image
                src="/images/DSC00274.JPG"
                alt="Technology and creative editing at IDEA School"
                width={400}
                height={380}
                sizes="(max-width: 640px) 40vw, 18vw"
                priority
              />
              <figcaption>TECHNOLOGY</figcaption>
            </figure>
            <div
              className={`${styles.handwrittenNote} ${styles.noteCreative} gsap-note-2`}
            >
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 50 Q 30 20 10 20"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M22 12 L 10 20 L 22 28"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span>
                Turn Ideas<br />Into Products.
              </span>
            </div>
            <figure
              className={`${styles.heroCard} ${styles.heroCardThree} gsap-card-3`}
            >
              <Image
                src="/images/DSC00107.JPG"
                alt="Marketing and collaboration at IDEA School"
                width={400}
                height={380}
                sizes="(max-width: 640px) 40vw, 18vw"
                priority
              />
              <figcaption>MARKETING</figcaption>
            </figure>
            <div
              className={`${styles.handwrittenNote} ${styles.noteMarketing} gsap-note-3`}
            >
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 50 Q 30 20 50 20"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M38 12 L 50 20 L 38 28"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span>
                Build Brands.<br />Drive Growth.
              </span>
            </div>
          </div>
          <div
            className={styles.mobileCarousel}
            aria-label="Featured creative projects"
          >
            <div className={styles.mobileCarouselTrack}>
              {[0, 1].flatMap((set) => [
                <figure
                  className={styles.mobileCarouselCard}
                  key={`${set}-visual`}
                  aria-hidden={set === 1}
                >
                  <Image
                    src="/images/DSC00103.JPG"
                    alt={
                      set === 0 ? "Creative storytelling at IDEA School" : ""
                    }
                    width={320}
                    height={267}
                    priority
                  />
                  <figcaption>CREATIVE</figcaption>
                </figure>,
                <figure
                  className={styles.mobileCarouselCard}
                  key={`${set}-creative`}
                  aria-hidden={set === 1}
                >
                  <Image
                    src="/images/DSC00274.JPG"
                    alt={
                      set === 0 ? "Technology and creative editing at IDEA School" : ""
                    }
                    width={320}
                    height={267}
                    priority
                  />
                  <figcaption>TECHNOLOGY</figcaption>
                </figure>,
                <figure
                  className={styles.mobileCarouselCard}
                  key={`${set}-marketing`}
                  aria-hidden={set === 1}
                >
                  <Image
                    src="/images/DSC00107.JPG"
                    alt={set === 0 ? "Marketing and collaboration at IDEA School" : ""}
                    width={320}
                    height={267}
                    priority
                  />
                  <figcaption>MARKETING</figcaption>
                </figure>,
              ])}
            </div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroPretitle}>
                <span className="gsap-hero-pretitle">India’s Next-Generation School</span>
              </span>
              <span className={styles.lineLearnToBuild}>
                <span className="gsap-hero-line-1">LEARN TO BUILD</span>
              </span>
              <span className={styles.lineTheFuture}>
                <span className="gsap-hero-line-2">THE FUTURE</span>
              </span>
            </h1>
            <div className={`${styles.heroDescription} gsap-hero-desc`}>
              <p>Build Skills In Creativity, Marketing &amp; Technology.</p>
              <p>Think Like An Entrepreneur. Create With AI.</p>
            </div>
            <a href="#workshops" className={`${styles.heroCta} gsap-hero-cta`}>
              <span>Explore Our Programs</span>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 2L12 12M12 12H4M12 12V4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <a
            className={styles.cornerArrow}
            href="#workshops"
            aria-label="Explore The IDEA School Universe"
          >
            ↙
          </a>
          </section>
        </div>
      </div>
      <WorkshopsStrip />
      <IdeaPhilosophy />
      <BrandGrid />
      <InsideProgram />
      <HowLearningWorks />
      <StudentProjects />
      <BuiltByAmbitious />
      <Reviews />
      <BeforeYouApply />
      <Gallery />
      <div
        className={styles.fullBleedContainer}
        ref={fullBleedRef}
        data-header-theme="dark"
      >
        <Image
          src={fullBleedImage}
          alt="Showcase banner"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <HomeFAQ />
      <VisualSchoolCTA />
    </Shell>
  );
}
