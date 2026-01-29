import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function KontaktPage() {
  return (
    <>
      <Navbar activePath="/kontakt" />
      <main>
        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Kontakt</p>
              <h1 className="font-serif text-4xl leading-tight md:text-5xl">Porozmawiajmy o ogrodzeniu</h1>
              <p className="mt-4 text-lg leading-7 text-neutral-600">
                Napisz lub zadzwoń — wrócimy z propozycją w 48 godzin. Działamy w całej Polsce.
              </p>
              <div className="mt-6 grid gap-4 text-neutral-700">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Telefon</p>
                  <a className="text-lg font-semibold" href="tel:+48664390025">
                    +48 664 390 025
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">E-mail</p>
                  <a className="text-lg font-semibold" href="mailto:biuro@topgreen.pl">
                    biuro@topgreen.pl
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Adres</p>
                  <p className="text-lg font-semibold">ul. Zielona 12, 00-950 Warszawa</p>
                </div>
              </div>
            </div>
            <div className="tg-card-lg">
              <h3 className="font-serif text-2xl">Godziny pracy</h3>
              <div className="mt-4 grid gap-3 text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <strong className="text-tg-dark">08:00 - 18:00</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sobota</span>
                  <strong className="text-tg-dark">09:00 - 14:00</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Niedziela</span>
                  <strong className="text-tg-dark">Nieczynne</strong>
                </div>
              </div>
              <p className="mt-6 text-sm text-neutral-500">
                Spotkania poza godzinami po wcześniejszym umówieniu.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" id="formularz">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Wycena</p>
              <h2 className="font-serif text-3xl md:text-4xl">Formularz kontaktowy</h2>
              <p className="mt-3 text-neutral-600">
                Prześlij wymiary, zdjęcia działki i preferowany styl. Oddzwonimy z propozycją.
              </p>
              <div className="mt-6 rounded-3xl bg-neutral-100 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Checklist</p>
                <ul className="mt-3 list-disc pl-5 text-neutral-600">
                  <li>Długość i wysokość ogrodzenia</li>
                  <li>Typ bramy (przesuwna / skrzydłowa)</li>
                  <li>Kolorystyka i styl posesji</li>
                </ul>
              </div>
            </div>
            <form className="tg-card-lg hover-lift">
              <div className="grid gap-4">
                <input className="rounded-lg border border-neutral-200 px-4 py-3" type="text" placeholder="Imię i nazwisko" />
                <input className="rounded-lg border border-neutral-200 px-4 py-3" type="email" placeholder="E-mail" />
                <input className="rounded-lg border border-neutral-200 px-4 py-3" type="tel" placeholder="Telefon" />
                <textarea
                  className="min-h-[140px] rounded-lg border border-neutral-200 px-4 py-3"
                  placeholder="Opisz swoją inwestycję"
                ></textarea>
                <button
                  className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
                  type="submit"
                >
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-neutral-100 py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 lg:grid-cols-2">
            <div className="tg-card-lg hover-lift">
              <h3 className="font-serif text-2xl">Jak do nas dojechać</h3>
              <p className="mt-3 text-neutral-600">
                Wpisz w nawigacji "TopGreen Warszawa" lub skontaktuj się, by umówić spotkanie na miejscu.
              </p>
              <div className="mt-6 h-48 rounded-2xl bg-gradient-to-br from-[#cfe2d4] to-[#a5c2b0]"></div>
            </div>
            <div className="tg-card-lg hover-lift">
              <h3 className="font-serif text-2xl">FAQ</h3>
              <div className="mt-4 grid gap-4 text-neutral-600">
                <div>
                  <p className="font-semibold text-tg-dark">Ile trwa przygotowanie wyceny?</p>
                  <p>Standardowo 48 godzin od otrzymania kompletu informacji.</p>
                </div>
                <div>
                  <p className="font-semibold text-tg-dark">Czy oferujecie montaż?</p>
                  <p>Tak, zapewniamy własne ekipy montażowe w całej Polsce.</p>
                </div>
                <div>
                  <p className="font-semibold text-tg-dark">Czy możliwy jest niestandardowy projekt?</p>
                  <p>Tak, wykonujemy indywidualne projekty i wizualizacje 3D.</p>
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
