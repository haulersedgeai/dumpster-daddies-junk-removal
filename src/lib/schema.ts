import { site, services, towns, secondaryTowns, type Service } from "@/data/site";

const allAreas = [
  ...towns.map((t) => t.name),
  ...secondaryTowns,
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description:
      "Family-owned junk removal in Leander, Cedar Park, and across Central Texas. Same- or next-day service, upfront flat-rate pricing, 5.0★ on 104 Google reviews.",
    telephone: site.phone,
    url: site.url,
    image: `${site.url}/images/hero-gage.jpg`,
    logo: `${site.url}/images/hero-gage.jpg`,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    areaServed: allAreas.map((name) => ({ "@type": "City", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.toFixed(1),
      reviewCount: site.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [site.googleProfile],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal & Cleanout Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      telephone: site.phone,
    },
    areaServed: allAreas.map((name) => ({ "@type": "City", name })),
    url: `${site.url}/services/${s.slug}`,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
