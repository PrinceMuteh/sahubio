import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Background photo. When omitted a solid brand surface is used. */
  image?: string;
  imageAlt?: string;
  /** CSS object-position for the photo, matched to the design crop. */
  imagePosition?: string;
  tone?: "brand" | "deep";
  /** Height at the 1440px desktop breakpoint (content is vertically centered). */
  heightClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
};

export const heroOverlay =
  "linear-gradient(90deg, rgba(11,38,24,0.92) 0%, rgba(11,38,24,0.745) 50%, rgba(11,38,24,0.7) 61%, rgba(11,38,24,0.58) 72%, rgba(11,38,24,0.42) 83%, rgba(11,38,24,0.22) 100%)";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  imagePosition = "50% 6%",
  tone = "brand",
  heightClassName = "lg:h-[500px]",
  titleClassName,
  subtitleClassName,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden py-20 lg:py-0",
        heightClassName,
        !image && (tone === "deep" ? "bg-brand-950" : "bg-brand-800"),
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="100vw"
            quality={85}
            className="-z-20 object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: heroOverlay }} />
        </>
      )}

      <Container className="w-full">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1
          className={cn(
            "mt-[21px] max-w-[960px] text-[38px] leading-[1.15] font-bold text-white sm:text-[46px] lg:text-[56px] lg:leading-[64px]",
            titleClassName,
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mt-[23px] max-w-[790px] text-[17px] leading-[1.65] text-white/85 lg:text-[19px] lg:leading-[32px]",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
