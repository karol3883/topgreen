import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ONasPage() {
  return (
    <>
      <Navbar activePath="/o-nas" />
      <main>
        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-tg-dark">TopGreen</p>
              <h1 className="font-serif text-4xl leading-tight md:text-5xl">Tworzymy ogrodzenia z charakterem</h1>
              <p className="mt-4 text-lg leading-7 text-neutral-600">
                Jesteśmy zespołem projektantów i wykonawców, którzy łączą nowoczesny design z trwałymi
                rozwiązaniami technicznymi. Każda realizacja to dialog z architekturą i otoczeniem.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
                  href="/realizacje"
                >
                  Zobacz realizacje
                </a>
                <a className="rounded-full border border-neutral-200 px-6 py-3 font-semibold" href="/kontakt">
                  Porozmawiajmy
                </a>
              </div>
            </div>
            <div className="tg-card-lg hover-lift">
              <h3 className="font-serif text-2xl">Co nas wyróżnia?</h3>
              <ul className="mt-4 list-disc pl-5 text-neutral-600">
                <li>Autorskie projekty dopasowane do posesji</li>
                <li>Własna produkcja i kontrola jakości</li>
                <li>Wsparcie od koncepcji po serwis</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Zespół</p>
                <h2 className="font-serif text-3xl md:text-4xl">Ludzie, którzy stoją za marką</h2>
              </div>
              <p className="text-neutral-500">Ponad 40 specjalistów w produkcji, montażu i obsłudze.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="tg-card hover-lift">
                <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Design</p>
                <h3 className="mt-3 font-serif text-2xl">Studio projektowe</h3>
                <p className="mt-2 text-neutral-600">
                  Projektujemy ogrodzenia, które są spójne z architekturą domu i ogrodu.
                </p>
              </div>
              <div className="tg-card hover-lift">
                <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Produkcja</p>
                <h3 className="mt-3 font-serif text-2xl">Nowoczesny park maszyn</h3>
                <p className="mt-2 text-neutral-600">
                  Cięcie CNC, spawanie i powłoki antykorozyjne w jednym miejscu.
                </p>
              </div>
              <div className="tg-card hover-lift">
                <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Montaż</p>
                <h3 className="mt-3 font-serif text-2xl">Ekipa wykonawcza</h3>
                <p className="mt-2 text-neutral-600">
                  Zgrany zespół, który dba o każdy detal na miejscu inwestycji.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Proces</p>
                <h2 className="font-serif text-3xl md:text-4xl">Od koncepcji do montażu</h2>
              </div>
              <p className="text-neutral-500">Czytelny plan i jasne terminy.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="tg-card hover-lift">
                <span className="font-semibold text-tg-dark">01</span>
                <h3 className="mt-2 font-serif text-xl">Pomiar</h3>
                <p className="mt-2 text-neutral-600">Bezpłatna wizyta i analiza terenu.</p>
              </div>
              <div className="tg-card hover-lift">
                <span className="font-semibold text-tg-dark">02</span>
                <h3 className="mt-2 font-serif text-xl">Projekt</h3>
                <p className="mt-2 text-neutral-600">Wizualizacja i dobór materiałów.</p>
              </div>
              <div className="tg-card hover-lift">
                <span className="font-semibold text-tg-dark">03</span>
                <h3 className="mt-2 font-serif text-xl">Produkcja</h3>
                <p className="mt-2 text-neutral-600">Precyzyjna realizacja zamówienia.</p>
              </div>
              <div className="tg-card hover-lift">
                <span className="font-semibold text-tg-dark">04</span>
                <h3 className="mt-2 font-serif text-xl">Montaż</h3>
                <p className="mt-2 text-neutral-600">Sprawna instalacja i odbiór.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-black py-16 text-white">
          <div className="mx-auto flex w-[min(1140px,92vw)] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Masz pytania o współpracę?</h2>
              <p className="mt-2 text-neutral-200">Chętnie opowiemy o możliwościach i terminach.</p>
            </div>
            <a
              className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
              href="/kontakt"
            >
              Skontaktuj się
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
