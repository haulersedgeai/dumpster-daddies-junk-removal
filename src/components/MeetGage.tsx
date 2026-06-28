import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function MeetGage() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="chip">
            <MapPin className="h-3.5 w-3.5 text-signal" />
            Family-owned · Leander, TX
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Meet Gage — your neighbor with a truck.
          </h2>
          <div className="mt-5 space-y-4 text-muted leading-relaxed max-w-xl">
            <p>
              Dumpster Daddies is owned and run by Gage Taylor, born-and-raised right here in Leander. When you call, you talk to Gage — not a national call center, not a dispatcher reading a script.
            </p>
            <p>
              We treat every home like it&rsquo;s a neighbor&rsquo;s — floors covered, walls protected, every space we touch left broom-clean before we drive off.
            </p>
            <p>
              That&rsquo;s how a family-owned business should feel: honest quotes, fair prices, real people who show up when they say they will.
            </p>
          </div>
          <div className="mt-7">
            <Link href="/about" className="btn-ghost">
              More about the family <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden border border-line shadow-xl shadow-ink/10 bg-paper aspect-[5/4]">
            <Image
              src="/images/gage-team.jpg"
              alt="Gage Taylor and the Dumpster Daddies crew in front of their junk removal truck"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
