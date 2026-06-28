"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site, services, towns } from "@/data/site";

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
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-lime font-display font-bold text-lg group-hover:bg-signal transition-colors">
            DD
          </span>
          <span className="font-display font-bold text-lg leading-tight">
            Dumpster Daddies
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[15px]">
          <Link href="/" className="px-3 py-2 rounded-md hover:bg-white">Home</Link>
          <Link href="/about" className="px-3 py-2 rounded-md hover:bg-white">About</Link>

          <div className="relative group">
            <button className="px-3 py-2 rounded-md hover:bg-white flex items-center gap-1">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <div className="bg-white border border-line rounded-2xl shadow-xl p-2 min-w-[280px]">
                <Link href="/services" className="block px-3 py-2 text-sm font-semibold text-muted hover:text-ink">All Services →</Link>
                <div className="h-px bg-line my-1" />
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-paper"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="px-3 py-2 rounded-md hover:bg-white flex items-center gap-1">
              Service Areas <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <div className="bg-white border border-line rounded-2xl shadow-xl p-2 min-w-[480px] grid grid-cols-2 gap-1">
                <Link href="/service-areas" className="col-span-2 block px-3 py-2 text-sm font-semibold text-muted hover:text-ink">All Service Areas →</Link>
                <div className="col-span-2 h-px bg-line my-1" />
                {towns.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/service-areas/${t.slug}`}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-paper"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/reviews" className="px-3 py-2 rounded-md hover:bg-white">Reviews</Link>
          <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-white">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={site.phoneHref} className="btn-primary text-sm py-2 px-3">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
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
              <Link href="/" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">Home</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">About</Link>

              <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Services</div>
              <Link href="/services" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white">All Services</Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white text-sm text-muted">
                  {s.title}
                </Link>
              ))}

              <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Service Areas</div>
              <Link href="/service-areas" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white">All Areas</Link>
              {towns.map((t) => (
                <Link key={t.slug} href={`/service-areas/${t.slug}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md hover:bg-white text-sm text-muted">
                  {t.name}
                </Link>
              ))}

              <div className="mt-2 h-px bg-line" />
              <Link href="/reviews" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">Reviews</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-white">Contact</Link>
            </nav>

            <div className="mt-auto p-4 border-t border-line">
              <a href={site.phoneHref} className="btn-primary w-full">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <p className="text-center text-xs text-muted mt-2">{site.hoursHuman}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
