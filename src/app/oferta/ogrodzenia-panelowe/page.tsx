import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const gallery = [
  { src: "/images/offers/thumbs/fence-gate-iron-1-640.jpg", label: "Obiekty firmowe" },
  { src: "/images/offers/thumbs/fence-brick-1-640.jpg", label: "Montaż liniowy" },
  { src: "/images/offers/thumbs/gate-black-1-640.jpg", label: "Strefy wejściowe" },
];

const blurDataURL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='9' viewBox='0 0 16 9'><rect width='16' height='9' fill='%23d9dee2'/></svg>";

export default function OgrodzeniaPanelowePage() {
  return (
    <>
      <Navbar activePath="/oferta" />
      <main className="pb-16">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.08),transparent_40%),repeating-linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_1px,transparent_1px,transparent_30px)]"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-b from-transparent to-[color:var(--color-tg-alt)]"></div>
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-tg-muted">Oferta</p>
              <h1 className="font-serif text-2xl md:text-3xl">Ogrodzenia panelowe</h1>
              <p className="mt-4 text-lg text-tg-muted">
                Ekonomiczne rozwiązanie dla firm i obiektów usługowych. Trwałe panele 2D/3D z szybkim
                montażem i ochroną antykorozyjną.
              </p>
            </div>
            <div className="tg-card-lg reveal">
              <h2 className="font-serif text-2xl">Parametry</h2>
              <div className="mt-4 grid gap-3 text-sm text-tg-muted">
                <div className="flex items-center justify-between border-b border-tg-line pb-2">
                  <span>Typ</span>
                  <span className="font-semibold">Panele 2D / 3D</span>
                </div>
                <div className="flex items-center justify-between border-b border-tg-line pb-2">
                  <span>Powłoka</span>
                  <span className="font-semibold">Ocynk + proszek</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Montaż</span>
                  <span className="font-semibold">Szybka instalacja</span>
                </div>
              </div>
              <a
                className="mt-6 inline-flex rounded-full bg-tg-primary hover:bg-tg-primary-hover px-5 py-2 text-sm font-semibold text-[#141416] shadow-[0_12px_28px_rgba(212,175,55,0.24)]"
                href="/kontakt"
              >
                Zapytaj o wycenę
              </a>
            </div>
          </div>
        </section>
        <section className="bg-tg-alt py-14 md:py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-tg-muted">Galeria</p>
                <h2 className="mt-2 font-serif text-3xl">Panele 2D i 3D w praktyce</h2>
              </div>
              <p className="text-sm text-tg-muted">[Zdjęcia poglądowe]</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.label} className="steel-panel relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    loading="lazy"
                    className="object-cover saturate-[0.85] contrast-[1.05] brightness-[0.95]"
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full/90 px-3 py-1 text-xs text-tg-muted shadow">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
