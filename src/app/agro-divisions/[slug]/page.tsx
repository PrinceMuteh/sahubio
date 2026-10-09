import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { KeyOfferings } from "@/components/divisions/KeyOfferings";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { divisions, getDivision } from "@/data/divisions";

export const dynamicParams = false;

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/agro-divisions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) return {};
  return {
    title: division.hero.title,
    description: division.hero.subtitle,
    openGraph: { images: [{ url: division.images.hero }] },
  };
}

export default async function DivisionPage({ params }: PageProps<"/agro-divisions/[slug]">) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();

  const inquiryHref = `/contact?division=${division.slug}`;
  const title = division.hero.titleLines ? (
    <>
      {division.hero.titleLines.map((line, index) => (
        <span key={line} className="lg:block">
          {line}
          {index < division.hero.titleLines!.length - 1 && " "}
        </span>
      ))}
    </>
  ) : (
    division.hero.title
  );

  return (
    <>
      <PageHero
        eyebrow={division.hero.eyebrow}
        title={title}
        titleClassName="lg:max-w-[1100px]"
        subtitle={division.hero.subtitle}
        image={division.images.hero}
        imageAlt={division.title}
      />
      <section className="bg-cream py-16 lg:pt-[76px] lg:pb-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_692px] lg:gap-16">
          <div className="lg:pt-[2px]">
            <Eyebrow>Division Overview</Eyebrow>
            <p className="mt-[25px] max-w-[540px] text-[17px] leading-[1.7] text-body lg:text-[19px] lg:leading-[31px]">
              {division.overview}
            </p>
            <ButtonLink href={inquiryHref} variant="brand" className="mt-[27px]">
              {division.ctaLabel}
            </ButtonLink>
          </div>
          <KeyOfferings offerings={division.offerings} inquiryHref={inquiryHref} />
        </Container>
      </section>
    </>
  );
}
