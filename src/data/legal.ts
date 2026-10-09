export type LegalDocument = {
  slug: "privacy-policy" | "terms-of-service" | "cookie-policy";
  title: string;
  effectiveDate: string;
  /** Hero surface, as set per page in the design. */
  heroTone: "brand" | "deep";
  description: string;
  sections: { heading: string; body: string }[];
};

export const legalDocuments: Record<LegalDocument["slug"], LegalDocument> = {
  "privacy-policy": {
    slug: "privacy-policy",
    heroTone: "deep",
    title: "Privacy Policy",
    effectiveDate: "October 2026",
    description:
      "How SAHU Bio-Resources Nig. Ltd collects, uses, and protects personal information.",
    sections: [
      {
        heading: "1. Information Collection:",
        body: 'SAHU Bio-Resources Nig. Ltd ("SAHUBio") collects personal information—including names, email addresses, phone numbers, and company details—only when voluntarily submitted via our website inquiry forms or shop waitlist registration.',
      },
      {
        heading: "2. Use of Information:",
        body: "Collected information is strictly used to fulfill product inquiries, arrange logistics, execute procurement contracts, send waitlist updates, and deliver client services. We do not sell or rent personal information to third parties.",
      },
      {
        heading: "3. Data Protection:",
        body: "In compliance with the Nigeria Data Protection Regulation (NDPR) and international privacy guidelines, SAHUBio maintains technical and organizational measures to safeguard submitted data against unauthorized access or disclosure.",
      },
      {
        heading: "4. Third-Party Sharing:",
        body: "Data is shared with government or regulatory agencies (such as NEPC, NRS, or Customs) solely when necessary to complete regulatory compliance, export documentation, or legal requirements.",
      },
      {
        heading: "5. Contact Us:",
        body: "For privacy queries, please contact our Data Protection Office at sahubioresources@gmail.com.",
      },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    heroTone: "brand",
    title: "Terms of Service",
    effectiveDate: "October 2026",
    description:
      "The terms that govern use of the SAHU Bio-Resources Nig. Ltd website.",
    sections: [
      {
        heading: "1. Agreement to Terms:",
        body: "By accessing or using the website of SAHU Bio-Resources Nig. Ltd, you agree to comply with these Terms of Service.",
      },
      {
        heading: "2. Intellectual Property:",
        body: 'All content on this website—including text, graphics, logos, trademarks ("SAHUBIO AND DEVICE" under Classes 1, 29, 31, 44), and layout designs—is the property of SAHU Bio-Resources Nig. Ltd and protected under Nigerian intellectual property laws.',
      },
      {
        heading: "3. Commercial Inquiries & Quotes:",
        body: "Submitting an inquiry form does not constitute a binding commercial agreement. All trade, procurement, supply, and engineering contracts require formal executed agreements under Nigerian law.",
      },
      {
        heading: "4. Regulatory Operations:",
        body: "All export and commercial transactions adhere strictly to the regulations of the Nigerian Export Promotion Council (NEPC), Federal Ministry of Industry, Trade and Investment, and other statutory authorities.",
      },
      {
        heading: "5. Governing Law:",
        body: "These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes fall under the exclusive jurisdiction of courts within Nigeria.",
      },
    ],
  },
  "cookie-policy": {
    slug: "cookie-policy",
    heroTone: "brand",
    title: "Cookie Policy",
    effectiveDate: "October 2026",
    description: "How SAHUBio uses cookies on its website.",
    sections: [
      {
        heading: "1. What Are Cookies:",
        body: "Cookies are small text files stored on your device when you visit our website to improve navigation and user experience.",
      },
      {
        heading: "2. How We Use Cookies:",
        body: "SAHUBio uses essential and analytical cookies to evaluate website traffic, track user interactions across our services, and optimize form performance.",
      },
      {
        heading: "3. Managing Cookies:",
        body: "You can adjust your browser settings to disable or decline cookies at any time. However, disabling cookies may impact certain interactive features on our site.",
      },
    ],
  },
};
