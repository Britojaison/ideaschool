"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Accordion.module.css";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const toggle = (i: number) => {
    const next = open === i ? -1 : i;
    refs.current.forEach((el, j) => el && gsap.to(el, { height: j === next ? "auto" : 0, duration: .4, ease: "power2.inOut" }));
    setOpen(next);
  };
  return <div className={styles.wrap}>{items.map((item, i) => <div className={styles.item} key={item.q}><button onClick={() => toggle(i)}><span>{item.q}</span><span>{open === i ? "−" : "+"}</span></button><div className={styles.answer} style={{ height: i === 0 ? "auto" : 0 }} ref={el => { refs.current[i] = el; }}><p>{item.a}</p></div></div>)}</div>;
}
