import { cn } from "@/lib/cn";

export const controlClass =
  "block w-full rounded-[8px] border border-line-soft bg-white px-4 text-[15px] leading-6 text-ink outline-none transition-colors placeholder:text-muted hover:border-[#cfd2cd] focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 aria-[invalid=true]:border-red-500";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

/** Label + control + inline error message. */
export function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[13px] leading-4 text-ink-soft">
        {label}
      </label>
      <div className="mt-[9px]">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] leading-4 text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };

export function Input({ className, invalid, id, ...props }: InputProps) {
  return (
    <input
      id={id}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${id}-error` : undefined}
      className={cn(controlClass, "h-[54px]", className)}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean };

export function Textarea({ className, invalid, id, ...props }: TextareaProps) {
  return (
    <textarea
      id={id}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${id}-error` : undefined}
      className={cn(controlClass, "h-[142px] resize-y py-3", className)}
      {...props}
    />
  );
}
