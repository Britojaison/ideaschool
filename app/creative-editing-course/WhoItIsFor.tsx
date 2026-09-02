"use client";

import Image from "next/image";
import styles from "./WhoItIsFor.module.css";

const reasons = [
  "You want more structure and guidance than random online tutorials provide.",
  "You are willing to practise, receive feedback and revise your work.",
  "You want to build a portfolio that demonstrates practical capability.",
  "You want to understand how professional creative work is briefed, reviewed and delivered.",
  "You can commit to the 24-week learning and industry-experience process.",
];

const exclusions = [
  "You only want prerecorded lessons to watch casually.",
  "You are looking for shortcuts, presets or AI prompts without learning the craft.",
  "You are unwilling to practise or revise your work after feedback.",
];

export default function WhoItIsFor() {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.introGrid}>
        <div className={styles.eyebrow}>WHO IT IS FOR</div>
        <h2 className={styles.title}>SERIOUS ABOUT BUILDING A CREATIVE CAREER?</h2>
      </div>

      <div className={styles.fullBleedArtwork}>
        <Image
          src="/images/pn.png"
          alt="Idea School creative community"
          width={2048}
          height={508}
          className={styles.fullBleedImage}
          sizes="100vw"
        />
      </div>

      <div className={styles.contentGrid}>
        <ol className={styles.reasons}>
          {reasons.map((reason, index) => (
            <li className={styles.reason} key={reason}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.notForYou}>
        <div>
          <span className={styles.notLabel}>A QUICK REALITY CHECK</span>
          <h3>This may not be for you if</h3>
        </div>
        <ul>
          {exclusions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
