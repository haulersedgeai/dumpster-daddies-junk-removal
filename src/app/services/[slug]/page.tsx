import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import ReviewCard from "@/components/ReviewCard";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { services, site } from "@/data/site";
import { pickReviews } from "@/lib/reviews";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) notFound();

  const reviews = pickReviews(3, services.findIndex((s) => s.slug === slug) * 2);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 6);

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
        eyebrow="Service"
        title={`${service.title} in Leander & Central Texas`}
        intro={service.description}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight">What&rsquo;s included</h2>
            <ul className="mt-6 space-y-3">
              {service.included.map((i) => (
                <li key={i} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-signal shrink-0 mt-0.5" />
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              <strong className="text-ink">Upfront flat-rate pricing, no hidden fees.</strong>{" "}
              You&rsquo;ll know the cost before we lift a thing.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight">Common items we take</h2>
            <ul className="mt-6 space-y-3">
              {service.commonItems.map((i) => (
                <li key={i} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4">
                  <span className="h-2 w-2 mt-2 rounded-full bg-signal shrink-0" />
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-xl mx-auto">
            <span className="chip">What people say</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              5.0★ on {site.reviewCount} Google reviews.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <ReviewCard key={r.name + r.when} review={r} />
            ))}
          </div>
        </div>
      </section>

      <Faq items={service.faq} title={`${service.title} — FAQ`} />

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="font-display font-bold text-3xl tracking-tight">More services we offer</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card flex items-center justify-between">
                <span className="font-display font-semibold">{o.title}</span>
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
