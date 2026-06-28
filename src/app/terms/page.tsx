import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Terms" }]}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 prose prose-sm text-muted leading-relaxed space-y-6">
          <p className="text-xs uppercase tracking-wider text-muted font-semibold">
            Informational only — not legal advice. Have counsel review before relying on this.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">1. Services</h2>
          <p>
            {site.name} provides junk removal, cleanout, light demolition, dumpster rental, and related hauling services across Central Texas. All services are subject to availability, equipment access, and weather.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">2. Quotes & Pricing</h2>
          <p>
            Quotes are based on volume, access, and the nature of materials. We confirm a flat-rate price before performing work. Hazardous materials, items requiring special handling, or items added beyond the original scope may change pricing — we&rsquo;ll re-quote on the spot if so.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">3. Cancellations</h2>
          <p>
            You may cancel up until our truck departs for your address at no charge. Late cancellations after dispatch may incur a trip fee.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">4. Items We Won&rsquo;t Take</h2>
          <p>
            We don&rsquo;t haul hazardous waste, asbestos, paints/solvents, medical waste, or charged propane/freon-containing items. We&rsquo;ll let you know on-site if anything in your load can&rsquo;t go with us.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">5. Property Protection</h2>
          <p>
            We treat your property with care. In the rare event of accidental damage, notify us before our crew leaves the site so we can document and resolve it promptly.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">6. Payment</h2>
          <p>
            Payment is due upon completion unless otherwise agreed in writing. We accept standard forms of payment and provide a receipt or invoice.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {site.name}&rsquo;s liability for any claim arising out of our services is limited to the amount paid by you for the services giving rise to the claim.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, without regard to its conflict-of-law provisions.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">9. Contact</h2>
          <p>
            Questions about these terms? Call <a href={site.phoneHref} className="text-signal">{site.phone}</a>.
          </p>

          <p className="text-xs text-muted">Last updated: {new Date().getFullYear()}.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
