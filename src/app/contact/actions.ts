"use server";

import { divisions } from "@/data/divisions";
import { isEmail, isPhone, text, type FormState } from "@/lib/validation";

export type ContactField = "fullName" | "email" | "phone" | "division" | "subject" | "message";

export async function submitInquiry(
  _previous: FormState<ContactField>,
  formData: FormData,
): Promise<FormState<ContactField>> {
  // Honeypot — real visitors never fill this hidden field.
  if (text(formData, "company")) return { status: "success" };

  const values = {
    fullName: text(formData, "fullName", 120),
    email: text(formData, "email", 160),
    phone: text(formData, "phone", 40),
    division: text(formData, "division", 80),
    subject: text(formData, "subject", 160),
    message: text(formData, "message", 4000),
  };

  const errors: FormState<ContactField>["errors"] = {};
  if (values.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !isPhone(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (values.division && !divisions.some((division) => division.slug === values.division)) {
    errors.division = "Please choose a division from the list.";
  }
  if (values.subject.length < 3) errors.subject = "Please add a short subject.";
  if (values.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors,
      values,
    };
  }

  // Delivery hook: connect an email/CRM provider here (e.g. Resend, SendGrid, HubSpot).
  // Until a provider is configured the inquiry is logged on the server.
  console.info("[contact] new inquiry", {
    ...values,
    division: divisions.find((division) => division.slug === values.division)?.title ?? "General",
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Thank you — your inquiry has been received. Our team will respond within one business day.",
  };
}
