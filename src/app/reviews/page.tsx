import { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import ReviewCard from "@/components/ReviewCard";
import CtaBand from "@/components/CtaBand";
import JobberEmbed from "@/components/JobberEmbed";
import { JsonLd } from "@/components/JsonLd";
import { sortedReviews, reviewsMeta } from "@/lib/reviews";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Reviews — 5.0★ on ${reviewsMeta.count} Google Reviews`,
  description: `Real Google reviews for ${site.name}. ${reviewsMeta.count} verified reviews, 5.0-star average across Leander, Cedar Park and Central Texas.`,
  alternates: { canonical: "/reviews" },
};

function reviewsListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewsMeta.rating.toFixed(1),
      reviewCount: reviewsMeta.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: sortedReviews.slice(0, 25).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
      reviewBody: r.text,
    })),
  };
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Reviews", url: `${site.url}/reviews` },
        ])}
      />
      <PageHero
        eyebrow="Reviews"
        title={`5.0★ on ${reviewsMeta.count} Google reviews.`}
        intro="Read every review — from single-couch saves to whole-house cleanouts."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="card flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto bg-white">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-signal">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-signal" />
                ))}
              </div>
              <div className="mt-1 font-display font-bold text-3xl">
                {reviewsMeta.rating.toFixed(1)} / 5 · {reviewsMeta.count} reviews
              </div>
              <p className="mt-1 text-sm text-muted">Source: Google Business Profile</p>
            </div>
            <a href={site.phoneHref} className="btn-primary shrink-0">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedReviews.map((r, i) => (
              <ReviewCard key={r.name + r.when + i} review={r} />
            ))}
          </div>
        </div>
      </section>

      <JobberEmbed />
      <CtaBand />
    </>
  );
}
