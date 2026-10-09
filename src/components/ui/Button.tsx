import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "accent" | "brand" | "outline-light";

const base =
  "group inline-flex h-[52px] shrink-0 items-center justify-center gap-4 rounded-full px-6 text-[14px] leading-5 font-semibold whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-brand-800 hover:bg-accent-600",
  brand: "bg-brand-800 text-white hover:bg-brand-700",
  "outline-light":
    "border border-white/80 text-white hover:bg-white hover:text-brand-800",
};

function Arrow() {
  return (
    <ArrowUpRight
      aria-hidden
      className="size-[18px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      strokeWidth={2.75}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function ButtonLink({
  href,
  variant = "accent",
  arrow = true,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant = "brand",
  arrow = true,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}
