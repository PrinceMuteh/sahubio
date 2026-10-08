import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team, technicalPartners, type TeamMember } from "@/data/about";

export function TeamSection() {
  return (
    <div>
      <SectionHeading
        eyebrow="Meet the Team"
        title="Leadership & Operations Team"
        titleClassName="lg:mt-9"
      />
      <p className="mt-[38px] text-[16px] leading-[1.6] text-body lg:text-[17px] lg:leading-[28px]">
        The people behind SAHUBio are dedicated to building stronger agricultural systems,
        trusted partnerships, and sustainable growth across Nigeria.
      </p>

      <MemberCards members={team} />
      <section aria-labelledby="technical-partners" className="mt-10">
        <h2 id="technical-partners" className="text-[32px] leading-tight font-bold text-heading lg:text-[42px] lg:leading-[46px]">
          Technical Partners
        </h2>
        <MemberCards members={technicalPartners} />
      </section>
    </div>
  );
}

function MemberCards({ members }: { members: TeamMember[] }) {
  return (
    <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <li key={member.name} className="rounded-[20px] bg-white p-6 pb-4 lg:min-h-[412px]">
          <div
            className="relative overflow-hidden rounded-[14px] bg-cream"
            style={{ aspectRatio: member.imageAspect ?? "262 / 220" }}
          >
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              sizes="(min-width: 1024px) 262px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <p className="mt-5 flex w-fit rounded-full bg-accent px-[11px] py-[7px] text-[9.5px] leading-[14px] font-semibold text-heading uppercase">
            {member.role}
          </p>
          <h3 className="mt-[10px] text-[18px] leading-[22px] font-bold text-heading uppercase">
            {member.name}
          </h3>
          <p className="mt-[10px] text-[16px] leading-[26px] text-body">{member.profession}</p>
        </li>
      ))}
    </ul>
  );
}
