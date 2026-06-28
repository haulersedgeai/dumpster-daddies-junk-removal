"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site, towns } from "@/data/site";
import QuoteLink from "./QuoteLink";

const mainServices = [
  { slug: "junk-removal", title: "Junk Removal" },
  { slug: "large-cleanouts", title: "Cleanouts" },
  { slug: "demolition", title: "Demolition" },
  { slug: "dumpster-rentals", title: "Dumpster Rentals" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-paper"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Dumpster Daddies — Home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-lime font-display font-bold text-lg group-hover:bg-signal transition-colors">
            DD
          </span>
          <span className="font-display font-bold text-lg leading-tight">
            Dumpster Daddies
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[15px]">
          <Link href="/about" className="px-3 py-2 rounded-md hover:bg-white">About</Link>

          <div className="relative group">
            <button className="px-3 py-2 rounded-md hover:bg-white flex items-center gap-1">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <div className="bg-white border border-line rounded-2xl shadow-xl p-2 min-w-[260px]">
                {mainServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-paper"
                  >
                    {s.title}
                  </Link>
                ))}
                <div className="h-px bg-line my-1" />
                <Link href="/services" className="block px-3 py-2 text-sm font-semibold text-signal hover:bg-paper rounded-md">
                  All Services →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="px-3 py-2 rounded-md hover:bg-white flex items-center gap-1">
              Service Areas <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <div className="bg-white border border-line rounded-2xl shadow-xl p-2 min-w-[480px] grid grid-cols-2 gap-1">
                {towns.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/service-areas/${t.slug}`}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-paper"
                  >
                    {t.name}
                  </Link>
                ))}
                <Link href="/service-areas" className="col-span-2 block px-3 py-2 mt-1 text-sm font-semibold text-signal hover:bg-paper rounded-md border-t border-line">
                  All Service Areas →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/reviews" className="px-3 py-2 rounded-md hover:bg-white">Reviews</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold text-ink hover:text-signal transition-colors text-sm"
          >
            <Phone className="h-4 w-4 text-signal" /> {site.phone}
          </a>
          <QuoteLink className="btn-primary text-sm py-2 px-3.5">
            Get a Free Quote
          </QuoteLink>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-paper shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-line">
              <span className="font-display font-bold text-lg">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-2 flex flex-col gap-1 text-base">
              <Link href="/about" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">About</Link>

              <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Services</div>
              {mainServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white">
                  {s.title}
                </Link>
              ))}
              <Link href="/services" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white text-signal font-semibold">All Services →</Link>

              <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Service Areas</div>
              {towns.slice(0, 8).map((t) => (
                <Link key={t.slug} href={`/service-areas/${t.slug}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white text-sm text-muted">
                  {t.name}
                </Link>
              ))}
              <Link href="/service-areas" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white text-signal font-semibold">All Service Areas →</Link>

              <div className="mt-2 h-px bg-line" />
              <Link href="/reviews" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">Reviews</Link>
            </nav>

            <div className="mt-auto p-4 border-t border-line space-y-2">
              <a href={site.phoneHref} className="btn-ghost w-full">
                <Phone className="h-4 w-4 text-signal" /> {site.phone}
              </a>
              <QuoteLink className="btn-primary w-full" onClick={() => setOpen(false)}>
                Get a Free Quote
              </QuoteLink>
              <p className="text-center text-xs text-muted pt-1">{site.hoursHuman}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
