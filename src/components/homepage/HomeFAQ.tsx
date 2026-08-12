"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./HomeFAQ.module.css";

export default function HomeFAQ() {
  const faqSectionRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <section className={styles.faqSection} ref={faqSectionRef}>
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
            {[
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
            ].map((faq, index) => (
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
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.faqContact}>
            <h3>Didn&apos;t find the answer you were looking for?</h3>
            <a href="mailto:hello@ideaschool.pro" className={styles.faqMailLink}>Send us an mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}
