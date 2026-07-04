"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories, getModel } from "@/data/products";
import { Icon } from "./Icons";
import { useLocale } from "@/i18n/LocaleProvider";
import { t } from "@/i18n/strings";
import { locCategory } from "@/i18n/content";
import { dealer, waHref } from "@/config/dealer";

export function ContactForm() {
  const { locale } = useLocale();
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
    message: model ? `${t("form.defaultMsg", locale)} ${model.name}.` : "",
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cat = categories.find((c) => c.slug === form.interest);
    const parts = [
      `${t("form.name", locale)}: ${form.name}`,
      form.company ? `${t("form.company", locale)}: ${form.company}` : "",
      form.email ? `${t("form.email", locale)}: ${form.email}` : "",
      cat ? `${t("form.interest", locale)}: ${locCategory(cat, locale).name}` : "",
      form.message ? `${t("form.message", locale)}: ${form.message}` : "",
    ].filter(Boolean);
    const url = `${waHref(dealer.phones[0])}?text=${encodeURIComponent(parts.join("\n"))}`;
    if (typeof window !== "undefined") window.open(url, "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <Icon.Check size={28} />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink">
          {t("form.thanks", locale)}
          {form.name ? `, ${form.name.split(" ")[0]}` : ""}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-steel">{t("form.thanksBody", locale)}</p>
        <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">
          {t("form.another", locale)}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-6 md:p-8">
      {model && (
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-brand-soft px-4 py-3 text-sm text-brand-700">
          <Icon.Spec size={16} />
          {t("form.enquiryAbout", locale)} <strong>{model.name}</strong>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("form.name", locale)} required>
          <input required value={form.name} onChange={set("name")} className={inputCls} />
        </Field>
        <Field label={t("form.email", locale)}>
          <input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="example@mail.com" />
        </Field>
        <Field label={t("form.company", locale)}>
          <input value={form.company} onChange={set("company")} className={inputCls} />
        </Field>
        <Field label={t("form.country", locale)}>
          <input value={form.country} onChange={set("country")} className={inputCls} />
        </Field>
      </div>

      <div className="mt-4">
        <Field label={t("form.interest", locale)}>
          <select value={form.interest} onChange={set("interest")} className={inputCls}>
            <option value="">{t("form.selectCategory", locale)}</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {locCategory(c, locale).name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label={t("form.message", locale)} required>
          <textarea
            required
            value={form.message}
            onChange={set("message")}
            rows={4}
            className={`${inputCls} resize-y`}
            placeholder={t("form.messagePlaceholder", locale)}
          />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full !py-3.5 text-base">
        {t("form.send", locale)} <Icon.ArrowRight size={17} />
      </button>
      <p className="mt-3 text-center text-xs text-mist">{t("form.consent", locale)}</p>
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
