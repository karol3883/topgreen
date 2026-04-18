# SEO Notatki

Roboczy plik do trzymania ustaleń, backlogu i brakujących materiałów pod SEO.
Aktualizować przy każdej większej zmianie treści, struktury URL albo danych firmy.

## Potwierdzone Dane

- Marka: `GAPYS`
- Domena kanoniczna: `https://gapys.pl`
- Adres: `Brudzewice 9, 26-315 Poświętne`
- E-mail: `gapys.biuro@gmail.com`
- Telefon: `(+48) 511 201 919`
- Plik konfiguracyjny aplikacji: [src/data/site-config.ts](/opt/topgreen/src/data/site-config.ts:1)

## Wdrożone Technicznie

- Unikalne metadata per strona
- `canonical`, `Open Graph`, `Twitter Card`
- `schema.org` dla strony, organizacji i local business
- Strony indeksowe: `/oferta`, `/realizacje`
- `robots.txt` i `sitemap.xml`
- Spójne dane kontaktowe w aplikacji
- Mapa Google na stronie kontaktu ustawiona na aktualny adres

## Najwyższy Priorytet Teraz

- Podmienić ogólne lub robocze claimy na realne dane
- Rozbudować treści ofert o bardziej konkretne, unikalne opisy
- Rozbudować realizacje miejskie o realne case studies
- Podmienić galerię z ogólnych przykładów na prawdziwe realizacje
- Przygotować dedykowane obrazy social share dla najważniejszych stron

## Braki Treściowe Do Uzupełnienia

- Zweryfikowane liczby:
  - lata doświadczenia
  - liczba realizacji
  - procent poleceń / satysfakcji
- Realne opinie klientów z zgodą na publikację
- Prawdziwe zdjęcia dla:
  - strony głównej
  - ofert
  - realizacji miejskich
  - galerii
- Konkretne informacje handlowe:
  - obszar działania
  - typowi klienci
  - proces współpracy
  - zakres usług dodatkowych

## Backlog SEO

- Dodać dedykowane `og:image` dla:
  - `/`
  - `/oferta`
  - `/realizacje`
  - `/kontakt`
- Rozważyć osobne obrazy `og:image` dla ofert i realizacji
- Dodać więcej linkowania wewnętrznego między ofertami i realizacjami
- Dodać więcej treści lokalnych pod miasta / regiony
- Sprawdzić po wdrożeniu:
  - Google Search Console
  - Google Business Profile
  - indeksację sitemap
  - ewentualne błędy canonicali

## Uwagi Operacyjne

- Jeśli zmieniają się dane firmy, pierwsze miejsce do aktualizacji to [src/data/site-config.ts](/opt/topgreen/src/data/site-config.ts:1)
- Po zmianie domeny trzeba zaktualizować:
  - [src/data/site-config.ts](/opt/topgreen/src/data/site-config.ts:1)
  - [public/robots.txt](/opt/topgreen/public/robots.txt:1)
  - [public/sitemap.xml](/opt/topgreen/public/sitemap.xml:1)
- Po większych zmianach SEO uruchamiać:
  - `npm run lint`
  - `npm run build`

## Dziennik

- `2026-04-18`: wdrożono podstawy technicznego SEO, uporządkowano metadata, canonicale, dane strukturalne, `robots.txt`, `sitemap.xml`, strony `/oferta` i `/realizacje`
- `2026-04-18`: zaktualizowano dane kontaktowe na `Brudzewice 9, 26-315 Poświętne`, `gapys.biuro@gmail.com`, `(+48) 511 201 919`
