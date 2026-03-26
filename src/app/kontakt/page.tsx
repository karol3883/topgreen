import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function KontaktPage() {
  return (
    <>
      <Navbar activePath="/kontakt" />
      <main className="pb-16">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_40%),repeating-linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_1px,transparent_1px,transparent_30px)]"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Kontakt</p>
              <h1 className="font-serif text-4xl md:text-5xl">Porozmawiajmy o Twoim ogrodzeniu</h1>
              <p className="mt-4 text-lg text-tg-muted">
                Opisz zakres prac, wymiary i oczekiwania estetyczne. Odpowiemy z wyceną i propozycją
                rozwiązań.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="tg-card">
                  <p className="text-sm text-tg-muted">Telefon</p>
                  <p className="mt-1 text-lg font-semibold">+48 000 000 000</p>
                </div>
                <div className="tg-card">
                  <p className="text-sm text-tg-muted">E-mail</p>
                  <p className="mt-1 text-lg font-semibold">kontakt@topgreen.pl</p>
                </div>
                <div className="tg-card">
                  <p className="text-sm text-tg-muted">Biuro</p>
                  <p className="mt-1 text-lg font-semibold">[Adres firmy]</p>
                  <p className="text-sm text-tg-muted">[Kod, Miasto]</p>
                </div>
              </div>
            </div>

            <div className="tg-card-lg reveal">
              <h2 className="font-serif text-2xl">Wyślij zapytanie</h2>
              <form className="mt-5 grid gap-4 text-sm">
                <input
                  className="w-full rounded-xl border border-tg-line bg-tg-dark px-4 py-3 text-tg-secondary placeholder:text-tg-muted"
                  placeholder="Imię i nazwisko"
                  type="text"
                />
                <input
                  className="w-full rounded-xl border border-tg-line bg-tg-dark px-4 py-3 text-tg-secondary placeholder:text-tg-muted"
                  placeholder="E-mail"
                  type="email"
                />
                <input
                  className="w-full rounded-xl border border-tg-line bg-tg-dark px-4 py-3 text-tg-secondary placeholder:text-tg-muted"
                  placeholder="Telefon"
                  type="tel"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-tg-line bg-tg-dark px-4 py-3 text-tg-secondary placeholder:text-tg-muted"
                  placeholder="Opis inwestycji / zakres prac"
                ></textarea>
                <button
                  className="rounded-full bg-tg-primary hover:bg-tg-primary-hover px-6 py-3 text-sm font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)]"
                  type="button"
                >
                  Wyślij
                </button>
                <p className="text-xs text-tg-muted">
                  Wysyłka formularza jest przykładowa — podłączymy ją po wdrożeniu.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="steel-panel relative h-64 rounded-3xl bg-tg-alt">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-tg-muted">[Mapa do wstawienia]</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
