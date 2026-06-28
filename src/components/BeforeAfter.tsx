"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Pair {
  before: string;
  after: string;
  label: string;
  alt: string;
}

const pairs: Pair[] = [
  { before: "/images/garage-before.jpg", after: "/images/garage-after.jpg", label: "Garage Cleanout", alt: "Garage before and after Dumpster Daddies cleanout" },
  { before: "/images/yard-before.jpg", after: "/images/yard-after.jpg", label: "Furniture / Yard Haul", alt: "Yard before and after junk removal" },
  { before: "/images/storage-before.jpg", after: "/images/storage-after.jpg", label: "Storage Unit", alt: "Storage unit before and after cleanout" },
];

function Slider({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.min(100, Math.max(0, p)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) => dragging.current && e.touches[0] && move(e.touches[0].clientX);
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div className="card p-3">
      <div className="text-xs uppercase tracking-wider font-mono text-muted mb-2 px-2">{pair.label}</div>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl select-none cursor-ew-resize bg-ink"
        onMouseDown={(e) => {
          dragging.current = true;
          const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          setPos(((e.clientX - r.left) / r.width) * 100);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          if (e.touches[0]) {
            const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            setPos(((e.touches[0].clientX - r.left) / r.width) * 100);
          }
        }}
      >
        <Image
          src={pair.after}
          alt={`${pair.alt} (after)`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={`${pair.alt} (before)`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-lime"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 rounded-full bg-lime border-2 border-ink shadow-lg flex items-center justify-center">
            <span className="text-ink text-xs font-bold">⇆</span>
          </div>
        </div>
        <div className="absolute top-3 left-3 chip-dark text-[10px]">Before</div>
        <div className="absolute top-3 right-3 chip-dark text-[10px] bg-signal/90 border-signal text-white">After</div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Real Jobs</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Drag to see the difference.
          </h2>
          <p className="mt-3 text-muted">From packed-tight garages to overgrown yards — same crew, every time.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {pairs.map((p) => (
            <Slider key={p.label} pair={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
