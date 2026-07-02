"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { locStatLabel } from "@/i18n/site";

function useCountUp(target: number, run: boolean, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return n;
}

function StatItem({ value, suffix, label, run }: { value: string; suffix?: string; label: string; run: boolean }) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const isNumeric = /^\d+$/.test(value);
  const n = useCountUp(numeric, run);
  return (
    <div>
      <div className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
        {isNumeric ? n : value}
        {suffix && <span className="text-brand">{suffix}</span>}
      </div>
      <p className="mt-2 text-sm text-steel">{label}</p>
    </div>
  );
}

export function Stats() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} label={locStatLabel(s.label, locale)} run={run} />
      ))}
    </div>
  );
}
