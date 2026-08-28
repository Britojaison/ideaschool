import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Reveal from "@/components/ui/Reveal";

const doubts = [
  "You want to get into editing or filmmaking. But you don't know where to even start.",
  "You've watched countless YouTube videos. But you still can't put together a proper edit.",
  "You want to build a portfolio. But you have zero real projects to show.",
  "You're ready to learn. But you don't know if you're 'too late' or 'not creative enough.'",
  "That's not a talent problem. That's a starting point problem.",
  "You learn from another 12-hour tutorial. But you still can't build it on your own.",
  "You try to keep up with every new AI tool. But you just end up feeling overwhelmed.",
  "You wait until you feel 'ready' to apply. But that day never seems to arrive.",
  "You want to make work that actually gets noticed. But it just blends in with the rest.",
  "You try to figure out what belongs in a portfolio. But you overthink every single piece.",
];

const scrollingDoubts = [...doubts, ...doubts];

const schools = [
  { name: "Visual", href: "/visual-school" },
  { name: "Tech", href: "/tech-school" },
  { name: "Marketing", href: "/marketing-school" },
];

const floatingNotes = [
  { text: "It seemed fine until I opened it on my phone", className: styles.note1 },
  { text: "WordPress is slowing me down", className: styles.note2 },
  { text: "The last agency used a template", className: styles.note3 },
  { text: "I don't have time for this", className: styles.note4 },
  { text: "Why can't I edit content myself?", className: styles.note5 },
  { text: "I've been burned before", className: styles.note6 },
  { text: "Is this actually helping me get customers?", className: styles.note7 },
];

export default function Schools() {
  return <section className={styles.schoolsSection} id="schools">
    <div className="container">
      <Reveal>
        <div className={styles.careerPanel}>
          {floatingNotes.map((note, index) => (
            <span key={index} className={`${styles.note} ${note.className}`}>
              {note.text}
            </span>
          ))}

          <div className={styles.checklist} aria-label="Common career worries">
            <div className={styles.checklistInner}>
              <div className={styles.checklistCopy}>
                {scrollingDoubts.map((doubt, index) => <div className={styles.checkRow} key={`${doubt}-1-${index}`}>
                  <span className={styles.checkbox} aria-hidden="true" />
                  <span>{doubt}</span>
                  <span className={styles.rowDots} aria-hidden="true">•••</span>
                  <span className={styles.rowNumber}>{String((index % doubts.length) + 1).padStart(2, "0")}</span>
                </div>)}
              </div>
              <div className={styles.checklistCopy} aria-hidden="true">
                {scrollingDoubts.map((doubt, index) => <div className={styles.checkRow} key={`${doubt}-2-${index}`}>
                  <span className={styles.checkbox} aria-hidden="true" />
                  <span>{doubt}</span>
                  <span className={styles.rowDots} aria-hidden="true">•••</span>
                  <span className={styles.rowNumber}>{String((index % doubts.length) + 1).padStart(2, "0")}</span>
                </div>)}
              </div>
            </div>
          </div>

          <div className={styles.careerMessage}>
            <div className={styles.messageCopy}>
              <p>Sound familiar?</p>
              <h2>Your career shouldn’t feel like a never ending checklist.</h2>
              <p className={styles.messageBody}>Choose a craft. Make real work. Build the proof that gets you hired.</p>
            </div>
            <nav className={styles.schoolLinks} aria-label="Explore our schools">
              {schools.map((school) => <Link href={school.href} key={school.name}>
                {school.name} School <b aria-hidden="true">↗</b>
              </Link>)}
            </nav>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
