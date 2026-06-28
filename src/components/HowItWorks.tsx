import { PhoneCall, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Request a Quote",
    body: "Call us or send a quick request. We give an honest, flat-rate quote up front — no hidden fees.",
  },
  {
    icon: Truck,
    title: "We Show Up On Time",
    body: "We text 15 minutes before arrival. We load, sweep, and haul — same or next day available 7am–8pm.",
  },
  {
    icon: Sparkles,
    title: "Enjoy Your Clean Space",
    body: "We leave the space broom-clean. Walk in, breathe out, get back to your day.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">How It Works</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Three steps. Zero stress.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="card relative">
              <div className="absolute -top-3 left-6 inline-flex items-center justify-center h-7 w-7 rounded-full bg-signal text-white text-xs font-bold shadow-md">
                {i + 1}
              </div>
              <s.icon className="h-8 w-8 text-signal" />
              <h3 className="mt-4 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
