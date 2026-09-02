import styles from "./ByTheNumbers.module.css";

const PHASES = [
  { weeks: "01 - 12", title: "Core training", description: "Build your foundation across video editing, storytelling, sound, motion design, visual effects and Creative AI. Complete practical assignments and improve them through regular mentor feedback." },
  { weeks: "13 - 24", title: "Industry experience", description: "Work through professional-style briefs, deadlines, reviews and revision cycles within the 88GB creative ecosystem. Use this phase to strengthen your process, confidence and portfolio." },
];

export default function ByTheNumbers() {
  return (
    <section className={styles.section} id="by-the-numbers" data-header-theme="light">
      <header className={styles.header}>
        <p className={styles.eyebrow}>The programme</p>
        <h2 className={styles.title}>12 weeks to build.<br />12 weeks to apply.</h2>
        <p className={styles.intro}>A clear progression from foundational capability to professional-style briefs, feedback and portfolio development.</p>
      </header>
      <div className={styles.timeline}>
        {PHASES.map((phase) => (
          <article className={styles.phase} key={phase.weeks}>
            <div className={styles.phaseTopline}>
              <span className={styles.weeks}>{phase.weeks}</span>
            </div>
            <div className={styles.phaseContent}>
              <h3 className={styles.phaseTitle}>{phase.title}</h3>
              <p className={styles.description}>{phase.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
