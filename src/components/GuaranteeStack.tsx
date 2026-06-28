import { ShieldCheck } from "lucide-react";
import { guarantees } from "@/data/site";

export default function GuaranteeStack() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip"><ShieldCheck className="h-3.5 w-3.5 text-signal" /> Our Promises</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Six guarantees, every job.
          </h2>
          <p className="mt-4 text-muted">
            We back every cleanout with the same promises — because how you do it should match what you charge for it.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guarantees.map((g) => (
            <div key={g.title} className="card">
              <ShieldCheck className="h-6 w-6 text-signal" />
              <h3 className="mt-3 font-display font-bold text-lg">{g.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
