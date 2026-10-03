export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export type FormState<T extends string> = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors<T>;
  /** Echo of submitted values so the form can be repopulated after an error. */
  values?: Partial<Record<T, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\-\s\d]{7,20}$/;

export function text(formData: FormData, key: string, max = 2000) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function isEmail(value: string) {
  return EMAIL_PATTERN.test(value);
}

export function isPhone(value: string) {
  return PHONE_PATTERN.test(value);
}
