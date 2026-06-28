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

const fieldClass =
  "bg-white border border-line focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/15 rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-muted/60";
const labelClass = "text-xs font-medium text-muted";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 text-ink"
    >
      {!submitted ? (
        <>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Your name</span>
              <input
                required
                type="text"
                name="name"
                className={fieldClass}
                placeholder="Jane Smith"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Phone</span>
              <input
                required
                type="tel"
                name="phone"
                className={fieldClass}
                placeholder="(512) 555-0100"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>ZIP code</span>
            <input
              required
              type="text"
              name="zip"
              maxLength={10}
              className={`${fieldClass} w-40`}
              placeholder="78641"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>What are you getting rid of?</span>
            <select
              required
              name="job"
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>Select a job type…</option>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-primary w-full mt-2">
            <Send className="h-4 w-4" /> Request a Quote
          </button>
          <p className="text-xs text-muted text-center">
            We&rsquo;ll respond fast — or just{" "}
            <a href={site.phoneHref} className="text-signal font-semibold underline-offset-4 hover:underline">call {site.phone}</a>.
          </p>
        </>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="inline-flex h-12 w-12 rounded-full bg-signal/10 border border-signal/30 items-center justify-center">
            <Phone className="h-6 w-6 text-signal" />
          </div>
          <div className="font-display font-bold text-2xl">Thanks — let&rsquo;s lock it in.</div>
          <p className="text-muted text-sm">
            We&rsquo;ll text you shortly. For fastest service, call{" "}
            <span className="text-signal font-semibold">{site.phone}</span> to book on the spot.
          </p>
          <a href={site.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" /> Call {site.phone} to book
          </a>
        </div>
      )}
    </form>
  );
}
