"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { towns, site } from "@/data/site";

function pinIcon(highlight = false) {
  const color = highlight ? "#D89A2E" : "#22303F";
  const stroke = highlight ? "#22303F" : "#FFFFFF";
  const size = highlight ? 22 : 14;
  return L.divIcon({
    className: "dd-pin",
    html: `<span style="
      display:block;
      width:${size}px;height:${size}px;
      border-radius:9999px;
      background:${color};
      border:${highlight ? 3 : 2}px solid ${stroke};
      box-shadow:0 4px 12px rgba(0,0,0,0.25);
    "></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

export default function LeafletMap() {
  const center: [number, number] = site.geo.lat && site.geo.lng
    ? [site.geo.lat, site.geo.lng]
    : [30.5788, -97.8531];

  return (
    <MapContainer
      center={center}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "1.5rem", background: "#F7F3E9" }}
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={center}
        radius={32186}
        pathOptions={{
          color: "#C2492A",
          fillColor: "#C2492A",
          fillOpacity: 0.08,
          weight: 2,
          dashArray: "6 6",
        }}
      />
      {towns.map((t) => {
        if (!t.coords) return null;
        const isHome = t.slug === "leander";
        return (
          <Marker
            key={t.slug}
            position={t.coords}
            icon={pinIcon(isHome)}
          >
            <Popup>
              <div style={{ minWidth: 160 }}>
                <strong style={{ fontFamily: "var(--font-space-grotesk), system-ui", fontSize: 14 }}>
                  {t.name}, TX
                </strong>
                {typeof t.distanceMi === "number" && (
                  <div style={{ fontSize: 11, color: "#6A6356", marginTop: 2 }}>
                    ~{t.distanceMi} mi from Leander
                  </div>
                )}
                <Link
                  href={`/service-areas/${t.slug}`}
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    fontSize: 12,
                    color: "#C2492A",
                    fontWeight: 600,
                  }}
                >
                  View {t.name} page →
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
