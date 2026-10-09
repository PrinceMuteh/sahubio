import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlantIcon } from "@/components/ui/PlantIcon";

type CtaBannerProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBanner({
  title = "Ready to Streamline Your Agricultural Supply Chain?",
  description = "Connect with our head office in Abuja to discuss procurement, farm development, or export partnerships.",
  ctaLabel = "Contact Our Team",
  ctaHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="bg-accent">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:pt-[85px] lg:pb-[81px]">
        <div className="max-w-[940px]">
          <h2 className="text-[30px] leading-[1.2] font-bold text-heading sm:text-[36px] lg:text-[42px] lg:leading-[47px]">
            {title}
          </h2>
          <p className="mt-[18px] text-[16px] leading-[1.65] text-body lg:mt-[25px] lg:text-[17px] lg:leading-[28px]">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-[28px] lg:items-end">
          <PlantIcon className="hidden h-[74px] w-[68px] text-brand-800 lg:mr-[9px] lg:block" />
          <ButtonLink href={ctaHref} variant="brand" className="w-[207px]">
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
