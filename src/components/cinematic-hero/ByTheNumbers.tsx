"use client";

import styles from "./ByTheNumbers.module.css";
import TextAnimation from "@/components/ui/staggerText";

const PHASES = [
  { weeks: "01 - 12", title: "Core training", description: "Build your foundation across video editing, storytelling, sound, motion design, visual effects and Creative AI. Complete practical assignments and improve them through regular mentor feedback." },
  { weeks: "13 - 24", title: "Industry experience", description: "Work through professional-style briefs, deadlines, reviews and revision cycles within the 88GB creative ecosystem. Use this phase to strengthen your process, confidence and portfolio." },
];

export default function ByTheNumbers() {
  return (
    <section className={styles.section} id="by-the-numbers" data-header-theme="light">
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <TextAnimation divideBy="word">
            The programme
          </TextAnimation>
        </p>
        <h2 className={styles.title}>
          <TextAnimation divideBy="word" delay={0.05}>
            12 weeks to build.
          </TextAnimation>
          <br />
          <TextAnimation divideBy="word" delay={0.2}>
            12 weeks to apply.
          </TextAnimation>
        </h2>
        <p className={styles.intro}>
          <TextAnimation divideBy="word" delay={0.15}>
            A clear progression from foundational capability to professional-style briefs, feedback and portfolio development.
          </TextAnimation>
        </p>
      </header>
      <div className={styles.timeline}>
        {PHASES.map((phase, idx) => (
          <article className={styles.phase} key={phase.weeks}>
            <div className={styles.phaseTopline}>
              <span className={styles.weeks}>
                <TextAnimation divideBy="word" delay={0.1 * (idx + 1)}>
                  {phase.weeks}
                </TextAnimation>
              </span>
            </div>
            <div className={styles.phaseContent}>
              <h3 className={styles.phaseTitle}>
                <TextAnimation divideBy="word" delay={0.15 * (idx + 1)}>
                  {phase.title}
                </TextAnimation>
              </h3>
              <p className={styles.description}>
                <TextAnimation divideBy="word" delay={0.2 * (idx + 1)}>
                  {phase.description}
                </TextAnimation>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

