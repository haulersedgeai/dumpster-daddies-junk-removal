import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Truck,
  Sparkles,
  Calendar,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import ReviewCard from "@/components/ReviewCard";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { services, categories, site, type CategoryKey } from "@/data/site";
import { pickReviews } from "@/lib/reviews";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

const processIcons = [PhoneCall, Calendar, Truck, Sparkles];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} in Leander & Central Texas`,
    description: s.blurb,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | ${site.name}`, description: s.blurb },
  };
}

const categoryHubSlug: Record<CategoryKey, string> = {
  "junk-removal": "junk-removal",
  "large-cleanouts": "large-cleanouts",
  "demolition": "demolition",
  "dumpster-rentals": "dumpster-rentals",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const reviews = pickReviews(3, idx * 2);
  const cat = categories.find((c) => c.key === service.category)!;
  const hubSlug = categoryHubSlug[service.category];
  const isHub = service.slug === hubSlug;

  const related = services.filter(
    (s) => s.slug !== service.slug && s.category === service.category,
  );

  const otherCategories = categories
    .filter((c) => c.key !== service.category)
    .map((c) => services.find((s) => s.slug === categoryHubSlug[c.key])!)
    .filter(Boolean);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: service.title, url: `${site.url}/services/${service.slug}` },
        ])}
      />

      <PageHero
        eyebrow={isHub ? `${cat.title} hub` : cat.title}
        title={`${service.title} in Leander & Central Texas`}
        intro={service.blurb}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />

      {/* Intro */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4 text-muted leading-relaxed">
            {(service.intro ?? [service.description]).map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg" : ""}>{p}</p>
            ))}
          </div>
          <aside className="card h-fit">
            <div className="text-xs uppercase tracking-wider font-mono text-muted">At a glance</div>
            <h3 className="mt-2 font-display font-bold text-xl">{service.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Same-day</span><span>Available</span></li>
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Hours</span><span>7a–8p, 7 days</span></li>
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Pricing</span><span>Flat-rate, upfront</span></li>
              <li className="flex justify-between"><span className="text-muted">Rating</span><span>5.0★ ({site.reviewCount})</span></li>
            </ul>
            <a href={site.phoneHref} className="btn-primary w-full mt-5">Call {site.phone}</a>
          </aside>
        </div>
      </section>

      {/* What's included + Common items */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight">What&rsquo;s included</h2>
            <ul className="mt-6 space-y-3">
              {service.included.map((i) => (
                <li key={i} className="flex items-start gap-3 bg-paper border border-line rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-signal shrink-0 mt-0.5" />
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight">
              {service.slug === "demolition" ? "What we tear down" : "Common items we take"}
            </h2>
            <ul className="mt-6 space-y-3">
              {service.commonItems.map((i) => (
                <li key={i} className="flex items-start gap-3 bg-paper border border-line rounded-xl p-4">
                  <span className="h-2 w-2 mt-2 rounded-full bg-signal shrink-0" />
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {service.pricingNotes && service.pricingNotes.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <span className="chip"><Receipt className="h-3.5 w-3.5 text-signal" /> Pricing</span>
              <h2 className="mt-4 font-display font-bold text-3xl tracking-tight">How our pricing works.</h2>
              <p className="mt-3 text-muted">
                We quote before we lift. No hourly traps, no per-mile fees, no end-of-job surprises.
              </p>
            </div>
            <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {service.pricingNotes.map((p) => (
                <li key={p} className="card text-sm leading-relaxed">{p}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="bg-white border-y border-line">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="max-w-2xl">
              <span className="chip">Our process</span>
              <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl tracking-tight">
                {isHub ? `How a ${service.title.toLowerCase()} job runs.` : "How the job runs."}
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((p, i) => {
                const Icon = processIcons[i] ?? Sparkles;
                return (
                  <div key={p.step} className="card relative">
                    <div className="absolute -top-3 left-6 px-2 py-0.5 rounded-md bg-ink text-lime text-xs font-mono">
                      step.0{i + 1}
                    </div>
                    <Icon className="h-7 w-7 text-signal" />
                    <h3 className="mt-3 font-display font-bold text-lg">{p.step}</h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why Dumpster Daddies */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <span className="chip"><ShieldCheck className="h-3.5 w-3.5 text-signal" /> Why Dumpster Daddies</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl tracking-tight">
              The standards on every job.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "On-time guarantee (10% off if late, text 15 min before)",
              "Flat-rate, upfront — no surprises",
              "Property Protection Promise",
              "Broom-clean finish",
              "5.0★ on 104 Google reviews",
              "Family-owned in Leander, TX",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-signal shrink-0 mt-0.5" />
                <span className="text-sm">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-xl mx-auto">
            <span className="chip">What people say</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              5.0★ on {site.reviewCount} Google reviews.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name + r.when + i} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific FAQ */}
      <Faq items={service.faq} title={`${service.title} — FAQ`} />

      {/* Related (same category) + Other categories */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 space-y-12">
          {related.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-3xl tracking-tight">
                {isHub ? `More inside ${cat.title}` : `Related to ${cat.title}`}
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="card flex flex-col">
                    <span className="font-display font-semibold">{r.title}</span>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed">{r.blurb}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight">Other things we do</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {otherCategories.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card flex items-center justify-between">
                  <span className="font-display font-semibold">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-signal" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JobberEmbed />
      <CtaBand />
    </>
  );
}
