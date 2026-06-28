"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({
  items,
  title = "Frequently Asked",
  intro,
}: {
  items: FaqItem[];
  title?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <div className="text-center">
          <span className="chip">FAQ</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">{title}</h2>
          {intro && <p className="mt-3 text-muted">{intro}</p>}
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={i} className={`rounded-2xl border ${active ? "border-signal/40 bg-white" : "border-line bg-white"}`}>
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                  aria-expanded={active}
                >
                  <span className="font-display font-semibold text-lg leading-snug">{it.q}</span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-paper border border-line flex items-center justify-center">
                    {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {active && (
                  <div className="px-5 pb-5 -mt-1 text-muted leading-relaxed text-sm">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
