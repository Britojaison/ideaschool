"use client";

import Image from "next/image";
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
                <h3>{item.title}</h3>
                <p>
                  Tools: <strong>{item.tools}</strong>
                </p>
              </div>
              <span className="curriculumToggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen ? (
              <div className="curriculumPanel">
                <div className="curriculumDetails">
                  <p>{item.description}</p>
                  <div className="curriculumImages">
                    {item.images.map((src) => (
                      <div className="curriculumImageWrap" key={src}>
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width: 900px) 100vw, 250px"
                          className="curriculumImage"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
