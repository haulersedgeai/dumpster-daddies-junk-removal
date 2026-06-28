import QuoteForm from "./QuoteForm";

/**
 * One file to edit when the Jobber embed is ready.
 *
 * Replace the entire return-block below the marker with the
 * snippet Jobber gives you (usually a <script> + <div id="...">),
 * then ship.
 */
export default function JobberEmbed() {
  return (
    <section id="get-quote" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="chip">Request a Quote</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Tell us what you&rsquo;ve got.
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            Send a few details and we&rsquo;ll come back with an honest, flat-rate quote — usually within minutes during business hours.
          </p>
          <p className="mt-3 text-sm text-muted/90 max-w-md">
            You&rsquo;ll talk to Gage, the owner — not a call center.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>• Same- or next-day pickup available</li>
            <li>• Upfront, flat-rate quotes</li>
            <li>• Military, First Responder &amp; Holiday discounts</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="quote-card p-6 md:p-8">
            <div className="mb-5">
              <h3 className="font-display font-bold text-xl md:text-2xl">Get your free quote</h3>
              <p className="text-sm text-muted mt-1">
                Tell us what you&rsquo;ve got — we usually reply within minutes during business hours.
              </p>
            </div>

            {/* ===== PASTE JOBBER EMBED CODE HERE (replaces fallback below) ===== */}
            <QuoteForm />
            {/* ===== END JOBBER EMBED ===== */}
          </div>
        </div>
      </div>
    </section>
  );
}
