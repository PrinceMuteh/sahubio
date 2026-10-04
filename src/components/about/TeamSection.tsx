import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/about";

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

      <ul className="mt-[39px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <li key={`${member.name}-${index}`} className="rounded-[20px] bg-white p-6 pb-[26px]">
            <div className="relative aspect-[262/220] overflow-hidden rounded-[14px] bg-cream">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(min-width: 1024px) 262px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top grayscale"
              />
            </div>
            <p className="mt-5 inline-flex rounded-full bg-accent px-[9px] py-[7px] text-[10px] leading-[15px] font-semibold text-heading uppercase">
              {member.role}
            </p>
            <h3 className="mt-[3px] text-[20.5px] leading-6 font-bold text-heading uppercase">
              {member.name}
            </h3>
            {member.profession && (
              <p className="mt-2 text-[14px] leading-5 text-ink-soft">
                <span className="font-semibold text-heading">Profession:</span> {member.profession}
              </p>
            )}
            <p className="mt-3 text-[16px] leading-[26.67px] text-body">{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
