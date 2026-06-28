import reviewsData from "@/data/reviews.json";

export interface Review {
  name: string;
  rating: number;
  when: string;
  text: string;
  featured?: boolean;
}

export interface ReviewsFile {
  meta: { source: string; rating: number; count: number; note?: string };
  reviews: Review[];
}

const file = reviewsData as ReviewsFile;

export const reviewsMeta = file.meta;
export const allReviews: Review[] = file.reviews;

export const featuredReviews: Review[] = file.reviews.filter((r) => r.featured);

export const sortedReviews: Review[] = [
  ...file.reviews.filter((r) => r.featured),
  ...file.reviews.filter((r) => !r.featured),
];

export function pickReviews(n: number, offset = 0): Review[] {
  return sortedReviews.slice(offset, offset + n);
}
