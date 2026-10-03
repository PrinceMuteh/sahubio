import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocuments } from "@/data/legal";

const legalDoc = legalDocuments["privacy-policy"];

export const metadata: Metadata = {
  title: legalDoc.title,
  description: legalDoc.description,
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={legalDoc} />;
}
