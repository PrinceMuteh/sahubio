import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type KeyOfferingsProps = {
  offerings: string[];
  /** Contact link that pre-selects this division in the inquiry form. */
  inquiryHref: string;
};

export function KeyOfferings({ offerings, inquiryHref }: KeyOfferingsProps) {
  return (
    <div>
      <h2 className="text-[30px] leading-[1.2] font-bold text-heading lg:text-[36px] lg:leading-[44px]">
        Key Offerings
      </h2>
      <ol className="mt-[19px] flex flex-col gap-5">
        {offerings.map((offering, index) => {
          const featured = index === 0;
          return (
            <li key={offering}>
              <Link
                href={inquiryHref}
                className={cn(
                  "group flex min-h-[75px] items-center gap-4 rounded-[16px] px-6 py-4 transition-colors duration-200",
                  featured
                    ? "bg-brand-800 text-white"
                    : "bg-white text-ink hover:bg-brand-800 hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "w-5 shrink-0 text-[13px] leading-5 transition-colors",
                    featured ? "text-accent" : "text-muted group-hover:text-accent",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[18px] leading-[26px] lg:text-[21px]">{offering}</span>
                <ArrowUpRight
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    featured ? "text-accent" : "text-ink group-hover:text-accent",
                  )}
                  strokeWidth={2}
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
