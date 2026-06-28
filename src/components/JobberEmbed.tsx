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
            Tell us what&rsquo;s going.
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            Send a few details and we&rsquo;ll come back with an honest, flat-rate quote — usually within minutes during business hours.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>• Same-day pickup available</li>
            <li>• Upfront, flat-rate quotes</li>
            <li>• Military, First Responder & Holiday discounts</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="terminal p-6">
            <div className="terminal-header mb-4 flex items-center justify-between">
              <span>{`> request_quote --same-day`}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </span>
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
