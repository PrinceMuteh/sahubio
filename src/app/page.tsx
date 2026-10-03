import { HomeHero } from "@/components/home/HomeHero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ValueChain } from "@/components/home/ValueChain";
import { DivisionsShowcase } from "@/components/home/DivisionsShowcase";
import { ComplianceStrip } from "@/components/home/ComplianceStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ValueChain />
      <DivisionsShowcase />
      <ComplianceStrip />
      <CtaBanner />
    </>
  );
}
