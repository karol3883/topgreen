import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function RealizacjePage() {
  return (
    <>
      <Navbar activePath="/realizacje" />
      <main>
        <section className="py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Galeria</p>
              <h1 className="font-serif text-4xl leading-tight md:text-5xl">Projekty, które robią wrażenie</h1>
              <p className="mt-4 text-lg leading-7 text-neutral-600">
                Od nowoczesnych willi po osiedla i obiekty przemysłowe — zobacz wybrane realizacje.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
                  href="/kontakt"
                >
                  Umów wizję lokalną
                </a>
                <a className="rounded-full border border-neutral-200 px-6 py-3 font-semibold" href="/oferta">
                  Poznaj ofertę
                </a>
              </div>
            </div>
            <div className="tg-card-lg">
              <h3 className="font-serif text-2xl">Statystyki realizacji</h3>
              <div className="mt-6 grid gap-5 text-sm text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Ogrodzenia prywatne</span>
                  <strong className="text-tg-dark">62%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Obiekty komercyjne</span>
                  <strong className="text-tg-dark">28%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Inwestycje deweloperskie</span>
                  <strong className="text-tg-dark">10%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-dark">Realizacje</p>
                <h2 className="font-serif text-3xl md:text-4xl">Wybierz styl, który Cię inspiruje</h2>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-neutral-600">
                <span className="rounded-full bg-white px-4 py-2 shadow">Palisadowe</span>
                <span className="rounded-full bg-white px-4 py-2 shadow">Panelowe</span>
                <span className="rounded-full bg-white px-4 py-2 shadow">Lamelowe</span>
                <span className="rounded-full bg-white px-4 py-2 shadow">Bramy</span>
              </div>
            </div>
            <div className="grid auto-rows-[170px] gap-4 md:grid-cols-4">
              <div className="gallery-item reveal relative col-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-entrance.jpg"
                  alt="Wejście na posesję z ogrodzeniem"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 560px"
                />
              </div>
              <div className="gallery-item reveal relative row-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-fence.jpg"
                  alt="Ogrodzenie palisadowe przy domu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-detail.jpg"
                  alt="Zbliżenie profili stalowych"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-gate.jpg"
                  alt="Brama przesuwna na posesji"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
              <div className="gallery-item reveal relative col-span-2 overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-entrance.jpg"
                  alt="Ogrodzenie przy nowoczesnym domu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 560px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-detail.jpg"
                  alt="Detal wykończenia ogrodzenia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
              <div className="gallery-item reveal relative overflow-hidden rounded-2xl hover-lift">
                <Image
                  src="/images/hero-gate.jpg"
                  alt="Nowoczesna brama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 280px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 lg:grid-cols-3">
            <div className="tg-card">
              <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Opinie</p>
              <h3 className="mt-3 font-serif text-2xl">"Perfekcyjny montaż."</h3>
              <p className="mt-3 text-neutral-600">
                Ekipa zorganizowana, dokładna i terminowa. Ogrodzenie wygląda świetnie.
              </p>
              <p className="mt-4 text-sm font-semibold">Karolina, Wrocław</p>
            </div>
            <div className="tg-card">
              <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Opinie</p>
              <h3 className="mt-3 font-serif text-2xl">"Świetny projekt."</h3>
              <p className="mt-3 text-neutral-600">
                Pomogli dobrać kolor i automatykę. Całość prezentuje się premium.
              </p>
              <p className="mt-4 text-sm font-semibold">Marek, Poznań</p>
            </div>
            <div className="tg-card">
              <p className="text-sm uppercase tracking-[0.2em] text-tg-dark">Opinie</p>
              <h3 className="mt-3 font-serif text-2xl">"Dobry kontakt."</h3>
              <p className="mt-3 text-neutral-600">Jasne informacje i szybka wycena. Polecam współpracę.</p>
              <p className="mt-4 text-sm font-semibold">Aneta, Gdańsk</p>
            </div>
          </div>
        </section>

        <section className="bg-tg-black py-16 text-white">
          <div className="mx-auto flex w-[min(1140px,92vw)] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Zaprojektujemy coś podobnego u Ciebie</h2>
              <p className="mt-2 text-neutral-200">Skontaktuj się z nami i umów bezpłatny pomiar.</p>
            </div>
            <a
              className="rounded-full bg-tg-green px-6 py-3 font-semibold text-white shadow-lg shadow-green-200"
              href="/kontakt"
            >
              Umów pomiar
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
