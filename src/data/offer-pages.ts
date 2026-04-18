import type { OfferDetailData } from "@/components/OfferDetail";

export type OfferPage = OfferDetailData & {
  hero: string;
  intro: string;
  seoTitle: string;
};

const commonGallery = [
  { src: "/images/hero-gate.jpg", alt: "Szerokie ujecie frontu posesji z nowoczesna forma i czysta geometria." },
  { src: "/images/hero-entrance.jpg", alt: "Wejscie i strefa frontowa utrzymane w jednej linii wzorniczej." },
  { src: "/images/hero-fence.jpg", alt: "Poziomy kadr pokazujacy caly odcinek frontowy i proporcje ukladu." },
  { src: "/images/hero-detail.jpg", alt: "Detal wykonania, wykonczenia i spasowania elementow stalowych." },
] as const;

export const offerPages: Record<string, OfferPage> = {
  "ogrodzenia-palisadowe": {
    offer: "Ogrodzenia palisadowe",
    category: "Ogrodzenia nowoczesne",
    hero: "Ogrodzenia palisadowe",
    seoTitle: "Ogrodzenia palisadowe premium | GAPYS",
    intro:
      "System palisadowy dla inwestorow, ktorzy chca zachowac prosta geometrie, nowoczesny detal i spojny charakter calego frontu posesji.",
    title: "Nowoczesne ogrodzenie palisadowe z wyrazna, pozioma ekspozycja kadru",
    description:
      "Oferta skupiona na frontach posesji, w ktorych liczy sie elegancki rytm pionowych profili, spokojna kompozycja i dopasowanie do architektury domu. To rozwiazanie dla klientow, ktorzy chca efektu premium bez przypadkowych podzialow i zbyt ciezkiej formy.",
    scope: [
      "Projekt ukladu frontowego i podzialow przeseł",
      "Dopasowanie furtki i bramy do jednej linii wzorniczej",
      "Dobor kolorystyki oraz wyrazistosci wypelnienia",
      "Montaż i regulacja calego zestawu",
    ],
    gallery: [...commonGallery],
  },
  "ogrodzenia-panelowe": {
    offer: "Ogrodzenia panelowe",
    category: "Systemy panelowe",
    hero: "Ogrodzenia panelowe",
    seoTitle: "Ogrodzenia panelowe na posesje | GAPYS",
    intro:
      "Rozwiazanie dla klientow, ktorzy chca polaczyc szybki montaz, dobra estetyke i przewidywalny budzet inwestycji.",
    title: "Ogrodzenia panelowe do posesji prywatnych i obiektow uzytkowych",
    description:
      "System panelowy sprawdza sie tam, gdzie wazna jest prostota, trwalosc i klarowny koszt realizacji. Uklad budujemy tak, aby nawet prostsze rozwiazanie wygladalo czysto, proporcjonalnie i nie sprawialo wrazenia przypadku.",
    scope: [
      "Panele i slupki systemowe dopasowane do obwodu dzialki",
      "Furtki techniczne i strefy serwisowe",
      "Montaż liniowy oraz ustawienie osi calego ukladu",
      "Rozszerzenie o elementy wjazdowe i wejściowe",
    ],
    gallery: [...commonGallery],
  },
  "brama-przesuwna": {
    offer: "Brama przesuwna",
    category: "Strefa wjazdu",
    hero: "Brama przesuwna",
    seoTitle: "Brama przesuwna z automatyką | GAPYS",
    intro:
      "Wjazd dla klientow, ktorzy potrzebuja wygody codziennego uzytkowania, stabilnej pracy i nowoczesnej formy frontu posesji.",
    title: "Brama przesuwna jako glowny element nowoczesnego frontu",
    description:
      "To rozwiazanie dla inwestycji, w ktorych priorytetem jest wygoda i oszczednosc miejsca przy zachowaniu mocnego, spokojnego efektu wizualnego. Calosc projektujemy zwykle razem z furtka i przęsłami, tak aby strefa frontowa byla jednym uporzadkowanym ukladem.",
    scope: [
      "Dobor swiatla wjazdu i konstrukcji bramy",
      "Automatyka, sterowanie i elementy bezpieczenstwa",
      "Spiecie bramy z furtka i ogrodzeniem w jednej linii",
      "Montaż, strojenie i uruchomienie systemu",
    ],
    gallery: [...commonGallery],
  },
  "brama-skrzydlowa": {
    offer: "Brama skrzydłowa",
    category: "Klasyczny wjazd",
    hero: "Brama skrzydłowa",
    seoTitle: "Brama skrzydłowa na posesję | GAPYS",
    intro:
      "Rozwiazanie dla inwestycji, w ktorych najlepiej sprawdza sie tradycyjna forma otwierania i klarowny uklad strefy wejsciowej.",
    title: "Brama skrzydlowa z naciskiem na proporcje i czysty detal",
    description:
      "Klasyczny uklad wjazdu nadal moze wygladac nowoczesnie, jezeli proporcje skrzydel, slupkow i wypelnienia sa dobrze ustawione. Ta oferta jest kierowana do klientow, ktorzy chca czytelnej konstrukcji i spokojnej, reprezentacyjnej formy.",
    scope: [
      "Konfiguracja skrzydel i szerokosci wjazdu",
      "Dopasowanie furtki i przeseł bocznych",
      "Opcjonalna automatyka i kontrola dostepu",
      "Kompleksowy montaz i regulacja pracy skrzydel",
    ],
    gallery: [...commonGallery],
  },
  "furtki-wejsciowe": {
    offer: "Furtki wejściowe",
    category: "Strefa wejścia",
    hero: "Furtki wejściowe",
    seoTitle: "Furtki wejściowe na wymiar | GAPYS",
    intro:
      "Rozwiazanie dla klientow, ktorzy chca uporzadkowac wejscie na posesje i zachowac spojny charakter z brama oraz ogrodzeniem.",
    title: "Furtki wejsciowe dopasowane do calej kompozycji frontu",
    description:
      "Dobra furtka nie jest dodatkiem, tylko czescia calego ukladu. Projektujemy ja tak, aby wspolgrala z rytmem przeseł, detalem frontu i codzienna wygoda korzystania, lacznie z osprzetem, domofonem czy elektrozaczepem.",
    scope: [
      "Projekt furtki zgodny z linia ogrodzenia i bramy",
      "Dobor osprzetu, zamka i pochwytow",
      "Przygotowanie pod domofon lub kontrole dostepu",
      "Montaż i regulacja calego wejscia",
    ],
    gallery: [...commonGallery],
  },
  "automatyka-i-kontrola": {
    offer: "Automatyka i kontrola",
    category: "Napędy i sterowanie",
    hero: "Automatyka i kontrola",
    seoTitle: "Automatyka do bram i furtek | GAPYS",
    intro:
      "Systemy sterowania dla bram i furtek, ktore poprawiaja wygode uzytkowania, bezpieczenstwo oraz codzienna powtarzalnosc dzialania.",
    title: "Automatyka do strefy wjazdu i wejscia bez przypadkowych rozwiazan",
    description:
      "Dobrze dobrana automatyka ma dzialac przewidywalnie i nie wymuszac kompromisow na etapie codziennego korzystania. W tej ofercie skupiamy sie na napedach, sterowaniu, zabezpieczeniach i logicznym spieciu calego systemu wjazdowego.",
    scope: [
      "Napedy do bram przesuwnych i skrzydlowych",
      "Sterowanie, piloty, fotokomorki i sygnalizacja",
      "Integracja z furtka, domofonem i kontrola dostepu",
      "Konfiguracja, uruchomienie i testy pracy",
    ],
    gallery: [...commonGallery],
  },
};
