"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type OfferImage = {
  src: string;
  alt: string;
};

export type OfferDetailData = {
  offer: string;
  category: string;
  title: string;
  description: string;
  scope: string[];
  gallery: OfferImage[];
};

type OfferDetailProps = {
  page: OfferDetailData;
};

export default function OfferDetail({ page }: OfferDetailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = contentRef.current;

    if (!node) return;

    if (!reduced && "IntersectionObserver" in window) {
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

      return () => {
        observer.disconnect();
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsTransitioning(true);
      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % page.gallery.length);
        setIsTransitioning(false);
      }, 180);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [page.gallery.length]);

  const activeImage = page.gallery[activeIndex];

  return (
    <>
      <section ref={contentRef} className="section realization-feature-section">
        <div className="container">
          <button
            type="button"
            className={`realization-stage reveal${isVisible ? " is-visible" : ""}${isTransitioning ? " is-transitioning" : ""}`}
            onClick={() => setLightboxIndex(activeIndex)}
            aria-label={`Powieksz zdjecie oferty ${page.title}`}
          >
            <div className="realization-stage-media">
              <Image src={activeImage.src} alt={activeImage.alt} width={1600} height={1000} priority />
            </div>
            <div className="realization-stage-bar">
              <span className="pill">{page.category}</span>
              <span className="realization-stage-index">
                {String(activeIndex + 1).padStart(2, "0")} / {String(page.gallery.length).padStart(2, "0")}
              </span>
            </div>
          </button>

          <article className={`realization-summary luxury-panel reveal${isVisible ? " is-visible" : ""}`}>
            <span className="eyebrow">Opis oferty</span>
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
          <div className={`section-head reveal${isVisible ? " is-visible" : ""}`}>
            <div>
              <span className="eyebrow">Galeria oferty</span>
              <h2>Przykladowe ujecia dla uslugi {page.offer}.</h2>
            </div>
            <p>Kliknij zdjecie, zeby je powiekszyc. Wybrany kadr ustawia tez glowne zdjecie u gory.</p>
          </div>

          <div className="gallery-grid">
            {page.gallery.map((image, index) => (
              <article
                key={`${image.src}-${index}`}
                className={`gallery-card reveal${isVisible ? " is-visible" : ""}${index === activeIndex ? " is-current" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    window.setTimeout(() => {
                      setActiveIndex(index);
                      setLightboxIndex(index);
                      setIsTransitioning(false);
                    }, 140);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={780}
                    className="gallery-card-image"
                  />
                  <div className="gallery-meta">
                    <div className="badges">
                      <span className="badge">{page.offer}</span>
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
          aria-labelledby="offer-lightbox-title"
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
                <span className="badge">{page.offer}</span>
                <span className="badge">{page.category}</span>
              </div>
              <h2 id="offer-lightbox-title">{page.title}</h2>
              <p>{page.gallery[lightboxIndex].alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
