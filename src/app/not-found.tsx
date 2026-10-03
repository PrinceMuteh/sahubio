import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container className="max-w-[880px] text-center">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="mt-6 text-[40px] leading-[1.1] font-bold text-heading lg:text-[56px] lg:leading-[64px]">
          This field hasn&apos;t been planted yet
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-7 text-body">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Explore our agro
          divisions or get in touch with our head office.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/contact" variant="brand">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
