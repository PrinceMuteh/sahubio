"use server";

import { buyerTypes } from "@/data/shop";
import { isEmail, text, type FormState } from "@/lib/validation";

export type WaitlistField = "fullName" | "email" | "buyerType";

export async function joinWaitlist(
  _previous: FormState<WaitlistField>,
  formData: FormData,
): Promise<FormState<WaitlistField>> {
  if (text(formData, "company")) return { status: "success" };

  const values = {
    fullName: text(formData, "fullName", 120),
    email: text(formData, "email", 160),
    buyerType: text(formData, "buyerType", 60),
  };

  const errors: FormState<WaitlistField>["errors"] = {};
  if (values.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!buyerTypes.includes(values.buyerType)) errors.buyerType = "Please select a buyer type.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values };
  }

  // Delivery hook: persist to your CRM / mailing list provider here.
  console.info("[shop] waitlist signup", { ...values, receivedAt: new Date().toISOString() });

  return {
    status: "success",
    message: "You're on the list! We'll email you as soon as the SAHUBio Store opens.",
  };
}
