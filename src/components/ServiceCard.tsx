import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-bold text-xl leading-tight">{service.title}</h3>
        <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">{service.blurb}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal">
        Learn more
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

import { services } from "@/data/site";

export function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
