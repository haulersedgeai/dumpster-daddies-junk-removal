import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { name: string; href?: string }[];
}) {
  return (
    <section className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-20 w-[420px] h-[420px] glow-green pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-paper/60 mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="hover:text-lime">{b.name}</Link>
                ) : (
                  <span>{b.name}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="chip-dark">{eyebrow}</span>}
        <h1 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {intro && <p className="mt-6 text-paper/75 max-w-2xl leading-relaxed">{intro}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" /> Call {site.phone}
          </a>
          <Link href="#get-quote" className="btn-ghost bg-white/5 border-white/15 text-paper hover:bg-white/10">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
