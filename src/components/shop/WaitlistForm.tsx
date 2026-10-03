"use client";

import { useActionState } from "react";
import { CircleCheck } from "lucide-react";
import { joinWaitlist, type WaitlistField } from "@/app/shop/actions";
import { Field, Input } from "@/components/forms/Field";
import { Select } from "@/components/forms/Select";
import { Button } from "@/components/ui/Button";
import { buyerTypes } from "@/data/shop";
import type { FormState } from "@/lib/validation";

const initialState: FormState<WaitlistField> = { status: "idle" };
const options = buyerTypes.map((type) => ({ value: type, label: type }));

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-5 py-6">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-brand-800">
          <CircleCheck className="size-7" strokeWidth={1.75} />
        </span>
        <h2 className="text-[26px] leading-8 font-bold text-heading">You&apos;re on the list</h2>
        <p className="text-[17px] leading-7 text-body">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate aria-label="Shop launch waitlist">
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="waitlist-company">Company</label>
        <input id="waitlist-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Field id="waitlist-name" label="Full Name" error={errors.fullName}>
        <Input
          id="waitlist-name"
          name="fullName"
          autoComplete="name"
          required
          defaultValue={values.fullName}
          invalid={!!errors.fullName}
        />
      </Field>
      <Field id="waitlist-email" label="Email Address" error={errors.email} className="mt-[22px]">
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values.email}
          invalid={!!errors.email}
        />
      </Field>
      <Field id="waitlist-buyer" label="Select Buyer Type" error={errors.buyerType} className="mt-[22px]">
        <Select
          id="waitlist-buyer"
          name="buyerType"
          tone="white"
          textClassName="text-[13px]"
          placeholder="Commercial Farmer / Agro-Processor / Corporate Buyer / Retailer"
          options={options}
          defaultValue={values.buyerType}
          invalid={!!errors.buyerType}
        />
      </Field>
      {state.status === "error" && state.message && (
        <p role="alert" className="mt-4 text-[14px] leading-5 text-red-600">
          {state.message}
        </p>
      )}
      <Button type="submit" variant="brand" className="mt-[22px] h-[55px]" disabled={pending}>
        {pending ? "Submitting…" : "Notify Me At Launch"}
      </Button>
    </form>
  );
}
