import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Same-Day Junk Removal in Leander & Central Texas`,
    template: `%s | ${site.name}`,
  },
  description: `Family-owned junk removal in Leander, Cedar Park & 20 miles around. Same-day service, upfront flat-rate pricing. 5.0★ on ${site.reviewCount} Google reviews. Open 7am–8pm, 7 days a week.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Same-Day Junk Removal in Leander, TX`,
    description: `Same-day junk removal across Leander, Cedar Park & 20 miles around. 5.0★ on ${site.reviewCount} Google reviews.`,
    images: ["/images/hero-gage.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Same-Day Junk Removal`,
    description: `5.0★ on ${site.reviewCount} reviews · Open 7am–8pm, 7 days.`,
    images: ["/images/hero-gage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={localBusinessSchema()} />
        <UtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
