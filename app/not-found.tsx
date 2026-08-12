import Link from "next/link";
import Header from "@/components/global/Header";
import HomeForm from "@/components/homepage/HomeForm";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className="newSite">
      <Header />
      <main className={styles.page}>
        <div className={styles.orbit} aria-hidden="true">
          <span />
          <span />
          <i />
        </div>
        <p className={styles.code}>404 — PAGE IN PROGRESS</p>
        <h1>Something exciting<br />is <em>coming soon.</em></h1>
        <p className={styles.copy}>We’re still shaping this part of IDEA School. Check back soon—or keep exploring what’s already live.</p>
        <Link href="/">Back to home <span>↗</span></Link>
        <p className={styles.mark}>IDEA SCHOOL · CREATING FUTURE-READY PROs</p>
      </main>
      <HomeForm />
    </div>
  );
}
