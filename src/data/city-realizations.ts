import type { CityRealization } from "@/components/CityRealizationDetail";

export const cityPages: Record<string, CityRealization> = {
  warszawa: {
    city: "Warszawa",
    region: "mazowieckie",
    title: "Brama przesuwna z furtka i pelnym frontem",
    seoTitle: "Warszawa - brama przesuwna z furtka | GAPYS",
    category: "Realizacja premium",
    description:
      "Nowoczesny front posesji oparty o brame przesuwna, furtke i spokojny rytm pionowych profili. W tej realizacji kluczowe bylo dopasowanie podzialow do elewacji, zachowanie lekkiej formy i uporzadkowanie calej strefy wjazdu.",
    scope: [
      "Brama przesuwna z automatyka",
      "Furtka wejsciowa z dopasowanym wzorem",
      "Palisada frontowa i odcinki boczne",
      "Montaż, regulacja i finalne strojenie systemu",
    ],
    gallery: [
      { src: "/images/hero-gate.jpg", alt: "Glowne ujecie frontu z brama przesuwna przy nowoczesnej elewacji." },
      { src: "/images/hero-entrance.jpg", alt: "Strefa wejscia z furtka i dopasowanymi slupkami frontowymi." },
      { src: "/images/hero-detail.jpg", alt: "Detal profili i spokojnego wykonczenia w ciemnym kolorze." },
      { src: "/images/hero-fence.jpg", alt: "Szerszy kadr pokazujacy spojny odcinek ogrodzenia frontowego." },
    ],
  },
  lublin: {
    city: "Lublin",
    region: "lubelskie",
    title: "Brama skrzydlowa i uporzadkowane wejscie na posesje",
    seoTitle: "Lublin - brama skrzydlowa i furtka | GAPYS",
    category: "Realizacja jednorodzinna",
    description:
      "Projekt przygotowany dla inwestycji, w ktorej najwazniejsza byla czytelna kompozycja wejscia, wygodna codzienna obsluga i nowoczesna forma bez przesadnego ciezaru wizualnego.",
    scope: [
      "Brama skrzydlowa dla szerokiego frontu",
      "Furtka z prostym detalem i osprzetem",
      "Dobor przeseł do bryly budynku",
      "Kompleksowy montaz calego ukladu",
    ],
    gallery: [
      { src: "/images/hero-entrance.jpg", alt: "Ujecie furtki i wejscia z nowoczesnym detalem przy elewacji." },
      { src: "/images/hero-fence.jpg", alt: "Front posesji z lekkim rytmem pionow i spokojna geometria." },
      { src: "/images/hero-detail.jpg", alt: "Zblizenie na wykonczenie skrzydla i dopracowany detal." },
      { src: "/images/hero-gate.jpg", alt: "Szersze ujecie strefy wjazdu i ustawienia calego frontu." },
    ],
  },
  lodz: {
    city: "Łódź",
    region: "łódzkie",
    title: "Wjazd z brama przesuwna dopasowany do nowoczesnej bryly",
    seoTitle: "Łódź - nowoczesna brama przesuwna | GAPYS",
    category: "Front posesji",
    description:
      "Realizacja skupiona na tym, zeby front domu wygladal lekko i nowoczesnie, a jednoczesnie zachowal odpowiednia prywatnosc. Cale rozwiazanie zostalo zlozone jako jedna linia wzornicza.",
    scope: [
      "Brama przesuwna z napedem",
      "Dopasowana furtka i slupki",
      "Spójny uklad przeseł frontowych",
      "Konfiguracja i uruchomienie automatyki",
    ],
    gallery: [
      { src: "/images/hero-gate.jpg", alt: "Glowne ujecie bramy przesuwnej na tle wspolczesnej bryly domu." },
      { src: "/images/hero-detail.jpg", alt: "Detal pionowych profili i wykonczenia powierzchni." },
      { src: "/images/hero-fence.jpg", alt: "Widok calego odcinka frontowego z zachowana proporcja." },
      { src: "/images/hero-entrance.jpg", alt: "Strefa wejscia z furtka i detalami w jednej linii stylistycznej." },
    ],
  },
  kielce: {
    city: "Kielce",
    region: "świętokrzyskie",
    title: "Kompletny system ogrodzenia z akcentem na wygode uzytkowania",
    seoTitle: "Kielce - ogrodzenie, brama i furtka | GAPYS",
    category: "Kompletna realizacja",
    description:
      "W tej realizacji priorytetem bylo polaczenie estetyki premium z wygodnym codziennym korzystaniem ze strefy wejscia i wjazdu. Efekt koncowy jest spokojny, uporzadkowany i dopasowany do charakteru domu.",
    scope: [
      "Brama i furtka w jednym standardzie wykonania",
      "Ogrodzenie frontowe z powtarzalnym rytmem",
      "Dopasowanie kolorystyki do elewacji",
      "Montaż calego ukladu i finalna regulacja",
    ],
    gallery: [
      { src: "/images/hero-fence.jpg", alt: "Glowne ujecie kompletnego frontu z ogrodzeniem i strefa wjazdu." },
      { src: "/images/hero-gate.jpg", alt: "Brama jako dominujacy element calej kompozycji frontowej." },
      { src: "/images/hero-entrance.jpg", alt: "Wejscie na posesje z dopracowana furtka i detalem slupkow." },
      { src: "/images/hero-detail.jpg", alt: "Bliski kadr na wykonczenie i spasowanie elementow stalowych." },
    ],
  },
};
