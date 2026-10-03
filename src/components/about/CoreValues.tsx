import {
  CircleCheck,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sprout,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreValues, type CoreValueIcon } from "@/data/about";

const icons: Record<CoreValueIcon, LucideIcon> = {
  "shield-check": ShieldCheck,
  star: Star,
  lightbulb: Lightbulb,
  handshake: Handshake,
  "circle-check": CircleCheck,
  sprout: Sprout,
};

export function CoreValues() {
  return (
    <section className="bg-white py-16 lg:pt-[76px] lg:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Our Principles"
          title="Core Corporate Values"
          titleClassName="lg:mt-[37px]"
        />
        <ul className="mt-[37px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[34px]">
          {coreValues.map((value) => {
            const Icon = icons[value.icon];
            return (
              <li key={value.title} className="rounded-[20px] bg-cream p-6 lg:px-7 lg:pt-[27px] lg:pb-7">
                <Icon aria-hidden className="size-8 text-ink" strokeWidth={1.3} />
                <h3 className="mt-[18px] text-[24px] leading-[30px] font-normal text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-body">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
