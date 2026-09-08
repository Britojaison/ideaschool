"use client";

import styles from "./NextStepCta.module.css";
import TextAnimation from "@/components/ui/staggerText";

export default function NextStepCta() {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <TextAnimation divideBy="word">Take the next step</TextAnimation>
        </p>
        <h2 className={styles.title}>
          <TextAnimation divideBy="word" delay={0.1}>
            Build your skills. Build your portfolio. Build your career.
          </TextAnimation>
        </h2>
        <div className={styles.footer}>
          <p className={styles.copy}>
            <TextAnimation divideBy="word" delay={0.25}>
              Apply to IDEA School or speak with the team to understand whether the program is the right fit for you.
            </TextAnimation>
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              onClick={() => window.dispatchEvent(new Event("open-home-form"))}
            >
              Apply now <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
