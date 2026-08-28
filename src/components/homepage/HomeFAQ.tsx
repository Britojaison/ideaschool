"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./HomeFAQ.module.css";

export interface FAQItem {
  q: string;
  a: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "Do I need prior experience to join?",
    a: "No, the program is designed for beginners as well as those with basic knowledge. We start from the fundamentals and gradually move to advanced concepts."
  },
  {
    q: "What will I learn in this program?",
    a: "You will learn content planning, shooting basics, editing workflows, creative thinking, AI tools, and how to build content that works for brands, businesses, and your own portfolio."
  },
  {
    q: "Is this program online or offline?",
    a: "The program is conducted offline with hands-on sessions, mentor guidance, and practical activities so you can learn by doing and get direct feedback."
  },
  {
    q: "Will I work on real projects?",
    a: "Yes. You will work on practical briefs and real-world style projects throughout the program, helping you build confidence, process, and portfolio-ready work."
  },
  {
    q: "Will I get a certificate after completion?",
    a: "Yes, you will receive a certificate after successfully completing the program and participating in the required practical sessions and project work."
  }
];

export default function HomeFAQ({
  transitionFromCream = false,
  faqs = DEFAULT_FAQS
}: {
  transitionFromCream?: boolean;
  faqs?: FAQItem[];
}) {
  const faqSectionRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (!transitionFromCream) return;

    let ticking = false;
    const updateTheme = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = faqSectionRef.current;
        if (!section) {
          ticking = false;
          return;
        }

        const progress = gsap.utils.clamp(
          0,
          1,
          (window.innerHeight - section.getBoundingClientRect().top) / window.innerHeight
        );
        const headingColor = gsap.utils.interpolate("#111111", "#FBFAF2", progress);
        const copyColor = gsap.utils.interpolate("#666666", "rgba(251, 250, 242, 0.6)", progress);

        gsap.set(section, {
          backgroundColor: gsap.utils.interpolate("#FBFAF2", "#080808", progress),
        });
        gsap.set(section.querySelectorAll(`h2, .${styles.faqHeader} h2, .${styles.faqQuestion} h4, .${styles.faqContact} h3, .${styles.faqIcon}`), { color: headingColor });
        gsap.set(section.querySelectorAll(`.${styles.faqAnswer} p`), { color: copyColor });
        window.dispatchEvent(new Event("header-theme-check"));
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateTheme, { passive: true });
    updateTheme();
    return () => window.removeEventListener("scroll", updateTheme);
  }, [transitionFromCream]);


  return (
    <section
      className={styles.faqSection}
      ref={faqSectionRef}
      data-header-theme={transitionFromCream ? undefined : "dark"}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className={styles.faqHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* Center Image */}
        <div className={styles.faqImageWrapper}>
          <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback className={styles.faqImage}>
            <source src="/assets/videos/home-page-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Two-column layout: FAQ left, Contact right */}
        <div className={styles.faqLayout}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <h4>{faq.q}</h4>
                  <span className={styles.faqIcon}>{openFaq === index ? "˄" : "˅"}</span>
                </div>
                <div className={styles.faqAnswer}>
                  {faq.a.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx} style={pIdx > 0 ? { marginTop: "12px" } : undefined}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.faqContact}>
            <h3>Didn&apos;t find the answer you were looking for?</h3>
            <a href="mailto:hello@ideaschool.pro" className={styles.faqMailLink}>
              <span>Send us a mail</span>
              <span aria-hidden="true" className={styles.mailArrow}>↗</span>
            </a>
            <div 
              className={styles.faqCameraWrap}
              onClick={() => {
                try {
                  const audio = new Audio("/audio/camera_shutter.mp3");
                  audio.volume = 0.85;
                  audio.play().catch(() => {});
                } catch {}
              }}
            >
              <Image
                src="/images/camlab-cam2.png"
                alt="Idea School Camera Lab"
                width={380}
                height={380}
                className={styles.faqCameraImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
