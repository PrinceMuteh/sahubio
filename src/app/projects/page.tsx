import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Field Operations & Community Impact",
  description:
    "On-ground agricultural projects, farmer training programs, and research trials delivered by SAHUBio across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Field Projects & Community Engagement"
        title={
          <>
            Field Operations &amp; Community
            <br className="hidden lg:block" /> Impact
          </>
        }
        subtitle="Documenting our on-ground agricultural projects, farmer training programs, and research trials across Nigeria."
        image="/images/heroes/projects.jpg"
        imageAlt="Farmers walking along a path between cultivated fields"
        imagePosition="50% 42%"
        heightClassName="lg:h-[378px]"
      />

      <section className="bg-cream py-16 lg:pt-[72px] lg:pb-[72px]">
        <Container>
          <SectionHeading
            eyebrow="In the Field"
            title="Operational Case Studies"
            titleClassName="lg:mt-[31px]"
          />
          <p className="mt-6 text-[14px] leading-5 text-body lg:mt-[36px]">
            Representative imagery accompanies the supplied project descriptions; it does not
            document SAHUBio’s actual projects.
          </p>

          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-[33px] lg:gap-y-8">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="h-full rounded-[20px] bg-white p-[14px]">
                  <div className="relative h-[240px] overflow-hidden rounded-[20px] lg:h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 616px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 pt-[23px] pb-6">
                    <h2 className="text-[24px] leading-[1.25] font-normal text-ink lg:text-[28px] lg:leading-[35px]">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-[16px] leading-7 text-body lg:mt-[17px] lg:text-[17px]">
                      {project.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
