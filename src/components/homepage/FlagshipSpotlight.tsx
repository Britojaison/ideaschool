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
              gap: "12px",
              marginBottom: "10px",
              marginLeft: "5px"
          }}>
            <span>Flagship program</span>
            <svg width="42" height="42" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translateY(8px) rotate(10deg)", marginLeft: "4px" }}>
              <path d="M10 12 Q 48 10 40 45" />
              <path d="M28 36 L 40 45 L 48 30" />
            </svg>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
