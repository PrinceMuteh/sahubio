"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, X } from "lucide-react";
import { certificatePreviews } from "@/data/compliance";
import { cn } from "@/lib/cn";

type Certificate = (typeof certificatePreviews)[number];

function Placeholder({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-[18px] rounded-[10px] bg-sage text-body",
        compact ? "h-[220px]" : "h-[180px]",
      )}
    >
      <FileText aria-hidden className="size-[38px]" strokeWidth={1.1} />
      <span className="text-[12px] leading-4 font-medium uppercase">Document Placeholder</span>
    </div>
  );
}

function Thumbnail({ certificate }: { certificate: Certificate }) {
  if (!certificate.file) return <Placeholder />;
  return (
    <div className="relative h-[180px] overflow-hidden rounded-[10px] bg-sage">
      <Image
        src={certificate.file}
        alt={`${certificate.body} ${certificate.document}`}
        fill
        sizes="(min-width: 1280px) 220px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        className="object-contain p-2"
      />
    </div>
  );
}

export function CertificatePreviews() {
  const [active, setActive] = useState<Certificate | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {certificatePreviews.map((certificate) => (
          <li key={certificate.body}>
            <button
              type="button"
              onClick={() => setActive(certificate)}
              className="group flex h-full w-full flex-col rounded-[20px] bg-white p-6 pb-[22px] text-left transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(23,45,33,0.3)]"
            >
              <Thumbnail certificate={certificate} />
              <h3 className="mt-[21px] text-[25px] leading-8 font-normal text-ink">
                {certificate.body}
              </h3>
              <p className="my-[21px] text-[15px] leading-6 text-body">{certificate.document}</p>
              <span className="mt-auto block border-t border-line-soft pt-[23px] text-[12px] leading-4 text-muted transition-colors group-hover:text-brand-800">
                Click to view
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        aria-labelledby="certificate-dialog-title"
        className={cn(
          "m-auto rounded-[24px] bg-white p-0 backdrop:bg-brand-900/60",
          active?.file ? "w-[min(960px,calc(100%-32px))]" : "w-[min(560px,calc(100%-32px))]",
        )}
      >
        {active && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] leading-4 font-semibold text-body uppercase">
                  Certificate preview
                </p>
                <h2 id="certificate-dialog-title" className="mt-2 text-[26px] leading-8 font-bold text-heading">
                  {active.body} — {active.document}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-ink hover:bg-cream"
              >
                <X className="size-5" />
              </button>
            </div>

            {active.file ? (
              <>
                <div className="mt-6 overflow-hidden rounded-[12px] border border-line-soft">
                  <Image
                    src={active.file}
                    alt={`${active.body} ${active.document}`}
                    width={1280}
                    height={906}
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <a
                  href={active.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-[52px] items-center gap-2 rounded-full bg-brand-800 px-6 text-[14px] font-semibold text-white hover:bg-brand-700"
                >
                  Open full size
                  <ExternalLink aria-hidden className="size-4" />
                </a>
              </>
            ) : (
              <>
                <div className="mt-6">
                  <Placeholder compact />
                </div>
                <p className="mt-6 text-[15px] leading-6 text-body">
                  A certified copy of this document has not been published online yet. Contact our
                  compliance team to request verified documentation for due-diligence purposes.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-[52px] items-center rounded-full bg-brand-800 px-6 text-[14px] font-semibold text-white hover:bg-brand-700"
                >
                  Request Documentation
                </Link>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
