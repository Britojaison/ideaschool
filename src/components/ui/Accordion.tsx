"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Accordion.module.css";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const next = open === i ? null : i;

    if (open !== null && refs.current[open]) {
      gsap.to(refs.current[open], { height: 0, duration: 0.4, ease: "power2.inOut" });
    }

    if (next !== null && refs.current[next]) {
      gsap.to(refs.current[next], { height: "auto", duration: 0.4, ease: "power2.inOut" });
    }

    setOpen(next);
  };

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => (
        <div className={styles.faqItem} key={i}>
          <button className={styles.faqQuestion} onClick={() => toggle(i)}>
            <h4 data-faq="question">{item.q}</h4>
            <span data-faq="icon" className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ""}`}>˅</span>
          </button>
          <div
            className={styles.faqAnswer}
            style={{ height: 0 }}
            ref={el => { refs.current[i] = el; }}
          >
            {item.a.split("\n\n").map((para, pIdx) => (
              <p key={pIdx} data-faq="answer" style={pIdx > 0 ? { marginTop: "12px" } : undefined}>
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
