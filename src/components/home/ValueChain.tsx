import { Globe, Package, Sprout, Tractor, Truck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueChain, type ValueChainIcon } from "@/data/home";
import { cn } from "@/lib/cn";

const icons: Record<ValueChainIcon, LucideIcon> = {
  sprout: Sprout,
  tractor: Tractor,
  package: Package,
  truck: Truck,
  globe: Globe,
};

export function ValueChain() {
  return (
    <section className="bg-cream py-16 lg:pt-[81px] lg:pb-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            eyebrow="The SAHUBio Advantage"
            titleClassName="lg:mt-5"
            title={
              <>
                One Accountable Partner
                <br className="hidden lg:block" /> Across the Full Value Chain
              </>
            }
          />
          <p className="max-w-[632px] text-[16px] leading-[1.7] text-body lg:-mb-[2px] lg:text-[17px] lg:leading-[28px] lg:tracking-[-0.08px]">
            Managing agricultural contracts across multiple vendors leads to produce loss, delays,
            and supply chain fragmentation. SAHUBio unifies the full cycle under one transparent
            operational standard.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {valueChain.map((step, index) => {
            const Icon = icons[step.icon];
            const featured = index === 0;
            return (
              <li
                key={step.number}
                className={cn(
                  "rounded-[20px] p-6 pb-[27px]",
                  featured ? "bg-brand-800 text-white" : "bg-white",
                )}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    aria-hidden
                    className={cn("size-8", featured ? "text-accent" : "text-ink")}
                    strokeWidth={1.4}
                  />
                  <span
                    className={cn(
                      "pt-[8px] text-[12px] leading-4",
                      featured ? "text-white/75" : "text-muted",
                    )}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mt-[21px] text-[22px] leading-7 font-normal",
                    featured ? "text-white" : "text-ink",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-[15px] leading-6",
                    featured ? "text-white/80" : "text-body",
                  )}
                >
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
