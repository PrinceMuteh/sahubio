import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeAre() {
  return (
    <section className="bg-white py-16 lg:pt-20 lg:pb-[78px]">
      <Container className="grid items-center gap-10 lg:grid-cols-[544px_1fr] lg:gap-[60px]">
        <div className="relative aspect-[544/462] overflow-hidden rounded-[20px] lg:h-[462px]">
          <Image
            src="/images/about/who-we-are.jpg"
            alt="Tractor working rows of young maize on a SAHUBio-managed farm"
            fill
            sizes="(min-width: 1024px) 544px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Indigenous Excellence in
                <br className="hidden lg:block" /> Agribusiness
              </>
            }
            titleClassName="lg:mt-[21px] lg:leading-[47px]"
          />
          <div className="mt-[23px] space-y-[23px] text-[16px] leading-[1.7] text-body lg:text-[17px] lg:leading-[28.6px]">
            <p>
              Incorporated in 2014 (RC 1208792), SAHU Bio-Resources Nig. Ltd was established to
              bridge critical gaps in the West African agricultural ecosystem. The &quot;Bio&quot; in
              our name highlights our focus on living resources: crops, livestock, fisheries, and
              their derived products.
            </p>
            <p>
              Operating from Abuja, we combine modern agronomic research, engineering expertise,
              and logistics to deliver end-to-end reliability for farmers, corporate buyers, and
              global trade partners.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
