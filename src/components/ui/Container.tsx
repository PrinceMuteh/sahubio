import { cn } from "@/lib/cn";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Centered 1312px content column with responsive gutters (64px at desktop). */
export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={cn("container-site", className)} {...rest}>
      {children}
    </Component>
  );
}
