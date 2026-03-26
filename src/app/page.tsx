import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Navbar activePath="/" />
      <main className="pb-4">
        <section className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-20">
          <div
            className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-tg-primary/10 blur-3xl"
            data-parallax-speed="0.03"
          ></div>
          <div
            className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-tg-primary/10 blur-3xl"
            data-parallax-speed="0.02"
          ></div>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(20,20,22,0.78) 0%, rgba(44,44,46,0.52) 45%, rgba(58,58,60,0.18) 100%), url('/images/hero-fence.jpg')",
            }}
          ></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-tg-bg via-transparent to-transparent"></div>
          <div className="mx-auto grid min-h-[480px] w-[min(1140px,92vw)] items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-tg-muted">
                <span className="tg-stamp">TopGreen</span>
                <span className="tg-stamp">Ogrodzenia stalowe</span>
              </div>
              <h1 className="font-serif text-[2.6rem] leading-[1.05] text-tg-secondary md:text-[3.4rem] lg:text-[4.2rem]">
                Minimalistyczne ogrodzenia stalowe z charakterem.
              </h1>
              <p className="max-w-xl text-lg leading-7 text-tg-muted">
                Projekt, produkcja i montaż w jednym procesie. Spójny rytm profili, trwałe powłoki i
                dopasowana automatyka.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-tg-primary hover:bg-tg-primary-hover px-7 py-3 text-sm font-semibold text-[#141416] shadow-[0_18px_40px_rgba(212,175,55,0.28)] transition hover:-translate-y-0.5"
                  href="/kontakt"
                >
                  Umów konsultację
                </a>
                <a
                  className="rounded-full border border-tg-line bg-tg-dark px-7 py-3 text-sm font-semibold text-tg-secondary transition hover:-translate-y-0.5"
                  href="/realizacje"
                >
                  Zobacz realizacje
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt relative py-16 md:py-20">
          <div className="section-divider absolute left-0 right-0 top-0"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Oferta</p>
                <h2 className="font-serif text-3xl md:text-4xl">Pełny zestaw dla Twojej posesji</h2>
              </div>
              <a className="font-semibold text-tg-secondary" href="/oferta">
                Zobacz szczegóły
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Ogrodzenia palisadowe",
                  desc: "Minimalistyczna stal, eleganckie prześwity i wysoka sztywność.",
                },
                {
                  title: "Bramy i furtki",
                  desc: "Przesuwne, skrzydłowe i zintegrowane wejścia w jednym stylu.",
                },
                {
                  title: "Automatyka",
                  desc: "Napędy, kontrola dostępu i integracje smart.",
                },
              ].map((item) => (
                <article key={item.title} className="tg-card reveal grid gap-3">
                  <div className="tg-sheen relative h-32 rounded-xl border border-tg-line"></div>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="text-tg-muted">{item.desc}</p>
                  <a className="text-sm font-semibold text-tg-secondary" href="/oferta">
                    Dowiedz się więcej
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-tg-alt relative py-16 md:py-20">
          <div className="section-divider absolute left-0 right-0 top-0"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Proces</p>
                <h2 className="font-serif text-3xl md:text-4xl">Jasny proces. Zero chaosu.</h2>
                <p className="mt-4 text-tg-muted">
                  Prowadzimy inwestycję od pomiaru do montażu. Dostajesz harmonogram, wizualizację i
                  wykonanie zgodne z projektem — bez niespodzianek.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-tg-muted">
                  <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Transparentny koszt</span>
                  <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Jedna ekipa</span>
                  <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Stały kontakt</span>
                </div>
              </div>
              <div className="rounded-3xl border border-tg-line bg-tg-dark p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Co dostajesz</p>
                <ul className="mt-4 grid gap-3 text-sm text-tg-muted">
                  <li>• [Wizualizacja i warianty profili]</li>
                  <li>• [Plan montażu i termin realizacji]</li>
                  <li>• [Dobór automatyki + serwis]</li>
                </ul>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="absolute left-6 right-6 top-7 hidden h-px bg-tg-line lg:block"></div>
              <div className="grid gap-6 lg:grid-cols-4">
                {[
                  {
                    step: "01",
                    title: "Pomiar i wycena",
                    desc: "Szybka oferta i rekomendacje profili.",
                    icon: (
                      <path
                        d="M7 3h10v4H7zM4 3h2v18H4zM7 11h10v4H7z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                  {
                    step: "02",
                    title: "Projekt",
                    desc: "Dobór prześwitów, koloru i automatyki.",
                    icon: (
                      <path
                        d="M4 17l4-4 6 6M10 7l6 6M4 7l6-6 6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                  {
                    step: "03",
                    title: "Produkcja",
                    desc: "Cynkowanie i lakier proszkowy.",
                    icon: (
                      <path
                        d="M4 8h16M6 4h12v16H6z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                  {
                    step: "04",
                    title: "Montaż",
                    desc: "Instalacja, ustawienia i odbiór.",
                    icon: (
                      <path
                        d="M4 12l5 5 11-11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                ].map((item) => (
                  <div key={item.step} className="reveal rounded-3xl border border-tg-line bg-tg-dark p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-tg-primary/15 text-tg-primary">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                          {item.icon}
                        </svg>
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-tg-muted">Krok {item.step}</p>
                        <p className="text-sm font-semibold text-tg-secondary">{item.title}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-tg-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt relative py-16 md:py-20">
          <div className="section-divider absolute left-0 right-0 top-0"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Realizacje</p>
                <h2 className="font-serif text-3xl md:text-4xl">Detale, które robią pierwsze wrażenie</h2>
              </div>
              <a className="font-semibold text-tg-secondary" href="/realizacje">
                Zobacz galerię
              </a>
            </div>
            <ShowcaseCarousel
              items={[
                {
                  src: "/images/offers/thumbs/fence-modern-1-640.jpg",
                  title: "Rezydencja w lesie",
                  caption: "Ogrodzenie palisadowe + brama przesuwna",
                },
                {
                  src: "/images/offers/thumbs/gate-sliding-1-640.jpg",
                  title: "Minimalistyczna bryła",
                  caption: "Brama przesuwna + furtka",
                },
                {
                  src: "/images/offers/thumbs/fence-brick-1-640.jpg",
                  title: "Industrialny dziedziniec",
                  caption: "Palisada + antracyt mat",
                },
              ]}
            />
          </div>
        </section>

        <section className="pb-16 pt-12 md:pb-20 md:pt-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="tg-card-lg reveal grid gap-6 bg-tg-alt text-tg-secondary md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Konsultacja</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">Zamknij temat ogrodzenia w jednym spotkaniu</h2>
                <p className="mt-4 text-tg-muted">
                  Przygotujemy wstępną wycenę i propozycję stylistyczną. Przekaż nam wymiary lub umów
                  bezpłatny pomiar na miejscu.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-tg-line bg-tg-dark/80 p-5">
                  <p className="text-sm text-tg-muted">Zadzwoń lub napisz</p>
                  <p className="mt-2 text-lg font-semibold text-tg-secondary">+48 000 000 000</p>
                  <p className="text-sm text-tg-muted">kontakt@topgreen.pl</p>
                </div>
                <a
                  className="rounded-full bg-tg-primary hover:bg-tg-primary-hover px-6 py-3 text-center text-sm font-semibold text-[#141416] shadow-[0_16px_36px_rgba(212,175,55,0.28)]"
                  href="/kontakt"
                >
                  Umów termin
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
