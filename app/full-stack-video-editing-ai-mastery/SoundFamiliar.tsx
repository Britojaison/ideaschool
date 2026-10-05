"use client";

import React from "react";
import styles from "@/styles/Home.module.css";
import Reveal from "@/components/ui/Reveal";

const doubts = [
  "You want to get into editing or filmmaking. But you don't know where to even start.",
  "You've watched countless YouTube videos. But you still can't put together a proper edit.",
  "You want to build a portfolio. But you have zero real projects to show.",
  "You're ready to learn. But you don't know if you're \"too late\" or \"not creative enough.\""
];

// Duplicate items to ensure smooth infinite scrolling if there are too few items
const scrollingDoubts = [...doubts, ...doubts, ...doubts];

export default function SoundFamiliar() {
  return (
    <section className={styles.schoolsSection} id="sound-familiar">
      <div className="container">
        <Reveal>
          <div className={styles.careerPanel}>
            <div className={styles.checklist} aria-label="Common career worries">
              <div className={styles.checklistInner}>
                <div className={styles.checklistCopy}>
                  {scrollingDoubts.map((doubt, index) => (
                    <div className={styles.checkRow} key={`${doubt}-1-${index}`}>
                      <span className={styles.checkbox} aria-hidden="true" />
                      <span>{doubt}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.checklistCopy} aria-hidden="true">
                  {scrollingDoubts.map((doubt, index) => (
                    <div className={styles.checkRow} key={`${doubt}-2-${index}`}>
                      <span className={styles.checkbox} aria-hidden="true" />
                      <span>{doubt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.careerMessage}>
              <div className={styles.messageCopy}>
                <p>Sound familiar?</p>
                <h2 style={{textTransform: "uppercase"}}>That&apos;s not a talent problem.</h2>
                <p className={styles.messageBody} style={{display: "block", fontSize: "1.1rem", marginTop: "1rem", color: "#f5f4f1"}}>
                  That&apos;s a starting-point problem.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
