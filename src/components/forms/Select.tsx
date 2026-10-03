"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  id: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  defaultValue?: string;
  invalid?: boolean;
  /** "cream" matches the contact form's division picker, "white" the shop form. */
  tone?: "cream" | "white";
  /** Text size of the closed control. */
  textClassName?: string;
};

/**
 * Accessible single-select listbox. The option list expands inline inside the
 * control (as shown in the design) rather than floating over the form.
 */
export function Select({
  id,
  name,
  options,
  placeholder,
  defaultValue = "",
  invalid,
  tone = "cream",
  textClassName = "text-[14px]",
}: SelectProps) {
  const listId = useId();
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(() =>
    Math.max(0, options.findIndex((option) => option.value === defaultValue)),
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function choose(index: number) {
    const option = options[index];
    if (!option) return;
    setValue(option.value);
    setHighlighted(index);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) setOpen(true);
        else setHighlighted((index) => Math.min(options.length - 1, index + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) setOpen(true);
        else setHighlighted((index) => Math.max(0, index - 1));
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setHighlighted(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setHighlighted(options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) choose(highlighted);
        else setOpen(true);
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        "rounded-[8px] border transition-colors",
        tone === "cream" ? "bg-cream" : "bg-white",
        invalid ? "border-red-500" : "border-line-soft",
        open && "border-[#d8dad5]",
      )}
    >
      <input type="hidden" name={name} value={value} />
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${id}-error` : undefined}
        aria-activedescendant={open ? `${listId}-${highlighted}` : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}
        className={cn(
          "flex h-[52px] w-full items-center justify-between gap-4 rounded-[8px] px-4 text-left leading-5 outline-none focus-visible:ring-2 focus-visible:ring-brand-800/15",
          textClassName,
        )}
      >
        <span className={cn("truncate", selected ? "text-ink" : "text-muted")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          aria-hidden
          className={cn("size-4 shrink-0 text-ink transition-transform duration-200", open && "rotate-180")}
          strokeWidth={2}
        />
      </button>

      <ul
        id={listId}
        role="listbox"
        aria-labelledby={id}
        hidden={!open}
        className="mx-4 border-t border-line-soft pt-[3px] pb-[5px]"
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            id={`${listId}-${index}`}
            role="option"
            aria-selected={option.value === value}
            onPointerEnter={() => setHighlighted(index)}
            onClick={() => choose(index)}
            className={cn(
              "cursor-pointer rounded-[6px] px-2 py-[4.5px] text-[14px] leading-5 text-ink transition-colors",
              index === highlighted && "bg-white/80 text-brand-800",
              option.value === value && "font-semibold text-brand-800",
            )}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
