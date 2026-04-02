"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type GalleryCategory = "bramy-przesuwne" | "bramy-skrzydlowe" | "ogrodzenia-3d";

type GalleryItem = {
  title: string;
  city: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Brama przesuwna przy nowoczesnej elewacji",
    city: "Warszawa",
    category: "bramy-przesuwne",
    categoryLabel: "Bramy przesuwne",
    image: "/images/hero-gate.jpg",
    alt: "Nowoczesna brama przesuwna przed domem",
    description: "Dummy realizacja z mocną, spokojną geometrią frontu i wykończeniem dopasowanym do bryły domu.",
  },
  {
    title: "System przesuwny z furtką zlicowaną",
    city: "Łódź",
    category: "bramy-przesuwne",
    categoryLabel: "Bramy przesuwne",
    image: "/images/hero-entrance.jpg",
    alt: "Brama przesuwna z furtką wejściową",
    description: "Układ wejścia projektowany jako jedna kompozycja, z naciskiem na proporcję i detal premium.",
  },
  {
    title: "Brama skrzydłowa dla szerokiego frontu",
    city: "Kielce",
    category: "bramy-skrzydlowe",
    categoryLabel: "Bramy skrzydłowe",
    image: "/images/hero-fence.jpg",
    alt: "Brama skrzydłowa przy reprezentacyjnej posesji",
    description: "Wariant dla inwestycji o bardziej reprezentacyjnym charakterze, z czytelną, nowoczesną linią podziałów.",
  },
  {
    title: "Klasyczna skrzydłówka w nowoczesnym wydaniu",
    city: "Lublin",
    category: "bramy-skrzydlowe",
    categoryLabel: "Bramy skrzydłowe",
    image: "/images/hero-detail.jpg",
    alt: "Detal nowoczesnej bramy skrzydłowej",
    description: "Projekt oparty o prosty rytm profili i ciemne, eleganckie wykończenie dopasowane do elewacji.",
  },
  {
    title: "Ogrodzenie 3D dla obiektu usługowego",
    city: "Radom",
    category: "ogrodzenia-3d",
    categoryLabel: "Ogrodzenia 3D",
    image: "/images/hero-fence.jpg",
    alt: "Ogrodzenie 3D przy obiekcie usługowym",
    description: "System 3D dobrany pod większą skalę inwestycji, z naciskiem na trwałość i czytelny porządek linii.",
  },
  {
    title: "Linia 3D dla strefy bocznej posesji",
    city: "Piaseczno",
    category: "ogrodzenia-3d",
    categoryLabel: "Ogrodzenia 3D",
    image: "/images/hero-gate.jpg",
    alt: "Ogrodzenie panelowe 3D przy domu",
    description: "Dummy przykład pod galerię, pokazujący lżejszy system ogrodzeniowy utrzymany w nowoczesnym języku wizualnym.",
  },
];

const categoryFilters = [
  { value: "all", label: "Wszystkie" },
  { value: "bramy-przesuwne", label: "Bramy przesuwne" },
  { value: "bramy-skrzydlowe", label: "Bramy skrzydłowe" },
  { value: "ogrodzenia-3d", label: "Ogrodzenia 3D" },
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categoryFilters)[number]["value"]>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

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
  }, [activeCategory]);

  return (
    <>
      <SiteHeader
        navItems={[
          { href: "/", label: "Strona główna" },
          { href: "/galeria", label: "Galeria" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
        activeHref="/galeria"
      />

      <main>
        <section className="hero gallery-hero-section">
          <div className="container hero-shell">
            <div className="hero-core reveal">
              <div className="hero-copy gallery-hero-copy">
                <span className="eyebrow">Galeria realizacji</span>
                <h1>Wybrane realizacje bram i ogrodzeń.</h1>
                <p>
                  Przeglądaj przykładowe realizacje GAPYS w trzech głównych kategoriach. To układ przygotowany pod
                  docelowe zdjęcia, lepsze case studies i bardziej rozbudowane portfolio.
                </p>
                <span className="hero-fineprint">Bramy przesuwne / Bramy skrzydłowe / Ogrodzenia 3D</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <div className="filters-wrap gallery-filters reveal" aria-label="Filtry galerii">
              <div className="filter-group" role="group" aria-label="Kategorie">
                <span className="filter-label">Kategorie</span>
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.value}
                    className={`chip${activeCategory === filter.value ? " is-active" : ""}`}
                    type="button"
                    onClick={() => setActiveCategory(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-grid">
              {filteredItems.map((item) => (
                <article key={`${item.title}-${item.city}`} className="gallery-card reveal">
                  <button type="button" onClick={() => setSelectedItem(item)}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={900}
                      height={700}
                      className="gallery-card-image"
                    />
                    <div className="gallery-meta">
                      <div className="badges">
                        <span className="badge">{item.categoryLabel}</span>
                        <span className="badge">{item.city}</span>
                      </div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>

            {filteredItems.length === 0 ? (
              <div className="empty-state is-visible">Brak realizacji dla wybranej kategorii.</div>
            ) : null}
          </div>
        </section>
      </main>

      <SiteFooter
        navLinks={[
          { href: "/", label: "Strona główna" },
          { href: "/oferta", label: "Oferta" },
          { href: "/galeria", label: "Galeria" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />

      {selectedItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onClick={() => setSelectedItem(null)}
        >
          <div className="gallery-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              aria-label="Zamknij podgląd"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <div className="gallery-lightbox-media">
              <Image src={selectedItem.image} alt={selectedItem.alt} width={1600} height={1100} />
            </div>
            <div className="gallery-lightbox-meta">
              <div className="badges">
                <span className="badge">{selectedItem.categoryLabel}</span>
                <span className="badge">{selectedItem.city}</span>
              </div>
              <h2 id="gallery-lightbox-title">{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
