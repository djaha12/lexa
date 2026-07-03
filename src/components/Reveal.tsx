"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fade-and-rise on scroll into view — as a progressive enhancement.
 * Content is ALWAYS rendered visible by default (no opacity:0 in SSR/no-JS),
 * so the page can never get stuck half-empty. Elements that are below the
 * fold on load animate in when scrolled to; elements already in view (or
 * when IntersectionObserver is unavailable) simply show without animating.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Already visible on load → don't animate (avoids a flash), just show.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={animate ? { animation: `fade-up 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms both` } : undefined}
    >
      {children}
    </Tag>
  );
}
