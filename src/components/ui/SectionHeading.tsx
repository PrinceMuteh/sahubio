import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

/** Eyebrow label + large section title used across pages. */
export function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "text-[30px] leading-[1.15] font-bold text-heading sm:text-[36px] lg:text-[42px] lg:leading-[46px]",
          eyebrow && "mt-[22px]",
          titleClassName,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
