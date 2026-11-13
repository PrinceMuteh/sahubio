export type Registration = {
  body: string;
  document: string;
  reference: string;
  status: string;
};

/** FMAFS fertilizer sales permit — shown on the Compliance and About pages. */
export const fertilizerPermit = {
  number: "FISS003633A",
  category: "A",
  issuer: "Federal Ministry of Agriculture and Food Security",
  issuerShort: "FMAFS",
  department: "Farm Inputs Support Services (FISS)",
  act: "National Fertilizer Quality (Control) Act, 2019",
  validFrom: "9 Nov 2026",
  validTo: "9 Nov 2029",
  file: "/images/compliance/fmafs-fertilizer-sales-permit.jpg",
  width: 1280,
  height: 906,
} as const;

export const registrations: Registration[] = [
  {
    body: "CAC",
    document: "Certificate of Incorporation",
    reference: "RC 1208792",
    status: "Active (Incorporated 2014)",
  },
  {
    body: "NRS",
    document: "Tax Clearance Certificate (TCC)",
    reference: "TIN: 2521515889411",
    status: "Valid to 31 Dec 2026",
  },
  {
    body: "NEPC",
    document: "Exporters' Registration Certificate",
    reference: "RE No. 0043342",
    status: "Valid to 14 Apr 2028",
  },
  {
    body: "SCUML (EFCC)",
    document: "Money Laundering Registration",
    reference: "SC 251838448",
    status: "Issued 22 May 2025",
  },
  {
    body: "NSITF",
    document: "ECS Clearance Certificate",
    reference: "Reg No. 1008413125",
    status: "Valid to 31 Dec 2026",
  },
  {
    body: "ITF",
    document: "Compliance Certificate",
    reference: "ABJ-012-8875",
    status: "Valid to 31 Dec 2026",
  },
  {
    body: "PenCom",
    document: "Pension Clearance Certificate",
    reference: "PR0000127522",
    status: "Valid to 31 Dec 2026",
  },
  {
    body: "FMITI",
    document: "Trademark Acceptance Letters",
    reference: "Classes 1, 29, 31, 44",
    status: "Accepted & Journal Pending",
  },
  {
    body: "FMAFS (FISS)",
    document: `Fertilizer Sales Permit — Distributor, Category ${fertilizerPermit.category}`,
    reference: fertilizerPermit.number,
    status: `Valid ${fertilizerPermit.validFrom} – ${fertilizerPermit.validTo}`,
  },
];

/**
 * Certificates shown in the preview grid. Cards with a `file` (path under /public)
 * show the scanned certificate; the rest render a placeholder until a copy is supplied.
 */
export const certificatePreviews: {
  body: string;
  document: string;
  file?: string;
}[] = [
  {
    body: fertilizerPermit.issuerShort,
    document: `Fertilizer Sales Permit (${fertilizerPermit.number})`,
    file: fertilizerPermit.file,
  },
  { body: "CAC", document: "Certificate of Incorporation" },
  { body: "NEPC", document: "Exporters' Registration Certificate" },
  { body: "NRS", document: "Tax Clearance Certificate (TCC)" },
  { body: "SCUML", document: "Money Laundering Registration" },
];
