import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DivisionCard } from "@/components/divisions/DivisionCard";
import { Container } from "@/components/ui/Container";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Our 7 Agro Divisions",
  description:
    "Specialized operational units structured to serve every phase of the agricultural value chain — from agronomy and biological resources to logistics, export, and research.",
};

export default function AgroDivisionsPage() {
  const grid = divisions.slice(0, 6);
  const featured = divisions[6];

  return (
    <>
      <PageHero
        eyebrow="Integrated Agricultural Solutions"
        title="Our 7 Agro Divisions"
        subtitle="Specialized operational units structured to serve every phase of the agricultural value chain."
        image="/images/heroes/agro-divisions.jpg"
        imageAlt="Tractor working a large maize field"
        imagePosition="50% 40%"
        heightClassName="lg:h-[370px]"
      />
      <section className="bg-cream py-16 lg:pt-[72px] lg:pb-[72px]">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((division) => (
              <li key={division.slug}>
                <DivisionCard division={division} />
              </li>
            ))}
          </ul>
          {featured && (
            <div className="mt-6 lg:mt-[23px]">
              <DivisionCard division={featured} wide />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
