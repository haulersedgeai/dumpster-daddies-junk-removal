import { Star, Home, CalendarCheck, Map } from "lucide-react";
import { site } from "@/data/site";

const seals = [
  {
    icon: Star,
    label: "5.0★ on Google",
    sub: `${site.reviewCount}+ reviews`,
  },
  {
    icon: Home,
    label: "Family-owned & local",
    sub: "Leander, TX",
  },
  {
    icon: CalendarCheck,
    label: "Same- or next-day",
    sub: "7 days · 7am–8pm",
  },
  {
    icon: Map,
    label: "20-mile service area",
    sub: "Leander & Central TX",
  },
];

export default function StatCounters() {
  return (
    <section className="bg-paper border-y border-line">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {seals.map(({ icon: Icon, label, sub }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl bg-white border border-line px-4 py-3.5"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="font-display font-bold text-sm md:text-base leading-tight text-ink">
                {label}
              </div>
              <div className="text-xs text-muted mt-0.5 truncate">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
