import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocuments } from "@/data/legal";

const legalDoc = legalDocuments["cookie-policy"];

export const metadata: Metadata = {
  title: legalDoc.title,
  description: legalDoc.description,
};

export default function CookiePolicyPage() {
  return <LegalPage document={legalDoc} />;
}
