import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function OfertaPage() {
  return (
    <>
      <Navbar activePath="/oferta" />
      <main>
        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Oferta</p>
              <h1 className="font-serif text-4xl leading-tight md:text-5xl">Kompletne systemy ogrodzeń</h1>
              <p className="mt-4 text-lg leading-7 text-neutral-600">
                Wybierz kolekcję dopasowaną do architektury domu, stylu ogrodu i budżetu.
                Projektujemy, produkujemy i montujemy w jednym procesie.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
                  href="/kontakt"
                >
                  Zamów wycenę
                </a>
                <a className="rounded-full border border-neutral-200 px-6 py-3 font-semibold" href="/realizacje">
                  Zobacz realizacje
                </a>
              </div>
            </div>
            <div className="tg-card-lg">
              <h3 className="font-serif text-2xl">W pakiecie TopGreen</h3>
              <ul className="mt-4 list-disc pl-5 text-neutral-600">
                <li>Projekt i wizualizacja 3D</li>
                <li>Ogrodzenie + brama + furtka</li>
                <li>Automatyka i kontrola dostępu</li>
                <li>Gwarancja do 15 lat</li>
              </ul>
              <div className="mt-6 grid gap-3 text-sm text-neutral-600">
                <p>Realizacja od 6 tygodni.</p>
                <p>Obsługa inwestycji prywatnych i biznesowych.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Kategorie</p>
                <h2 className="font-serif text-3xl md:text-4xl">Wybierz system dopasowany do posesji</h2>
              </div>
              <a className="font-semibold text-tg-dark" href="/#technologia">
                Poznaj technologię
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Palisadowe</h3>
                <p className="mt-2 text-neutral-600">
                  Najbardziej prestiżowe ogrodzenia o minimalistycznych liniach.
                </p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Profile 60/40 i 80/20</li>
                  <li>Ukryte spawy</li>
                  <li>Paleta RAL</li>
                </ul>
              </article>
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Panelowe 2D/3D</h3>
                <p className="mt-2 text-neutral-600">Praktyczne rozwiązanie dla firm i osiedli.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Wysoka sztywność</li>
                  <li>Szybki montaż</li>
                  <li>Atrakcyjna cena</li>
                </ul>
              </article>
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Nowoczesne lamelowe</h3>
                <p className="mt-2 text-neutral-600">Idealne do architektury modern i industrial.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Efekt pełnej zabudowy</li>
                  <li>Regulacja prześwitu</li>
                  <li>Spójna linia z bramą</li>
                </ul>
              </article>
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Bramy przesuwne</h3>
                <p className="mt-2 text-neutral-600">Cicha automatyka i niezawodna praca w zimie.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Napędy premium</li>
                  <li>Zabezpieczenia fotokomórkami</li>
                  <li>Smart sterowanie</li>
                </ul>
              </article>
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Furtki</h3>
                <p className="mt-2 text-neutral-600">Spójny design i wygodny dostęp.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Systemy kontroli</li>
                  <li>Zamki elektromagnetyczne</li>
                  <li>Podświetlane numery</li>
                </ul>
              </article>
              <article className="tg-card reveal hover-lift">
                <h3 className="font-serif text-2xl">Akcesoria</h3>
                <p className="mt-2 text-neutral-600">Skrzynki, domofony, słupki i elementy smart.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Systemy wideodomofonowe</li>
                  <li>Oświetlenie LED</li>
                  <li>Integracja z alarmem</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Pakiety</p>
                <h2 className="font-serif text-3xl md:text-4xl">Dopasuj zakres do budżetu</h2>
              </div>
              <p className="text-neutral-500">Indywidualna konfiguracja i doradztwo techniczne.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="tg-card hover-lift">
                <h3 className="font-serif text-2xl">Start</h3>
                <p className="mt-2 text-neutral-600">Podstawowy zestaw ogrodzenia.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Standardowe wypełnienia</li>
                  <li>Brama ręczna</li>
                  <li>Wycena w 48h</li>
                </ul>
              </div>
              <div className="tg-card border-2 border-tg-green hover-lift">
                <h3 className="font-serif text-2xl">Comfort</h3>
                <p className="mt-2 text-neutral-600">Najczęściej wybierany zakres.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Automatyka bramy</li>
                  <li>Wizualizacja 3D</li>
                  <li>Dedykowany opiekun</li>
                </ul>
              </div>
              <div className="tg-card hover-lift">
                <h3 className="font-serif text-2xl">Premium</h3>
                <p className="mt-2 text-neutral-600">Kompletne systemy smart.</p>
                <ul className="mt-4 list-disc pl-5 text-neutral-600">
                  <li>Kontrola dostępu</li>
                  <li>Oświetlenie i numer domu</li>
                  <li>Gwarancja 15 lat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-black py-16 text-white">
          <div className="mx-auto flex w-[min(1140px,92vw)] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Porozmawiajmy o Twoim projekcie</h2>
              <p className="mt-2 text-neutral-200">Prześlij wymiary i inspiracje. Odezwiemy się w 48 godzin.</p>
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
