import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fertilizerPermit as permit } from "@/data/compliance";

const facts = [
  { label: "Permit No.", value: permit.number },
  { label: "Distribution Category", value: `Category ${permit.category}` },
  { label: "Issued by", value: `${permit.issuerShort} · FISS Department` },
  { label: "Valid until", value: permit.validTo },
];

const SEAL_TEXT = "Federally Licensed • Fertilizer Distributor • ";

/** Rotating "licensed" seal pinned to the corner of the certificate. */
function Seal() {
  return (
    <div className="absolute -top-6 right-0 z-10 size-[92px] rounded-full bg-accent text-brand-800 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] sm:-top-11 sm:-right-6 sm:size-[124px]">
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="size-full motion-safe:animate-[spin_22s_linear_infinite]"
      >
        <defs>
          <path id="license-seal-ring" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[8.4px] font-bold uppercase">
          <textPath href="#license-seal-ring" textLength="230" lengthAdjust="spacing">
            {SEAL_TEXT}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex size-[46px] items-center justify-center rounded-full bg-brand-800 text-accent sm:size-[54px]">
        <ShieldCheck aria-hidden className="size-6 sm:size-7" strokeWidth={1.8} />
      </span>
    </div>
  );
}

export function LicenseHighlight() {
  return (
    <section
      aria-labelledby="license-highlight-title"
      className="relative isolate overflow-hidden bg-brand-800 py-16 lg:py-[96px]"
    >
      {/* Soft glows to lift the band off the flat green. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(245,213,71,0.14),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-48 -z-10 size-[640px] rounded-full bg-[radial-gradient(circle,rgba(235,240,230,0.10),transparent_65%)]"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-[72px]">
        <div>
          <SectionHeading
            eyebrow="Licensed & Certified"
            title={
              <span id="license-highlight-title">
                Federally Licensed
                <br className="hidden sm:block" /> Fertilizer Distributor
              </span>
            }
            titleClassName="text-white lg:mt-[21px]"
            className="[&>p]:text-white/85"
          />
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-on-dark lg:text-[17px] lg:leading-[28.6px]">
            SAHUBio holds a Category {permit.category} Fertilizer Sales Permit from the{" "}
            {permit.issuer}, issued under the {permit.act}. Farmers, cooperatives and corporate
            buyers can source fertilizer from us knowing it comes through a federally registered
            distribution channel.
          </p>

          <dl className="mt-9 grid max-w-[560px] grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-on-dark-line bg-on-dark-line">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-brand-800 px-5 py-4">
                <dt className="text-[12px] leading-4 text-on-dark-soft uppercase">{fact.label}</dt>
                <dd className="mt-2 text-[16px] leading-6 font-semibold text-white lg:text-[17px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ButtonLink href="/compliance">View Compliance Records</ButtonLink>
            <a
              href={permit.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-white underline-offset-4 hover:underline"
            >
              Open certificate
              <ExternalLink aria-hidden className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] px-2 pt-6 sm:px-0 lg:pt-0">
          <a
            href={permit.file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${permit.issuerShort} fertilizer sales permit ${permit.number} full size`}
            className="group relative block"
          >
            {/* Stacked "paper" behind the certificate. */}
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-[2.5deg] rounded-[18px] bg-brand-700 transition-transform duration-500 group-hover:rotate-[1deg]"
            />
            <span className="relative block -rotate-[2deg] rounded-[18px] bg-white p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02] sm:p-3">
              <Image
                src={permit.file}
                alt={`${permit.issuer} Fertilizer Sales Permit ${permit.number} issued to Sahu Bio Resources Nig Ltd`}
                width={permit.width}
                height={permit.height}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full rounded-[10px]"
              />
            </span>
          </a>
          <Seal />
        </div>
      </Container>
    </section>
  );
}
