import Link from "next/link";
import { footerQuickLinks, legalLinks } from "@/data/navigation";
import { divisions, divisionHref } from "@/data/divisions";
import { site, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[15px] leading-5 font-normal text-accent lg:pt-[6px]">{children}</h2>;
}

const linkClass = "text-[14px] leading-5 text-on-dark transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-on-dark">
      <Container className="pt-[57px] pb-7 lg:pb-[26px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:grid-cols-[374px_218px_316px_1fr] xl:gap-0">
          <div className="max-w-[330px]">
            <p className="pt-[3px] text-[15px] leading-[19px] font-semibold text-white lg:pt-[6px] lg:leading-[18px]">
              Sahu Bio Resource
              <br />
              Nigeria Limited
            </p>
            <p className="mt-[22px] text-[15px] leading-[25px] text-on-dark">
              Indigenous agricultural &amp; biological resources company operating across
              the value chain since {site.incorporated}. {site.rcNumber}.
            </p>
            <ul className="mt-6 flex items-center gap-[8.5px]">
              {socialLinks.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block text-accent transition-opacity hover:opacity-80"
                  >
                    <SocialIcon name={social.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 flex flex-col gap-[10px] text-[14px] leading-5 lg:mt-[15px]">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Agro divisions">
            <FooterHeading>Agro Divisions</FooterHeading>
            <ul className="mt-5 flex flex-col gap-[10px] text-[14px] leading-5 lg:mt-[15px]">
              {divisions.map((division) => (
                <li key={division.slug}>
                  <Link href={divisionHref(division.slug)} className={linkClass}>
                    {division.footerLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Contact &amp; Compliance</FooterHeading>
            <ul className="mt-5 flex flex-col gap-[10px] text-[14px] leading-5 lg:mt-[15px]">
              <li>{site.contact.location}</li>
              <li>
                <a href={site.contact.phoneHref} className={linkClass}>
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className={linkClass}>
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-on-dark-line pt-10 text-[12px] lg:pt-[41px] leading-4 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
