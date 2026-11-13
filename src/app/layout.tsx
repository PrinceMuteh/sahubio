import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site, socialLinks } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Powering Nigeria's Agricultural Value Chain`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SAHUBio",
    "SAHU Bio-Resources",
    "Nigeria agriculture",
    "agribusiness Abuja",
    "agro-logistics",
    "biofertilisers",
    "commodity export Nigeria",
    "NEPC registered exporter",
    "Sahu Bio Resources Nig Ltd",
    "licensed fertilizer distributor Nigeria",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    title: `${site.name} — Powering Nigeria's Agricultural Value Chain`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Powering Nigeria's Agricultural Value Chain`,
    description: site.description,
  },
};

/**
 * Tells search engines that this domain belongs to the registered company, and
 * that SAHUBio is its brand name.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: "Sahu Bio Resources Nig Ltd",
  alternateName: [site.legalName, site.footerName],
  url: site.url,
  logo: `${site.url}/images/brand/logo.png`,
  description: site.description,
  foundingDate: String(site.incorporated),
  taxID: site.tin,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 41 Osun Crescent, Off Ibrahim Babangida Boulevard, Maitama",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "CAC RC Number", value: site.rcNumber },
    {
      "@type": "PropertyValue",
      propertyID: "FMAFS Fertilizer Sales Permit",
      value: "FISS003633A",
    },
  ],
  sameAs: socialLinks.map((link) => link.href).filter((href) => href !== "https://www.tiktok.com/"),
};

export const viewport: Viewport = {
  themeColor: "#163d28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand-800 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <header>
          <TopBar />
          <Header />
        </header>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
