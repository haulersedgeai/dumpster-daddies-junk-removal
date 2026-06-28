import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Truck, Boxes, Hammer, Container } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JobberEmbed from "@/components/JobberEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { categories, services, site, type CategoryKey } from "@/data/site";

export const metadata: Metadata = {
  title: "Junk Removal & Cleanout Services",
  description: "Same- or next-day junk removal, large cleanouts, demolition, dumpster rentals and more across Leander, Cedar Park and Central Texas.",
  alternates: { canonical: "/services" },
};

const categoryHubSlug: Record<CategoryKey, string> = {
  "junk-removal": "junk-removal",
  "large-cleanouts": "large-cleanouts",
  "demolition": "demolition",
  "dumpster-rentals": "dumpster-rentals",
};

const categoryIcons: Record<CategoryKey, React.ComponentType<{ className?: string }>> = {
  "junk-removal": Truck,
  "large-cleanouts": Boxes,
  "demolition": Hammer,
  "dumpster-rentals": Container,
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
        intro="Four main lines, ten ways we help. Whatever you're getting rid of, you're getting the same family-owned team, the same flat-rate honesty, and the same broom-clean finish."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 space-y-16">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.key];
            const hubSlug = categoryHubSlug[cat.key];
            const subs = services.filter((s) => s.category === cat.key && s.slug !== hubSlug);
            const hub = services.find((s) => s.slug === hubSlug);
            return (
              <div key={cat.key}>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-lime">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="chip">Category</span>
                    </div>
                    <h2 className="mt-4 font-display font-bold text-3xl tracking-tight">{cat.title}</h2>
                    <p className="mt-3 text-muted">{cat.blurb}</p>
                    {hub && (
                      <Link
                        href={`/services/${hub.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:text-signal-600"
                      >
                        Visit {cat.title} hub <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                    {hub && (
                      <Link
                        href={`/services/${hub.slug}`}
                        className="card border-signal/40 bg-white"
                      >
                        <span className="chip mb-3" style={{ background: "#C8FF4D", borderColor: "#C8FF4D" }}>
                          Main page
                        </span>
                        <h3 className="font-display font-bold text-lg">{hub.title}</h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">{hub.blurb}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal">
                          Open page <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    )}
                    {subs.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                        <h3 className="font-display font-bold text-lg">{s.title}</h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">{s.blurb}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal">
                          Open page <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <JobberEmbed />
      <CtaBand />
    </>
  );
}
