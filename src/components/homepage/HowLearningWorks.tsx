"use client";

import styles from "./HowLearningWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Read the problem before choosing a direction.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Test ideas, references and possible directions.",
  },
  {
    number: "03",
    title: "Build",
    description: "Use the right tools to develop the idea.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Discuss the decisions behind the work, not only the final output.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Use feedback to resolve the details and improve the result.",
  },
];

export default function HowLearningWorks() {
  return (
    <section className={styles.section} id="how-learning-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionLabel}>HOW LEARNING WORKS</h2>
          <p className={styles.headline}>
            UNDERSTAND THE IDEA. BUILD WITH PURPOSE. REFINE THE OUTCOME.
          </p>
          <p className={styles.headerDesc}>
            You work through practical briefs, explain your decisions and
            strengthen the outcome through feedback.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div className={styles.step} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
