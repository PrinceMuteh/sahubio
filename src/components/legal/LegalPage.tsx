import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { legalLinks } from "@/data/navigation";
import type { LegalDocument } from "@/data/legal";
import { cn } from "@/lib/cn";

export function LegalPage({ document }: { document: LegalDocument }) {
  const activeHref = `/${document.slug}`;

  return (
    <>
      <PageHero
        eyebrow="Corporate Information"
        title={document.title}
        titleClassName="lg:mt-[22px] lg:text-[64px] lg:leading-[72px]"
        subtitle={`Effective Date: ${document.effectiveDate}`}
        subtitleClassName="text-accent lg:mt-[22px] lg:text-[16px] lg:leading-6"
        tone={document.heroTone}
        heightClassName="lg:h-[298px] lg:pt-[2px]"
      />
      <section className="bg-cream py-16 lg:pt-[72px] lg:pb-[73px]">
        <Container className="grid gap-10 lg:grid-cols-[272px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <nav
              aria-label="Legal & compliance"
              className="rounded-[20px] bg-white px-[26px] pt-[25px] pb-[25px]"
            >
              <p className="text-[14px] leading-5 text-muted uppercase">Legal &amp; Compliance</p>
              <ul className="mt-5 flex flex-col gap-[22px]">
                {legalLinks.map((link) => {
                  const active = link.href === activeHref;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "text-[16px] leading-6 transition-colors hover:text-brand-800",
                          active ? "font-bold text-heading" : "text-ink",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <article className="max-w-[870px] lg:-mt-[3px]">
            {document.sections.map((section, index) => (
              <section key={section.heading} className={index > 0 ? "mt-[30px]" : undefined}>
                <h2 className="text-[21px] leading-[30px] font-normal text-ink lg:text-[23px]">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-7 text-body lg:text-[17px]">{section.body}</p>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
