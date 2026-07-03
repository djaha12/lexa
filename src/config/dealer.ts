import type { L } from "@/i18n/config";

// ============================================================
//  Local dealer configuration — SANY Кыргызстан
// ============================================================

export const dealer = {
  brand: "SANY",
  country: { ru: "Кыргызстан", en: "Kyrgyzstan", zh: "吉尔吉斯斯坦" } as L,
  branchLabel: { ru: "Филиал", en: "Branch", zh: "分公司" } as L,
  address: { ru: "ул. Токомбаева, 31/1", en: "31/1 Tokombaeva St., Bishkek", zh: "托孔巴耶娃街 31/1" } as L,
  city: { ru: "Бишкек", en: "Bishkek", zh: "比什凯克" } as L,
  phones: ["+996 222 11-00-11", "+996 551 12-18-26"],
  email: "info@sany.kg",
  hours: { ru: "Пн–Сб, 9:00–18:00", en: "Mon–Sat, 9:00–18:00", zh: "周一至周六 9:00–18:00" } as L,
};

/** tel: href — strip spaces/dashes */
export const telHref = (phone: string) => "tel:" + phone.replace(/[^\d+]/g, "");
