"use client";

import styles from "./NextStepCta.module.css";
import TextAnimation from "@/components/ui/staggerText";

export default function NextStepCta() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <TextAnimation divideBy="word">
            Have more questions?
          </TextAnimation>
        </h2>
        <div className={styles.footer}>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              onClick={() => window.dispatchEvent(new Event("open-home-form"))}
            >
              Talk to ideaschool <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
