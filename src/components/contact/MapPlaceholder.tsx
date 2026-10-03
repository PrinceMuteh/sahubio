import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.address)}`;

export function MapPlaceholder() {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-[26px] leading-[1.2] font-bold text-heading lg:text-[32px] lg:leading-10">
          Maitama, Abuja
        </h2>
        <p className="text-[14px] leading-5 text-muted lg:pb-[5px]">
          Google Map placeholder · Static visual only
        </p>
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the SAHUBio head office location in Google Maps"
        className="group relative mt-[18px] block h-[280px] overflow-hidden rounded-[20px] lg:h-[367px]"
      >
        <Image
          src="/images/contact/map.png"
          alt="Map of Maitama and central Abuja"
          fill
          sizes="(min-width: 1440px) 1312px, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <div className="absolute top-1/2 left-1/2 flex w-[298px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-[16px] bg-brand-800 px-6 py-6 text-center shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-[52%]">
          <MapPin aria-hidden className="size-6 text-accent" strokeWidth={1.75} />
          <p className="mt-1 text-[16px] leading-6 text-white">Maitama, Abuja</p>
          <p className="text-[11px] leading-4 text-white/70">Visual placeholder — not an interactive map</p>
        </div>
      </a>
    </div>
  );
}
