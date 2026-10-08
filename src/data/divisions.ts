export type Division = {
  slug: string;
  number: string;
  /** Name used on the Home "Integrated Agricultural Solutions" grid. */
  homeTitle: string;
  homeDescription: string;
  /** Name used on the Agro Divisions overview grid. */
  title: string;
  description: string;
  /** Short label used in the footer column. */
  footerLabel: string;
  /** Label used in the contact form's division selector. */
  selectLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    /** Explicit desktop line breaks matching the design. */
    titleLines?: string[];
    subtitle: string;
  };
  overview: string;
  ctaLabel: string;
  offerings: string[];
  images: {
    hero: string;
    card: string;
    overview: string;
  };
};

const img = (slug: string, name: "hero" | "card" | "overview") =>
  `/images/divisions/${slug}/${name}.jpg`;

export const divisions: Division[] = [
  {
    slug: "agriculture-agronomy",
    number: "01",
    homeTitle: "Agriculture & Agronomy",
    homeDescription: "Crop production, soil health management, and mechanization.",
    title: "Agriculture & Agronomy",
    description:
      "Commercial cultivation, mechanized farming, and sustainable crop management.",
    footerLabel: "Agriculture & Agronomy",
    selectLabel: "Agriculture & Agronomy",
    hero: {
      eyebrow: "Division 01 / Agriculture & Agronomy",
      title: "Agriculture & Agronomy Division",
      subtitle:
        "Modern, sustainable crop cultivation designed for high productivity and soil longevity.",
    },
    overview:
      "Dedicated to sustainable land use and modern agricultural practices, our Agronomy Division manages large-scale cultivation and harvesting of staple crops. We emphasize long-term soil health, structured crop rotation, and precise resource management to guarantee consistent agricultural yields.",
    ctaLabel: "Inquire About Crop Sourcing",
    offerings: [
      "Crop Cultivation & Harvesting",
      "Mechanized Farming Solutions",
      "Soil Health & Crop Management",
      "Commercial Farm Produce Supply",
    ],
    images: {
      hero: img("agriculture-agronomy", "hero"),
      card: img("agriculture-agronomy", "card"),
      overview: img("agriculture-agronomy", "overview"),
    },
  },
  {
    slug: "biological-resources",
    number: "02",
    homeTitle: "Biological Resources",
    homeDescription: "Poultry farming, livestock breeding, and commercial aquaculture.",
    title: "Biological Resources",
    description: "Poultry, livestock breeding, and sustainable aquaculture solutions.",
    footerLabel: "Biological Resources",
    selectLabel: "Biological Resources",
    hero: {
      eyebrow: "Division 02 / Livestock, Poultry & Fisheries",
      title: "Biological Resources Division",
      subtitle:
        "Ethical husbandry, aquaculture excellence, and animal product processing.",
    },
    overview:
      "Biological resources represent the core identity of SAHUBio. We operate specialized units across animal husbandry, commercial poultry production, and aquaculture. Every facility operates under strict bio-security guidelines and humane standards.",
    ctaLabel: "Contact Livestock Division",
    offerings: [
      "Commercial Poultry Farming",
      "Fish Farming & Aquaculture Infrastructure",
      "Livestock Breeding & Rearing",
      "Quality Animal Products Supply",
      "Cow Horns, Skin & Hooves.",
      "Animal Bones & Skins",
    ],
    images: {
      hero: img("biological-resources", "hero"),
      card: img("biological-resources", "card"),
      overview: img("biological-resources", "overview"),
    },
  },
  {
    slug: "procurement-supply",
    number: "03",
    homeTitle: "Procurement & Supply",
    homeDescription: "Bulk produce aggregation, raw grains, and agro-inputs.",
    title: "Procurement & Supply",
    description: "Strategic aggregation, storage, grains supply, and agro-inputs.",
    footerLabel: "Procurement & Supply",
    selectLabel: "Procurement & Supply",
    hero: {
      eyebrow: "Division 03 / Procurement & Supply",
      title: "Agricultural Procurement & Supply Division",
      titleLines: ["Agricultural Procurement & Supply", "Division"],
      subtitle:
        "Dependable sourcing, aggregation, and input distribution for agribusinesses.",
    },
    overview:
      "We bridge the gap between rural production hubs and commercial buyers. This division manages structured procurement networks to collect, grade, store, and distribute high-grade grains, legumes, seeds, biofertilisers, and feeds with transparent pricing.",
    ctaLabel: "Request Procurement Quote",
    offerings: [
      "Produce Sourcing & Aggregation",
      "Post-Harvest Storage & Preservation",
      "Seeds, Fertilisers & Feed Supply",
      "Primary Processing & Packaging",
    ],
    images: {
      hero: img("procurement-supply", "hero"),
      card: img("procurement-supply", "card"),
      overview: img("procurement-supply", "overview"),
    },
  },
  {
    slug: "engineering-projects",
    number: "04",
    homeTitle: "Engineering & Projects",
    homeDescription:
      "Climate-smart farm design, irrigation, and project execution.",
    title: "Engineering & Projects",
    description: "Turnkey farm design, irrigation systems, and capacity building.",
    footerLabel: "Engineering",
    selectLabel: "Engineering & Projects",
    hero: {
      eyebrow: "Division 04 / Engineering & Projects",
      title: "Agricultural Engineering & Project Management Division",
      titleLines: ["Agricultural Engineering & Project", "Management Division"],
      subtitle:
        "Turnkey farm infrastructure, climate-smart tech, and technical training.",
    },
    overview:
      "We plan, build, and oversee modern agricultural developments. Combining agronomic knowledge with engineering, we design custom irrigation setups, deploy climate-smart systems, rebuild damaged ecosystems, and deliver technical capacity building for communities and investors.",
    ctaLabel: "Consult Our Engineering Team",
    offerings: [
      "Farm Layout & Production System Design",
      "Irrigation & Water Management Planning",
      "Climate-Smart Tech & Agro-Processing Setups",
      "Agricultural Equipment & Farm Mechanization",
      "Farmer Capacity Building & Stakeholder Engagement",
    ],
    images: {
      hero: img("engineering-projects", "hero"),
      card: img("engineering-projects", "card"),
      overview: img("engineering-projects", "overview"),
    },
  },
  {
    slug: "agro-allied-logistics",
    number: "05",
    homeTitle: "Agro-Allied Logistics",
    homeDescription:
      "Nationwide produce haulage and cold-chain/perishable freight.",
    title: "Agro-Allied Logistics",
    description:
      "Fleet distribution, perishable cargo handling, and farm-to-market haulage.",
    footerLabel: "Logistics",
    selectLabel: "Agro-Allied Logistics",
    hero: {
      eyebrow: "Division 05 / Agro-Allied Logistics",
      title: "Agro-Allied Logistics Division",
      subtitle:
        "Secure, specialized haulage connecting rural farms to regional processing centers.",
    },
    overview:
      "Transporting agricultural commodities requires specialized handling to protect produce quality. Our logistics network coordinates haulage assets tailored for bulk harvests, inputs, equipment, and perishable produce to minimize post-harvest loss across Nigeria.",
    ctaLabel: "Book Logistics Support",
    offerings: [
      "Nationwide Farm Produce Haulage",
      "Bulk & Perishable Cargo Handling",
      "Agro-Input & Equipment Distribution",
      "Farm-to-Market Supply Chains",
    ],
    images: {
      hero: img("agro-allied-logistics", "hero"),
      card: img("agro-allied-logistics", "card"),
      overview: img("agro-allied-logistics", "overview"),
    },
  },
  {
    slug: "import-export",
    number: "06",
    homeTitle: "Import & Export",
    homeDescription:
      "Export of processed produce and regulatory trade compliance.",
    title: "Import & Export",
    description:
      "NEPC-certified export of commodities and importation of farm machinery.",
    footerLabel: "Import & Export",
    selectLabel: "Import & Export",
    hero: {
      eyebrow: "Division 06 / Import & Export",
      title: "Import & Export Division",
      subtitle:
        "Registered export operations connecting Nigerian farm commodities to global markets.",
    },
    overview:
      "As an official exporter registered with the Nigerian Export Promotion Council (NEPC), SAHUBio handles international trade in raw and processed agricultural commodities. We handle regulatory documentation, freight coordination, and customs compliance for global buyers.",
    ctaLabel: "Initiate International Trade Inquiry",
    offerings: [
      "Commodity Export (Grains, Sesame, Ginger, Nuts)",
      "Trade Documentation & Regulatory Compliance",
      "Freight Forwarding & Customs Clearance",
      "Agricultural Machinery & Input Importation",
    ],
    images: {
      hero: img("import-export", "hero"),
      card: img("import-export", "card"),
      overview: img("import-export", "overview"),
    },
  },
  {
    slug: "research-lab",
    number: "07",
    homeTitle: "Research & Lab Services",
    homeDescription:
      "On-farm trial validation, biofertilisers, and soil health labs.",
    title: "Laboratory & Research",
    description:
      "Microbiome research, biofertiliser field trials, and soil health analysis.",
    footerLabel: "Research & Lab",
    selectLabel: "Research & Lab",
    hero: {
      eyebrow: "Division 07 / Research & Lab",
      title: "Agricultural Laboratory & Research Services Division",
      titleLines: ["Agricultural Laboratory &", "Research Services Division"],
      subtitle:
        "Evidence-based agricultural research, biofertiliser validation, and trial management.",
    },
    overview:
      "SAHUBio conducts applied biological research to increase crop yield and soil quality. Working alongside scientific partners and local farming communities, we evaluate biofertilisers, test crop microbiomes, manage seed multiplication programs, and issue field performance reports.",
    ctaLabel: "Explore Research Partnerships",
    offerings: [
      "Soil & Input Quality Assessment",
      "Microbiome & Biofertiliser Field Trials",
      "Setup & Maintenance of Research Labs",
      "Comparative Trials & Crop Technology Demonstrations",
    ],
    images: {
      hero: img("research-lab", "hero"),
      card: img("research-lab", "card"),
      overview: img("research-lab", "overview"),
    },
  },
];

export function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}

export const divisionHref = (slug: string) => `/agro-divisions/${slug}`;
