import Link from "next/link";
import { Phone, Clock, MapPin, Star, ChevronDown } from "lucide-react";
import { site, services, towns } from "@/data/site";

const socials = [
  {
    name: "Google",
    href: "https://share.google/0Uoy99rtUHzAz5knk",
    label: "Google Business Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M21.6 12.227c0-.7-.063-1.373-.18-2.018H12v3.818h5.382a4.598 4.598 0 0 1-1.995 3.018v2.51h3.227c1.886-1.736 2.986-4.293 2.986-7.328z" />
        <path d="M12 22c2.7 0 4.964-.895 6.618-2.428l-3.227-2.51c-.896.6-2.04.954-3.391.954-2.605 0-4.81-1.76-5.598-4.124H3.064v2.59A9.997 9.997 0 0 0 12 22z" />
        <path d="M6.402 13.892a5.99 5.99 0 0 1 0-3.78V7.523H3.064a10.01 10.01 0 0 0 0 8.96l3.338-2.59z" />
        <path d="M12 5.997c1.47 0 2.79.506 3.83 1.5l2.864-2.864C16.96 2.99 14.696 2 12 2A9.997 9.997 0 0 0 3.064 7.523l3.338 2.59C7.19 7.757 9.395 5.997 12 5.997z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Dumpster-Daddies-Junk-Removal-and-Hauling-Services-61578121913483/",
    label: "Facebook page",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/dumpster-daddies-leander",
    label: "Yelp page",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14.1 13.6l-.7 4.8c-.1.6-.7 1-1.3.8l-3.2-1.6c-.5-.3-.6-.9-.3-1.4l3.5-4.2c.5-.6 1.6-.3 1.7.5l.3 1.1zM12.6 9.6c.5.4 1.3.1 1.3-.5V2.6c0-.5-.4-.9-.9-1-1.6-.2-3.2 0-4.7.7-.5.2-.7.8-.5 1.3l3.6 6c.1.2.2.4.4.5.2-.1.5-.1.8-.5zm6 5.6l-4.5-1.4c-.6-.2-1.2.3-1.2.9v3.6c0 .6.6 1.1 1.2.9 1.6-.5 3-1.4 4.2-2.6.4-.4.3-1.1-.2-1.4h.5zm-1.5-3l-4.6 1.4c-.6.2-.7 1-.3 1.4l2.6 2.6c.4.4 1 .4 1.4 0 1.2-1.2 2-2.6 2.5-4.2.2-.6-.3-1.1-1-.9l-.6.5zm-9.5-1.8l-3.7-2.5c-.4-.3-.5-.9-.2-1.3.9-1.5 2.2-2.6 3.7-3.5.5-.3 1.1 0 1.2.6l1.3 6.2c.1.6-.5 1.1-1.1.8l-1.2-.3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-signal text-ink font-display font-bold text-lg">
              DD
            </span>
            <span className="font-display font-bold text-lg">Dumpster Daddies</span>
          </div>
          <p className="text-sm text-paper/70 leading-relaxed max-w-sm">
            Family-owned junk removal & cleanouts based in Leander, TX. Same- or next-day service across Central Texas. 5.0★ on {site.reviewCount} Google reviews.
          </p>

          <div className="space-y-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-lime">
              <Phone className="h-4 w-4 text-signal" /> {site.phone}
            </a>
            <div className="flex items-center gap-2 text-paper/80">
              <Clock className="h-4 w-4 text-signal" /> {site.hoursHuman}
            </div>
            <div className="flex items-center gap-2 text-paper/80">
              <MapPin className="h-4 w-4 text-signal" /> Leander, TX · 20-mile radius
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-paper/50 font-mono mb-3">Follow us</div>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 hover:bg-signal hover:border-signal hover:text-ink flex items-center justify-center text-paper transition-colors"
                >
                  {s.icon}
                </a>
              ))}
              <a
                href={site.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-1.5 text-xs text-paper/70 hover:text-lime"
              >
                <Star className="h-3.5 w-3.5 fill-lime text-lime" />
                5.0 · {site.reviewCount} on Google
              </a>
            </div>
          </div>
        </div>

        <details className="md:col-span-3 border-t border-white/10 md:border-0 pt-4 md:pt-0 footer-accordion [&[open]>summary>svg]:rotate-180">
          <summary className="list-none flex items-center justify-between md:block cursor-pointer md:cursor-default md:pointer-events-none">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.18em] text-paper/50 md:mb-5">Services</h4>
            <ChevronDown className="h-4 w-4 text-paper/50 transition-transform md:hidden" />
          </summary>
          <ul className="space-y-2.5 text-sm pt-4 md:pt-0">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-paper/80 hover:text-lime">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details className="md:col-span-3 border-t border-white/10 md:border-0 pt-4 md:pt-0 footer-accordion [&[open]>summary>svg]:rotate-180">
          <summary className="list-none flex items-center justify-between md:block cursor-pointer md:cursor-default md:pointer-events-none">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.18em] text-paper/50 md:mb-5">Service Areas</h4>
            <ChevronDown className="h-4 w-4 text-paper/50 transition-transform md:hidden" />
          </summary>
          <ul className="space-y-2.5 text-sm pt-4 md:pt-0">
            {towns.slice(0, 12).map((t) => (
              <li key={t.slug}>
                <Link href={`/service-areas/${t.slug}`} className="text-paper/80 hover:text-lime">
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-signal hover:text-lime font-semibold">All areas →</Link>
            </li>
          </ul>
        </details>

        <details className="md:col-span-2 border-t border-white/10 md:border-0 pt-4 md:pt-0 footer-accordion [&[open]>summary>svg]:rotate-180">
          <summary className="list-none flex items-center justify-between md:block cursor-pointer md:cursor-default md:pointer-events-none">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.18em] text-paper/50 md:mb-5">Company</h4>
            <ChevronDown className="h-4 w-4 text-paper/50 transition-transform md:hidden" />
          </summary>
          <ul className="space-y-2.5 text-sm pt-4 md:pt-0">
            <li><Link href="/about" className="text-paper/80 hover:text-lime">About</Link></li>
            <li><Link href="/reviews" className="text-paper/80 hover:text-lime">Reviews</Link></li>
            <li><Link href="/contact" className="text-paper/80 hover:text-lime">Contact</Link></li>
            <li><Link href="/terms" className="text-paper/80 hover:text-lime">Terms</Link></li>
            <li><Link href="/privacy" className="text-paper/80 hover:text-lime">Privacy</Link></li>
          </ul>
        </details>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Site by{" "}
            <a
              href="https://adimize.com"
              target="_blank"
              rel="noopener"
              className="text-paper hover:text-lime underline-offset-4 hover:underline"
            >
              Adimize
            </a>{" "}
            | Local Service Digital Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
