"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type RealizationImage = {
  src: string;
  alt: string;
};

export type CityRealization = {
  city: string;
  region: string;
  title: string;
  seoTitle?: string;
  category: string;
  description: string;
  scope: string[];
  gallery: RealizationImage[];
};

type CityRealizationDetailProps = {
  page: CityRealization;
};

export default function CityRealizationDetail({ page }: CityRealizationDetailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    let observer: IntersectionObserver | null = null;

    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );

      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % page.gallery.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [page.gallery.length]);

  const activeImage = page.gallery[activeIndex];

  return (
    <>
      <section className="section realization-feature-section">
        <div className="container realization-feature-grid">
          <button
            type="button"
            className="realization-stage reveal"
            onClick={() => setLightboxIndex(activeIndex)}
            aria-label={`Powieksz zdjecie realizacji ${page.title}`}
          >
            <div className="realization-stage-media">
              <Image src={activeImage.src} alt={activeImage.alt} width={1600} height={1080} priority />
            </div>
            <div className="realization-stage-bar">
              <span className="pill">{page.category}</span>
              <span className="realization-stage-index">
                {String(activeIndex + 1).padStart(2, "0")} / {String(page.gallery.length).padStart(2, "0")}
              </span>
            </div>
          </button>

          <article className="realization-summary luxury-panel reveal">
            <span className="eyebrow">Opis realizacji</span>
            <h2>{page.title}</h2>
            <p>{page.description}</p>

            <div className="realization-scope">
              {page.scope.map((item) => (
                <div key={item} className="realization-scope-item">
                  <span className="realization-scope-dot" aria-hidden="true"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="gallery-section realization-gallery-section" id="projekty">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Galeria realizacji</span>
              <h2>Zdjęcia podobnych ujęć dla {page.city}.</h2>
            </div>
            <p>
              Kliknij zdjęcie, żeby je powiększyć. Wybrane ujęcie ustawia też główną fotografię w sekcji powyżej.
            </p>
          </div>

          <div className="gallery-grid">
            {page.gallery.map((image, index) => (
              <article
                key={`${image.src}-${index}`}
                className={`gallery-card reveal${index === activeIndex ? " is-current" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    setLightboxIndex(index);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={700}
                    className="gallery-card-image"
                  />
                  <div className="gallery-meta">
                    <div className="badges">
                      <span className="badge">{page.city}</span>
                      <span className="badge">{page.category}</span>
                    </div>
                    <strong>{page.title}</strong>
                    <span>{image.alt}</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="realization-lightbox-title"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="gallery-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              aria-label="Zamknij podglad"
              onClick={() => setLightboxIndex(null)}
            >
              ×
            </button>
            <div className="gallery-lightbox-media">
              <Image
                src={page.gallery[lightboxIndex].src}
                alt={page.gallery[lightboxIndex].alt}
                width={1600}
                height={1100}
              />
            </div>
            <div className="gallery-lightbox-meta">
              <div className="badges">
                <span className="badge">{page.city}</span>
                <span className="badge">{page.category}</span>
              </div>
              <h2 id="realization-lightbox-title">{page.title}</h2>
              <p>{page.gallery[lightboxIndex].alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
