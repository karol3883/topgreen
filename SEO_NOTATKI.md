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
- Obszar działania na teraz:
  - `łódzkie`: `Drzewica`, `Opoczno`, `Tomaszów Mazowiecki`
  - `mazowieckie`: `Nowe Miasto nad Pilicą`, `Przysucha`, `Białobrzegi`
  - `świętokrzyskie`: `Końskie`, `Stąporków`, `Skarżysko-Kamienna`

## Wdrożone Technicznie

- Unikalne metadata per strona
- `canonical`, `Open Graph`, `Twitter Card`
- `schema.org` dla strony, organizacji i local business
- Strony indeksowe: `/oferta`, `/obszar-dzialania`
- Strony regionalne:
  - `/obszar-dzialania/lodzkie`
  - `/obszar-dzialania/mazowieckie`
  - `/obszar-dzialania/swietokrzyskie`
- `robots.txt` i `sitemap.xml`
- Spójne dane kontaktowe w aplikacji
- Mapa Google na stronie kontaktu ustawiona na aktualny adres
- Przekierowanie `301` z dawnych URL-i `/realizacje` na `/obszar-dzialania`

## Najwyższy Priorytet Teraz

- Podmienić ogólne lub robocze claimy na realne dane
- Rozbudować treści ofert o bardziej konkretne, unikalne opisy
- Rozbudować obszar działania o mocniejsze treści regionalne
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
- Materiały lokalne:
  - realne zdjęcia z inwestycji w najbliższych regionach
  - lokalne frazy i pytania klientów z wybranych miast
  - potwierdzenie, które miasta warto rozwinąć później do osobnych landingów

## Backlog SEO

- Dodać dedykowane `og:image` dla:
  - `/`
  - `/oferta`
  - `/obszar-dzialania`
  - `/kontakt`
- Rozważyć osobne obrazy `og:image` dla ofert i stron lokalnych
- Dodać więcej linkowania wewnętrznego między ofertami i obszarem działania
- Rozwinąć regionalne sekcje o mocniejsze treści lokalne, ale bez klonowania miast
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
- `2026-04-18`: usunięto sekcję `/realizacje`, dodano `/obszar-dzialania` z województwami i listą bliskich miast oraz przekierowanie `301` na nowy URL
- `2026-04-18`: dodano osobne podstrony województw pod `/obszar-dzialania/[region]` z osobnym SEO, treścią i linkowaniem wewnętrznym
