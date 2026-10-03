export const site = {
  name: "SAHUBio",
  legalName: "SAHU Bio-Resources Nig. Ltd.",
  footerName: "Sahu Bio Resource Nigeria Limited",
  tagline: "Agriculture. Biological Resources. Growth.",
  description:
    "Indigenous expertise in sustainable farming, biological resources, agro-logistics, and international commodity trade across 7 specialized agro divisions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sahubio.com",
  rcNumber: "RC 1208792",
  tin: "2521515889411",
  incorporated: 2014,
  contact: {
    phone: "+234 913 339 9983",
    phoneHref: "tel:+2349133399983",
    email: "sahubioresources@gmail.com",
    emailHref: "mailto:sahubioresources@gmail.com",
    location: "Maitama, Abuja, Nigeria",
    address:
      "No. 41 Osun Crescent, Off Ibrahim Babangida Boulevard, Maitama, Abuja, Nigeria",
    officeHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
  },
  companyProfile: "/documents/sahubio-company-profile.pdf",
} as const;

/**
 * Social profiles. The design shows the icons only — replace the URLs with the
 * company's real handles when they are available.
 */
export const socialLinks = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/" },
  { label: "X (Twitter)", icon: "x", href: "https://x.com/" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
] as const;

export type SocialIcon = (typeof socialLinks)[number]["icon"];
