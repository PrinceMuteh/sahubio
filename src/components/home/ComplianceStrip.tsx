import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { regulators } from "@/data/home";

export function ComplianceStrip() {
  return (
    <section className="bg-cream py-16 lg:py-[72px]">
      <Container>
        <div className="mx-auto max-w-[982px]">
          <Eyebrow className="justify-center">Regulatory Trust &amp; Compliance</Eyebrow>
          <h2 className="mt-[25px] text-[30px] leading-[1.15] font-bold text-heading sm:text-[36px] lg:text-[42px] lg:leading-[46px]">
            Built on Complete Statutory Compliance
          </h2>
          <p className="mt-[22px] text-[16px] leading-[1.6] text-body lg:text-[17px] lg:leading-[28px]">
            Fully compliant with all Nigerian corporate, trade, and social security statutory
            authorities.
          </p>
        </div>

        <ul className="mt-[29px] grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          {regulators.map((regulator) => (
            <li
              key={regulator}
              className="flex h-[72px] items-center justify-center rounded-[12px] bg-white px-4 text-center text-[14px] leading-5 text-ink"
            >
              {regulator}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
