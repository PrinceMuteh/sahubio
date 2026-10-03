"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FileText, X } from "lucide-react";
import { certificatePreviews } from "@/data/compliance";

type Certificate = (typeof certificatePreviews)[number];

function Placeholder({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex h-[220px] flex-col items-center justify-center gap-[18px] rounded-[10px] bg-sage text-[#6f746c]"
          : "flex h-[180px] flex-col items-center justify-center gap-[18px] rounded-[10px] bg-sage text-[#6f746c]"
      }
    >
      <FileText aria-hidden className="size-[38px]" strokeWidth={1.1} />
      <span className="text-[12px] leading-4 font-medium uppercase">Document Placeholder</span>
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
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificatePreviews.map((certificate) => (
          <li key={certificate.body}>
            <button
              type="button"
              onClick={() => setActive(certificate)}
              className="group block w-full rounded-[20px] bg-white p-6 pb-[22px] text-left transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(23,45,33,0.3)]"
            >
              <Placeholder />
              <h3 className="mt-[21px] text-[25px] leading-8 font-normal text-ink">
                {certificate.body}
              </h3>
              <p className="mt-[21px] text-[15px] leading-6 text-body">{certificate.document}</p>
              <span className="mt-[21px] block border-t border-line-soft pt-[23px] text-[12px] leading-4 text-muted transition-colors group-hover:text-brand-800">
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
        className="m-auto w-[min(560px,calc(100%-32px))] rounded-[24px] bg-white p-0 backdrop:bg-brand-900/60"
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
          </div>
        )}
      </dialog>
    </>
  );
}
