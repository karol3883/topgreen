import type { ReactNode } from "react";

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
  const sectionClassName = ["hero", "page-hero", className].filter(Boolean).join(" ");

  return (
    <section className={sectionClassName} id={id} aria-labelledby={titleId}>
      <div className="container hero-shell">
        <div className="hero-core reveal is-visible">
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
