import { Star } from "lucide-react";

export interface Review {
  name: string;
  rating: number;
  when: string;
  text: string;
  featured?: boolean;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-center gap-1 text-signal">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-signal" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/90 line-clamp-[10]">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm">{review.name}</div>
          <div className="text-xs text-muted">{review.when}</div>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-muted">Google</span>
      </div>
    </div>
  );
}
