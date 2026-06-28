export const site = {
  name: "Dumpster Daddies Junk Removal",
  shortName: "Dumpster Daddies",
  owner: "Gage Taylor",
  city: "Leander",
  state: "TX",
  region: "Central Texas",
  phone: "(512) 677-2803",
  phoneE164: "+15126772803",
  phoneHref: "tel:+15126772803",
  hoursHuman: "7am–8pm, 7 days a week",
  hoursShort: "7am–8pm daily",
  rating: 5.0,
  reviewCount: 104,
  serviceRadiusMiles: 20,
  geo: { lat: 30.578, lng: -97.853 },
  url: "https://dumpsterdaddiesatx.com",
  googleProfile: "https://www.google.com/search?q=Dumpster+Daddies+Junk+Removal",
  priceRange: "$$",
  agencyCredit: "Site by Adimize | Local Service Digital Marketing",
  discounts: ["Military", "First Responder", "Holiday"],
  utilityBar: "Military, First Responder & Holiday Discounts Available — Call for Details →",
} as const;

export type ServiceKey =
  | "junk-removal"
  | "large-cleanouts"
  | "estate-eviction-cleanouts"
  | "hoarding-cleanouts"
  | "garage-cleanouts"
  | "storage-unit-cleanouts"
  | "commercial-cleanouts"
  | "demolition"
  | "furniture-removal"
  | "dumpster-rentals";

export type CategoryKey = "junk-removal" | "large-cleanouts" | "demolition" | "dumpster-rentals";

export interface Service {
  slug: ServiceKey;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  included: string[];
  commonItems: string[];
  faq: { q: string; a: string }[];
  category: CategoryKey;
  pricingNotes?: string[];
  process?: { step: string; body: string }[];
  intro?: string[]; // additional paragraphs for the intro block
}

export const categories: { key: CategoryKey; title: string; blurb: string }[] = [
  { key: "junk-removal", title: "Junk Removal", blurb: "Same-day junk pickup and single-item hauling — furniture, appliances, yard debris, the works." },
  { key: "large-cleanouts", title: "Cleanouts", blurb: "Whole-house, estate, eviction, hoarding, garage, storage, and commercial cleanouts under one roof." },
  { key: "demolition", title: "Demolition", blurb: "Light demolition for sheds, decks, fences, barns, hot tubs — and we haul the debris on the same visit." },
  { key: "dumpster-rentals", title: "Dumpster Rentals", blurb: "17-yard dumpsters dropped to your driveway. Flat rate, no surprise fees." },
];

export function servicesByCategory(cat: CategoryKey, all: Service[]): Service[] {
  return all.filter((s) => s.category === cat);
}

const STANDARD_PROCESS: { step: string; body: string }[] = [
  { step: "Request a quote", body: "Call, text, or fill the form. Share what's going, your zip, and a few photos if you have them — we can usually quote on the spot." },
  { step: "Lock the schedule", body: "Same-day is standard, evenings and weekends included. We text 15 minutes before we arrive." },
  { step: "We load and haul", body: "Crew does every bit of the lifting, loading, and hauling. You point — we move." },
  { step: "Broom-clean finish", body: "Every space we touch gets swept. We don't leave until it looks better than we found it." },
];

const STANDARD_PRICING: string[] = [
  "Flat-rate, upfront — the quote is the quote.",
  "Volume-based: we price by the space your stuff takes in our truck.",
  "What affects the quote: total volume, access (stairs, tight halls), and item weight (e.g., dirt, concrete, large appliances).",
  "No hidden fees. Military, First Responder, and Holiday discounts available — just ask.",
];

export const services: Service[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    shortTitle: "Junk Removal",
    category: "junk-removal",
    blurb: "Same-day junk pickup with upfront pricing — we load, sweep, and haul it all away.",
    description:
      "Full-service junk removal for homes and businesses in Leander, Cedar Park, and across Central Texas. We do the lifting, loading, and cleanup so you don't have to. Upfront flat-rate pricing, no hidden fees, same-day availability.",
    intro: [
      "Junk Removal is our bread and butter. If it'll fit in our truck and isn't hazardous, we'll haul it — couches, mattresses, appliances, bagged trash, yard debris, remodel leftovers, garage clutter, the works.",
      "We're a family-owned Leander crew, so you're not getting a national franchise quoting through a call center. You get Gage and his team, on the phone and on the truck.",
    ],
    included: [
      "All labor and loading included",
      "Broom-clean sweep after pickup",
      "Responsible disposal, donation, and recycling",
      "Upfront flat-rate quote before we start",
    ],
    commonItems: [
      "Couches, mattresses, recliners",
      "Appliances and electronics",
      "Yard debris and bagged trash",
      "Construction and remodel debris",
      "Boxes, bins, and household clutter",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    faq: [
      { q: "How fast can you come out?", a: "Often same-day. Call before noon and we'll do our best to be there that afternoon — even on weekends." },
      { q: "How is pricing calculated?", a: "By volume — how much space your stuff takes in our truck. You get a flat-rate quote up front before we lift a thing." },
      { q: "What can't you take?", a: "Hazardous waste (paints, solvents, chemicals), and propane/freon-charged units without prep. Ask us — we'll point you the right direction." },
      { q: "Do you handle upstairs or tight-access pickups?", a: "Yes. Apartments, townhomes, third-floor walkups — we've cleared them all. We'll bring extra hands when access is tight." },
      { q: "Can you take a single item?", a: "Absolutely. A single couch or mattress is one of the most common jobs we run." },
      { q: "Do you donate or recycle?", a: "Yes — anything still usable we'd rather see donated, and we recycle metal, e-waste, and mattresses where possible. Landfill is the last resort." },
    ],
  },
  {
    slug: "large-cleanouts",
    title: "Large Cleanouts",
    shortTitle: "Large Cleanouts",
    blurb: "Whole-house, multi-room, and high-volume loads — handled in a single visit.",
    category: "large-cleanouts",
    intro: [
      "Large Cleanouts is our flagship — whole-house clear-outs, multi-room loads, post-renovation cleanups, downsizing projects, and any job where a single pickup truck isn't going to cut it.",
      "We bring a crew, the right truck, and a sorting system that keeps usable items out of the landfill. Most whole-house cleanouts go from packed to broom-clean in a single visit.",
      "Cleanouts is also our category hub for Estate & Eviction, Hoarding, Garage, Storage Unit, and Commercial cleanouts — same crew, same standards, tailored to the situation.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Our flagship service. Whole-house cleanouts, multi-room loads, packed garages, attics, sheds — anything that feels too big to tackle alone. We bring the crew and the truck so the day ends with the property empty and broom-clean.",
    included: [
      "Multi-person crew for fast turnaround",
      "Sort: keep / donate / recycle / dispose",
      "Floor-to-ceiling clearing across multiple rooms",
      "Broom-clean finish in every room we touch",
    ],
    commonItems: [
      "Entire households of furniture and boxes",
      "Packed garages and attics",
      "Sheds and outdoor storage",
      "Years of accumulated belongings",
    ],
    faq: [
      { q: "How long does a whole-house cleanout take?", a: "Most run a half-day to a full day depending on volume and access. We give an honest time estimate with your quote." },
      { q: "Can you donate items in good shape?", a: "Yes — we keep usable items out of the landfill whenever possible, and recycle where we can." },
      { q: "Do you handle stairs and tight access?", a: "Yes. Multi-floor, tight stairwells, narrow apartment hallways — we've cleared them all." },
      { q: "What's the biggest job you'll take?", a: "There's no real cap. Multi-truck whole-house jobs are routine. Tell us what you've got and we'll bring enough crew." },
      { q: "Will you sort and label what stays?", a: "Yes. Point or tag what's keeping and we'll move the rest. We can set aside donate piles too." },
      { q: "Can you handle estate-volume jobs too?", a: "Yes — many of our cleanouts are estate or downsizing jobs. See our Estate & Eviction page for that workflow." },
    ],
  },
  {
    slug: "estate-eviction-cleanouts",
    title: "Estate & Eviction Cleanouts",
    shortTitle: "Estate / Eviction",
    blurb: "Estates, evictions, move-in/move-out debris — handled with care and discretion.",
    category: "large-cleanouts",
    intro: [
      "Estate and eviction cleanouts are emotionally heavy and time-sensitive — for families settling an estate, or for landlords, realtors, and property managers who need a property cleared and ready to relist fast.",
      "We coordinate access directly with whoever's running point, handle the property respectfully, and set aside anything that looks personal (photos, papers, keepsakes) for review before disposal.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Estate, eviction, and move-in/move-out cleanouts for families, landlords, realtors, and property managers. We work quickly, respectfully, and discreetly — sorting what stays, what goes, and what should be donated, so the property is ready for the next chapter.",
    included: [
      "Full property clear-out",
      "Sort & set-aside of personal items, photos, paperwork",
      "Coordination with realtors and property managers",
      "Final broom-clean and trash-out",
    ],
    commonItems: [
      "Furniture, appliances, electronics",
      "Personal belongings and household goods",
      "Garages, sheds, and outdoor storage",
      "Tenant-left debris and abandoned property",
    ],
    faq: [
      { q: "Can you work directly with the realtor or property manager?", a: "Yes. We coordinate access, billing, and timelines directly with whoever's running point." },
      { q: "How do you handle keepsakes and documents?", a: "We set aside anything that looks personal — photos, papers, keepsakes — and check before disposing." },
      { q: "How fast can you turn a property?", a: "Most properties go from full to broom-clean in a single visit, often same-day or next-day." },
      { q: "Can you handle abandoned-tenant cleanouts?", a: "Yes. We've handled plenty of post-eviction turnovers — discreetly and with paperwork ready for property records." },
      { q: "Do you provide invoices for estate accounting?", a: "Yes — we provide itemized invoices and proof-of-completion paperwork on request." },
      { q: "Can the heirs review items before disposal?", a: "Absolutely. We can pause, set aside, and walk through anything in question before it leaves." },
    ],
  },
  {
    slug: "hoarding-cleanouts",
    title: "Hoarding Cleanouts",
    shortTitle: "Hoarding Cleanouts",
    blurb: "Private, non-judgmental, at your pace — with care for what matters to you.",
    category: "large-cleanouts",
    intro: [
      "Hoarding cleanouts are personal. Whether this is for you or for a loved one, we approach it the same way: privately, calmly, without judgment, and at the pace you set.",
      "We listen first. We sort with you. We protect what matters — photos, papers, keepsakes — and we handle the rest with discretion. No photos posted, no stories told.",
      "Many of our hoarding jobs run across multiple visits. That's normal, and that's fine. We meet you where you are.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Hoarding cleanouts done with respect and zero judgment. We work at your pace, in private, and we listen. Whether you're tackling this for yourself or helping a loved one, we'll help sort, donate, recycle, and dispose — keeping anything that holds meaning safely set aside.",
    included: [
      "Compassionate, non-judgmental crew",
      "Work at the pace you set",
      "Careful sort: keepsakes, donate, recycle, dispose",
      "Total discretion — we don't post photos or talk about jobs",
    ],
    commonItems: [
      "Years of accumulated items across multiple rooms",
      "Papers, boxes, magazines",
      "Furniture and household goods",
      "Garage, attic, and outdoor accumulation",
    ],
    faq: [
      { q: "Will you judge me or my family?", a: "No. We're here to help — that's it. Every situation is different and we treat everyone with respect." },
      { q: "Can we go slowly?", a: "Absolutely. We move at the pace that's right for you, in single sessions or over multiple visits." },
      { q: "Will you help me find keepsakes?", a: "Yes. We set aside anything that looks personal so you can review before we haul anything off." },
      { q: "Is the work confidential?", a: "Yes. We don't post photos of jobs or talk about who we work with. Total discretion." },
      { q: "Can a family member or social worker coordinate for the client?", a: "Yes — we'll happily work directly with whoever you'd like to point the project, with the client's consent." },
      { q: "What if more shows up than we expected?", a: "We can scale on the fly. We'll re-quote transparently before we keep going so there's no surprise at the end." },
    ],
  },
  {
    slug: "garage-cleanouts",
    title: "Garage Cleanouts",
    shortTitle: "Garage Cleanouts",
    blurb: "Park in your garage again — we'll clear it, sort it, and sweep it clean.",
    category: "large-cleanouts",
    intro: [
      "Most garages aren't really garages anymore — they're storage for everything we never got around to dealing with. We help you reclaim the space.",
      "Tell us what's keeping. We move the rest out, sort what we can donate or recycle, and sweep the floor so you can actually park in there again.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Garage cleanouts done right. We clear out years of accumulated tools, boxes, furniture, holiday decor, and forgotten projects — then sweep the floor so you can actually park in there again. Upfront flat-rate pricing, same-day available.",
    included: [
      "Full clear of contents",
      "Sort & set aside anything you want kept",
      "Floor-swept broom-clean finish",
      "Same-day available",
    ],
    commonItems: [
      "Boxes, bins, and old storage",
      "Tools, lawn equipment, bikes",
      "Furniture and appliances",
      "Holiday decorations and forgotten projects",
    ],
    faq: [
      { q: "Will you help me sort what stays?", a: "Yes. Tell us what's keeping, and we'll move the rest out." },
      { q: "How much does a garage cleanout cost?", a: "It's volume-based. Most two-car garages run mid-range — we give an exact flat-rate quote on arrival." },
      { q: "Do you take old paint, propane tanks, batteries?", a: "Paint and chemicals no, propane tanks must be drained/disconnected, batteries we can recycle. We'll point you to options for anything we can't take." },
      { q: "Can you do same-day garage cleanouts?", a: "Yes, that's the standard — call before noon and we usually have an afternoon slot." },
      { q: "Will you sweep the floor when you're done?", a: "Yes. Broom-clean is the finish on every garage job." },
    ],
  },
  {
    slug: "storage-unit-cleanouts",
    title: "Storage Unit Cleanouts",
    shortTitle: "Storage Units",
    blurb: "Stop paying for storage you don't need — we'll empty it in one trip.",
    category: "large-cleanouts",
    intro: [
      "Storage unit rent adds up, and it's easy to forget what's actually in there. We meet you at the facility, empty the unit, sort with you, and haul off the rest in one visit.",
      "We'll provide proof-of-empty photos if the facility needs them, and broom-clean the unit so you can hand back the keys and stop the meter.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Storage unit cleanouts so you can stop paying that monthly bill. We meet you at the facility, empty the unit, sort what matters, and haul off the rest. Final broom-clean so you can hand back the keys.",
    included: [
      "Meet at the facility on your schedule",
      "Full empty + sweep",
      "Sort: keep / donate / recycle / dispose",
      "Photos and proof-of-empty if needed",
    ],
    commonItems: [
      "Furniture and household goods",
      "Boxes and bins",
      "Tools and equipment",
      "Long-forgotten belongings",
    ],
    faq: [
      { q: "Can you meet me at the storage facility?", a: "Yes — we'll coordinate directly with you and the facility's hours." },
      { q: "What if I'm not sure what's in there?", a: "We can open it with you and sort live. Anything you want kept stays; the rest goes." },
      { q: "Do you provide proof-of-empty?", a: "Yes — photos and a written confirmation so the facility releases you from the lease." },
      { q: "Can you handle multiple units in a row?", a: "Yes. We'll batch them and quote a combined rate. Just send the unit numbers." },
      { q: "Will you sweep the unit?", a: "Yes. Broom-clean finish so the facility doesn't ding you on the move-out." },
    ],
  },
  {
    slug: "commercial-cleanouts",
    title: "Commercial Cleanouts",
    shortTitle: "Commercial",
    blurb: "Offices, retail, warehouses — cleared after hours so you don't miss a beat.",
    category: "large-cleanouts",
    intro: [
      "Offices, retail spaces, warehouses, and small businesses — we work around your schedule so customers and staff aren't disrupted.",
      "After-hours, weekends, between tenants, or during a turnover: we coordinate with property managers, handle furniture and old IT equipment, and provide invoice-ready paperwork for your books.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Commercial cleanouts for offices, retail spaces, warehouses, and small businesses. We work around your schedule — after hours, weekends, or during a turnover — so your team and customers aren't disrupted. Insured and invoice-ready.",
    included: [
      "After-hours and weekend availability",
      "Office furniture, electronics, fixtures",
      "Coordination with property managers",
      "Invoice billing available",
    ],
    commonItems: [
      "Desks, chairs, cubicles, conference tables",
      "Old electronics and IT equipment",
      "Retail fixtures and shelving",
      "Warehouse pallets and stored inventory",
    ],
    faq: [
      { q: "Can you work after business hours?", a: "Yes. After-hours and weekend jobs are standard for us." },
      { q: "Do you provide invoices for business accounting?", a: "Yes — invoice-ready paperwork on every commercial job." },
      { q: "Do you handle old IT equipment and e-waste?", a: "Yes. We recycle e-waste responsibly and can wipe-and-recycle electronics on request." },
      { q: "Can you coordinate with property management for access?", a: "Yes. Send us their contact and we'll handle scheduling and badging." },
      { q: "Can you handle a multi-floor office tear-out?", a: "Yes — desks, cubicles, conference rooms, shelving. We'll bring extra crew." },
    ],
  },
  {
    slug: "demolition",
    title: "Light Demolition",
    shortTitle: "Demolition",
    blurb: "Sheds, decks, fences, barns, hot tubs — demolished and hauled away in one visit.",
    category: "demolition",
    intro: [
      "If it's a structure with no live water or power running to it, we'll demo it and haul away the debris in a single visit. Sheds, decks, pergolas, fences, non-load-bearing interior walls, old barns, playsets — and yes, hot tubs.",
      "Demolition + haul-off as one combined job means you don't have to coordinate a separate dumpster, a separate hauler, or a separate cleanup. We bring the tools, the truck, and the broom.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Light demolition for structures that don't have water or power running to them — sheds, decks, fences, old barns, hot tubs, playsets, and similar. We demo, load, and haul off in a single visit, leaving the site clean.",
    included: [
      "On-site demolition with the right tools",
      "Full debris haul-off",
      "Site cleanup after demo",
      "Flat-rate quote before we start",
    ],
    commonItems: [
      "Sheds and storage buildings",
      "Decks, pergolas, and patios",
      "Fences and gates",
      "Old barns and outbuildings",
      "Hot tubs, swing sets, playsets",
    ],
    faq: [
      { q: "What can't you demo?", a: "Anything with active water or power running to it. If utilities need disconnecting first, we'll point you to the right pro." },
      { q: "Do you haul off everything you demo?", a: "Yes — demolition and haul-off are one combined job." },
      { q: "Can you remove a hot tub?", a: "Yes, hot tub removal is a common job. We drain, disassemble, and haul. Power should be disconnected at the breaker before we arrive." },
      { q: "Can you tear down a non-load-bearing interior wall?", a: "Yes, where utilities aren't running through it. We'll confirm on the walk-through before quoting." },
      { q: "Will you patch what's left behind?", a: "We focus on demo + haul. For finish work (patch, paint, drywall close-out) we can refer a trusted local trade." },
      { q: "Do you handle barn or shed teardowns with concrete pads?", a: "We handle the structure. Concrete pad removal can be quoted as add-on (it's the heavier hauling that drives that one)." },
    ],
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    shortTitle: "Furniture Removal",
    blurb: "Couches, mattresses, dressers — gone in under an hour, even from upstairs.",
    category: "junk-removal",
    intro: [
      "Single-item and small-load furniture removal — couches, sectionals, mattresses, box springs, dressers, recliners, desks, and office chairs.",
      "We grab it from anywhere in the home — even a third-floor walkup — and donate it when it's still usable.",
    ],
    pricingNotes: STANDARD_PRICING,
    process: STANDARD_PROCESS,
    description:
      "Single-item and small-load furniture removal for couches, mattresses, dressers, recliners, and more. Upfront pricing, fast pickup, and we'll grab it from anywhere in your home — even a third-floor apartment.",
    included: [
      "Upstairs and tight-access pickup",
      "Donation when items are in good shape",
      "Responsible mattress recycling",
      "Same-day available",
    ],
    commonItems: [
      "Couches and sectionals",
      "Mattresses and box springs",
      "Dressers, recliners, desks",
      "Office chairs and tables",
    ],
    faq: [
      { q: "Can you come up the stairs?", a: "Yes. Apartments, townhomes, third-floor walkups — no problem." },
      { q: "Do you donate items in good shape?", a: "When we can, yes. Anything still usable we'd rather see donated than landfilled." },
      { q: "Will you take a single piece?", a: "Yes — single-item pickups are one of our most common jobs." },
      { q: "How fast can you come out?", a: "Same-day is the standard. Call before noon for best chance of an afternoon pickup." },
      { q: "Do you recycle mattresses?", a: "When possible, yes. We send mattresses to recycling partners where the option is available." },
    ],
  },
  {
    slug: "dumpster-rentals",
    title: "Dumpster Rentals",
    shortTitle: "Dumpster Rentals",
    blurb: "17-yard dumpsters starting at $449, flat-rate pricing, no hidden fees, same-day delivery available.",
    category: "dumpster-rentals",
    intro: [
      "17-yard dumpsters starting at $449, flat-rate pricing, no hidden fees, same-day delivery available. Drop in your driveway, fill it on your timeline, we haul it.",
      "Best for remodels and renovations, roofing tear-offs, yard and tree projects, garage clean-outs, and any weekend project where the cleanup is the hard part.",
    ],
    pricingNotes: [
      "17-yard dumpsters starting at $449, flat-rate pricing, no hidden fees, same-day delivery available.",
      "No surprise weight fees — the flat rate is the rate.",
      "No concrete, dirt, or hazardous materials in the bin.",
      "Multi-day rental windows are standard. Need it longer? Just ask.",
    ],
    process: STANDARD_PROCESS,
    description:
      "17-yard dumpsters starting at $449, flat-rate pricing, no hidden fees, same-day delivery available. Perfect for remodels, large yard projects, garage cleanouts, and roofing work. We drop, you fill, we haul.",
    included: [
      "17-yard dumpster delivered to your driveway",
      "Flat-rate price — no surprise weight fees",
      "Same-day delivery available",
      "Multi-day rental window",
    ],
    commonItems: [
      "Remodel and renovation debris",
      "Roofing tear-off",
      "Yard and tree debris",
      "Garage and attic cleanouts",
    ],
    faq: [
      { q: "How much is a dumpster?", a: "17-yard dumpsters start at $449, flat-rate, no hidden fees. Same-day delivery available." },
      { q: "How long can I keep it?", a: "We work around your project — multi-day rental windows are standard." },
      { q: "Are there weight limits or surprise fees?", a: "No surprise fees. The flat rate is the rate. Just no concrete, dirt, or hazardous materials." },
      { q: "Will the dumpster damage my driveway?", a: "We place boards under the rails on request, and our drivers know how to drop on most driveways without issue." },
      { q: "Can I get it the same day?", a: "Yes — same-day delivery is available when our schedule allows. Call early for best chance." },
      { q: "What about permits?", a: "Most driveway placements don't need one. Street placement may — call your city for specifics or ask us and we'll help." },
    ],
  },
];

export interface Town {
  slug: string;
  name: string;
  primary: boolean;
  distanceMi?: number;
  blurb?: string;
  coords?: [number, number];
}

export const towns: Town[] = [
  { slug: "leander", name: "Leander", primary: true, distanceMi: 0, coords: [30.5788, -97.8531], blurb: "Home base. We grew up here and we live here — same-day service is the standard." },
  { slug: "cedar-park", name: "Cedar Park", primary: true, distanceMi: 4, coords: [30.5052, -97.8203], blurb: "Right next door. Same-day Cedar Park jobs are our most common pickup." },
  { slug: "liberty-hill", name: "Liberty Hill", primary: true, distanceMi: 10, coords: [30.6649, -97.9225], blurb: "Quick run up 183A — Liberty Hill cleanouts and demos are a regular." },
  { slug: "georgetown", name: "Georgetown", primary: true, distanceMi: 15, coords: [30.6332, -97.6779], blurb: "From Sun City to downtown Georgetown, we cover the whole town." },
  { slug: "round-rock", name: "Round Rock", primary: true, distanceMi: 14, coords: [30.5083, -97.6789], blurb: "Round Rock junk removal, same-day available across the city." },
  { slug: "jonestown", name: "Jonestown", primary: true, distanceMi: 8, coords: [30.4938, -97.9239], blurb: "Hill-country roads we know by heart — Jonestown jobs are easy for us." },
  { slug: "lago-vista", name: "Lago Vista", primary: true, distanceMi: 12, coords: [30.4585, -97.9892], blurb: "Lakeside cleanouts and demolition — sheds, decks, docks-side debris." },
  { slug: "brushy-creek", name: "Brushy Creek", primary: true, distanceMi: 7, coords: [30.5121, -97.7622], blurb: "Brushy Creek garages, attics, and whole-house cleanouts — same-day." },
  { slug: "anderson-mill", name: "Anderson Mill", primary: true, distanceMi: 9, coords: [30.4555, -97.8050], blurb: "Anderson Mill same-day junk removal — a quick run for our crew." },
  { slug: "volente", name: "Volente", primary: true, distanceMi: 10, coords: [30.4413, -97.8753], blurb: "Volente and the lake-edge neighborhoods — cleanouts and hauling." },
  { slug: "point-venture", name: "Point Venture", primary: true, distanceMi: 14, coords: [30.4072, -97.9897], blurb: "Lake-side Point Venture cleanouts and small-structure demo." },
  { slug: "lakeway", name: "Lakeway", primary: true, distanceMi: 16, coords: [30.3743, -97.9786], blurb: "Lakeway homes, garages, and estate cleanouts — careful, on-time service." },
  { slug: "bee-cave", name: "Bee Cave", primary: true, distanceMi: 19, coords: [30.3079, -97.9461], blurb: "Bee Cave cleanouts and dumpster drops — at the edge of our 20-mile radius." },
  { slug: "pflugerville", name: "Pflugerville", primary: true, distanceMi: 18, coords: [30.4394, -97.6200], blurb: "Pflugerville junk removal, same-day available across the city." },
  { slug: "hutto", name: "Hutto", primary: true, distanceMi: 19, coords: [30.5427, -97.5466], blurb: "Hutto cleanouts and furniture removal — we're there same day." },
  { slug: "austin-nw", name: "Austin (N/NW)", primary: true, distanceMi: 15, coords: [30.4000, -97.7500], blurb: "Northwest Austin — from the Domain up through 183 and 620." },
];

export const secondaryTowns: string[] = [
  "Jollyville",
  "Hudson Bend",
  "Bertram",
  "Florence",
  "Andice",
  "Spicewood",
  "Serenada",
  "Weir",
];

export const guarantees = [
  { title: "On-Time Guarantee", body: "10% off if late — we text 15 minutes before we arrive." },
  { title: "No Surprise Pricing", body: "Flat-rate, upfront. The quote is the quote." },
  { title: "Property Protection Promise", body: "We treat your floors, walls, and yard like our own." },
  { title: "Broom-Clean Guarantee", body: "Every space we touch leaves broom-clean." },
  { title: "Satisfaction Guarantee", body: "If something's not right before we leave, we make it right." },
  { title: "Responsible Disposal", body: "Donate, recycle, and dispose — landfill is the last resort." },
];

export const whoWeHelp = [
  {
    title: "Homeowners",
    body: "From single-item pickups to whole-house cleanouts — same-day, flat-rate, broom-clean.",
  },
  {
    title: "Realtors & Property Managers",
    body: "Estate, eviction, and turnover cleanouts handled fast so you can list, lease, and close.",
  },
  {
    title: "Contractors",
    body: "Construction debris, remodel haul-offs, and on-demand dumpster drops that keep your job moving.",
  },
];

export const homeFaq = [
  { q: "How fast can you come out?", a: "Same-day service is standard across Leander, Cedar Park, and 20 miles around. Call before noon and we'll do our best to be there that afternoon." },
  { q: "How is pricing calculated?", a: "Volume-based, flat-rate. We look at how much space your stuff will take in our truck and give you an upfront quote before we lift a thing." },
  { q: "What areas do you cover?", a: "Leander, Cedar Park, Liberty Hill, Georgetown, Round Rock, Lakeway, Bee Cave, Pflugerville, Hutto, NW Austin and everywhere within 20 miles of Leander." },
  { q: "Do you offer discounts?", a: "Yes — Military, First Responder, and Holiday discounts. Call for details." },
  { q: "What can't you take?", a: "Hazardous waste (paints, solvents, chemicals) and propane/freon-charged appliances without disconnection. Ask us and we'll point you to the right resource." },
  { q: "Are you family-owned?", a: "Yes. Dumpster Daddies is owned and run by Gage Taylor right here in Leander." },
];
