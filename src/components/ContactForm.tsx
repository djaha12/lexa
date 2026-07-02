"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories, getModel } from "@/data/products";
import { Icon } from "./Icons";

export function ContactForm() {
  const params = useSearchParams();
  const modelSlug = params.get("model");
  const model = modelSlug ? getModel(modelSlug) : undefined;
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: model?.categorySlug ?? "",
    message: model ? `I would like a quote for the ${model.name}.` : "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // demo only — no backend. In production, POST to an API route / CRM.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <Icon.Check size={28} />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink">Thank you, {form.name.split(" ")[0] || "there"}!</h3>
        <p className="mx-auto mt-2 max-w-md text-steel">
          Your enquiry has been received. A SANY representative will be in touch shortly to help with
          your request.
        </p>
        <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-6 md:p-8">
      {model && (
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-brand-soft px-4 py-3 text-sm text-brand-700">
          <Icon.Spec size={16} />
          Enquiry about <strong>{model.name}</strong>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Work email" required>
          <input required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="jane@company.com" />
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={set("company")} className={inputCls} placeholder="Company Ltd." />
        </Field>
        <Field label="Country / region">
          <input value={form.country} onChange={set("country")} className={inputCls} placeholder="United Arab Emirates" />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Product interest">
          <select value={form.interest} onChange={set("interest")} className={inputCls}>
            <option value="">Select a category…</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" required>
          <textarea
            required
            value={form.message}
            onChange={set("message")}
            rows={4}
            className={`${inputCls} resize-y`}
            placeholder="Tell us about your project and requirements…"
          />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full !py-3.5 text-base">
        Send enquiry <Icon.ArrowRight size={17} />
      </button>
      <p className="mt-3 text-center text-xs text-mist">
        By submitting you agree to be contacted by SANY. This is a concept demo form.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-mist focus:border-brand";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
