import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="bg-brand-800 text-[12px] leading-[18px] text-on-dark">
      <Container className="flex h-[38px] items-center justify-between gap-4">
        <p className="flex min-w-0 items-center gap-2 truncate">
          <a href={site.contact.phoneHref} className="transition-colors hover:text-white">
            Phone: {site.contact.phone}
          </a>
          <span aria-hidden className="hidden h-[16px] w-px bg-on-dark/80 sm:block" />
          <a
            href={site.contact.emailHref}
            className="hidden transition-colors hover:text-white sm:inline"
          >
            Email: {site.contact.email}
          </a>
        </p>
        <p className="hidden shrink-0 md:block">Location: {site.contact.location}</p>
      </Container>
    </div>
  );
}
