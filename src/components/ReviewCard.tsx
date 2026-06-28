import { Star } from "lucide-react";

export interface Review {
  name: string;
  rating: number;
  when: string;
  text: string;
  featured?: boolean;
  source?: string;
  location?: string;
}

const sourceStyles: Record<string, string> = {
  Google: "bg-signal/10 text-signal border-signal/30",
  Facebook: "bg-ink/10 text-ink border-ink/30",
  Yelp: "bg-[#d32323]/10 text-[#d32323] border-[#d32323]/30",
};

export default function ReviewCard({ review }: { review: Review }) {
  const source = review.source ?? "Google";
  const badgeClass = sourceStyles[source] ?? "bg-paper text-muted border-line";

  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-signal">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-signal" />
          ))}
        </div>
        <span
          className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${badgeClass}`}
        >
          {source}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/90 line-clamp-[10]">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm">{review.name}</div>
          <div className="text-xs text-muted">
            {review.when}
            {review.location && ` · ${review.location}`}
          </div>
        </div>
      </div>
    </div>
  );
}
