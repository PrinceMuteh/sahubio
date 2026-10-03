import { site } from "@/data/site";

const items = [
  { label: "Telephone", value: site.contact.phone, href: site.contact.phoneHref },
  { label: "Email", value: site.contact.email, href: site.contact.emailHref },
  { label: "Corporate Details", value: `${site.rcNumber} | TIN: ${site.tin}` },
  { label: "Office Hours", value: site.contact.officeHours },
];

export function ContactDetails() {
  return (
    <div className="lg:max-w-[498px]">
      <h2 className="text-[30px] leading-[1.2] font-bold text-heading lg:text-[36px] lg:leading-[44px]">
        Corporate head office
      </h2>
      <dl className="mt-7 border-b border-line">
        <div className="pb-6">
          <dt className="text-[13px] leading-4 text-ink-soft">Head Office Address</dt>
          <dd className="mt-[10px] text-[19px] leading-[1.6] text-heading lg:text-[22px] lg:leading-[35px]">
            <address className="not-italic">{site.contact.address}</address>
          </dd>
        </div>
        {items.map((item) => (
          <div key={item.label} className="border-t border-line pt-7 pb-6">
            <dt className="text-[13px] leading-4 text-ink-soft">{item.label}</dt>
            <dd className="mt-3 text-[17px] leading-[26px] text-body lg:text-[18px]">
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-brand-800">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
