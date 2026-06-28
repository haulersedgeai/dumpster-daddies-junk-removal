"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const stats: Stat[] = [
  { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
  { value: 104, label: "Reviews", suffix: "+" },
  { value: 7, label: "Days a Week", prefix: "" },
  { value: 20, label: "Mile Radius", suffix: "mi" },
];

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}

export default function StatCounters() {
  return (
    <section className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold text-4xl md:text-5xl text-lime tracking-tight">
              {s.prefix ?? ""}
              <CountUp to={s.value} decimals={s.decimals ?? 0} />
              {s.suffix ?? ""}
            </div>
            <div className="mt-1 text-sm uppercase tracking-wider text-paper/70 font-mono">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
