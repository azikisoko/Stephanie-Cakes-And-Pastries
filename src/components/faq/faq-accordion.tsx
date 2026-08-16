"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Faq = {
  _id: string;
  question: string;
  answer: string;
  category?: string;
};

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  // Group FAQs by category
  const grouped = faqs.reduce<Record<string, Faq[]>>((acc, faq) => {
    const cat = faq.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-12">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2 className="font-display text-2xl text-text mb-4">{category}</h2>
          <div className="flex flex-col">
            {items.map((faq) => {
              const isOpen = openId === faq._id;
              return (
                <div key={faq._id} className="border-b border-border">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq._id)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="font-body text-base font-semibold text-text">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      className={`shrink-0 text-text-secondary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body text-sm text-text-secondary leading-relaxed pb-5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
