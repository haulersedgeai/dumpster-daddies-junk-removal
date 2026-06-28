import { Home, Building2, HardHat } from "lucide-react";
import { whoWeHelp } from "@/data/site";

const icons = [Home, Building2, HardHat];

export default function WhoWeHelp() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Who We Help</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Built for the people who call us most.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {whoWeHelp.map((w, i) => {
            const Icon = icons[i];
            return (
              <div key={w.title} className="card">
                <Icon className="h-8 w-8 text-signal" />
                <h3 className="mt-4 font-display font-bold text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
