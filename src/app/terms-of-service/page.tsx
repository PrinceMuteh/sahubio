import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocuments } from "@/data/legal";

const legalDoc = legalDocuments["terms-of-service"];

export const metadata: Metadata = {
  title: legalDoc.title,
  description: legalDoc.description,
};

export default function TermsOfServicePage() {
  return <LegalPage document={legalDoc} />;
}
