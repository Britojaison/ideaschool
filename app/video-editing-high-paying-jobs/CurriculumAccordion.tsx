"use client";

import { useState } from "react";

type CurriculumItem = {
  title: string;
  tools: string;
  description: string;
  images: string[];
};

type CurriculumAccordionProps = {
  items: CurriculumItem[];
};

export default function CurriculumAccordion({
  items,
}: CurriculumAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="curriculumList">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const title = item.title.replace(/^\[\d+\]\s*/, "");

        return (
          <article
            className={`curriculumItem${isOpen ? " open" : ""}`}
            key={item.title}
            onMouseEnter={() => setOpenIndex(index)}
          >
            <button
              type="button"
              className="curriculumTrigger"
              aria-expanded={isOpen}
              onFocus={() => setOpenIndex(index)}
            >
              <div className="curriculumHeading">
                <h3>{title}</h3>
              </div>
              <span className="curriculumToggle" aria-hidden="true">
                ↗
              </span>
            </button>

            {isOpen ? (
              <div className="curriculumPanel">
                <div className="curriculumDetails">
                  <p>{item.description}</p>
                  <p className="curriculumTools">
                    Tools: <strong>{item.tools}</strong>
                  </p>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
