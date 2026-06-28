"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { towns, site } from "@/data/site";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] lg:aspect-square rounded-3xl border border-line bg-paper flex items-center justify-center">
      <div className="text-xs uppercase tracking-wider font-mono text-muted">Loading map…</div>
    </div>
  ),
});

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

        <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border border-line shadow-xl">
          <LeafletMap />
        </div>
      </div>
    </section>
  );
}
