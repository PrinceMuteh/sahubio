export type NavItem = {
  label: string;
  href: string;
  /** Additional path prefixes that should mark the item as active. */
  match?: string[];
  badge?: string;
  hasDropdown?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Agro Divisions", href: "/agro-divisions", hasDropdown: true },
  { label: "Shop", href: "/shop", badge: "Coming Soon" },
  { label: "Compliance", href: "/compliance" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Agro Divisions", href: "/agro-divisions" },
  { label: "Compliance", href: "/compliance" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Compliance Information", href: "/compliance" },
];
