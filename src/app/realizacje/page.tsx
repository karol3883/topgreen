"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const blurDataURL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9' viewBox='0 0 16 9'><rect width='16' height='9' fill='%23d9dee2'/></svg>";

const images = [
  {
    category: "Ogrodzenia",
    src: "/images/offers/thumbs/fence-modern-1-640.jpg",
    title: "Ogrodzenie palisadowe",
  },
  {
    category: "Ogrodzenia",
    src: "/images/offers/thumbs/fence-brick-1-640.jpg",
    title: "Ogrodzenie przy cegle",
  },
  {
    category: "Ogrodzenia",
    src: "/images/offers/thumbs/gate-concrete-1-640.jpg",
    title: "Ogrodzenie przy betonie",
  },
  {
    category: "Bramy",
    src: "/images/offers/thumbs/gate-sliding-1-640.jpg",
    title: "Brama przesuwna",
  },
  {
    category: "Bramy",
    src: "/images/offers/thumbs/fence-gate-iron-1-640.jpg",
    title: "Brama skrzydłowa",
  },
  {
    category: "Bramy",
    src: "/images/offers/thumbs/gate-black-1-640.jpg",
    title: "Furtka antracyt",
  },
  {
    category: "Panele 2D/3D",
    src: "/images/offers/thumbs/fence-gate-iron-1-640.jpg",
    title: "Panele 2D — obiekt firmowy",
  },
  {
    category: "Panele 2D/3D",
    src: "/images/offers/thumbs/fence-brick-1-640.jpg",
    title: "Panele 3D — linia posesji",
  },
  {
    category: "Panele 2D/3D",
    src: "/images/offers/thumbs/fence-modern-1-640.jpg",
    title: "Panele — strefa wejściowa",
  },
];

export default function RealizacjePage() {
  const [active, setActive] = useState("Wszystkie");
  const [selected, setSelected] = useState<null | (typeof images)[number]>(null);
  const pills = useMemo(
    () => ["Wszystkie", ...Array.from(new Set(images.map((img) => img.category)))],
    []
  );
  const filtered = useMemo(() => {
    if (active === "Wszystkie") return images;
    return images.filter((img) => img.category === active);
  }, [active]);

  const selectedIndex = useMemo(() => {
    if (!selected) return -1;
    return filtered.findIndex((img) => img.src === selected.src && img.title === selected.title);
  }, [filtered, selected]);

  const showPrev = () => {
    if (filtered.length === 0) return;
    const nextIndex = selectedIndex <= 0 ? filtered.length - 1 : selectedIndex - 1;
    setSelected(filtered[nextIndex]);
  };

  const showNext = () => {
    if (filtered.length === 0) return;
    const nextIndex = selectedIndex >= filtered.length - 1 ? 0 : selectedIndex + 1;
    setSelected(filtered[nextIndex]);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, showNext, showPrev]);

  return (
    <>
      <Navbar activePath="/realizacje" />
      <main className="pb-16">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_40%),repeating-linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_1px,transparent_1px,transparent_30px)]"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Realizacje</p>
            <h1 className="font-serif text-4xl md:text-5xl">Galeria realizacji TopGreen</h1>
            <p className="mt-4 max-w-2xl text-lg text-tg-muted">
              Przykładowe realizacje z podziałem na kategorie. Docelowe zdjęcia podmienimy po akceptacji
              materiałów.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {pills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActive(pill)}
                  className={
                    active === pill
                      ? "rounded-full bg-tg-primary hover:bg-tg-primary-hover px-4 py-2 text-xs font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)] cursor-pointer"
                      : "rounded-full border border-tg-line bg-tg-dark px-4 py-2 text-xs font-semibold text-tg-muted transition hover:border-tg-primary hover:text-tg-secondary cursor-pointer"
                  }
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-tg-alt pb-14 pt-6 md:pb-16 md:pt-8">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="grid gap-5 md:grid-cols-3">
              {filtered.map((item) => (
                <article
                  key={`${item.title}-${item.src}`}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-tg-line bg-tg-dark shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
                  onClick={() => setSelected(item)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      loading="lazy"
                      className="object-cover transition duration-500 group-hover:scale-[1.03] saturate-[0.85] contrast-[1.05] brightness-[0.95]"
                      sizes="(max-width: 1024px) 90vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <h3 className="text-sm font-semibold text-tg-secondary">{item.title}</h3>
                    <span className="rounded-full bg-tg-alt px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-tg-muted">
                      {item.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Chcesz zobaczyć więcej?</h2>
              <p className="mt-3 text-tg-muted">
                Przygotujemy portfolio dopasowane do Twojego typu inwestycji oraz oczekiwań stylistycznych.
              </p>
            </div>
            <div className="tg-card-lg reveal bg-tg-alt text-tg-secondary">
              <p className="text-sm text-tg-muted">Skontaktuj się</p>
              <p className="mt-2 text-lg font-semibold text-tg-secondary">+48 000 000 000</p>
              <p className="text-sm text-tg-muted">kontakt@topgreen.pl</p>
              <a
                className="mt-5 inline-flex rounded-full bg-tg-primary hover:bg-tg-primary-hover px-5 py-2 text-sm font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)]"
                href="/kontakt"
              >
                Umów rozmowę
              </a>
            </div>
          </div>
        </section>
      </main>
      {selected ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-[min(980px,92vw)] rounded-3xl bg-tg-dark p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-tg-dark px-3 py-2 text-xs font-semibold text-tg-secondary shadow-sm"
                onClick={() => setSelected(null)}
              >
                Zamknij
              </button>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-tg-dark/90 p-2 text-tg-secondary shadow-sm"
                onClick={showPrev}
                aria-label="Poprzednie zdjęcie"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M12.5 5l-5 5 5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-tg-dark/90 p-2 text-tg-secondary shadow-sm"
                onClick={showNext}
                aria-label="Następne zdjęcie"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M7.5 5l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            <div className="relative h-[60vh] overflow-hidden rounded-2xl">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 900px"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-tg-secondary">{selected.title}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-tg-muted">
                  {selectedIndex + 1} / {filtered.length}
                </span>
                <span className="rounded-full bg-tg-alt px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-tg-muted">
                  {selected.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
}
