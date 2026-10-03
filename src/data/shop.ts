export type ShopCategoryIcon = "sprout" | "leaf" | "wheat" | "package";

export const shopCategories: { title: string; icon: ShopCategoryIcon }[] = [
  { title: "Organic Biofertilisers & Soil Amendments", icon: "sprout" },
  { title: "High-Yield Certified Crop Seeds", icon: "leaf" },
  { title: "Aggregated Bulk Grains & Legumes", icon: "wheat" },
  { title: "Livestock Feeds & Bio-Supplies", icon: "package" },
];

export const buyerTypes = [
  "Commercial Farmer",
  "Agro-Processor",
  "Corporate Buyer",
  "Retailer",
];
