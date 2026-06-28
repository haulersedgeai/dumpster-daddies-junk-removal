import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import JobberEmbed from "@/components/JobberEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Junk Removal & Cleanout Services",
  description: "Same-day junk removal, large cleanouts, demolition, dumpster rentals and more across Leander, Cedar Park and Central Texas.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Every cleanout, one crew."
        intro="Whatever you're getting rid of — a single couch or a whole house — we bring the right truck, crew, and broom."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <ServicesGrid />
        </div>
      </section>
      <JobberEmbed />
      <CtaBand />
    </>
  );
}
