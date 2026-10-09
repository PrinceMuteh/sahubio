import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisionHref, type Division } from "@/data/divisions";
import { cn } from "@/lib/cn";

type DivisionCardProps = {
  division: Division;
  /** Horizontal layout used for the final, full-width card. */
  wide?: boolean;
};

function CardBody({ division }: { division: Division }) {
  return (
    <>
      <p className="text-[12px] leading-4 font-semibold tracking-[0.01em] text-body uppercase">
        Division {division.number}
      </p>
      <h2 className="mt-4 text-[24px] leading-8 font-normal text-ink lg:text-[26px]">
        {division.title}
      </h2>
      <p className="mt-[18px] text-[16px] leading-[27px] text-body">{division.description}</p>
      <span className="mt-4 inline-flex items-center gap-[14px] text-[14px] leading-5 text-ink">
        Learn More
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={3}
        />
      </span>
    </>
  );
}

export function DivisionCard({ division, wide = false }: DivisionCardProps) {
  return (
    <Link
      href={divisionHref(division.slug)}
      className={cn(
        "group block h-full rounded-[20px] bg-white p-[14px] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(23,45,33,0.35)]",
        wide && "lg:grid lg:grid-cols-[570px_1fr] lg:items-center lg:gap-[41px]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[20px]",
          wide ? "h-[225px] lg:h-[259px]" : "h-[225px]",
        )}
      >
        <Image
          src={division.images.overview}
          alt={division.title}
          fill
          sizes={wide ? "(min-width: 1024px) 570px, 100vw" : "(min-width: 1024px) 394px, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className={cn("px-4 pt-[23px] pb-[19px]", wide && "lg:px-0 lg:pt-0 lg:pb-[19px]")}>
        <CardBody division={division} />
      </div>
    </Link>
  );
}
