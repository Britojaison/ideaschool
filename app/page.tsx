"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Shell from "@/components/global/Shell";
import Schools from "@/components/homepage/Schools";
import WorkshopsStrip from "@/components/homepage/WorkshopsStrip";
import FlagshipSpotlight from "@/components/homepage/FlagshipSpotlight";
import InsideProgram from "@/components/homepage/InsideProgram";
import BuiltByAmbitious from "@/components/homepage/BuiltByAmbitious";
import Gallery from "@/components/homepage/Gallery";
import Testimonials from "@/components/homepage/Testimonials";
import Reviews from "@/components/homepage/Reviews";
import HomeFAQ from "@/components/homepage/HomeFAQ";
import styles from "@/styles/Home.module.css";
import visualStorytelling from "@public/images/gallery5.webp";
import creativeDirection from "@public/images/gallery7.webp";
import marketing from "@public/images/gallery10.webp";
import Image from "next/image";
import fullBleedImage from "@public/assets/home/gallery10.webp";

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
        ease: "none"
      });
    }
  });

  useGSAP(() => {
    gsap.from(".gsap-text-creating", { x: 200, opacity: 0, duration: 1.2, ease: "power3.out" });
    gsap.from(".gsap-text-becomes", { x: -200, opacity: 0, duration: 1.2, ease: "power3.out" });

    gsap.from(".gsap-card-1, .gsap-note-1", { x: -200, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.2, stagger: 0.1 });
    gsap.from(".gsap-card-2, .gsap-note-2", { x: -200, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.4, stagger: 0.1 });
    gsap.from(".gsap-card-3", { x: 200, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.6 });
    gsap.from(".gsap-title-aside", { x: 200, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.8 });
    gsap.from(".gsap-hero-intro-line", { scale: 0.72, y: 18, opacity: 0, duration: 0.65, ease: "back.out(1.8)", delay: 1.05, stagger: 0.12, transformOrigin: "center" });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      gsap.to(".gsap-card-1", { x: x * 30, y: y * 30, duration: 0.5, ease: "power2.out" });
      gsap.to(".gsap-note-1", { x: x * 15, y: y * 15, duration: 0.5, ease: "power2.out" });
      gsap.to(".gsap-card-2", { x: x * -25, y: y * -25, duration: 0.5, ease: "power2.out" });
      gsap.to(".gsap-note-2", { x: x * -12, y: y * -12, duration: 0.5, ease: "power2.out" });
      gsap.to(".gsap-card-3", { x: x * 40, y: y * 40, duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: heroRef });

  return <Shell headerOverlay><div className={styles.topFlow}><section className={styles.hero} ref={heroRef}>
    <div className={styles.floatOne} aria-hidden="true" /><div className={styles.floatTwo} aria-hidden="true" />
    <div className={styles.heroCards}>
      <figure className={`${styles.heroCard} ${styles.heroCardOne} gsap-card-1`}><Image src={visualStorytelling} alt="Animated visual storytelling project" sizes="(max-width: 640px) 40vw, 18vw" priority /><figcaption>Visual storytelling</figcaption></figure>
      <div className={`${styles.handwrittenNote} ${styles.noteVisual} gsap-note-1`}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 50 Q 30 20 10 20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M22 12 L 10 20 L 22 28" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span>Master visual<br />storytelling</span>
      </div>
      <figure className={`${styles.heroCard} ${styles.heroCardTwo} gsap-card-2`}><Image src={creativeDirection} alt="Animated creative direction project" sizes="(max-width: 640px) 40vw, 18vw" priority /><figcaption>Creative direction</figcaption></figure>
      <div className={`${styles.handwrittenNote} ${styles.noteCreative} gsap-note-2`}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 50 Q 30 20 10 20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M22 12 L 10 20 L 22 28" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span>Shape your<br />creative vision!</span>
      </div>
      <figure className={`${styles.heroCard} ${styles.heroCardThree} gsap-card-3`}><Image src={marketing} alt="Marketing project" sizes="(max-width: 640px) 40vw, 18vw" priority /><figcaption>Marketing</figcaption></figure>
    </div>
    <div className={styles.mobileCarousel} aria-label="Featured creative projects">
      <div className={styles.mobileCarouselTrack}>
        {[0, 1].flatMap((set) => [
          <figure className={styles.mobileCarouselCard} key={`${set}-visual`} aria-hidden={set === 1}><Image src={visualStorytelling} alt={set === 0 ? "Animated visual storytelling project" : ""} priority /><figcaption>Visual storytelling</figcaption></figure>,
          <figure className={styles.mobileCarouselCard} key={`${set}-creative`} aria-hidden={set === 1}><Image src={creativeDirection} alt={set === 0 ? "Animated creative direction project" : ""} priority /><figcaption>Creative direction</figcaption></figure>,
          <figure className={styles.mobileCarouselCard} key={`${set}-marketing`} aria-hidden={set === 1}><Image src={marketing} alt={set === 0 ? "Marketing project" : ""} priority /><figcaption>Marketing</figcaption></figure>,
        ])}
      </div>
    </div>
    <div className={styles.heroContent}><h1 className={styles.heroTitle}><span className={styles.lineOne}><span className="gsap-text-creating" style={{ display: "block" }}>CREATIVITY</span></span><span className={styles.lineTwo}><span className="gsap-text-becomes" style={{ display: "block" }}>BECOMES</span></span></h1><p className={`${styles.titleAside} gsap-title-aside`}>YOUR<br />CAREER</p><p className={styles.heroIntro}><span className="gsap-hero-intro-line">Learn real-world creative skills.</span><span className="gsap-hero-intro-line">Build work that gets noticed.</span><span className="gsap-hero-intro-line">Turn what you love into a career.</span></p></div>
    <a className={styles.cornerArrow} href="#schools" aria-label="Explore schools">↙</a>
  </section><Schools /><WorkshopsStrip /></div><FlagshipSpotlight /><InsideProgram /><BuiltByAmbitious /><Gallery />
    <div className={styles.fullBleedContainer} ref={fullBleedRef}>
      <Image src={fullBleedImage} alt="Showcase banner" fill style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <Testimonials />
    <Reviews />
    <HomeFAQ />
  </Shell>;
}
