import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import ReviewCard from "@/components/ReviewCard";
import { ServicesGrid } from "@/components/ServiceCard";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { towns, site } from "@/data/site";
import { pickReviews } from "@/lib/reviews";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) return {};
  return {
    title: `Junk Removal in ${town.name}, TX`,
    description: `Same- or next-day junk removal, large cleanouts, and dumpster rentals in ${town.name}, TX. Family-owned, flat-rate pricing. 5.0★ on ${site.reviewCount} Google reviews.`,
    alternates: { canonical: `/service-areas/${town.slug}` },
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) notFound();

  const idx = towns.findIndex((t) => t.slug === slug);
  const reviews = pickReviews(3, (idx + 1) * 3);
  const neighbors = towns
    .filter((t) => t.slug !== town.slug)
    .sort((a, b) => Math.abs((a.distanceMi ?? 99) - (town.distanceMi ?? 0)) - Math.abs((b.distanceMi ?? 99) - (town.distanceMi ?? 0)))
    .slice(0, 6);

  const localFaq = [
    {
      q: `Do you offer same- or next-day junk removal in ${town.name}?`,
      a: `Yes. ${town.name} is well inside our 20-mile radius from Leander, and same- or next-day pickups are standard there. Call before noon for best chances of an afternoon slot.`,
    },
    {
      q: `How is pricing calculated for ${town.name} jobs?`,
      a: `Volume-based, flat-rate. We give you an upfront quote before we start — no per-mile fees, no surprise add-ons, no hidden disposal charges.`,
    },
    {
      q: `What services do you offer in ${town.name}?`,
      a: `Full junk removal, large cleanouts (whole-house, estate, eviction, hoarding), garage and storage cleanouts, commercial cleanouts, light demolition, furniture removal, and 17-yard dumpster rentals.`,
    },
    {
      q: `Are you available 7 days a week in ${town.name}?`,
      a: `Yes — we're open 7am to 8pm, 7 days a week, including weekends and holidays.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: town.name, url: `${site.url}/service-areas/${town.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(localFaq)} />

      <PageHero
        eyebrow={`${town.name}, TX`}
        title={`Junk Removal in ${town.name}, TX`}
        intro={`${town.blurb ?? `${town.name} is right in our service area.`} Same- or next-day pickups, flat-rate pricing, broom-clean finish — 5.0★ on ${site.reviewCount} Google reviews.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: town.name },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-3xl tracking-tight">
              Local crew, local pricing for {town.name}.
            </h2>
            <div className="mt-6 prose prose-sm max-w-none text-muted leading-relaxed space-y-4">
              <p>
                We&rsquo;re based in Leander, just {town.distanceMi ?? "a short drive"} miles from {town.name}, which means we can usually be at your driveway the same or next day you call. Whether you&rsquo;ve got a single couch, a packed garage, or an entire house to clear, the same family-owned crew shows up — on time, in uniform, with a flat-rate quote in hand.
              </p>
              <p>
                {town.name} jobs we run all the time: garage cleanouts, mattress and furniture removal, estate and eviction cleanouts for realtors and property managers, post-remodel debris haul-offs for contractors, and 17-yard dumpster drops for bigger weekend projects.
              </p>
              <p>
                Open <strong className="text-ink">7am–8pm, 7 days a week</strong>. Military, First Responder, and Holiday discounts available — just ask.
              </p>
            </div>
          </div>
          <aside className="card h-fit">
            <div className="flex items-center gap-2 text-signal">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Local Snapshot</span>
            </div>
            <h3 className="mt-3 font-display font-bold text-2xl">{town.name}, TX</h3>
            {typeof town.distanceMi === "number" && (
              <p className="mt-1 text-sm text-muted">{town.distanceMi} miles from Leander HQ</p>
            )}
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Same/next-day service</span><span>Yes</span></li>
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Hours</span><span>7a–8p, 7 days</span></li>
              <li className="flex justify-between border-b border-line pb-2"><span className="text-muted">Rating</span><span>5.0★ ({site.reviewCount})</span></li>
              <li className="flex justify-between"><span className="text-muted">Discounts</span><span>Military · FR · Holiday</span></li>
            </ul>
            <a href={site.phoneHref} className="btn-primary w-full mt-5">Call {site.phone}</a>
          </aside>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Services</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              What we do in {town.name}.
            </h2>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Reviews</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              Loved across Central Texas.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <ReviewCard key={r.name + r.when} review={r} />
            ))}
          </div>
        </div>
      </section>

      <Faq items={localFaq} title={`${town.name} — FAQ`} />

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="font-display font-bold text-3xl tracking-tight">Neighboring areas we serve</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {neighbors.map((n) => (
              <Link key={n.slug} href={`/service-areas/${n.slug}`} className="card flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold">{n.name}, TX</div>
                  {typeof n.distanceMi === "number" && (
                    <div className="text-xs text-muted font-mono">~{n.distanceMi} mi from Leander</div>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-signal" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JobberEmbed />
      <CtaBand />
    </>
  );
}
