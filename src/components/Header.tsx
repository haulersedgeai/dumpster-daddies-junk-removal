"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site, towns } from "@/data/site";
import QuoteLink from "./QuoteLink";

const mainServices = [
  { slug: "junk-removal", title: "Junk Removal" },
  { slug: "large-cleanouts", title: "Cleanouts" },
  { slug: "demolition", title: "Demolition" },
  { slug: "dumpster-rentals", title: "Dumpster Rentals" },
];

const primaryTownSlugs = [
  "leander",
  "cedar-park",
  "liberty-hill",
  "georgetown",
  "round-rock",
  "lago-vista",
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const primaryTowns = primaryTownSlugs
    .map((slug) => towns.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const drawer = open && (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div
        className="absolute inset-0 bg-ink/60"
        onClick={close}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-paper shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-line shrink-0">
          <span className="font-display font-bold text-lg">Menu</span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 flex flex-col text-base">
          <Link
            href="/about"
            onClick={close}
            className="px-3 py-3 rounded-md hover:bg-white min-h-[44px] flex items-center font-medium"
          >
            About
          </Link>

          <div className="my-1 h-px bg-line" />

          <button
            type="button"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((v) => !v)}
            className="w-full px-3 py-3 rounded-md hover:bg-white min-h-[44px] flex items-center justify-between font-medium"
          >
            <span>Services</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {servicesOpen && (
            <div className="pl-3 flex flex-col">
              {mainServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={close}
                  className="px-3 py-2.5 rounded-md hover:bg-white min-h-[44px] flex items-center text-sm text-muted"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={close}
                className="px-3 py-2.5 rounded-md hover:bg-white min-h-[44px] flex items-center text-sm text-signal font-semibold"
              >
                All Services →
              </Link>
            </div>
          )}

          <div className="my-1 h-px bg-line" />

          <button
            type="button"
            aria-expanded={areasOpen}
            onClick={() => setAreasOpen((v) => !v)}
            className="w-full px-3 py-3 rounded-md hover:bg-white min-h-[44px] flex items-center justify-between font-medium"
          >
            <span>Service Areas</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${areasOpen ? "rotate-180" : ""}`}
            />
          </button>
          {areasOpen && (
            <div className="pl-3 flex flex-col">
              {primaryTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/service-areas/${t.slug}`}
                  onClick={close}
                  className="px-3 py-2.5 rounded-md hover:bg-white min-h-[44px] flex items-center text-sm text-muted"
                >
                  {t.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                onClick={close}
                className="px-3 py-2.5 rounded-md hover:bg-white min-h-[44px] flex items-center text-sm text-signal font-semibold"
              >
                All Service Areas →
              </Link>
            </div>
          )}

          <div className="my-1 h-px bg-line" />

          <Link
            href="/reviews"
            onClick={close}
            className="px-3 py-3 rounded-md hover:bg-white min-h-[44px] flex items-center font-medium"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            onClick={close}
            className="px-3 py-3 rounded-md hover:bg-white min-h-[44px] flex items-center font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="p-4 border-t border-line space-y-2 shrink-0 bg-paper">
          <a href={site.phoneHref} className="btn-ghost w-full">
            <Phone className="h-4 w-4 text-signal" /> {site.phone}
          </a>
          <QuoteLink className="btn-primary w-full" onClick={close}>
            Get a Free Quote
          </QuoteLink>
          <p className="text-center text-xs text-muted pt-1">{site.hoursHuman}</p>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-paper"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Dumpster Daddies — Home">
          <Image
            src="/logo.png"
            alt="Dumpster Daddies Junk Removal"
            width={92}
            height={92}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-display font-bold text-lg leading-tight text-ink">
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
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-white min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mounted && drawer ? createPortal(drawer, document.body) : null}
    </header>
  );
}
