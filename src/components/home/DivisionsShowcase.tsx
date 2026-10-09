import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { divisions, divisionHref, type Division } from "@/data/divisions";

function ShowcaseCard({ division, sizes }: { division: Division; sizes: string }) {
  return (
    <Link
      href={divisionHref(division.slug)}
      className="group flex h-full flex-col rounded-[20px] bg-cream p-3 transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(23,45,33,0.35)]"
    >
      <div className="relative h-[180px] overflow-hidden rounded-[20px]">
        <Image
          src={division.images.card}
          alt={division.homeTitle}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col px-3 pt-[22px] pb-[15px]">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[22px] leading-[26px] font-normal text-ink">{division.homeTitle}</h3>
          <ArrowUpRight
            aria-hidden
            className="mt-[2px] size-6 shrink-0 text-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </div>
        <p className="mt-[17px] text-[15px] leading-[25px] tracking-[-0.1px] text-body">{division.homeDescription}</p>
      </div>
    </Link>
  );
}

export function DivisionsShowcase() {
  const firstRow = divisions.slice(0, 4);
  const secondRow = divisions.slice(4);

  return (
    <section className="bg-white py-16 lg:pt-20 lg:pb-[79px]">
      <Container>
        <SectionHeading
          eyebrow="Our Agro Divisions"
          title="Integrated Agricultural Solutions"
          titleClassName="lg:mt-5"
        />

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((division) => (
            <li key={division.slug}>
              <ShowcaseCard
                division={division}
                sizes="(min-width: 1024px) 296px, (min-width: 640px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-[35px] lg:grid-cols-3">
          {secondRow.map((division) => (
            <li key={division.slug}>
              <ShowcaseCard
                division={division}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
