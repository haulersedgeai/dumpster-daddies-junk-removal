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

export interface Service {
  slug: ServiceKey;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  included: string[];
  commonItems: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    shortTitle: "Junk Removal",
    blurb: "Same-day junk pickup with upfront pricing — we load, sweep, and haul it all away.",
    description:
      "Full-service junk removal for homes and businesses in Leander, Cedar Park, and across Central Texas. We do the lifting, loading, and cleanup so you don't have to. Upfront flat-rate pricing, no hidden fees, same-day availability.",
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
    faq: [
      { q: "How fast can you come out?", a: "Often same-day. Call before noon and we'll do our best to be there that afternoon." },
      { q: "How is pricing calculated?", a: "By volume — how much space your stuff takes in our truck. You get a flat-rate quote up front before we lift a thing." },
      { q: "What can't you take?", a: "Hazardous waste (paints, solvents, chemicals), and propane/freon-charged units without prep. Ask us — we'll point you the right direction." },
    ],
  },
  {
    slug: "large-cleanouts",
    title: "Large Cleanouts",
    shortTitle: "Large Cleanouts",
    blurb: "Whole-house, multi-room, and high-volume loads — handled in a single visit.",
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
      { q: "Can you donate items in good shape?", a: "Yes — we keep usable items out of the landfill whenever possible." },
      { q: "Do you handle stairs and tight access?", a: "Yes. Multi-floor, tight stairwells, narrow apartment hallways — we've cleared them all." },
    ],
  },
  {
    slug: "estate-eviction-cleanouts",
    title: "Estate & Eviction Cleanouts",
    shortTitle: "Estate / Eviction",
    blurb: "Estates, evictions, move-in/move-out debris — handled with care and discretion.",
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
      { q: "How fast can you turn a property?", a: "Most properties go from full to broom-clean in a single visit." },
    ],
  },
  {
    slug: "hoarding-cleanouts",
    title: "Hoarding Cleanouts",
    shortTitle: "Hoarding Cleanouts",
    blurb: "Private, non-judgmental, at your pace — with care for what matters to you.",
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
    ],
  },
  {
    slug: "garage-cleanouts",
    title: "Garage Cleanouts",
    shortTitle: "Garage Cleanouts",
    blurb: "Park in your garage again — we'll clear it, sort it, and sweep it clean.",
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
    ],
  },
  {
    slug: "storage-unit-cleanouts",
    title: "Storage Unit Cleanouts",
    shortTitle: "Storage Units",
    blurb: "Stop paying for storage you don't need — we'll empty it in one trip.",
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
    ],
  },
  {
    slug: "commercial-cleanouts",
    title: "Commercial Cleanouts",
    shortTitle: "Commercial",
    blurb: "Offices, retail, warehouses — cleared after hours so you don't miss a beat.",
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
    ],
  },
  {
    slug: "demolition",
    title: "Light Demolition",
    shortTitle: "Demolition",
    blurb: "Sheds, decks, fences, barns, hot tubs — demolished and hauled away in one visit.",
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
    ],
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    shortTitle: "Furniture Removal",
    blurb: "Couches, mattresses, dressers — gone in under an hour, even from upstairs.",
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
    ],
  },
  {
    slug: "dumpster-rentals",
    title: "Dumpster Rentals",
    shortTitle: "Dumpster Rentals",
    blurb: "17-yard dumpsters starting at $449, flat-rate pricing, no hidden fees, same-day delivery available.",
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
    ],
  },
];

export interface Town {
  slug: string;
  name: string;
  primary: boolean;
  distanceMi?: number;
  blurb?: string;
}

export const towns: Town[] = [
  { slug: "leander", name: "Leander", primary: true, distanceMi: 0, blurb: "Home base. We grew up here and we live here — same-day service is the standard." },
  { slug: "cedar-park", name: "Cedar Park", primary: true, distanceMi: 4, blurb: "Right next door. Same-day Cedar Park jobs are our most common pickup." },
  { slug: "liberty-hill", name: "Liberty Hill", primary: true, distanceMi: 10, blurb: "Quick run up 183A — Liberty Hill cleanouts and demos are a regular." },
  { slug: "georgetown", name: "Georgetown", primary: true, distanceMi: 15, blurb: "From Sun City to downtown Georgetown, we cover the whole town." },
  { slug: "round-rock", name: "Round Rock", primary: true, distanceMi: 14, blurb: "Round Rock junk removal, same-day available across the city." },
  { slug: "jonestown", name: "Jonestown", primary: true, distanceMi: 8, blurb: "Hill-country roads we know by heart — Jonestown jobs are easy for us." },
  { slug: "lago-vista", name: "Lago Vista", primary: true, distanceMi: 12, blurb: "Lakeside cleanouts and demolition — sheds, decks, docks-side debris." },
  { slug: "brushy-creek", name: "Brushy Creek", primary: true, distanceMi: 7, blurb: "Brushy Creek garages, attics, and whole-house cleanouts — same-day." },
  { slug: "anderson-mill", name: "Anderson Mill", primary: true, distanceMi: 9, blurb: "Anderson Mill same-day junk removal — a quick run for our crew." },
  { slug: "volente", name: "Volente", primary: true, distanceMi: 10, blurb: "Volente and the lake-edge neighborhoods — cleanouts and hauling." },
  { slug: "point-venture", name: "Point Venture", primary: true, distanceMi: 14, blurb: "Lake-side Point Venture cleanouts and small-structure demo." },
  { slug: "lakeway", name: "Lakeway", primary: true, distanceMi: 16, blurb: "Lakeway homes, garages, and estate cleanouts — careful, on-time service." },
  { slug: "bee-cave", name: "Bee Cave", primary: true, distanceMi: 19, blurb: "Bee Cave cleanouts and dumpster drops — at the edge of our 20-mile radius." },
  { slug: "pflugerville", name: "Pflugerville", primary: true, distanceMi: 18, blurb: "Pflugerville junk removal, same-day available across the city." },
  { slug: "hutto", name: "Hutto", primary: true, distanceMi: 19, blurb: "Hutto cleanouts and furniture removal — we're there same day." },
  { slug: "austin-nw", name: "Austin (N/NW)", primary: true, distanceMi: 15, blurb: "Northwest Austin — from the Domain up through 183 and 620." },
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
