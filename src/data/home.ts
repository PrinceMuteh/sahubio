export const trustHighlights = [
  "Incorporated 2014 (RC 1208792)",
  "NEPC Registered Exporter",
  "7 Agro Divisions",
  "100% Agro & Bio Focused",
];

export type ValueChainIcon = "sprout" | "tractor" | "package" | "truck" | "globe";

export const valueChain: {
  number: string;
  title: string;
  description: string;
  icon: ValueChainIcon;
}[] = [
  {
    number: "01",
    title: "Inputs",
    description: "Sourcing certified seeds, biofertilisers, and modern machinery.",
    icon: "sprout",
  },
  {
    number: "02",
    title: "Production",
    description:
      "Cultivating staple crops, livestock husbandry, and aquaculture operations.",
    icon: "tractor",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "Post-harvest handling, climate-controlled storage, and product packaging.",
    icon: "package",
  },
  {
    number: "04",
    title: "Logistics",
    description:
      "Secure haulage and distribution from farm gates to processing hubs.",
    icon: "truck",
  },
  {
    number: "05",
    title: "Markets & Export",
    description:
      "Local commercial supply and compliant international commodity trade.",
    icon: "globe",
  },
];

export const regulators = [
  "CAC",
  "NEPC",
  "SCUML (EFCC)",
  "NRS (Tax Clearance)",
  "NSITF",
  "ITF",
  "PenCom",
  "FMITI Trademarks",
];
