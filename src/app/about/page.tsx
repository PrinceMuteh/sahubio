import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { VisionMission } from "@/components/about/VisionMission";
import { TeamSection } from "@/components/about/TeamSection";
import { CoreValues } from "@/components/about/CoreValues";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SAHUBio — our origin, vision, leadership, and dedication to strengthening food security across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Rooted in Living Resources,
            <br className="hidden lg:block" /> Committed to Sustainable Impact
          </>
        }
        subtitle="Learn about SAHUBio—our origin, vision, and dedication to strengthening food security across Nigeria."
        image="/images/heroes/about.jpg"
        imageAlt="Young maize rows stretching towards trees at sunset"
      />
      <WhoWeAre />
      <section className="bg-cream py-16 lg:pt-[72px] lg:pb-[79px]">
        <Container>
          <VisionMission />
          <div className="mt-20 lg:mt-[152px]">
            <TeamSection />
          </div>
        </Container>
      </section>
      <CoreValues />
    </>
  );
}
