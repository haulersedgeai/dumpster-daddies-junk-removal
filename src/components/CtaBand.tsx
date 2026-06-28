import { Phone } from "lucide-react";
import { site } from "@/data/site";
import QuoteLink from "./QuoteLink";

export default function CtaBand({
  title = "Ready to get your space back?",
  body = "Same- or next-day junk removal across Leander, Cedar Park, and 20 miles around. Upfront flat-rate pricing — no hidden fees.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section id="get-quote-cta" className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[420px] h-[420px] glow-green pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="chip-dark">Get a Quote</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">{title}</h2>
          <p className="mt-4 text-paper/75 leading-relaxed max-w-xl">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteLink className="btn-primary">
              Get a Free Quote
            </QuoteLink>
            <a href={site.phoneHref} className="btn-outline-light">
              <Phone className="h-5 w-5" /> Call {site.phone}
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="font-mono text-xs text-lime mb-4">{`> hours.list`}</div>
          <div className="font-display text-3xl font-bold">{site.hoursHuman}</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-paper/80">
            <div><div className="text-lime font-bold text-2xl">5.0★</div>{site.reviewCount} Google reviews</div>
            <div><div className="text-lime font-bold text-2xl">20mi</div>around Leander</div>
            <div><div className="text-lime font-bold text-2xl">7 days</div>a week, on call</div>
            <div><div className="text-lime font-bold text-2xl">$$</div>flat-rate, no surprises</div>
          </div>
        </div>
      </div>
    </section>
  );
}
