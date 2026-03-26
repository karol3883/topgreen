import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function OfertaPage() {
  return (
    <>
      <Navbar activePath="/oferta" />
      <main className="pb-16">
        <section className="relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_40%),repeating-linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_1px,transparent_1px,transparent_30px)]"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-tg-muted">
              <span className="tg-stamp">Oferta</span>
              <span className="tg-stamp">Systemy stalowe</span>
              <span className="tg-stamp">Autoryzowany montaż</span>
            </div>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h1 className="font-serif text-4xl text-tg-secondary md:text-5xl">Wybierz system, resztę bierzemy na siebie.</h1>
                <p className="mt-4 max-w-2xl text-lg text-tg-muted">
                  Od palisad po automatykę — konfigurujemy rozwiązania pod Twój styl domu i budżet.
                  Zobacz kategorie, wybierz wariant, a my przygotujemy wycenę i harmonogram.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    className="rounded-full bg-tg-primary hover:bg-tg-primary-hover px-6 py-3 text-sm font-semibold text-[#141416] shadow-[0_16px_36px_rgba(212,175,55,0.26)]"
                    href="/kontakt"
                  >
                    Zamów wycenę
                  </a>
                  <a
                    className="rounded-full border border-tg-line bg-tg-dark px-6 py-3 text-sm font-semibold text-tg-secondary"
                    href="/realizacje"
                  >
                    Zobacz realizacje
                  </a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Palisady i panele", desc: "Nowoczesne rytmy profili i dopasowane prześwity." },
                  { title: "Bramy i furtki", desc: "Spójna linia posesji, cicha praca, estetyka." },
                  { title: "Automatyka", desc: "Napędy, sterowanie, integracje smart." },
                  { title: "Wykończenia", desc: "Antracyt, struktury mat i pełna paleta RAL." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-tg-line bg-tg-dark p-4 shadow-sm">
                    <p className="text-sm font-semibold text-tg-secondary">{item.title}</p>
                    <p className="mt-2 text-sm text-tg-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt py-12">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-6 md:grid-cols-3">
            {[
              {
                title: "Ogrodzenia palisadowe",
                desc: "Pionowe profile, minimalistyczna linia i wysoka sztywność.",
                list: ["Profile [60x40 / 80x20]", "Prześwity [20-60mm]", "Wysokość [1.2-2.0m]"],
                href: "/oferta/ogrodzenia-palisadowe",
                image: "/images/offers/thumbs/fence-modern-1-640.jpg",
              },
              {
                title: "Ogrodzenia panelowe",
                desc: "Ekonomiczne rozwiązanie dla firm i obiektów usługowych.",
                list: ["Panele 2D i 3D", "Ocynk + proszek", "Szybki montaż"],
                href: "/oferta/ogrodzenia-panelowe",
                image: "/images/offers/thumbs/fence-brick-1-640.jpg",
              },
              {
                title: "Brama przesuwna",
                desc: "Komfortowe wjazdy, cicha praca i automatyka smart.",
                list: ["Napędy [Somfy/Nice]", "Bezpieczne sterowanie", "Opcje smart home"],
                href: "/oferta/brama-przesuwna",
                image: "/images/offers/thumbs/gate-sliding-1-640.jpg",
              },
              {
                title: "Brama skrzydłowa",
                desc: "Klasyczny styl w nowoczesnym wykonaniu.",
                list: ["Sterowanie pilotem", "Siłowniki pod wymiar", "Spójna furtka"],
                href: "/oferta/brama-skrzydlowa",
                image: "/images/offers/thumbs/fence-gate-iron-1-640.jpg",
              },
              {
                title: "Furtki wejściowe",
                desc: "Wejście dopasowane do całej kompozycji.",
                list: ["Zamki elektroniczne", "Domofon / wideodomofon", "Dopasowane wypełnienie"],
                href: "/oferta/furtki-wejsciowe",
                image: "/images/offers/thumbs/gate-black-1-640.jpg",
              },
              {
                title: "Automatyka i kontrola",
                desc: "Sterowanie dostępem i integracje systemowe.",
                list: ["Czytniki / kody", "Integracja z aplikacją", "Serwis i wsparcie"],
                href: "/oferta/automatyka-i-kontrola",
                image: "/images/offers/thumbs/gate-concrete-1-640.jpg",
              },
            ].map((item) => (
              <article key={item.title} className="tg-card reveal grid gap-4">
                <div className="relative h-36 overflow-hidden rounded-xl border border-tg-line bg-tg-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover saturate-[0.85] contrast-[1.05] brightness-[0.95]"
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                </div>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="text-tg-muted">{item.desc}</p>
                <ul className="space-y-2 text-sm text-tg-muted">
                  {item.list.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <a className="text-sm font-semibold text-tg-secondary" href={item.href}>
                  Zobacz szczegóły →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-tg-alt py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Materiały</p>
              <h2 className="font-serif text-3xl md:text-4xl">Stal odporna na lata użytkowania</h2>
              <p className="mt-4 text-tg-muted">
                Stosujemy stal zabezpieczaną cynkiem i lakierem proszkowym. Oferujemy struktury mat,
                półmat oraz dedykowane palety RAL.
              </p>
            </div>
            <div className="tg-card-lg reveal">
              <h3 className="font-serif text-2xl">Wykończenia</h3>
              <div className="mt-4 grid gap-3 text-sm text-tg-muted">
                <div className="flex items-center justify-between border-b border-tg-line pb-2">
                  <span>Standard</span>
                  <span className="font-semibold">[antracyt mat]</span>
                </div>
                <div className="flex items-center justify-between border-b border-tg-line pb-2">
                  <span>Premium</span>
                  <span className="font-semibold">[struktura metaliczna]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Custom</span>
                  <span className="font-semibold">[pełna paleta RAL]</span>
                </div>
              </div>
              <a
                className="mt-6 inline-flex rounded-full bg-tg-primary hover:bg-tg-primary-hover px-5 py-2 text-sm font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)]"
                href="/kontakt"
              >
                Zapytaj o próbnik
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
