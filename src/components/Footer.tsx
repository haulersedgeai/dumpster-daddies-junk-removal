import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";
import { site, services, towns } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-signal text-ink font-display font-bold text-lg">
              DD
            </span>
            <span className="font-display font-bold text-lg">Dumpster Daddies</span>
          </div>
          <p className="mt-4 text-sm text-paper/70 leading-relaxed">
            Family-owned junk removal & cleanouts based in Leander, TX. Same-day service across Central Texas. 5.0★ on {site.reviewCount} Google reviews.
          </p>
          <div className="mt-5 space-y-2 text-sm">
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
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-paper/60">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-paper/80 hover:text-lime">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-paper/60">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {towns.map((t) => (
              <li key={t.slug}>
                <Link href={`/service-areas/${t.slug}`} className="text-paper/80 hover:text-lime">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-paper/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-paper/80 hover:text-lime">About</Link></li>
            <li><Link href="/reviews" className="text-paper/80 hover:text-lime">Reviews</Link></li>
            <li><Link href="/contact" className="text-paper/80 hover:text-lime">Contact</Link></li>
            <li><Link href="/terms" className="text-paper/80 hover:text-lime">Terms</Link></li>
            <li><Link href="/privacy" className="text-paper/80 hover:text-lime">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Site by Adimize | Local Service Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
}
