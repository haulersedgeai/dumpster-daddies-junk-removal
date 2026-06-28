import { Phone, Star, Home, Clock, CalendarCheck, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { site } from "@/data/site";
import QuoteLink from "./QuoteLink";

const seals = [
  { icon: Star, label: `5.0★ on ${site.reviewCount} Google reviews` },
  { icon: Home, label: "Family-owned · Leander, TX" },
  { icon: Clock, label: "Open 7 days · 7am–8pm" },
  { icon: CalendarCheck, label: "Same- or next-day available" },
  { icon: Sparkles, label: "Broom-clean guarantee" },
  { icon: ShieldCheck, label: "Military, First Responder & Holiday discounts" },
];

export default function CtaBand({
  title = "Ready to get your space back?",
  body = "Same- or next-day junk removal across Leander, Cedar Park, and 20 miles around. Upfront flat-rate pricing — no hidden fees.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section id="get-quote-cta" className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[460px] h-[460px] glow-green pointer-events-none" />
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
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
          <div className="flex items-center gap-2 text-paper/80">
            <Heart className="h-4 w-4 text-signal" />
            <span className="font-display font-semibold text-base">Why neighbors call us first</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {seals.map(({ icon: Icon, label }) => (
              <span key={label} className="trust-seal">
                <Icon className="h-3.5 w-3.5 text-signal shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
