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
 * Social profiles shown in the footer. TikTok still points at the platform
 * home page until the company's handle is confirmed.
 */
export const socialLinks = [
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61569210957388",
  },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/sahubio.ng" },
  { label: "X (Twitter)", icon: "x", href: "https://x.com/sahubio_ng" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/sahubio-nigeria/",
  },
] as const;

export type SocialIcon = (typeof socialLinks)[number]["icon"];
