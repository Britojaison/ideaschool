import Link from "next/link";
import styles from "./NextStepCta.module.css";

export default function NextStepCta() {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Take the next step</p>
        <h2 className={styles.title}>
          Build your skills. Build your portfolio. Build your career.
        </h2>
        <div className={styles.footer}>
          <p className={styles.copy}>
            Apply to Idea School or speak with the team to understand whether the
            program is the right fit for you.
          </p>
          <div className={styles.actions}>
            <Link
              className={styles.primaryAction}
              href="https://idea-school-vercel-preview.vercel.app/#application"
            >
              Apply now <span aria-hidden="true">↗</span>
            </Link>
            <a className={styles.secondaryAction} href="mailto:hello@ideaschool.pro">
              Ask a question <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
