import Link from "next/link";
import { towns, site } from "@/data/site";

// Roughly translate towns to relative SVG coordinates around Leander.
// We approximate using offsets from town distance/direction rather than real lat/lng.
const positions: Record<string, { x: number; y: number }> = {
  leander: { x: 250, y: 220 },
  "cedar-park": { x: 280, y: 240 },
  "liberty-hill": { x: 200, y: 175 },
  georgetown: { x: 340, y: 175 },
  "round-rock": { x: 360, y: 245 },
  jonestown: { x: 195, y: 250 },
  "lago-vista": { x: 175, y: 280 },
  "brushy-creek": { x: 310, y: 250 },
  "anderson-mill": { x: 290, y: 270 },
  volente: { x: 200, y: 290 },
  "point-venture": { x: 165, y: 270 },
  lakeway: { x: 195, y: 320 },
  "bee-cave": { x: 215, y: 350 },
  pflugerville: { x: 380, y: 275 },
  hutto: { x: 410, y: 230 },
  "austin-nw": { x: 285, y: 320 },
};

export default function ServiceAreaMap({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">Service Area</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            {site.serviceRadiusMiles}-mile radius from Leander.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We cover every town within 20 miles of Leander, TX — from Cedar Park and Liberty Hill to Georgetown, Round Rock, Lakeway, Bee Cave, Pflugerville, Hutto and NW Austin.
          </p>
          {!compact && (
            <div className="mt-6 flex flex-wrap gap-2">
              {towns.map((t) => (
                <Link key={t.slug} href={`/service-areas/${t.slug}`} className="chip hover:border-signal">
                  {t.name}
                </Link>
              ))}
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/service-areas" className="btn-dark">All Service Areas</Link>
            <a href={site.phoneHref} className="btn-ghost">Call {site.phone}</a>
          </div>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-auto rounded-3xl border border-line bg-paper"
            role="img"
            aria-label="Service area map showing 20-mile radius around Leander, Texas"
          >
            <defs>
              <radialGradient id="rad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00B866" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00B866" stopOpacity="0" />
              </radialGradient>
              <pattern id="dotgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#0B0F1C" fillOpacity="0.06" />
              </pattern>
            </defs>
            <rect width="500" height="500" fill="url(#dotgrid)" />
            <circle cx="250" cy="250" r="190" fill="url(#rad)" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="#00B866" strokeOpacity="0.5" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="#00B866" strokeOpacity="0.2" strokeWidth="2" />

            {towns.map((t) => {
              const p = positions[t.slug] ?? { x: 250, y: 250 };
              const isHome = t.slug === "leander";
              return (
                <g key={t.slug}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHome ? 7 : 4}
                    fill={isHome ? "#C8FF4D" : "#0B0F1C"}
                    stroke={isHome ? "#0B0F1C" : "#fff"}
                    strokeWidth={isHome ? 2 : 1.5}
                  />
                  <text
                    x={p.x + 9}
                    y={p.y + 4}
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui"
                    fontWeight={isHome ? 700 : 500}
                    fill="#0B0F1C"
                  >
                    {t.name}
                  </text>
                </g>
              );
            })}

            <text x="20" y="480" fontFamily="ui-monospace, monospace" fontSize="10" fill="#5B6472">
              20-mile radius · Leander, TX
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
