import { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Dumpster Daddies — Call (512) 677-2803",
  description: `Call ${site.phone}. Open 7am–8pm, 7 days a week. Same and next-day junk removal across Leander, Cedar Park, and 20 miles around.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Contact", url: `${site.url}/contact` },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Call us. We pick up."
        intro="Fastest way to book is by phone — we usually answer on the first ring, even on weekends."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-3 gap-6">
          <div className="card">
            <Phone className="h-6 w-6 text-signal" />
            <h3 className="mt-3 font-display font-bold text-xl">Phone</h3>
            <a href={site.phoneHref} className="mt-1 block text-2xl font-display font-bold hover:text-signal">
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-muted">Call or text — we&rsquo;re fast either way.</p>
          </div>
          <div className="card">
            <Clock className="h-6 w-6 text-signal" />
            <h3 className="mt-3 font-display font-bold text-xl">Hours</h3>
            <p className="mt-1 text-2xl font-display font-bold">{site.hoursHuman}</p>
            <p className="mt-2 text-sm text-muted">Same and next-day pickups are standard. Weekends and holidays included.</p>
          </div>
          <div className="card">
            <MapPin className="h-6 w-6 text-signal" />
            <h3 className="mt-3 font-display font-bold text-xl">Service Area</h3>
            <p className="mt-1 text-2xl font-display font-bold">Leander, TX</p>
            <p className="mt-2 text-sm text-muted">20-mile radius — Cedar Park, Georgetown, Round Rock, Lakeway, NW Austin and more.</p>
          </div>
        </div>
      </section>

      <JobberEmbed />
      <ServiceAreaMap compact />
      <CtaBand />
    </>
  );
}
