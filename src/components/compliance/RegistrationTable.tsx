import { registrations } from "@/data/compliance";
import { cn } from "@/lib/cn";

const columns = ["Regulatory Body", "Document Description", "Reference / License No.", "Validity Status"];

export function RegistrationTable() {
  return (
    <div className="overflow-x-auto rounded-[16px] border border-line-soft">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <caption className="sr-only">Statutory registrations held by SAHU Bio-Resources Nig. Ltd</caption>
        <colgroup>
          <col className="w-[180px]" />
          <col className="w-[420px]" />
          <col className="w-[320px]" />
          <col />
        </colgroup>
        <thead className="bg-brand-800">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="h-[62px] px-5 text-[14px] leading-5 font-normal text-white/80"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {registrations.map((row, index) => (
            <tr
              key={row.body}
              className={cn(
                "border-line text-[15px] leading-5 text-ink [&:not(:last-child)]:border-b",
                index % 2 === 1 ? "bg-cream" : "bg-white",
              )}
            >
              <th scope="row" className="h-[67px] px-5 font-semibold text-heading">
                {row.body}
              </th>
              <td className="px-5">{row.document}</td>
              <td className="px-5">{row.reference}</td>
              <td className="px-5">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
