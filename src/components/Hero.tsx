import Image from "next/image";
import { Phone, CheckCircle2, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import QuoteLink from "./QuoteLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 warm-wash pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] glow-green pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="chip">
            <span className="inline-block h-2 w-2 rounded-full bg-signal animate-pulse" />
            Same & Next-Day Service Available
          </span>

          <h1 className="mt-5 font-display font-bold text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight">
            Get Your Space Back<br />
            <span className="relative inline-block">
              Without Lifting a Finger
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-signal/20 rounded-full -z-0" aria-hidden />
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            We walk in, carry it out, sweep it clean, and haul it away. Same and next-day junk removal across Leander, Cedar Park, and 20 miles around — with upfront, flat-rate pricing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteLink className="btn-primary">
              <Sparkles className="h-5 w-5" /> Get a Free Quote
            </QuoteLink>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone className="h-5 w-5 text-signal" /> Call {site.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="chip">
              <CheckCircle2 className="h-3.5 w-3.5 text-signal" /> Same & Next-Day Service
            </span>
            <span className="chip">
              <CheckCircle2 className="h-3.5 w-3.5 text-signal" /> Military & First Responder Discounts
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-line shadow-2xl shadow-ink/10 bg-white aspect-[4/5] sm:aspect-auto">
            <Image
              src="/images/hero-gage.jpg"
              alt="Gage Taylor, owner of Dumpster Daddies Junk Removal, with truck"
              width={1200}
              height={1400}
              priority
              className="w-full h-full sm:h-auto object-cover"
              style={{ objectPosition: "70% 30%" }}
            />
          </div>
          <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-signal text-white rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:p-4 shadow-xl">
            <div className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider">Open Now</div>
            <div className="text-[11px] sm:text-sm mt-0.5">7am–8pm · 7 Days</div>
          </div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white text-ink rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:p-4 shadow-xl border border-line max-w-[160px] sm:max-w-[200px]">
            <div className="font-display font-bold text-lg sm:text-2xl text-signal leading-none">5.0★</div>
            <div className="text-[10px] sm:text-xs text-muted mt-0.5 sm:mt-1">on {site.reviewCount} Google reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
