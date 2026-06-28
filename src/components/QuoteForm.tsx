"use client";

import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { site } from "@/data/site";

const options = [
  "Single item / furniture removal",
  "Garage cleanout",
  "Whole-house / large cleanout",
  "Estate or eviction cleanout",
  "Storage unit cleanout",
  "Construction debris",
  "Dumpster rental",
  "Demolition (shed/deck/fence)",
  "Other / not sure",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 text-paper/90"
    >
      {!submitted ? (
        <>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-lime">name</span>
              <input
                required
                type="text"
                name="name"
                className="bg-white/5 border border-white/10 focus:border-signal focus:outline-none rounded-lg px-3 py-2.5 text-sm"
                placeholder="Jane Smith"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-lime">phone</span>
              <input
                required
                type="tel"
                name="phone"
                className="bg-white/5 border border-white/10 focus:border-signal focus:outline-none rounded-lg px-3 py-2.5 text-sm"
                placeholder="(512) 555-0100"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-mono text-lime">zip</span>
            <input
              required
              type="text"
              name="zip"
              maxLength={10}
              className="bg-white/5 border border-white/10 focus:border-signal focus:outline-none rounded-lg px-3 py-2.5 text-sm w-40"
              placeholder="78641"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-mono text-lime">what_are_you_getting_rid_of</span>
            <select
              required
              name="job"
              className="bg-white/5 border border-white/10 focus:border-signal focus:outline-none rounded-lg px-3 py-2.5 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Select a job type…</option>
              {options.map((o) => (
                <option key={o} value={o} className="bg-ink">{o}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-primary w-full mt-2">
            <Send className="h-4 w-4" /> Request a Quote
          </button>
          <p className="text-xs text-paper/60 text-center">
            We&rsquo;ll respond fast — or just{" "}
            <a href={site.phoneHref} className="underline text-lime">call {site.phone}</a>.
          </p>
        </>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="inline-flex h-12 w-12 rounded-full bg-signal/20 border border-signal/40 items-center justify-center">
            <Phone className="h-6 w-6 text-signal" />
          </div>
          <div className="font-display font-bold text-2xl">Thanks — let&rsquo;s lock it in.</div>
          <p className="text-paper/75 text-sm">
            We&rsquo;ll text you shortly. For fastest service, call{" "}
            <span className="text-lime font-semibold">{site.phone}</span> to book on the spot.
          </p>
          <a href={site.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" /> Call {site.phone} to book
          </a>
        </div>
      )}
    </form>
  );
}
