"use client";

import { useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";
import { sortedReviews, sourceCounts, type ReviewSource, type ReviewTopic } from "@/lib/reviews";

type SourceFilter = "All" | ReviewSource;
type TopicFilter = "All" | ReviewTopic;

const sources: { key: SourceFilter; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Google", label: `Google (${sourceCounts.Google})` },
  { key: "Facebook", label: `Facebook (${sourceCounts.Facebook})` },
  { key: "Yelp", label: `Yelp (${sourceCounts.Yelp})` },
];

const topics: { key: TopicFilter; label: string }[] = [
  { key: "All", label: "All" },
  { key: "large-cleanouts", label: "Large Cleanouts" },
  { key: "same-day", label: "Same & Next-Day" },
  { key: "furniture-single", label: "Furniture & Single Items" },
  { key: "featured", label: "Featured" },
];

const PAGE_SIZE = 12;

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
        active
          ? "bg-signal text-white border-signal shadow-sm"
          : "bg-white text-ink border-line hover:border-ink/30"
      }`}
    >
      {children}
    </button>
  );
}

export default function ReviewsWall() {
  const [source, setSource] = useState<SourceFilter>("All");
  const [topic, setTopic] = useState<TopicFilter>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return sortedReviews.filter((r) => {
      if (source !== "All" && r.source !== source) return false;
      if (topic !== "All" && !r.topics.includes(topic)) return false;
      return true;
    });
  }, [source, topic]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  function setSourceReset(s: SourceFilter) {
    setSource(s);
    setPage(1);
  }
  function setTopicReset(t: TopicFilter) {
    setTopic(t);
    setPage(1);
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-semibold tracking-wide text-muted mb-2">Source</div>
            <div className="flex flex-wrap gap-2">
              {sources.map((s) => (
                <Toggle key={s.key} active={source === s.key} onClick={() => setSourceReset(s.key)}>
                  {s.label}
                </Toggle>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-muted mb-2">Topic</div>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <Toggle key={t.key} active={topic === t.key} onClick={() => setTopicReset(t.key)}>
                  {t.label}
                </Toggle>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted">
            Showing {visible.length} of {filtered.length}{filtered.length === sortedReviews.length ? " reviews" : ` matching reviews · ${sortedReviews.length} total`}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((r, i) => (
            <ReviewCard key={`${r.name}-${r.when}-${i}`} review={r} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted text-sm">
            No reviews match those filters yet — try widening the source or topic.
          </div>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button onClick={() => setPage((p) => p + 1)} className="btn-dark">
              Show more reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
