"use client";

import { useEffect } from "react";

const revealSelector = [
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main h5",
  "main h6",
  "main p",
  "main li",
  "main dt",
  "main dd",
  "main blockquote",
  "main figcaption",
  "main summary",
  "main label",
  "main legend",
  "main small",
  ".workshopCardCopy h3",
  ".workshopCardCopy p",
  ".worksMeta p",
  ".worksMeta a",
  ".worksMeta dt",
  ".worksMeta dd",
  ".feedbackIntro h2",
  ".feedbackIntro p",
  ".testimonialCopy blockquote",
  ".testimonialCopy p",
  ".testimonialCopy footer",
  ".whyIdeaCopy .sectionPill",
  ".whyIdeaCopy h2",
  ".whyIdeaCopy p",
  ".whyIdeaCopy dt",
  ".whyIdeaCopy dd",
  ".programNotice",
  ".mentorsIntro h2",
  ".mentorsIntro p",
  ".mentorCard h3",
  ".mentorCard p",
  ".learningFaq h2",
  ".learningCopy p",
  ".learningStepLabel",
  ".faqIntro h2",
  ".faqIntro p",
  ".faqItem summary span:first-child",
  ".faqItem p",
  ".contactCopy h2",
  ".contactCopy p",
  ".applyForm label",
  ".applyForm button",
  ".applyForm > p",
  ".siteFooter p",
  ".footerLinks h2",
  ".footerLinks a",
  ".siteFooter > strong",
].join(", ");

const excludedRevealSelector = [
  ".hero",
  ".siteHeader",
  ".desktopNav",
  ".quickActions",
  ".mobileHeaderActions",
  ".heroFluidGlassLayer",
  "canvas",
  "svg",
  "button",
  "input",
  "select",
  "textarea",
  "[aria-hidden='true']",
].join(", ");

export default function ScrollTextReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (item, index, items) => {
        if (!item.textContent?.trim()) return false;
        if (item.closest(excludedRevealSelector)) return false;
        return items.indexOf(item) === index;
      },
    );

    if (reduceMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    revealItems.forEach((item, index) => {
      item.classList.add("scrollTextReveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
