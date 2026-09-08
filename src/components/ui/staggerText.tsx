'use client'
import React from "react";
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const;

const container = (stagger: number, delay: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const item = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.6, ease: EASE },
  },
};

const TextAnimation = ({
  children,
  delay = 0,
  divideBy = "word",
  amount = 0.15,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  divideBy?: "word" | "letter";
  amount?: number | "some" | "all";
  className?: string;
  style?: React.CSSProperties;
}) => {
  if (typeof children !== "string") {
    if (typeof children === "number" || typeof children === "boolean") {
      children = String(children);
    } else {
      console.warn("TextAnimation only supports plain text/string children.");
      return <>{children}</>;
    }
  }

  const text = children as string;
  const parts =
    divideBy === "letter" ? text.split("") : text.trim().split(/\s+/);
  const stagger = divideBy === "letter" ? 0.02 : 0.045;

  return (
    <motion.span
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      style={{ display: "inline-block", maxWidth: "100%", ...style }}
    >
      {parts.map((part, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden relative"
          style={{ verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}
        >
          <motion.span
            variants={item}
            className="inline-block will-change-transform"
          >
            {divideBy === "letter"
              ? part === " "
                ? "\u00A0"
                : part
              : i < parts.length - 1
              ? part + "\u00A0"
              : part}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextAnimation;
