import Link from "next/link";
import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { sortedReviews, reviewsMeta } from "@/lib/reviews";

export default function ReviewsMarquee() {
  const row = sortedReviews.slice(0, 18);
  const half = row.slice(0, 9);
  const looped = [...half, ...half];

  return (
    <section className="bg-white border-y border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="chip"><Star className="h-3.5 w-3.5 fill-signal text-signal" /> Reviews</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              {reviewsMeta.rating.toFixed(1)}★ on {reviewsMeta.count} Google reviews.
            </h2>
            <p className="mt-3 text-muted max-w-xl">
              Real people in Leander, Cedar Park, and across Central Texas — including a lot of large cleanouts and same- or next-day saves.
            </p>
          </div>
          <Link href="/reviews" className="btn-ghost shrink-0">Read all reviews</Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="py-8 overflow-hidden">
          <div className="marquee-track flex gap-4 w-max">
            {looped.map((r, i) => (
              <div key={i} className="w-[320px] shrink-0">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
