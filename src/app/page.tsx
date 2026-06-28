import Hero from "@/components/Hero";
import StatCounters from "@/components/StatCounters";
import HowItWorks from "@/components/HowItWorks";
import { ServicesGrid } from "@/components/ServiceCard";
import GuaranteeStack from "@/components/GuaranteeStack";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import BeforeAfter from "@/components/BeforeAfter";
import WhoWeHelp from "@/components/WhoWeHelp";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Faq from "@/components/Faq";
import JobberEmbed from "@/components/JobberEmbed";
import CtaBand from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaq } from "@/data/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />
      <Hero />
      <StatCounters />
      <HowItWorks />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">What We Do</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
              Every cleanout, one crew.
            </h2>
            <p className="mt-4 text-muted">
              Same-day junk removal, large cleanouts, demolition, dumpster drops — all under one roof with the same flat-rate honesty.
            </p>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>
      <GuaranteeStack />
      <ReviewsMarquee />
      <BeforeAfter />
      <WhoWeHelp />
      <ServiceAreaMap compact />
      <Faq items={homeFaq} title="Questions, answered." />
      <JobberEmbed />
      <CtaBand />
    </>
  );
}
