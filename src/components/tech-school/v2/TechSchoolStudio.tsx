"use client";

import React, { useState } from "react";
import Image from "next/image";
import Shell from "@/components/global/Shell";
import styles from "./TechSchoolStudio.module.css";

const TRAPS = [
  "Everything breaks when real users show up",
  "A generic AI interface that nobody trusts",
  "Security holes slip in without you noticing",
  "One tiny change breaks the whole app",
  "Hours lost asking AI to fix its own bugs",
];

const STANDARDS = [
  {
    index: "01",
    title: "Architectural Protocol",
    text: "Treat AI as a high-speed execution engine governed by strict system specifications.",
    image: "/images/tech-school/architectural-protocol-ink.jpg",
    imageAlt: "Ink drawing of a person arranging blocks on a gold field",
  },
  {
    index: "02",
    title: "Production Scale",
    text: "Build scalable full-stack architecture with Next.js, relational schemas, and typed API contracts.",
    image: "/images/tech-school/production-scale-ink.jpg",
    imageAlt: "Ink drawing of a person building a stepped stack of blocks",
  },
  {
    index: "03",
    title: "Agentic Indexing",
    text: "Master multi-file refactoring, local context indexing, and deterministic agentic config rules.",
    image: "/images/tech-school/agentic-indexing-ink.jpg",
    imageAlt: "Ink drawing of a person linking document cards around a gold circle",
  },
  {
    index: "04",
    title: "Structured Systems",
    text: "Ship production-grade structured JSON schemas, Zod validation, and high-recall RAG pipelines.",
    image: "/images/tech-school/structured-systems-ink.jpg",
    imageAlt: "Ink drawing of a person fitting cubes into a grid",
  },
  {
    index: "05",
    title: "Live Cloud Delivery",
    text: "Leave with collaborative, Git-tracked software built and deployed to production cloud in one day.",
    image: "/images/tech-school/live-cloud-delivery-ink.jpg",
    imageAlt: "Ink drawing of a person sending a block toward a cloud",
  },
];

const DELIVERABLES = [
  { index: "01", title: "Live AI SaaS App", detail: "Next.js, backend APIs, cloud DB, LLM APIs. A live tool for your portfolio." },
  { index: "02", title: "Agentic IDE Setup", detail: "Cursor or Windsurf, custom configs, and code indexing that cuts dev time in half." },
  { index: "03", title: "Production AI Pipeline", detail: "Structured JSON, direct API calls, and basic RAG. Real integration, not chat prompts." },
  { index: "04", title: "Enterprise Workflow", detail: "Git, GitHub, CLI, Postman, and MCP. Hireable code that holds production load." },
];

const AUDIENCE = [
  {
    tag: "Portfolio & career",
    title: "CS & Tech Students",
    text: "Stand out from peers who rely on standard ChatGPT completions. Graduate with deployed production systems, not generic school assignments.",
  },
  {
    tag: "Solo ship MVP",
    title: "Aspiring Founders",
    text: "Build, validate, and ship a functional MVP without hiring an agency. Turn a product idea into a working SaaS with real auth, a database, and billing.",
  },
  {
    tag: "Level up architecture",
    title: "Junior Developers",
    text: "Move from writing raw syntax to directing agentic systems. You command the architecture. The agents do the heavy lifting.",
  },
];

const MENTORS = [
  {
    name: "Arjun Dhananjayan",
    role: "Lead Systems Architect",
    bio: "Agentic workflows, LLM orchestration, and high-performance cloud applications.",
    image: "/images/mentor_ARJUN.webp",
  },
  {
    name: "Elamparithi",
    role: "Head of Product Engineering",
    bio: "UI systems and agentic developer tooling between backend APIs and the interface.",
    image: "/images/parithi12.webp",
  },
  {
    name: "Ajay Karthik",
    role: "AI Workflow Specialist",
    bio: "Multi-file refactoring, retrieval systems, and deterministic LLM outputs.",
    image: "/images/mentor_AJAY.webp",
  },
  {
    name: "Chandrasoodeshwar",
    role: "Product Strategy & Cloud",
    bio: "Production readiness, API contracts, deployment, and shipping real MVPs.",
    image: "/images/mentor_CHANDRU.webp",
  },
];

const MULTIPLIERS = [
  { label: "Speed", text: "Collapse development sprints from weeks to hours by replacing repetitive work with agent workflows." },
  { label: "Productivity", text: "Drop boilerplate, test scaffolding, and manual setup so your attention stays on the business logic." },
  { label: "Capability", text: "Handle schema, backend, frontend, and cloud deployment on your own, without waiting for a team." },
];

function Corners() {
  return (
    <span className={styles.corners} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function Frame({
  className,
  src,
  alt,
  label,
}: {
  className: string;
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <figcaption className={styles.chip}>{label}</figcaption>
      <Image src={src} alt={alt} fill sizes="(max-width: 980px) 90vw, 360px" />
      <Corners />
    </figure>
  );
}

export default function TechSchoolStudio() {
  const [mode, setMode] = useState<"trap" | "standard">("standard");
  const [open, setOpen] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setStatus("error");
      setMessage("Please fill in your name, email, and phone number.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          program: "Tech School: 1-Day AI Engineering Build Workshop",
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to reserve your seat. Please try again or contact us directly.");
      }
      setStatus("success");
      setMessage("Seat reservation request received. Check your email for setup guides and cohort details.");
      setForm({ name: "", email: "", phone: "" });
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <Shell headerOverlay showAnnouncement={false}>
      <div className={styles.page} data-header-theme="dark">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.metaRow}>
              <div>
                <strong>IDEA Tech School</strong>
                <span>1-day live build</span>
              </div>
              <div>
                <strong>Stop prompting. Start shipping.</strong>
                <span>Next.js · agentic IDE · production cloud</span>
              </div>
            </div>
            <h1 className={styles.display}>
              Stop vibe coding.
              <br />
              <span className={styles.displayMute}>Start engineering.</span>
            </h1>
            <p className={styles.lede}>
              Anyone can prompt an AI to spit out code. <strong>Real software engineers</strong> know how to design, secure, and ship production-grade systems. Build and deploy a live AI SaaS application in a single day.
            </p>
            <div className={styles.actions}>
              <button type="button" className={styles.goldBtn} onClick={() => jump("reservation-form")}>
                Reserve your seat
              </button>
              <button type="button" className={styles.ghostBtn} onClick={() => jump("standards")}>
                See the five standards
              </button>
            </div>
          </div>

          <div className={styles.stage} aria-hidden="false">
            <Frame
              className={styles.frameA}
              src="/images/tech-school/agentic-indexing-ink.jpg"
              alt="Ink drawing of a person linking document cards around a gold circle"
              label="INDEX.01"
            />
            <Frame
              className={styles.frameB}
              src="/images/tech-school/structured-systems-ink.jpg"
              alt="Ink drawing of a person fitting cubes into a grid"
              label="SCHEMA.04"
            />
            <Frame
              className={styles.frameC}
              src="/images/tech-school/live-cloud-delivery-ink.jpg"
              alt="Ink drawing of a person sending a block toward a cloud"
              label="SHIP.05"
            />
            <div className={styles.spec}>
              <Corners />
              <div className={styles.specHead}>
                <span className={styles.chip} style={{ position: "static" }}>DAY.SYS</span>
              </div>
              <div className={styles.specRow}><span className={styles.specKey}>Length</span><span className={styles.specVal}>1 day</span></div>
              <div className={styles.specRow}><span className={styles.specKey}>Output</span><span className={styles.specVal}>Live AI SaaS</span></div>
              <div className={styles.specRow}><span className={styles.specKey}>Stack</span><span className={styles.specVal}>Next.js, RAG, cloud</span></div>
              <div className={styles.specRow}><span className={styles.specKey}>Cohort</span><span className={styles.specVal}>Limited seats</span></div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Who it is for</p>
              <h2 className={styles.sectionTitle}>Students. Founders. Engineers.</h2>
            </div>
            <div className={styles.audience}>
              {AUDIENCE.map((item) => (
                <article key={item.title}>
                  <span className={styles.tag}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <p className={styles.note}>
              Prerequisite: a basic understanding of programming concepts, JavaScript or Python. No prior AI or machine learning experience required.
            </p>
          </div>
        </section>

        <section className={styles.section} id="standards">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>The shift</p>
              <h2 className={styles.sectionTitle}>Five ways it breaks. Five ways you build.</h2>
            </div>
            <div className={styles.tabs} role="tablist" aria-label="Workshop lens">
              <button type="button" className={styles.tab} role="tab" aria-selected={mode === "trap"} onClick={() => setMode("trap")}>
                The trap
              </button>
              <button type="button" className={styles.tab} role="tab" aria-selected={mode === "standard"} onClick={() => setMode("standard")}>
                True AI engineering
              </button>
            </div>

            {mode === "trap" ? (
              <div>
                {TRAPS.map((title, i) => (
                  <div className={styles.plainRow} key={title}>
                    <span className={styles.rowIndex}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.rowTitle}>{title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.list}>
                {STANDARDS.map((item, i) => {
                  const expanded = open === i;
                  return (
                    <div key={item.title}>
                      <button
                        type="button"
                        className={styles.row}
                        aria-expanded={expanded}
                        onClick={() => setOpen(expanded ? -1 : i)}
                      >
                        <span className={styles.rowIndex}>{item.index}</span>
                        <span className={styles.rowTitle}>{item.title}</span>
                        <span className={styles.rowMark} aria-hidden="true">{expanded ? "–" : "+"}</span>
                      </button>
                      {expanded && (
                        <div className={styles.panel}>
                          <p>{item.text}</p>
                          <div className={styles.panelArt}>
                            <Image src={item.image} alt={item.imageAlt} fill sizes="280px" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.deliver}>
              <div>
                <p className={styles.kicker}>What you walk away with</p>
                <h2 className={styles.sectionTitle}>Stop studying. Start shipping.</h2>
                <p className={styles.lede}>
                  No theoretical slides. In one day you build, architect, test, and ship full-stack code that lives in production.
                </p>
              </div>
              <ul className={styles.deliverList}>
                {DELIVERABLES.map((item) => (
                  <li key={item.index}>
                    <span className={styles.rowIndex}>{item.index}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>The 2x multiplier</p>
              <h2 className={styles.sectionTitle}>Engineers who direct AI outpace the ones who only prompt.</h2>
            </div>
            <div className={styles.metrics}>
              {MULTIPLIERS.map((item) => (
                <article key={item.label}>
                  <p className={styles.metric}>2×</p>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Mentors</p>
              <h2 className={styles.sectionTitle}>Built by engineers who ship daily.</h2>
            </div>
            <div className={styles.mentors}>
              {MENTORS.map((mentor) => (
                <article key={mentor.name} className={styles.mentor}>
                  <div className={styles.portrait}>
                    <Image src={mentor.image} alt={mentor.name} fill sizes="(max-width: 980px) 50vw, 280px" />
                    <Corners />
                  </div>
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                  <p className={styles.bio}>{mentor.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="reservation-form">
          <div className={styles.wrap}>
            <div className={styles.seat}>
              <div>
                <p className={styles.kicker}>Enrollment open</p>
                <h2 className={styles.display}>
                  Take your seat.
                  <br />
                  <span className={styles.displayMute}>One day. Live software.</span>
                </h2>
                <p className={styles.lede}>
                  The industry doesn&apos;t need more people who can chat with a bot. It needs builders who can command AI to architect robust systems. Join the 1-day sprint, ship your first live SaaS tool, and upgrade how you build.
                </p>
              </div>
              <form className={styles.form} onSubmit={submit}>
                <Corners />
                <label className={styles.field}>
                  <span className={styles.formLabel}>Name</span>
                  <input
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.formLabel}>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.formLabel}>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
                <button type="submit" className={styles.goldBtn} disabled={status === "loading"}>
                  {status === "loading" ? "Reserving…" : "Reserve your seat"}
                </button>
                {message && (
                  <p className={status === "error" ? styles.formError : styles.formMsg} role="status">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
