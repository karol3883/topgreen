import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-tg-line bg-tg-alt py-14 text-tg-secondary">
      <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-16 items-center justify-center rounded-xl bg-tg-alt/80 px-2">
              <Image src="/img.png" alt="TopGreen logo" width={96} height={36} />
            </span>
            <div>
              <p className="text-base font-semibold tracking-wide">TopGreen</p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-tg-muted">Stal & architektura</p>
            </div>
          </div>
          <p className="text-tg-muted">
            Projektujemy i montujemy ogrodzenia stalowe, bramy i systemy wejściowe.
            Działamy kompleksowo — od pomiaru po serwis.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-tg-muted">
            <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Powłoki antracyt</span>
            <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Produkcja lokalna</span>
            <span className="rounded-full border border-tg-line bg-tg-dark px-3 py-1">Gwarancja jakości</span>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg">Kontakt</h4>
          <p className="mt-4 text-tg-muted">[Adres firmy]</p>
          <p className="text-tg-muted">[Kod, Miasto]</p>
          <p className="mt-3">
            <a className="text-tg-secondary transition hover:text-tg-primary" href="tel:+48000000000">
              +48 000 000 000
            </a>
          </p>
          <p>
            <a className="text-tg-secondary transition hover:text-tg-primary" href="mailto:kontakt@topgreen.pl">
              kontakt@topgreen.pl
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Obsługa</h4>
          <p className="mt-4 text-tg-muted">Wycena i projekt</p>
          <p className="text-tg-muted">Montaż i automatyka</p>
          <p className="text-tg-muted">Serwis posprzedażowy</p>
          <p className="mt-4 text-sm text-tg-muted">PN–PT: 08:00–17:00</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-[min(1140px,92vw)] flex-col gap-3 border-t border-tg-line pt-5 text-sm text-tg-muted md:flex-row md:items-center md:justify-between">
        <span>© 2026 TopGreen. Wszelkie prawa zastrzeżone.</span>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-tg-primary" href="/polityka-prywatnosci">
            Polityka prywatności
          </a>
          <a className="transition hover:text-tg-primary" href="/kontakt">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
