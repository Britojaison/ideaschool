import Link from "next/link";
import styles from "./VisualSchoolCTA.module.css";

export default function VisualSchoolCTA() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.eyebrow}>VISUAL SCHOOL</div>
      
      <svg
        className={styles.arrowIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <line x1="4" y1="20" x2="20" y2="4" />
        <polyline points="10 4 20 4 20 14" />
      </svg>

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          DON’T JUST LEARN THE TOOLS.<br />
          LEARN WHAT TO DO WITH THEM.
        </h2>
        <p className={styles.description}>
          Build skills in editing, filmmaking, design and Creative AI through practical briefs, mentor feedback and industry experience.
        </p>
        <div className={styles.buttonGroup}>
          <Link 
            href="https://idea-school-homepage-preview.vercel.app/?verify=20260904-3#visual" 
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            EXPLORE VISUAL SCHOOL
          </Link>
          <a 
            href="mailto:hello@ideaschool.pro" 
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            TALK TO IDEA SCHOOL
          </a>
        </div>
      </div>
    </section>
  );
}
