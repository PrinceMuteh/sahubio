import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroOverlay } from "@/components/sections/PageHero";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden py-24 lg:h-[730px] lg:py-0">
      <Image
        src="/images/heroes/home-farmers.jpg"
        alt="Farmers walking through a misty crop field at dawn"
        fill
        preload
        sizes="100vw"
        quality={85}
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: heroOverlay }} />

      <Container className="w-full">
        <Eyebrow tone="light">{site.tagline}</Eyebrow>
        <h1 className="mt-[26px] max-w-[1000px] text-[40px] leading-[1.12] font-bold text-white sm:text-[52px] lg:text-[64px] lg:leading-[74px]">
          Powering Nigeria’s Agricultural Value Chain from Farm Gate to Global Markets
        </h1>
        <p className="mt-[22px] max-w-[790px] text-[17px] leading-[1.65] text-white/85 lg:text-[19px] lg:leading-[31px]">
          Indigenous expertise in sustainable farming, biological resources, agro-logistics, and
          international commodity trade. Incorporating proven agronomy, research, and
          infrastructure across 7 specialized divisions.
        </p>
        <div className="mt-[38px] flex flex-wrap gap-4">
          <ButtonLink href="/agro-divisions" className="w-[226px]">
            Explore Our Divisions
          </ButtonLink>
          <ButtonLink
            href={site.companyProfile}
            variant="outline-light"
            className="w-[306px]"
            download
          >
            Download Company Profile (PDF)
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
