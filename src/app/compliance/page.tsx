import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { RegistrationTable } from "@/components/compliance/RegistrationTable";
import { CertificatePreviews } from "@/components/compliance/CertificatePreviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Regulatory Compliance & Corporate Integrity",
  description:
    "SAHUBio maintains up-to-date documentation with all Nigerian statutory, financial, and trade regulators — CAC, NRS, NEPC, SCUML, NSITF, ITF, PenCom and FMITI.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Documentation"
        title={
          <>
            Regulatory Compliance &amp;
            <br className="hidden lg:block" /> Corporate Integrity
          </>
        }
        subtitle="SAHUBio maintains up-to-date documentation with all Nigerian statutory, financial, and trade regulators."
        image="/images/heroes/compliance.jpg"
        imageAlt="Rows of young maize plants in a cultivated field"
        imagePosition="50% 42%"
        heightClassName="lg:h-[378px]"
      />

      <section className="bg-white py-16 lg:pt-[72px] lg:pb-[71px]">
        <Container>
          <SectionHeading
            eyebrow="Corporate Documentation"
            title="Statutory Registration Table"
            titleClassName="lg:mt-[31px]"
          />
          <div className="mt-8 lg:mt-[33px]">
            <RegistrationTable />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:pt-[69px] lg:pb-[72px]">
        <Container>
          <h2 className="text-[30px] leading-[1.2] font-bold text-heading lg:text-[38px] lg:leading-[46px]">
            Verified Certificate Document Previews
          </h2>
          <p className="mt-[27px] text-[16px] leading-[1.7] text-body lg:text-[17px] lg:leading-[28px]">
            Document placeholders only. Certified copies have not been supplied; no verified
            certificate images are displayed.
          </p>
          <div className="mt-8 lg:mt-[29px]">
            <CertificatePreviews />
          </div>
        </Container>
      </section>
    </>
  );
}
