import styles from "@/styles/Flagship.module.css";
import Link from "next/link";

export default function FlagshipSpotlight() {
  return (
    <section className={`section ${styles.spotlight}`}>
      <div className={styles.floatOne} aria-hidden="true" />
      <div className={styles.floatTwo} aria-hidden="true" />
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div style={{
              fontFamily: "var(--font-insomnia-night), cursive",
              color: "var(--ink)",
              fontSize: "clamp(22px, 2.5vw, 28px)",
              transform: "rotate(-3deg) translateY(-15px)",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "5px"
          }}>
            <span>Flagship program</span>
          </div>
          <div className={styles.title}>
            <span className={styles.titleMain}>Creative Editing</span>
            <span className={styles.accent}>& AI Pro</span>
          </div>
          <p className={styles.lede}>
            Twenty four weeks to turn raw ideas into finished films and turn your portfolio into proof.
          </p>
          <div className={styles.actions}>
            <Link href="/creative-editing-course" className={styles.customBtn}>
              Explore the program
            </Link>
          </div>
        </div>
        
        <div className={styles.statsPanel}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>24</span>
              <span className={styles.statLabel}>Weeks of<br/>practice</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>3</span>
              <span className={styles.statLabel}>Learning<br/>phases</span>
            </div>
          </div>
          
          <div className={styles.showreelCard}>
            <video
              src="/images/IDEASCHOOL - 88GB_low bitrate.compressed.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={styles.showreelImg}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className={styles.showreelLabel}>
              <span>STUDENT SHOWREEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
