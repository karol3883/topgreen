"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  fineprint?: string;
  actions?: ReactNode;
  id?: string;
  titleId?: string;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  fineprint,
  actions,
  id,
  titleId,
  className,
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionClassName = ["hero", "page-hero", className].filter(Boolean).join(" ");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = heroRef.current;

    if (!node) return;

    if (reduced || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setIsVisible(true);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={sectionClassName} id={id} aria-labelledby={titleId}>
      <div className="container hero-shell">
        <div ref={heroRef} className={`hero-core reveal${isVisible ? " is-visible" : ""}`}>
          <div className="hero-copy page-hero-copy">
            <span className="eyebrow">{eyebrow}</span>
            <h1 id={titleId}>{title}</h1>
            <p>{description}</p>
            {actions ? <div className="hero-actions">{actions}</div> : null}
            {fineprint ? <span className="hero-fineprint">{fineprint}</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
