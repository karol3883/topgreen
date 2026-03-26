import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ONasPage() {
  return (
    <>
      <Navbar activePath="/o-nas" />
      <main className="pb-16">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_40%),repeating-linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_1px,transparent_1px,transparent_30px)]"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">O nas</p>
              <h1 className="font-serif text-4xl md:text-5xl">TopGreen — stal w służbie architektury</h1>
              <p className="mt-4 text-lg text-tg-muted">
                Łączymy inżynierską precyzję z estetyką nowoczesnych brył. Projektujemy ogrodzenia, które
                podkreślają charakter domu i porządkują przestrzeń.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-tg-muted">
                <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Własna produkcja</span>
                <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Kontrola jakości</span>
                <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Montaż pod klucz</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt py-12">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-6 md:grid-cols-3">
            {[
              {
                title: "Precyzja wykonania",
                desc: "Kontrola jakości na każdym etapie.",
              },
              {
                title: "Jasna komunikacja",
                desc: "Harmonogramy i transparentne warunki.",
              },
              {
                title: "Spójna estetyka",
                desc: "Jedna linia bram, furtek i ogrodzeń.",
              },
            ].map((item) => (
              <div key={item.title} className="tg-card reveal">
                <p className="text-sm font-semibold text-tg-secondary">{item.title}</p>
                <p className="mt-2 text-sm text-tg-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-tg-alt py-12">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-6 md:grid-cols-3">
            {[
              { value: "[10+ lat]", label: "doświadczenia" },
              { value: "[1000+]", label: "zrealizowanych posesji" },
              { value: "[100%]", label: "kontroli jakości" },
            ].map((item) => (
              <div key={item.label} className="tg-card reveal text-center">
                <p className="text-2xl font-semibold text-tg-secondary">{item.value}</p>
                <p className="mt-2 text-sm text-tg-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Zespół i zaplecze produkcji</h2>
              <p className="mt-3 text-tg-muted">
                Własna produkcja, spawacze z doświadczeniem i zespół montażowy, który pracuje według
                standardów minimalizujących czas realizacji. Dzięki temu pilnujemy jakości i terminów.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Dedykowany opiekun projektu",
                  "Stały nadzór jakości",
                  "Zespół montażowy TopGreen",
                  "Próby i odbiory końcowe",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-tg-line bg-tg-dark px-4 py-3 text-sm text-tg-muted">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-tg-line bg-tg-dark shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/images/offers/thumbs/fence-modern-1-640.jpg"
                  alt="Zaplecze produkcji TopGreen"
                  fill
                  className="object-cover saturate-[0.85] contrast-[1.05] brightness-[0.95]"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Zaplecze</p>
                <p className="mt-2 text-sm text-tg-muted">
                  Spawy, kontrola wymiarów i jakość powłok pod stałym nadzorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Jak pracujemy</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">Proces, który daje spokój</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Konsultacja",
                  desc: "Zbieramy potrzeby, proponujemy rozwiązanie i budżet.",
                },
                {
                  title: "Projekt i produkcja",
                  desc: "Dokładne wymiary, rysunki i sprawdzona technologia.",
                },
                {
                  title: "Montaż i serwis",
                  desc: "Instalacja, testy działania, wsparcie po odbiorze.",
                },
              ].map((item) => (
                <div key={item.title} className="tg-card reveal grid gap-3">
                  <p className="text-sm font-semibold text-tg-secondary">{item.title}</p>
                  <p className="text-sm text-tg-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Certyfikaty i standardy</h2>
              <p className="mt-3 text-tg-muted">
                Pracujemy na sprawdzonych materiałach i technologiach zabezpieczających stal. Dbamy o
                powtarzalność oraz bezpieczeństwo montażu.
              </p>
            </div>
            <div className="tg-card-lg reveal">
              <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Certyfikaty</p>
              <div className="mt-4 grid gap-2 text-sm text-tg-muted">
                <p>• [PN-EN ISO 9001]</p>
                <p>• [Kontrola jakości powłok]</p>
                <p>• [Bezpieczeństwo montażu]</p>
                <p>• [Zgodność systemów automatyki]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tg-alt py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Masz pytania?</h2>
              <p className="mt-3 text-tg-muted">
                Chętnie pokażemy przykładowe realizacje i doradzimy najlepszy wariant ogrodzenia.
              </p>
            </div>
            <div className="rounded-2xl border border-tg-line bg-tg-dark p-5 shadow-sm">
              <p className="text-sm text-tg-muted">Skontaktuj się bezpośrednio</p>
              <p className="mt-2 text-lg font-semibold text-tg-secondary">+48 000 000 000</p>
              <p className="text-sm text-tg-muted">kontakt@topgreen.pl</p>
              <a
                className="mt-4 inline-flex rounded-full bg-tg-primary hover:bg-tg-primary-hover px-5 py-2 text-sm font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)]"
                href="/kontakt"
              >
                Umów rozmowę
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
