import { Container } from "@/components/ui/Container";
import { trustHighlights } from "@/data/home";

export function TrustStrip() {
  return (
    <section aria-label="Company highlights" className="bg-accent">
      <Container>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 py-6 sm:grid-cols-2 lg:h-[80px] lg:grid-cols-4 xl:grid-cols-[repeat(4,312px)] lg:items-center lg:py-0">
          {trustHighlights.map((item) => (
            <li key={item} className="flex items-center gap-[13px] text-[15px] leading-5 text-brand-800">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-brand-800" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
