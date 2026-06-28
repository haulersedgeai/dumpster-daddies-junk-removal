"use client";

import { useEffect } from "react";

const CLIENTHUB_ID = "ab1f7e84-caea-43ba-8934-fbe85511c6ea-2449640";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/ab1f7e84-caea-43ba-8934-fbe85511c6ea/public/work_request/embedded_work_request_form?form_id=2449640";
const STYLESHEET_HREF =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

export default function JobberEmbed() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${STYLESHEET_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLESHEET_HREF;
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.setAttribute("clienthub_id", CLIENTHUB_ID);
      script.setAttribute("form_url", FORM_URL);
      document.body.appendChild(script);
    }
  }, []);

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
            <li>• Same & next-day pickup available</li>
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

            <div id={CLIENTHUB_ID} />
          </div>
        </div>
      </div>
    </section>
  );
}
