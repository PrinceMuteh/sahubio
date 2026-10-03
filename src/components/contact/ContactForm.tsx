"use client";

import { useActionState } from "react";
import { CircleCheck } from "lucide-react";
import { submitInquiry, type ContactField } from "@/app/contact/actions";
import { Field, Input, Textarea } from "@/components/forms/Field";
import { Select } from "@/components/forms/Select";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/data/divisions";
import type { FormState } from "@/lib/validation";

const initialState: FormState<ContactField> = { status: "idle" };

const divisionOptions = divisions.map((division) => ({
  value: division.slug,
  label: division.selectLabel,
}));

export function ContactForm({ defaultDivision = "" }: { defaultDivision?: string }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-5 py-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-brand-800">
          <CircleCheck className="size-7" strokeWidth={1.75} />
        </span>
        <h3 className="text-[26px] leading-8 font-bold text-heading">Message sent</h3>
        <p className="max-w-[520px] text-[17px] leading-7 text-body">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="mt-[21px]">
      {/* Honeypot field for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName}>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            defaultValue={values.fullName}
            invalid={!!errors.fullName}
          />
        </Field>
        <Field id="email" label="Email Address" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field id="phone" label="Phone Number" error={errors.phone} className="mt-[22px]">
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={values.phone}
          invalid={!!errors.phone}
        />
      </Field>

      <Field id="division" label="Select Department/Division of Interest" error={errors.division} className="mt-[22px]">
        <Select
          id="division"
          name="division"
          placeholder="Select a division"
          options={divisionOptions}
          defaultValue={values.division ?? defaultDivision}
          invalid={!!errors.division}
        />
      </Field>

      <Field id="subject" label="Subject" error={errors.subject} className="mt-[22px]">
        <Input
          id="subject"
          name="subject"
          required
          defaultValue={values.subject}
          invalid={!!errors.subject}
        />
      </Field>

      <Field id="message" label="Message Box" error={errors.message} className="mt-[22px]">
        <Textarea
          id="message"
          name="message"
          required
          defaultValue={values.message}
          invalid={!!errors.message}
        />
      </Field>

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 text-[14px] leading-5 text-red-600">
          {state.message}
        </p>
      )}

      <Button type="submit" variant="brand" className="mt-[19px] h-[55px]" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
