import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const offerHighlights = [
  {
    title: "Ogrodzenia palisadowe",
    description: "Równa geometria profili, spokojny rytm przęseł i wykończenie dopasowane do bryły domu.",
    href: "/oferta/ogrodzenia-palisadowe",
    image: "/images/offers/thumbs/fence-modern-1-640.jpg",
    eyebrow: "Linia frontowa",
  },
  {
    title: "Bramy i furtki",
    description: "Jedna estetyka dla wjazdu i wejścia, z proporcjami dobranymi do ogrodzenia i elewacji.",
    href: "/oferta/brama-przesuwna",
    image: "/images/offers/thumbs/gate-sliding-1-640.jpg",
    eyebrow: "Ruch i detal",
  },
  {
    title: "Automatyka i kontrola",
    description: "Napędy, domofony i sterowanie, które porządkują codzienne korzystanie z posesji.",
    href: "/oferta/automatyka-i-kontrola",
    image: "/images/offers/thumbs/gate-black-1-640.jpg",
    eyebrow: "Komfort użytkowania",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Punkt wyjścia",
    description: "Oględziny, pomiar i rozmowa o stylu posesji, skali inwestycji oraz oczekiwanym budżecie.",
  },
  {
    step: "02",
    title: "Kierunek projektu",
    description: "Dobieramy profile, prześwity, kolor i układ bramy tak, żeby całość była spójna wizualnie.",
  },
  {
    step: "03",
    title: "Produkcja i zabezpieczenie",
    description: "Przygotowanie elementów, cynkowanie i lakier proszkowy bez kompromisów w trwałości.",
  },
  {
    step: "04",
    title: "Montaż i odbiór",
    description: "Ustawienie, regulacja i uruchomienie automatyki z odbiorem gotowego systemu.",
  },
];

const proofPoints = [
  "Projekt, produkcja i montaż w jednym zespole",
  "Spójny wygląd ogrodzenia, furtki i bramy",
  "Powłoki przygotowane do wieloletniej eksploatacji",
];

export const metadata: Metadata = {
  title: "TopGreen | Nowoczesne ogrodzenia stalowe i bramy",
  description:
    "Projektujemy, produkujemy i montujemy ogrodzenia stalowe, bramy oraz automatykę do nowoczesnych posesji.",
};

export default function HomePage() {
  return (
    <>
      <Navbar activePath="/" />
      <main>
        <section className="relative overflow-hidden border-b border-tg-line/60 pb-18 pt-10 md:pb-24 md:pt-16">
          <div
            className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-tg-primary/10 blur-3xl"
            data-parallax-speed="0.025"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-tg-primary/8 blur-3xl"
            data-parallax-speed="0.02"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tg-primary/60 to-transparent" />
          <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="reveal relative z-10 space-y-8">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-tg-muted">
                <span className="tg-stamp">TopGreen</span>
                <span>Nowoczesna stal dla posesji prywatnych</span>
              </div>

              <div className="max-w-3xl space-y-5">
                <h1 className="font-serif text-[3rem] leading-[0.94] text-tg-secondary md:text-[4.5rem] lg:text-[5.3rem]">
                  Front posesji, który porządkuje całą architekturę.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-tg-muted md:text-xl">
                  Tworzymy ogrodzenia stalowe, bramy i wejścia, które wyglądają spokojnie, precyzyjnie
                  i nowocześnie. Od pierwszego pomiaru po montaż wszystko prowadzimy w jednym procesie.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  className="rounded-full bg-tg-primary px-7 py-3 text-sm font-semibold text-[#141416] shadow-[0_20px_40px_rgba(212,175,55,0.28)] transition hover:-translate-y-0.5 hover:bg-tg-primary-hover"
                  href="/kontakt"
                >
                  Umów konsultację
                </Link>
                <Link
                  className="rounded-full border border-tg-line bg-tg-dark/70 px-7 py-3 text-sm font-semibold text-tg-secondary transition hover:-translate-y-0.5 hover:border-tg-primary/50"
                  href="/oferta"
                >
                  Zobacz ofertę
                </Link>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-tg-line bg-tg-dark/70 px-5 py-4 text-sm text-tg-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative lg:justify-self-end">
              <div className="steel-panel relative isolate overflow-hidden rounded-[2rem] p-3">
                <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/images/hero-fence.jpg"
                      alt="Nowoczesne ogrodzenie stalowe przed domem jednorodzinnym"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 92vw, 620px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl border border-white/12 bg-black/40 px-4 py-4 backdrop-blur-sm">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/65">Realizacja</p>
                      <p className="mt-2 font-serif text-2xl text-white">Palisada + brama przesuwna</p>
                      <p className="mt-2 text-sm leading-6 text-white/78">
                        Minimalistyczny układ profili z ciemnym wykończeniem i zintegrowanym wjazdem.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="relative min-h-[214px] overflow-hidden rounded-[1.4rem] border border-tg-line bg-tg-dark">
                      <Image
                        src="/images/hero-detail.jpg"
                        alt="Detal stalowego ogrodzenia i wykończenia"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 92vw, 280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                    <div className="rounded-[1.4rem] border border-tg-line bg-tg-dark/90 p-6">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-tg-muted">Zakres prac</p>
                      <ul className="mt-5 grid gap-4 text-sm leading-6 text-tg-muted">
                        <li>Pomiar i doradztwo materiałowe</li>
                        <li>Projekt i dobór automatyki</li>
                        <li>Produkcja, montaż i regulacja</li>
                      </ul>
                      <div className="mt-6 rounded-2xl border border-tg-line bg-tg-alt/70 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-tg-muted">Obsługa inwestycji</p>
                        <p className="mt-2 font-serif text-2xl text-tg-secondary">Jedna odpowiedzialność</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-18 md:py-24">
          <div className="section-divider absolute left-0 right-0 top-0" />
          <div className="mx-auto w-[min(1180px,92vw)]">
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Oferta</p>
                <h2 className="font-serif text-3xl md:text-5xl">System wejścia projektowany jako całość.</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-tg-muted md:text-base">
                Zamiast przypadkowych elementów dostajesz spójny zestaw, który pracuje z architekturą domu,
                a nie obok niej.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {offerHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal group overflow-hidden rounded-[1.8rem] border border-tg-line bg-tg-dark shadow-[0_22px_48px_rgba(0,0,0,0.35)]"
                  style={{ ["--delay" as string]: `${0.12 + index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 92vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <p className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/75">
                      {item.eyebrow}
                    </p>
                  </div>
                  <div className="space-y-4 p-6">
                    <h3 className="font-serif text-2xl text-tg-secondary">{item.title}</h3>
                    <p className="min-h-[72px] text-sm leading-6 text-tg-muted">{item.description}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-tg-secondary transition hover:text-tg-primary"
                    >
                      Przejdź do podstrony
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-tg-line/70 bg-tg-alt/65 py-18 md:py-24">
          <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal space-y-5">
              <p className="text-[11px] uppercase tracking-[0.4em] text-tg-muted">Proces</p>
              <h2 className="font-serif text-3xl md:text-5xl">Najpierw porządek decyzji, potem wykonanie.</h2>
              <p className="max-w-xl text-base leading-7 text-tg-muted">
                Strona frontowa domu jest zbyt widoczna, żeby budować ją z przypadkowych wyborów. Dlatego
                prowadzimy inwestycję etapami i jasno pokazujemy, co dzieje się dalej.
              </p>
              <div className="grid gap-3 pt-2">
                <div className="rounded-2xl border border-tg-line bg-tg-dark/70 px-5 py-4 text-sm text-tg-muted">
                  Jeden kontakt od pomiaru do odbioru.
                </div>
                <div className="rounded-2xl border border-tg-line bg-tg-dark/70 px-5 py-4 text-sm text-tg-muted">
                  Ustalenia projektowe przed wejściem w produkcję.
                </div>
                <div className="rounded-2xl border border-tg-line bg-tg-dark/70 px-5 py-4 text-sm text-tg-muted">
                  Montaż z regulacją i uruchomieniem automatyki.
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {processSteps.map((item, index) => (
                <article
                  key={item.step}
                  className="reveal rounded-[1.6rem] border border-tg-line bg-tg-dark px-6 py-6 shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
                  style={{ ["--delay" as string]: `${0.18 + index * 0.08}s` }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-[11px] uppercase tracking-[0.34em] text-tg-primary">Etap {item.step}</p>
                      <h3 className="mt-3 font-serif text-2xl text-tg-secondary">{item.title}</h3>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-tg-muted">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-18 md:py-24">
          <div className="section-divider absolute left-0 right-0 top-0" />
          <div className="mx-auto w-[min(1180px,92vw)]">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Realizacje</p>
                <h2 className="font-serif text-3xl md:text-5xl">Przykłady, w których detal robi różnicę.</h2>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-sm leading-6 text-tg-muted md:text-base">
                  Oglądaj gotowe realizacje pod kątem proporcji, podziału przęseł i relacji między ogrodzeniem a bryłą domu.
                </p>
                <Link className="text-sm font-semibold text-tg-secondary transition hover:text-tg-primary" href="/realizacje">
                  Pełna galeria
                </Link>
              </div>
            </div>

            <ShowcaseCarousel
              items={[
                {
                  src: "/images/offers/thumbs/fence-modern-1-640.jpg",
                  title: "Rezydencja w lesie",
                  caption: "Ogrodzenie palisadowe, spokojny rytm pionów i brama przesuwna w tej samej linii.",
                },
                {
                  src: "/images/offers/thumbs/gate-sliding-1-640.jpg",
                  title: "Nowoczesny front posesji",
                  caption: "Czysta geometria wjazdu i wejścia z wykończeniem w ciemnym macie.",
                },
                {
                  src: "/images/offers/thumbs/fence-brick-1-640.jpg",
                  title: "Stal i murowane słupki",
                  caption: "Połączenie prostych profili z cięższą architekturą ogrodzenia.",
                },
              ]}
            />
          </div>
        </section>

        <section className="pb-18 pt-6 md:pb-24">
          <div className="mx-auto w-[min(1180px,92vw)]">
            <div className="reveal relative overflow-hidden rounded-[2.2rem] border border-tg-line bg-tg-dark px-7 py-8 shadow-[0_22px_56px_rgba(0,0,0,0.38)] md:px-10 md:py-10">
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_55%)] lg:block" />
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-5">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-tg-muted">Konsultacja</p>
                  <h2 className="max-w-2xl font-serif text-3xl md:text-5xl">
                    Jeśli front domu ma wyglądać spokojnie, decyzje trzeba ustawić od początku.
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-tg-muted">
                    Przygotujemy kierunek stylistyczny, wstępny zakres i rekomendację rozwiązania dopasowanego
                    do posesji. Bez przypadkowych elementów i bez zgadywania na etapie montażu.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.6rem] border border-tg-line bg-tg-alt/80 p-6">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-tg-muted">Kontakt</p>
                    <p className="mt-3 text-lg font-semibold text-tg-secondary">+48 000 000 000</p>
                    <p className="mt-1 text-sm text-tg-muted">kontakt@topgreen.pl</p>
                    <p className="mt-5 text-sm leading-6 text-tg-muted">
                      Napisz, jaki efekt chcesz osiągnąć, a przygotujemy punkt wyjścia do rozmowy.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      className="rounded-full bg-tg-primary px-6 py-3 text-sm font-semibold text-[#141416] transition hover:bg-tg-primary-hover"
                      href="/kontakt"
                    >
                      Przejdź do kontaktu
                    </Link>
                    <Link
                      className="rounded-full border border-tg-line px-6 py-3 text-sm font-semibold text-tg-secondary transition hover:border-tg-primary/50"
                      href="/o-nas"
                    >
                      Poznaj firmę
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
