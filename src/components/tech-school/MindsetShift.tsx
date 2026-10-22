"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./TechSchool.module.css";

const PRINCIPLES = [
  {
    index: "01",
    title: "Architectural Protocol",
    text: "Treat AI as a high-speed execution engine governed by strict system specifications.",
    image: "/images/tech-school/architectural-protocol-ink.jpg",
    imageAlt: "Gold geometric blocks locked into an architectural core",
  },
  {
    index: "02",
    title: "Production Scale",
    text: "Build scalable full-stack architecture with Next.js, relational schemas, and typed API contracts.",
    image: "/images/tech-school/production-scale-ink.jpg",
    imageAlt: "A rising stack of gold and white slabs",
  },
  {
    index: "03",
    title: "Agentic Indexing",
    text: "Master multi-file refactoring, local context indexing, and deterministic agentic config rules.",
    image: "/images/tech-school/agentic-indexing-ink.jpg",
    imageAlt: "A gold network of connected nodes",
  },
  {
    index: "04",
    title: "Structured Systems",
    text: "Ship production-grade structured JSON schemas, Zod validation, and high-recall RAG pipelines.",
    image: "/images/tech-school/structured-systems-ink.jpg",
    imageAlt: "White blocks held in a gold structural frame",
  },
  {
    index: "05",
    title: "Live Cloud Delivery",
    text: "Leave with collaborative, Git-tracked software built and deployed to production cloud in one day.",
    image: "/images/tech-school/live-cloud-delivery-ink.jpg",
    imageAlt: "A white cube rising from a gold block cloud",
  },
];

export default function MindsetShift() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tab = tabRefs.current[active];
    const picker = pickerRef.current;
    if (!tab || !picker) return;
    const tabBox = tab.getBoundingClientRect();
    const pickerBox = picker.getBoundingClientRect();
    if (tabBox.left < pickerBox.left - 4 || tabBox.right > pickerBox.right + 4) {
      tab.scrollIntoView({ inline: "nearest", block: "nearest" });
    }
  }, [active]);
  const point = PRINCIPLES[active];
  const tone = active % 2 === 0 ? styles.protocolCardGold : styles.protocolCardDark;

  const select = (index: number, moveFocus = false) => {
    const next = (index + PRINCIPLES.length) % PRINCIPLES.length;
    setActive(next);
    if (moveFocus) tabRefs.current[next]?.focus();
  };

  const onPickerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(active + 1, true);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(active - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      select(PRINCIPLES.length - 1, true);
    }
  };

  return (
    <section className={`${styles.section} ${styles.mindsetSection}`} id="mindset-shift" data-header-theme="dark">
      <div className={styles.ambientGlowRight} aria-hidden="true" />
      <div className={styles.protocolGrid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.mindsetHeaderGroup}>
          <h2 className={styles.mindsetStatement}>
            The gap between casual prompt hobbyists and production software architects is systematic. Here is how your engineering approach permanently transforms:
          </h2>
        </div>

        <div className={styles.protocolHead}>
          <span className={styles.protocolEyebrow}>True AI engineering</span>
          <Image
            src="/images/vibecode/arrow.png"
            alt=""
            width={52}
            height={52}
            className={styles.protocolStamp}
          />
          <span className={styles.protocolBadge}>Production proof</span>
        </div>

        <div className={styles.protocolBoard}>
          <div className={styles.protocolStage}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={point.index}
                id="protocol-panel"
                role="tabpanel"
                aria-labelledby={`protocol-tab-${point.index}`}
                className={`${styles.protocolStageCard} ${tone}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.protocolStageMain}>
                  <div className={styles.protocolCopy}>
                    <span className={styles.protocolIndex}>{point.index} / 05</span>
                    <h3 className={styles.protocolTitle}>{point.title}</h3>
                    <p className={styles.protocolText}>{point.text}</p>
                  </div>
                </div>
                <div className={styles.protocolArt}>
                  <Image
                    src={point.image}
                    alt={point.imageAlt}
                    fill
                    sizes="(max-width: 860px) 90vw, 420px"
                    className={styles.protocolArtImg}
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div
            ref={pickerRef}
            className={styles.protocolPicker}
            role="tablist"
            aria-label="True AI engineering standards"
            onKeyDown={onPickerKeyDown}
          >
            {PRINCIPLES.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.index}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`protocol-tab-${item.index}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="protocol-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.protocolTab} ${selected ? styles.protocolTabActive : ""}`}
                  onClick={() => select(index)}
                >
                  <span className={styles.protocolTabMark}>
                    <Image
                      src={item.image}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.protocolTabArt}
                    />
                  </span>
                  <span className={styles.protocolTabCopy}>
                    <span className={styles.protocolTabIndex}>{item.index}</span>
                    <span className={styles.protocolTabTitle}>{item.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
