import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { Container } from "@/components/ui/Container";
import { getDivision } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SAHUBio's corporate head office in Maitama, Abuja to discuss agricultural projects, trade, or supply agreements.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { division } = await searchParams;
  const slug = typeof division === "string" && getDivision(division) ? division : "";

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get In Touch With SAHUBio"
        subtitle="Contact our corporate head office in Maitama, Abuja to discuss agricultural projects, trade, or supply agreements."
        heightClassName="lg:h-[332px]"
      />
      <section className="bg-cream py-16 lg:pt-[67px] lg:pb-[66px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_740px] lg:items-start lg:gap-[74px]">
            <ContactDetails />
            <div className="rounded-[20px] bg-white p-6 sm:p-9 lg:mt-1 lg:pt-[34px]">
              <h2 className="text-[26px] leading-[1.25] font-bold text-heading lg:text-[32px] lg:leading-10">
                General Inquiry
              </h2>
              <ContactForm key={slug} defaultDivision={slug} />
            </div>
          </div>
          <div className="mt-16 lg:mt-[69px]">
            <MapPlaceholder />
          </div>
        </Container>
      </section>
    </>
  );
}
