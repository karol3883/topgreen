import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] py-12 text-white">
      <div className="mx-auto grid w-[min(1140px,92vw)] gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image className="mb-4 w-[140px]" src="/img.png" alt="TopGreen logo" width={140} height={48} />
          <p className="text-neutral-400">
            TopGreen • projektowanie i produkcja ogrodzeń, bram oraz systemów posesyjnych.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Kontakt</h4>
          <p className="mt-3">ul. Zielona 12, 00-950 Warszawa</p>
          <p>
            <a href="tel:+48664390025">+48 664 390 025</a>
          </p>
          <p>
            <a href="mailto:biuro@topgreen.pl">biuro@topgreen.pl</a>
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Obsługa</h4>
          <p className="mt-3">Wycena</p>
          <p>Montaż</p>
          <p>Serwis</p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Social</h4>
          <p className="mt-3">Instagram</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="mx-auto mt-8 w-[min(1140px,92vw)] border-t border-neutral-800 pt-4 text-center text-sm text-neutral-500">
        © 2026 TopGreen. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
