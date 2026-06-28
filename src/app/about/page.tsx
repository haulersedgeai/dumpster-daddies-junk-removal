import Image from "next/image";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JobberEmbed from "@/components/JobberEmbed";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Dumpster Daddies — Family-Owned in Leander, TX",
  description: `Meet ${site.owner}, owner of ${site.name}. Family-owned junk removal serving Leander, Cedar Park and Central Texas with on-time, broom-clean service.`,
  alternates: { canonical: "/about" },
};

const beliefs = [
  { title: "Show Up on Time", body: "We text 15 minutes before arrival. If we're late, you get 10% off — every time." },
  { title: "Quote Honestly", body: "Flat-rate, upfront. The quote is the quote. No add-ons, no surprises at the curb." },
  { title: "Finish the Job", body: "Loaded, swept, hauled. We don't leave until the space is broom-clean and you're happy." },
  { title: "Take Care of the Community", body: "Donate, recycle, and dispose responsibly — landfill last, every time." },
];

const setsApart = [
  "Owner-on-every-job — you'll meet Gage",
  "5.0★ on 104 Google reviews",
  "Same- or next-day service across a 20-mile radius",
  "Flat-rate, written quotes — no hidden fees",
  "Military, First Responder, and Holiday discounts",
  "Open 7am–8pm, 7 days a week",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "About", url: `${site.url}/about` },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Family-owned. On time. Broom-clean."
        intro={`Dumpster Daddies is run by ${site.owner} — a Leander local who started this company because honest, on-time junk removal shouldn't be hard to find.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden border border-line shadow-xl">
            <Image
              src="/images/gage-team.jpg"
              alt={`${site.owner} and the Dumpster Daddies crew`}
              width={1200}
              height={1400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <span className="chip">Why we started</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              We do it the way we&rsquo;d want it done at our own house.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Gage Taylor grew up in Central Texas, and the standards on the truck come from how he was raised: show up when you said you would, charge a fair price, do the job right, leave the place better than you found it.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Whether it&rsquo;s a single couch out of a third-floor apartment or a whole-house cleanout for a family in transition, the standard doesn&rsquo;t change. We&rsquo;re a small, family-owned crew — and that&rsquo;s on purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <span className="chip">What we believe in</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              Four standards we don&rsquo;t flex on.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {beliefs.map((b) => (
              <div key={b.title} className="card">
                <CheckCircle2 className="h-6 w-6 text-signal" />
                <h3 className="mt-3 font-display font-bold text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <span className="chip">What sets us apart</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              The checklist.
            </h2>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            {setsApart.map((s) => (
              <li key={s} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-signal shrink-0 mt-0.5" />
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaMap compact />
      <JobberEmbed />
      <CtaBand />
    </>
  );
}
