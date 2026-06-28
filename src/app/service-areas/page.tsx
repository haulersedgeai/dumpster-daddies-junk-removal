import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { towns, secondaryTowns, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas — Junk Removal Across Central Texas",
  description: "Dumpster Daddies covers a 20-mile radius from Leander, TX — including Cedar Park, Liberty Hill, Georgetown, Round Rock, Lakeway, Pflugerville, Hutto, NW Austin and more.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
        ])}
      />

      <PageHero
        eyebrow="Service Areas"
        title="20-mile radius from Leander."
        intro="Same- or next-day junk removal across Central Texas — Cedar Park, Liberty Hill, Georgetown, Round Rock, Lakeway, Bee Cave, Pflugerville, Hutto, NW Austin, and every town in between."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="font-display font-bold text-3xl tracking-tight">Primary Service Areas</h2>
          <p className="mt-3 text-muted">Click any town for local details, reviews, and the full service list.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {towns.map((t) => (
              <Link key={t.slug} href={`/service-areas/${t.slug}`} className="card flex items-start justify-between gap-3 group">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-signal" />
                    <span className="font-display font-bold text-lg">{t.name}, TX</span>
                  </div>
                  {t.blurb && <p className="mt-2 text-sm text-muted leading-relaxed">{t.blurb}</p>}
                  {typeof t.distanceMi === "number" && (
                    <span className="mt-2 inline-block text-xs font-mono text-muted">
                      ~{t.distanceMi} mi from Leander
                    </span>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-signal mt-1 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display font-bold text-2xl tracking-tight">Also serving</h3>
            <p className="mt-2 text-muted text-sm">Within our 20-mile radius — call to confirm same- or next-day availability.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {secondaryTowns.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaMap compact />
      <JobberEmbed />
      <CtaBand />
    </>
  );
}
