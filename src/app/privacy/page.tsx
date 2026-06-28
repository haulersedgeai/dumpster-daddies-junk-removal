import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy" }]}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 prose prose-sm text-muted leading-relaxed space-y-6">
          <p className="text-xs uppercase tracking-wider text-muted font-semibold">
            Informational only — not legal advice. Have counsel review before relying on this.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">1. What We Collect</h2>
          <p>
            When you contact us by phone, text, web form, or in person, we collect the information you share — typically name, phone number, address or zip, and a description of the work. We may also receive standard web analytics (page views, device, approximate location) from our hosting and analytics providers.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">2. How We Use It</h2>
          <p>
            We use this information to quote, schedule, perform, and follow up on your service — and to improve how we run the business. We do not sell your information.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">3. Communications</h2>
          <p>
            If you contact us, we may follow up by phone, text, or email about your inquiry. Reply STOP to text messages to opt out.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">4. Third-Party Services</h2>
          <p>
            We use trusted vendors (e.g., scheduling software, hosting, analytics, payment processors) to operate. They process information only as needed to provide the service to us.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">5. Cookies & Analytics</h2>
          <p>
            Our website may use cookies and analytics to understand traffic and improve the site. You can disable cookies in your browser settings.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">6. Data Retention</h2>
          <p>
            We keep customer records as long as reasonably needed to provide services, comply with tax/business obligations, and resolve disputes.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">7. Your Rights</h2>
          <p>
            You can request a copy, correction, or deletion of the personal information we hold about you by calling <a href={site.phoneHref} className="text-signal">{site.phone}</a>.
          </p>

          <h2 className="font-display text-ink text-2xl font-bold">8. Governing Law</h2>
          <p>
            This policy is governed by the laws of the State of Texas.
          </p>

          <p className="text-xs text-muted">Last updated: {new Date().getFullYear()}.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
