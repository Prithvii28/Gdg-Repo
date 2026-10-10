"use client";
import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <h2 className="title">FAQs</h2>
      <div className="faqs">
        {faqs.map(([q, a], i) => (
          <div key={q} className="faq">
            <button aria-expanded={open === i} aria-controls={`f${i}`} onClick={() => setOpen(open === i ? null : i)}>
              {q}<span className={open === i ? "chev up" : "chev"}>⌄</span>
            </button>
            <div id={`f${i}`} className={open === i ? "ans show" : "ans"}><p>{a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
