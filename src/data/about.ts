export type CoreValueIcon =
  | "shield-check"
  | "star"
  | "lightbulb"
  | "handshake"
  | "circle-check"
  | "sprout";

export const coreValues: {
  title: string;
  description: string;
  icon: CoreValueIcon;
}[] = [
  {
    title: "Integrity",
    description:
      "Complete honesty and transparency with farmers, buyers, and regulatory authorities.",
    icon: "shield-check",
  },
  {
    title: "Excellence",
    description:
      "Upholding uncompromising quality standards in every product and service we deliver.",
    icon: "star",
  },
  {
    title: "Innovation",
    description:
      "Deploying modern technology and climate-smart agronomy to maximize yield and resource efficiency.",
    icon: "lightbulb",
  },
  {
    title: "Customer Focus",
    description:
      "Building long-term, trust-based relationships with corporate and community partners.",
    icon: "handshake",
  },
  {
    title: "Reliability",
    description:
      "Delivering consistent supply and dependable execution that businesses can plan around.",
    icon: "circle-check",
  },
  {
    title: "Sustainability",
    description:
      "Safeguarding soil health, water resources, animal welfare, and host communities.",
    icon: "sprout",
  },
];

/** Leadership team, in the order shown on the About page. */
export const team: {
  name: string;
  role: string;
  profession: string;
  image: string;
}[] = [
  {
    name: "Mohammed Musa",
    role: "GMD",
    profession: "Architect/Farming",
    image: "/images/team/mohammed-musa.jpg",
  },
  {
    name: "Mohammed Bello Yabo",
    role: "Director",
    profession: "Historian/Farmer",
    image: "/images/team/mohammed-bello-yabo.jpg",
  },
  {
    name: "Abubakar Mohammed Sani",
    role: "Director",
    profession: "Marketing/Farming",
    image: "/images/team/abubakar-mohammed-sani.jpg",
  },
  {
    name: "Muhammad Usman",
    role: "Director",
    profession: "Farming",
    image: "/images/team/muhammad-usman.jpg",
  },
  {
    name: "Joshua Yohanna",
    role: "Company Secretary",
    profession: "Agricultural Development & Linguist",
    image: "/images/team/joshua-yohanna.jpg",
  },
];
