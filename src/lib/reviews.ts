import reviewsData from "@/data/reviews.json";

export type ReviewSource = "Google" | "Facebook" | "Yelp";
export type ReviewTopic = "large-cleanouts" | "same-day" | "furniture-single" | "featured";

export interface Review {
  name: string;
  rating: number;
  when: string;
  text: string;
  featured?: boolean;
  source?: string;
  location?: string;
}

export interface NormalizedReview extends Review {
  source: ReviewSource;
  topics: ReviewTopic[];
}

interface ReviewsFile {
  meta: { source: string; rating: number; count: number; note?: string };
  reviews: Review[];
}

const file = reviewsData as ReviewsFile;

const KEYWORDS: Record<Exclude<ReviewTopic, "featured">, string[]> = {
  "large-cleanouts": [
    "cleanout", "whole-house", "whole house", "house",
    "garage", "storage", "estate", "hoard",
    "load", "debris", "construction", "move", "boxes",
  ],
  "same-day": [
    "same day", "same-day", "within", "hours", "minutes",
    "quick", "fast", "immediately", "that evening", "that afternoon",
    "right away",
  ],
  "furniture-single": [
    "couch", "sofa", "mattress", "furniture", "dresser",
    "treadmill", "fridge", "appliance", "bed frame", "love seat",
    " tv", "trampoline", "hot tub", "futon",
  ],
};

function detectTopics(text: string, featured: boolean): ReviewTopic[] {
  const t = text.toLowerCase();
  const topics: ReviewTopic[] = [];
  for (const [topic, words] of Object.entries(KEYWORDS) as [Exclude<ReviewTopic, "featured">, string[]][]) {
    if (words.some((w) => t.includes(w))) topics.push(topic);
  }
  if (featured) topics.push("featured");
  return topics;
}

function normalize(r: Review): NormalizedReview {
  const src = (r.source ?? "Google") as ReviewSource;
  return {
    ...r,
    source: src,
    topics: detectTopics(r.text, !!r.featured),
  };
}

export const reviewsMeta = file.meta;

export const allReviews: NormalizedReview[] = file.reviews.map(normalize);

export const featuredReviews: NormalizedReview[] = allReviews.filter((r) => r.featured);

export const sortedReviews: NormalizedReview[] = [
  ...allReviews.filter((r) => r.featured),
  ...allReviews.filter((r) => !r.featured),
];

export function pickReviews(n: number, offset = 0): NormalizedReview[] {
  return sortedReviews.slice(offset, offset + n);
}

// Per-source counts (used for badges + headings)
export const sourceCounts: Record<ReviewSource, number> = allReviews.reduce(
  (acc, r) => {
    acc[r.source] = (acc[r.source] ?? 0) + 1;
    return acc;
  },
  { Google: 0, Facebook: 0, Yelp: 0 } as Record<ReviewSource, number>,
);
