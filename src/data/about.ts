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

/**
 * Leadership team. The design ships placeholder biographies — replace these
 * entries with confirmed names, roles, photos and bios.
 */
export const team: {
  name: string;
  role: string;
  profession?: string;
  bio: string;
  image: string;
}[] = [
  {
    name: "Sharafaddeen Mubarak",
    role: "Group Managing Director",
    profession: "Farmer",
    bio: "Placeholder biography for the team member, including focus areas, experience, and responsibilities.",
    image: "/images/team/member-1.jpg",
  },
  {
    name: "Sharafaddeen Mubarak",
    role: "Group Managing Director",
    profession: "Farmer",
    bio: "Placeholder biography for the team member, including focus areas, experience, and responsibilities.",
    image: "/images/team/member-2.jpg",
  },
  {
    name: "Sharafaddeen Mubarak",
    role: "Group Managing Director",
    profession: "Farmer",
    bio: "Placeholder biography for the team member, including focus areas, experience, and responsibilities.",
    image: "/images/team/member-1.jpg",
  },
  {
    name: "Sharafaddeen Mubarak",
    role: "Group Managing Director",
    profession: "Farmer",
    bio: "Placeholder biography for the team member, including focus areas, experience, and responsibilities.",
    image: "/images/team/member-2.jpg",
  },
];
