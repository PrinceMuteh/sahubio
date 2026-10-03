import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Small uppercase section label preceded by the brand's yellow dot. */
export function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[12px] leading-4 font-normal uppercase",
        tone === "dark" ? "text-ink-soft" : "text-white/85",
        className,
      )}
    >
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent" />
      <span>{children}</span>
    </p>
  );
}
