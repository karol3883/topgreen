import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Navbar activePath="/" />
      <ParallaxHero />
      <main>
        <section className="relative overflow-hidden pb-8 pt-16 md:pb-12 md:pt-20">
          <div className="hero-bg parallax pointer-events-none absolute inset-0 opacity-70" data-parallax-speed="0.03"></div>
          <div className="relative mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-tg-dark">
                <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm transition hover:-translate-y-0.5">
                  TopGreen
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm transition hover:-translate-y-0.5">
                  Produkcja w Polsce
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm transition hover:-translate-y-0.5">
                  15 lat gwarancji
                </span>
              </div>
              <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-[3.6rem]">
                Ogrodzenia, które porządkują przestrzeń i podbijają architekturę.
              </h1>
              <p className="mt-4 text-lg leading-7 text-neutral-600">
                Projektujemy nowoczesne systemy ogrodzeń i bram — spójne stylistycznie, trwałe i
                przygotowane pod automatykę. Cały proces od pomiaru po montaż.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-tg-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-0.5"
                  href="/kontakt"
                >
                  Umów konsultację
                </a>
                <a
                  className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                  href="/realizacje"
                >
                  Zobacz realizacje
                </a>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div>
                  <strong className="text-xl">1800+</strong>
                  <span className="block text-sm text-neutral-600">zrealizowanych posesji</span>
                </div>
                <div>
                  <strong className="text-xl">48h</strong>
                  <span className="block text-sm text-neutral-600">czas wstępnej wyceny</span>
                </div>
                <div>
                  <strong className="text-xl">6 tyg.</strong>
                  <span className="block text-sm text-neutral-600">start montażu od akceptacji</span>
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="tg-card-lg parallax relative overflow-hidden bg-white/90 backdrop-blur hover-lift" data-parallax-speed="0.06">
                <div className="absolute right-6 top-6 rounded-full bg-[#d8f2e0] px-3 py-1 text-xs font-semibold">
                  Najczęściej wybierany
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-fence.jpg"
                    alt="Nowoczesne ogrodzenie przy domu"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 520px"
                    priority
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl">Pakiet TopGreen</h3>
                <ul className="mt-3 list-disc pl-5 text-neutral-600">
                  <li>Palisadowe + brama przesuwna</li>
                  <li>Przygotowanie pod automatykę</li>
                  <li>Spójna linia z furtką</li>
                </ul>
                <p className="mt-3 text-sm text-neutral-500">Dopasujemy kolor, profil i prześwity do bryły domu.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="tg-card parallax grid gap-3 hover-lift" data-parallax-speed="0.04">
                  <div className="relative h-28 overflow-hidden rounded-xl">
                    <Image
                      src="/images/hero-gate.jpg"
                      alt="Brama przesuwna z automatyką"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 260px"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-tg-dark">Automatyka</p>
                    <p className="mt-1 font-semibold">Smart-ready</p>
                    <p className="mt-1 text-sm text-neutral-600">Integracja z domofonem i aplikacją.</p>
                  </div>
                </div>
                <div className="tg-card parallax grid gap-3 hover-lift" data-parallax-speed="0.05">
                  <div className="relative h-28 overflow-hidden rounded-xl">
                    <Image
                      src="/images/hero-detail.jpg"
                      alt="Detal profilu stalowego"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 260px"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-tg-dark">Kolekcje</p>
                    <p className="mt-1 font-semibold">Horizon / Linear / Compact</p>
                    <p className="mt-1 text-sm text-neutral-600">Minimalistyczne profile i pełna paleta RAL.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" id="oferta">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Oferta</p>
                <h2 className="font-serif text-3xl md:text-4xl">Kolekcje dopasowane do przestrzeni</h2>
              </div>
              <a className="font-semibold text-tg-dark" href="/oferta">
                Zobacz pełną ofertę
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="tg-card reveal grid gap-3 hover-lift">
                <div className="card-media slats relative h-36 rounded-xl"></div>
                <h3 className="font-serif text-2xl">Ogrodzenia palisadowe</h3>
                <p className="text-neutral-600">Minimalistyczne profile i wysoka sztywność konstrukcji.</p>
                <a className="font-semibold text-tg-dark" href="/oferta">
                  Poznaj serię Horizon
                </a>
              </article>
              <article className="tg-card reveal grid gap-3 hover-lift">
                <div className="card-media mesh relative h-36 overflow-hidden rounded-xl"></div>
                <h3 className="font-serif text-2xl">Panele 2D i 3D</h3>
                <p className="text-neutral-600">Ekonomiczne rozwiązanie dla firm i obiektów publicznych.</p>
                <a className="font-semibold text-tg-dark" href="/oferta">
                  Sprawdź warianty
                </a>
              </article>
              <article className="tg-card reveal grid gap-3 hover-lift">
                <div className="card-media gate relative h-36 overflow-hidden rounded-xl"></div>
                <h3 className="font-serif text-2xl">Bramy automatyczne</h3>
                <p className="text-neutral-600">Inteligentne sterowanie, ciche napędy i opcje smart.</p>
                <a className="font-semibold text-tg-dark" href="/oferta">
                  Konfiguruj bramę
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 md:py-20" id="technologia">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Technologia</p>
              <h2 className="font-serif text-3xl md:text-4xl">Stal, która pracuje na Twoje bezpieczeństwo</h2>
              <p className="mt-4 text-neutral-600">
                Stosujemy cynkowanie ogniowe oraz malowanie proszkowe w trzystopniowym procesie, który
                chroni przed korozją. Każdy element przechodzi kontrolę jakości i testy odporności na
                warunki atmosferyczne.
              </p>
              <ul className="mt-6 grid gap-3 text-neutral-700">
                <li className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-tg-green">
                  Powłoki antykorozyjne klasy C4
                </li>
                <li className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-tg-green">
                  Spawanie z pełnym przetopem
                </li>
                <li className="relative pl-7 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-tg-green">
                  Ukryte zawiasy i wzmocnienia
                </li>
              </ul>
            </div>
            <div className="tg-card-lg reveal">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <span className="font-bold text-tg-dark">01</span>
                  <h4 className="mt-2 font-serif text-lg">Projekt</h4>
                  <p className="text-sm text-neutral-600">Wizualizacja w 48 godzin.</p>
                </div>
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <span className="font-bold text-tg-dark">02</span>
                  <h4 className="mt-2 font-serif text-lg">Produkcja</h4>
                  <p className="text-sm text-neutral-600">Precyzyjne cięcie CNC.</p>
                </div>
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <span className="font-bold text-tg-dark">03</span>
                  <h4 className="mt-2 font-serif text-lg">Montaż</h4>
                  <p className="text-sm text-neutral-600">Sprawna ekipa instalacyjna.</p>
                </div>
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <span className="font-bold text-tg-dark">04</span>
                  <h4 className="mt-2 font-serif text-lg">Serwis</h4>
                  <p className="text-sm text-neutral-600">Wsparcie po montażu.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p>Chcesz zobaczyć realne realizacje?</p>
                <a className="rounded-full border border-neutral-200 px-5 py-2 font-semibold" href="/realizacje">
                  Galeria TopGreen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" id="realizacje">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Realizacje</p>
                <h2 className="font-serif text-3xl md:text-4xl">Nowoczesne projekty w całej Polsce</h2>
              </div>
              <p className="text-neutral-500">Sprawdź wdrożenia dla klientów prywatnych i biznesowych.</p>
            </div>
            <div className="grid auto-rows-[160px] gap-4 md:grid-cols-4">
              <div className="gallery-item reveal relative col-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-entrance.jpg"
                  alt="Nowoczesne wejście z ogrodzeniem"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 560px"
                />
              </div>
              <div className="gallery-item reveal relative row-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-fence.jpg"
                  alt="Ogrodzenie palisadowe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-detail.jpg"
                  alt="Detal ogrodzenia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-gate.jpg"
                  alt="Brama przesuwna"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
              <div className="gallery-item reveal relative col-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-entrance.jpg"
                  alt="Nowoczesna posesja z ogrodzeniem"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#f7faf8] to-[#e3eee8] py-16 md:py-20">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="reveal">
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">O nas</p>
              <h2 className="font-serif text-3xl md:text-4xl">Marka, która stawia na jakość</h2>
              <p className="mt-4 text-neutral-600">
                Łączymy nowoczesne wzornictwo z rzemieślniczą precyzją. Zobacz, jak pracujemy i
                dlaczego zaufało nam już ponad 1800 klientów.
              </p>
              <a
                className="mt-6 inline-flex rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
                href="/o-nas"
              >
                Poznaj TopGreen
              </a>
            </div>
            <div className="tg-card-lg reveal">
              <h3 className="font-serif text-2xl">Nasze wartości</h3>
              <ul className="mt-5 list-disc pl-5 text-neutral-600">
                <li>Transparentna komunikacja i szybkie terminy.</li>
                <li>Kontrola jakości na każdym etapie produkcji.</li>
                <li>Estetyka dopasowana do architektury posesji.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-tg-black py-16 md:py-20 text-white">
          <div className="mx-auto flex w-[min(1140px,92vw)] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Potrzebujesz wyceny?</h2>
              <p className="mt-2 text-neutral-200">Wyślij wymiary i inspiracje, wrócimy w 48 godzin.</p>
            </div>
            <a
              className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
              href="/kontakt"
            >
              Wyślij zapytanie
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
